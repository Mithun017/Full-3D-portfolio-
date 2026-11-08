import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

/**
 * CosmicBackground
 * Inspired by Casa di Solare's signature celestial aesthetic:
 * - Concentric orbiting golden & amber solar rings
 * - Central luminous solar core with orbital nodes
 * - Parallax particle dust field reacting smoothly to mouse & scroll
 */
export default function CosmicBackground() {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene, Camera, Renderer ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x050409, 0.0018);

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 38;

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance'
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    container.appendChild(renderer.domElement);

    // --- Solar Core (Center Glow) ---
    const coreGroup = new THREE.Group();
    scene.add(coreGroup);

    // Inner wireframe sphere
    const coreGeometry = new THREE.IcosahedronGeometry(3.6, 3);
    const coreMaterial = new THREE.MeshBasicMaterial({
      color: 0xf59e0b,
      wireframe: true,
      transparent: true,
      opacity: 0.35,
    });
    const coreMesh = new THREE.Mesh(coreGeometry, coreMaterial);
    coreGroup.add(coreMesh);

    // Inner glowing sphere
    const innerCoreGeo = new THREE.SphereGeometry(2.4, 32, 32);
    const innerCoreMat = new THREE.MeshBasicMaterial({
      color: 0xfbbf24,
      transparent: true,
      opacity: 0.2,
      wireframe: false,
    });
    const innerCore = new THREE.Mesh(innerCoreGeo, innerCoreMat);
    coreGroup.add(innerCore);

    // --- Casa di Solare Concentric Rotating Solar Rings ---
    const ringsGroup = new THREE.Group();
    scene.add(ringsGroup);

    const ringData = [
      { radius: 6.5, tube: 0.035, radialSegments: 16, tubularSegments: 120, color: 0xfbbf24, rotX: 1.1, rotY: 0.4, speed: 0.004 },
      { radius: 9.8, tube: 0.045, radialSegments: 16, tubularSegments: 140, color: 0xf59e0b, rotX: -0.7, rotY: 0.8, speed: -0.003 },
      { radius: 13.5, tube: 0.03, radialSegments: 16, tubularSegments: 160, color: 0xd97706, rotX: 0.5, rotY: -1.2, speed: 0.002 },
      { radius: 17.5, tube: 0.05, radialSegments: 16, tubularSegments: 180, color: 0xfde68a, rotX: 1.8, rotY: 0.3, speed: -0.0015 },
      { radius: 22.0, tube: 0.025, radialSegments: 16, tubularSegments: 200, color: 0x38bdf8, rotX: -1.4, rotY: -0.6, speed: 0.001 },
    ];

    const rings = ringData.map((data) => {
      const geom = new THREE.TorusGeometry(data.radius, data.tube, data.radialSegments, data.tubularSegments);
      const mat = new THREE.MeshBasicMaterial({
        color: data.color,
        wireframe: false,
        transparent: true,
        opacity: 0.55
      });
      const mesh = new THREE.Mesh(geom, mat);
      mesh.rotation.x = data.rotX;
      mesh.rotation.y = data.rotY;
      ringsGroup.add(mesh);
      return { mesh, speed: data.speed, initialX: data.rotX, initialY: data.rotY };
    });

    // --- Orbital Nodes / Satellite Gems on the rings ---
    const nodeGeometry = new THREE.OctahedronGeometry(0.35, 0);
    const nodeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true });
    const nodes = [];
    for (let i = 0; i < 8; i++) {
      const node = new THREE.Mesh(nodeGeometry, nodeMaterial);
      const angle = (i / 8) * Math.PI * 2;
      const radius = 9.8;
      node.position.set(Math.cos(angle) * radius, Math.sin(angle) * radius, 0);
      ringsGroup.add(node);
      nodes.push({ mesh: node, angle, radius, speed: 0.005 + i * 0.001 });
    }

    // --- Ambient Particle Dust Field ---
    const particleCount = 1200;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const colorPalette = [
      new THREE.Color(0xfbbf24), // Gold
      new THREE.Color(0xf59e0b), // Amber
      new THREE.Color(0x38bdf8), // Cyan
      new THREE.Color(0xe0e7ff), // Soft white
    ];

    for (let i = 0; i < particleCount; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 120;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 90;

      const c = colorPalette[Math.floor(Math.random() * colorPalette.length)];
      colors[i * 3] = c.r;
      colors[i * 3 + 1] = c.g;
      colors[i * 3 + 2] = c.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.45,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // --- Mouse & Scroll Tracking with Inertia ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;
    let scrollY = 0;
    let targetScrollY = 0;

    const onMouseMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(e.clientY / window.innerHeight) * 2 + 1;
    };

    const onScroll = () => {
      targetScrollY = window.scrollY || window.pageYOffset;
    };

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    // --- Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Smooth mouse interpolation
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      // Smooth scroll interpolation
      scrollY += (targetScrollY - scrollY) * 0.05;

      // Rotate central core
      coreMesh.rotation.x = elapsedTime * 0.2;
      coreMesh.rotation.y = elapsedTime * 0.3;
      innerCore.rotation.y = -elapsedTime * 0.15;
      const corePulse = 1 + Math.sin(elapsedTime * 1.5) * 0.06;
      coreGroup.scale.set(corePulse, corePulse, corePulse);

      // Rotate Concentric Rings
      rings.forEach((ring, idx) => {
        ring.mesh.rotation.z += ring.speed;
        ring.mesh.rotation.x = ring.initialX + Math.sin(elapsedTime * 0.5 + idx) * 0.12;
        ring.mesh.rotation.y = ring.initialY + Math.cos(elapsedTime * 0.4 + idx) * 0.12;
      });

      // Animate Orbiting Nodes
      nodes.forEach((node) => {
        node.angle += node.speed;
        node.mesh.position.x = Math.cos(node.angle) * node.radius;
        node.mesh.position.y = Math.sin(node.angle) * node.radius;
        node.mesh.rotation.x += 0.03;
        node.mesh.rotation.y += 0.04;
      });

      // Subtle particle drift
      particles.rotation.y = elapsedTime * 0.02;
      particles.rotation.x = elapsedTime * 0.01;

      // Camera parallax based on mouse & scroll
      camera.position.x = targetX * 6;
      camera.position.y = targetY * 4 - scrollY * 0.012;
      camera.lookAt(0, -scrollY * 0.012, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);

      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }

      // Dispose geometry and materials
      coreGeometry.dispose();
      coreMaterial.dispose();
      innerCoreGeo.dispose();
      innerCoreMat.dispose();
      rings.forEach((r) => {
        r.mesh.geometry.dispose();
        r.mesh.material.dispose();
      });
      nodeGeometry.dispose();
      nodeMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden"
      aria-hidden="true"
    />
  );
}

