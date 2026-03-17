import { motion, AnimatePresence } from "motion/react";
import { Link } from "react-router-dom";
import { 
  BookOpen, 
  Cpu, 
  Briefcase, 
  Users, 
  ArrowRight, 
  Mail, 
  Phone, 
  TrendingUp,
  Zap,
  Lightbulb,
  Globe,
  MessageSquare,
  Coins,
  Scale,
  HeartHandshake,
  BrainCircuit,
  Plus,
  Minus,
  Calendar,
  Clock,
  Award,
  X,
  ExternalLink
} from "lucide-react";
import React, { useState } from "react";

const LOGO_URL = "https://i.ibb.co/GvRqYYDY/BGR-LOGO-EDIN.png";
const CAMPUS_CONTROL_BANNER = "https://i.ibb.co/gMFhx7Db/Chat-GPT-Image-Mar-1-2026-03-08-53-PM.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-24 pb-12 md:pt-32 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-cyan-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(38, 208, 188, 0.03)_0%,transparent_70%)]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-cyan-primary/20 mb-6 md:mb-8">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-primary opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-primary"></span>
              </span>
              <span className="text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] text-cyan-primary/80">Fix-a-thon: 7 Days Challenge</span>
            </div>

            <h1 className="text-[12vw] md:text-7xl lg:text-8xl font-display font-black tracking-tighter mb-4 text-white uppercase leading-[0.9]">
              TAKE CONTROL <br />
              <span className="text-cyan-primary cyan-glow">OF YOUR</span> <br />
              CAMPUS LIFE
            </h1>
            
            <div className="flex flex-wrap items-center gap-4 md:gap-6 mb-8 md:mb-12">
              <div className="flex items-center gap-2 text-zinc-400">
                <Calendar size={18} className="text-cyan-primary" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">20th March 2026</span>
              </div>
              <div className="flex items-center gap-2 text-zinc-400">
                <Clock size={18} className="text-cyan-primary" />
                <span className="text-xs md:text-sm font-bold uppercase tracking-widest">7 Days</span>
              </div>
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-[10px] font-black uppercase tracking-widest">
                Free Enrollment
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
              <Link 
                to="/roadmap"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white text-base font-black uppercase tracking-widest rounded-full hover:bg-white/10 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                View Roadmap
              </Link>
              <a 
                href="https://chat.whatsapp.com/DZeU9JBL9pW9B0tRbGgL5u"
                target="_blank"
                rel="noopener noreferrer"
                className="px-10 py-4 bg-cyan-primary text-black text-base font-black uppercase tracking-widest rounded-full hover:bg-cyan-light transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Enroll Now <ArrowRight size={20} />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute inset-0 bg-cyan-primary/20 blur-[100px] rounded-full animate-pulse" />
            <div className="relative glass rounded-[4rem] p-4 border-white/10 overflow-hidden group">
              <img 
                src={CAMPUS_CONTROL_BANNER} 
                alt="Campus Control" 
                className="w-full h-auto rounded-[3rem] shadow-2xl transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-12 left-12 right-12">
                <div className="text-cyan-primary font-display font-black text-2xl uppercase tracking-tighter mb-2">Campus Control</div>
                <div className="text-white/70 text-sm font-medium tracking-widest uppercase">The Ultimate AI Mastery Event</div>
              </div>
            </div>
          </motion.div>

          {/* Mobile Banner Image */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:hidden mt-8"
          >
            <div className="glass rounded-[2.5rem] p-3 border-white/10 overflow-hidden">
              <img 
                src={CAMPUS_CONTROL_BANNER} 
                alt="Campus Control" 
                className="w-full h-auto rounded-[2rem]"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  );
};

const WhyEduneticExists = () => {
  const problems = [
    {
      title: "Rote Learning Culture",
      desc: "Traditional education prioritizes memorization over critical thinking, leaving students with high marks but low comprehension.",
      icon: <BookOpen size={24} />,
      color: "from-cyan-500/20 to-blue-500/20"
    },
    {
      title: "The Skill Gap",
      desc: "Schools teach subjects, not life. Financial literacy, leadership, and emotional intelligence are completely missing from the curriculum.",
      icon: <Briefcase size={24} />,
      color: "from-cyan-500/20 to-indigo-500/20"
    },
    {
      title: "Technological Lag",
      desc: "While the world moves towards AI and automation, our classrooms are stuck in the industrial era with zero tech exposure.",
      icon: <Cpu size={24} />,
      color: "from-cyan-500/20 to-emerald-500/20"
    },
    {
      title: "Real-World Unpreparedness",
      desc: "Students graduate without knowing how to navigate careers, manage taxes, or lead teams in a 21st-century environment.",
      icon: <TrendingUp size={24} />,
      color: "from-cyan-500/20 to-blue-500/20"
    }
  ];

  return (
    <section id="why-edunetic" className="py-20 md:py-32 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-[10px] font-bold uppercase tracking-[0.4em] text-cyan-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-cyan-primary animate-pulse" />
              The Critical Gap
            </div>
            <h2 className="text-5xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-[0.85]">
              Why <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Edunetic</span> <br />
              Exists
            </h2>
            <p className="text-zinc-500 text-lg md:text-xl leading-relaxed max-w-xl">
              The traditional Indian education system was designed for the industrial age. Today, it's failing to prepare our children for a world defined by AI, global competition, and rapid change.
            </p>
          </motion.div>

          <div className="relative lg:-ml-16">
            <div className="absolute inset-0 bg-cyan-primary/10 blur-[120px] rounded-full" />
            <div className="relative glass p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] border-cyan-primary/20 bg-zinc-900/50">
              <h4 className="text-xl md:text-2xl font-display font-black text-white uppercase mb-6 md:mb-8">The Harsh Reality</h4>
              <div className="space-y-8 md:space-y-10">
                <div className="flex gap-6 md:gap-8">
                  <div className="text-4xl md:text-5xl font-display font-black text-cyan-primary/40">80%</div>
                  <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed">Of Indian graduates are deemed "unemployable" due to lack of practical, real-world skills.</p>
                </div>
                <div className="h-px w-full bg-white/5" />
                <div className="flex gap-6 md:gap-8">
                  <div className="text-4xl md:text-5xl font-display font-black text-cyan-primary/40">0%</div>
                  <p className="text-zinc-400 text-xs md:text-sm font-medium leading-relaxed">Formal exposure to Financial Literacy or AI in 90% of traditional school curriculums.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {problems.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-zinc-900/50 border border-white/5 hover:border-cyan-primary/30 transition-all duration-500 overflow-hidden h-full"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`} />
              <div className="relative z-10">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-cyan-primary transition-all duration-500 mb-4 md:mb-6 shadow-xl">
                  {p.icon}
                </div>
                <h4 className="text-sm md:text-base font-display font-black text-white uppercase tracking-tight mb-2 group-hover:text-cyan-primary transition-colors leading-tight">
                  {p.title}
                </h4>
                <p className="text-zinc-500 text-[10px] md:text-xs leading-relaxed group-hover:text-zinc-300 transition-colors">
                  {p.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const PartnersSection = () => {
  const partners = [
    { 
      name: "cosmind.in", 
      logo: "https://i.ibb.co/F4F6C5R9/Screenshot-2026-02-25-233057-removebg-preview.png",
      role: "Infrastructure & Tech",
      color: "from-cyan-500/20 to-blue-500/20"
    },
    { 
      name: "Aarambh.network", 
      logo: "https://i.ibb.co/MxNJCh4J/Screenshot-2026-01-11-140052-removebg-preview.png",
      role: "Startup Ecosystem",
      color: "from-emerald-500/20 to-cyan-500/20"
    },
    { 
      name: "Spike", 
      logo: "https://i.ibb.co/mPffQvC/541681563-17848265178551725-6362723959479575366-n-removebg-preview.png",
      role: "Entrepreneurship",
      color: "from-orange-500/20 to-red-500/20"
    },
    { 
      name: "cosmind.pro", 
      logo: "https://i.ibb.co/5WBjm1Nx/Whats-App-Image-2026-02-26-at-11-09-55-AM-removebg-preview.png",
      role: "Intelligence & Systems",
      color: "from-purple-500/20 to-indigo-500/20"
    },
  ];

  return (
    <section className="py-12 md:py-20 relative overflow-hidden bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-8 md:mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-3">
              <div className="h-px w-12 bg-cyan-primary" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">Strategic Alliances</span>
            </div>
            <h3 className="text-3xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
              The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Ecosystem</span> Network
            </h3>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6 blur-md pointer-events-none select-none">
            {partners.map((partner, i) => (
              <div
                key={i}
                className="group relative p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-zinc-900/50 border border-white/5 overflow-hidden backdrop-blur-sm"
              >
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="h-12 md:h-16 mb-4 flex items-center justify-center grayscale opacity-50">
                    <img src={partner.logo} alt={partner.name} className="h-full w-auto object-contain" referrerPolicy="no-referrer" />
                  </div>
                  <h4 className="text-sm md:text-lg font-display font-black text-white/30 uppercase tracking-tight mb-1">{partner.name}</h4>
                  <div className="text-[8px] font-bold uppercase tracking-widest text-cyan-primary/30">{partner.role}</div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              className="px-8 py-4 md:px-12 md:py-6 rounded-full bg-cyan-primary/10 border border-cyan-primary/30 backdrop-blur-xl"
            >
              <span className="text-cyan-primary text-xl md:text-4xl font-display font-black uppercase tracking-[0.2em] md:tracking-[0.3em] cyan-glow whitespace-nowrap">Revealing Soon</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const WhatSchoolsShouldTeach = () => {
  const pillars = [
    {
      id: "01",
      title: "SELF GROWTH & COMMUNICATION",
      desc: "Beyond confidence, we master the art of expression. Empowering students to articulate complex ideas with precision, empathy, and global influence.",
      icon: <MessageSquare size={32} />,
      tag: "Soft Skills"
    },
    {
      id: "02",
      title: "FINANCIAL & ECONOMIC LITERACY",
      desc: "Building a generation that doesn't just earn, but understands wealth. From personal finance to global economics, we ensure early economic independence.",
      icon: <Coins size={32} />,
      tag: "Life Skills"
    },
    {
      id: "03",
      title: "DIGITAL & FUTURE SKILLS",
      desc: "Future-proofing students with AI, advanced coding, and digital ethics. We transform them from passive consumers to the architects of the next tech revolution.",
      icon: <BrainCircuit size={32} />,
      tag: "Tech Skills"
    },
    {
      id: "04",
      title: "ACCESS & EQUAL OPPORTUNITY",
      desc: "Democratizing elite education. Our model bridges the rural-urban divide, ensuring a child in a village has the same future-readiness as one in a metro.",
      icon: <Scale size={32} />,
      tag: "Social Impact"
    },
    {
      id: "05",
      title: "LEADERSHIP, VALUES & CIVIC SENSE",
      desc: "Creating ethical leaders with a deep sense of civic duty. We nurture the character required to lead Bharat's growth with integrity and purpose.",
      icon: <HeartHandshake size={32} />,
      tag: "Character"
    },
    {
      id: "06",
      title: "CRITICAL THINKING & PROBLEM SOLVING",
      desc: "Moving beyond rote learning to first-principles thinking. We train minds to identify real-world problems and engineer sustainable, innovative solutions.",
      icon: <Lightbulb size={32} />,
      tag: "Mindset"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden bg-zinc-950">
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="h-full w-full bg-cyan-primary/5 blur-[140px]" />
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] -z-10 pointer-events-none">
        <svg width="800" height="800" viewBox="0 0 100 100" className="animate-[spin_120s_linear_infinite]">
          <circle cx="50" cy="50" r="45" fill="none" stroke="#26d0bc" strokeWidth="0.3" />
          <circle cx="50" cy="50" r="5" fill="none" stroke="#26d0bc" strokeWidth="0.3" />
          {[...Array(24)].map((_, i) => (
            <line
              key={i}
              x1="50"
              y1="50"
              x2={50 + 45 * Math.cos((i * 15 * Math.PI) / 180)}
              y2={50 + 45 * Math.sin((i * 15 * Math.PI) / 180)}
              stroke="#26d0bc"
              strokeWidth="0.3"
            />
          ))}
        </svg>
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">The Future Curriculum</span>
            </div>
            <h3 className="text-5xl md:text-8xl font-display font-black text-white uppercase leading-[0.85] tracking-tighter">
              What Schools <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Should Teach</span>
            </h3>
            <p className="text-zinc-500 text-lg md:text-xl max-w-2xl mx-auto font-medium">
              Moving beyond textbooks to build the foundational skills required for the next century of leadership and innovation.
            </p>
          </motion.div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-10">
          {pillars.map((pillar, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group relative"
            >
              <div className="relative h-full p-5 md:p-12 rounded-[2rem] md:rounded-[4rem] bg-zinc-900/40 border border-white/5 hover:border-cyan-primary/40 transition-all duration-700 flex flex-col overflow-hidden backdrop-blur-xl">
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(38, 208, 188, 0.1)_0%,transparent_70%)]" />
                </div>

                <div className="flex justify-between items-start mb-4 md:mb-12">
                  <div className="w-10 h-10 md:w-20 md:h-20 rounded-xl md:rounded-[2rem] bg-zinc-950 border border-white/5 flex items-center justify-center text-zinc-500 group-hover:text-cyan-primary group-hover:border-cyan-primary/30 transition-all duration-700 shadow-2xl">
                    {React.cloneElement(pillar.icon as React.ReactElement, { size: window.innerWidth < 768 ? 18 : 32 })}
                  </div>
                  <div className="text-2xl md:text-6xl font-display font-black text-white/[0.03] group-hover:text-cyan-primary/10 transition-colors duration-700">
                    {pillar.id}
                  </div>
                </div>

                <div className="space-y-2 md:space-y-6">
                  <div className="inline-block px-3 py-1 rounded-full bg-cyan-primary/5 border border-cyan-primary/10 text-[8px] md:text-[10px] font-black uppercase tracking-widest text-cyan-primary/70 group-hover:text-cyan-primary group-hover:bg-cyan-primary/10 transition-all duration-700">
                    {pillar.tag}
                  </div>
                  <h4 className="text-sm md:text-3xl font-display font-black text-white uppercase tracking-tight leading-none group-hover:text-cyan-primary transition-colors duration-700">
                    {pillar.title}
                  </h4>
                  <p className="text-zinc-500 text-[10px] md:text-base leading-relaxed font-medium group-hover:text-zinc-300 transition-colors duration-700 line-clamp-3 md:line-clamp-none">
                    {pillar.desc}
                  </p>
                </div>

                <div className="mt-auto pt-4 md:pt-12">
                  <div className="h-1 w-12 bg-zinc-800 rounded-full group-hover:w-full group-hover:bg-cyan-primary transition-all duration-1000 ease-in-out" />
                </div>
              </div>

              <div className="absolute inset-0 -z-10 bg-cyan-primary/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-700 rounded-[2rem] md:rounded-[4rem]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};




const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "What exactly does Edunetic India do?",
      a: "Edunetic India is a future-ready edtech ecosystem that partners with schools to transform traditional education into a more practical, skill-oriented, and real-world driven learning experience."
    },
    {
      q: "Is Edunetic India an extra-curricular program?",
      a: "No,Edunetic India is not an extra-curricular program. Unlike activities that run separately from the core syllabus, Edunetic India works as an integrated academic enhancement ecosystem within the school’s existing framework."
    },
    {
      q: "How is Edunetic India different from other edtech programs?",
      a: "Most programs operate as add-ons or digital tools. Edunetic India functions as a structured ecosystem that integrates curriculum enhancement, life skills, and value-added brand products directly into the school’s academic system."
    },
    {
      q: "What is the long-term vision behind Edunetic India partnerships?",
      a: "Our vision is to help schools transition from traditional content delivery models to future-ready learning environments. Through systematic integration of practical learning and structured skill development, we aim to build institutions that produce confident, capable, and socially responsible individuals prepared for the demands of the 21st century."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-32 bg-zinc-950 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-20">
          <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">Common Queries</span>
          </div>
          <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
            Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Questions</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, i) => (
            <div 
              key={i}
              className="glass rounded-3xl overflow-hidden border-white/5 hover:border-cyan-primary/20 transition-all"
            >
              <button 
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-8 py-6 flex items-center justify-between text-left group"
              >
                <span className="text-lg font-display font-bold text-white group-hover:text-cyan-primary transition-colors">{faq.q}</span>
                <div className="text-cyan-primary">
                  {openIndex === i ? <Minus size={20} /> : <Plus size={20} />}
                </div>
              </button>
              
              {openIndex === i && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  className="px-8 pb-6 text-zinc-400 leading-relaxed"
                >
                  {faq.a}
                </motion.div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export const Home = () => {
  return (
    <>
      <Hero />
      <WhyEduneticExists />
      <PartnersSection />
      <WhatSchoolsShouldTeach />
      <FAQ />
    </>
  );
};
