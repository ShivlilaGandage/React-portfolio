import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Project } from "../data/projects";

const LOOP = "M25,25 L75,25 L75,75 L25,75 Z M25,25 L75,75";

export function FeaturedProject({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <TiltCard max={4}>
      {(hovered) => (
        <div className="grid grid-cols-2 gap-12 p-10" style={{ transform: "translateZ(30px)" }}>
          <div className="flex flex-col">
            <p className="text-sm font-medium text-accent">{project.category}</p>
            <h3 className="mt-3 font-display text-5xl font-bold uppercase leading-[0.95] text-snow">
              {project.title}
              <span className="mt-1 block font-light text-accent-soft">(FM &amp; CAA)</span>
            </h3>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-mist">{project.summary}</p>

            <ul className="mt-6 flex flex-wrap gap-2">
              {project.stack.map((s, i) => (
                <motion.li
                  key={s}
                  animate={{ borderColor: hovered ? "rgba(139,156,255,0.6)" : "rgba(201,209,230,0.15)" }}
                  transition={{ duration: 0.2, delay: hovered ? i * 0.04 : 0 }}
                  className="rounded-full border bg-raised px-3 py-1 text-xs font-medium text-snow"
                >
                  {s}
                </motion.li>
              ))}
            </ul>

            <button
              type="button"
              onClick={onOpen}
              className="mt-auto inline-flex w-fit items-center gap-2 pt-8 font-display text-lg font-bold uppercase tracking-wide text-accent-soft transition-colors duration-150 hover:text-snow"
            >
              View architecture specs
              <ArrowUpRight className="h-5 w-5" />
            </button>
          </div>

          <div className="relative">
            <svg
              viewBox="0 0 100 100"
              preserveAspectRatio="none"
              className="pointer-events-none absolute inset-0 h-full w-full"
              aria-hidden
            >
              <path d={LOOP} fill="none" stroke="rgba(201,209,230,0.12)" strokeWidth={1} vectorEffect="non-scaling-stroke" />
              <motion.path
                d={LOOP}
                fill="none"
                stroke="#8b9cff"
                strokeWidth={1.5}
                vectorEffect="non-scaling-stroke"
                style={{ filter: "drop-shadow(0 0 6px rgba(139,156,255,0.9))" }}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
                transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
              />
            </svg>
            <div className="relative grid h-full grid-cols-2 gap-8">
              {project.metrics.map((m) => (
                <div
                  key={m.label}
                  className={`flex flex-col justify-center rounded-2xl border bg-ink p-6 transition-[border-color] duration-200 ${
                    hovered ? "border-accent/40" : "border-line"
                  }`}
                >
                  <p className="font-display text-5xl font-bold leading-none text-snow">{m.value}</p>
                  <p className="mt-2 text-sm text-fog">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </TiltCard>
  );
}
