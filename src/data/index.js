import photo1 from "../assets/Img/crud.png";
import quran from "../assets/Img/quran.png";
import next from "../assets/Img/Next.png";
import vs from "../assets/Img/Vs.png";
import photo2 from "../assets/Img/custmor.png";
import photo3 from "../assets/Img/footcap.png";
import photo4 from "../assets/Img/FrechCartV2.png";
import photo5 from "../assets/Img/ftwk.png";
import photo6 from "../assets/Img/gameover.png";
import photo7 from "../assets/Img/plastine.png";
import photo8 from "../assets/Img/yummy.png";
import todo from "../assets/Img/Todo.png"; 
import hookbank from "../assets/Img/hookBank.png";
import chat from "../assets/Img/chat.png";
import bookPoint from "../assets/Img/bookPoint.png";

export const images = [
  photo4,
  bookPoint,
  todo,
  next,
  quran,
  chat,
  vs,
  hookbank,
  photo1,
  photo5,
  photo7,
  photo6,
  photo8,
  photo3,
  photo2,
];

export const project = [
  {
    id: 1,
    name: "FreshCart V2 - E-Commerce",
    category: "nextjs",
    featured: true,
    image: photo4,
    details:
      "A high-performance full e-commerce web application built using Next.js. Features complex state management, responsive UI, search & filtering, cart system, and real-world Stripe payment gateway integration.",
    skills: "NextJS - Redux Toolkit - TypeScript - MUI - React-hook-form - Stripe",
    tags: ["Next.js", "TypeScript", "Redux", "Stripe", "MUI"],
    demo: "https://fresh-cart-v2-tau.vercel.app/",
    repo: "https://github.com/MohammedRady59/FreshCart-V2",
  },
  {
    id: 2,
    name: "BookPoint Library Platform",
    category: "nextjs",
    featured: true,
    image: bookPoint,
    details:
      "Modern book review & browsing platform that lets users discover books, rate, submit detailed reviews, and purchase publications with seamless API data synchronization.",
    skills: "NextJs - TypeScript - RTK Query - Material UI - React Hook Form",
    tags: ["Next.js", "TypeScript", "RTK Query", "MUI", "API"],
    demo: "https://bookpoint.vercel.app/",
    repo: "https://github.com/MohammedRady59/BOOKPOINT",
  },
  {
    id: 3,
    name: "TaskMaster - Next.js Todo App",
    category: "nextjs",
    featured: true,
    image: todo,
    details:
      "Production-ready task management dashboard with MongoDB, Prisma ORM, Clerk authentication, and Shadcn/ui. Facilitates efficient task prioritization, status updates, and progress analytics.",
    skills: "NextJs - TypeScript - Redux Toolkit - Shadcn UI - MongoDB - Clerk - Prisma",
    tags: ["Next.js", "MongoDB", "Prisma", "Clerk", "Shadcn UI"],
    demo: "https://todo-app-next-js-mongo-db.vercel.app/",
    repo: "https://github.com/MohammedRady59/TODO-with-Next.js-MongoDB",
  },
  {
    id: 4,
    name: "SocialConnect Web Platform",
    category: "nextjs",
    featured: true,
    image: next,
    details:
      "Full-featured social media platform with user authentication, custom posts, rich media comments, interactive feeds, and secure JWT-based authorization.",
    skills: "NextJs - TypeScript - Redux Toolkit - TailwindCSS - Axios - HeadlessUI",
    tags: ["Next.js", "Redux Toolkit", "TailwindCSS", "Axios"],
    demo: "https://social-app-khaki-seven.vercel.app/",
    repo: "https://github.com/MohammedRady59/Social-App",
  },
  {
    id: 5,
    name: "Al-Maoza (Quran Kareem)",
    category: "react",
    featured: true,
    image: quran,
    details:
      "Ongoing charity web application featuring the Holy Quran recitation, interpretations, authentic Hadith, morning & evening Azkar, and interactive digital praise counter.",
    skills: "React.js - TypeScript - React Query - TailwindCSS - Axios - Headless UI",
    tags: ["React.js", "TypeScript", "React Query", "TailwindCSS"],
    demo: "https://quran-kareem-eta.vercel.app/",
    repo: "https://github.com/MohammedRady59/Quran-Kareem",
  },
  {
    id: 6,
    name: "Realtime Firebase Chat",
    category: "react",
    featured: false,
    image: chat,
    details:
      "Real-time chat messaging application powered by React and Firebase Cloud Firestore. Users can create custom chat rooms, exchange instant messages, and track active users.",
    skills: "React.js - Firebase Firestore - TailwindCSS - React Hot Toast",
    tags: ["React.js", "Firebase", "Realtime", "TailwindCSS"],
    demo: "https://chat-app-firebase-delta.vercel.app/",
    repo: "https://github.com/MohammedRady59/ChatApp-Firebase",
  },
  {
    id: 7,
    name: "VS Code Web Clone",
    category: "react",
    featured: true,
    image: vs,
    details:
      "Lightweight in-browser code editor inspired by Visual Studio Code. Features resizable panels, multiple file tabs, code syntax highlighting, and local state management.",
    skills: "React.js - TypeScript - Redux Toolkit - TailwindCSS - Resizable Panels",
    tags: ["React.js", "TypeScript", "Redux", "Syntax Highlighting"],
    demo: "https://visual-studio-code-clone-kappa.vercel.app/",
    repo: "https://github.com/MohammedRady59/Visual-Studio-Code-Clone",
  },
  {
    id: 8,
    name: "HooBank Modern Banking UI",
    category: "react",
    featured: false,
    image: hookbank,
    details:
      "High-converting modern banking landing page featuring sleek gradient accents, glassmorphism, responsive navigation, and payment method showcases.",
    skills: "React.js - TailwindCSS - Responsive Design",
    tags: ["React.js", "TailwindCSS", "UI/UX Design"],
    demo: "https://hoobank-ten-snowy.vercel.app/",
    repo: "https://github.com/MohammedRady59/Hoobank",
  },
  {
    id: 9,
    name: "CRUD Management System TS",
    category: "react",
    featured: false,
    image: photo1,
    details:
      "Product inventory & catalog management application with complete CRUD operations, image URL uploads, category tagging, color swatches, and accessible Headless UI modals.",
    skills: "React - TypeScript - TailwindCSS - Headless UI - UUID",
    tags: ["React", "TypeScript", "TailwindCSS", "Headless UI"],
    demo: "https://mohammedrady59.github.io/CRUD-SYSTEM-TS/",
    repo: "https://github.com/MohammedRady59/CRUD-SYSTEM-TS",
  },
  {
    id: 10,
    name: "FONZTOP Corporate Portal",
    category: "react",
    featured: true,
    image: photo5,
    details:
      "Commercial e-commerce & mobile device exchange platform for Kuwait clients. Built front-end components, product sliders, animations, and maintain production updates.",
    skills: "React.js - TailwindCSS - React Slick - AOS Animations",
    tags: ["Commercial", "React.js", "TailwindCSS", "Client Work"],
    demo: "https://foanztopkw.com/",
    repo: "https://foanztopkw.com/",
  },
  {
    id: 11,
    name: "Palestine Solidarity Platform",
    category: "vanilla",
    featured: false,
    image: photo7,
    details:
      "Informative advocacy web project presenting history, humanitarian facts, and educational resources regarding the Palestinian cause.",
    skills: "HTML5 - CSS3 - JavaScript ES6",
    tags: ["HTML5", "CSS3", "JavaScript"],
    demo: "https://mohammedrady59.github.io/Palestine/",
    repo: "https://github.com/MohammedRady59/Palestine",
  },
  {
    id: 12,
    name: "GameOver Gaming Hub",
    category: "vanilla",
    featured: false,
    image: photo6,
    details:
      "Video games catalog web app with authentication guards, dark/light theme switching, live game database API integration, and category filtering.",
    skills: "HTML - CSS - Vanilla JS - Bootstrap 5 - FreeToGame API",
    tags: ["JavaScript", "APIs", "Bootstrap", "Game DB"],
    demo: "https://mohammedrady59.github.io/Game-Over/",
    repo: "https://github.com/MohammedRady59/Game-Over",
  },
  {
    id: 13,
    name: "Yummy Food & Recipes Portal",
    category: "vanilla",
    featured: false,
    image: photo8,
    details:
      "Interactive culinary recipe application. Features live ingredient search, country origin filter, dish preparation tutorials, and dynamic MealDB API integration.",
    skills: "HTML - TailwindCSS - Vanilla JS - TheMealDB API",
    tags: ["JavaScript", "TailwindCSS", "MealDB API"],
    demo: "https://mohammedrady59.github.io/Yummy-App/",
    repo: "https://github.com/MohammedRady59/Yummy-App",
  },
  {
    id: 14,
    name: "FootCap Footwear Store",
    category: "vanilla",
    featured: false,
    image: photo3,
    details:
      "Clean sneaker & sports footwear showcase with product catalog grids, interactive size selectors, and responsive checkout layout.",
    skills: "HTML5 - CSS3 - JavaScript - Bootstrap",
    tags: ["JavaScript", "Bootstrap", "E-Commerce UI"],
    demo: "https://mohammedrady59.github.io/FootCap/",
    repo: "https://github.com/MohammedRady59/FootCap",
  },
  {
    id: 15,
    name: "Customer Transactions Dashboard",
    category: "vanilla",
    featured: false,
    image: photo2,
    details:
      "Financial analytics dashboard providing customer transaction records, live filtering by customer name and transaction amount, and interactive Chart.js visualizations.",
    skills: "HTML - CSS - JavaScript - Chart.js - Bootstrap",
    tags: ["Dashboard", "Chart.js", "Data Visualization"],
    demo: "https://mohammedrady59.github.io/Customer-Service/",
    repo: "https://github.com/MohammedRady59/Customer-Service",
  },
];
