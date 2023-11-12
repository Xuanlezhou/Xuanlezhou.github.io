import { MdWork, MdAlternateEmail } from "react-icons/md";
import Image from "next/image";
import Footer from "../components/footer";
import Navbar from "../components/navbar";

export default function Projects() {
  return (
    <main>
      <Navbar />
      <div className="relative h-96 w-full">
        <Image
          src="/photos/contact.jpg"
          alt="Logo"
          fill={true}
        />
      </div>
      <Footer />
    </main>
  );
}
