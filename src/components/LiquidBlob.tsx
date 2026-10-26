import { motion } from "framer-motion";
import { useMemo } from "react";
import { blobFrames } from "../lib/blob";

type Props = {
  seed: number;
  className?: string;
  fill?: string;
  stroke?: string;
  duration?: number;
};

/** A slow, continuously morphing SVG liquid shape. */
export function LiquidBlob({ seed, className = "", fill = "#141b2b", stroke, duration = 18 }: Props) {
  const frames = useMemo(() => blobFrames(100, 100, 80, 0.45, seed), [seed]);
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden>
      <motion.path
        d={frames[0]}
        animate={{ d: frames }}
        transition={{ duration, repeat: Infinity, ease: "linear" }}
        fill={fill}
        stroke={stroke}
        strokeWidth={stroke ? 0.6 : 0}
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
