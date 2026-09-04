import me from "../../assets/Img/me.png";
import {
  Code2,
  Zap,
  Layout,
  Cpu,
  CheckCircle2,
  MapPin,
  Briefcase,
  Sparkles,
} from "lucide-react";

function AboutSection() {
  const coreValues = [
    {
      icon: <Zap className="w-5 h-5 text-sky-400" />,
      title: "Fast & Optimized",
      description: "Writing lightweight, optimized code with SSR/SSG and fast load speeds.",
    },
    {
      icon: <Layout className="w-5 h-5 text-indigo-400" />,
      title: "Responsive & Modern UI",
      description: "Crafting pixel-perfect layouts that look great on any screen or device.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-emerald-400" />,
      title: "Robust State & Logic",
      description: "Expertise with Redux Toolkit, Context API, RTK Query, and React Hook Form.",
    },
    {
      icon: <Code2 className="w-5 h-5 text-purple-400" />,
      title: "Clean Architecture",
      description: "Structured component design, TypeScript types, and modular codebases.",
    },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow orb */}
      <div className="glow-orb w-80 h-80 bg-indigo-500/10 top-1/2 left-0 -translate-y-1/2"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card text-sky-400 text-xs font-nav mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>01. DISCOVER</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            About <span className="text-gradient">Mohamed Rady</span>
          </h2>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Interactive Profile Card */}
          <div
            className="lg:col-span-5 flex justify-center"
            data-aos="fade-right"
          >
            <div className="relative group w-full max-w-sm sm:max-w-md">
              {/* Outer decorative gradient frame */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-sky-500 via-indigo-500 to-cyan-400 opacity-30 group-hover:opacity-75 blur-xl transition duration-500"></div>

              <div className="relative glass-card p-6 sm:p-8 rounded-3xl border border-white/10 overflow-hidden">
                <div className="relative mx-auto mb-6 w-48 h-56 sm:w-56 sm:h-64 rounded-2xl overflow-hidden bg-slate-800/80 border border-white/10 shadow-2xl">
                  <img
                    src={me}
                    alt="Mohamed Rady"
                    className="w-full h-full object-cover object-top filter contrast-[1.05] brightness-95 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
                  
                  {/* Floating location tag */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-slate-300 font-nav bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10">
                    <span className="flex items-center gap-1.5 text-sky-400">
                      <MapPin className="w-3.5 h-3.5" /> Egypt
                    </span>
                    <span className="text-emerald-400 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      Open for Work
                    </span>
                  </div>
                </div>

                {/* Profile quick specs */}
                <div className="space-y-2.5 text-sm font-nav">
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Role:</span>
                    <span className="text-slate-200 font-medium">Frontend Engineer</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-slate-400">Degree:</span>
                    <span className="text-slate-200 font-medium">B.Sc. Computer Science</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-slate-400">University:</span>
                    <span className="text-slate-200 font-medium">Mansoura University</span>
                  </div>
                  <div className="flex justify-between items-center py-1.5">
                    <span className="text-slate-400">Specialty:</span>
                    <span className="text-sky-400 font-medium">React, Next.js, TypeScript</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Values */}
          <div className="lg:col-span-7 space-y-8" data-aos="fade-left">
            <div className="space-y-4 text-slate-300 leading-relaxed text-base sm:text-lg">
              <p>
                I am a dedicated <strong className="text-white font-semibold">Frontend Developer</strong> with a solid academic foundation in Computer Science from Mansoura University. My passion lies in transforming ideas into intuitive, fast, and visually captivating web applications.
              </p>
              <p className="text-slate-400">
                I strongly believe that continuous learning, modern engineering best practices, and building real-world projects are the keys to delivering top-tier digital products. Whether working on complex state management in Next.js or crafting micro-interactions, I focus on performance, accessibility, and clean code.
              </p>
            </div>

            {/* Core Values / Features Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {coreValues.map((val, idx) => (
                <div
                  key={idx}
                  className="glass-card p-5 rounded-2xl border border-white/5 hover:border-sky-500/30 transition-all duration-300 hover:translate-y-[-2px]"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 rounded-xl bg-slate-800/80 border border-white/10">
                      {val.icon}
                    </div>
                    <h3 className="font-semibold text-white text-base">
                      {val.title}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {val.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Quick check bullets */}
            <div className="pt-2 flex flex-wrap gap-y-2 gap-x-6 text-sm text-slate-300 font-nav">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Modern React Ecosystem</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Next.js App & Pages Router</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                <span>Responsive & Mobile-First</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
