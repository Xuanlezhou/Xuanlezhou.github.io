import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel, { Slides } from "../../components/carousel";
import ProjectDetail from "../../components/project-detail";

export default function TensegrityBridge() {
  const title = "Tensegrity Bridge"
  const location = "Singapore"
  const dateRange = "May 2021 – Jul 2021"
  const content = (
    <span>
      Our Tensegrity Bridge model was built as part of NTU’s engineering
      outreach program for pre-tertiary students.
      <br />
      <br />
      This modular design allows students to take on a practical approach towards
      understanding concepts outside of the classroom. By turning the knobs along
      the screw threads at the end of each rod, users are able to see for themselves
      how the structure is held by the tensions that interact and change with each
      turn of the knob.
    </span>
  )
  const slides: Slides = [
    {
      url: "https://drive.google.com/uc?export=view&id=1PKdTRfHu-QGTTopvLjme29I6clnQdE-K",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/1dN9vNC5aM9rboNrqX3R2-ANyhE-lOYuQ/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=18y7EbNxtaWuflt0hCH13kFX0wLvDRrS0",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1LW7fGkM-nhNuYSc0SNdBK7ArHmmHV1x3",
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
        <ProjectDetail title={title} location={location} dateRange={dateRange} content={content} />
      </div>
      <Footer />
    </div>
  );
}
