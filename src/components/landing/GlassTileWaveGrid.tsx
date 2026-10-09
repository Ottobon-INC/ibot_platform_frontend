import React, { useEffect, useRef } from 'react';

interface GlassTileWaveGridProps {
  className?: string;
}

export function GlassTileWaveGrid({ className = '' }: GlassTileWaveGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d', { alpha: true });
    if (!ctx) return;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let mouseX = -1000;
    let mouseY = -1000;
    let targetMouseX = -1000;
    let targetMouseY = -1000;
    let startTime = performance.now();

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function handleResize() {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = rect.width;
      height = rect.height;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx?.scale(dpr, dpr);
    }

    handleResize();
    window.addEventListener('resize', handleResize);

    function handleMouseMove(e: MouseEvent) {
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      targetMouseX = e.clientX - rect.left;
      targetMouseY = e.clientY - rect.top;
    }

    function handleMouseLeave() {
      targetMouseX = -1000;
      targetMouseY = -1000;
    }

    window.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    const tileSize = 64;
    const gap = 10;
    const cornerRadius = 10;

    function drawRoundedRect(
      context: CanvasRenderingContext2D,
      x: number,
      y: number,
      w: number,
      h: number,
      r: number
    ) {
      context.beginPath();
      context.moveTo(x + r, y);
      context.lineTo(x + w - r, y);
      context.quadraticCurveTo(x + w, y, x + w, y + r);
      context.lineTo(x + w, y + h - r);
      context.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
      context.lineTo(x + r, y + h);
      context.quadraticCurveTo(x, y + h, x, y + h - r);
      context.lineTo(x, y + r);
      context.quadraticCurveTo(x, y, x + r, y);
      context.closePath();
    }

    function render(currentTime: number) {
      if (!ctx || !canvas) return;

      const elapsed = (currentTime - startTime) * 0.001;

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.06;
      mouseY += (targetMouseY - mouseY) * 0.06;

      ctx.clearRect(0, 0, width, height);

      // Grid boundaries across full viewport
      const cols = Math.ceil(width / (tileSize + gap)) + 2;
      const rows = Math.ceil(height / (tileSize + gap)) + 2;
      const centerX = width * 0.5;
      const centerY = height * 0.45;

      for (let c = 0; c < cols; c++) {
        for (let r = 0; r < rows; r++) {
          const baseX = c * (tileSize + gap);
          const baseY = r * (tileSize + gap);

          // Restrained wave equation
          const wavePhase = prefersReducedMotion ? 0 : elapsed * 1.0 + (c * 0.22) + (r * 0.20);
          const waveElevation = Math.sin(wavePhase) * 2.5;

          // Mouse proximity influence
          const dx = mouseX - (baseX + tileSize / 2);
          const dy = mouseY - (baseY + tileSize / 2);
          const dist = Math.sqrt(dx * dx + dy * dy);
          const maxDist = 200;
          const mouseFactor = dist < maxDist ? Math.cos((dist / maxDist) * (Math.PI / 2)) : 0;
          const mouseLift = mouseFactor * 6;

          const totalLift = waveElevation + mouseLift;

          // Gentle center softness for text clarity
          const distFromCenter = Math.hypot(baseX + tileSize / 2 - centerX, (baseY + tileSize / 2 - centerY) * 1.4);
          const centerSoftness = Math.min(1, 0.45 + (distFromCenter / (width * 0.4)) * 0.55);

          // Edge fades
          const edgeFadeX = Math.min(1, Math.min(baseX / 80, (width - baseX) / 80));
          const edgeFadeY = Math.min(1, Math.min(baseY / 80, (height - baseY) / 80));
          const opacity = centerSoftness * Math.max(0, edgeFadeX) * Math.max(0, edgeFadeY);

          if (opacity <= 0.01) continue;

          ctx.save();
          ctx.translate(baseX, baseY - totalLift);

          // Dimensional Glass Tile Base
          drawRoundedRect(ctx, 0, 0, tileSize, tileSize, cornerRadius);
          ctx.fillStyle = `rgba(15, 23, 42, ${0.02 * opacity + (mouseFactor * 0.03 * opacity)})`; // Navy fill
          ctx.fill();

          // Subtle Specular Glint Highlight on Top-Left Bevel
          const specularGradient = ctx.createLinearGradient(0, 0, tileSize, tileSize);
          specularGradient.addColorStop(
            0,
            `rgba(15, 23, 42, ${(0.08 + mouseFactor * 0.15) * opacity})`
          );
          specularGradient.addColorStop(0.5, `rgba(234, 88, 12, ${(0.04 + mouseFactor * 0.1) * opacity})`); // Coral glint
          specularGradient.addColorStop(1, `rgba(15, 23, 42, ${0.01 * opacity})`);

          ctx.lineWidth = 1;
          ctx.strokeStyle = specularGradient;
          ctx.stroke();

          // Delicate Inner Reflection Dot for Dimensional Depth
          if (mouseFactor > 0.15) {
            ctx.beginPath();
            ctx.arc(tileSize * 0.3, tileSize * 0.3, 1.5, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(234, 88, 12, ${mouseFactor * 0.5 * opacity})`;
            ctx.fill();
          }

          ctx.restore();
        }
      }

      if (!prefersReducedMotion) {
        animationFrameId = requestAnimationFrame(render);
      }
    }

    if (prefersReducedMotion) {
      render(startTime);
    } else {
      animationFrameId = requestAnimationFrame(render);
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 pointer-events-none w-full h-full z-0 ${className}`}
      aria-hidden="true"
    />
  );
}
