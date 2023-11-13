import Image from "next/image";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import ProjectCard from "../../components/project-card";
import Carousel from "@/app/components/carousel";

export default function RoboticArm() {
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Carousel />
      </div>
      <Footer />
    </div>
  );
}
