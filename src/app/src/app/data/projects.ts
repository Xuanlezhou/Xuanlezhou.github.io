// All project content. Each entry becomes /projects/<slug>.

export interface Slide {
  url: string;
  type: "image" | "iframe";
}

export interface Project {
  slug: string;
  title: string;
  category: "engineering" | "maker";
  kind?: string; // discipline label shown on cards
  summary: string; // one line for cards
  place: string;
  when: string;
  context: string; // course, team, competition
  cover?: string;
  coverFit?: "cover" | "contain"; // "contain" shows the whole photo on the card
  tags: string[];
  result?: string; // headline outcome
  processes?: string[]; // how it was made
  body?: string[]; // original write-up paragraphs, shown as-is
  note?: string; // italic footnote (team, programme, awards)
  challenge: string[];
  approach: string[];
  outcome: string[];
  slides: Slide[];
  links?: { label: string; href: string }[];
  status?: string;
  featured?: boolean;
}

const img = (slug: string, n: number): Slide[] =>
  Array.from({ length: n }, (_, i) => ({
    url: `/photos/projects/${slug}/photo-${String(i + 1).padStart(2, "0")}.jpg`,
    type: "image" as const,
  }));

const drive = (id: string): Slide => ({
  url: `https://drive.google.com/file/d/${id}/preview`,
  type: "iframe",
});

export const projects: Project[] = [
  {
    slug: "shell-eco-marathon",
    title: "Shell Eco-marathon — HYD120GE",
    category: "engineering",
    summary: "Hydrogen fuel-cell urban concept car with a teardrop, boat-tail body designed for minimum drag.",
    place: "Lombok, Indonesia & Singapore",
    when: "Aug 2022 – Jan 2023",
    context: "NTU team, Shell Eco-marathon Asia — Urban Concept, Hydrogen Fuel Cell",
    cover: "/photos/projects/shell-eco-marathon/photo-01.jpg",
    tags: ["Vehicle design", "Aerodynamics", "Hydrogen fuel cell", "Team build"],
    result: "1st — Vehicle Design Award · 1st — Technical Innovation Award · 2nd in efficiency",
    challenge: [
      "Shell Eco-marathon asks student teams to design, build and drive the most energy-efficient car. Speed doesn't win — distance per unit of energy does, so every gram and every bit of drag counts.",
    ],
    approach: [
      "The HYD120GE body takes cues from a diving falcon and the B-2 Spirit: a teardrop profile in both side and plan view keeps flow attached around the vehicle.",
      "A boat-tail rear was chosen for minimum drag, letting the flow recover energy as back pressure instead of shedding it into a wake.",
    ],
    outcome: [
      "At the Asia regionals the team won two 1st-place off-track awards — Vehicle Design and Technical Innovation — and placed 2nd in efficiency in the Urban Concept hydrogen fuel-cell category.",
    ],
    slides: img("shell-eco-marathon", 7),
    featured: true,
  },
  {
    slug: "heart-valve",
    title: "3D Heart Valve from a 2D Template",
    category: "engineering",
    summary: "Research into reconstructing a heart valve from a flat template.",
    place: "Singapore",
    when: "Aug 2022 – Jun 2023",
    context: "NTU Undergraduate Research Programme, with paediatric cardiac surgeons at KK Women's and Children's Hospital",
    cover: "/photos/projects/heart-valve/photo-01.jpg",
    tags: ["Medical devices", "Research", "Prototyping", "Clinical collaboration"],
    result: "Selective research programme in collaboration with KKH surgeons",
    challenge: [
      "Around 100 babies in Singapore are born each year with congenital heart defects, and roughly 1 in 20 people develop heart disease as they age — often needing a valve replacement.",
      "Building replacement valves typically relies on moulds, which cost time and money for every new geometry.",
    ],
    approach: [
      "Building on Duran et al. (2002), I worked on a novel approach that reconstructs the 3D valve from a 2D template.",
    ],
    outcome: [
      "The method could eliminate the need for moulds, saving significant time and cost per valve.",
    ],
    slides: [...img("heart-valve", 1), drive("125PCZgJqYDhQEfNJxyo79kWmA89t73Jt"), ...img("heart-valve", 3).slice(1)],
    featured: true,
  },
  {
    slug: "robotic-arm",
    title: "Tele-operated 6-DOF Robotic Arm",
    category: "engineering",
    summary: "A wearable-style 6-DOF controller that drives a servo robotic arm in real time over Bluetooth.",
    place: "Singapore",
    when: "May 2021 – Aug 2021",
    context: "NTU Making & Tinkering programme · $2,000 funding",
    cover: "/photos/projects/robotic-arm/photo-01.jpg",
    tags: ["Mechatronics", "Kinematics", "Encoders & servos", "Bluetooth"],
    result: "1st of 24 teams",
    challenge: [
      "Let a person move freely in space and have a robotic arm mirror that motion in real time.",
    ],
    approach: [
      "Three systems: a controller, an integration system and the output arm.",
      "Six encoders in the controller measure joint angles; forward kinematics turns them into a 3D pose.",
      "The integration system uses inverse kinematics to compute joint angles for the arm's six servomotors.",
    ],
    outcome: ["Placed 1st among 24 teams in the programme."],
    slides: [...img("robotic-arm", 1), drive("1AGC4JYHh6ElKwwQWimxT41NOy1Y6Kftk"), ...img("robotic-arm", 5).slice(1)],
    featured: true,
  },
  {
    slug: "juicer",
    title: "Sugar Cane Juicer",
    category: "engineering",
    summary: "Two-roller juice extractor with every machine element sized from first principles.",
    place: "Singapore",
    when: "Jan 2022 – May 2022",
    context: "NTU Machine Element Design module",
    cover: "/photos/projects/juicer/photo-01.jpg",
    tags: ["Machine design", "SolidWorks", "Design calculations", "Drivetrain"],
    challenge: ["Design a sugar cane juice extraction machine from scratch."],
    approach: [
      "Carried out design calculations to size and select every machine element: motor, shafts, couplings, gears, belts and pulleys, chains and sprockets, keys, ball bearings and retaining rings.",
      "Built a to-scale 3D model of the full machine in SolidWorks.",
    ],
    outcome: ["A complete, calculation-backed conceptual design of a belt, chain and gear driven two-roller juicer."],
    slides: [...img("juicer", 1), drive("1Gd_65fhleBInkkBZOrfssEvF2h-AR21D"), ...img("juicer", 6).slice(1)],
    featured: true,
  },
  {
    slug: "pill",
    title: "Pill-2-gO Bottle",
    category: "engineering",
    summary: "A stainless bottle whose cap stores pills, masks and earbuds, with a phone stand in the base.",
    place: "Singapore",
    when: "Jan 2022 – May 2022",
    context: "NTU Engineering Innovation and Design programme · $200 funding",
    cover: "/photos/projects/pill/photo-01.jpg",
    tags: ["Product design", "Consumer products", "Prototyping"],
    result: "Graded A",
    challenge: ["Find untapped value in the everyday stainless water bottle for a post-pandemic user."],
    approach: [
      "Kept the proven construction of stainless bottles and used the dead space in the cap for storage compartments — masks, pills, earbuds.",
      "Integrated a phone-stand mechanism into the base.",
    ],
    outcome: ["Funded prototype; the project was awarded an A."],
    slides: [
      ...img("pill", 1),
      drive("1L4gVXpamMHXQGLce9fAVip8lAIs4R91_"),
      ...img("pill", 2).slice(1),
      drive("1nPpnGjtX2eFdpo57COz_w0-XTNrqLRjK"),
      drive("1A9bAKDOr8x6GUYG7Phg937gK2grnx6XW"),
      drive("1ERGzOnnoBbOEH3uT1UwhcQ7bFWuJgsnF"),
      ...img("pill", 3).slice(2),
    ],
  },
  {
    slug: "sunfryer",
    title: "Sunfryer",
    category: "engineering",
    summary: "A small-household fryer that drains itself and needs less oil — no racks or paper towels.",
    place: "Berkeley, CA",
    when: "Jun 2022 – Jul 2022",
    context: "BESCO closed-door Cookware Innovation Competition",
    cover: "/photos/projects/sunfryer/photo-01.jpg",
    tags: ["Product design", "Sustainability", "Cookware"],
    challenge: ["Home frying wastes oil and needs extra racks and serviettes to drain food."],
    approach: [
      "Added a round platform around the pan that drains excess oil back into it and holds more food.",
      "Reduced the pot's base so less oil is needed to fully cover food, while staying useful for most household frying.",
    ],
    outcome: ["Submitted to BESCO's competition for potential products."],
    slides: [...img("sunfryer", 1), drive("1VKL8HnLaXOlMH2OlVVicHDJW9x-5Bp4X"), ...img("sunfryer", 3).slice(1)],
  },
  {
    slug: "toilet-seat",
    title: "No CaCa Toilet Seat",
    category: "engineering",
    summary: "A toilet seat redesign that nudges the public toward hygienic behaviour.",
    place: "Singapore",
    when: "May 2021 – Jun 2021",
    context: "NEA ILOOMINATION competition for tertiary students",
    cover: "/photos/projects/toilet-seat/photo-01.jpg",
    tags: ["Human-centred design", "Root-cause analysis", "Public infrastructure"],
    result: "Top 10 of 50+ teams",
    challenge: [
      "Mixed-gender public toilets are hard to keep clean. Talking to maintenance staff and studying user behaviour, we traced it mainly to users who stand or won't lift the seat.",
    ],
    approach: [
      "Added a side tab that invites users to lift the seat before use.",
      "Thinned the seat in targeted areas around the rim to discourage people from stepping on it.",
    ],
    outcome: ["Top 10 finalist out of 50+ teams, with a consolation prize."],
    slides: [...img("toilet-seat", 1), drive("1LjFsSH4g7rntJvY20o7bQFJyKOEhdAa2"), ...img("toilet-seat", 3).slice(1)],
  },
  {
    slug: "tensegrity-bridge",
    title: "Tensegrity Bridge",
    category: "engineering",
    summary: "A modular, adjustable tensegrity model that lets students feel how tension holds a structure up.",
    place: "Singapore",
    when: "May 2021 – Jul 2021",
    context: "NTU engineering outreach for pre-tertiary students",
    cover: "/photos/projects/tensegrity-bridge/photo-01.jpg",
    tags: ["Structures", "Education", "Modular design"],
    challenge: ["Make structural concepts tangible for students outside the classroom."],
    approach: [
      "Designed a modular bridge where knobs on threaded rod ends adjust member tension.",
    ],
    outcome: ["With each turn of a knob, students see the structure respond as the tensions change."],
    slides: [...img("tensegrity-bridge", 1), drive("1dN9vNC5aM9rboNrqX3R2-ANyhE-lOYuQ"), ...img("tensegrity-bridge", 3).slice(1)],
  },
  {
    slug: "dipstick-loosener",
    title: "Dipstick Loosener",
    category: "engineering",
    summary: "A pocket tool for loosening an overtightened dipstick cap during preflight — with a stowable Phillips and flathead bit that doubles as a T-handle.",
    place: "Norwood, MA",
    when: "May 2026 – ongoing",
    context: "Personal project",
    cover: "/photos/projects/dipstick-loosener/photo-01.jpg",
    coverFit: "contain",
    tags: ["Product design", "Aviation", "Hand tool"],
    body: [
      "An overtightened dipstick cap can be hard to loosen during a preflight oil check. The tool’s slotted end fits over the cap, and its knurled grip makes the cap easier to twist by hand.",
      "For extra leverage, the screwdriver bit slides through the side of the tool to form a T-handle. The bit has Phillips and flathead tips and stores inside the grip. A spring-loaded ball holds the bit in place during use and storage. A wire key ring keeps the tool handy and prevents the T-handle from sliding out of the side hole.",
    ],
    challenge: [],
    approach: [],
    outcome: [],
    slides: img("dipstick-loosener", 4),
  },
  {
    slug: "tiara",
    title: "Reclaimed-Steel Tiara",
    category: "engineering",
    summary: "A tiara TIG-welded and heat-formed from a rusted stainless threaded rod.",
    place: "Singapore",
    when: "Sep 2023",
    context: "Personal project — purely for the joy of pretending to be a princess",
    cover: "/photos/projects/tiara/photo-01.jpg",
    tags: ["TIG welding", "Metalwork", "Upcycling"],
    challenge: ["Turn a discarded, rusted stainless threaded rod into something elegant and wearable."],
    approach: [
      "TIG welded for structural integrity and shaped with a heat gun.",
      "Refined with a sanding machine for a smooth, comfortable fit, then set with gemstones.",
    ],
    outcome: ["A finished, wearable piece from scrap material."],
    slides: [
      ...img("tiara", 1),
      drive("1u1-XGF8m87Zf1B09_-ICPvUCc9JoZtYd"),
      ...img("tiara", 4).slice(1),
      drive("1zzLVtLFKzETKwY6opbRnOL3F2aeAGYAC"),
    ],
  },
  {
    slug: "chart-to-plotter",
    title: "Chart to Plotter",
    category: "maker",
    summary: "A browser tool that turns FAA airport diagram PDFs into plotter-ready SVG/DXF for pen-plotted prints.",
    place: "Boston, MA",
    when: "2026",
    context: "Personal project · part of the Contrails toolkit",
    tags: ["Aviation", "Pen plotting", "SVG / DXF", "Web tool"],
    challenge: ["Airport diagrams make beautiful line art, but FAA PDFs aren't something a pen plotter can draw."],
    approach: [
      "Built a browser tool that converts FAA airport diagram PDFs into clean, plotter-ready DXF and SVG.",
      "Adding print templates so each diagram becomes a finished, framed-ready layout.",
    ],
    outcome: ["Powers a growing series of pen-plotted aviation prints."],
    slides: [],
    links: [{ label: "Contrails on GitHub", href: "https://github.com/Xuanlezhou/Contrails" }],
    status: "Active",
  },
  {
    slug: "flight-track-art",
    title: "Flight Track Art",
    category: "maker",
    summary: "Turn a pilot's own flight — first solo, first cross-country, checkride — into custom art.",
    place: "Boston, MA",
    when: "2026",
    context: "Personal project · part of the Contrails toolkit",
    tags: ["Aviation", "Product", "Data visualisation"],
    challenge: ["Milestone flights matter to pilots, but there's no easy way to turn the track into something to hang on a wall."],
    approach: [
      "A companion tool where a customer enters their own flight and gets it back as customised digital art.",
      "Templates for the big milestones: discovery flight, first solo, first cross-country and the PPL checkride.",
    ],
    outcome: ["Being developed into a sellable product."],
    slides: [],
    links: [{ label: "Contrails on GitHub", href: "https://github.com/Xuanlezhou/Contrails" }],
    status: "In development",
  },
  {
    slug: "squawk-7600",
    title: "Squawk 7600",
    category: "maker",
    summary: "An aviation take on the Chrome offline dino game, with a live global leaderboard.",
    place: "Boston, MA",
    when: "2026",
    context: "Personal project",
    tags: ["Game", "JavaScript", "Supabase", "GitHub Pages"],
    challenge: ["Make a quick, shareable game pilots actually want to compete on."],
    approach: [
      "Endless runner with real takeoff variants at the start of each run — normal, short field and soft field — plus an optional skydiver mode.",
      "Players pick a callsign on first visit; scores go to a Supabase-backed leaderboard and can be shared with friends.",
      "A deliberately minimal phone layout so it plays well anywhere.",
    ],
    outcome: ["Live and playable on GitHub Pages."],
    slides: [],
    links: [{ label: "Play Squawk 7600", href: "https://burningavgasanddignity.github.io/Squawk-7600/" }],
    status: "Live",
  },
  {
    slug: "mbta-tracker",
    title: "Live MBTA Train Map",
    category: "maker",
    summary: "An LED map board of Boston's subway that lights up where every train is, right now.",
    place: "Boston, MA",
    when: "2026",
    context: "Personal project",
    tags: ["ESP32", "Embedded", "LEDs", "Live data"],
    challenge: ["Put live transit data on the wall as a physical object, not another screen."],
    approach: ["Starting with an ESP32 prototype that pulls live MBTA train positions and drives an LED map."],
    outcome: ["Firmware prototype underway."],
    slides: [],
    status: "In progress",
  },
];

const processes: Record<string, string[]> = {
  "dipstick-loosener": ["Function-led product design", "Slotted cap interface", "Stowable T-handle bit", "Spring-loaded ball detent"],
  "heart-valve": ["Mould-free fabrication from a flat 2D template", "Physical prototyping", "Clinician feedback loop"],
  "shell-eco-marathon": ["Low-drag body design", "Team vehicle build", "Competition testing"],
  juicer: ["Machine element sizing & selection", "Purchased-part specification", "SolidWorks to-scale assembly"],
  "robotic-arm": ["Encoder & servo integration", "Forward / inverse kinematics", "Funded build"],
  tiara: ["TIG welding", "Heat-gun forming", "Sanding & finishing", "Material reuse"],
  pill: ["Consumer product prototyping", "Mechanism design"],
  sunfryer: ["Cookware form design", "Material-use reduction"],
  "toilet-seat": ["Root-cause analysis", "Behaviour-led design"],
  "tensegrity-bridge": ["Modular threaded-rod assembly", "Adjustable tensioning"],
  "chart-to-plotter": ["PDF → DXF / SVG toolpath conversion", "Pen plotting"],
  "flight-track-art": ["Data to print pipeline"],
  "squawk-7600": ["Web app", "Supabase backend"],
  "mbta-tracker": ["ESP32 firmware", "LED hardware"],
};
projects.forEach((p) => (p.processes = processes[p.slug]));

const kinds: Record<string, string> = {
  "dipstick-loosener": "Product design",
  "heart-valve": "Research", juicer: "Mechanical", "shell-eco-marathon": "Design", "robotic-arm": "Mechatronics",
  pill: "Design", tiara: "Manufacturing", "tensegrity-bridge": "Mechanical", sunfryer: "Design", "toilet-seat": "Design",
  "chart-to-plotter": "Software", "flight-track-art": "Software", "squawk-7600": "Software", "mbta-tracker": "Electronics",
};
projects.forEach((p) => (p.kind = kinds[p.slug]));

// Side projects are hidden from the site for now; set to true to bring them back.
export const showSideProjects = false;

// Order chosen for a design & manufacturing grad school application:
// projects that go from design through to a physical build come first.
const order = [
  "shell-eco-marathon", "robotic-arm", "heart-valve", "juicer", "dipstick-loosener",
  "pill", "tiara", "tensegrity-bridge", "sunfryer", "toilet-seat",
  "chart-to-plotter", "mbta-tracker", "flight-track-art", "squawk-7600",
];
projects.sort((a, b) => order.indexOf(a.slug) - order.indexOf(b.slug));
const featured = ["shell-eco-marathon", "robotic-arm", "heart-valve", "juicer"];
projects.forEach((p) => (p.featured = featured.includes(p.slug)));

// Original write-ups from the first version of the site, kept word for word.
const writeups: Record<string, { body: string[]; note: string }> = {
  "shell-eco-marathon": {
    body: [
      "The Shell Eco-marathon is an international competition that challenges students to design, build, and drive the most energy-efficient car. The primary focus of the event is not on speed, but on maximizing fuel efficiency and promoting sustainable and innovative solutions.",
      "The HYD120GE, inspired by the Diving Falcon and the B2 Spirit Bomber, boasts a meticulous design featuring a teardrop shape from both side and top views for optimal airflow around the vehicle. Its boat-tail shape, chosen for minimal drag, allows for efficient flow energy recovery as back pressure."
    ],
    note: "The team participated in the Asia Regionals, clinching two 1st place off-track awards: Vehicle Design Award and Technical Innovation Award as well as 2nd place in efficiency under the Urban Concept, Hydrogen Fuel Cell category!",
  },
  "heart-valve": {
    body: [
      "Annually, approximately 100 babies are born with congenital heart defects. As the population ages, about 1 in 20 individuals develops heart disease, often necessitating valve replacement surgery. This heart valve project builds on Duran et al. (2002)’s work, and proposes a novel approach to reconstruct the valve from a 2D template. This process potentially eliminates the need for molds, leading to significant savings in both time and costs."
    ],
    note: "This research project was conducted under the selective Undergraduate Research Programme at NTU, in collaboration with pediatric cardiac surgeons from the KK Women’s and Children’s Hospital in Singapore.",
  },
  "robotic-arm": {
    body: [
      "A Tele-Operated Robotic Arm with a 6DOF controller that allows the user to move freely within a space while detecting in real time, it’s exact position to control our 6 DOF robotic output arm. For the technically curious, 6 encoders in the controller will detect the movement by measuring the joint angles, which is then translated into a pose in 3D space using forward kinematics. Our integration system will then use inverse kinematics to calculate the joint angles for the 6 servomotors of the output robotic arm."
    ],
    note: "This project was completed under the 'Making and Tinkering' program in NTU where we received a funding of $2000 and emerged 1st amongst 24 other groups.",
  },
  "juicer": {
    body: [
      "This is a conceptual design for a two-roller sugar cane juice extraction machine. We carried out design calculations for sizing and selection of all the machine elements for the machine, including the motor, shaft coupling, shafts, gears, belts & pulleys, chains & sprockets, keys, plain ball bearings, retaining rings, coupling, etc. before creating a to-scale 3D mock up on Solidworks."
    ],
    note: "This project was completed as part of the \"Machine Element Design\" module in NTU where students are required to come up with a design for Sugar Cane machines from scratch.",
  },
  "pill": {
    body: [
      "The Pill-2-gO bottle retains the conventional technologies and methodologies that have made stainless steel water bottles such attractive and popular products in recent years while optimizing and innovating on the untapped potential to incorporate new features that address the novel needs of consumers in a post-pandemic world.",
      "Our bottle utilizes the space inherent in the bottle cap to implement storage compartments within which can then be used to store masks, pills, headphones amongst others. A phone stand mechanism is also built into the bottom of the bottle."
    ],
    note: "This project was completed under a module called \"Engineering Innovation and Design (EID) Program\" in NTU aimed at helping students experience some of the practical learning in preparation for an engineering or technopreneur career. We received a funding of $200 and were awarded an A.",
  },
  "sunfryer": {
    body: [
      "This cookware was designed for a more convenient small-household frying usage by eliminating the use of racks and serviettes, and supports sustainability by reducing oil usage and wastage.",
      "Including a round platform around the pan serves as a draining system allowing excess oil to flow back into the pan and maximizes the amount of food items that can be placed on it. Reduction of the pot’s base allows it to be functional for most household frying usage whilst reducing the amount of oil required as less oil is needed to cover the fried food items completely."
    ],
    note: "This design was submitted under BESCO’s closed-door Cookware Innovation Competition 'seeking innovative ideas among creative students' for potential products.",
  },
  "toilet-seat": {
    body: [
      "After a careful analysis of societal behaviors, system design, and useful input from maintenance personnel, we determined several root causes of issues in maintaining cleanliness in mixed gender public toilets. They are mainly due to people who preferred to stand or are unwilling to lift the seats when using the toilet.",
      "To encourage the proper usage of toilets in handicapped toilets by members of the public, we introduced a tab at the side of the toilet seat, encouraging male users to lift the toilet seat before using it. We also reduced the thickness in appropriate areas along the circumference, to deter members from stepping on the toilet seat covers."
    ],
    note: "This design was submitted as part of a competition called ILOOMINATION for tertiary students, organised and run by NEA, to promote safe sanitation and hygiene in public toilets. Our team were in the Top 10 finalists after competing with 50+ teams and were awarded a consolation prize of $300.",
  },
  "tensegrity-bridge": {
    body: [
      "Our Tensegrity Bridge model was built as part of NTU’s engineering outreach program for pre-tertiary students.",
      "This modular design allows students to take on a practical approach towards understanding concepts outside of the classroom. By turning the knobs along the screw threads at the end of each rod, users are able to see for themselves how the structure is held by the tensions that interact and change with each turn of the knob."
    ],
    note: "",
  },
  "tiara": {
    body: [
      "Drawing inspiration from classic regal aesthetics and modern design sensibilities, the tiara was conceptualized to be not just a headpiece, but a symbol of grace and innovation.",
      "Crafted from a reclaimed, rusted stainless threaded steel rod, this tiara exemplifies sustainable elegance, merging environmental consciousness with intricate artistry. Using TIG welding for structural integrity and a heat gun for precise shaping, the tiara was meticulously molded and refined with a sanding machine to ensure a smooth, comfortable fit. The final piece, adorned with carefully selected gemstones, stands as a symbol of transformation, turning discarded materials into a beacon of grace and innovation."
    ],
    note: "An amusing endeavor, embarked upon solely for the joy of pretending to be a princess.",
  },
};
projects.forEach((p) => {
  const w = writeups[p.slug];
  if (w) {
    p.body = w.body;
    if (w.note) p.note = w.note;
  }
});

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
