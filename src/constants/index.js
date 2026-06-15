// Prepend Vite base URL so public-folder assets resolve on any deployment subpath
const p = (path) => `${import.meta.env.BASE_URL}${path}`;

export const HERO_CONTENT = `Aerospace engineering student at Cairo University with a strong foundation in mechanical design, structural analysis, and CAD development. I build things that work — from competition aircraft to industrial robotic systems — combining precision engineering with a drive to solve real-world problems. Proficient in SolidWorks, ANSYS, MATLAB, and Blender, with hands-on experience across the full design lifecycle.`;

export const ABOUT_TEXT = `I'm an aerospace engineering student at Cairo University with a genuine obsession for how things are designed, built, and made to last. My work spans competitive aircraft development, industrial machine design, and high-fidelity 3D visualization — giving me a broad but grounded perspective on what it means to engineer something properly.

At OSCORP ENERGY, I've led the mechanical design of robotic sorting systems, ruggedized housings, and large-scale facility models under tight deadlines — work that demanded not just technical rigor but clear communication and fast decision-making. In parallel, academic projects like the DBF competition aircraft and the WIG effect craft sharpened my ability to translate aerodynamic and structural theory into physical, testable designs.

I'm comfortable working independently or as part of a cross-functional team, and I take pride in documentation and presentation as much as the engineering itself. I'm looking for roles where I can keep growing as a designer and contribute to work that matters.`;

export const EXPERIENCES = [
  {
    year: "Jun 2025 – Present",
    role: "Mechanical Design Engineer",
    company: "OSCORP ENERGY — Sydney, Australia (Remote)",
    description: `Engaged as the mechanical design lead on a suite of industrial waste-sorting and recycling systems. Responsible for the structural design and FEA validation of a dual-Delta-robot sorting platform, engineered to handle continuous high-speed operation while dampening complex kinematic vibrations. Designed ruggedized enclosures for sensitive electronics in harsh recycling environments, incorporating custom aeration, filtration, and self-cleaning mechanisms. Also produced a comprehensive 3D facility layout for executive presentations — modeling all major industrial equipment from scratch and delivering high-fidelity Blender renders on a four-day turnaround. All deliverables were optimized for manufacturability and supported by thorough technical documentation.`,
    technologies: ["SolidWorks", "ANSYS", "Blender", "FEA", "Motion Simulation", "DFM", "Structural Engineering", "Technical Documentation"],
  },
];

export const PROJECTS = [
  {
    id: "dbf",
    title: "Design/Build/Fly (DBF) Competition Aircraft",
    coverImage: p('projects/dbf/pics/Assem1.png'),
    images: [
      p('projects/dbf/pics/Assem1.png'),
      p('projects/dbf/pics/Dihedral_assem2.jpg'),
      p('projects/dbf/pics/internal.png'),
      p('projects/dbf/pics/screenshot.png'),
    ],
    videos: [p('projects/dbf/vids/assem.mp4')],
    description: `As Team Leader and Lead Mechanical Designer for the AIAA Design/Build/Fly competition, I directed the end-to-end development of a high-performance competition aircraft. The project required balancing structural integrity against aggressive weight targets, while surviving high-impact landings and meeting strict payload and CG constraints.`,
    highlights: [
      "Led a multidisciplinary team through the full design, fabrication, and flight testing cycle, coordinating mechanical, avionics, and aerodynamics workstreams under competition deadlines.",
      "Developed the complete 3D airframe architecture in SolidWorks and validated it against aerodynamic and landing-impact loads using ANSYS structural simulations.",
      "Engineered an ultra-compact internal packaging layout that housed payload, avionics, and battery systems while maintaining strict Center of Gravity tolerances across all loading conditions.",
      "Designed for rapid field serviceability — accessible compartments and a robust structure that recorded zero damage across all physical testing phases.",
      "Secured 3rd place nationally in a competitive field of 20 teams at the final airshow.",
    ],
    technologies: ["SolidWorks", "ANSYS", "Aerodynamic Design", "Structural Analysis", "Team Leadership", "Competition Optimization"],
    category: "Aerospace Engineering",
    role: "Team Leader & Lead Mechanical Designer",
  },
  {
    id: "battery-sorter",
    title: "Automated Battery Sorting System — OSCORP ENERGY",
    coverImage: p('projects/battery-sorter/pics/new.png'),
    images: [
      p('projects/battery-sorter/pics/new.png'),
      p('projects/battery-sorter/pics/1.png'),
    ],
    videos: [p('projects/battery-sorter/vids/batsort.mp4')],
    description: `Developed as part of my work at OSCORP ENERGY, this robotic sorting system automates the identification and separation of batteries in an industrial recycling facility. The design required navigating the challenges of a harsh, vibration-heavy environment while integrating two high-speed Delta robots into a scalable, cost-efficient structure.`,
    highlights: [
      "Engineered a heavy-duty structural framework to support dual Delta robots, validated to withstand double the operational load requirements while effectively dampening vibrations from robotic kinematics and heavy conveyors.",
      "Built the system architecture for modular expansion — the structure can seamlessly accommodate additional robotic units as facility throughput demands grow.",
      "Designed ruggedized electronic housings tailored for harsh recycling environments, incorporating custom aeration, filtration, and a self-cleaning mechanism.",
      "Managed the full mechanical lifecycle from material selection and 3D design in SolidWorks, through ANSYS structural analysis, to high-fidelity Blender renders for client presentations.",
    ],
    technologies: ["SolidWorks", "ANSYS", "Blender", "Delta Robotics", "Structural Engineering", "Vibration Analysis", "DFM"],
    category: "Industrial Mechanical Design",
    role: "Mechanical Designer — OSCORP ENERGY",
  },
  {
    id: "site-layout",
    title: "3D Industrial Facility Visualization — OSCORP ENERGY",
    coverImage: p('projects/site-layout/pics/1_hl_brightness.png'),
    images: [
      p('projects/site-layout/pics/1_hl_brightness.png'),
      p('projects/site-layout/pics/1.png'),
    ],
    videos: [],
    description: `Commissioned by OSCORP ENERGY to produce a comprehensive 3D facility layout for an executive-level presentation. The goal was to transform conceptual references into a mechanically accurate, visually clear environment — with every piece of industrial equipment modeled from scratch and assembled into a coherent plant layout.`,
    highlights: [
      "Built a custom 3D library of industry-standard machinery from scratch — Trommel screens, Ballistic Separators, Eddy Current Separators, and heavy-duty Balers — prioritizing realistic geometry and clean topology.",
      "Assembled the master facility layout in SolidWorks, integrating conveyors, chutes, hoppers, mezzanines, QC cabins, and structural pillars to match exact spatial and process-flow requirements.",
      "Transitioned CAD assemblies into Blender for high-resolution orthographic renders with transparent backgrounds, clean materials, and soft HDRI lighting — optimized for professional pitch decks.",
      "Delivered the complete pipeline — part modeling, master assembly, and final renders — within a strict four-day deadline.",
    ],
    technologies: ["SolidWorks", "Blender", "3D Modeling", "Industrial Visualization", "CAD Assembly", "Orthographic Rendering"],
    category: "Industrial Visualization",
    role: "3D Design & Visualization Engineer — OSCORP ENERGY",
  },
  {
    id: "vision-os",
    title: "Machine Vision System Housing — OSCORP ENERGY",
    coverImage: p('projects/vision-os/pics/sample_2.png'),
    images: [
      p('projects/vision-os/pics/sample_2.png'),
      p('projects/vision-os/pics/5.png'),
    ],
    videos: [],
    description: `Designed a ruggedized housing solution for an industrial machine vision system deployed on active recycling sorting lines. The core challenge was protecting sensitive camera optics and electronics from continuous high-frequency vibrations and a harsh, contamination-heavy environment — without compromising optical precision or accessibility.`,
    highlights: [
      "Engineered a modular mounting architecture capable of attaching directly above or side-mounted on the conveyor, accommodating varied facility layouts and optical angles.",
      "Designed dedicated structural damping to isolate machine vision sensors from high-frequency conveyor vibrations, preserving sorting accuracy under continuous operation.",
      "Developed a durable enclosure protecting internal optics and electronics from dust, debris, and mechanical impact in the recycling environment.",
      "Executed design and validation in SolidWorks, performed vibration and structural analysis in ANSYS, and produced presentation-quality renders in Blender.",
    ],
    technologies: ["SolidWorks", "ANSYS", "Blender", "Vibration Isolation", "Machine Vision", "Environmental Design"],
    category: "Industrial Mechanical Design",
    role: "Mechanical Designer — OSCORP ENERGY",
  },
  {
    id: "v8",
    title: "V8 Engine Functional Replica",
    coverImage: p('projects/v8/pics/V8_Engine_exploded.png'),
    images: [
      p('projects/v8/pics/V8_Engine_exploded.png'),
      p('projects/v8/pics/assem_withoutgears.png'),
      p('projects/v8/pics/block.png'),
      p('projects/v8/pics/oil.png'),
      p('projects/v8/pics/piso.png'),
    ],
    videos: [p('projects/v8/vids/Anim0.mp4')],
    description: `A personal deep-dive into complex mechanical assemblies. I modeled a complete, fully functional V8 engine from the ground up in SolidWorks — every component engineered with accurate tolerances and realistic mechanical mating, from crankshaft to valvetrain. The goal was both to sharpen my assembly and kinematic design skills and to produce a clear, professional reference for how these systems work.`,
    highlights: [
      "Modeled all major engine components from scratch — crankshaft, pistons, connecting rods, camshaft, valvetrain, and engine block — with accurate tolerances and proper mechanical constraints throughout.",
      "Used SolidWorks Composer to produce step-by-step visual assembly guides and exploded-view animations for technical documentation and demonstration purposes.",
      "Authored a full technical report covering design methodology, component specifications, and the kinematic relationships governing the engine system.",
    ],
    technologies: ["SolidWorks", "SolidWorks Composer", "Kinematic Design", "Assembly Design", "GD&T", "Technical Documentation"],
    category: "Mechanical Design",
    role: "Personal Project",
  },
  {
    id: "wig",
    title: "Wing-In-Ground (WIG) Effect Aircraft",
    coverImage: p('projects/wig/pics/renders/render.png'),
    images: [
      p('projects/wig/pics/renders/render.png'),
      p('projects/wig/pics/renders/render_exploaded.png'),
      p('projects/wig/pics/analysis/def_wing.png'),
      p('projects/wig/pics/analysis/stress_wing.png'),
      p('projects/wig/pics/analysis/comp_fail_ans.png'),
      p('projects/wig/pics/analysis/BC_tot.png'),
      p('projects/wig/pics/analysis/H_1.2mm_def.png'),
      p('projects/wig/pics/analysis/V_1.2mm_stress.png'),
    ],
    videos: [p('projects/wig/vids/assem.mp4')],
    description: `Led a cross-functional team for a 3rd-year aerospace engineering final project — a Wing-In-Ground (WIG) effect aircraft that exploits aerodynamic ground effect for highly efficient, low-altitude flight. I was responsible for the complete mechanical architecture, structural analysis, and final technical visualization of the airframe.`,
    highlights: [
      "Engineered a lightweight, high-stiffness hybrid airframe: carbon fiber composite wing, 1060-H12 aluminum T-tail skeleton, and custom 3D-printed fuselage joints with internal isogrid reinforcement.",
      "Developed MATLAB scripts to translate aerodynamic loads into structural demands — bending, shear, and torsion — for precise sizing of composite skin plies and longitudinal spars.",
      "Ran comprehensive FEA in ANSYS Static Structural and ACP (Pre), validating composite failure indices and confirming the aluminum tail maintained adequate margin of safety against yield.",
      "Produced high-fidelity Blender renders of the mechanical assemblies to communicate internal structural architecture clearly during the final thesis defense.",
    ],
    technologies: ["SolidWorks", "MATLAB", "ANSYS Static Structural", "ANSYS ACP", "Blender", "Composite Design", "FEA"],
    category: "Aerospace Engineering",
    role: "Team Leader & Lead Mechanical Designer",
  },
];

export const CONTACT = {
  address: "Cairo, Egypt",
  phoneNo: "+20 111 541 7266",
  email: "mohammedgamal0092@gmail.com",
};

export const CERTIFICATIONS = [
  { title: "SolidWorks Professional", status: "Proficient", issuer: "Dassault Systèmes", year: "2025" },
  { title: "MATLAB & Simulink", status: "Proficient", issuer: "MathWorks", year: "2024" },
  { title: "ANSYS Structural Analysis", status: "Proficient", issuer: "ANSYS", year: "2024" },
  { title: "Aerodynamic Analysis (XFLR5, Flow5)", status: "Proficient", issuer: "Academic Training", year: "2024" },
  { title: "Python Programming", status: "Intermediate", issuer: "Self-Study", year: "2024" },
  { title: "Arduino & Embedded Systems", status: "Intermediate", issuer: "Academic Projects", year: "2024" },
];

export const SOFT_SKILLS = [
  "Leadership & Team Collaboration",
  "Cross-Functional Communication",
  "Critical Thinking & Problem-Solving",
  "Project Management & Time Management",
  "Technical Documentation & Reporting",
  "Iterative Design & Continuous Improvement",
  "Stakeholder Management",
  "Attention to Detail & Precision",
];
