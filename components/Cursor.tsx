"use client";
import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const [clicked,  setClicked]  = useState(false);
  const pos = useRef({ x: -100, y: -100 });
  const ring = useRef({ x: -100, y: -100 });
  const raf  = useRef<number>(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (dotRef.current) {
        dotRef.current.style.left = e.clientX + "px";
        dotRef.current.style.top  = e.clientY + "px";
      }
    };
    const onDown = () => setClicked(true);
    const onUp   = () => setClicked(false);

    const interactables = "a, button, [data-hover]";

    const addHover = (e: Event) => { if ((e.target as Element)?.closest(interactables)) setHovered(true); };
    const remHover = (e: Event) => { if ((e.target as Element)?.closest(interactables)) setHovered(false); };

    document.addEventListener("mousemove",  onMove);
    document.addEventListener("mousedown",  onDown);
    document.addEventListener("mouseup",    onUp);
    document.addEventListener("mouseover",  addHover);
    document.addEventListener("mouseout",   remHover);

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x) * 0.1;
      ring.current.y += (pos.current.y - ring.current.y) * 0.1;
      if (ringRef.current) {
        ringRef.current.style.left = ring.current.x + "px";
        ringRef.current.style.top  = ring.current.y + "px";
      }
      raf.current = requestAnimationFrame(animate);
    };
    raf.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup",   onUp);
      document.removeEventListener("mouseover", addHover);
      document.removeEventListener("mouseout",  remHover);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  const ringSize = hovered ? 52 : clicked ? 20 : 36;

  return (
    <>
      {/* Dot */}
      <div
        ref={dotRef}
        style={{
          position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9999,
          width: 5, height: 5, borderRadius: "50%",
          background: "var(--accent)",
          transform: "translate(-50%,-50%)",
          transition: "width 0.2s, height 0.2s",
        }}
      />
      {/* Ring */}
      <div
        ref={ringRef}
        style={{
          position: "fixed", top: 0, left: 0, pointerEvents: "none", zIndex: 9998,
          width: ringSize, height: ringSize, borderRadius: "50%",
          border: `1.5px solid rgba(var(--accent-rgb), ${hovered ? 0.9 : 0.4})`,
          transform: "translate(-50%,-50%)",
          transition: "width 0.35s cubic-bezier(0.34,1.56,0.64,1), height 0.35s cubic-bezier(0.34,1.56,0.64,1), border-color 0.3s",
        }}
      />
    </>
  );
}
