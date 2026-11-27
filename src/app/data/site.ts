// Everything personal on the site lives here. Edit this file to update the site.

export const site = {
  name: "Zhou Xuanle",
  monogram: "ZXL",
  shortName: "Xuanle",
  role: "Mechanical Engineer",
  location: "Boston, MA",
  // Your own words from the original site, kept. Edit freely.
  greeting: "Hello! My name is Xuanle!",
  tagline: "I design, build and bring up hardware.",
  summary:
    "Mechanical engineer at TeraDAR in Boston.",
  intro: [
    "I grew up in Singapore and studied Mechanical Engineering at Nanyang Technological University. Today, I design and prototype hardware for terahertz imaging systems at TeraDAR in Boston.",
    "I’ve been intrigued by how things work for as long as I can remember. I used to take apart my Uniball Signo 0.38 pens and tried to build a remote-controlled airplane with my brother. Years later, in 2026, I became a private pilot!",
  ],
  // Optional: a sentence on what you want to study in grad school. Leave "" to hide.
  focus: "",
  email: "xuanlezhou@gmail.com",
  linkedin: "https://linkedin.com/in/xuanlezhou",
  github: "https://github.com/Xuanlezhou",
  phones: [
    { label: "US", value: "+1 408 329 8642" },
    { label: "SG", value: "+65 9865 0839" },
  ],
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
    when: "Present",
    link: "https://teradar.com/",
    points: [
      "Design heat sinks and sensor mounts for terahertz imaging sensors, working closely with electrical, software and test engineers.",
      "Run thermal simulations and studies to manage heat dissipation and keep image sensors performing reliably.",
      "Developed roof and bumper mounts that integrate terahertz sensors alongside reference LiDARs, radars and cameras on a test vehicle.",
      "Created calibration and test targets for real-world terahertz imaging tests.",
      "Take parts from CAD to finished hardware with 3D printing, laser cutting, and manual and CNC milling.",
      "Bring up new systems, program a glue-dispensing robot for assembly, and built an internal inventory tool.",
      "Lead cross-functional design reviews to align sensor integration across hardware, software and test.",
    ],
  },
  {
    org: "Nanyang Technological University",
    role: "B.Eng. Mechanical Engineering",
    place: "Singapore",
    when: "",
    points: [
      "Undergraduate Research Programme: 3D heart-valve reconstruction from a 2D template, with KKH paediatric cardiac surgeons.",
      "Shell Eco-marathon hydrogen fuel-cell team — Vehicle Design and Technical Innovation awards (1st), 2nd in efficiency.",
    ],
  },
];

export const skills = [
  { group: "CAD & design", items: ["SolidWorks", "Heat sinks & enclosures", "Vehicle sensor mounting", "Machine element design"] },
  { group: "Fabrication", items: ["Manual & CNC milling", "Laser cutting", "3D printing", "TIG welding", "Robotic glue dispensing"] },
  { group: "Test & analysis", items: ["Thermal simulation", "Thermal studies", "System bring-up", "Calibration targets", "Kinematics"] },
  { group: "Programming", items: ["Robot programming", "Internal tools", "TypeScript / JavaScript", "ESP32 firmware"] },
];

export const beyond = [
  "General aviation pilot — the reason half my side projects have wings.",
  "Pen-plotter artist turning FAA airport diagrams into prints.",
  "Maker of small things: plane-shaped fidget clickers, ASCII art, LED maps.",
];
