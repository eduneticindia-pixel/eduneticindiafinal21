import { motion } from "motion/react";
import { ArrowUpRight, Zap, Shield, Cpu, Globe } from "lucide-react";
import { TricolorIndia } from "../components/Common";

export const EcosystemSection = () => {
  const products = [
    {
      name: "CAMPUS CONTROL",
      image: "https://i.ibb.co/9XQWdK5/2.png",
      desc: "Help students to manage their time wisely using AI and help them to improve their academics mental and physical health.",
      link: "https://campuscontrol.eduneticindia.in",
      tag: "AI Management"
    },
    {
      name: "SKILL FORGE",
      image: "https://i.ibb.co/SXRS3ZQ7/1.png",
      desc: "Empowering students with industry-relevant skills, high-performance certifications, and real-world project exposure.",
      link: "https://skillforge.eduneticindia.in",
      tag: "Skill Development"
    }
  ];

  const features = [
    { icon: <Cpu size={20} />, title: "AI Integrated", desc: "Every product is powered by advanced neural networks." },
    { icon: <Shield size={20} />, title: "Student Centric", desc: "Designed around the mental & physical well-being of learners." },
    { icon: <Globe size={20} />, title: "Global Standards", desc: "Curriculum and tools aligned with international benchmarks." },
    { icon: <Zap size={20} />, title: "Real-time Impact", desc: "Immediate feedback loops for faster skill acquisition." }
  ];

  return (
    <section id="ecosystem" className="min-h-screen py-32 bg-zinc-950 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-primary/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header Section */}
        <div className="max-w-5xl mr-auto mb-32 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-4 px-6 py-2 rounded-full bg-white/5 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-cyan-primary animate-pulse" />
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-cyan-primary">The Future Ecosystem</span>
            </div>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-display font-black text-white uppercase tracking-tighter leading-[0.9] text-left">
              <TricolorIndia />'s First & Largest <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Future-Ready</span> <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-primary to-blue-500">Educational Ecosystem</span>
            </h2>
            <div className="grid md:grid-cols-2 gap-12 pt-8">
              <p className="text-zinc-400 text-xl leading-relaxed font-medium">
                Edunetic India isn't just a platform; it's a comprehensive ecosystem where technology, curriculum, and real-world skills converge. We bridge the gap between traditional schooling and the demands of the AI-driven future.
              </p>
              <p className="text-zinc-500 text-lg leading-relaxed">
                By integrating specialized brand products, we provide a 360-degree support system for students, schools, and parents. From managing mental health to forging industry-ready skills, our ecosystem works in harmony to create future leaders.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-32">
          {features.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass p-8 rounded-3xl border-white/5 hover:border-cyan-primary/20 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-cyan-primary/10 flex items-center justify-center text-cyan-primary mb-6 group-hover:scale-110 transition-transform">
                {f.icon}
              </div>
              <h4 className="text-white font-display font-bold uppercase tracking-tight mb-2">{f.title}</h4>
              <p className="text-zinc-500 text-sm leading-relaxed">{f.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Brand Products Section */}
        <div className="space-y-16">
          <div className="text-center">
            <h3 className="text-4xl font-display font-black text-white uppercase tracking-widest mb-4">Core Brand Products</h3>
            <div className="h-1 w-20 bg-cyan-primary mx-auto rounded-full" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {products.map((product, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.8 }}
                className="group relative"
              >
                <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden mb-8 border border-white/5 group-hover:border-cyan-primary/40 transition-all duration-700 shadow-2xl bg-zinc-900/50">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-contain p-12 group-hover:scale-105 transition-transform duration-1000 blur-[2px] group-hover:blur-sm"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-zinc-950/40 backdrop-blur-[1px] flex items-center justify-center">
                    <div className="px-6 py-2 rounded-full bg-cyan-primary/10 border border-cyan-primary/30 backdrop-blur-md">
                      <span className="text-cyan-primary font-black uppercase tracking-[0.3em] text-xs">Coming Soon</span>
                    </div>
                  </div>
                  
                  <div className="absolute top-8 left-8">
                    <div className="px-4 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[10px] font-black uppercase tracking-widest text-cyan-primary">
                      {product.tag}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-6 px-6">
                  <h4 className="text-4xl font-display font-black text-white uppercase tracking-tight group-hover:text-cyan-primary transition-colors duration-500">
                    {product.name}
                  </h4>
                  <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                    {product.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
