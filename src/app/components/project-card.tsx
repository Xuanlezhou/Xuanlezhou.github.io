import Image from "next/image";
import Link from "next/link";
import type { Project } from "../data/projects";

export default function ProjectCard({ project, wide = false }: { project: Project; wide?: boolean }) {
  const { slug, title, summary, cover, coverFit, result, status, kind, tags, links } = project;
  const href = `/projects/${slug}`;
  const shown = tags.slice(0, 2);
  const more = tags.length - shown.length;

  return (
    <article className={`group flex flex-col border border-line bg-white ${wide ? "sm:col-span-2 md:flex-row" : ""} transition hover:-translate-y-0.5 hover:border-mint/60 hover:shadow-[0_8px_24px_-12px_rgba(74,59,68,0.18)]`}>
      <Link
        href={href}
        className={`relative block aspect-[16/10] overflow-hidden border-b border-line ${wide ? "md:aspect-auto md:min-h-[280px] md:w-1/2 md:border-b-0 md:border-r" : ""}`}
      >
        {cover ? (
          <Image
            src={cover}
            alt={title}
            fill
            unoptimized
            className={`${coverFit === "contain" ? "bg-[#f3f2f5] object-contain" : "object-cover"} transition duration-700 ease-out group-hover:scale-[1.03]`}
          />
        ) : (
          <div className="grid-paper flex h-full w-full items-center justify-center px-6 text-center text-[15px] text-mint-dark">
            {title}
          </div>
        )}
        {status && (
          <span className="absolute right-3 top-3 bg-white/95 px-2 py-0.5 text-[11px] text-ink ring-1 ring-line">{status}</span>
        )}
      </Link>

      <div className={`flex flex-1 flex-col p-5 ${wide ? "md:p-8" : ""}`}>
        {kind && <p className="text-[12px] font-medium text-mint-dark">{kind}</p>}
        <h3 className={`mt-1 font-medium leading-snug text-ink ${wide ? "text-[19px]" : "text-[16px]"}`}>
          <Link href={href} className="transition-colors hover:text-mint-dark">{title}</Link>
        </h3>
        <p className="mt-2 text-[14px] leading-relaxed text-muted">{summary}</p>
        {result && <p className="mt-2 text-[13px] text-ink">{result}</p>}

        <div className="mt-auto pt-4">
          <div className="flex flex-wrap gap-1.5">
            {shown.map((t) => (
              <span key={t} className="bg-mint-soft px-2 py-0.5 text-[12px] text-ink">{t}</span>
            ))}
            {more > 0 && <span className="px-1 py-0.5 text-[12px] text-muted">+{more}</span>}
          </div>
          <div className="mt-4 flex gap-5 border-t border-line pt-3 text-[13px]">
            <Link href={href} className="text-ink transition-colors hover:text-mint-dark">Details →</Link>
            {links?.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="text-muted transition-colors hover:text-mint-dark">
                {l.label.split(" ")[0] === "Play" ? "Play" : "Code"} ↗
              </a>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
