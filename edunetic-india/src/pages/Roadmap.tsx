import { motion } from "motion/react";
import { Award, CheckCircle2, ArrowRight } from "lucide-react";

export const RoadmapPage = () => {
  const roadmap = [
    {
      phase: "Phase 1: The Learning (Days 1-3)",
      items: [
        { day: "Day 1", title: "Mastering Gemini AI", desc: "Learn to leverage Google's most powerful AI for research and content creation." },
        { day: "Day 2", title: "NotebookLM Deep Dive", desc: "Transform your notes into a personalized AI brain for academic excellence." },
        { day: "Day 3", title: "Notion for Life OS", desc: "Build a complete system for task management and project tracking." }
      ]
    },
    {
      phase: "Phase 2: The Challenge (Day 4)",
      items: [
        { day: "Day 4", title: "The Fix-a-thon Project", desc: "Get a real-world problem statement and build a solution using the tools learned." }
      ]
    },
    {
      phase: "Phase 3: Strategy & Mastery (Days 5-6)",
      items: [
        { day: "Day 5-6", title: "Time Management Mastery", desc: "Learn advanced strategies to reclaim 10+ hours a week using AI & Notion." }
      ]
    },
    {
      phase: "Phase 4: Rewards & Recognition (Day 7)",
      items: [
        { day: "Day 7", title: "Project Review & Awards", desc: "Showcase your work. Win cash prizes, certificates, and premium access." }
      ]
    }
  ];

  const rewards = [
    "Cash Prizes for Top Projects",
    "Edunetic Loyalty Badge",
    "Premium Access to Skill Forge",
    "10% Off on Next 5 Purchases",
    "Certificate backed by \"RESKOOLx\""
  ];

  return (
    <div className="bg-zinc-950 pt-32 pb-20">
      <div className="container mx-auto px-6">
        {/* Hero */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">The 4+2+1 Structure</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none">
              Campus Control <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Roadmap</span>
            </h1>
          </motion.div>
        </div>

        {/* Roadmap with Line */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-primary/50 via-cyan-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-24">
            {roadmap.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-0">
                  {/* Phase Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-cyan-primary z-10 hidden md:block" />
                  
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="space-y-4"
                    >
                      <h3 className="text-2xl font-display font-black text-cyan-primary uppercase tracking-widest">
                        {phase.phase}
                      </h3>
                      <div className="space-y-4">
                        {phase.items.map((item, i) => (
                          <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-cyan-primary/20 transition-all group">
                            <div className="text-cyan-primary font-display font-black text-sm mb-2">{item.day}</div>
                            <h4 className="text-white font-bold mb-2">{item.title}</h4>
                            <p className="text-zinc-500 text-xs leading-relaxed">{item.desc}</p>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                  <div className="w-full md:w-1/2" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Rewards Section */}
        <section className="mt-32 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-16 rounded-[3rem] border-cyan-primary/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-primary/5 blur-[100px] -z-10" />
            
            <div className="flex flex-col md:flex-row gap-12 items-center">
              <div className="flex-1 space-y-8">
                <div className="space-y-4">
                  <div className="inline-flex items-center gap-3 text-cyan-primary">
                    <Award size={32} />
                    <span className="text-xs font-black uppercase tracking-[0.4em]">Exclusive Benefits</span>
                  </div>
                  <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                    The <span className="text-cyan-primary">Rewards</span>
                  </h2>
                </div>
                
                <div className="grid gap-4">
                  {rewards.map((reward, i) => (
                    <div key={i} className="flex items-center gap-4 text-zinc-400">
                      <CheckCircle2 size={20} className="text-cyan-primary shrink-0" />
                      <span className="text-lg font-medium">{reward}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="w-full md:w-auto">
                <a 
                  href="https://chat.whatsapp.com/DZeU9JBL9pW9B0tRbGgL5u" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full md:w-auto px-12 py-6 bg-cyan-primary text-black font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-light transition-all transform hover:scale-105 flex items-center justify-center gap-3"
                >
                  Enroll Now <ArrowRight size={20} />
                </a>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
