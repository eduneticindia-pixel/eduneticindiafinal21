import React, { useState } from "react";
import { motion } from "motion/react";
import { X, Loader2 } from "lucide-react";

export const WaitlistModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const scriptURL = "https://script.google.com/macros/s/AKfycbyG3gVZPobsZttoqruoyqw8uCand1H366n4dPaxiy6zuMdvnh0ewqSXaWNpQgvwN98n/exec";
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      // Google Apps Script requires 'no-cors' mode for simple POST requests from browser
      await fetch(scriptURL, { 
        method: 'POST', 
        body: formData,
        mode: 'no-cors' 
      });

      alert('Boom! You are officially on the waitlist. 🚀');
      form.reset();
      onClose();
    } catch (error) {
      console.error('Error!', error);
      alert('Oops! Kuch phat gaya. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      <motion.div 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        className="absolute inset-0 bg-black/90 backdrop-blur-xl"
        onClick={onClose}
      />
      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="relative w-full max-w-lg glass p-8 md:p-12 rounded-[3rem] border-white/10"
      >
        <button 
          onClick={onClose} 
          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
          disabled={isSubmitting}
        >
          <X size={32} />
        </button>
        
        <h3 className="text-4xl font-display font-black text-white uppercase mb-2 tracking-tighter">
          Join the <span className="text-cyan-primary">Waitlist</span>
        </h3>
        <p className="text-zinc-500 mb-8 font-medium">Be the first to experience the future of education.</p>
        
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Full Name *</label>
            <input 
              name="Full Name" 
              required 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-primary transition-colors text-white" 
              placeholder="Enter your name" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Mobile Number *</label>
            <input 
              name="Mobile Number" 
              required 
              type="tel" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-primary transition-colors text-white" 
              placeholder="+91 XXXXX XXXXX" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Email Address *</label>
            <input 
              name="Email" 
              required 
              type="email" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-primary transition-colors text-white" 
              placeholder="name@example.com" 
            />
          </div>
          <div className="space-y-1">
            <label className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold">Referral Code (Optional)</label>
            <input 
              name="Referral Code" 
              type="text" 
              className="w-full bg-white/5 border border-white/10 rounded-2xl px-5 py-4 focus:outline-none focus:border-cyan-primary transition-colors text-white" 
              placeholder="Enter code if any" 
            />
          </div>
          
          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full py-5 bg-cyan-primary text-black font-black uppercase tracking-widest rounded-2xl hover:bg-cyan-light transition-all transform hover:scale-[1.02] mt-4 flex items-center justify-center disabled:opacity-50 disabled:hover:scale-100"
          >
            {isSubmitting ? (
              <Loader2 className="animate-spin mr-2" size={20} />
            ) : (
              "Secure My Spot"
            )}
          </button>
        </form>
      </motion.div>
    </div>
  );
};