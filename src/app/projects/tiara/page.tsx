import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel, { Slides } from "../../components/carousel";
import ProjectDetail from "../../components/project-detail";

export default function Tiara() {
  const title = "Tiara"
  const location = "Singapore"
  const dateRange = "September 2023"
  const content = (
    <span>
      Drawing inspiration from classic regal aesthetics and modern design
      sensibilities, the tiara was conceptualized to be not just a headpiece,
      but a symbol of grace and innovation.
      <br />
      <br />
      Crafted from a reclaimed, rusted stainless threaded steel rod, this tiara
      exemplifies sustainable elegance, merging environmental consciousness with
      intricate artistry. Using TIG welding for structural integrity and a heat
      gun for precise shaping, the tiara was meticulously molded and refined with
      a sanding machine to ensure a smooth, comfortable fit. The final piece,
      adorned with carefully selected gemstones, stands as a symbol of transformation,
      turning discarded materials into a beacon of grace and innovation.
    </span>
  )
  const supplement = "An amusing endeavor, embarked upon solely for the joy of pretending to be a princess."
  const slides: Slides = [
    {
      url: "https://mcdn.wallpapersafari.com/medium/94/76/PnNABk.jpg",
      type: "image",
    },
    {
      url: "https://mcdn.wallpapersafari.com/medium/3/37/mQbCrx.jpg",
      type: "image",
    },
    {
      url: "https://mcdn.wallpapersafari.com/medium/72/9/VXA8uZ.jpg",
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
