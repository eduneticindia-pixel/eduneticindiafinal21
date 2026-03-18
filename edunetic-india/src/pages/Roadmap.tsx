import { motion } from "motion/react";
import { Award, CheckCircle2, ArrowRight, Brain, BookOpen, Rocket, Layout, Clock, Send, Trophy, Sparkles } from "lucide-react";

export const RoadmapPage = () => {
  const roadmap = [
    {
      phase: "Phase 1: AI Foundations",
      items: [
        { 
          day: "Day 1", 
          title: "Starting With AI", 
          desc: "Master Prompt Engineering & leverage Gemini for advanced research and productivity.",
          icon: <Brain className="text-cyan-primary" size={20} />,
          type: "Class"
        },
        { 
          day: "Day 2", 
          title: "NotebookLM Mastery", 
          desc: "Deep dive into Google's NotebookLM. Project 'Vidya Setu' assigned at the end of the day.",
          icon: <BookOpen className="text-cyan-primary" size={20} />,
          type: "Class + Project"
        },
        { 
          day: "Day 3", 
          title: "Project: Vidya Setu", 
          desc: "No Classes. Focus on building your project. Submission by evening.",
          icon: <Rocket className="text-cyan-primary" size={20} />,
          type: "Submission Only",
          isSubmission: true
        }
      ]
    },
    {
      phase: "Phase 2: Systems & Productivity",
      items: [
        { 
          day: "Day 4", 
          title: "Mastering Notion Basics", 
          desc: "Build your second brain. Project 'Advait OS' assigned.",
          icon: <Layout className="text-cyan-primary" size={20} />,
          type: "Class + Project"
        },
        { 
          day: "Day 5", 
          title: "Time Management", 
          desc: "Making your day hyper-productive with advanced scheduling frameworks.",
          icon: <Clock className="text-cyan-primary" size={20} />,
          type: "Class"
        },
        { 
          day: "Day 6", 
          title: "Advait OS Submission", 
          desc: "No Classes. Finalize and submit your Advait OS project.",
          icon: <Send className="text-cyan-primary" size={20} />,
          type: "Submission Only",
          isSubmission: true
        }
      ]
    },
    {
      phase: "Phase 3: Recognition",
      items: [
        { 
          day: "Day 7", 
          title: "Project Review & Awards", 
          desc: "Showcase your work. Win cash prizes, certificates, and premium access.",
          icon: <Trophy className="text-cyan-primary" size={20} />,
          type: "Grand Finale"
        }
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
              <Sparkles className="text-cyan-primary animate-pulse" size={16} />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">The 7-Day Transformation</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none">
              Campus Control <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Roadmap</span>
            </h1>
          </motion.div>
        </div>

        {/* Roadmap with Line */}
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-primary/50 via-cyan-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

          <div className="space-y-32">
            {roadmap.map((phase, idx) => (
              <div key={idx} className="relative">
                <div className="flex flex-col md:flex-row items-center gap-12 md:gap-0">
                  {/* Phase Marker */}
                  <div className="absolute left-8 md:left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-zinc-950 border-2 border-cyan-primary z-10 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-cyan-primary animate-ping" />
                  </div>
                  
                  <div className={`w-full md:w-1/2 ${idx % 2 === 0 ? 'md:pr-20 md:text-right' : 'md:pl-20 md:order-2'}`}>
                    <motion.div
                      initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      className="space-y-8"
                    >
                      <div className={`flex flex-col ${idx % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                        <h3 className="text-3xl font-display font-black text-white uppercase tracking-widest mb-2">
                          {phase.phase}
                        </h3>
                        <div className="h-1 w-24 bg-gradient-to-r from-cyan-primary to-transparent" />
                      </div>

                      <div className="space-y-6">
                        {phase.items.map((item, i) => (
                          <motion.div 
                            key={i} 
                            whileHover={{ scale: 1.02 }}
                            className={`p-8 rounded-[2rem] border transition-all group relative overflow-hidden ${
                              item.isSubmission 
                              ? 'bg-cyan-primary/5 border-cyan-primary/20' 
                              : 'bg-white/5 border-white/5 hover:border-cyan-primary/20'
                            }`}
                          >
                            {item.isSubmission && (
                              <div className="absolute top-0 right-0 px-4 py-1 bg-cyan-primary text-black text-[10px] font-black uppercase tracking-widest rounded-bl-xl">
                                No Classes
                              </div>
                            )}
                            
                            <div className={`flex items-start gap-6 ${idx % 2 === 0 ? 'md:flex-row-reverse' : 'flex-row'}`}>
                              <div className="w-12 h-12 rounded-2xl bg-cyan-primary/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-primary group-hover:text-black transition-all duration-500">
                                {item.icon}
                              </div>
                              <div className={`flex-1 space-y-2 ${idx % 2 === 0 ? 'md:text-right' : 'text-left'}`}>
                                <div className="flex items-center gap-3 mb-1 justify-start md:justify-start">
                                  <span className="text-cyan-primary font-display font-black text-sm uppercase tracking-widest">{item.day}</span>
                                  <span className="w-1 h-1 rounded-full bg-zinc-700" />
                                  <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-wider">{item.type}</span>
                                </div>
                                <h4 className="text-xl font-bold text-white group-hover:text-cyan-primary transition-colors">{item.title}</h4>
                                <p className="text-zinc-500 text-sm leading-relaxed">{item.desc}</p>
                              </div>
                            </div>
                          </motion.div>
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
        <section className="mt-40 max-w-4xl mx-auto">
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

        {/* Mentor Section */}
        <section className="mt-40 max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">Meet Your Guide</span>
              </div>
              <h2 className="text-4xl md:text-7xl font-display font-black text-white uppercase tracking-tighter">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Mentor</span>
              </h2>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute inset-0 bg-cyan-primary/10 blur-[120px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative glass p-8 md:p-16 rounded-[3rem] md:rounded-[4rem] border-white/5 overflow-hidden">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative aspect-square rounded-[2rem] md:rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl">
                  <img 
                    src="https://i.ibb.co/RkdQ3XwN/Whats-App-Image-2026-03-17-at-4-26-17-PM.jpg" 
                    alt="Shivam Tiwari" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-none">
                      Shivam <br />
                      <span className="text-cyan-primary">Tiwari</span>
                    </h3>
                    <div className="inline-flex px-4 py-1.5 rounded-full bg-cyan-primary/10 border border-cyan-primary/20 text-cyan-primary text-xs font-black uppercase tracking-widest">
                      Founder & CEO, RESKOOLx
                    </div>
                  </div>
                  
                  <p className="text-zinc-400 text-lg leading-relaxed font-medium italic">
                    "Our mission is to bridge the gap between traditional education and the demands of the 21st century. Through Campus Control, we're empowering students to master the tools that will define the future."
                  </p>
                  
                  <div className="flex items-center gap-6">
                    <div className="h-px flex-1 bg-white/10" />
                    <div className="text-[10px] font-black uppercase tracking-[0.4em] text-zinc-600">Visionary Leader</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};
