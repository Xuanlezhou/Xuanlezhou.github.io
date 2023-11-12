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
          src="/photos/projects.jpg"
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
      <div>
        <ProjectCard
          number="01"
          title="Teleoperation Robotic Arm"
          description="A bluetooth Tele-operated 6 DOF Robotic arm involving 3 systems: Controller, Integration System, Output Arm."
          imagePath="/photos/contact.jpg"
          reversed={true}
        />
        <ProjectCard
          number="01"
          title="Teleoperation Robotic Arm"
          description="A bluetooth Tele-operated 6 DOF Robotic arm involving 3 systems: Controller, Integration System, Output Arm."
          imagePath="/photos/contact.jpg"
          reversed={false}
        />
        <ProjectCard
          number="01"
          title="Teleoperation Robotic Arm"
          description="A bluetooth Tele-operated 6 DOF Robotic arm involving 3 systems: Controller, Integration System, Output Arm."
          imagePath="/photos/contact.jpg"
          reversed={true}
        />
      </div>
      <Footer />
    </div>
  );
}
