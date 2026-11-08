import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor({ theme = 'dark' }) {
  const [isPointer, setIsPointer] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isLight = theme === 'light';

  // Refs for zero-latency direct DOM animation
  const beaconRef = useRef(null);
  const swimmerRef = useRef(null);
  const armLRef = useRef(null);
  const armRRef = useRef(null);
  const legLRef = useRef(null);
  const legRRef = useRef(null);
  const bubble1Ref = useRef(null);
  const bubble2Ref = useRef(null);
  const auraCircleRef = useRef(null);

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) {
      setIsPointer(false);
      return;
    }

    let frameId;
    let targetX = -100;
    let targetY = -100;
    let curX = -100;
    let curY = -100;
    let curAngle = 0;
    let phase = 0;
    let initialized = false;

    const onMouseMove = (e) => {
      targetX = e.clientX;
      targetY = e.clientY;

      if (!initialized) {
        curX = targetX - 30;
        curY = targetY + 20;
        initialized = true;
        setIsVisible(true);
      }

      // Update beacon dot immediately for instantaneous feedback
      if (beaconRef.current) {
        beaconRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      // Check if hovering over an interactive element
      const target = e.target;
      const interactive = Boolean(
        target && target.closest && target.closest('a, button, input, textarea, [role="button"], .interactive')
      );
      setIsHovered(interactive);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    const onMouseEnter = () => {
      setIsVisible(true);
    };

    const updateSwimmer = () => {
      if (initialized) {
        const dx = targetX - curX;
        const dy = targetY - curY;
        const dist = Math.hypot(dx, dy);

        // Fluid celestial inertia lerp towards beacon
        curX += dx * 0.12;
        curY += dy * 0.12;

        // Face towards the target beacon when moving
        if (dist > 1.5) {
          const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
          let diff = targetAngle - curAngle;
          while (diff < -180) diff += 360;
          while (diff > 180) diff -= 360;
          curAngle += diff * 0.16;
        }

        // Swimming stroke rate: vigorous when pursuing, gentle zero-g float when near
        const strokeSpeed = Math.min(dist * 0.065, 0.35);
        phase += strokeSpeed + 0.028;

        // Breaststroke / Space-swim kinematics
        const reach = Math.cos(phase);
        const spread = Math.sin(phase);

        // Arms: Left (top side) & Right (bottom side)
        const elL_x = 4 + reach * 3.5;
        const elL_y = -4.5 - Math.max(0, spread) * 3.2;
        const handL_x = 7 + reach * 6.5;
        const handL_y = -2 - spread * 4.2;

        const elR_x = 4 + reach * 3.5;
        const elR_y = 4.5 + Math.max(0, spread) * 3.2;
        const handR_x = 7 + reach * 6.5;
        const handR_y = 2 + spread * 4.2;

        if (armLRef.current) {
          armLRef.current.setAttribute('d', `M 4 -2 Q ${elL_x} ${elL_y} ${handL_x} ${handL_y}`);
        }
        if (armRRef.current) {
          armRRef.current.setAttribute('d', `M 4 2 Q ${elR_x} ${elR_y} ${handR_x} ${handR_y}`);
        }

        // Legs: Flutter kick & propulsion
        const kick = Math.sin(phase);
        const kneeL_x = -9 - Math.max(0, -reach) * 2;
        const kneeL_y = -3.5 - kick * 2.2;
        const footL_x = -15 + reach * 2;
        const footL_y = -2 - kick * 3.8;

        const kneeR_x = -9 - Math.max(0, -reach) * 2;
        const kneeR_y = 3.5 + kick * 2.2;
        const footR_x = -15 + reach * 2;
        const footR_y = 2 + kick * 3.8;

        if (legLRef.current) {
          legLRef.current.setAttribute('d', `M -4 -1.5 Q ${kneeL_x} ${kneeL_y} ${footL_x} ${footL_y}`);
        }
        if (legRRef.current) {
          legRRef.current.setAttribute('d', `M -4 1.5 Q ${kneeR_x} ${kneeR_y} ${footR_x} ${footR_y}`);
        }

        // Cosmic bubbles behind swimmer's feet
        if (bubble1Ref.current) {
          bubble1Ref.current.setAttribute('cx', -15 - Math.abs(kick) * 2.5);
          bubble1Ref.current.setAttribute('cy', Math.sin(phase * 1.4) * 2);
        }
        if (bubble2Ref.current) {
          bubble2Ref.current.setAttribute('cx', -18 - Math.abs(kick) * 3.5);
          bubble2Ref.current.setAttribute('cy', -Math.sin(phase * 1.4) * 2.2);
        }

        // Apply swimmer transformation
        if (swimmerRef.current) {
          swimmerRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%) rotate(${curAngle}deg)`;
        }
      }

      frameId = requestAnimationFrame(updateSwimmer);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    frameId = requestAnimationFrame(updateSwimmer);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!isPointer) return null;

  const goldPrimary = isLight ? '#d97706' : '#fbbf24';
  const goldSecondary = isLight ? '#b45309' : '#f59e0b';
  const helmetFill = isLight ? '#fef3c7' : '#07050d';
  const visorColor = isLight ? '#0284c7' : '#67e8f9';

  return (
    <>
      {/* Precision Core Beacon Dot (moves first with mouse) */}
      <div
        ref={beaconRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-opacity duration-150 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovered ? '7px' : '4px',
          height: isHovered ? '7px' : '4px',
          backgroundColor: goldPrimary,
          boxShadow: isHovered
            ? `0 0 12px ${goldPrimary}, 0 0 20px ${goldSecondary}`
            : `0 0 6px ${goldSecondary}`,
        }}
      />

      {/* Cosmic Orbit Swimmer (Stickman Astronaut trailing & swimming toward beacon) */}
      <div
        ref={swimmerRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovered ? '38px' : '32px',
          height: isHovered ? '38px' : '32px',
          filter: isHovered
            ? `drop-shadow(0 0 8px ${goldPrimary}) drop-shadow(0 0 14px ${goldSecondary}80)`
            : `drop-shadow(0 0 4px ${goldPrimary}90)`,
          transition: 'width 0.25s ease-out, height 0.25s ease-out, filter 0.25s ease-out',
        }}
      >
        <svg viewBox="-20 -20 40 40" className="w-full h-full overflow-visible">
          {/* Subtle Celestial Orbit Ring (expands on hover) */}
          <circle
            ref={auraCircleRef}
            cx="0"
            cy="0"
            r={isHovered ? 17 : 14}
            fill="none"
            stroke={goldPrimary}
            strokeWidth={isHovered ? 1.2 : 0.75}
            strokeDasharray={isHovered ? '3 3' : '2 4'}
            opacity={isHovered ? 0.6 : 0.28}
            className="transition-all duration-300"
          />

          {/* Stardust propulsion bubbles trailing behind feet */}
          <circle
            ref={bubble1Ref}
            cx="-15"
            cy="0"
            r="1.1"
            fill={goldPrimary}
            opacity="0.65"
          />
          <circle
            ref={bubble2Ref}
            cx="-18"
            cy="0"
            r="0.75"
            fill={goldSecondary}
            opacity="0.4"
          />

          {/* Stickman Left & Right Legs */}
          <path
            ref={legLRef}
            stroke={goldPrimary}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            ref={legRRef}
            stroke={goldPrimary}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Stickman Spine / Torso */}
          <line
            x1="5"
            y1="0"
            x2="-4"
            y2="0"
            stroke={goldPrimary}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Astronaut Life-Support Backpack */}
          <rect
            x="-3"
            y="-3.5"
            width="3.5"
            height="7"
            rx="1.4"
            fill={goldSecondary}
            opacity="0.8"
          />

          {/* Stickman Left & Right Arms */}
          <path
            ref={armLRef}
            stroke={goldPrimary}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <path
            ref={armRRef}
            stroke={goldPrimary}
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />

          {/* Astronaut Helmet / Head */}
          <circle
            cx="8"
            cy="0"
            r="3.4"
            fill={helmetFill}
            stroke={goldPrimary}
            strokeWidth="1.75"
          />

          {/* Glowing Visor */}
          <circle
            cx="9.4"
            cy="0"
            r="1.2"
            fill={visorColor}
            opacity="0.95"
          />
        </svg>
      </div>
    </>
  );
}