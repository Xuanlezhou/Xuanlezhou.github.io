import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel, { Slides } from "../../components/carousel";
import ProjectDetail from "../../components/project-detail";

export default function Sunfryer() {
  const title = "Sunfryer"
  const location = "Berkeley, CA"
  const dateRange = "Jun 2022 – July 2022"
  const content = (
    <span>
      This cookware was designed for a more convenient small-household frying
      usage by eliminating the use of racks and serviettes, and supports
      sustainability by reducing oil usage and wastage.
      <br />
      <br />
      Including a round platform around the pan serves as a draining system
      allowing excess oil to flow back into the pan and maximizes the amount
      of food items that can be placed on it. Reduction of the pot’s base allows
      it to be functional for most household frying usage whilst reducing the
      amount of oil required as less oil is needed to cover the fried food items completely.
    </span>
  )
  const supplement = "This design was submitted under BESCO’s closed-door Cookware Innovation Competition 'seeking innovative ideas among creative students' for potential products."
  const slides: Slides = [
    {
      url: "https://drive.google.com/uc?export=view&id=1mgIDAVcPAuMXOUuvlrf5_KNq5knxPx0x",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/1VKL8HnLaXOlMH2OlVVicHDJW9x-5Bp4X/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1Mru3B4KsKmeMNwtWlHtPi5e9CMKmYiLa",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1Y5B7GiitPubYRKszXGa-NgJCvCpmgQES",
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
