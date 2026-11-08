import React, { useEffect, useRef, useState } from 'react';

export default function CustomCursor({ theme = 'dark' }) {
  const [isPointer, setIsPointer] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const isLight = theme === 'light';

  // Refs for zero-latency direct DOM animation at 60/120 FPS
  const beaconRef = useRef(null);
  const astronautRef = useRef(null);
  const armLRef = useRef(null);
  const armRRef = useRef(null);
  const gloveLRef = useRef(null);
  const gloveRRef = useRef(null);
  const legLRef = useRef(null);
  const legRRef = useRef(null);
  const bootLRef = useRef(null);
  const bootRRef = useRef(null);
  const jet1Ref = useRef(null);
  const jet2Ref = useRef(null);
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
        curX = targetX - 35;
        curY = targetY + 20;
        initialized = true;
        setIsVisible(true);
      }

      // Precision beacon dot snaps immediately to pointer
      if (beaconRef.current) {
        beaconRef.current.style.transform = `translate3d(${targetX}px, ${targetY}px, 0) translate(-50%, -50%)`;
      }

      // Check for interactive elements under cursor
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

    const updateAstronaut = () => {
      if (initialized) {
        const dx = targetX - curX;
        const dy = targetY - curY;
        const dist = Math.hypot(dx, dy);

        // Fluid cosmic inertia glide toward the beacon with distinct zero-g delay
        curX += dx * 0.045;
        curY += dy * 0.045;

        // Smoothly orient astronaut towards beacon direction
        if (dist > 1.5) {
          const targetAngle = Math.atan2(dy, dx) * (180 / Math.PI);
          let diff = targetAngle - curAngle;
          while (diff < -180) diff += 360;
          while (diff > 180) diff -= 360;
          curAngle += diff * 0.09;
        }

        // Swimming stroke frequency: slow, graceful, and majestic spacewalk swim
        const strokeSpeed = Math.min(dist * 0.003, 0.04);
        phase += strokeSpeed + 0.012;

        // Space swimming kinematics (Breaststroke sweep + recovery)
        const reach = Math.cos(phase);
        const spread = Math.sin(phase);

        // Left Arm & Glove (Top side)
        const elL_x = 3.5 + reach * 3.5;
        const elL_y = -5.5 - Math.max(0, spread) * 3.5;
        const handL_x = 8 + reach * 6.8;
        const handL_y = -2.5 - spread * 4.5;
        if (armLRef.current) {
          armLRef.current.setAttribute('d', `M 3 -3.5 Q ${elL_x} ${elL_y} ${handL_x} ${handL_y}`);
        }
        if (gloveLRef.current) {
          gloveLRef.current.setAttribute('cx', handL_x);
          gloveLRef.current.setAttribute('cy', handL_y);
        }

        // Right Arm & Glove (Bottom side)
        const elR_x = 3.5 + reach * 3.5;
        const elR_y = 5.5 + Math.max(0, spread) * 3.5;
        const handR_x = 8 + reach * 6.8;
        const handR_y = 2.5 + spread * 4.5;
        if (armRRef.current) {
          armRRef.current.setAttribute('d', `M 3 3.5 Q ${elR_x} ${elR_y} ${handR_x} ${handR_y}`);
        }
        if (gloveRRef.current) {
          gloveRRef.current.setAttribute('cx', handR_x);
          gloveRRef.current.setAttribute('cy', handR_y);
        }

        // Space Suit Legs & Boots (Propulsion flutter kick)
        const kick = Math.sin(phase);
        const kneeL_x = -10 - Math.max(0, -reach) * 2;
        const kneeL_y = -4 - kick * 2.5;
        const footL_x = -16 + reach * 2.2;
        const footL_y = -2.5 - kick * 4;
        if (legLRef.current) {
          legLRef.current.setAttribute('d', `M -5.5 -2 Q ${kneeL_x} ${kneeL_y} ${footL_x} ${footL_y}`);
        }
        if (bootLRef.current) {
          bootLRef.current.setAttribute('cx', footL_x);
          bootLRef.current.setAttribute('cy', footL_y);
        }

        const kneeR_x = -10 - Math.max(0, -reach) * 2;
        const kneeR_y = 4 + kick * 2.5;
        const footR_x = -16 + reach * 2.2;
        const footR_y = 2.5 + kick * 4;
        if (legRRef.current) {
          legRRef.current.setAttribute('d', `M -5.5 2 Q ${kneeR_x} ${kneeR_y} ${footR_x} ${footR_y}`);
        }
        if (bootRRef.current) {
          bootRRef.current.setAttribute('cx', footR_x);
          bootRRef.current.setAttribute('cy', footR_y);
        }

        // Jetpack micro-thruster stardust particles
        const jetDist = 18 + Math.abs(kick) * 4;
        if (jet1Ref.current) {
          jet1Ref.current.setAttribute('cx', -jetDist);
          jet1Ref.current.setAttribute('cy', -2.5 + Math.sin(phase * 1.5) * 1.5);
          jet1Ref.current.setAttribute('opacity', dist > 2 ? '0.85' : '0.3');
        }
        if (jet2Ref.current) {
          jet2Ref.current.setAttribute('cx', -jetDist - 3);
          jet2Ref.current.setAttribute('cy', 2.5 - Math.sin(phase * 1.5) * 1.5);
          jet2Ref.current.setAttribute('opacity', dist > 2 ? '0.7' : '0.2');
        }

        // Apply astronaut transformation
        if (astronautRef.current) {
          astronautRef.current.style.transform = `translate3d(${curX}px, ${curY}px, 0) translate(-50%, -50%) rotate(${curAngle}deg)`;
        }
      }

      frameId = requestAnimationFrame(updateAstronaut);
    };

    window.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);
    frameId = requestAnimationFrame(updateAstronaut);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (!isPointer) return null;

  // Theme palettes
  const goldPrimary = isLight ? '#d97706' : '#fbbf24';
  const goldSecondary = isLight ? '#b45309' : '#f59e0b';
  const suitBodyFill = isLight ? '#fffbeb' : '#0c0a17';
  const packFill = isLight ? '#fef3c7' : '#1e1b2e';
  const collarFill = isLight ? '#b45309' : '#d97706';

  return (
    <>
      {/* Precision Core Beacon Dot (moves with cursor) */}
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

      {/* Astronaut in Spacesuit Swimming Through Celestial Orbit */}
      <div
        ref={astronautRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9998] transition-opacity duration-200 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          width: isHovered ? '70px' : '60px',
          height: isHovered ? '70px' : '60px',
          filter: isHovered
            ? `drop-shadow(0 0 14px ${goldPrimary}) drop-shadow(0 0 24px ${goldSecondary}80)`
            : `drop-shadow(0 0 7px ${goldPrimary}90)`,
          transition: 'width 0.25s ease-out, height 0.25s ease-out, filter 0.25s ease-out',
        }}
      >
        <svg viewBox="-24 -24 48 48" className="w-full h-full overflow-visible">
          <defs>
            {/* Metallic Gold / Cyan Visor Gradient */}
            <linearGradient id="astroVisorGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="60%" stopColor={goldSecondary} />
              <stop offset="100%" stopColor={goldPrimary} />
            </linearGradient>
          </defs>

          {/* Faint Orbit Ring Guide */}
          <circle
            ref={auraCircleRef}
            cx="0"
            cy="0"
            r={isHovered ? 19 : 16}
            fill="none"
            stroke={goldPrimary}
            strokeWidth={isHovered ? 1.2 : 0.75}
            strokeDasharray={isHovered ? '3 3' : '2 4'}
            opacity={isHovered ? 0.6 : 0.25}
            className="transition-all duration-300"
          />

          {/* PLSS Jetpack Micro-thruster Dust / Bubbles */}
          <circle
            ref={jet1Ref}
            cx="-18"
            cy="-2.5"
            r="1.2"
            fill={isLight ? '#0284c7' : '#38bdf8'}
            opacity="0.75"
          />
          <circle
            ref={jet2Ref}
            cx="-21"
            cy="2.5"
            r="0.9"
            fill={goldPrimary}
            opacity="0.65"
          />

          {/* PLSS Astronaut Backpack (Life Support System) */}
          <rect
            x="-6"
            y="-5.5"
            width="4"
            height="11"
            rx="2"
            fill={packFill}
            stroke={goldSecondary}
            strokeWidth="1.3"
          />
          <line x1="-6" y1="-2" x2="-2" y2="-2" stroke={goldSecondary} strokeWidth="0.8" opacity="0.6" />
          <line x1="-6" y1="2" x2="-2" y2="2" stroke={goldSecondary} strokeWidth="0.8" opacity="0.6" />

          {/* Pressurized Suit Left Leg & Boot */}
          <path
            ref={legLRef}
            stroke={goldPrimary}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse
            ref={bootLRef}
            cx="-15"
            cy="-2"
            rx="2.2"
            ry="1.5"
            fill={goldSecondary}
            stroke={goldPrimary}
            strokeWidth="0.8"
          />

          {/* Pressurized Suit Right Leg & Boot */}
          <path
            ref={legRRef}
            stroke={goldPrimary}
            strokeWidth="2.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <ellipse
            ref={bootRRef}
            cx="-15"
            cy="2"
            rx="2.2"
            ry="1.5"
            fill={goldSecondary}
            stroke={goldPrimary}
            strokeWidth="0.8"
          />

          {/* Space Suit Puffy Torso */}
          <path
            d="M 4 -4 Q -1 -5 -6 -3.5 L -6 3.5 Q -1 5 4 4 Z"
            fill={suitBodyFill}
            stroke={goldPrimary}
            strokeWidth="1.6"
            strokeLinejoin="round"
          />

          {/* Chest Mission Telemetry / Life-Support Module */}
          <rect
            x="-2.5"
            y="-2"
            width="4.5"
            height="4"
            rx="1"
            fill={packFill}
            stroke={goldSecondary}
            strokeWidth="0.8"
          />
          <circle cx="-1.2" cy="-0.8" r="0.55" fill="#10b981" />
          <circle cx="0.5" cy="-0.8" r="0.55" fill="#f59e0b" />
          <line x1="-1.5" y1="0.8" x2="1" y2="0.8" stroke="#38bdf8" strokeWidth="0.65" />

          {/* Space Suit Left Sleeve & Gauntlet Glove */}
          <path
            ref={armLRef}
            stroke={goldPrimary}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            ref={gloveLRef}
            cx="8"
            cy="-2"
            r="1.6"
            fill={goldSecondary}
            stroke={goldPrimary}
            strokeWidth="0.8"
          />

          {/* Space Suit Right Sleeve & Gauntlet Glove */}
          <path
            ref={armRRef}
            stroke={goldPrimary}
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
          <circle
            ref={gloveRRef}
            cx="8"
            cy="2"
            r="1.6"
            fill={goldSecondary}
            stroke={goldPrimary}
            strokeWidth="0.8"
          />

          {/* Neck Ring Hermetic Seal */}
          <ellipse cx="4.5" cy="0" rx="1.2" ry="3.2" fill={collarFill} />

          {/* Astronaut Helmet */}
          <circle
            cx="8"
            cy="0"
            r="4.6"
            fill={suitBodyFill}
            stroke={goldPrimary}
            strokeWidth="1.6"
          />

          {/* Tinted Reflective Visor */}
          <ellipse
            cx="9.5"
            cy="0"
            rx="3.2"
            ry="2.8"
            fill="url(#astroVisorGlow)"
          />

          {/* Visor Glare Specular Sheen */}
          <path
            d="M 8.5 -1.8 Q 11.2 -1.2 11.5 0"
            stroke="#ffffff"
            strokeWidth="0.8"
            strokeLinecap="round"
            fill="none"
            opacity="0.9"
          />
        </svg>
      </div>
    </>
  );
}