import Link from "next/link";

export default function Navbar() {

  return (
    <div>
      <div className="text-center uppercase mt-12 text-4xl">
        <Link href="/">Zhou Xuanle</Link>
      </div>
      <div className="flex flex-row justify-center gap-x-4">
        <div className="py-4"><Link href="/">About</Link></div>
        <div className="peer py-4"><Link href="/projects">Projects</Link></div>
        {/* Hover Menu */}
        <div className="absolute hidden peer-hover:flex hover:flex flex-col bg-white mt-12 px-2 text-center gap-y-2 bg-[#fafaff] z-10">
          <Link href="/projects/robotic-arm">Teleoperation Robotic Arm</Link>
          <Link className="" href="/projects/shell-eco-marathon">Shell Eco-Marathon</Link>
          <Link className="" href="/projects/heart-valve">Heart Valve</Link>
          <Link className="" href="/projects/juicer">Sugar Cane Juicer Machine</Link>
          <Link className="" href="/projects/charging-evs">Charging EVs</Link>
          <Link className="" href="/projects/pill">Pill-2-gO</Link>
          <Link className="" href="/projects/tiara">Tiara</Link>
          <Link className="" href="/projects/sunfryer">Sunfryer</Link>
          <Link className="" href="/projects/toilet-seat">No CaCa Toilet Seat</Link>
          <Link className="" href="/projects/tensegrity-bridge">Tensegrity Bridge</Link>
        </div>
        <div className="py-4"><Link href="/contact">Contact</Link></div>
      </div>
    </div>
  );
}
