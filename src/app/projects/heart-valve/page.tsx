import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function HeartValve() {
  const title = "3D Heart Valve"
  const location = "Singapore"
  const dateRange = "May 2022 – June 2023"
  const content = (
    <span>
      hey
      <br /> <br />

      To encourage the proper usage of toilets in handicapped toilets by members of the public, we introduced a tab at the side of the toilet seat, encouraging male users to lift the toilet seat before using it. We also reduced the thickness in appropriate areas along the circumference, to deter members from stepping on the toilet seat covers. 
    </span>
  )
  const supplement = "This design was submitted as part of a competition called ILOOMINATION for tertiary students, organised and run by NEA, to promote safe sanitation and hygiene in public toilets. Our team were in the Top 10 finalists after competing with 50+ teams and were awarded a consolation prize of $300."
  const slides = [
    {
      url: "https://mcdn.wallpapersafari.com/medium/94/76/PnNABk.jpg",
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
