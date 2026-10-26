import { motion } from "framer-motion";
import { ArrowUpRight, Mail, MapPin } from "lucide-react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { LINKS } from "../data/links";
import { LiquidBlob } from "./LiquidBlob";
import { GlassOrb } from "./GlassOrb";
import { ContactForm } from "./ContactForm";

const CHANNELS = [
  { label: "LinkedIn", value: "in/shivlila-gandage", href: LINKS.linkedin, icon: <LinkedInLogoIcon width={20} height={20} /> },
  { label: "GitHub", value: "ShivlilaGandage", href: LINKS.github, icon: <GitHubLogoIcon width={20} height={20} /> },
  { label: "Email", value: LINKS.email, href: `mailto:${LINKS.email}`, icon: <Mail className="h-5 w-5" /> },
];

export function Contact() {
  return (
    <section id="contact" className="relative isolate overflow-hidden py-32">
      {/* Ambient motion */}
      <div className="absolute -left-40 bottom-0 -z-10">
        <LiquidBlob seed={41} className="h-[560px] w-[560px]" fill="#131a29" duration={20} />
      </div>
      <div className="absolute right-[-160px] top-10 -z-10">
        <LiquidBlob seed={53} className="h-[480px] w-[480px]" fill="none" stroke="rgba(139,156,255,0.35)" duration={22} />
      </div>
      <motion.div
        className="absolute right-[38%] top-24 -z-10"
        animate={{ y: [0, -18, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <GlassOrb size={90} tint="heat" />
      </motion.div>

      <div className="mx-auto grid max-w-6xl grid-cols-12 gap-16 px-6">
        <div className="col-span-5">
          <h2 className="font-display uppercase leading-[0.95]">
            <span className="block text-4xl font-light tracking-[0.04em] text-accent">Contact</span>
            <span className="block text-6xl font-bold text-snow">& Connect</span>
          </h2>
          <p className="mt-5 max-w-sm text-base leading-relaxed text-fog">
            Open to frontend and full-stack roles, collaborations and interesting product problems.
          </p>

          <ul className="mt-10 divide-y divide-line border-y border-line">
            {CHANNELS.map((c) => (
              <li key={c.label}>
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  className="group flex items-center gap-4 py-5"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-mist transition-[background-color,border-color,color,box-shadow] duration-200 group-hover:border-accent group-hover:bg-accent group-hover:text-ink group-hover:shadow-[0_0_22px_rgba(139,156,255,0.6)]">
                    {c.icon}
                  </span>
                  <span className="flex-1">
                    <span className="block text-xs text-fog">{c.label}</span>
                    <span className="block font-display text-lg font-semibold text-snow">{c.value}</span>
                  </span>
                  <ArrowUpRight className="h-5 w-5 text-fog transition-[translate,color] duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </a>
              </li>
            ))}
            <li className="flex items-center gap-4 py-5">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-line-strong text-mist">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs text-fog">Location</span>
                <span className="block font-display text-lg font-semibold text-snow">{LINKS.location}</span>
              </span>
            </li>
          </ul>
        </div>

        <div className="col-span-7">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
