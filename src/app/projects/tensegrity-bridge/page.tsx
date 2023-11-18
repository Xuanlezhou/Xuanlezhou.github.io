import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function TensegrityBridge() {
  const title = "Tensegrity Bridge"
  const location = "Singapore"
  const dateRange = "May 2021 – Jul 2021"
  const content = (
    <span>
      Our Tensegrity Bridge model was built as part of NTU’s engineering outreach program for pre-tertiary students.

      <br /> <br />
      This modular design allows students to take on a practical approach towards understanding concepts outside of the classroom. By turning the knobs along the screw threads at the end of each rod, users are able to see for themselves how the structure is held by the tensions that interact and change with each turn of the knob. 
    </span>
  )
  const slides = [
    {
      url: "https://mcdn.wallpapersafari.com/medium/92/8/zWBOqo.jpg",
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
        <ProjectDetail title={title} location={location} dateRange={dateRange} content={content} />
      </div>
      <Footer />
    </div>
  );
}
