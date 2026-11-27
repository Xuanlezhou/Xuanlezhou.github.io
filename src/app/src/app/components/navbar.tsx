import Link from "next/link";
import { site } from "../data/site";

const link = "text-[13px] text-muted transition-colors hover:text-ink";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-line bg-[#fbfbfd]/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-[1120px] items-center justify-between gap-6 px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="grid h-7 place-items-center border border-ink px-1.5 text-[11px] font-medium tracking-[0.12em] text-ink">
            {site.monogram}
          </span>
          <span className="hidden text-[13px] font-medium uppercase tracking-[0.2em] text-ink sm:inline">{site.name}</span>
        </Link>
        <nav className="flex items-center gap-4 sm:gap-6">
          <Link href="/#about" className={`${link} hidden md:inline`}>About</Link>
          <Link href="/projects" className={link}>Projects</Link>
          <Link href="/#skills" className={`${link} hidden md:inline`}>Skills</Link>
          <Link href="/contact" className={link}>Contact</Link>
          {site.resumeUrl && (
            <a
              href={site.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ink px-3 py-1 text-[13px] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Résumé
            </a>
          )}
        </nav>
      </div>
    </header>
  );
}
