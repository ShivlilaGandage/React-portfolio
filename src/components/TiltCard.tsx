import type * as React from "react";
import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  children: (hovered: boolean) => React.ReactNode;
  className?: string;
  max?: number;
};

/** Card that tilts toward the cursor in 3D and lights a neon border on hover. */
export function TiltCard({ children, className = "", max = 8 }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const sx = useSpring(px, { stiffness: 160, damping: 18 });
  const sy = useSpring(py, { stiffness: 160, damping: 18 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-max, max]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [max, -max]);

  const onMove = (e: React.PointerEvent) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    px.set((e.clientX - r.left) / r.width - 0.5);
    py.set((e.clientY - r.top) / r.height - 0.5);
  };

  return (
    <div style={{ perspective: 1200 }} className="h-full">
      <motion.div
        ref={ref}
        onPointerMove={onMove}
        onPointerEnter={() => setHovered(true)}
        onPointerLeave={() => {
          setHovered(false);
          px.set(0);
          py.set(0);
        }}
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className={`relative h-full rounded-3xl border bg-surface/80 backdrop-blur-xl transition-[border-color,box-shadow] duration-200 ${
          hovered
            ? "border-accent/70 shadow-[0_0_0_1px_rgba(139,156,255,0.35),0_0_40px_rgba(139,156,255,0.25),0_30px_60px_rgba(0,0,0,0.5)]"
            : "border-line shadow-[0_20px_40px_rgba(0,0,0,0.35)]"
        } ${className}`}
      >
        {children(hovered)}
      </motion.div>
    </div>
  );
}
