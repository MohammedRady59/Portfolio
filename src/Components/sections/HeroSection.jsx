import { useEffect, useRef } from "react";
import Typed from "typed.js";
import {
  Github,
  Linkedin,
  Mail,
  ArrowRight,
  Download,
  Code2,
  Sparkles,
  Layers,
  GraduationCap,
  MessageCircle,
} from "lucide-react";

function HeroSection() {
  const typedEl = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedEl.current, {
      strings: [
        "Frontend Developer",
        "React & Next.js Specialist",
        "Modern UI/UX Craftsman",
        "Creative Web Engineer",
      ],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1800,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section
      id="hero"
      className="min-h-screen relative flex items-center justify-center pt-24 pb-16 overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="glow-orb w-96 h-96 bg-cyan-500/10 top-10 left-1/4 -translate-x-1/2"></div>
      <div className="glow-orb w-[30rem] h-[30rem] bg-indigo-500/10 bottom-10 right-1/4 translate-x-1/2"></div>

      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div
            data-aos="fade-down"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card mb-8 border border-sky-500/20 text-xs sm:text-sm text-sky-400 font-nav tracking-wide"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
            </span>
            Available for Freelance & Full-time Roles
          </div>

          {/* Greeting */}
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="text-sky-400 font-nav text-sm sm:text-base md:text-lg mb-2 tracking-widest uppercase font-semibold"
          >
            Hello World, I'm
          </p>

          {/* Main Name Heading */}
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4"
          >
            <span className="text-gradient hover:drop-shadow-[0_0_35px_rgba(56,189,248,0.5)] transition-all duration-300">
              Mohamed Rady
            </span>
          </h1>

          {/* Dynamic Role Subtitle */}
          <div
            data-aos="fade-up"
            data-aos-delay="300"
            className="text-xl sm:text-2xl md:text-3xl font-medium text-slate-300 mb-6 flex items-center justify-center gap-2 flex-wrap"
          >
            <span>Passionate</span>
            <span
              ref={typedEl}
              className="text-gradient-cyan font-semibold border-b-2 border-sky-400/30 pb-0.5"
            ></span>
          </div>

          {/* Short Bio summary */}
          <p
            data-aos="fade-up"
            data-aos-delay="400"
            className="text-slate-400 text-base sm:text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-10 font-normal"
          >
            Building high-performance, accessible, and stunning web interfaces
            with <span className="text-sky-300 font-medium">React</span>,{" "}
            <span className="text-sky-300 font-medium">Next.js</span>, and modern
            design architectures. Turning complex requirements into smooth digital experiences.
          </p>

          {/* Action CTAs */}
          <div
            data-aos="fade-up"
            data-aos-delay="500"
            className="flex flex-wrap items-center justify-center gap-4 mb-14"
          >
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2.5 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white font-medium text-base shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <span>Explore My Work</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>

            <a
              href="https://drive.google.com/file/d/1w3v3auNI20EPZ0N0fUnvtAYnkDnFuwHI/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl glass-card text-slate-200 hover:text-white hover:border-sky-400/40 font-medium text-base transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
            >
              <Download className="w-4 h-4 text-sky-400" />
              <span>Download CV</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-slate-700/60 hover:border-sky-400/50 bg-slate-900/40 text-slate-300 hover:text-sky-300 font-medium text-base transition-all duration-300"
            >
              <span>Let's Talk</span>
            </a>
          </div>

          {/* Social Icons Bar */}
          <div
            data-aos="fade-up"
            data-aos-delay="600"
            className="flex items-center justify-center gap-3 sm:gap-4 mb-16"
          >
            <a
              href="https://github.com/MohammedRady59"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-3 rounded-xl glass-card text-slate-400 hover:text-white hover:bg-slate-800/80 hover:scale-110 transition-all duration-300"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-rady-504192289"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 rounded-xl glass-card text-slate-400 hover:text-sky-400 hover:bg-slate-800/80 hover:scale-110 transition-all duration-300"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://wa.me/+2001280761258"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Chat"
              className="p-3 rounded-xl glass-card text-slate-400 hover:text-emerald-400 hover:bg-slate-800/80 hover:scale-110 transition-all duration-300"
            >
              <MessageCircle className="w-5 h-5" />
            </a>
            <a
              href="mailto:mrady0772@gmail.com"
              aria-label="Send Email"
              className="p-3 rounded-xl glass-card text-slate-400 hover:text-indigo-400 hover:bg-slate-800/80 hover:scale-110 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Quick Highlights / Stats Strip */}
          <div
            data-aos="fade-up"
            data-aos-delay="700"
            className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto"
          >
            <div className="glass-card p-4 sm:p-5 rounded-2xl text-center group hover:border-sky-500/40">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-sky-500/10 flex items-center justify-center text-sky-400 group-hover:scale-110 transition-transform">
                <Code2 className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">15+</div>
              <div className="text-xs sm:text-sm text-slate-400 font-nav">Projects Built</div>
            </div>

            <div className="glass-card p-4 sm:p-5 rounded-2xl text-center group hover:border-indigo-500/40">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-indigo-500/10 flex items-center justify-center text-indigo-400 group-hover:scale-110 transition-transform">
                <Layers className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Next & React</div>
              <div className="text-xs sm:text-sm text-slate-400 font-nav">Core Specialization</div>
            </div>

            <div className="glass-card p-4 sm:p-5 rounded-2xl text-center group hover:border-emerald-500/40">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-400 group-hover:scale-110 transition-transform">
                <GraduationCap className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">Mansoura Uni</div>
              <div className="text-xs sm:text-sm text-slate-400 font-nav">B.Sc. Computer Science</div>
            </div>

            <div className="glass-card p-4 sm:p-5 rounded-2xl text-center group hover:border-purple-500/40">
              <div className="w-10 h-10 mx-auto mb-2 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="text-2xl sm:text-3xl font-bold text-white mb-1">100%</div>
              <div className="text-xs sm:text-sm text-slate-400 font-nav">Commitment to Quality</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
