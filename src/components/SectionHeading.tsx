import { motion } from "framer-motion";

type Props = {
  light: string;
  bold: string;
  intro?: string;
  align?: "left" | "center";
};

/** Thin-over-bold display heading, echoing the hero's type pairing. */
export function SectionHeading({ light, bold, intro, align = "left" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
      className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}
    >
      <h2 className="font-display uppercase leading-[0.95]">
        <span className="block text-4xl font-light tracking-[0.04em] text-accent">{light}</span>
        <span className="block text-6xl font-bold text-snow">{bold}</span>
      </h2>
      {intro && <p className="mt-5 text-base leading-relaxed text-fog">{intro}</p>}
    </motion.div>
  );
}
