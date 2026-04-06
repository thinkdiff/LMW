"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CustomCursor() {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const [cursorLabel, setCursorLabel] = useState("");

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 200 };
  const ringX = useSpring(mouseX, springConfig);
  const ringY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 18);
      mouseY.set(e.clientY - 18);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate(${e.clientX - 4}px, ${e.clientY - 4}px)`;
      }
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") ||
        target.closest("button") ||
        target.dataset.cursor;

      if (isClickable) {
        setIsHovering(true);
        const label = target.dataset.cursorLabel || target.closest("[data-cursor-label]")?.getAttribute("data-cursor-label") || "";
        setCursorLabel(label);
      } else {
        setIsHovering(false);
        setCursorLabel("");
      }
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Dot */}
      <div
        ref={cursorDotRef}
        className="cursor-dot fixed top-0 left-0 pointer-events-none z-[99999]"
        style={{ willChange: "transform" }}
      />

      {/* Ring with spring */}
      <motion.div
        ref={cursorRingRef}
        className={`cursor-ring fixed top-0 left-0 pointer-events-none z-[99998] ${isHovering ? "hovering" : ""}`}
        style={{ x: ringX, y: ringY, willChange: "transform" }}
      >
        {cursorLabel && (
          <span className="absolute inset-0 flex items-center justify-center text-[9px] font-mono-custom tracking-widest uppercase text-[var(--service-accent)] opacity-80">
            {cursorLabel}
          </span>
        )}
      </motion.div>
    </>
  );
}
