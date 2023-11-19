import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel, { Slides } from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function ChargingEVs() {
  const title = "Chargingevs"
  const location = "Singapore"
  const dateRange = "May 2021 – June 2021"
  const content = (
    <span>
      After a careful analysis of societal behaviors, system design, and useful input from maintenance personnel,
      we determined several root causes of issues in maintaining cleanliness in mixed gender public toilets.
      They are mainly due to people who preferred to stand or are unwilling to lift the seats when using the toilet.
      <br />
      <br />
      To encourage the proper usage of toilets in handicapped toilets by members of the public,
      we introduced a tab at the side of the toilet seat, encouraging male users to lift the
      toilet seat before using it. We also reduced the thickness in appropriate areas along the
      circumference, to deter members from stepping on the toilet seat covers.
    </span>
  )
  const supplement = "This design was submitted as part of a competition called ILOOMINATION for tertiary students, organised and run by NEA, to promote safe sanitation and hygiene in public toilets. Our team were in the Top 10 finalists after competing with 50+ teams and were awarded a consolation prize of $300."
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
