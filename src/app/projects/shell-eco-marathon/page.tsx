import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import Carousel from "@/app/components/carousel";
import ProjectDetail from "@/app/components/project-detail";

export default function ShellEcoMarathon() {
  const title = "Shell Eco-Marathon"
  const location = "Lombok, IDN & Singapore, SG"
  const dateRange = "Aug 2022 – Jan 2023"
  const content = (<span>
    The Shell Eco-marathon is an international competition that challenges students to design, build, and drive the most energy-efficient car. The primary focus of the event is not on speed, but on maximizing fuel efficiency and promoting sustainable and innovative solutions. 
 
    <br /><br />
    The HYD120GE, inspired by the Diving Falcon and the B2 Spirit Bomber, boasts a meticulous design featuring a teardrop shape from both side and top views for optimal airflow around the vehicle. Its boat-tail shape, chosen for minimal drag, allows for efficient flow energy recovery as back pressure.
  </span>)
    //"This cookware was designed for a more convenient small-household frying usage by eliminating the use of racks and serviettes, and supports sustainability by reducing oil usage and wastage." <br/> "hu"
  const supplement = "The team participated in the Asia Regionals, clinching two 1st place off-track awards: Vehicle Design Award and Technical Innovation Award as well as 2nd place in efficiency under the Urban Concept, Hydrogen Fuel Cell category!"
  const slides = [ 

    { 
      url: "https://drive.google.com/uc?export=view&id=1rU0BcN2xmDVWeAZTWTfk-UWDjoH15ZNy",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=14D_-Nz-_i69adZ_1eASl2aSKuUh4iuVV",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1wE-z3Y0hXBT24WJ9LXGur2lNYXZdCgr_",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1vu3ejLOkTtkdtkGlJHb7CBGP3EONIDJ4",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1BCNKRkOJWPrndntPXqlgJpKsCjTkkr52",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1xqJXQq99YR1wDE8va0bgRHQ9SgcsyyxL",
    },
    {
      url: "https://drive.google.com/uc?export=view&id=1Lf6GbZHy8_-EHf4VYJzNx5vL53MxmzTv",
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
