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

  resumeUrl: "/Resume.pdf",
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
      "REST API Development",
      "API Integration",
      "Authentication & Authorization",
    ],
  },

  {
    label: "Desktop Application Development",
    items: [
      "Electron.js",
      "Electron Builder",
      "Desktop Application Packaging",
      "Application Deployment",
    ],
  },

  {
    label: "Database Management",
    items: [
      "MySQL",
      "SQLite",
      "SQL",
      "Database Design",
      "Database Optimization",
    ],
  },

  {
    label: "UI/UX & Creative Design",
    items: [
      "UI/UX Design",
      "Wireframing",
      "Prototyping",
      "Figma",
      "Adobe Photoshop",
      "Adobe Illustrator",
    ],
  },

  {
    label: "IT Infrastructure & Support",
    items: [
      "IT Support & Troubleshooting",
      "Hardware & Software Installation",
      "Network Configuration",
      "System Maintenance",
      "Computer Asset Management",
    ],
  },

  {
    label: "Developer Tools & Technologies",
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
      "Full-Stack Web Development",
      "Software Development",
      "Application Design",
      "Problem Solving",
      "Debugging & Troubleshooting",
      "Code Optimization",
      "Technical Documentation",
      "System Analysis",
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

  liveUrl: "/projects/assets-management-system/1.mp4",

  downloadUrl:
    "https://drive.google.com/file/d/131RQfuH4BnF-Ci79tD5jk5kwo_ObUk98/view?usp=drive_link",

  color: "from-[#2563EB] to-[#1D4ED8]",

  featured: true,
},

{
  slug: "system-control-center",

  category: ["Development", "Desktop"],

  name: "System Control Center",

  images: [
    "/projects/system-control-center/a.png",
    "/projects/system-control-center/b.png",
    "/projects/system-control-center/c.png",
    "/projects/system-control-center/d.png",
    "/projects/system-control-center/e.png",
    "/projects/system-control-center/f.png",
    "/projects/system-control-center/g.png",
    "/projects/system-control-center/h.png",
    "/projects/system-control-center/i.png",
    "/projects/system-control-center/j.png",
    "/projects/system-control-center/k.png",
  ],

  description:
    "A modern desktop application that provides an all-in-one system management dashboard for Windows. It enables users to monitor system performance, manage running processes, browse files, schedule power actions, analyze storage usage, view hardware information, inspect network activity, manage startup applications, create scheduled tasks, and access clipboard history through a clean and intuitive interface.",

  tech: [
    "Electron",
    "JavaScript",
    "HTML5",
    "CSS3",
  ],

  liveUrl: "/projects/system-control-center/system.mp4",

  downloadUrl:
    "https://drive.google.com/file/d/1bxi1o2MROHUwifd892fqWbOc52ZJyssE/view?usp=drive_link",

  color: "from-[#059669] to-[#10B981]",

  featured: true,
},

{
  slug: "power-timer",

  category: ["Development", "Desktop"],

  name: "Power Timer",

  images: [
    "/projects/power-timer/power1.png",
    "/projects/power-timer/power2.png",
  ],

  description:
    "A modern desktop application that automates Windows power management through customizable countdown timers. Users can schedule shutdown, restart, sleep, or lock actions with an intuitive circular countdown interface, optional notifications, and real-time progress tracking.",

  tech: [
    "Electron",
    "Javascript",
    "HTTML5",
    "CSS3",
  ],

  liveUrl: "/projects/power-timer/power.mp4",

  downloadUrl:
    "https://drive.google.com/file/d/1UQRrbarjQeEioOFsEAPiaFsGe3-qd3Il/view?usp=drive_link",

  color: "from-[#059669] to-[#10B981]",

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

  liveUrl: "/projects/applicant-management-system/2.mp4",

  downloadUrl:
    "https://drive.google.com/file/d/1WldwwE08vS0XdrPd6ySAfitmcg5fuSig/view?usp=drive_link",

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

    period: "JAN 2026 — MAY 2026",

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

    period: "AUG 2021 — JULY 2022",

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
