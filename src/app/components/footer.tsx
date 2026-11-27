import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-line">
      <div className="mx-auto grid max-w-[1120px] gap-8 px-6 py-12 sm:grid-cols-[1fr_auto] sm:items-end">
        <div>
          <p className="text-[13px] text-muted">I love answering questions.</p>
          <a href={`mailto:${site.email}`} className="mt-1 inline-block text-xl text-ink transition-colors hover:text-mint-dark">
            {site.email}
          </a>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted">
          <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-ink">LinkedIn ↗</a>
          <a href={site.github} target="_blank" rel="noopener noreferrer" className="hover:text-ink">GitHub ↗</a>
          <span>© {new Date().getFullYear()} {site.name}</span>
        </div>
      </div>
    </footer>
  );
}
