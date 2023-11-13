import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import ProjectCard from "../components/project-card";

export default function Projects() {
  return (
    <div>
      <Navbar />
      <div className="flex relative h-96 w-full justify-center">
        <Image
          src="/photos/projects_1.jpg"
          alt="Logo"
          fill={true}
        />
        <div className="absolute bg-white bottom-0 py-16 px-32 flex flex-col">
          <div className="text-4xl pb-8">My Projects</div>
          <div className="max-w-2xl pt-8">Thanks for stopping by!
            Here’s a list of projects that I’ve previously worked on.
            You can tap on them to find out more 😊
          </div>
        </div>
      </div>
      <div className="flex flex-col divide-y border-y mx-48">
        <ProjectCard
          number="01"
          title="Teleoperation Robotic Arm"
          description="A bluetooth Tele-operated 6 DOF Robotic arm involving 3 systems: Controller, Integration System, Output Arm."
          imagePath="/photos/projects_2.jpg"
          reversed={true}
        />
        <ProjectCard
          number="02"
          title="Sugar Cane Machine"
          description="A Sugar Cane Juicer Machine put together with belt, chain and gear systems."
          imagePath="/photos/projects_3.jpg"
          reversed={false}
        />
        <ProjectCard
          number="03"
          title="Pill-2-gO"
          description="A product innovation designed to meet the novel post-pandemic needs of everyday water bottle users."
          imagePath="/photos/projects_4.jpg"
          reversed={true}
        />
        <ProjectCard
          number="04"
          title="Sunfryer"
          description="A fryer aimed to deliver convenience and sustainability by eliminating unnecessary kitchenware and oil usage."
          imagePath="/photos/projects_5.jpg"
          reversed={false}
        />
        <ProjectCard
          number="05"
          title="No CaCa Toilet Seat"
          description="A toilet seat cover that encourages considerate and hygienic behaviors from the public."
          imagePath="/photos/projects_6.jpg"
          reversed={true}
        />
        <ProjectCard
          number="06"
          title="Tensegrity Bridge"
          description="A bridge model constructed using the concept of tensegrity."
          imagePath="/photos/projects_7.jpg"
          reversed={false}
        />
      </div>
      <Footer />
    </div>
  );
}
