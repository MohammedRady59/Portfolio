import { useState } from "react";
import SkillCloud from "../UI/SkillCloud";
import {
  Code2,
  Cpu,
  Palette,
  Wrench,
  Globe2,
  Sparkles,
  Layers,
} from "lucide-react";

function SkillsSection() {
  const [activeTab, setActiveTab] = useState("all");
  const [viewMode, setViewMode] = useState("grid"); // "grid" | "sphere"

  const skillCategories = [
    { id: "all", label: "All Skills" },
    { id: "core", label: "Core & Languages" },
    { id: "frameworks", label: "Frameworks & State" },
    { id: "ui", label: "Styling & UI Systems" },
    { id: "tools", label: "Tools & Integrations" },
  ];

  const allSkills = [
    // Core & Languages
    { name: "TypeScript", level: "90%", category: "core", color: "from-blue-500 to-sky-400" },
    { name: "JavaScript (ES6+)", level: "95%", category: "core", color: "from-yellow-400 to-amber-500" },
    { name: "HTML5 & Semantic", level: "98%", category: "core", color: "from-orange-500 to-red-500" },
    { name: "CSS3 & SASS", level: "95%", category: "core", color: "from-sky-400 to-blue-600" },

    // Frameworks & State
    { name: "React.js", level: "95%", category: "frameworks", color: "from-cyan-400 to-blue-500" },
    { name: "Next.js (App & Pages)", level: "92%", category: "frameworks", color: "from-slate-200 to-slate-400" },
    { name: "Redux Toolkit / RTK Query", level: "90%", category: "frameworks", color: "from-purple-500 to-indigo-500" },
    { name: "TanStack React Query", level: "88%", category: "frameworks", color: "from-red-400 to-rose-600" },
    { name: "React Router DOM", level: "92%", category: "frameworks", color: "from-pink-500 to-rose-500" },
    { name: "React Hook Form & Yup", level: "92%", category: "frameworks", color: "from-emerald-400 to-teal-500" },

    // Styling & UI Systems
    { name: "Tailwind CSS", level: "95%", category: "ui", color: "from-cyan-400 to-teal-400" },
    { name: "Shadcn / UI", level: "88%", category: "ui", color: "from-zinc-200 to-slate-400" },
    { name: "Headless UI", level: "85%", category: "ui", color: "from-sky-400 to-indigo-400" },
    { name: "Material UI (MUI)", level: "85%", category: "ui", color: "from-blue-400 to-indigo-600" },
    { name: "Bootstrap 5", level: "90%", category: "ui", color: "from-purple-600 to-indigo-700" },

    // Tools & Integrations
    { name: "Git & GitHub", level: "92%", category: "tools", color: "from-orange-500 to-rose-500" },
    { name: "Firebase (Firestore/Auth)", level: "82%", category: "tools", color: "from-amber-400 to-orange-500" },
    { name: "MongoDB & Prisma", level: "80%", category: "tools", color: "from-emerald-500 to-teal-600" },
    { name: "RESTful APIs & Axios", level: "94%", category: "tools", color: "from-sky-500 to-blue-600" },
    { name: "Vite & Modern Tooling", level: "90%", category: "tools", color: "from-purple-400 to-yellow-400" },
    { name: "Postman API Testing", level: "88%", category: "tools", color: "from-orange-400 to-amber-500" },
  ];

  const filteredSkills =
    activeTab === "all"
      ? allSkills
      : allSkills.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative overflow-hidden bg-slate-950/40">
      <div className="glow-orb w-96 h-96 bg-cyan-500/10 bottom-0 right-0"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card text-sky-400 text-xs font-nav mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>02. TECH MATRIX</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Skills & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Modern tech stacks, libraries, and tools I use to build scalable web applications.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Tabs & View Toggle */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap items-center justify-between gap-4 mb-10 max-w-5xl mx-auto"
        >
          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {skillCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-nav transition-all duration-300 ${
                  activeTab === cat.id
                    ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow"
                    : "glass-card text-slate-400 hover:text-white hover:border-sky-500/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* View mode toggle: Grid vs 3D Sphere */}
          <div className="flex items-center p-1 rounded-xl glass-card border border-white/10 text-xs font-nav">
            <button
              onClick={() => setViewMode("grid")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "grid"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Grid View</span>
            </button>
            <button
              onClick={() => setViewMode("sphere")}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
                viewMode === "sphere"
                  ? "bg-sky-500 text-white shadow-sm"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Globe2 className="w-3.5 h-3.5" />
              <span>3D Sphere</span>
            </button>
          </div>
        </div>

        {/* Content Area */}
        {viewMode === "grid" ? (
          <div
            data-aos="fade-up"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto"
          >
            {filteredSkills.map((skill, idx) => (
              <div
                key={skill.name}
                className="glass-card p-4 rounded-2xl border border-white/5 hover:border-sky-400/40 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="font-semibold text-white text-sm group-hover:text-sky-300 transition-colors">
                    {skill.name}
                  </span>
                  <span className="text-xs font-nav text-sky-400 font-medium">
                    {skill.level}
                  </span>
                </div>

                {/* Progress bar */}
                <div className="w-full h-1.5 rounded-full bg-slate-800/80 overflow-hidden">
                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${skill.color} transition-all duration-1000`}
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div data-aos="zoom-in" className="max-w-xl mx-auto py-8">
            <div className="glass-card p-6 rounded-3xl border border-sky-500/20 shadow-glow">
              <p className="text-center text-xs font-nav text-sky-400 mb-2">
                * Interactive 3D Tech Cloud: Move your cursor to rotate
              </p>
              <SkillCloud />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default SkillsSection;
