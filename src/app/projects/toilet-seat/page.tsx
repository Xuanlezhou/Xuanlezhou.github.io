import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function ToiletSeat() {
  const title = "No CaCa Toilet Seat"
  const location = "Singapore"
  const dateRange = "May 2021 – June 2021"
  const content = "A Tele-Operated Robotic Arm with a 6DOF controller that allows the user to move freely within a space while detecting in real time, it’s exact position to control our 6 DOF robotic output arm. For the technically curious, 6 encoders in the controller will detect the movement by measuring the joint angles, which is then translated into a pose in 3D space using forward kinematics. Our integration system will then use inverse kinematics to calculate the joint angles for the 6 servomotors of the output robotic arm."
  const supplement = "This design was submitted as part of a competition called ILOOMINATION for tertiary students, organised and run by NEA, to promote safe sanitation and hygiene in public toilets. Our team were in the Top 10 finalists after competing with 50+ teams and were awarded a consolation prize of $300."
  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
        <Carousel />
      </div>
      <div className="flex justify-center">
        <ProjectDetail title={title} location={location} dateRange={dateRange} content={content} supplement={supplement} />
      </div>
      <Footer />
    </div>
  );
}
