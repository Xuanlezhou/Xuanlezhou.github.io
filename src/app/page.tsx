import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import ProjectCard from "./components/project-card";
import SectionTitle from "./components/section-title";
import { site, highlights, showHighlights, experience, skills } from "./data/site";
import { projects } from "./data/projects";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div>
      <Navbar />

      <main className="mx-auto max-w-[1120px] px-6">
        {/* Intro: who I am (hero + about combined) */}
        <section id="about" className="grid gap-12 pb-20 pt-14 md:grid-cols-12 md:gap-10 md:pt-24">
          <div className="md:col-span-7">
            <p className="text-[14px] text-mint-dark">Hi, my name is</p>
            <h1 className="mt-2 text-[34px] font-medium leading-[1.1] tracking-tight text-ink sm:text-[40px]">
              {site.name}.
            </h1>
            <p className="mt-2 text-[22px] leading-snug tracking-tight text-muted sm:text-[26px]">{site.tagline}</p>
            <div className="mt-7 max-w-xl space-y-4 text-[15px] leading-[1.75]">
              <p className="text-ink">{site.intro[0]}</p>
              <p className="text-ink">{site.intro[1]}</p>
              {site.focus && <p className="text-muted">{site.focus}</p>}
            </div>
            <div className="mt-8 flex flex-wrap gap-3 text-[13px]">
              <Link href="#work" className="bg-ink px-5 py-2.5 text-white transition-colors hover:bg-mint-dark">
                View my work
              </Link>
              {site.resumeUrl ? (
                <a
                  href={site.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-ink px-5 py-2.5 text-ink transition-colors hover:bg-ink hover:text-white"
                >
                  Résumé
                </a>
              ) : (
                <Link href="/contact" className="border border-ink px-5 py-2.5 text-ink transition-colors hover:bg-ink hover:text-white">
                  Get in touch
                </Link>
              )}
            </div>
          </div>

          <figure className="flex flex-col items-center md:col-span-4 md:col-start-9 md:pt-10">
            <div className="relative aspect-square w-full max-w-[260px] overflow-hidden rounded-full ring-1 ring-line ring-offset-4 ring-offset-[#fbfbfd]">
              <Image
                src="/photos/profile.jpg"
                alt={`${site.shortName} fitting a TeraDAR sensor mount to a helicopter`}
                fill
                unoptimized
                className="object-cover"
              />
            </div>
            <figcaption className="mt-4 max-w-[260px] text-center text-[12.5px] leading-snug text-muted">
              Fitting TeraDAR sensors to a helicopter for imaging tests.
            </figcaption>
          </figure>
        </section>

        {/* Highlights (hidden for now) */}
        {showHighlights && (
          <section className="grid grid-cols-2 border-y border-line md:grid-cols-4">
            {highlights.map((h, i) => (
              <div
                key={h.label}
                className={`px-4 py-5 ${i % 2 === 1 ? "border-l border-line" : ""} ${i >= 2 ? "border-t border-line md:border-t-0" : ""} ${i === 2 ? "md:border-l" : ""}`}
              >
                <p className="text-[17px] font-medium text-mint-dark">{h.stat}</p>
                <p className="mt-1 text-[12.5px] leading-snug text-muted">{h.label}</p>
              </div>
            ))}
          </section>
        )}

        {/* Experience */}
        <section>
          <SectionTitle id="experience" title="Experience" />
          {/* Experience */}
          <div className="divide-y divide-line border-b border-line">
            {experience.map((e) => (
              <div key={e.org} className="grid gap-2 py-6 first:pt-0 md:grid-cols-12 md:gap-8">
                <div className="text-[13px] text-muted md:col-span-3">
                  {[e.when, e.place].filter(Boolean).join(" · ")}
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-[15px] font-medium text-ink">
                    {e.link ? (
                      <a href={e.link} target="_blank" rel="noopener noreferrer" className="hover:text-mint-dark">
                        {e.org} ↗
                      </a>
                    ) : (
                      e.org
                    )}
                    <span className="font-normal text-muted"> — {e.role}</span>
                  </h3>
                  <ul className="mt-2 space-y-1 text-[14px] leading-relaxed text-muted">
                    {e.points.map((pt) => (
                      <li key={pt} className="flex gap-2.5">
                        <span className="mt-[0.7em] h-px w-2.5 shrink-0 bg-mint" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Featured projects */}
        <section className="pt-24">
          <SectionTitle id="work" title="Featured projects" href="/projects" hrefLabel="All projects" />
          <div className="grid gap-6 sm:grid-cols-2">
            {featured.map((p, i) => (
              <ProjectCard key={p.slug} project={p} wide={i === 0 && featured.length % 2 === 1} />
            ))}
          </div>
        </section>

        {/* Skills */}
        <section className="pt-24">
          <SectionTitle id="skills" title="Skills" />
          <div className="grid gap-px border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
            {skills.map((s) => (
              <div key={s.group} className="bg-white p-5">
                <h3 className="text-[13px] font-medium text-mint-dark">{s.group}</h3>
                <ul className="mt-3 space-y-1.5 text-[14px] text-ink">
                  {s.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="pt-24">
          <SectionTitle title="Get in touch" />
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <p className="text-[15px] leading-[1.75] text-muted md:col-span-7">
              I’m always happy to talk about hardware, prototyping and manufacturing — whether it’s an opportunity, a
              project, or a question about something on this site.
            </p>
            <div className="flex flex-wrap gap-3 text-[13px] md:col-span-5 md:justify-end">
              <a href={`mailto:${site.email}`} className="bg-ink px-5 py-2.5 text-white transition-colors hover:bg-mint-dark">
                Email me
              </a>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-ink px-5 py-2.5 text-ink transition-colors hover:bg-ink hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
