import {
  Github,
  Linkedin,
  Mail,
  ArrowUp,
  Heart,
  MessageCircle,
} from "lucide-react";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="relative border-t border-white/10 bg-slate-950/80 pt-16 pb-12 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-12">
          {/* Logo & Headline */}
          <div className="text-center md:text-left">
            <a
              href="#hero"
              className="text-2xl font-extrabold text-gradient tracking-tight"
            >
              MOHAMED RADY
            </a>
            <p className="text-xs sm:text-sm text-slate-400 font-nav mt-1">
              Frontend Developer • Crafting Next-Gen Web Experiences
            </p>
          </div>

          {/* Quick Nav Links */}
          <nav className="flex flex-wrap justify-center gap-6 text-xs sm:text-sm font-nav text-slate-400">
            <a href="#hero" className="hover:text-sky-400 transition-colors">
              Home
            </a>
            <a href="#about" className="hover:text-sky-400 transition-colors">
              About
            </a>
            <a href="#skills" className="hover:text-sky-400 transition-colors">
              Skills
            </a>
            <a href="#experience" className="hover:text-sky-400 transition-colors">
              Experience
            </a>
            <a href="#projects" className="hover:text-sky-400 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-sky-400 transition-colors">
              Contact
            </a>
          </nav>

          {/* Social Icons & Back to Top */}
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/MohammedRady59"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub Profile"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-white hover:border-sky-500/30 transition-all"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mohamed-rady-504192289"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Profile"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-sky-400 hover:border-sky-500/30 transition-all"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://wa.me/+2001280761258"
              target="_blank"
              rel="noreferrer"
              aria-label="WhatsApp Contact"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-emerald-400 hover:border-emerald-500/30 transition-all"
            >
              <MessageCircle className="w-4 h-4" />
            </a>
            <a
              href="mailto:mrady0772@gmail.com"
              aria-label="Send Email"
              className="p-2.5 rounded-xl glass-card text-slate-400 hover:text-indigo-400 hover:border-indigo-500/30 transition-all"
            >
              <Mail className="w-4 h-4" />
            </a>

            {/* Back to top button */}
            <button
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="p-2.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-glow hover:scale-105 transition-transform ml-2"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-nav text-slate-500 text-center">
          <p>© {new Date().getFullYear()} Mohamed Rady. All rights reserved.</p>
          <p className="flex items-center justify-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> using React, TailwindCSS & Modern Tooling
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
