import { useEffect } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import { Project } from "../data/projects";

export function ProjectModal({ project, onClose }: { project: Project; onClose: () => void }) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <motion.div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/70 p-6 backdrop-blur-md"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      onClick={onClose}
    >
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        onClick={(e) => e.stopPropagation()}
        initial={{ opacity: 0, scale: 0.96, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.96, y: 12 }}
        transition={{ duration: 0.25, ease: [0.23, 1, 0.32, 1] }}
        className="relative max-h-[85vh] w-full max-w-3xl overflow-y-auto rounded-3xl border border-accent/30 bg-surface p-10 shadow-[0_0_60px_rgba(139,156,255,0.18)]"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-5 top-5 grid h-10 w-10 place-items-center rounded-full text-mist transition-colors duration-150 hover:bg-raised hover:text-snow"
        >
          <X className="h-5 w-5" />
        </button>

        <p className="text-sm font-medium text-accent">{project.category}</p>
        <h3 className="mt-2 pr-12 font-display text-4xl font-bold uppercase leading-tight text-snow">
          {project.title}
        </h3>
        <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-mist">{project.summary}</p>

        <div className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-y border-line py-6">
          {project.metrics.map((m) => (
            <div key={m.label}>
              <p className="font-display text-3xl font-bold leading-none text-snow">{m.value}</p>
              <p className="mt-1 text-xs text-fog">{m.label}</p>
            </div>
          ))}
        </div>

        <h4 className="mt-8 font-display text-xl font-bold uppercase text-snow">Architecture</h4>
        <ol className="mt-4 space-y-5">
          {project.architecture.map((a) => (
            <li key={a.heading} className="grid grid-cols-[180px_1fr] gap-6">
              <p className="font-display text-base font-semibold text-accent-soft">{a.heading}</p>
              <p className="text-sm leading-relaxed text-mist">{a.body}</p>
            </li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap gap-2 border-t border-line pt-6">
          {project.stack.map((s) => (
            <span key={s} className="rounded-full bg-raised px-3 py-1 text-xs font-medium text-snow">
              {s}
            </span>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
