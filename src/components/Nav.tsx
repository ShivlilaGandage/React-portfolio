import { useEffect, useState } from "react";
import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { LINKS, NAV_ITEMS } from "../data/links";

export function Nav() {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 h-0 px-6 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between gap-6 rounded-full border px-5 py-2.5 backdrop-blur-xl transition-[background-color,border-color] duration-200 ${
          scrolled ? "border-line-strong bg-surface/70" : "border-line bg-surface/30"
        }`}
      >
        <a href="#home" className="flex items-center gap-2.5 shrink-0">
          <span className="relative grid h-8 w-8 place-items-center">
            <span className="absolute inset-0 rounded-full border-[5px] border-snow" />
            <span className="absolute -right-1.5 -top-1 h-3.5 w-3.5 rounded-full bg-accent" />
          </span>
          <span className="font-display text-lg font-bold tracking-wide text-snow">
            SHIVLILA<span className="font-light text-accent">.DEV</span>
          </span>
        </a>

        <ul className="flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.id}>
              <a
                href={`#${item.id}`}
                className={`whitespace-nowrap rounded-full px-3 py-1.5 font-display text-[15px] font-semibold uppercase tracking-wide transition-colors duration-150 ${
                  active === item.id ? "bg-accent/15 text-accent-soft" : "text-mist hover:text-snow"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 shrink-0">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="grid h-9 w-9 place-items-center rounded-full text-mist transition-colors duration-150 hover:bg-raised hover:text-snow"
          >
            <GitHubLogoIcon width={18} height={18} />
          </a>
          <a
            href={LINKS.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full text-mist transition-colors duration-150 hover:bg-raised hover:text-snow"
          >
            <LinkedInLogoIcon width={18} height={18} />
          </a>
          <a
            href="#contact"
            className="ml-1 whitespace-nowrap rounded-full bg-accent px-5 py-2 font-display text-[15px] font-bold uppercase tracking-wide text-ink shadow-[0_0_24px_rgba(139,156,255,0.45)] transition-[box-shadow,background-color] duration-200 hover:bg-accent-soft hover:shadow-[0_0_36px_rgba(139,156,255,0.7)]"
          >
            Let's Talk
          </a>
        </div>
      </nav>
    </header>
  );
}
