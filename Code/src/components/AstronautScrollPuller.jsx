import React, { useEffect, useRef, useState } from 'react';

/**
 * AstronautScrollPuller
 * 
 * Interactive mechanical celestial pulley & chain scroll system:
 * 1. Top Cogwheel Gear with teeth permanently pinned at top right (z-[60]).
 * 2. Continuous interlocking chain links running down the entire page with soft fluid physics.
 * 3. Authentic zero-g NASA neutral posture floating astronaut with proportionate pressurized suit,
 *    curved visor glare, oxygen backpack with micro-thrusters, and hand-over-hand chain hauling.
 * 4. Sleek bottom tension spool at the taskbar edge.
 * 5. 100% 60/120 FPS hardware accelerated animation via rAF and direct DOM attribute updates.
 */
export default function AstronautScrollPuller({ theme = 'dark' }) {
  const [scrollPct, setScrollPct] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const isLight = theme === 'light';

  // Direct DOM refs for 60/120 FPS hardware acceleration (zero React re-renders during scroll)
  const gearGroupRef = useRef(null);
  const gearTeethRef = useRef(null);
  const bottomGearGroupRef = useRef(null);
  const bottomGearTeethRef = useRef(null);
  const bottomMountRef = useRef(null);
  const chainFrontRef = useRef(null);
  const chainSideRef = useRef(null);
  const chainHiRef = useRef(null);
  const chainShadowRef = useRef(null);
  const astroBodyRef = useRef(null);
  const armLRef = useRef(null);
  const armRRef = useRef(null);
  const gloveLRef = useRef(null);
  const gloveRRef = useRef(null);
  const legLRef = useRef(null);
  const legRRef = useRef(null);
  const bootLRef = useRef(null);
  const bootRRef = useRef(null);
  const spk1Ref = useRef(null);
  const spk2Ref = useRef(null);

  useEffect(() => {
    // 1. GENERATE TOP GEAR COGWHEEL SPROCKET (14 mechanical teeth)
    const numTeeth = 14;
    const rOuter = 22; // Outer tooth tip radius
    const rInner = 15.5; // Tooth root radius
    let gearD = '';
    for (let i = 0; i < numTeeth; i++) {
      const a0 = (i / numTeeth) * Math.PI * 2;
      const a1 = ((i + 0.3) / numTeeth) * Math.PI * 2;
      const a2 = ((i + 0.5) / numTeeth) * Math.PI * 2;
      const a3 = ((i + 0.8) / numTeeth) * Math.PI * 2;

      const p0x = Math.cos(a0) * rInner, p0y = Math.sin(a0) * rInner;
      const p1x = Math.cos(a1) * rOuter, p1y = Math.sin(a1) * rOuter;
      const p2x = Math.cos(a2) * rOuter, p2y = Math.sin(a2) * rOuter;
      const p3x = Math.cos(a3) * rInner, p3y = Math.sin(a3) * rInner;

      if (i === 0) gearD += `M ${p0x.toFixed(2)} ${p0y.toFixed(2)} `;
      gearD += `L ${p1x.toFixed(2)} ${p1y.toFixed(2)} L ${p2x.toFixed(2)} ${p2y.toFixed(2)} L ${p3x.toFixed(2)} ${p3y.toFixed(2)} `;
    }
    gearD += 'Z';
    if (gearTeethRef.current) {
      gearTeethRef.current.setAttribute('d', gearD);
    }
    if (bottomGearTeethRef.current) {
      bottomGearTeethRef.current.setAttribute('d', gearD);
    }

    // 2. SCROLL & PHYSICS STATE
    let lastScrollY = window.scrollY;
    let wheelAngle = 0;
    let targetWheelAngle = 0;
    let chainOffset = 0;
    let targetChainOffset = 0;
    let armCycle = 0;
    let isScrolling = false;
    let scrollTimeout = null;
    let frameId;

    // Flexible chain spring-damper physics
    let swayVel = 0;
    let swayPos = 0;

    const onScroll = () => {
      const curY = window.scrollY;
      const delta = curY - lastScrollY;
      lastScrollY = curY;

      isScrolling = true;
      clearTimeout(scrollTimeout);
      scrollTimeout = setTimeout(() => {
        isScrolling = false;
      }, 180);

      // Rotate top gear continuously with scroll
      targetWheelAngle += delta * 0.35;

      // Smooth chain translation target
      targetChainOffset += delta * 0.22;

      // Soft, gentle impulse to sway (prevents violent whipping)
      const scrollImpulse = Math.min(Math.max(delta * 0.007, -0.7), 0.7);
      swayVel += scrollImpulse;

      // Astronaut arm hauling cadence
      armCycle += delta * 0.026;

      // Scroll percentage calculation
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? Math.min(100, Math.max(0, Math.round((curY / maxScroll) * 100))) : 0;
      setScrollPct(pct);
    };

    const animate = (now) => {
      const winH = window.innerHeight;
      const topY = 54; // Bottom rim of top gear teeth where chain drops
      const botGearCenterY = winH - 34; // Center of matching bottom gear sprocket
      const botY = botGearCenterY - 22; // Top rim of bottom gear teeth where chain enters
      const astroY = winH - 142; // Astronaut vertical floating height

      // Continuously rotate top gear with smooth momentum physics
      wheelAngle += (targetWheelAngle - wheelAngle) * 0.18;
      if (gearGroupRef.current) {
        gearGroupRef.current.setAttribute('transform', `translate(68, 32) rotate(${wheelAngle.toFixed(2)})`);
      }

      // Rotate bottom gear in sync with top gear and chain
      if (bottomGearGroupRef.current) {
        bottomGearGroupRef.current.setAttribute('transform', `translate(68, ${botGearCenterY}) rotate(${wheelAngle.toFixed(2)})`);
      }

      // Dynamic bottom mounting assembly position
      if (bottomMountRef.current) {
        bottomMountRef.current.setAttribute('transform', `translate(0, ${winH - 34})`);
      }

      // Smoothly glide chain offset
      chainOffset += (targetChainOffset - chainOffset) * 0.14;

      // Soft, realistic string physics (gentle air drift)
      const t = now * 0.0013;
      const airBreeze = Math.sin(t * 0.85) * 1.4 + Math.cos(t * 1.6) * 0.5;
      const springForce = -0.032 * (swayPos - airBreeze);
      const damping = 0.94;

      swayVel = (swayVel + springForce) * damping;
      swayPos += swayVel;

      // =========================================================
      // AUTHENTIC ZERO-G SPACE FLOAT (Multi-Harmonic Spacewalk Drift)
      // =========================================================
      // Dual-harmonic organic microgravity space float
      const floatY = Math.sin(t * 0.95) * 4.8 + Math.cos(t * 0.45) * 1.8;
      const floatX = Math.cos(t * 0.7) * 2.2;
      const floatTilt = Math.sin(t * 0.8) * 3.2; // subtle realistic 3.2° body tilt

      let pullHeave = 0;
      let pullReach = 0;
      let pullTilt = 0;

      if (isScrolling) {
        pullHeave = Math.sin(armCycle * 2) * 3.0;
        pullReach = -Math.abs(Math.sin(armCycle)) * 2.0; // body flexes gently toward chain
        pullTilt = Math.sin(armCycle) * 3.8; // torso angle leans softly into haul

        // Active micro-thruster flares from PLSS backpack
        if (spk1Ref.current) {
          spk1Ref.current.setAttribute('opacity', '0.85');
          spk1Ref.current.setAttribute('cx', -16 - Math.random() * 4);
        }
        if (spk2Ref.current) {
          spk2Ref.current.setAttribute('opacity', '0.7');
          spk2Ref.current.setAttribute('cx', -19 - Math.random() * 5);
        }
      } else {
        if (spk1Ref.current) spk1Ref.current.setAttribute('opacity', '0.25');
        if (spk2Ref.current) spk2Ref.current.setAttribute('opacity', '0.15');
      }

      const totalAstroX = 46 + floatX + pullReach;
      const totalAstroY = astroY + floatY + pullHeave;
      const totalTilt = floatTilt + pullTilt;

      if (astroBodyRef.current) {
        astroBodyRef.current.setAttribute('transform', `translate(${totalAstroX.toFixed(2)}, ${totalAstroY.toFixed(2)}) rotate(${totalTilt.toFixed(2)})`);
      }

      // =========================================================
      // PROPORTIONATE ZERO-G SPACESUIT LEGS (NASA Neutral Posture)
      // No stick-legs! Torso: ~22px, Legs: ~26px with ~130° bent knees
      // =========================================================
      const legT = t * 1.1 + (isScrolling ? armCycle * 0.35 : 0);

      // Left Leg (Trails naturally behind in microgravity with flexed knee)
      // Hip (-4, 14) -> Knee (-11, 26) -> Ankle/Boot (-14, 38)
      const kneeL_x = -11 + Math.sin(legT) * 2.0;
      const kneeL_y = 26 + Math.cos(legT * 0.8) * 1.6;
      const footL_x = -15 + Math.sin(legT + 0.5) * 2.6;
      const footL_y = 38 + Math.cos(legT * 0.6) * 1.8;

      if (legLRef.current) {
        legLRef.current.setAttribute('d', `M -4 14 Q ${kneeL_x.toFixed(1)} ${kneeL_y.toFixed(1)} ${footL_x.toFixed(1)} ${footL_y.toFixed(1)}`);
      }
      if (bootLRef.current) {
        bootLRef.current.setAttribute('transform', `translate(${footL_x.toFixed(1)}, ${footL_y.toFixed(1)}) rotate(${32 + Math.sin(legT) * 6})`);
      }

      // Right Leg (Foreground zero-g relaxed trail)
      // Hip (3, 14) -> Knee (-2, 27) -> Ankle/Boot (-5, 40)
      const kneeR_x = -2 - Math.sin(legT + 0.6) * 2.0;
      const kneeR_y = 27 + Math.cos(legT + 0.6) * 1.6;
      const footR_x = -5 - Math.sin(legT + 1.1) * 2.6;
      const footR_y = 40 - Math.cos(legT * 0.6) * 1.8;

      if (legRRef.current) {
        legRRef.current.setAttribute('d', `M 3 14 Q ${kneeR_x.toFixed(1)} ${kneeR_y.toFixed(1)} ${footR_x.toFixed(1)} ${footR_y.toFixed(1)}`);
      }
      if (bootRRef.current) {
        bootRRef.current.setAttribute('transform', `translate(${footR_x.toFixed(1)}, ${footR_y.toFixed(1)}) rotate(${22 - Math.sin(legT + 0.6) * 6})`);
      }

      // =========================================================
      // ARTICULATED ARMS HAULING THE CHAIN (Chain at local x ~ 22)
      // =========================================================
      const chainLocalX = 22 - (floatX + pullReach);

      if (isScrolling) {
        const handL_y = -4 + Math.sin(armCycle) * 11;
        const handR_y = 8 - Math.sin(armCycle) * 11;

        if (armLRef.current) {
          armLRef.current.setAttribute('d', `M -3 -1 Q 7 ${(handL_y - 2) / 2} ${chainLocalX.toFixed(1)} ${handL_y.toFixed(1)}`);
        }
        if (gloveLRef.current) {
          gloveLRef.current.setAttribute('transform', `translate(${chainLocalX.toFixed(1)}, ${handL_y.toFixed(1)})`);
        }

        if (armRRef.current) {
          armRRef.current.setAttribute('d', `M 6 1 Q 14 ${(handR_y + 2) / 2} ${chainLocalX.toFixed(1)} ${handR_y.toFixed(1)}`);
        }
        if (gloveRRef.current) {
          gloveRRef.current.setAttribute('transform', `translate(${chainLocalX.toFixed(1)}, ${handR_y.toFixed(1)})`);
        }
      } else {
        // Idle relaxed hold on the chain
        if (armLRef.current) {
          armLRef.current.setAttribute('d', `M -3 -1 Q 7 -6 ${chainLocalX.toFixed(1)} -3`);
        }
        if (gloveLRef.current) {
          gloveLRef.current.setAttribute('transform', `translate(${chainLocalX.toFixed(1)}, -3)`);
        }

        if (armRRef.current) {
          armRRef.current.setAttribute('d', `M 6 1 Q 14 5 ${chainLocalX.toFixed(1)} 7`);
        }
        if (gloveRRef.current) {
          gloveRRef.current.setAttribute('transform', `translate(${chainLocalX.toFixed(1)}, 7)`);
        }
      }

      // =========================================================
      // INTERLOCKING CHAIN LINKS WITH PHYSICS SWAY
      // =========================================================
      const linkSpacing = 16.5; // Pitch of each interlocking link
      const totalDist = botY - topY;
      const numLinks = Math.ceil(totalDist / linkSpacing) + 2;

      let frontD = '';
      let sideD = '';
      let hiD = '';

      const phaseShift = ((chainOffset % linkSpacing) + linkSpacing) % linkSpacing;

      for (let i = -1; i <= numLinks; i++) {
        const y = topY + i * linkSpacing + phaseShift;
        if (y < topY - 8 || y > botY + 8) continue;

        // Normalized position along chain (0 at top, 1 at bottom)
        const u = Math.min(Math.max((y - topY) / totalDist, 0), 1);
        // Pinned envelope: 0 at top and bottom, max flexible sway in middle
        const env = Math.sin(u * Math.PI);
        // Soft traveling wave along chain
        const wave = Math.sin(u * 3.5 - t * 1.5) * (isScrolling ? 0.9 : 0.3);
        const x = 68 + (swayPos + wave) * env;

        // Alternating face-on and edge-on interlocking links
        const isFrontLink = (Math.floor((y - chainOffset) / linkSpacing) % 2) === 0;

        if (isFrontLink) {
          // Front-facing oval link
          const rw = 5.2;
          const rh = 7.4;
          frontD += `M ${x - rw} ${y - rh + 3} ` +
                    `a 3 3 0 0 1 3 -3 h ${rw * 2 - 6} a 3 3 0 0 1 3 3 ` +
                    `v ${rh * 2 - 6} a 3 3 0 0 1 -3 3 h -${rw * 2 - 6} a 3 3 0 0 1 -3 -3 Z `;

          // Specular metallic sheen
          hiD += `M ${x - rw + 1.5} ${y - rh + 2.4} a 2 2 0 0 1 2 -1.1 h 3.8 `;
        } else {
          // Edge-on connecting link passing through center hole
          sideD += `M ${x} ${y - 8} L ${x} ${y + 8} `;
          hiD += `M ${x - 0.8} ${y - 5} L ${x - 0.8} ${y + 5} `;
        }
      }

      // Smooth shadow curve behind chain
      const midSway = 68 + swayPos * 0.85;
      if (chainShadowRef.current) {
        chainShadowRef.current.setAttribute('d', `M 68 ${topY} Q ${midSway} ${(topY + botY) / 2} 68 ${botY}`);
      }
      if (chainFrontRef.current) chainFrontRef.current.setAttribute('d', frontD);
      if (chainSideRef.current) chainSideRef.current.setAttribute('d', sideD);
      if (chainHiRef.current) chainHiRef.current.setAttribute('d', hiD);

      frameId = requestAnimationFrame(animate);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    frameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('scroll', onScroll);
      cancelAnimationFrame(frameId);
      clearTimeout(scrollTimeout);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goldPrimary = isLight ? '#d97706' : '#fbbf24';
  const goldSecondary = isLight ? '#b45309' : '#f59e0b';
  const suitFill = isLight ? '#fffbeb' : '#0c0a18';
  const packFill = isLight ? '#fef3c7' : '#1a162b';

  return (
    <div
      className="fixed inset-0 pointer-events-none z-[60] select-none overflow-x-hidden"
      aria-label="Celestial Gear Sprocket & Flexible Chain System"
    >
      {/* Right Column Container: aligned closely to the right edge */}
      <div className="absolute top-0 bottom-0 right-0 sm:right-1 md:right-2 w-28 sm:w-32">

        {/* FULL VIEWPORT SVG CANVAS: Gear, chain, astronaut, and bottom spool */}
        <svg
          width="100%"
          height="100%"
          className="w-full h-full overflow-visible"
        >
          <defs>
            {/* Luminous Gold Glow Filter */}
            <filter id="chainGlowFilter" x="-40%" y="-20%" width="180%" height="140%">
              <feDropShadow dx="0" dy="0" stdDeviation="3.2" floodColor={goldPrimary} floodOpacity="0.85" />
            </filter>

            {/* Metallic Chain Shimmer Gradient */}
            <linearGradient id="chainMetallicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#fef08a" />
              <stop offset="65%" stopColor={goldPrimary} />
              <stop offset="100%" stopColor={goldSecondary} />
            </linearGradient>

            {/* Realistic Astronaut Visor Gradient */}
            <linearGradient id="gearAstroVisor" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" />
              <stop offset="45%" stopColor="#0284c7" />
              <stop offset="80%" stopColor={goldSecondary} />
              <stop offset="100%" stopColor={goldPrimary} />
            </linearGradient>
          </defs>

          {/* ======================================================== */}
          {/* 1. TOP HEADER GEAR SPROCKET (Permanently pinned at top)  */}
          {/* ======================================================== */}
          <g
            onClick={scrollToTop}
            className="pointer-events-auto cursor-pointer group"
            title="Celestial Header Gear - Click to scroll to top"
          >
            {/* Ceiling Horizontal Mounting Plate */}
            <rect
              x="36"
              y="0"
              width="64"
              height="7"
              rx="3.5"
              fill={goldSecondary}
              stroke={goldPrimary}
              strokeWidth="1.2"
            />
            {/* Mounting Rivets */}
            <circle cx="44" cy="3.5" r="1.5" fill="#ffffff" />
            <circle cx="92" cy="3.5" r="1.5" fill="#ffffff" />

            {/* Industrial Hanger Brackets */}
            <path d="M 54 7 L 54 32 L 60 32 L 60 7 Z" fill={packFill} stroke={goldPrimary} strokeWidth="1.2" />
            <path d="M 82 7 L 82 32 L 76 32 L 76 7 Z" fill={packFill} stroke={goldPrimary} strokeWidth="1.2" />

            {/* Large Cogwheel Gear with Teeth (Rotates on scroll) */}
            <g ref={gearGroupRef} transform="translate(68, 32)">
              {/* Outer Gear Teeth Contour */}
              <path
                ref={gearTeethRef}
                fill={packFill}
                stroke={goldPrimary}
                strokeWidth="2.4"
                strokeLinejoin="round"
                filter="url(#chainGlowFilter)"
              />
              {/* Inner Gear Hub Rim */}
              <circle cx="0" cy="0" r="11" fill={goldSecondary} stroke={goldPrimary} strokeWidth="1.6" />
              {/* Central Axle Pin & Nut */}
              <circle cx="0" cy="0" r="5" fill="#fef08a" stroke={goldSecondary} strokeWidth="1.2" />
              <circle cx="0" cy="0" r="1.8" fill="#141024" />
              {/* 4 Mechanical Spoke Cutouts */}
              <circle cx="-6.5" cy="0" r="2.2" fill={packFill} />
              <circle cx="6.5" cy="0" r="2.2" fill={packFill} />
              <circle cx="0" cy="-6.5" r="2.2" fill={packFill} />
              <circle cx="0" cy="6.5" r="2.2" fill={packFill} />
            </g>
          </g>

          {/* ======================================================== */}
          {/* 2. FLEXIBLE CHAIN WITH REALISTIC WIND PHYSICS & LINKS    */}
          {/* ======================================================== */}
          {/* Chain Depth Shadow */}
          <path
            ref={chainShadowRef}
            fill="none"
            stroke={isLight ? '#78350f' : '#000000'}
            strokeWidth="6"
            strokeLinecap="round"
            opacity="0.3"
          />

          {/* Front-Facing Oval Links */}
          <path
            ref={chainFrontRef}
            fill="none"
            stroke="url(#chainMetallicGrad)"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#chainGlowFilter)"
          />

          {/* Interlocking Edge-On Links */}
          <path
            ref={chainSideRef}
            fill="none"
            stroke={goldSecondary}
            strokeWidth="3.8"
            strokeLinecap="round"
          />

          {/* White Specular Highlights */}
          <path
            ref={chainHiRef}
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinecap="round"
            opacity="0.9"
          />

          {/* ======================================================== */}
          {/* 3. BOTTOM BASE GEAR SPROCKET ASSEMBLY (Matching the Top)  */}
          {/* ======================================================== */}
          {/* Floor Horizontal Mounting Plate and Upright Brackets */}
          <g ref={bottomMountRef} transform="translate(0, 800)">
            {/* Floor Horizontal Mounting Plate */}
            <rect
              x="36"
              y="27"
              width="64"
              height="7"
              rx="3.5"
              fill={goldSecondary}
              stroke={goldPrimary}
              strokeWidth="1.2"
            />
            {/* Mounting Rivets / Screws */}
            <circle cx="44" cy="30.5" r="1.5" fill="#ffffff" />
            <circle cx="92" cy="30.5" r="1.5" fill="#ffffff" />

            {/* Industrial Upright Floor Brackets */}
            <path d="M 54 27 L 54 0 L 60 0 L 60 27 Z" fill={packFill} stroke={goldPrimary} strokeWidth="1.2" />
            <path d="M 82 27 L 82 0 L 76 0 L 76 27 Z" fill={packFill} stroke={goldPrimary} strokeWidth="1.2" />
          </g>

          {/* Large Bottom Cogwheel Gear with Teeth (Rotates in sync on scroll) */}
          <g ref={bottomGearGroupRef} transform="translate(68, 800)">
            {/* Outer Gear Teeth Contour */}
            <path
              ref={bottomGearTeethRef}
              fill={packFill}
              stroke={goldPrimary}
              strokeWidth="2.4"
              strokeLinejoin="round"
              filter="url(#chainGlowFilter)"
            />
            {/* Inner Gear Hub Rim */}
            <circle cx="0" cy="0" r="11" fill={goldSecondary} stroke={goldPrimary} strokeWidth="1.6" />
            {/* Central Axle Pin & Nut */}
            <circle cx="0" cy="0" r="5" fill="#fef08a" stroke={goldSecondary} strokeWidth="1.2" />
            <circle cx="0" cy="0" r="1.8" fill="#141024" />
            {/* 4 Mechanical Spoke Cutouts */}
            <circle cx="-6.5" cy="0" r="2.2" fill={packFill} />
            <circle cx="6.5" cy="0" r="2.2" fill={packFill} />
            <circle cx="0" cy="-6.5" r="2.2" fill={packFill} />
            <circle cx="0" cy="6.5" r="2.2" fill={packFill} />
          </g>

          {/* ======================================================== */}
          {/* 4. REALISTIC ZERO-G FLOATING ASTRONAUT                   */}
          {/* NASA Neutral Body Posture: proportionate suit, bent knees */}
          {/* ======================================================== */}
          <g
            ref={astroBodyRef}
            transform="translate(46, 680)"
            onClick={scrollToTop}
            className="pointer-events-auto cursor-pointer group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            title="Astronaut hauling the chain - Click to scroll to top"
          >
            {/* PLSS Astronaut Backpack (Life Support System) */}
            <rect
              x="-12"
              y="-6"
              width="7"
              height="22"
              rx="2.5"
              fill={packFill}
              stroke={goldSecondary}
              strokeWidth="1.4"
            />
            {/* Oxygen Tank Bands */}
            <line x1="-12" y1="1" x2="-5" y2="1" stroke={goldSecondary} strokeWidth="0.8" opacity="0.6" />
            <line x1="-12" y1="7" x2="-5" y2="7" stroke={goldSecondary} strokeWidth="0.8" opacity="0.6" />
            <line x1="-12" y1="13" x2="-5" y2="13" stroke={goldSecondary} strokeWidth="0.8" opacity="0.6" />

            {/* Thruster micro-burst particles */}
            <circle ref={spk1Ref} cx="-16" cy="14" r="1.4" fill="#38bdf8" opacity="0.6" />
            <circle ref={spk2Ref} cx="-19" cy="18" r="1.0" fill={goldPrimary} opacity="0.5" />

            {/* Left Leg (Background Zero-G Float - trails back with flexed knee) */}
            <path
              ref={legLRef}
              stroke={goldPrimary}
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <g ref={bootLRef}>
              <path d="M -3 -2 L 5 -2 Q 7 0 6 3 L -3 3 Z" fill={goldSecondary} stroke={goldPrimary} strokeWidth="1.1" />
              <line x1="-2" y1="3" x2="5" y2="3" stroke="#ffffff" strokeWidth="0.7" opacity="0.6" />
            </g>

            {/* Right Leg (Foreground Zero-G Float - relaxed posture, knee flexed) */}
            <path
              ref={legRRef}
              stroke={goldPrimary}
              strokeWidth="3.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            <g ref={bootRRef}>
              <path d="M -3 -2 L 5 -2 Q 7 0 6 3 L -3 3 Z" fill={goldSecondary} stroke={goldPrimary} strokeWidth="1.1" />
              <line x1="-2" y1="3" x2="5" y2="3" stroke="#ffffff" strokeWidth="0.7" opacity="0.6" />
            </g>

            {/* Spacesuit Contoured Puffy Torso */}
            <path
              d="M -6 -5 Q 0 -8 8 -5 L 6 15 Q 0 17 -6 14 Z"
              fill={suitFill}
              stroke={goldPrimary}
              strokeWidth="2.2"
              strokeLinejoin="round"
            />

            {/* Chest Mission Telemetry Pack */}
            <rect
              x="-2.5"
              y="-1"
              width="8.5"
              height="9.5"
              rx="1.8"
              fill={packFill}
              stroke={goldSecondary}
              strokeWidth="1.1"
            />
            <circle cx="-0.5" cy="2" r="0.9" fill="#10b981" />
            <circle cx="3" cy="2" r="0.9" fill={goldSecondary} />
            <line x1="-1.2" y1="5.5" x2="4.2" y2="5.5" stroke="#38bdf8" strokeWidth="0.9" />

            {/* Neck Ring Hermetic Seal */}
            <ellipse cx="1" cy="-8" rx="5.5" ry="1.8" fill={goldSecondary} stroke={goldPrimary} strokeWidth="1" />

            {/* Helmet Sphere */}
            <circle
              cx="1"
              cy="-17"
              r="10"
              fill={suitFill}
              stroke={goldPrimary}
              strokeWidth="2.2"
            />

            {/* Curved Reflective Visor */}
            <ellipse
              cx="3.2"
              cy="-17"
              rx="6.8"
              ry="5.8"
              fill="url(#gearAstroVisor)"
            />

            {/* Specular Sun Glare Arc */}
            <path
              d="M 0 -21 Q 5 -20 7 -17"
              stroke="#ffffff"
              strokeWidth="1.3"
              strokeLinecap="round"
              fill="none"
              opacity="0.9"
            />

            {/* Left Arm & Gauntlet (Hauling chain at local x ~ 22) */}
            <path
              ref={armLRef}
              stroke={goldPrimary}
              strokeWidth="3.6"
              strokeLinecap="round"
              fill="none"
            />
            <g ref={gloveLRef} transform="translate(22, -3)">
              <ellipse cx="0" cy="0" rx="3.6" ry="2.8" fill={goldSecondary} stroke={goldPrimary} strokeWidth="1.2" />
              <path d="M -1.2 -2 Q 1.5 0 -1.2 2" stroke="#ffffff" strokeWidth="0.8" fill="none" />
            </g>

            {/* Right Arm & Gauntlet (Hauling chain at local x ~ 22) */}
            <path
              ref={armRRef}
              stroke={goldPrimary}
              strokeWidth="3.6"
              strokeLinecap="round"
              fill="none"
            />
            <g ref={gloveRRef} transform="translate(22, 7)">
              <ellipse cx="0" cy="0" rx="3.6" ry="2.8" fill={goldSecondary} stroke={goldPrimary} strokeWidth="1.2" />
              <path d="M -1.2 -2 Q 1.5 0 -1.2 2" stroke="#ffffff" strokeWidth="0.8" fill="none" />
            </g>
          </g>
        </svg>

        {/* Floating Tooltip Pill */}
        <button
          onClick={scrollToTop}
          className={`absolute bottom-[160px] right-1 sm:right-2 pointer-events-auto px-2.5 py-1 rounded-full text-[10px] font-mono tracking-wider font-bold border shadow-lg transition-all duration-200 cursor-pointer ${
            isLight
              ? 'bg-amber-100 text-amber-900 border-amber-400 hover:bg-amber-200 shadow-amber-500/20'
              : 'bg-zinc-950/95 text-amber-300 border-amber-500/50 hover:bg-amber-950/80 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
          } ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2 pointer-events-none'}`}
        >
          ▲ TOP ({scrollPct}%)
        </button>

      </div>
    </div>
  );
}