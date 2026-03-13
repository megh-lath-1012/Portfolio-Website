"use client";

import React, { useEffect, useRef } from "react";
import useMousePosition from "@/hooks/useMousePosition";

interface Dash {
  x: number;
  y: number;
  baseRot: number;
  currentRot: number;
  rotVel: number;
  baseLength: number;
}

export default function ElasticBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mousePos = useMousePosition();
  const mouseRef = useRef({ x: -1000, y: -1000 });

  useEffect(() => {
    mouseRef.current = mousePos;
  }, [mousePos]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let dashes: Dash[] = [];
    
    // Physics & Grid Settings
    const spacing = 45; // Grid spacing
    const maxInfluenceDist = 400; // Radius where mouse has magnetic effect
    const visibilityOuterRadius = 450; // Max radius where particles are visible
    const visibilityInnerRadius = 60;  // Radius near center where particles disappear
    
    const stiffness = 0.08; // Smooth spring stiffness
    const damping = 0.82;   // Smooth spring damping
    const dashThickness = 2.5;

    const baseColorLight = [203, 213, 225]; // #cbd5e1
    const baseColorDark = [71, 85, 105];    // #475569
    const activeColor = [249, 115, 22];     // #f97316

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth : window.innerWidth;
      canvas.height = parent ? parent.clientHeight : window.innerHeight;
      initGrid();
    };

    const initGrid = () => {
      dashes = [];
      const columns = Math.ceil(canvas.width / spacing) + 4;
      const rows = Math.ceil(canvas.height / spacing) + 4;
      
      const startX = -((columns * spacing) / 2) + canvas.width / 2;
      const startY = -((rows * spacing) / 2) + canvas.height / 2;

      for (let x = 0; x < columns; x++) {
        for (let y = 0; y < rows; y++) {
          const posX = startX + x * spacing;
          const posY = startY + y * spacing;

          // Add slight jitter for organic look
          const jitterX = (Math.random() - 0.5) * (spacing * 0.3);
          const jitterY = (Math.random() - 0.5) * (spacing * 0.3);

          dashes.push({
            x: posX + jitterX,
            y: posY + jitterY,
            baseRot: 0,
            currentRot: 0,
            rotVel: 0,
            baseLength: Math.random() * 12 + 6, // Varying lengths (6 to 18px)
          });
        }
      }
    };

    const lerpColor = (c1: number[], c2: number[], t: number) => {
      return [
        Math.round(c1[0] + (c2[0] - c1[0]) * t),
        Math.round(c1[1] + (c2[1] - c1[1]) * t),
        Math.round(c1[2] + (c2[2] - c1[2]) * t),
      ];
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");
      const baseColor = isDark ? baseColorDark : baseColorLight;
      const time = Date.now() * 0.002;

      const mx = mouseRef.current.x === -1000 ? canvas.width / 2 : mouseRef.current.x;
      const my = mouseRef.current.y === -1000 ? canvas.height / 3 : mouseRef.current.y;

      dashes.forEach((dash) => {
        const dx = mx - dash.x;
        const dy = my - dash.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        let targetRot = dash.baseRot;
        let scale = 1.0;
        let color = [...baseColor];

        // 1. Interaction (Rotation, Color, Scale)
        if (distanceToMouse < maxInfluenceDist) {
          const influence = Math.pow(1 - distanceToMouse / maxInfluenceDist, 1.2);
          const angleToMouse = Math.atan2(dy, dx);
          
          targetRot = angleToMouse;
          scale = 1.0 + influence * 2.0; // zoom in effect
          
          const colorLerp = Math.min(influence * 1.5, 1.0);
          color = lerpColor(baseColor, activeColor, colorLerp);
        }

        // 2. Spring physics for rotation (Smoothened)
        let diff = targetRot - dash.currentRot;
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;

        dash.rotVel += diff * stiffness;
        dash.rotVel *= damping;
        dash.currentRot += dash.rotVel;

        // 3. Visibility Mask (Flashlight & Donut hole boundary)
        let alpha = 0;
        if (distanceToMouse > visibilityInnerRadius && distanceToMouse < visibilityOuterRadius) {
           const normalizedDist = (distanceToMouse - visibilityInnerRadius) / (visibilityOuterRadius - visibilityInnerRadius);
           
           // Sharp rise, smooth fall for the halo effect
           const bellAlpha = 4 * normalizedDist * (1 - normalizedDist);
           
           // Higher base opacity as requested
           const maxAlpha = 0.8; 
           alpha = Math.max(0, bellAlpha * maxAlpha);
           
           // Subtle sine wave pulsing on the opacity for a continuous live effect
           const pulse = Math.sin(time + dash.x * 0.02 + dash.y * 0.02) * 0.15;
           alpha = Math.max(0, Math.min(1, alpha + pulse * alpha));
           
           // Draw rounded dash
           ctx.save();
           ctx.translate(dash.x, dash.y);
           ctx.rotate(dash.currentRot);
           
           ctx.beginPath();
           const halfLength = (dash.baseLength * scale) / 2;
           ctx.moveTo(-halfLength, 0);
           ctx.lineTo(halfLength, 0);
           ctx.strokeStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
           ctx.lineWidth = dashThickness * scale;
           ctx.lineCap = "round"; // Rounded corners!
           ctx.stroke();
           
           ctx.restore();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    
    // Slight delay to ensure parent dimensions are ready
    setTimeout(() => {
      resize();
      draw();
    }, 100);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        pointerEvents: "none",
        position: "absolute",
        top: 0,
        left: 0,
        zIndex: 0,
        background: "transparent",
      }}
    />
  );
}
