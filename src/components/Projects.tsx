import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { FeaturedProject } from "./FeaturedProject";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS, Project } from "../data/projects";

export function Projects() {
  const [open, setOpen] = useState<Project | null>(null);
  const [featured, ...rest] = PROJECTS;

  return (
    <section id="projects" className="relative isolate py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          light="Deep-Dive"
          bold="Case Studies"
          intro="Enterprise platforms shipped at Amnet Digital. Hover to inspect, open any project for its architecture."
        />

        <div className="mt-16">
          <FeaturedProject project={featured} onOpen={() => setOpen(featured)} />
        </div>

        <div className="mt-8 grid grid-cols-3 gap-6">
          {rest.map((p) => (
            <div key={p.id} className="h-full">
              <ProjectCard project={p} onOpen={() => setOpen(p)} />
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>{open && <ProjectModal project={open} onClose={() => setOpen(null)} />}</AnimatePresence>
    </section>
  );
}
