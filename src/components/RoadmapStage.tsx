import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ROADMAP } from "../data/about";

type Stage = (typeof ROADMAP)[number];

export function RoadmapStage({ stage, index }: { stage: Stage; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const focused = useInView(ref, { margin: "-40% 0px -40% 0px" });
  const seen = useInView(ref, { once: true, amount: 0.4 });
  const mastered = index === 0;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      animate={seen ? { opacity: 1, y: 0 } : undefined}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className="relative pl-12"
    >
      <span
        className={`absolute left-0 top-7 grid h-6 w-6 place-items-center rounded-full border transition-[border-color,background-color,box-shadow] duration-300 ${
          focused
            ? "border-accent bg-accent shadow-[0_0_18px_rgba(139,156,255,0.8)]"
            : "border-line-strong bg-ink"
        }`}
      >
        <span className={`h-2 w-2 rounded-full ${focused ? "bg-ink" : "bg-fog"}`} />
      </span>

      <div
        className={`rounded-3xl border p-7 backdrop-blur-xl transition-[border-color,background-color] duration-300 ${
          focused ? "border-accent/40 bg-white/[0.06]" : "border-line bg-white/[0.02]"
        }`}
      >
        <div className="flex items-center justify-between gap-4">
          <h3 className="font-display text-3xl font-bold text-snow">{stage.title}</h3>
          <span
            className={`whitespace-nowrap rounded-full px-3 py-1 text-xs font-medium ${
              mastered ? "bg-accent text-ink" : "bg-raised text-accent-soft ring-1 ring-accent/30"
            }`}
          >
            {stage.status}
          </span>
        </div>
        <p className="mt-3 max-w-lg text-[15px] leading-relaxed text-mist">{stage.body}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {stage.points.map((p) => (
            <li key={p} className="rounded-md bg-raised px-2.5 py-1 text-xs text-mist">
              {p}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}
