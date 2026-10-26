import type * as React from "react";
import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

type Props = {
  side: "left" | "right";
  date: string;
  emphasis?: boolean;
  wide?: boolean;
  children: React.ReactNode;
};

export function TimelineEntry({ side, date, emphasis, children }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const lit = useInView(ref, { margin: "0px 0px -45% 0px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const cardSide = side === "left" ? "col-start-1 pr-16" : "col-start-2 pl-16";
  const dateSide = side === "left" ? "col-start-2 row-start-1 pl-16" : "col-start-1 row-start-1 pr-16 text-right";

  return (
    <div ref={ref} className="relative grid grid-cols-2 items-center">
      {/* Node */}
      <span
        className={`absolute left-1/2 top-1/2 z-10 grid h-5 w-5 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border-2 transition-[border-color,background-color,box-shadow] duration-300 ${
          lit ? "border-accent bg-accent shadow-[0_0_20px_rgba(139,156,255,0.95)]" : "border-line-strong bg-ink"
        }`}
      />

      <p
        className={`${dateSide} font-display text-xl font-semibold uppercase tracking-wide transition-colors duration-300 ${
          lit ? "text-accent-soft" : "text-fog"
        }`}
      >
        {date}
      </p>

      <motion.div style={{ y }} className={`${cardSide} row-start-1`}>
        <motion.div
          initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          className={`rounded-3xl border p-8 backdrop-blur-xl transition-[translate,border-color] duration-200 hover:-translate-y-1 ${
            emphasis ? "border-accent/40 bg-white/[0.06]" : "border-line bg-white/[0.03]"
          } hover:border-accent/50`}
        >
          {children}
        </motion.div>
      </motion.div>
    </div>
  );
}
