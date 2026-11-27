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

function Block({ label, items }: { label: string; items: string[] }) {
  if (items.length === 0) return null;
  return (
    <section className="border-t border-line pt-5">
      <h2 className="text-[13px] font-medium text-ink">{label}</h2>
      <div className="mt-2 space-y-3 text-[15px] leading-[1.75] text-ink/90">
        {items.map((t) => (
          <p key={t}>{t}</p>
        ))}
      </div>
    </section>
  );
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const p = getProject(params.slug);
  if (!p) notFound();

  // Previous / next only cycle through projects that are visible on the site.
  const list = projects.filter((x) => showSideProjects || x.category === "engineering" || x.slug === p.slug);
  const i = list.findIndex((x) => x.slug === p.slug);
  const prev = list[(i - 1 + list.length) % list.length];
  const next = list[(i + 1) % list.length];

  const facts = [
    { k: "Context", v: p.context },
    { k: "When", v: p.when },
    { k: "Where", v: p.place },
    ...(p.status ? [{ k: "Status", v: p.status }] : []),
    ...(p.result ? [{ k: "Result", v: p.result }] : []),
  ];

  return (
    <div>
      <Navbar />
      <main className="mx-auto max-w-[1120px] px-6">
        <div className="pt-10">
          <Link href="/projects" className="text-[13px] text-muted hover:text-ink">
            ← All projects
          </Link>
        </div>

        <header className="grid gap-6 pb-8 pt-6 md:grid-cols-12">
          <h1 className="text-[28px] font-normal leading-tight tracking-tight sm:text-[32px] md:col-span-7">{p.title}</h1>
          <p className="text-[15px] leading-[1.75] text-muted md:col-span-5 md:pt-2">{p.summary}</p>
        </header>

        {p.slides.length > 0 && <Carousel slides={p.slides} title={p.title} />}

        <div className="grid gap-12 pt-12 md:grid-cols-12 md:gap-8">
          {/* Title block */}
          <aside className="md:col-span-4">
            <dl className="border border-line bg-white text-[13px] md:sticky md:top-20">
              {facts.map((f) => (
                <div key={f.k} className="grid grid-cols-[5.5rem_1fr] gap-3 border-b border-line px-4 py-3 last:border-b-0">
                  <dt className="text-muted">{f.k}</dt>
                  <dd className={f.k === "Result" ? "font-medium text-mint-dark" : "text-ink"}>{f.v}</dd>
                </div>
              ))}
              {p.processes && p.processes.length > 0 && (
                <div className="grid grid-cols-[5.5rem_1fr] gap-3 border-t border-line px-4 py-3">
                  <dt className="text-muted">Methods</dt>
                  <dd className="text-ink">
                    <ul className="space-y-1">
                      {p.processes.map((t) => (
                        <li key={t}>{t}</li>
                      ))}
                    </ul>
                  </dd>
                </div>
              )}
            </dl>
            {p.links && p.links.length > 0 && (
              <div className="mt-4 flex flex-col gap-2">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-ink px-4 py-2.5 text-center text-[13px] text-white transition-colors hover:bg-mint-dark"
                  >
                    {l.label} ↗
                  </a>
                ))}
              </div>
            )}
          </aside>

          {/* Story */}
          <div className="space-y-8 md:col-span-7 md:col-start-6">
            <Block label="The problem" items={p.challenge} />
            <Block label="What I did" items={p.approach} />
            <Block label="Outcome" items={p.outcome} />
          </div>
        </div>

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
