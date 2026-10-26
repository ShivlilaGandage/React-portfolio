import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { RoadmapStage } from "./RoadmapStage";
import { SkillBadges } from "./SkillBadges";
import { LiquidBlob } from "./LiquidBlob";
import { JOURNEY, ROADMAP } from "../data/about";

export function About() {
  return (
    <section id="about" className="relative isolate py-32">
      <div className="absolute -right-48 top-24 -z-10 opacity-70">
        <LiquidBlob
          seed={31}
          className="h-[520px] w-[520px]"
          fill="#111827"
          duration={24}
        />
      </div>

      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          light="About Me"
          bold="& Evolution"
          intro="A frontend engineer who has spent four years making enterprise products fast and maintainable — now pushing the same discipline into the backend and the pipeline that ships it."
        />

        <div className="mt-20 grid grid-cols-12 gap-12">
          {/* Left: sticky professional narrative */}
          <div className="col-span-5">
            <div className="sticky top-28">
              <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-fog">
                Amnet Digital · Software Engineer
              </p>
              <div className="mt-6 space-y-8 border-l border-line pl-6">
                {JOURNEY.map((j, i) => (
                  <motion.div
                    key={j.title}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{
                      duration: 0.3,
                      delay: i * 0.05,
                      ease: [0.23, 1, 0.32, 1],
                    }}
                  >
                    {j.award ? (
                      <div className="flex items-start gap-3 rounded-2xl border border-accent/30 bg-accent/[0.07] p-4">
                        <Award className="mt-0.5 h-5 w-5 shrink-0 text-accent" />
                        <div>
                          <h3 className="font-display text-xl font-bold text-snow">
                            {j.title}
                          </h3>
                          <p className="mt-1 text-sm leading-relaxed text-mist">
                            {j.body}
                          </p>
                        </div>
                      </div>
                    ) : (
                      <>
                        <h3 className="font-display text-2xl font-bold leading-tight text-snow">
                          {j.title}
                        </h3>
                        <p className="mt-2 text-[15px] leading-relaxed text-mist">
                          {j.body}
                        </p>
                      </>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: learning roadmap, scroll-highlighted */}
          <div className="col-span-7">
            <p className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-fog">
              Continuous Learning &amp; Future Roadmap
            </p>
            <div className="relative mt-6">
              <div className="absolute bottom-6 left-[11px] top-6 w-px bg-line" />
              <div className="space-y-6">
                {ROADMAP.map((stage, i) => (
                  <div key={stage.key}>
                    <RoadmapStage stage={stage} index={i} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <SkillBadges />
      </div>
    </section>
  );
}
