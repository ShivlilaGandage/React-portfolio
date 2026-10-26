import { motion } from "framer-motion";
import { Box, CheckCircle2, Cloud, GitBranch } from "lucide-react";

const STAGES = [
  { icon: Cloud, title: "Azure App Service", note: "Today: production deploys", now: true },
  { icon: GitBranch, title: "GitHub Actions CI/CD", note: "Automated build & release" },
  { icon: CheckCircle2, title: "Automated testing", note: "Suites gate every merge" },
  { icon: Box, title: "Containerized deploys", note: "Dockerized, portable" },
];

export function PipelineRoadmap() {
  return (
    <div>
      <p className="text-sm text-accent">Future roadmap</p>
      <h3 className="mt-1 font-display text-3xl font-bold uppercase leading-none text-snow">
        Full-Stack &amp; DevOps CI/CD Pipeline Integration
      </h3>
      <p className="mt-3 text-sm leading-relaxed text-mist">
        Evolving today's manual Azure deployment practice into an automated, tested, containerized pipeline.
      </p>

      <ol className="relative mt-7 space-y-0">
        <li aria-hidden className="absolute bottom-4 left-[17px] top-4 w-px border-l border-dashed border-accent/40" />
        {STAGES.map((s, i) => (
          <motion.li
            key={s.title}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.8 }}
            transition={{ duration: 0.25, delay: i * 0.06, ease: [0.23, 1, 0.32, 1] }}
            className="relative flex items-center gap-4 py-2.5"
          >
            <span
              className={`relative grid h-9 w-9 shrink-0 place-items-center rounded-full ${
                s.now ? "bg-accent text-ink" : "border border-accent/40 bg-ink text-accent-soft"
              }`}
            >
              <s.icon className="h-4 w-4" strokeWidth={2.2} />
            </span>
            <div className="flex flex-1 items-baseline justify-between gap-4">
              <p className="font-display text-lg font-semibold text-snow">{s.title}</p>
              <p className="whitespace-nowrap text-xs text-fog">{s.note}</p>
            </div>
          </motion.li>
        ))}
      </ol>
    </div>
  );
}
