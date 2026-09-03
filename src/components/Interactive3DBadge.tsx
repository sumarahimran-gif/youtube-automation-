import React, { useRef, useState, useEffect } from 'react';
import { TrendingUp, Cpu, Sparkles, Compass } from 'lucide-react';

export const Interactive3DBadge: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [glare, setGlare] = useState({ x: 50, y: 50, opacity: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const dragStart = useRef({ x: 0, y: 0, rotX: 0, rotY: 0 });

  // Continuous subtle auto-float when not hovered
  useEffect(() => {
    let frameId: number;
    let time = 0;

    const autoFloat = () => {
      if (!isHovered && !isDragging) {
        time += 0.02;
        setRotate({
          x: Math.sin(time) * 7,
          y: Math.cos(time * 0.8) * 10,
        });
        setGlare({
          x: 50 + Math.cos(time) * 30,
          y: 50 + Math.sin(time) * 30,
          opacity: 0.15 + Math.sin(time * 2) * 0.08,
        });
      }
      frameId = requestAnimationFrame(autoFloat);
    };

    frameId = requestAnimationFrame(autoFloat);
    return () => cancelAnimationFrame(frameId);
  }, [isHovered, isDragging]);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (isDragging) {
      const deltaX = e.clientX - dragStart.current.x;
      const deltaY = e.clientY - dragStart.current.y;
      setRotate({
        x: Math.max(-35, Math.min(35, dragStart.current.rotX - deltaY * 0.3)),
        y: Math.max(-45, Math.min(45, dragStart.current.rotY + deltaX * 0.3)),
      });
      return;
    }

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotX = ((y - centerY) / centerY) * -22;
    const rotY = ((x - centerX) / centerX) * 25;

    setRotate({ x: rotX, y: rotY });
    setGlare({
      x: (x / rect.width) * 100,
      y: (y / rect.height) * 100,
      opacity: 0.45,
    });
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(true);
    dragStart.current = {
      x: e.clientX,
      y: e.clientY,
      rotX: rotate.x,
      rotY: rotate.y,
    };
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      (e.target as HTMLElement).releasePointerCapture(e.pointerId);
    } catch {
      // Ignored
    }
  };

  return (
    <div
      ref={containerRef}
      onPointerEnter={() => setIsHovered(true)}
      onPointerLeave={() => {
        setIsHovered(false);
        setIsDragging(false);
      }}
      onPointerMove={handlePointerMove}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      className="relative select-none cursor-grab active:cursor-grabbing w-full max-w-[420px] aspect-square flex items-center justify-center perspective-[1200px] mx-auto group"
      style={{ perspective: '1200px' }}
      aria-label="Interactive 3D Creator Hub Metallic Emblem"
    >
      {/* Dynamic 3D ambient shadow on the floor */}
      <div
        className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-12 bg-blue-600/20 rounded-full blur-2xl pointer-events-none transition-transform duration-300"
        style={{
          transform: `translateX(-50%) rotateX(85deg) scale(${isHovered ? 1.15 : 1}) translateZ(-60px)`,
          opacity: isHovered ? 0.7 : 0.4,
        }}
      />

      {/* 3D Main Floating Vessel */}
      <div
        className="relative w-[320px] sm:w-[360px] md:w-[390px] aspect-square rounded-full transition-transform duration-150 ease-out will-change-transform flex items-center justify-center"
        style={{
          transform: `rotateX(${rotate.x}deg) rotateY(${rotate.y}deg) translateZ(30px)`,
          transformStyle: 'preserve-3d',
        }}
      >
        {/* Outer Orbit Light Ring 1 */}
        <div
          className="absolute -inset-4 rounded-full border border-blue-500/30 animate-[spin_24s_linear_infinite] pointer-events-none"
          style={{
            transform: 'translateZ(-10px)',
            borderStyle: 'dashed',
          }}
        />

        {/* Outer Orbit Light Ring 2 */}
        <div
          className="absolute -inset-8 rounded-full border border-white/10 pointer-events-none"
          style={{
            transform: 'translateZ(-20px) rotate(45deg)',
          }}
        />

        {/* Multi-layered Metallic Rim with Depth */}
        <div
          className="relative w-full h-full rounded-full p-2.5 shadow-2xl overflow-hidden bg-gradient-to-b from-[#40444d] via-[#1a1c22] to-[#0c0d11] border border-white/20"
          style={{
            transform: 'translateZ(10px)',
            boxShadow: `
              0 20px 50px rgba(0, 0, 0, 0.9),
              0 0 40px rgba(59, 130, 246, 0.25),
              inset 0 2px 4px rgba(255, 255, 255, 0.4),
              inset 0 -3px 6px rgba(0, 0, 0, 0.8)
            `,
          }}
        >
          {/* Inner Chrome Bevel */}
          <div className="relative w-full h-full rounded-full overflow-hidden bg-[#0A0A0A] flex items-center justify-center p-1.5 border border-white/15">
            {/* The Main High-Res 3D Metallic Emblem Image */}
            <img
              src="/creator-hub-logo.jpg"
              alt="Creator Hub 3D Metallic Logo"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover rounded-full pointer-events-none select-none filter contrast-[1.05] brightness-[1.02]"
              draggable={false}
            />

            {/* Dynamic Specular Chrome Glare Overlay */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none mix-blend-overlay transition-opacity duration-200"
              style={{
                opacity: glare.opacity,
                background: `radial-gradient(circle 240px at ${glare.x}% ${glare.y}%, rgba(255,255,255,0.9), rgba(255,255,255,0.3) 35%, transparent 70%)`,
              }}
            />

            {/* Sweep light reflection beam */}
            <div
              className="absolute inset-0 rounded-full pointer-events-none mix-blend-screen opacity-25"
              style={{
                background: `linear-gradient(${120 + rotate.y * 1.5}deg, transparent 30%, rgba(255,255,255,0.4) 50%, transparent 70%)`,
              }}
            />
          </div>
        </div>

        {/* 3D Floating Orbital Badge 1: YT Growth (Top-Right) */}
        <div
          className="absolute -top-3 -right-3 sm:-right-5 px-3.5 py-2 rounded-xl bg-[#0F1117]/95 border border-blue-500/40 shadow-xl shadow-black/80 backdrop-blur-md flex items-center gap-2 pointer-events-none z-30 transition-transform duration-150"
          style={{
            transform: `translateZ(60px) translateX(${rotate.y * 0.4}px) translateY(${rotate.x * -0.3}px)`,
          }}
        >
          <div className="w-6 h-6 rounded-lg bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
            <TrendingUp className="w-3.5 h-3.5" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-gray-400 leading-none">PILLAR 01</div>
            <div className="text-xs font-bold text-white font-heading">YT GROWTH</div>
          </div>
        </div>

        {/* 3D Floating Orbital Badge 2: Mindset (Bottom-Left) */}
        <div
          className="absolute -bottom-3 -left-3 sm:-left-5 px-3.5 py-2 rounded-xl bg-[#0F1117]/95 border border-white/20 shadow-xl shadow-black/80 backdrop-blur-md flex items-center gap-2 pointer-events-none z-30 transition-transform duration-150"
          style={{
            transform: `translateZ(55px) translateX(${rotate.y * 0.5}px) translateY(${rotate.x * -0.4}px)`,
          }}
        >
          <div className="w-6 h-6 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-white">
            <Sparkles className="w-3.5 h-3.5 text-blue-400" />
          </div>
          <div>
            <div className="text-[10px] font-mono text-gray-400 leading-none">PILLAR 02</div>
            <div className="text-xs font-bold text-white font-heading">MINDSET</div>
          </div>
        </div>

        {/* 3D Floating Orbital Badge 3: Automation & Business (Bottom-Right) */}
        <div
          className="absolute -bottom-6 right-6 sm:right-10 px-3.5 py-1.5 rounded-full bg-blue-950/80 border border-blue-400/30 shadow-lg shadow-black/80 backdrop-blur-md flex items-center gap-2 pointer-events-none z-30 transition-transform duration-150"
          style={{
            transform: `translateZ(70px) translateX(${rotate.y * 0.6}px) translateY(${rotate.x * -0.5}px)`,
          }}
        >
          <Cpu className="w-3 h-3 text-blue-400 animate-spin-slow" />
          <span className="text-[11px] font-mono font-bold text-blue-200 tracking-wider">
            AUTOMATION SYSTEM
          </span>
        </div>
      </div>

      {/* Interactive Drag & Tilt Hint */}
      <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 flex items-center gap-2 text-[11px] font-mono text-gray-400 opacity-60 group-hover:opacity-100 transition-opacity pointer-events-none">
        <Compass className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
        <span>Drag or hover to rotate in 3D</span>
      </div>
    </div>
  );
};
