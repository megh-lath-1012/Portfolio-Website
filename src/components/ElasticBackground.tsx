"use client";

import React, { useEffect, useRef } from "react";
import useMousePosition from "@/hooks/useMousePosition";

interface Particle {
  x: number;
  y: number;
  angle: number;
  orbitSpeed: number;
  baseRadius: number;
  size: number;
  pulseSpeed: number;
  pulseOffset: number;
  isPrimary: boolean;
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
    let particles: Particle[] = [];
    const particleCount = 120;
    
    // Configurable Radii
    const innerRadius = 80;
    const outerRadius = 350;

    const baseColorLight = [203, 213, 225]; // #cbd5e1 (slate-300)
    const baseColorDark = [71, 85, 105];    // #475569 (slate-600)
    const primaryColor = [249, 115, 22];    // #f97316 (orange-500)

    const resize = () => {
      const parent = canvas.parentElement;
      canvas.width = parent ? parent.clientWidth : window.innerWidth;
      canvas.height = parent ? parent.clientHeight : window.innerHeight;
      
      // Only re-init if particles are empty to avoid resetting during resize
      if (particles.length === 0) {
        initParticles();
      }
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        const isPrimary = Math.random() > 0.85; // 15% chance to be primary color
        
        // Randomly distribute base radius favoring the inner/mid area slightly
        const distRatio = Math.random();
        // Easing distribution: pushes more particles to the middle instead of uniform
        const radius = innerRadius + (outerRadius - innerRadius) * (Math.pow(distRatio, 0.8));

        particles.push({
          x: window.innerWidth / 2,
          y: window.innerHeight / 2,
          angle: Math.random() * Math.PI * 2,
          orbitSpeed: (Math.random() - 0.5) * 0.005, // Very slow orbit
          baseRadius: radius,
          size: Math.random() * 2.5 + 1, // 1px to 3.5px radius
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulseOffset: Math.random() * Math.PI * 2,
          isPrimary,
        });
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const isDark = document.documentElement.classList.contains("dark");
      const baseColor = isDark ? baseColorDark : baseColorLight;
      const time = Date.now() * 0.001; // Current time in seconds

      // If mouse hasn't moved yet, set a subtle default center
      const mx = mouseRef.current.x === -1000 ? canvas.width / 2 : mouseRef.current.x;
      const my = mouseRef.current.y === -1000 ? canvas.height / 3 : mouseRef.current.y;

      particles.forEach((p) => {
        // Orbit update
        p.angle += p.orbitSpeed;

        // Breathing / Pulsing effect (Zoom in out)
        // radius flucuates by +/- 20px
        const currentRadius = p.baseRadius + Math.sin(time * p.pulseSpeed * 50 + p.pulseOffset) * 20;

        // Target position based on mouse center
        const targetX = mx + Math.cos(p.angle) * currentRadius;
        const targetY = my + Math.sin(p.angle) * currentRadius;

        // Smooth spring follow physics towards the target
        p.x += (targetX - p.x) * 0.05; // Lag factor (lower = smoother trail)
        p.y += (targetY - p.y) * 0.05;

        // Determine particle color and opacity
        const color = p.isPrimary ? primaryColor : baseColor;
        
        // Dynamic Alpha: Fades out based on distance from mouse to create a soft edge
        const dx = p.x - mx;
        const dy = p.y - my;
        const distFromCenter = Math.sqrt(dx * dx + dy * dy);
        
        let alpha = 0;
        
        // Fade out perfectly at the inner and outer boundaries
        if (distFromCenter > innerRadius * 0.8 && distFromCenter < outerRadius * 1.2) {
            // Normalize distance distance between 0 and 1
            const normalizedDist = (distFromCenter - innerRadius) / (outerRadius - innerRadius);
            
            // Bell curve (parabola) for alpha so it's brightest in the middle of the donut
            // Eq: 4 * x * (1 - x) peaks at 1.0 when x = 0.5
            const bellAlpha = 4 * normalizedDist * (1 - normalizedDist);
            
            // Max alpha logic (subtle transparency as requested)
            const maxAlpha = p.isPrimary ? 0.6 : (isDark ? 0.35 : 0.45);
            alpha = Math.max(0, bellAlpha * maxAlpha);
            
            // Pulsing scaling effect on the individual circle radius itself
            const pulseScale = 1 + Math.sin(time * p.pulseSpeed * 80 + p.pulseOffset) * 0.3;
            const finalSize = Math.max(0.1, p.size * pulseScale);

            ctx.beginPath();
            ctx.arc(p.x, p.y, finalSize, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${color[0]}, ${color[1]}, ${color[2]}, ${alpha})`;
            ctx.fill();
        }
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    window.addEventListener("resize", resize);
    resize();
    draw();

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
