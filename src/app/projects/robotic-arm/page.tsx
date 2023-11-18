import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel, { Slides } from "../../components/carousel";
import ProjectDetail from "../../components/project-detail";

export default function RoboticArm() {
  const title = "Tele-Operated Robotic Arm"
  const location = "Singapore"
  const dateRange = "May 2021 – Aug 2021"
  const content = (
    <span>
      A Tele-Operated Robotic Arm with a 6DOF controller that allows the user to move freely
      within a space while detecting in real time, it’s exact position to control our 6 DOF
      robotic output arm. For the technically curious, 6 encoders in the controller will
      detect the movement by measuring the joint angles, which is then translated into a pose
      in 3D space using forward kinematics. Our integration system will then use inverse kinematics
      to calculate the joint angles for the 6 servomotors of the output robotic arm.
    </span>
  )
  const supplement = "This project was completed under the 'Making and Tinkering' program in NTU where we received a funding of $2000 and emerged 1st amongst 24 other groups."
  const slides: Slides = [
    {
      url: "https://drive.google.com/uc?export=view&id=1fdZZFt2Mly2DHYcdup-iMHhhjBPZ0x2r",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/1AGC4JYHh6ElKwwQWimxT41NOy1Y6Kftk/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1s94MLyhWDammb2GCOiIs6WNgu4re0CwP",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1d6fJJKi-dgdAn-eAmRdc2L9vDE2LWWjB",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=17i793HJDlcj0Wr4ogWzFOr-4PiGe3c3e",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1j3eMCVKNfQL6juKiatlINLZhDi-k5VcD",
      type: "image",
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
