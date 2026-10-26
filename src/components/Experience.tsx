import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { TimelineEntry } from "./TimelineEntry";
import { PipelineRoadmap } from "./PipelineRoadmap";

export function Experience() {
  const trackRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });

  return (
    <section id="devops" className="relative isolate py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="center"
          light="Experience, Awards"
          bold="& DevOps Roadmap"
          intro="Where the work has been, what it earned, and where the pipeline is heading next."
        />

        <div ref={trackRef} className="relative mt-20">
          {/* Neon centerline */}
          <div className="absolute bottom-0 left-1/2 top-0 w-px -translate-x-1/2 bg-line" />
          <motion.div
            style={{ scaleY: fill }}
            className="absolute bottom-0 left-1/2 top-0 w-[2px] origin-top -translate-x-1/2 bg-accent shadow-[0_0_14px_rgba(139,156,255,0.9)]"
          />

          <div className="space-y-20">
            <TimelineEntry side="left" date="Graduated">
              <div className="flex items-start gap-4">
                <GraduationCap className="mt-1 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <p className="text-sm text-fog">Education</p>
                  <h3 className="mt-1 font-display text-2xl font-bold leading-tight text-snow">
                    B.Tech, Electronics &amp; Communication Engineering
                  </h3>
                  <p className="mt-2 text-sm text-mist">Visvesvaraya Technological University (VTU), Belgaum</p>
                  <p className="mt-4 font-display text-3xl font-bold text-snow">
                    8.0 <span className="text-base font-medium text-fog">GPA</span>
                  </p>
                </div>
              </div>
            </TimelineEntry>

            <TimelineEntry side="right" date="Aug 2022 — Present" emphasis>
              <p className="text-sm text-accent">Amnet Digital Pvt. Ltd.</p>
              <h3 className="mt-1 font-display text-4xl font-bold uppercase leading-none text-snow">Software Engineer</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-mist">
                Building enterprise applications end to end — from Figma to production UI to Azure App Service deployments.
              </p>
              <div className="mt-6 grid grid-cols-3 divide-x divide-line rounded-2xl border border-line">
                <Stat value="9" label="member Agile team" />
                <Stat value="20+" label="Scrum sprints" />
                <Stat value="Azure" label="production deploys" />
              </div>
              <ul className="mt-6 space-y-2 text-sm text-mist">
                <li>· Cross-functional Agile/Scrum delivery with design, QA and backend</li>
                <li>· Production deployments executed on Azure App Service</li>
                <li>· Government, enterprise and e-learning platforms shipped</li>
              </ul>
            </TimelineEntry>

            <TimelineEntry side="left" date="Recognition">
              <div className="flex items-center gap-5">
                <div className="relative grid h-20 w-20 shrink-0 place-items-center rounded-full border-2 border-accent bg-accent/10 shadow-[0_0_30px_rgba(139,156,255,0.35)]">
                  <Award className="h-9 w-9 text-accent-soft" />
                </div>
                <div>
                  <h3 className="font-display text-3xl font-bold uppercase leading-none text-snow">Employee of the Month</h3>
                  <p className="mt-2 text-sm leading-relaxed text-mist">
                    For exceptional contribution to high-visibility enterprise delivery on the Harword project.
                  </p>
                </div>
              </div>
            </TimelineEntry>

            <TimelineEntry side="right" date="Next" wide>
              <PipelineRoadmap />
            </TimelineEntry>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-4 py-4">
      <p className="font-display text-3xl font-bold leading-none text-snow">{value}</p>
      <p className="mt-1 text-xs text-fog">{label}</p>
    </div>
  );
}
