import { useState } from "react";
import { project } from "../../data";
import {
  Github,
  SquareArrowOutUpRight,
  Sparkles,
  Search,
  Layers,
  Code2,
  ExternalLink,
  X,
  Eye,
} from "lucide-react";

function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [activeProjectModal, setActiveProjectModal] = useState(null);

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "nextjs", label: "Next.js & Full-Stack" },
    { id: "react", label: "React.js Apps" },
    { id: "vanilla", label: "JavaScript & APIs" },
  ];

  const filteredProjects = project.filter((p) => {
    const matchesCategory =
      selectedCategory === "all" || p.category === selectedCategory;
    const matchesSearch =
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.details.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (p.tags && p.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase())));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-96 h-96 bg-emerald-500/10 top-1/3 right-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card text-emerald-400 text-xs font-nav mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. PORTFOLIO SHOWCASE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            A curated selection of web applications, e-commerce stores, and interactive platforms I've built.
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-emerald-400 to-teal-500 mx-auto rounded-full mt-4"></div>
        </div>

        {/* Filters & Search Controls */}
        <div
          data-aos="fade-up"
          className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 max-w-6xl mx-auto"
        >
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-nav transition-all duration-300 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-glow"
                    : "glass-card text-slate-400 hover:text-white hover:border-emerald-500/30"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search project or tech..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl glass-card text-sm text-white placeholder-slate-500 border border-white/10 focus:border-emerald-400 focus:outline-none transition-all"
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredProjects.map((item, idx) => (
            <div
              key={item.name}
              data-aos="fade-up"
              data-aos-delay={idx % 3 * 100}
              className="group glass-card rounded-2xl overflow-hidden border border-white/5 hover:border-emerald-500/40 transition-all duration-300 flex flex-col hover:-translate-y-1.5 shadow-card-glass"
            >
              {/* Project Image Box with Hover Overlay */}
              <div className="relative aspect-video w-full overflow-hidden bg-[#0d1512]">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080c0a]/90 via-[#080c0a]/30 to-transparent opacity-60 group-hover:opacity-80 transition-opacity"></div>

                {/* Floating Quick Action Overlay */}
                <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-[2px] bg-[#080c0a]/40">
                  <a
                    href={item.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white shadow-glow transition-transform hover:scale-110"
                    title="Open Live Demo"
                  >
                    <SquareArrowOutUpRight className="w-5 h-5" />
                  </a>
                  <a
                    href={item.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="p-3 rounded-xl bg-[#131f1a] hover:bg-[#1a2c25] text-white border border-white/20 transition-transform hover:scale-110"
                    title="View Source Code"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => setActiveProjectModal(item)}
                    className="p-3 rounded-xl bg-teal-600 hover:bg-teal-500 text-white shadow-glow transition-transform hover:scale-110"
                    title="View Details"
                  >
                    <Eye className="w-5 h-5" />
                  </button>
                </div>

                {/* Category Pill Tag */}
                <div className="absolute top-3 left-3">
                  <span className="text-[11px] font-nav uppercase tracking-wider px-2.5 py-1 rounded-md bg-[#0d1512]/90 backdrop-blur-md text-emerald-400 border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-white group-hover:text-emerald-300 transition-colors mb-2 line-clamp-1">
                    {item.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-4 line-clamp-2">
                    {item.details}
                  </p>
                </div>

                <div>
                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {item.tags ? (
                      item.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[11px] font-nav px-2 py-0.5 rounded-md bg-[#131f1a] text-slate-300 border border-white/5"
                        >
                          {tag}
                        </span>
                      ))
                    ) : (
                      <span className="text-[11px] font-nav text-slate-400">
                        {item.skills}
                      </span>
                    )}
                  </div>

                  {/* Footer links */}
                  <div className="pt-3 border-t border-white/5 flex items-center justify-between">
                    <a
                      href={item.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-nav text-emerald-400 hover:text-emerald-300 font-medium"
                    >
                      <span>Live Demo</span>
                      <SquareArrowOutUpRight className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={item.repo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-nav text-slate-400 hover:text-white"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-16 text-slate-400">
            <p className="text-lg">No projects match your search criteria.</p>
            <button
              onClick={() => {
                setSelectedCategory("all");
                setSearchQuery("");
              }}
              className="mt-4 px-4 py-2 rounded-xl glass-card text-emerald-400 text-sm font-nav"
            >
              Clear Filters
            </button>
          </div>
        )}
      </div>

      {/* Interactive Project Details Modal */}
      {activeProjectModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
          <div
            className="glass-card border border-emerald-500/30 w-full max-w-2xl rounded-3xl overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Image */}
            <div className="relative aspect-video w-full overflow-hidden bg-[#0d1512]">
              <img
                src={activeProjectModal.image}
                alt={activeProjectModal.name}
                className="w-full h-full object-cover object-top"
              />
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-[#0d1512]/90 hover:bg-[#131f1a] text-white backdrop-blur-md border border-white/10"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-2xl font-extrabold text-white">
                  {activeProjectModal.name}
                </h3>
                <span className="text-xs font-nav uppercase px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  {activeProjectModal.category}
                </span>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {activeProjectModal.details}
              </p>

              <div>
                <h4 className="text-xs font-nav uppercase tracking-wider text-slate-400 mb-2">
                  Technologies Used:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {activeProjectModal.tags?.map((t, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-nav px-2.5 py-1 rounded-lg bg-[#131f1a] text-emerald-300 border border-white/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 flex flex-wrap gap-4 border-t border-white/10">
                <a
                  href={activeProjectModal.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-medium text-sm shadow-glow hover:scale-[1.02] transition-transform"
                >
                  <span>Launch Live Project</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href={activeProjectModal.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl glass-card text-white hover:border-emerald-400 text-sm font-medium transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default ProjectsSection;
