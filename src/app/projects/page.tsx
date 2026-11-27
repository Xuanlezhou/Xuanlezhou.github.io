import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProjectGrid from "../components/project-grid";
import SectionTitle from "../components/section-title";
import { projects, showSideProjects } from "../data/projects";

export const metadata = { title: "Projects" };

export default function Projects() {
  const engineering = projects.filter((p) => p.category === "engineering");
  const maker = projects.filter((p) => p.category === "maker");

  return (
    <div>
      <Navbar />
      {/* Banner from the original site */}
      {/* Cropped to the hands, pen and bottle: full width, top of the photo, ~3.7:1 */}
      <div className="relative aspect-[37/10] min-h-[180px] w-full border-b border-line">
        <Image src="/photos/projects_1.jpg" alt="" fill unoptimized className="object-cover object-top" />
      </div>

      <main className="mx-auto max-w-[1120px] px-6">
        <section className="pb-12 pt-12 md:pt-16">
          <p className="text-[14px] text-mint-dark">Portfolio</p>
          <h1 className="mt-2 text-[34px] font-medium leading-[1.1] tracking-tight sm:text-[40px]">Projects.</h1>
          <p className="mt-4 max-w-xl text-[15px] leading-[1.75] text-muted">
            Thanks for stopping by! Here’s a list of projects that I’ve previously worked on — from research to
            competition vehicles and robotics. You can tap on them to find out more.
          </p>
        </section>

        <section>
          <SectionTitle n="01" title="Design & manufacturing" />
          <ProjectGrid items={engineering} />
        </section>

        {showSideProjects && (
          <section className="pt-24">
            <SectionTitle n="02" title="Side projects" />
            <ProjectGrid items={maker} />
          </section>
        )}
      </main>
      <Footer />
    </div>
  );
}
