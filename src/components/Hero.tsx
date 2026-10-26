import type * as React from "react";
import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";
import { ArrowDown, Download, Mail } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { LINKS } from "../data/links";
import { LiquidBlob } from "./LiquidBlob";
import { GlassOrb } from "./GlassOrb";
import { StaggerText } from "./StaggerText";

const HERO_IMG =
  "https://cdn.magicpatterns.com/patterns/generated-images/97b4cc2d-ba36-4fdc-a9e4-c328469afaa7.jpg";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const mx = useSpring(rawX, { stiffness: 80, damping: 20, mass: 0.6 });
  const my = useSpring(rawY, { stiffness: 80, damping: 20, mass: 0.6 });

  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  const onMove = (e: React.PointerEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    rawX.set((e.clientX - rect.left) / rect.width - 0.5);
    rawY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      id="home"
      ref={ref}
      onPointerMove={onMove}
      className="relative isolate overflow-hidden pt-36 pb-28"
    >
      {/* Back layer: large slow liquid shapes */}
      <Layer mx={mx} my={my} progress={scrollYProgress} depth={12} speed={120} className="absolute -left-40 -top-40 -z-10">
        <LiquidBlob seed={3} className="h-[620px] w-[620px]" fill="#1a2233" duration={22} />
      </Layer>
      <Layer mx={mx} my={my} progress={scrollYProgress} depth={8} speed={60} className="absolute -left-24 top-[46%] -z-10">
        <LiquidBlob seed={11} className="h-[380px] w-[380px]" fill="#121926" duration={26} />
      </Layer>
      <Layer mx={mx} my={my} progress={scrollYProgress} depth={18} speed={160} className="absolute -right-32 -top-24 -z-10">
        <LiquidBlob seed={7} className="h-[460px] w-[460px]" fill="#161d2c" duration={20} />
      </Layer>
      <Layer mx={mx} my={my} progress={scrollYProgress} depth={10} speed={90} className="absolute left-[-120px] top-[-60px] -z-10">
        <LiquidBlob seed={21} className="h-[520px] w-[520px]" fill="none" stroke="rgba(139,156,255,0.45)" duration={24} />
      </Layer>

      {/* Mid layer: outline rings */}
      <Layer mx={mx} my={my} progress={scrollYProgress} depth={-26} speed={220} className="absolute left-[47%] top-[28%] -z-10">
        <div className="h-24 w-24 rounded-full border border-accent/40" />
      </Layer>
      <Layer mx={mx} my={my} progress={scrollYProgress} depth={-34} speed={260} className="absolute left-[52%] top-[44%] -z-10">
        <div className="h-9 w-9 rounded-full border border-accent/50" />
      </Layer>
      <Layer mx={mx} my={my} progress={scrollYProgress} depth={-20} speed={180} className="absolute left-[40%] bottom-[14%] -z-10">
        <div className="h-10 w-10 rounded-full border border-accent/40" />
      </Layer>

      <div className="relative mx-auto grid max-w-6xl grid-cols-12 items-center gap-8 px-6">
        {/* Copy */}
        <div className="col-span-7">
          <h1 className="font-display uppercase leading-[0.92] text-accent">
            <span className="block text-[52px] font-light tracking-[0.04em]">
              <StaggerText text="Engineering Scalable" delay={0.1} />
            </span>
            <span className="mt-2 block text-[96px] font-bold tracking-[-0.01em] text-accent-soft">
              <StaggerText text="Full-Stack" delay={0.4} />
            </span>
            <span className="block text-[96px] font-bold tracking-[-0.01em] text-snow">
              <StaggerText text="Ecosystems" delay={0.6} />
            </span>
            <span className="mt-1 block text-[52px] font-light tracking-[0.04em]">
              <StaggerText text="& 3D Experiences" delay={0.85} />
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.15, ease: [0.23, 1, 0.32, 1] }}
            className="mt-8 max-w-xl text-lg leading-relaxed text-mist"
          >
            <span className="font-semibold text-snow">Shivlila Gandage</span> — Frontend Developer (4+ Years) |
            Expanding into Backend Architecture &amp; DevOps Pipelines.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.25, ease: [0.23, 1, 0.32, 1] }}
            className="mt-10 flex items-center gap-4"
          >
            <a
              href="#about"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full border-2 border-accent px-8 py-3.5 font-display text-lg font-bold uppercase tracking-wide text-accent-soft transition-colors duration-200 hover:text-ink"
            >
              <span
                aria-hidden
                className="absolute left-1/2 top-full h-[260%] w-[140%] -translate-x-1/2 rounded-[45%] bg-accent transition-[translate] duration-300 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:-translate-y-[78%]"
              />
              <span className="relative">Explore Portfolio</span>
              <ArrowDown className="relative h-4 w-4" strokeWidth={2.5} />
            </a>
            <a
              href={LINKS.resume}
              download={LINKS.resumeFileName}
              className="inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-raised px-6 py-4 font-display text-lg font-semibold uppercase tracking-wide text-snow ring-1 ring-line-strong transition-[background-color,box-shadow] duration-200 hover:bg-[#1b2438] hover:ring-accent/60"
            >
              <Download className="h-4 w-4" strokeWidth={2.5} />
              Download Official Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.4 }}
            className="mt-12 flex items-center gap-3"
          >
            {[
              { href: LINKS.github, label: "GitHub", icon: <GitHubLogoIcon width={18} height={18} /> },
              { href: LINKS.linkedin, label: "LinkedIn", icon: <LinkedInLogoIcon width={18} height={18} /> },
              { href: `mailto:${LINKS.email}`, label: "Email", icon: <Mail className="h-[18px] w-[18px]" /> },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                aria-label={s.label}
                className="grid h-11 w-11 place-items-center rounded-full bg-accent text-ink transition-[translate,background-color] duration-150 hover:-translate-y-0.5 hover:bg-accent-soft"
              >
                {s.icon}
              </a>
            ))}
            <span className="ml-3 text-sm text-fog">Hyderabad, India</span>
          </motion.div>
        </div>

        {/* Visual */}
        <div className="relative col-span-5 h-[600px]">
          <Layer mx={mx} my={my} progress={scrollYProgress} depth={-14} speed={-40} className="absolute inset-0">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: 0.3, ease: [0.23, 1, 0.32, 1] }}
              className="morph absolute inset-0 overflow-hidden ring-1 ring-accent/30"
            >
              <img src={HERO_IMG} alt="" className="h-full w-full scale-110 object-cover" />
              <div className="absolute inset-0 bg-ink/15" />
            </motion.div>
          </Layer>

          <Layer mx={mx} my={my} progress={scrollYProgress} depth={-40} speed={-120} className="absolute -left-16 top-16">
            <GlassOrb size={120} tint="neutral" />
          </Layer>
          <Layer mx={mx} my={my} progress={scrollYProgress} depth={-60} speed={-200} className="absolute -right-6 bottom-6">
            <GlassOrb size={150} tint="accent" />
          </Layer>

          <Layer mx={mx} my={my} progress={scrollYProgress} depth={30} speed={-80} className="absolute -left-24 bottom-24">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-xl">
              <p className="font-display text-4xl font-bold leading-none text-snow">4+</p>
              <p className="mt-1 text-xs text-mist">years shipping enterprise UI</p>
            </div>
          </Layer>
          <Layer mx={mx} my={my} progress={scrollYProgress} depth={22} speed={-140} className="absolute -right-8 top-10">
            <div className="rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-4 backdrop-blur-xl">
              <p className="text-xs text-fog">Now building with</p>
              <p className="mt-1 font-display text-lg font-semibold text-snow">Node.js · Docker · CI/CD</p>
            </div>
          </Layer>
        </div>
      </div>
    </section>
  );
}

function Layer({
  mx,
  my,
  progress,
  depth,
  speed,
  className,
  children,
}: {
  mx: MotionValue<number>;
  my: MotionValue<number>;
  progress: MotionValue<number>;
  depth: number;
  speed: number;
  className?: string;
  children: React.ReactNode;
}) {
  const x = useTransform(mx, (v) => v * depth);
  const mouseY = useTransform(my, (v) => v * depth);
  const scrollY = useTransform(progress, [0, 1], [0, speed]);
  return (
    <motion.div style={{ y: scrollY }} className={className}>
      <motion.div style={{ x, y: mouseY }}>{children}</motion.div>
    </motion.div>
  );
}
