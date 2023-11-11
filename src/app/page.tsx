import {
  FaInstagram,
  FaLinkedin,
  FaGithub,
  FaRegEnvelope,
  FaRegFolderOpen,
} from "react-icons/fa";
import CalButton from "./components/cal-button";
import Link from "next/link";
import Profile from "./components/profile";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="text-center mt-8 text-4xl">
        ZHOU XUANLE
      </div>
      <div className="flex flex-row justify-center gap-x-4 my-4">
        <div>About</div>
        <div>Projects</div>
        <div>Contact</div>
      </div>
      <div className="text-center my-8 text-3xl font-light text-[#54c5b3]">
        An Aspiring Product Design Engineer
      </div>
      <div className="flex justify-center items-center">
        <Image
          className="rounded-full"
          src="/icons/mastercard.jpg"
          alt="Logo"
          width={200}
          height={200}
        />
      </div>

    </main>
  );
}
