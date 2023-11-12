import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <main>
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
            Here&apos;s a list of projects that I&apos;ve previously worked on.
            You can tap on them to find out more 😊
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
