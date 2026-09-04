import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaForm } from "../../validtion";
import emailjs from "@emailjs/browser";
import confetti from "canvas-confetti";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Check,
  Copy,
  Sparkles,
  Loader2,
  Clock,
  MessageCircle,
} from "lucide-react";

function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [status, setStatus] = useState("idle"); // "idle" | "loading" | "success" | "error"
  const [statusMessage, setStatusMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaForm),
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("mrady0772@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const onSubmit = async (data) => {
    setStatus("loading");
    setStatusMessage("");

    try {
      await emailjs.send(
        "service_u2b9tak",
        "template_pfr5tbi",
        {
          from_email: data.email,
          from_name: data.name,
          message: data.text,
        },
        {
          publicKey: "aO0WuVDFl4Qk7DSmq",
        }
      );

      setStatus("success");
      setStatusMessage("Message sent successfully! I will get back to you soon.");
      reset();

      // Trigger Confetti Celebration!
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#38bdf8", "#818cf8", "#34d399", "#f43f5e"],
      });
    } catch (err) {
      console.error(err);
      setStatus("error");
      setStatusMessage("Failed to send message. Please reach out directly via Email or WhatsApp.");
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="glow-orb w-[28rem] h-[28rem] bg-indigo-500/10 bottom-0 left-1/4"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg glass-card text-sky-400 text-xs font-nav mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>05. GET IN TOUCH</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Let's Build Something <span className="text-gradient">Remarkable</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base">
            Have a project in mind, a freelance inquiry, or want to say hello? Drop me a message!
          </p>
          <div className="h-1 w-20 bg-gradient-to-r from-sky-400 to-indigo-500 mx-auto rounded-full mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 max-w-6xl mx-auto">
          {/* Left Column: Direct Contact Info Cards */}
          <div className="lg:col-span-5 space-y-5" data-aos="fade-right">
            <div className="glass-card p-6 sm:p-8 rounded-3xl border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white mb-4">
                Contact Information
              </h3>

              {/* Email Card with 1-click Copy */}
              <div className="flex items-start justify-between p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-sky-500/30 transition-all">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-nav block">Email Address</span>
                    <a
                      href="mailto:mrady0772@gmail.com"
                      className="text-sm font-medium text-white hover:text-sky-300 transition-colors break-all"
                    >
                      mrady0772@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  title="Copy email"
                >
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </button>
              </div>

              {/* WhatsApp direct */}
              <a
                href="https://wa.me/+2001280761258"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-white/5 hover:border-emerald-500/30 transition-all group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-nav block">WhatsApp & Phone</span>
                  <span className="text-sm font-medium text-white group-hover:text-emerald-300 transition-colors">
                    +20 01280761258
                  </span>
                </div>
              </a>

              {/* Location */}
              <div className="flex items-center gap-3 p-4 rounded-2xl bg-slate-900/60 border border-white/5">
                <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-400 font-nav block">Location</span>
                  <span className="text-sm font-medium text-white">
                    Mansoura, Egypt (Available Globally / Remote)
                  </span>
                </div>
              </div>

              {/* Response Time Badge */}
              <div className="flex items-center gap-2 p-3 rounded-xl bg-slate-800/40 border border-white/5 text-xs text-slate-400 font-nav">
                <Clock className="w-4 h-4 text-sky-400" />
                <span>Fast response — usually within 2 to 4 hours</span>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7" data-aos="fade-left">
            <div className="glass-card p-6 sm:p-10 rounded-3xl border border-white/10 relative">
              <h3 className="text-xl font-bold text-white mb-6">
                Send a Direct Message
              </h3>

              <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                {/* Name */}
                <div>
                  <label className="block text-xs font-nav text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Name
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    {...register("name")}
                    className="w-full px-4 py-3 rounded-xl glass-card text-white text-sm placeholder-slate-500 border border-white/10 focus:border-sky-400 focus:outline-none transition-all"
                  />
                  {errors.name && (
                    <span className="text-xs text-rose-400 font-nav mt-1 block">
                      {errors.name.message}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-nav text-slate-300 mb-1.5 uppercase tracking-wider">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    {...register("email")}
                    className="w-full px-4 py-3 rounded-xl glass-card text-white text-sm placeholder-slate-500 border border-white/10 focus:border-sky-400 focus:outline-none transition-all"
                  />
                  {errors.email && (
                    <span className="text-xs text-rose-400 font-nav mt-1 block">
                      {errors.email.message}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-nav text-slate-300 mb-1.5 uppercase tracking-wider">
                    Message Details
                  </label>
                  <textarea
                    rows={5}
                    placeholder="Tell me about your project, timeline, or inquiry..."
                    {...register("text")}
                    className="w-full px-4 py-3 rounded-xl glass-card text-white text-sm placeholder-slate-500 border border-white/10 focus:border-sky-400 focus:outline-none transition-all resize-none"
                  ></textarea>
                  {errors.text && (
                    <span className="text-xs text-rose-400 font-nav mt-1 block">
                      {errors.text.message}
                    </span>
                  )}
                </div>

                {/* Status Message Notification */}
                {statusMessage && (
                  <div
                    className={`p-3.5 rounded-xl text-xs sm:text-sm font-nav border ${
                      status === "success"
                        ? "bg-emerald-950/40 text-emerald-300 border-emerald-500/30"
                        : "bg-rose-950/40 text-rose-300 border-rose-500/30"
                    }`}
                  >
                    {statusMessage}
                  </div>
                )}

                {/* Action Buttons */}
                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-medium text-sm shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50"
                  >
                    {status === "loading" ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Message</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={() => {
                      reset();
                      setStatus("idle");
                      setStatusMessage("");
                    }}
                    className="px-5 py-3.5 rounded-xl glass-card text-slate-300 hover:text-white text-sm font-medium transition-colors"
                  >
                    Reset Form
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
