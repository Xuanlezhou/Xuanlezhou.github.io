import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel, { Slides } from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function Juicer() {
  const title = "Sugar Cane Juicer"
  const location = "Singapore"
  const dateRange = "Jan 2022 – May 2022"
  const content = (
    <span>
      This is a conceptual design for a two-roller sugar cane juice extraction machine.
      We carried out design calculations for sizing and selection of all the machine
      elements for the machine, including the motor, shaft coupling, shafts, gears,
      belts & pulleys, chains & sprockets, keys, plain ball bearings, retaining rings,
      coupling, etc. before creating a to-scale 3D mock up on Solidworks.
    </span>
  )
  const supplement = "This project was completed as part of the \"Machine Element Design\" module in NTU where students are required to come up with a design for Sugar Cane machines from scratch."
  const slides: Slides = [
    {
      url: "https://drive.google.com/uc?export=view&id=1VPusvleAeAfUH2MAm_JgBTEN7Pbk-XC9",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/1Gd_65fhleBInkkBZOrfssEvF2h-AR21D/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1J30hN-52oYTYL1Gu3XtFK8a48exShM47",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1dSSYaB8wAFjSdLYK5H-oLzFEt3kuAgV1",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1-ME3KI9g9UYz6WrsgupvezFwMfLe_HWq",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1eVv0IUWH2MVX2ktrwFla9SZF4CSPeIqi",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1TsHF2Q_fTT0KTRsWoBApd3KUzJbtd0Wg",
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
