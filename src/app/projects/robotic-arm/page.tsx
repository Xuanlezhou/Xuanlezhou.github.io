import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function RoboticArm() {
  const title = "Tele-Operated Robotic Arm"
  const location = "Singapore"
  const dateRange = "May 2021 – Aug 2021"
  const content = "A Tele-Operated Robotic Arm with a 6DOF controller that allows the user to move freely within a space while detecting in real time, it’s exact position to control our 6 DOF robotic output arm. For the technically curious, 6 encoders in the controller will detect the movement by measuring the joint angles, which is then translated into a pose in 3D space using forward kinematics. Our integration system will then use inverse kinematics to calculate the joint angles for the 6 servomotors of the output robotic arm."
  const supplement = "This project was completed under the 'Making and Tinkering' program in NTU where we received a funding of $2000 and emerged 1st amongst 24 other groups."
  const slides = [

    {
      url: "https://www.youtube.com/watch?v=nMJExYjDjtI",
    },
    {
      //<iframe src="https://drive.google.com/uc?export=view&id=1zyyXFmfBaxgclZevwU9wdl-pJYIF9AEG/preview" width="640" height="480"></iframe>
     //url: "https://drive.google.com/uc?export=view&id=1zyyXFmfBaxgclZevwU9wdl-pJYIF9AEG",
    },
    {
     url: "https://drive.google.com/file/d/18EvkSTOxUs-1uwS2JqvDUqiMOzp3E-P-/view",
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
