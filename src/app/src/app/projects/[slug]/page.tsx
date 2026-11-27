import Link from "next/link";
import { notFound } from "next/navigation";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Carousel from "../../components/carousel";
import { projects, getProject, showSideProjects } from "../../data/projects";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  return p ? { title: p.title, description: p.summary } : {};
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  // Previous / next only cycle through projects that are visible on the site.
  const list = projects.filter((x) => showSideProjects || x.category === "engineering" || x.slug === p.slug);
  const i = list.findIndex((x) => x.slug === p.slug);
  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];

  const paragraphs =
    p.body ?? [p.challenge, p.approach, p.outcome].map((part) => part.join(" ")).filter(Boolean);


  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-[1120px] px-6">
        <div className="pt-10">
          <Link href="/projects" className="text-[13px] text-muted hover:text-ink">
            ← All projects
          </Link>
        </div>

        {/* Original layout: photos first, then title, place, date, ______, write-up, footnote */}
        {p.slides.length > 0 && (
          <div className="pt-6">
            <Carousel slides={p.slides} title={p.title} />
          </div>
        )}

        <article className="mx-auto max-w-3xl pt-12">
          <h1 className="text-[28px] font-normal leading-tight tracking-tight sm:text-[32px]">{p.title}</h1>
          <p className="mt-2 text-[15px] font-medium text-ink">{p.place}</p>
          <p className="mt-0.5 text-[14px] italic text-muted">{p.when}</p>
          <div className="mt-4 h-[2px] w-10 bg-mint" />

          <div className="mt-8 space-y-4 text-[15px] leading-[1.8] text-ink/90">
            {paragraphs.map((t) => (
              <p key={t}>{t}</p>
            ))}
          </div>

          {p.note && <p className="mt-6 text-[13.5px] italic leading-relaxed text-muted">{p.note}</p>}

          {p.links && p.links.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-3">
              {p.links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-ink px-4 py-2.5 text-[13px] text-white transition-colors hover:bg-mint-dark"
                >
                  {l.label} ↗
                </a>
              ))}
            </div>
          )}
        </article>

        <nav className="mt-20 grid grid-cols-2 border-t border-line pt-6 text-[13px]">
          <Link href={`/projects/${prev.slug}`} className="group pr-4">
            <span className="text-muted">← Previous</span>
            <span className="mt-1 block text-[15px] text-ink group-hover:text-mint-dark">{prev.title}</span>
          </Link>
          <Link href={`/projects/${next.slug}`} className="group pl-4 text-right">
            <span className="text-muted">Next →</span>
            <span className="mt-1 block text-[15px] text-ink group-hover:text-mint-dark">{next.title}</span>
          </Link>
        </nav>
      </main>
      <Footer />
    </div>
  );
}
