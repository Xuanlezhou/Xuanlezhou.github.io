import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel, { Slides } from "../../components/carousel";
import ProjectDetail from "../../components/project-detail";

export default function HeartValve() {
  const title = "3D Heart Valve"
  const location = "Singapore"
  const dateRange = "Aug 2022 – June 2023"
  const content = (
    <span>
      Annually, approximately 100 babies are born with congenital heart defects. 
      As the population ages, about 1 in 20 individuals develops heart disease, often necessitating valve replacement surgery. 


      <br /> <br / >
      This heart valve project builds on Duran et al. (2002)’s work,
      and proposes a novel approach to reconstruct the valve from a 2D template.
      This process potentially eliminates the need for molds, leading to significant savings in both time and costs.
    </span>
  )
  const supplement = "This research project was conducted under the selective Undergraduate Research Programme at NTU, in collaboration with pediatric cardiac surgeons from the KK Women’s and Children’s Hospital in Singapore."
  const slides: Slides = [
    {
      url: "https://drive.google.com/uc?export=view&id=1XMJY8O8fkSkFbNKTPP__r9taYH_e367o",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/125PCZgJqYDhQEfNJxyo79kWmA89t73Jt/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1YFHf-SwpG2IIDbSEhKVz-XZXzh-zww7m",
      type: "image",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1AcC4hWrdG3jpAoSzmK9oWz-eHs9TIX_X",
      type: "image",
    }
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
