import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function Pill() {
  const title = "Pill-2-gO"
  const location = "Singapore"
  const dateRange = "Jan 2022 – May 2022"
  const content = (
    <span>
      The Pill-2-gO bottle retains the conventional technologies and methodologies that have made stainless steel water bottles such attractive and popular products in recent years while optimizing and innovating on the untapped potential to incorporate new features that address the novel needs of consumers in a post-pandemic world.
      <br /> <br />
      Our bottle utilizes the space inherent in the bottle cap to implement storage compartments within which can then be used to store masks, pills, headphones amongst others. A phone stand mechanism is also built into the bottom of the bottle. 
    </span>)
  const supplement = "This project was completed under a module called \"Engineering Innovation and Design (EID) Program\" in NTU aimed at helping students experience some of the practical learning in preparation for an engineering or technopreneur career. We received a funding of $200 and were awarded an A."
  const slides = [
    {
      url: "https://mcdn.wallpapersafari.com/medium/62/95/IO7b4q.jpg",
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
