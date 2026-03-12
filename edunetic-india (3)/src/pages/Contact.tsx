import React, { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, Loader2 } from "lucide-react";

export const ContactPage = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Yahan apna NAYA Google Script URL dalo jo is script ko deploy karke milega
    const scriptURL = "https://script.google.com/macros/s/AKfycbxHx5CF5mz-j30LrCsGA-CqUv2l3Vv44CgK9ekx-GXxQV1a-iownORBVfx9uX6rEIVeKg/exec"; 
    
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      await fetch(scriptURL, { 
        method: 'POST', 
        body: formData,
        mode: 'no-cors' 
      });

      alert('Message sent successfully! We will get back to you soon. 🚀');
      form.reset();
    } catch (error) {
      console.error('Error!', error);
      alert('An error happened.Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-zinc-950 pt-32">
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-cyan-primary font-display font-bold uppercase tracking-widest text-sm mb-4">Get In Touch</h2>
              <h3 className="text-4xl md:text-5xl font-display font-bold mb-8">Let's Build Future-Ready Schools Together</h3>
              <p className="text-zinc-400 text-lg mb-12">
                Join the movement to revolutionize education in India. Whether you're a school principal, a teacher, or a concerned parent, we want to hear from you.
              </p>
              
              <div className="space-y-6">
                <a href="mailto:contactus@eduneticindia.in" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-primary group-hover:bg-cyan-primary group-hover:text-black transition-all">
                    <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">Email Us</div>
                    <div className="text-lg font-medium group-hover:text-cyan-primary transition-colors">eduneticindia@zohomail.in</div>
                  </div>
                </a>
                <a href="https://wa.me/916394397986" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 glass rounded-full flex items-center justify-center text-cyan-primary group-hover:bg-cyan-primary group-hover:text-black transition-all">
                    <Phone size={20} />
                  </div>
                  <div>
                    <div className="text-xs text-zinc-500 uppercase tracking-wider">WhatsApp Us</div>
                    <div className="text-lg font-medium group-hover:text-cyan-primary transition-colors">+91 6394 397 986</div>
                  </div>
                </a>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="glass p-8 md:p-12 rounded-[2rem]"
            >
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Full Name</label>
                    <input 
                      name="NAME" 
                      required 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-primary transition-colors text-white" 
                      placeholder="John Doe" 
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Mobile</label>
                    <input 
                      name="MOBILE NUMBER" 
                      required 
                      type="text" 
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-primary transition-colors text-white" 
                      placeholder="+91 00000 00000" 
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Email Address</label>
                  <input 
                    name="EMAIL" 
                    required 
                    type="email" 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-primary transition-colors text-white" 
                    placeholder="john@school.com" 
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs uppercase tracking-widest text-zinc-500 font-bold">Message</label>
                  <textarea 
                    name="MESSAGE" 
                    required 
                    rows={4} 
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-primary transition-colors text-white" 
                    placeholder="How can we help your school?"
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full py-4 bg-cyan-primary text-black font-bold rounded-xl hover:bg-cyan-light transition-all transform hover:scale-[1.02] flex items-center justify-center disabled:opacity-50"
                >
                  {isSubmitting ? <Loader2 className="animate-spin mr-2" size={20} /> : "Send Message"}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};