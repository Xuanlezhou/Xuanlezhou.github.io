import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function Juicer() {
  const title = "Sugar Cane Juicer"
  const location = "Singapore"
  const dateRange = "Jan 2022 – May 2022"
  const content = "A Tele-Operated Robotic Arm with a 6DOF controller that allows the user to move freely within a space while detecting in real time, it’s exact position to control our 6 DOF robotic output arm. For the technically curious, 6 encoders in the controller will detect the movement by measuring the joint angles, which is then translated into a pose in 3D space using forward kinematics. Our integration system will then use inverse kinematics to calculate the joint angles for the 6 servomotors of the output robotic arm."
  const supplement = "This project was completed as part of the \"Machine Element Design\" module in NTU where students are required to come up with a design for Sugar Cane machines from scratch."
  const slides = [
    {
      url: "https://mcdn.wallpapersafari.com/medium/55/71/MOChuV.jpg",
    },
    {
      url: "https://mcdn.wallpapersafari.com/medium/3/37/mQbCrx.jpg",
    },
    {
      url: "https://mcdn.wallpapersafari.com/medium/72/9/VXA8uZ.jpg",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Carousel slides={slides} />
      </div>
      <div className="flex justify-center">
        <ProjectDetail title={title} location={location} dateRange={dateRange} content={content} supplement={supplement} />
      </div>
      <Footer />
    </div>
  );
}
