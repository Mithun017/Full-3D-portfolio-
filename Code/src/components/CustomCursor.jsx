import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [trailingPos, setTrailingPos] = useState({ x: -100, y: -100 });
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(true);

  useEffect(() => {
    // Only enable custom cursor for mouse devices
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsPointer(false);
      return;
    }

    let frameId;
    let targetX = -100;
    let targetY = -100;
    let currentX = -100;
    let currentY = -100;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target;
      const isInteractive = Boolean(
        target.closest('a, button, input, textarea, [role="button"], .interactive')
      );
      setIsHovered(isInteractive);
    };

    const updateTrailing = () => {
      currentX += (targetX - currentX) * 0.15;
      currentY += (targetY - currentY) * 0.15;
      setTrailingPos({ x: currentX, y: currentY });
      frameId = requestAnimationFrame(updateTrailing);
    };

    window.addEventListener('mousemove', onMouseMove);
    frameId = requestAnimationFrame(updateTrailing);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!isPointer) return null;

  return (
    <>
      {/* Precision Core Dot */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full bg-amber-400 transition-transform duration-75"
        style={{
          width: isHovered ? '8px' : '4px',
          height: isHovered ? '8px' : '4px',
          transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)`,
        }}
      />
      {/* Trailing Celestial Aura */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-[9998] rounded-full border border-amber-500/40 bg-amber-500/5 transition-all duration-300"
        style={{
          width: isHovered ? '46px' : '28px',
          height: isHovered ? '46px' : '28px',
          transform: `translate3d(${trailingPos.x}px, ${trailingPos.y}px, 0) translate(-50%, -50%)`,
          boxShadow: isHovered ? '0 0 20px rgba(245, 158, 11, 0.35)' : 'none',
        }}
      />
    </>
  );
}

