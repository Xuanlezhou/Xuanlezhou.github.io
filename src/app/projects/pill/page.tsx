import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel, { Slides } from "../../components/carousel";
import ProjectDetail from "../../components/project-detail";

export default function Pill() {
  const title = "Pill-2-gO"
  const location = "Singapore"
  const dateRange = "Jan 2022 – May 2022"
  const content = (
    <span>
      The Pill-2-gO bottle retains the conventional technologies and methodologies
      that have made stainless steel water bottles such attractive and popular products
      in recent years while optimizing and innovating on the untapped potential to
      incorporate new features that address the novel needs of consumers in a post-pandemic world.
      <br />
      <br />
      Our bottle utilizes the space inherent in the bottle cap to implement storage
      compartments within which can then be used to store masks, pills, headphones
      amongst others. A phone stand mechanism is also built into the bottom of the bottle. 
    </span>
  )
  const supplement = "This project was completed under a module called \"Engineering Innovation and Design (EID) Program\" in NTU aimed at helping students experience some of the practical learning in preparation for an engineering or technopreneur career. We received a funding of $200 and were awarded an A."
  const slides: Slides = [
    {
      url: "https://drive.google.com/uc?export=view&id=1XsiND42EaqQLLIZtUqk4Bd7pWfYiGCdJ",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/1L4gVXpamMHXQGLce9fAVip8lAIs4R91_/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1ACHv7RmqqL6hgT3mSYmnc24WbYMnNhAO",
      type: "image",
    },
    {
      url: "https://drive.google.com/file/d/1nPpnGjtX2eFdpo57COz_w0-XTNrqLRjK/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/file/d/1A9bAKDOr8x6GUYG7Phg937gK2grnx6XW/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/file/d/1ERGzOnnoBbOEH3uT1UwhcQ7bFWuJgsnF/preview",
      type: "iframe",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1TZDJiyL5Q0hV8duOWf_9O9ovoPpElRFb",
      type: "image",
    },
    // {
      // url: "https://drive.google.com/uc?export=view&id=1d6-gKfw0xBpa1U4LDBvmGoRXQh8sQS12",
      // type: "image",
    // },
    
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
