import { useState } from "react";
import {
  Briefcase,
  GraduationCap,
  Award,
  ExternalLink,
  Calendar,
  Sparkles,
  Building2,
} from "lucide-react";

function ExperienceSection() {
  const [activeFilter, setActiveFilter] = useState("all");

  const timelineData = [
    {
      type: "work",
      title: "Frontend Developer (Freelance)",
      organization: "FONZTOP Platform",
      period: "Aug 2024 - Present",
      location: "Kuwait / Remote",
      link: "https://foanztopkw.com/",
      description:
        "Developed and maintained the production front-end for FONZTOP, an e-commerce platform specializing in mobile phone sales and exchanges. Built responsive product catalogs, interactive sliders, smooth UI micro-interactions with TailwindCSS, React Slick, and AOS animations.",
      skills: ["React.js", "TailwindCSS", "React Slick", "Responsive Design"],
      badge: "Current Role",
      badgeColor: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
    },
    {
      type: "cert",
      title: "Frontend Development Diploma",
      organization: "Route IT Training Center",
      period: "2024",
      location: "Cairo, Egypt",
      link: "https://drive.google.com/file/d/1Tpq9DpbZA8y0i7NqI9QE7luNX9V1l4BL/view?usp=sharing",
      description:
        "Intensive specialized diploma covering modern JavaScript, React.js ecosystem, state management with Redux Toolkit, asynchronous APIs, responsive layout engineering, and production project delivery.",
      skills: ["React.js", "Redux Toolkit", "Next.js", "TypeScript", "REST APIs"],
      badge: "Certified",
      badgeColor: "bg-sky-500/20 text-sky-400 border-sky-500/30",
    },
    {
      type: "cert",
      title: "Front End - Vue.js Track (150 Hours)",
      organization: "Information Technology Institute (ITI)",
      period: "2024",
      location: "Egypt",
      link: "https://drive.google.com/file/d/1Tpq9DpbZA8y0i7NqI9QE7luNX9V1l4BL/view?usp=sharing",
      description:
        "Official 150-hour intensive program provided by the Information Technology Institute (ITI). Comprehensive training in frontend architecture, modern component design, Vue.js fundamentals, and web standards.",
      skills: ["Frontend Engineering", "Vue.js", "Modern Web", "Architecture"],
      badge: "ITI Certified",
      badgeColor: "bg-indigo-500/20 text-indigo-400 border-indigo-500/30",
    },
    {
      type: "edu",
      title: "B.Sc. in Computer Science",
      organization: "Faculty of Computer Science, Mansoura University",
      period: "2019 - 2023",
      location: "Mansoura, Egypt",
      description:
        "Four years of foundational computer science study: Algorithms, Data Structures, Object-Oriented Programming, Database Systems, Software Engineering methodologies, and Web Technologies.",
      skills: ["Computer Science", "Algorithms", "Data Structures", "OOP", "Software Design"],
      badge: "Graduated",
      badgeColor: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? timelineData
      : timelineData.filter((item) => item.type === activeFilter);

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-indigo-500/10 top-1/4 left-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card text-sky-400 text-xs font-nav mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>03. CAREER MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            My professional career path, university degree, and technical certifications.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filter Pills */}
        <div
          data-aos="fade-up"
          className="flex flex-wrap items-center justify-center gap-2 mb-12"
        >
          <button
            onClick={() => setActiveFilter("all")}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-nav transition-all ${
              activeFilter === "all"
                ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow"
                : "glass-card text-slate-400 hover:text-white"
            }`}
          >
            All Milestones
          </button>
          <button
            onClick={() => setActiveFilter("work")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-nav transition-all ${
              activeFilter === "work"
                ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow"
                : "glass-card text-slate-400 hover:text-white"
            }`}
          >
            <Briefcase className="w-3.5 h-3.5" />
            <span>Work Experience</span>
          </button>
          <button
            onClick={() => setActiveFilter("edu")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-nav transition-all ${
              activeFilter === "edu"
                ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow"
                : "glass-card text-slate-400 hover:text-white"
            }`}
          >
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Education</span>
          </button>
          <button
            onClick={() => setActiveFilter("cert")}
            className={`flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs sm:text-sm font-nav transition-all ${
              activeFilter === "cert"
                ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow"
                : "glass-card text-slate-400 hover:text-white"
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Certifications</span>
          </button>
        </div>

        {/* Timeline container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical central glowing line */}
          <div className="absolute left-4 sm:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-sky-500 via-indigo-500 to-purple-500/20 -translate-x-1/2 hidden sm:block"></div>

          <div className="space-y-10">
            {filteredItems.map((item, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={idx}
                  data-aos={isEven ? "fade-right" : "fade-left"}
                  className={`relative flex flex-col sm:flex-row items-center ${
                    isEven ? "sm:flex-row-reverse" : ""
                  }`}
                >
                  {/* Timeline Center Node */}
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-slate-900 border-2 border-sky-400 flex items-center justify-center text-sky-400 shadow-glow z-10 hidden sm:flex">
                    {item.type === "work" && <Briefcase className="w-4 h-4" />}
                    {item.type === "edu" && <GraduationCap className="w-4 h-4" />}
                    {item.type === "cert" && <Award className="w-4 h-4" />}
                  </div>

                  {/* Empty side for layout balance on desktop */}
                  <div className="w-full sm:w-1/2 sm:px-8"></div>

                  {/* Content card */}
                  <div className="w-full sm:w-1/2 sm:px-8">
                    <div className="glass-card p-6 rounded-2xl border border-white/5 hover:border-sky-500/40 transition-all duration-300 group hover:-translate-y-1">
                      {/* Top Header: Badge & Period */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span
                          className={`text-xs px-2.5 py-1 rounded-full border font-nav font-medium ${item.badgeColor}`}
                        >
                          {item.badge}
                        </span>
                        <div className="flex items-center gap-1.5 text-xs text-slate-400 font-nav">
                          <Calendar className="w-3.5 h-3.5 text-sky-400" />
                          <span>{item.period}</span>
                        </div>
                      </div>

                      {/* Title & Org */}
                      <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-sky-300 transition-colors mb-1">
                        {item.title}
                      </h3>
                      <div className="flex items-center gap-1.5 text-sm text-slate-400 font-nav mb-4">
                        <Building2 className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{item.organization}</span>
                        {item.location && <span>• {item.location}</span>}
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-xs sm:text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Skills tags */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {item.skills.map((skill, sIdx) => (
                          <span
                            key={sIdx}
                            className="text-[11px] font-nav px-2 py-0.5 rounded-md bg-slate-800/80 text-slate-300 border border-white/5"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      {/* External Link if exists */}
                      {item.link && (
                        <a
                          href={item.link}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-nav text-sky-400 hover:text-sky-300 font-medium group/link"
                        >
                          <span>{item.type === "cert" ? "View Certificate" : "Visit Project Site"}</span>
                          <ExternalLink className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-0.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ExperienceSection;
