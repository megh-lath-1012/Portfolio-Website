"use client";

import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import useMousePosition from '@/hooks/useMousePosition';

export default function VectorFieldBackground() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePos = useMousePosition();
  const mouseRef = useRef({ x: 0, y: 0 });

  useEffect(() => {
    mouseRef.current = mousePos;
  }, [mousePos]);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    
    // Orthographic camera for a 2D-like perspective
    const frustumSize = 1000;
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.OrthographicCamera(
      -frustumSize * aspect / 2,
      frustumSize * aspect / 2,
      frustumSize / 2,
      -frustumSize / 2,
      0.1,
      1000
    );
    camera.position.z = 5;

    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance' 
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    containerRef.current.appendChild(renderer.domElement);

    // --- 2. Create the Grid using InstancedMesh ---
    const dashLength = 16;
    const dashThickness = 1.2; 
    const geometry = new THREE.PlaneGeometry(dashThickness, dashLength);

    const material = new THREE.MeshBasicMaterial({ 
      color: new THREE.Color('#ffffff'), 
      transparent: true,
      opacity: 0.8, 
      depthWrite: false
    });

    const spacing = 35; 
    const columns = Math.ceil(window.innerWidth / spacing) + 4; 
    const rows = Math.ceil(window.innerHeight / spacing) + 4;
    const count = columns * rows;

    const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
    
    const dummy = new THREE.Object3D();
    const dashPositions = new Float32Array(count * 3);
    const dashBaseOrientations = new Float32Array(count); 
    const dashCurrentRotations = new Float32Array(count); 
    const dashRotationVelocities = new Float32Array(count); 
    
    const colors = new Float32Array(count * 3);
    const baseColor = new THREE.Color('#94a3b8'); // Slightly darker for light mode, light for dark
    const activeColor = new THREE.Color('#f97316'); // Primary orange
    const currentColor = new THREE.Color(); 

    let i = 0;
    const startX = -((columns * spacing) / 2);
    const startY = -((rows * spacing) / 2);

    for (let x = 0; x < columns; x++) {
      for (let y = 0; y < rows; y++) {
        const posX = startX + x * spacing;
        const posY = startY + y * spacing;
        
        const jitterX = (Math.random() - 0.5) * (spacing * 0.2);
        const jitterY = (Math.random() - 0.5) * (spacing * 0.2);
        
        const finalX = posX + jitterX;
        const finalY = posY + jitterY;

        dashPositions[i * 3] = finalX;
        dashPositions[i * 3 + 1] = finalY;
        dashPositions[i * 3 + 2] = 0;
        
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
    const mouseWorldPos = new THREE.Vector3();

    const mouseNDC = new THREE.Vector2(-1000, -1000);

    const animate = () => {
      requestAnimationFrame(animate);
      
      const time = clock.getElapsedTime();

      // Update NDC from the hook-provided mousePos (which is stable if we don't depend on it for the effect re-run)
      // Actually, since this effect doesn't depend on mousePos, we can just access mousePos.x/y here 
      // but it might be stale if the closure is old. 
      // Better way: use a ref for mouse position.
      
      mouseNDC.set(
        (mouseRef.current.x / window.innerWidth) * 2 - 1,
        -(mouseRef.current.y / window.innerHeight) * 2 + 1
      );
      
      mouseWorldPos.set(mouseNDC.x, mouseNDC.y, 0).unproject(camera);

      let idx = 0;
      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          
          const posX = dashPositions[idx * 3];
          const posY = dashPositions[idx * 3 + 1];
          
          const dx = mouseWorldPos.x - posX;
          const dy = mouseWorldPos.y - posY;
          const distanceToMouse = Math.sqrt(dx * dx + dy * dy);
          
          const maxInfluenceDist = 250; 
          
          const driftAngle = Math.PI / 4 + (Math.sin(time * 0.2 + posX * 0.01 + posY * 0.01) * 0.1);
          const baseRotation = dashBaseOrientations[idx] * 0.1 + driftAngle; 
          
          let targetRotation = baseRotation;
          let scaleY = 1.0;
          let thickness = 1.0; 
          currentColor.copy(baseColor);
          
          // Check if parent has .dark class to adjust base color
          const isDark = document.documentElement.classList.contains('dark');
          if (isDark) {
            currentColor.set('#475569'); 
          } else {
            currentColor.set('#cbd5e1'); 
          }

          if (distanceToMouse < maxInfluenceDist && distanceToMouse > 0) {
            const influence = Math.pow(1 - (distanceToMouse / maxInfluenceDist), 1.2);
            const angleToMouse = Math.atan2(dy, dx) + Math.PI / 2;
            
            targetRotation = angleToMouse;
            thickness = 1.0 + (influence * 1.5); 
            scaleY = 1.0 + (influence * 0.3);
            currentColor.lerp(activeColor, Math.min(influence * 1.5, 1.0));
          }

          const stiffness = 0.1; 
          const damping = 0.8;   
          
          let diff = targetRotation - dashCurrentRotations[idx];
          while (diff > Math.PI) diff -= Math.PI * 2;
          while (diff < -Math.PI) diff += Math.PI * 2;
          
          dashRotationVelocities[idx] += diff * stiffness;
          dashRotationVelocities[idx] *= damping;
          dashCurrentRotations[idx] += dashRotationVelocities[idx];

          dummy.position.set(posX, posY, 0);
          dummy.rotation.set(0, 0, dashCurrentRotations[idx]);
          dummy.scale.set(thickness, scaleY, 1);
          dummy.updateMatrix();
          
          instancedMesh.setMatrixAt(idx, dummy.matrix);
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

    const handleResize = () => {
      const aspect = window.innerWidth / window.innerHeight;
      camera.left = -frustumSize * aspect / 2;
      camera.right = frustumSize * aspect / 2;
      camera.top = frustumSize / 2;
      camera.bottom = -frustumSize / 2;
      camera.updateProjectionMatrix();

      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    return () => {
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
      className="fixed inset-0 pointer-events-none z-[-1] bg-transparent"
    />
  );
}
