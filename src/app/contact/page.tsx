import Image from "next/image";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { site } from "../data/site";

export const metadata = { title: "Contact" };

export default function Contact() {
  const rows = [
    { k: "Email", v: site.email, href: `mailto:${site.email}` },
    { k: "LinkedIn", v: site.linkedin.replace("https://", ""), href: site.linkedin },
    { k: "GitHub", v: site.github.replace("https://", ""), href: site.github },
    ...site.phones.map((p) => ({ k: `Phone (${p.label})`, v: p.value, href: `tel:${p.value.replace(/\s/g, "")}` })),
  ];

  return (
    <div>
      <Navbar />
      <main className="mx-auto grid max-w-[1120px] gap-10 px-6 pt-14 md:grid-cols-12 md:pt-20">
        <div className="md:col-span-6">
          <p className="text-[13px] text-muted">Contact</p>
          <h1 className="mt-3 text-[28px] font-normal leading-tight tracking-tight sm:text-[32px]">Get in touch</h1>
          <p className="mt-4 max-w-md text-[15px] leading-[1.75] text-muted">
            I love answering questions. Email is the quickest way to reach me.
          </p>
          <dl className="mt-10 border-t border-line text-[14px]">
            {rows.map((r) => (
              <div key={r.k} className="grid grid-cols-[7.5rem_1fr] gap-3 border-b border-line py-3.5">
                <dt className="text-muted">{r.k}</dt>
                <dd>
                  <a
                    href={r.href}
                    target={r.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    className="break-all text-ink transition-colors hover:text-mint-dark"
                  >
                    {r.v}
                  </a>
                </dd>
              </div>
            ))}
          </dl>
        </div>
        <div className="relative hidden aspect-[4/5] overflow-hidden ring-1 ring-line md:col-span-5 md:col-start-8 md:block">
          <Image src="/photos/contact.jpg" alt="Technical drawing" fill unoptimized className="object-cover" />
        </div>
      </main>
      <Footer />
    </div>
  );
}
