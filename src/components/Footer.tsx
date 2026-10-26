import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { LINKS } from "../data/links";

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-6 py-8">
        <p className="font-display text-base font-bold tracking-wide text-snow">
          SHIVLILA<span className="font-light text-accent">.DEV</span>
          <span className="ml-4 font-sans text-xs font-normal text-fog">© {new Date().getFullYear()} Shivlila Gandage · Hyderabad, India</span>
        </p>
        <div className="flex items-center gap-6 text-sm">
          <a href={LINKS.github} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-mist transition-colors duration-150 hover:text-snow">
            <GitHubLogoIcon /> GitHub
          </a>
          <a href={LINKS.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-mist transition-colors duration-150 hover:text-snow">
            <LinkedInLogoIcon /> LinkedIn
          </a>
          <a href={`mailto:${LINKS.email}`} className="text-mist transition-colors duration-150 hover:text-snow">
            {LINKS.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
