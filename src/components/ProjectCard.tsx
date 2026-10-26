import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { TiltCard } from "./TiltCard";
import { Project } from "../data/projects";

export function ProjectCard({ project, onOpen }: { project: Project; onOpen: () => void }) {
  return (
    <TiltCard>
      {(hovered) => (
        <div className="relative flex h-full flex-col p-7" style={{ transform: "translateZ(24px)" }}>
          {/* Neon corner accent that draws on hover */}
          <svg viewBox="0 0 100 40" className="pointer-events-none absolute right-6 top-6 h-10 w-24" aria-hidden>
            <motion.path
              d="M0,4 L70,4 Q96,4 96,30 L96,40"
              fill="none"
              stroke="#8b9cff"
              strokeWidth={1.5}
              strokeLinecap="round"
              style={{ filter: "drop-shadow(0 0 4px rgba(139,156,255,0.9))" }}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
              transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            />
          </svg>

          <p className="text-sm font-medium text-accent">{project.category}</p>
          <h3 className="mt-3 min-h-[4rem] font-display text-[28px] font-bold uppercase leading-8 text-snow">
            {project.title}
          </h3>
          <p className="mt-3 min-h-[4.5rem] text-sm leading-6 text-mist">{project.summary}</p>

          <dl className="mt-6 grid grid-cols-2 gap-px overflow-hidden rounded-xl border border-line bg-line">
            {project.metrics.map((m) => (
              <div key={m.label} className="bg-ink px-4 py-3">
                <dt className="font-display text-lg font-bold leading-tight text-snow">{m.value}</dt>
                <dd className="mt-0.5 text-xs text-fog">{m.label}</dd>
              </div>
            ))}
          </dl>

          <ul className="mt-5 flex flex-wrap gap-2">
            {project.stack.map((s) => (
              <li key={s} className="rounded-full bg-raised px-3 py-1 text-xs font-medium text-snow">
                {s}
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={onOpen}
            className="mt-auto inline-flex w-fit items-center gap-2 pt-7 font-display text-base font-bold uppercase tracking-wide text-accent-soft transition-colors duration-150 hover:text-snow"
          >
            Deep dive
            <ArrowUpRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </TiltCard>
  );
}
