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
      url: "https://drive.google.com/uc?export=view&id=1vKpqK2SbF57uHmDedAGnKfEVyGo3wtpY",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/1u1-XGF8m87Zf1B09_-ICPvUCc9JoZtYd/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=17npm6k45SQrvOTDTFqxYy5vqVYGGpP88",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1uYMbvtiepuuQq4NWMp1w_d5Gz6xf4sq0",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1P5MqX9MQchDZEL0u-s9aIDxo36QrFH9v",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/1zzLVtLFKzETKwY6opbRnOL3F2aeAGYAC/preview",
      type: "iframe",
    },
    ];
  return (
    <div>
      <Navbar />
      <div className="flex flex-col items-center justify-center">
        <Carousel slides={slides} />
        <ProjectDetail title={title} location={location} dateRange={dateRange} content={content} supplement={supplement} />
      </div>
      <Footer />
    </div>
  );
}
