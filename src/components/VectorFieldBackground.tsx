"use client";

import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

export default function VectorFieldBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // High-performance Three.js setup will go here in useEffect
  useEffect(() => {
    if (!containerRef.current) return;
    
    // Mutable mouse position to avoid re-running effect
    const mousePos = { x: -1000, y: -1000 };
    
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.x = e.clientX;
      mousePos.y = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // --- 1. Basic Scene Setup ---
    const scene = new THREE.Scene();
    
    // We want a very light gray/off-white background
    scene.background = new THREE.Color('#FAFAFA'); 
    
    // Use an orthographic camera for a 2D grid feel
    const aspect = window.innerWidth / window.innerHeight;
    const frustumSize = 1000;
    const camera = new THREE.OrthographicCamera(
      frustumSize * aspect / -2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      frustumSize / -2,
      0.1,
      1000
    );
    camera.position.z = 100;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // optimize for high DPI
    containerRef.current.appendChild(renderer.domElement);

    // --- 2. Create the Grid using InstancedMesh ---
    // InstancedMesh is crucial for drawing thousands of copies of the same geometry efficiently.
    
    // The "dash" geometry: a very thin, elongated 2D plane (dash/stroke)
    const dashLength = 16;
    const dashThickness = 1.2; 
    const geometry = new THREE.PlaneGeometry(dashThickness, dashLength);
    // Rotate of geometry not needed if we orient it correctly in matrix

    // Base material: very faint, almost invisible until interacted with
    const material = new THREE.MeshBasicMaterial({ 
      color: new THREE.Color('#ffffff'), // Base is white, color is overridden by instanceColor
      transparent: true,
      opacity: 0.8, // We control individual "opacity" by blending base color with background
      depthWrite: false
    });

    const spacing = 35; // Space between dashes
    const columns = Math.ceil(window.innerWidth / spacing) + 4; // Add padding
    const rows = Math.ceil(window.innerHeight / spacing) + 4;
    const count = columns * rows;

    const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
    
    // We need to keep track of the original positions to calculate distance to mouse efficiently
    const dummy = new THREE.Object3D();
    const dashPositions = new Float32Array(count * 3);
    const dashBaseOrientations = new Float32Array(count); 
    const dashCurrentRotations = new Float32Array(count); // Current state for physics
    const dashRotationVelocities = new Float32Array(count); // Velocity for physics
    
    // Also need custom colors for each instance to handle saturation/opacity changes
    const colors = new Float32Array(count * 3);
    const baseColor = new THREE.Color('#E0E0E0'); // Faint grey (Requested)
    const activeColor = new THREE.Color('#4285F4'); // vibrant blue (Requested)
    const currentColor = new THREE.Color(); // For reuse in loop

    let i = 0;
    const startX = -((columns * spacing) / 2);
    const startY = -((rows * spacing) / 2);

    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const posX = startX + x * spacing;
        const posY = startY + y * spacing;
        
        // Add a tiny bit of jitter to the grid so it's not perfectly rigid
        const jitterX = (Math.random() - 0.5) * (spacing * 0.2);
        const jitterY = (Math.random() - 0.5) * (spacing * 0.2);
        
        const finalX = posX + jitterX;
        const finalY = posY + jitterY;

        dashPositions[i * 3] = finalX;
        dashPositions[i * 3 + 1] = finalY;
        dashPositions[i * 3 + 2] = 0;
        
        // Initial random base orientation
        const initialRot = Math.random() * Math.PI * 2;
        dashBaseOrientations[i] = initialRot;
        dashCurrentRotations[i] = initialRot;
        dashRotationVelocities[i] = 0;

        dummy.position.set(finalX, finalY, 0);
        dummy.updateMatrix();
        instancedMesh.setMatrixAt(i, dummy.matrix);
        
        baseColor.toArray(colors, i * 3);

        i++;
      }
    }
    
    instancedMesh.instanceColor = new THREE.InstancedBufferAttribute(colors, 3);
    scene.add(instancedMesh);

    // --- 3. Animation Loop ---
    const clock = new THREE.Clock();
    
    // We need to map mouse screen coordinates to world coordinates
    const mouseWorldPos = new THREE.Vector3();

    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();

      // Convert mouse screen pos (0 to innerWidth) to Normalized Device Coordinates (-1 to +1)
      const mouseNDC = new THREE.Vector2(
        (mousePos.x / window.innerWidth) * 2 - 1,
        -(mousePos.y / window.innerHeight) * 2 + 1
      );
      
      // Convert NDC to world coordinates
      mouseWorldPos.set(mouseNDC.x, mouseNDC.y, 0).unproject(camera);

      // Update instances
      let idx = 0;
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          
          const posX = dashPositions[idx * 3];
          const posY = dashPositions[idx * 3 + 1];
          
          // Vector from dash to mouse
          const dx = mouseWorldPos.x - posX;
          const dy = mouseWorldPos.y - posY;
          const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
          
          const maxInfluenceDist = 250; // Requested 250px Force Field Radius
          
          // Organic drift: slow rotation over time or "downward tilt" ripple
          const driftAngle = Math.PI / 4 + (Math.sin(time * 0.2 + posX * 0.01 + posY * 0.01) * 0.1);
          const baseRotation = dashBaseOrientations[idx] * 0.1 + driftAngle; 
          
          let targetRotation = baseRotation;
          let scaleY = 1.0;
          let thickness = 1.0; // Line weight
          currentColor.copy(baseColor);
          
          if (distanceToMouse < maxInfluenceDist && distanceToMouse > 0) {
            // How strong is the influence?
            const influence = Math.pow(1 - (distanceToMouse / maxInfluenceDist), 1.2);
            
            // Angle pointing directly at mouse (+ compensation for Plane orientation)
            const angleToMouse = Math.atan2(dy, dx) + Math.PI / 2;
            
            targetRotation = angleToMouse;
            
            // "Lift" Visual: Increase thickness (X-scale) and slight height (Y-scale)
            thickness = 1.0 + (influence * 1.5); // 1px to 2.5px equivalent
            scaleY = 1.0 + (influence * 0.3);
            
            // Color shifts towards vibrant active color
            currentColor.lerp(activeColor, Math.min(influence * 1.5, 1.0));
          }

          // --- Elastic Physics (Velocity-Based) ---
          const stiffness = 0.15; // Requested
          const damping = 0.85;   // Requested
          
          // Calculate angular distance with wrap-around check
          let diff = targetRotation - dashCurrentRotations[idx];
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          
          dashRotationVelocities[idx] += diff * stiffness;
          dashRotationVelocities[idx] *= damping;
          dashCurrentRotations[idx] += dashRotationVelocities[idx];

          // Apply transformations via dummy object
          dummy.position.set(posX, posY, 0);
          dummy.rotation.set(0, 0, dashCurrentRotations[idx]);
          dummy.scale.set(thickness, scaleY, 1);
          dummy.updateMatrix();
          
          instancedMesh.setMatrixAt(idx, dummy.matrix);
          
          // Update colors
          currentColor.toArray(colors, idx * 3);

          idx++;
        }
      }

      instancedMesh.instanceMatrix.needsUpdate = true;
      if (instancedMesh.instanceColor) {
        instancedMesh.instanceColor.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // --- 4. Handle Resize ---
    const handleResize = () => {
      // For orthographic, we update the frustum based on new aspect ratio
      const aspect = window.innerWidth / window.innerHeight;
      camera.left = -frustumSize * aspect / 2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = -frustumSize / 2;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []); 

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 pointer-events-none z-[-1] bg-[#FAFAFA]"
    />
  );
}
