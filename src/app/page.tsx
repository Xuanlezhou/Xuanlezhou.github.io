import Navbar from "./components/navbar";
import Image from "next/image";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="text-center my-8 text-3xl font-light text-[#54c5b3]">
        An Aspiring Product Design Engineer
      </div>
      <div className="flex justify-center">
        <Image
          className="rounded-full"
          src="/photos/profile.jpg"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>
      <div className="flex flex-col mt-5 items-center space-y-4">
        <div className="max-w-3xl">
          Hello! My name is Xuanle!
        </div>
        <div className="max-w-4xl">
          I grew up in Singapore and I study Mechanical Engineering at Nanyang Technological University, Singapore.
        </div>
        <div className="text-justify max-w-3xl leading-loose pb-8">
          I’ve been intrigued by how things work for as long as I can remember.
          From repeatedly taking apart my Uniball Signo 0.38 pens to attempting
          to mesh together a remote controlled aircraft with my brother, I developed
          a passion for working with my hands at a young age. During my years studying
          mechanical engineering at NTU, my desire to know how the world around me
          works only deepened. I progressed from Google Sketch-Up to SolidWorks and
          from Plasticine to 3D-printing. I have learned about different materials,
          manufacturing processes and I want to learn more.
        </div>
      </div>
      <Footer />
    </div>
  );
}
