// ─────────────────────────────────────────────────────────────
// Portfolio Content
// Shane J. Radam
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Shane Radam",
  role: "Full Stack Web Developer | IT Support Specialist",

  roles: [
    "Full Stack Web Developer",
    "Electron.js Developer",
    "Node.js Developer",
    "IT Support Specialist",
  ],

  tagline:
    "I build modern web applications and enterprise systems while providing reliable IT infrastructure support. Passionate about creating secure, scalable, and user-friendly solutions.",

  location: "Philippines",
  availability: "Open for Full-Time Opportunities",

  email: "shaneradam3@gmail.com",
  phone: "+63 906 865 3692",

  resumeUrl: "/resume.pdf",
  photo: "/photo.jpg" as string | null,

  social: {
    github: "https://github.com/parzipal2002",
    linkedin: "https://www.linkedin.com/in/shane-radam-79a37b331/",
    facebook: "https://www.facebook.com/@parzipal2002/",
  },
};

export const about = {
  story: [
    "I started my journey in software development during my first year as a Computer Science student, where I developed a strong foundation in programming, databases, networking, and software engineering. Throughout college, I continuously enhanced my skills by building academic and personal projects.",

    "Today, I work as an IT Support Specialist while also developing desktop and web applications using modern technologies such as Electron, Node.js, Express.js, and MySQL. My experience allows me to combine software development with hands-on IT infrastructure management.",

    "I enjoy creating enterprise systems that improve business processes through automation, efficient data management, and intuitive user experiences. My goal is to build reliable software solutions that help organizations become more productive.",
  ],

  education: [
    {
      school: "Jose Rizal Memorial State University",
      degree: "Bachelor of Science in Computer Science",
      period: "2020 — 2025",
    },
  ],

  interests: [
    "Web Development",
    "System Administration",
    "Enterprise Software",
    "UI/UX Design",
    "Graphic Design",
    "Technology",
  ],

  goals:
    "To become a highly skilled Full Stack Software Engineer capable of building enterprise-level applications while continuously improving my expertise in modern web technologies, cloud services, and IT infrastructure.",
};

export type SkillCategory = {
  label: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    label: "Programming Languages",
    items: [
      "JavaScript",
      "TypeScript",
      "PHP",
      "Python",
    ],
  },
  {
    label: "Frontend Development",
    items: [
      "HTML5",
      "CSS3",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Bootstrap",
    ],
  },
  {
    label: "Backend Development",
    items: [
      "Node.js",
      "Express.js",
      "REST APIs",
      "Authentication",
    ],
  },
  {
    label: "Desktop Application Development",
    items: [
      "Electron.js",
      "Electron Builder",
      "Auto Updater",
    ],
  },
  {
    label: "Databases",
    items: [
      "MySQL",
      "SQLite",
    ],
  },
  {
    label: "Design & UI/UX",
    items: [
      "UI/UX Design",
      "Wireframing",
      "Adobe Photoshop",
      "Adobe Illustrator",
      "Figma",
      "SketchUp Pro",
    ],
  },
  {
    label: "Developer Tools",
    items: [
      "Git",
      "GitHub",
      "VS Code",
      "Postman",
      "Docker",
      "XAMPP",
      "MySQL Workbench",
      "Navicat",
    ],
  },
  {
    label: "Professional Skills",
  items: [
    // Programming & Software Development
    "Full-Stack Web Development",
    "System Design & Architecture",
    "API Integration",
    "Database Design",
    "Debugging & Troubleshooting",
    "Code Optimization",

    // IT & Technical Support
    "IT Support & Troubleshooting",
    "Hardware & Software Installation",
    "Network Configuration",
    "System Maintenance",

    // Graphics & UI/UX
    "UI/UX Design",
    "Graphic Design",
    "Wireframing & Prototyping",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  description: string;

  category: ("Development" | "Desktop" | "Design")[];
  
  tech: string[];

  images?: string[];

  liveUrl?: string;
  downloadUrl?: string;
  githubUrl?: string;

  color: string;
  featured?: boolean;
};  

export const projects: Project[] = [
  {
  slug: "assets-management-system",

  category: ["Development", "Desktop"],

  name: "Assets Management System",

  images: [
    "/projects/assets-management-system/login.png",
    "/projects/assets-management-system/dashboard.png",
    "/projects/assets-management-system/assets.png",
    "/projects/assets-management-system/add.png",
    "/projects/assets-management-system/categories.png",
    "/projects/assets-management-system/reports.png",
    "/projects/assets-management-system/user.png",
  ],

  description:
    "A desktop-based enterprise asset management system developed using Electron.js and Node.js. The application manages company assets, employee assignments, inventory records, asset tracking, maintenance history, and generates Excel reports for auditing and record keeping.",

  tech: [
    "Electron",
    "Node.js",
    "Express.js",
    "SQLite",
  ],

  liveUrl: "https://youtu.be/KMDgHyk_EuQ",

  downloadUrl:
    "https://drive.google.com/file/d/1V3gCzM9JElR2jVTZ2hCrUgA3qKHe9ClJ/view?usp=drive_link",

  color: "from-[#2563EB] to-[#1D4ED8]",

  featured: true,
},

{
  slug: "applicant-management-system",

  category: ["Development", "Desktop"],

  name: "Applicant Management System",

  images: [
    "/projects/applicant-management-system/login.png",
    "/projects/applicant-management-system/dashboard.png",
    "/projects/applicant-management-system/applicants.png",
    "/projects/applicant-management-system/add.png",
    "/projects/applicant-management-system/update.png",
    "/projects/applicant-management-system/settings.png",
  ],

  description:
    "A desktop recruitment management application that streamlines applicant information, interview scheduling, document management, applicant status tracking, and hiring records. Built to simplify the recruitment workflow for HR personnel.",

  tech: [
    "Electron",
    "Node.js",
    "Express.js",
    "SQLite",
  ],

  liveUrl: "https://youtu.be/H2mduGc22Sw",

  downloadUrl:
    "https://drive.google.com/file/d/1uCZ5n4YaYQXLZ3Of0wwl_7hUMoY7fCWV/view?usp=drive_link",

  color: "from-[#059669] to-[#10B981]",

  featured: true,
},

{
  slug: "visual-design",

  category: ["Design"],

  name: "Visual Design Portfolio",

  images: [
    "/projects/poster/b.jpg",
    "/projects/poster/d.jpg",
    "/projects/poster/bp.png",
    "/projects/poster/bps.png",
    "/projects/poster/dp.png",
    "/projects/poster/ui.jpg",
    "/projects/poster/booth.jpg",
  ],

  description:
    "A collection of visual design projects showcasing branding, marketing materials, social media graphics, UI concepts, print designs, and 3D modeling. Created using industry-standard design tools with a focus on creativity, visual communication, and user-centered design.",

  tech: [
    "Adobe Photoshop",
    "Adobe Illustrator",
    "Adobe XD",
    "SketchUp Pro",
  ],

  color: "from-[#EC4899] to-[#8B5CF6]",

  featured: true,
},

];

export const projectFilters = [
  "All",
  "Development",
  "Desktop",
  "Design",
] as const;

export type ExperienceItem = {
  role: string;
  org: string;
  period: string;
  type: "Job" | "Internship" | "Freelance" | "Volunteer";
  bullets: string[];
};

export const experience: ExperienceItem[] = [
  {
    role: "IT Support Specialist",

    org: "Regasco",

    period: "2025 — Present",

    type: "Job",

    bullets: [
      "Provide technical support for hardware, software, printers, and network-related issues.",
      "Maintain company computer systems and IT equipment.",
      "Manage company asset inventory and documentation.",
      "Develop internal software solutions to improve business operations.",
      "Configure and deploy desktop computers and office equipment.",
    ],
  },

  {
    role: "Customer Service Representative",

    org: "Neo Global Solutions Inc.",

    period: "2021 — 2022",

    type: "Job",

    bullets: [
      "Provided professional customer support through voice and non-voice channels.",
      "Resolved customer concerns while maintaining excellent customer satisfaction.",
      "Handled multiple customer inquiries efficiently.",
      "Maintained accurate customer documentation and reports.",
    ],
  },
];

export type Certificate = {
  name: string;
  issuer: string;
  date: string;
  images: string[];
};

export const certificates: Certificate[] = [
  {
    name: "Web Development",
    issuer: "DICT",
    date: "2024",
    images: [
      "/webdevelopment1.jpg",
      "/webdevelopment2.jpg",
      "/webdevelopment3.jpg",
      "/webdevelopment4.jpg",
      "/webdevelopment5.jpg",
    ],
  },

{
    name: "Data Privacy",
    issuer: "DICT",
    date: "2024",
    images: [
      "/dataprivacy1.jpg",
      "/dataprivacy2.jpg",
    ],
  },

  {
    name: "Visual Graphic Design",
    issuer: "TESDA",
    date: "2026",
    images: [
      "/1.png",
      "/2.png",
      "/3.png",
      "/4.png",
      "/5.png",
      "/6.png",
      "/7.png",
    ],
  },

  {
    name: "Visual Graphic Design NC III",
    issuer: "TESDA",
    date: "2026",
    images: [
      "/vgd.jpg",
    ],
  },
];

export type Testimonial = {
  quote: string;
  name: string;
  title: string;
};

export const testimonials: Testimonial[] = [];

export const nav = [
  { id: "hero", label: "dashboard" },
  { id: "about", label: "about" },
  { id: "skills", label: "skills" },
  { id: "projects", label: "projects" },
  { id: "experience", label: "experience" },
  { id: "contact", label: "contact" },
];
