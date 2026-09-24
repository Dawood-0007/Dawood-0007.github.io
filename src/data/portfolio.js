export const profile = {
  name: "Dawood Khatri",
  shortName: "Dawood",
  role: "Software Developer",
  tagline: "Software Developer & CS Student",
  heroStack: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "MERN"],
  about: [
    "I’m Dawood, a Computer Science student and a Software Developer with a strong focus on building clean, scalable, and user-focused web applications.",
    "I primarily work with modern web technologies like React, Next.js, and Firebase, and I enjoy turning ideas into functional digital products. Alongside web development, I also have foundational experience in app development and continuously strive to expand my skill set.",
    "I value clean code, good UI/UX, and problem-solving, and I’m always open to learning new tools and technologies to grow as a developer.",
  ],
  social: {
    github: "https://github.com/Dawood-0007",
    linkedin: "https://www.linkedin.com/in/dawood-khatri/",
  },
  contactFormAction: "https://formspree.io/f/mldqyjyj",
};

export const skills = [
  {
    group: "Frontend",
    items: ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Responsive Design"],
  },
  {
    group: "Backend",
    items: ["Node.js", "Express", "Firebase", "REST APIs", "Authentication", "Python", "Java"],
  },
  {
    group: "Databases",
    items: ["MongoDB", "PostgreSQL", "MySQL", "Firestore"],
  },
  {
    group: "Tools & DevOps",
    items: ["Git & GitHub", "Docker", "Firebase Hosting", "Vercel"],
  },
];

export const projects = [
  {
    id: "ecom",
    title: "E-Commerce Store — ECOM",
    tags: ["Web Development", "Database", "Authentication"],
    description:
      "A high-performance Next.js e-commerce platform using Firebase for a scalable, serverless backend with secure authentication and real-time inventory management.",
    github: "https://github.com/Dawood-0007/ecom-store",
    live: null,
  },
  {
    id: "noteink",
    title: "AI Note App — NoteInk",
    tags: ["Web Development", "App Development", "Deployed Live"],
    description:
      "A cross-platform note-taking application built with Next.js and Expo. It uses Gemini AI for features like summarization, tagging, and organization.",
    github: "https://github.com/Dawood-0007/AI-powered-Note-App-NoteInk",
    live: "https://noteink-web.vercel.app",
  },
  {
    id: "kalyptica",
    title: "Kalyptica — News Site",
    tags: ["Web Development", "Database", "Authentication"],
    description:
      "A high-performance global news platform using Next.js, Node.js, and SQL for rapid, SEO-optimized content delivery and strict data integrity.",
    github: "https://github.com/Dawood-0007/Nextjs-News-Site-Frontend",
    live: "https://kalyptica.vercel.app",
  },
  {
    id: "wordle",
    title: "Mini Wordle",
    tags: ["Web Development", "Responsiveness", "React"],
    description:
      "An interactive, mobile-responsive word-guessing game built with Vite and React for lightning-fast performance and seamless UI states. Leverages modern hooks and CSS for a polished, cross-device gaming experience with instant feedback loops.",
    github: "https://github.com/Dawood-0007/Mini-Wordle",
    live: null,
  },
  {
    id: "bank",
    title: "Bank — Python Backend",
    tags: ["Web Development", "React", "Flask"],
    description:
      "A simple banking platform featuring a dynamic user interface built with React for immediate feedback and a robust, secure API powered by Python Flask to manage transactions and user accounts.",
    github: "https://github.com/Dawood-0007/Bank-with-python-backend",
    live: null,
  },
  {
    id: "gateway",
    title: "API Gateway with ML",
    tags: ["Backend Development", "Web Development", "Machine Learning"],
    description:
      "A robust, scalable, and intelligent API management system that acts as a single entry point for multiple backend services. Incorporates Machine Learning (Isolation Forest) to detect anomalies and potential threats in real-time API traffic.",
    github: "https://github.com/Dawood-0007/api_gateway_with_ml",
    live: null,
  },
];

export const sectionLinks = [
  { label: "About", href: "/#about" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
  { label: "Contact", href: "/#contact" },
];

export const pageLinks = [{ label: "Certifications", to: "/certifications" }];


export const certifications = [{
  title: "Full Stack Web Development",
  issuer: "Dr.Angela Yu (Udemy)",
  date: "2025",
  driveLink: "https://drive.google.com/file/d/1-6Qkh-PcdvF2_txEPqoJXc7I8aYtd1Jb/view?usp=drive_link",
},
];
