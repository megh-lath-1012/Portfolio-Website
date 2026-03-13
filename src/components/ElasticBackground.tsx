"use client";

import React, { useEffect, useRef } from "react";
import useMousePosition from "@/hooks/useMousePosition";

interface Dash {
  x: number;
  y: number;
  baseRot: number;
  currentRot: number;
  rotVel: number;
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
    const spacing = 35;
    const maxInfluenceDist = 250;
    const stiffness = 0.1;
    const damping = 0.8;
    const dashLength = 16;
    const dashThickness = 2;

    const baseColorLight = [203, 213, 225]; // #cbd5e1
    const baseColorDark = [71, 85, 105];    // #475569
    const activeColor = [249, 115, 22];     // #f97316

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
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
          const jitterX = (Math.random() - 0.5) * (spacing * 0.2);
          const jitterY = (Math.random() - 0.5) * (spacing * 0.2);

          const finalX = posX + jitterX;
          const finalY = posY + jitterY;

          dashes.push({
            x: finalX,
            y: finalY,
            baseRot: 0,
            currentRot: 0,
            rotVel: 0,
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

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      dashes.forEach((dash) => {
        const dx = mx - dash.x;
        const dy = my - dash.y;
        const distanceToMouse = Math.sqrt(dx * dx + dy * dy);

        let targetRot = dash.baseRot;
        let scale = 1.0;
        let color = [...baseColor];

        if (distanceToMouse < maxInfluenceDist) {
          const influence = Math.pow(1 - distanceToMouse / maxInfluenceDist, 1.2);
          const angleToMouse = Math.atan2(dy, dx);
          
          targetRot = angleToMouse;
          scale = 1.0 + influence * 1.5;
          const colorLerp = Math.min(influence * 1.5, 1.0);
          color = lerpColor(baseColor, activeColor, colorLerp);
        }

        // Spring physics for rotation
        let diff = targetRot - dash.currentRot;
        // Normalize angle difference to take shortest path
        while (diff > Math.PI) diff -= Math.PI * 2;
        while (diff < -Math.PI) diff += Math.PI * 2;

        dash.rotVel += diff * stiffness;
        dash.rotVel *= damping;
        dash.currentRot += dash.rotVel;

        // Draw the dash
        ctx.save();
        ctx.translate(dash.x, dash.y);
        ctx.rotate(dash.currentRot);
        
        ctx.beginPath();
        ctx.moveTo(-dashLength / 2 * scale, 0);
        ctx.lineTo(dashLength / 2 * scale, 0);
        ctx.strokeStyle = `rgb(${color[0]}, ${color[1]}, ${color[2]})`;
        ctx.lineWidth = dashThickness * scale;
        ctx.lineCap = "round";
        ctx.stroke();
        
        ctx.restore();
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
        position: "fixed",
        inset: 0,
        zIndex: -1,
        background: "transparent",
      }}
    />
  );
}
