import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function Juicer() {
  const title = "Sugar Cane Juicer"
  const location = "Singapore"
  const dateRange = "Jan 2022 – May 2022"
  const content = "This is a conceptual design for a two-roller sugar cane juice extraction machine. We carried out design calculations for sizing and selection of all the machine elements for the machine, including the motor, shaft coupling, shafts, gears, belts & pulleys, chains & sprockets, keys, plain ball bearings, retaining rings, coupling, etc before creating a to-scale 3D mock up on Solidworks."
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
