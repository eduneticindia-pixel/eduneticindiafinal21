import { motion } from "motion/react";
import { Linkedin, Instagram } from "lucide-react";

export const AboutUs = () => {
  const team = [
    {
      name: "RUTHVIK MISHRA",
      role: "FOUNDER AND CEO",
      image: "https://i.ibb.co/GQR1PWXr/Ruthvik-Mishra.jpg",
      linkedin: "https://in.linkedin.com/in/ruthvik-mishra-836a16393",
      insta: "https://www.instagram.com/ruthvikspeaks/"
    },
    {
      name: "GAUTAM MIYANI",
      role: "CO FOUNDER AND CMO",
      image: "https://i.ibb.co/tPwM34f2/Gautam-Miyani.png",
      linkedin: "https://in.linkedin.com/in/gautam-miyani-2b8142368",
      insta: "https://www.instagram.com/foundxgautam/"
    },
    {
      name: "VEDANT TIWARI",
      role: "CTO",
      image: "https://i.ibb.co/gbMP1rNp/rupesh-profile.png",
      linkedin: "https://www.linkedin.com/in/programmervedant/",
      insta: "https://www.instagram.com/itsvedant.online/"
    }
  ];

  return (
    <div className="bg-zinc-950">
      {/* Motto / Hero Section */}
      <section className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        
        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-12"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">Our Vision</span>
            </div>
            
            <h2 className="text-6xl md:text-[8rem] font-display font-black text-white uppercase tracking-tighter leading-[0.8] max-w-6xl mx-auto">
              Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Future Leaders</span> <br />
              Not Just <span className="px-4 py-1 bg-cyan-primary text-black rounded-xl inline-block transform -rotate-2">Exam Scorers</span>
            </h2>
            
            <p className="text-zinc-400 text-2xl leading-relaxed font-medium max-w-3xl mx-auto">
              We are a movement to modernize the Indian education system by integrating AI readiness, financial literacy, and real-world leadership into the core school curriculum.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="about-us" className="py-20 md:py-32 relative overflow-hidden border-y border-white/5">
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
                  <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">About Edunetic India</span>
                </div>
                
                <h2 className="text-4xl md:text-6xl font-display font-black text-white uppercase tracking-tighter leading-[0.85]">
                  Redefining <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Education</span>
                </h2>
              </div>
              
              <div className="space-y-6 max-w-lg">
                <p className="text-zinc-400 text-xl leading-relaxed font-medium">
                  We are more than a tech company. We are a movement to modernize the Indian education system from the ground up.
                </p>
                <p className="text-zinc-500 text-base leading-relaxed">
                  By integrating AI readiness, financial literacy, and real-world leadership into the core school curriculum, we ensure that every student is prepared for the challenges of tomorrow, not just the exams of today.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-[3rem] overflow-hidden border border-white/10 glass relative z-10 group max-w-md mx-auto">
                <img 
                  src="https://i.ibb.co/GQnTqfn0/Chat-GPT-Image-Feb-28-2026-06-34-46-PM.png" 
                  alt="About Edunetic" 
                  className="w-full h-full object-cover transition-all duration-1000 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-40" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-80 h-80 bg-cyan-primary/10 rounded-full blur-[100px] animate-pulse" />
              <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '2s' }} />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Founding Team Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 md:mb-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
                <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">The Visionaries</span>
              </div>
              <h2 className="text-6xl md:text-8xl font-display font-black text-white uppercase tracking-tighter leading-none">
                Founding <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Team</span>
              </h2>
            </motion.div>
          </div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {team.map((member, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative w-full max-w-[300px]"
              >
                <div className="relative aspect-[3/4] rounded-[2.5rem] overflow-hidden mb-6 border border-white/10 group-hover:border-cyan-primary/40 transition-all duration-700 shadow-2xl">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-top transition-all duration-1000 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60" />
                  
                  {/* Social Overlay */}
                  <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3 transition-all duration-500">
                    <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-cyan-primary hover:text-black transition-all">
                      <Linkedin size={18} />
                    </a>
                    <a href={member.insta} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:bg-cyan-primary hover:text-black transition-all">
                      <Instagram size={18} />
                    </a>
                  </div>
                </div>
                
                <div className="text-center space-y-1">
                  <h4 className="text-xl font-display font-black text-white uppercase tracking-tight group-hover:text-cyan-primary transition-colors duration-500">
                    {member.name}
                  </h4>
                  <p className="text-cyan-primary/70 text-[9px] font-black uppercase tracking-[0.3em]">
                    {member.role}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
