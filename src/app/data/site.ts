// Everything personal on the site lives here. Edit this file to update the site.

export const site = {
  name: "Zhou Xuanle",
  monogram: "ZXL",
  shortName: "Xuanle",
  role: "Mechanical Engineer",
  location: "Boston, MA",
  // Your own words from the original site, kept. Edit freely.
  greeting: "Hello! My name is Xuanle!",
  tagline: "I design and build things, mostly hardware.",
  summary:
    "Mechanical engineer at TeraDAR in Boston.",
  intro: [
    "I’ve been intrigued by how things work for as long as I can remember. I used to take apart my Uniball Signo 0.38 pens and tried to build a remote-controlled airplane with my brother.",
    "That curiosity took me to Mechanical Engineering at Nanyang Technological University in Singapore, and now to TeraDAR in Boston, where I work on hardware for terahertz imaging systems. As for the airplane? In 2026, I became a private pilot!",
  ],
  // Optional: a sentence on what you want to study in grad school. Leave "" to hide.
  focus: "",
  email: "xuanlezhou@gmail.com",
  linkedin: "https://linkedin.com/in/xuanlezhou",
  github: "https://github.com/Xuanlezhou",
  // Phone numbers are hidden from the site. Add entries like { label: "US", value: "+1 ..." } to show them.
  phones: [] as { label: string; value: string }[],
  // Drop a PDF at public/resume.pdf and set this to "/resume.pdf" to show a Résumé button.
  resumeUrl: "",
};

// Highlights strip under the intro — hidden for now; set to true to bring it back.
export const showHighlights = false;

export const highlights = [
  { stat: "1st", label: "of 24 teams — NTU Making & Tinkering (robotic arm)" },
  { stat: "2×", label: "1st-place awards — Shell Eco-marathon Asia (design + innovation)" },
  { stat: "Top 10", label: "of 50+ teams — NEA ILOOMINATION design competition" },
  { stat: "Research", label: "Undergraduate heart-valve research with KK Women's & Children's Hospital surgeons" },
];

export interface ExperienceItem {
  org: string;
  role: string;
  place: string;
  when: string;
  points: string[];
  link?: string;
}

export const experience: ExperienceItem[] = [
  {
    org: "TeraDAR",
    role: "Mechanical Engineer",
    place: "Boston, MA",
    when: "Feb 2024 – Present",
    link: "https://teradar.com/",
    points: [
      "Design heat sinks and sensor mounts for terahertz imaging sensors, working closely with electrical, software and test engineers.",
      "Run thermal simulations and airflow studies to manage heat dissipation — cutting sensor temperatures by 4–8 °C against initial designs.",
      "Developed roof and bumper mounts that integrate terahertz sensors alongside reference LiDARs, radars and cameras on a test vehicle.",
      "Created calibration and test targets for real-world terahertz imaging tests.",
      "Take parts from CAD to finished hardware with 3D printing, laser cutting, and manual and CNC milling.",
      "Bring up new systems and program a glue-dispensing robot for assembly.",
      "Built an ERP-style inventory system for the hardware team.",
      "Lead cross-functional design reviews to align sensor integration across hardware, software and test.",
    ],
  },
  {
    org: "Nanyang Technological University",
    role: "B.Eng. Mechanical Engineering",
    place: "Singapore",
    when: "Graduated 2024",
    points: [
      "Undergraduate Research Programme: 3D heart-valve reconstruction from a 2D template, with KKH paediatric cardiac surgeons.",
      "Shell Eco-marathon hydrogen fuel-cell team — Vehicle Design and Technical Innovation awards (1st), 2nd in efficiency.",
    ],
  },
];

export const skills = [
  {
    group: "Mechanical design",
    items: ["SolidWorks", "Heat sinks & enclosures", "Sensor mounts & brackets", "Machine elements", "Design calculations"],
  },
  {
    group: "Thermal & simulation",
    items: ["ANSYS Icepak", "SolidWorks Flow Simulation", "Thermal testing"],
  },
  {
    group: "Prototyping & fabrication",
    items: ["CNC & manual milling", "Laser cutting", "3D printing", "TIG welding"],
  },
  {
    group: "Assembly, test & automation",
    items: ["System bring-up", "Robotic glue dispensing", "Test & calibration targets", "ESP32 firmware"],
  },
];

export const beyond = [
  "General aviation pilot — the reason half my side projects have wings.",
  "Pen-plotter artist turning FAA airport diagrams into prints.",
  "Maker of small things: plane-shaped fidget clickers, ASCII art, LED maps.",
];
