import Image from "next/image";
import Link from "next/link";
import { MdMenu, MdClose } from "react-icons/md";

export default function Navbar() {

  return (
    <main>
      <div className="text-center mt-8 text-4xl">
        ZHOU XUANLE
      </div>
      <div className="flex flex-row justify-center gap-x-4">
        <div className="py-4"><Link href="/">About</Link></div>
        <div className="peer py-4"><Link href="/projects">Projects</Link></div>
        {/* Hover Menu */}
        <div className="absolute hidden peer-hover:flex hover:flex flex-col bg-white mt-12 px-2 text-center gap-y-2 bg-[#fafaff]">
          <a className="" href="#">Teleoperation Robotic Arm</a>
          <a className="" href="#">Sugar Cane Juicer Machine</a>
          <a className="" href="#">Pill-2-gO</a>
          <a className="" href="#">Sunfryer</a>
          <a className="" href="#">No CaCa Toilet Seat</a>
          <a className="" href="#">Tensegrity Bridge</a>
        </div>
        <div className="py-4"><Link href="/contact">Contact</Link></div>
      </div>
    </main>
  );
}
