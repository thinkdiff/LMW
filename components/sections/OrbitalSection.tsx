"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import * as THREE from "three";

const SERVICES = [
  { name: "Software Dev", color: "#0066FF", href: "/services/software-dev", angle: 0 },
  { name: "Web & Mobile", color: "#7B2FFF", href: "/services/web-mobile", angle: 51.4 },
  { name: "Automation", color: "#00D4C8", href: "/services/automation", angle: 102.8 },
  { name: "AI Services", color: "#C8C8FF", href: "/services/ai-services", angle: 154.2 },
  { name: "AI / ML", color: "#FFB800", href: "/services/ai-ml", angle: 205.7 },
  { name: "Accounting", color: "#00C896", href: "/services/accounting", angle: 257.1 },
  { name: "Staffing", color: "#FF8C42", href: "/services/staffing", angle: 308.5 },
];

export function OrbitalSection() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, canvas.offsetWidth / canvas.offsetHeight, 0.1, 1000);
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 0, 0);

    // Central core — LucenEdge nucleus
    const coreGeo = new THREE.SphereGeometry(0.45, 64, 64);
    const coreMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#00D4FF"),
      emissive: new THREE.Color("#00D4FF"),
      emissiveIntensity: 0.6,
      roughness: 0.2,
      metalness: 0.8,
    });
    const core = new THREE.Mesh(coreGeo, coreMat);
    scene.add(core);

    // Core glow ring
    const glowGeo = new THREE.RingGeometry(0.5, 0.9, 64);
    const glowMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#00D4FF"),
      transparent: true,
      opacity: 0.12,
      side: THREE.DoubleSide,
    });
    const glowRing = new THREE.Mesh(glowGeo, glowMat);
    glowRing.rotation.x = Math.PI / 2;
    scene.add(glowRing);

    // Orbit rings + service nodes
    const orbitGroup = new THREE.Group();
    const ORBIT_RADIUS = 3.2;

    // Main orbit ring
    const ringGeo = new THREE.TorusGeometry(ORBIT_RADIUS, 0.008, 16, 200);
    const ringMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffffff"),
      transparent: true,
      opacity: 0.06,
    });
    const ring = new THREE.Mesh(ringGeo, ringMat);
    ring.rotation.x = Math.PI / 2.4;
    orbitGroup.add(ring);

    // Service nodes on orbit
    const nodeMeshes: THREE.Mesh[] = [];
    const connectorLines: THREE.Line[] = [];

    SERVICES.forEach((service, i) => {
      const angleRad = (service.angle * Math.PI) / 180;
      const x = Math.cos(angleRad) * ORBIT_RADIUS;
      const z = Math.sin(angleRad) * ORBIT_RADIUS * 0.7; // ellipse
      const y = Math.sin(angleRad) * 0.4;

      // Node sphere
      const nodeGeo = new THREE.SphereGeometry(0.16, 32, 32);
      const nodeMat = new THREE.MeshStandardMaterial({
        color: new THREE.Color(service.color),
        emissive: new THREE.Color(service.color),
        emissiveIntensity: 0.5,
        roughness: 0.3,
        metalness: 0.6,
      });
      const node = new THREE.Mesh(nodeGeo, nodeMat);
      node.position.set(x, y, z);
      node.userData = { service, index: i };
      orbitGroup.add(node);
      nodeMeshes.push(node);

      // Line from core to node
      const linePoints = [
        new THREE.Vector3(0, 0, 0),
        new THREE.Vector3(x, y, z),
      ];
      const lineGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
      const lineMat = new THREE.LineBasicMaterial({
        color: new THREE.Color(service.color),
        transparent: true,
        opacity: 0.12,
      });
      const line = new THREE.Line(lineGeo, lineMat);
      orbitGroup.add(line);
      connectorLines.push(line);
    });

    scene.add(orbitGroup);

    // Point lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x00d4ff, 2, 10);
    pointLight1.position.set(2, 2, 2);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xffb800, 1, 10);
    pointLight2.position.set(-2, -1, -2);
    scene.add(pointLight2);

    // Mouse interaction
    let mouseX = 0, mouseY = 0;
    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
      mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Animation
    let animId: number;
    let time = 0;
    const animate = () => {
      animId = requestAnimationFrame(animate);
      time += 0.005;

      // Rotate orbit
      orbitGroup.rotation.y += 0.004;
      orbitGroup.rotation.x = mouseY * 0.15;

      // Pulsing core
      const pulse = 1 + Math.sin(time * 2) * 0.05;
      core.scale.setScalar(pulse);
      glowRing.scale.setScalar(pulse * 1.1);

      // Camera tilt follows mouse
      camera.position.x += (mouseX * 1.5 - camera.position.x) * 0.02;
      camera.position.y += (-mouseY * 1 + 2 - camera.position.y) * 0.02;
      camera.lookAt(0, 0, 0);

      renderer.render(scene, camera);
    };
    animate();

    const handleResize = () => {
      if (!canvas) return;
      renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
      camera.aspect = canvas.offsetWidth / canvas.offsetHeight;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      canvas.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, []);

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 bg-gradient-radial from-[#00D4FF08] via-transparent to-transparent pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <span className="line-accent mx-auto" />
            <span className="text-label">The LucenEdge Ecosystem</span>
            <span className="line-accent mx-auto" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-display-lg font-display font-light text-platinum"
          >
            One center.
            <br />
            <em className="italic text-[var(--lucen-blue)]">Seven domains.</em>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-4 text-platinum-dim max-w-lg mx-auto"
          >
            Every service domain orbits a single truth — your business transformation.
            Hover the nodes to explore each orbit.
          </motion.p>
        </div>

        {/* Main layout: Canvas + Labels */}
        <div className="relative flex flex-col lg:flex-row items-center gap-12">
          {/* Three.js Canvas */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full lg:w-2/3 aspect-square max-w-[600px] mx-auto"
          >
            <canvas ref={canvasRef} className="w-full h-full" />

            {/* Center label */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="text-center">
                <p className="font-display text-2xl font-semibold text-[var(--lucen-blue)] glow-text">LE</p>
                <p className="text-[9px] font-mono-custom tracking-[0.3em] text-platinum-dim uppercase mt-1">
                  LucenEdge
                </p>
              </div>
            </div>
          </motion.div>

          {/* Service list */}
          <div className="w-full lg:w-1/3 space-y-3">
            {SERVICES.map((service, i) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
              >
                <Link
                  href={service.href}
                  className="group flex items-center gap-4 p-4 rounded-xl border border-transparent hover:border-white/8 hover:bg-white/3 transition-all duration-300"
                  data-cursor-label="Enter"
                >
                  {/* Color dot */}
                  <div
                    className="w-3 h-3 rounded-full flex-shrink-0 transition-transform group-hover:scale-150"
                    style={{
                      background: service.color,
                      boxShadow: `0 0 12px ${service.color}80`,
                    }}
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium text-platinum-dim group-hover:text-platinum transition-colors">
                      {service.name}
                    </p>
                  </div>
                  <div
                    className="text-xs font-mono-custom opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300"
                    style={{ color: service.color }}
                  >
                    →
                  </div>
                </Link>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="pt-4"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 text-sm text-[var(--service-accent)] hover:gap-4 transition-all"
              >
                <span>View all services</span>
                <span>→</span>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
