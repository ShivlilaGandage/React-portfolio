import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { SKILLS } from "../data/about";

export function SkillBadges() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <div className="mt-28">
      <div className="flex items-end justify-between gap-6">
        <h3 className="font-display text-3xl font-bold uppercase text-snow">Toolkit</h3>
        <div className="flex items-center gap-5 text-xs text-fog">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-accent" /> In production
          </span>
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full border border-heat" /> Currently learning
          </span>
        </div>
      </div>
      <ul className="mt-6 flex flex-wrap gap-3 border-t border-line pt-8">
        {SKILLS.map((s) => (
          <li
            key={s.name}
            className="relative"
            onMouseEnter={() => setHovered(s.name)}
            onMouseLeave={() => setHovered(null)}
          >
            <button
              type="button"
              onFocus={() => setHovered(s.name)}
              onBlur={() => setHovered(null)}
              className="flex items-center gap-2 rounded-full border border-line-strong bg-surface px-4 py-2 font-display text-base font-semibold text-snow transition-[translate,border-color,box-shadow] duration-150 ease-out hover:-translate-y-1 hover:border-accent/60 hover:shadow-[0_8px_24px_rgba(139,156,255,0.28)]"
            >
              <span className={`h-2 w-2 rounded-full ${s.core ? "bg-accent" : "border border-heat"}`} />
              {s.name}
            </button>
            <AnimatePresence>
              {hovered === s.name && (
                <motion.span
                  role="tooltip"
                  initial={{ opacity: 0, y: 4, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 4, scale: 0.96 }}
                  transition={{ duration: 0.15, ease: [0.23, 1, 0.32, 1] }}
                  className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-3 w-max max-w-[240px] -translate-x-1/2 rounded-lg border border-line-strong bg-raised px-3 py-2 text-xs text-mist shadow-xl"
                >
                  {s.tip}
                </motion.span>
              )}
            </AnimatePresence>
          </li>
        ))}
      </ul>
    </div>
  );
}
