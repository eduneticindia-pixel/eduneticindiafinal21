import { Link } from "react-router-dom";
import { Instagram, Facebook, Twitter } from "lucide-react";
import { TricolorIndia } from "./Common";

const LOGO_URL = "https://i.ibb.co/GvRqYYDY/BGR-LOGO-EDIN.png";

export const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Ecosystem', path: '/ecosystem' },
    { name: 'Contact', path: '/contact' }
  ];

  const socialLinks = [
    { icon: <Instagram size={20} />, url: "https://www.instagram.com/eduneticindia/", label: "Instagram" },
    { icon: <Twitter size={20} />, url: "https://x.com/eduneticindia", label: "X" },
    { icon: <Facebook size={20} />, url: "https://www.facebook.com/share/18U4cpUSwX/", label: "Facebook" }
  ];

  return (
    <footer className="py-12 md:py-20 border-t border-white/5 bg-zinc-950">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left Side: Logo & Socials */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Edunetic India" className="h-10" referrerPolicy="no-referrer" />
              <div className="flex flex-row items-center justify-center leading-none gap-2">
                <span className="text-xl font-display font-bold tracking-tight text-cyan-primary uppercase">Edunetic</span>
                <span className="text-xl font-bold tracking-tight uppercase bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] bg-clip-text text-transparent">India</span>
              </div>
            </div>
            
            <div className="flex items-center gap-6">
              {socialLinks.map((social, i) => (
                <a 
                  key={i} 
                  href={social.url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full glass flex items-center justify-center text-zinc-400 hover:text-cyan-primary hover:border-cyan-primary/50 transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right Side: Navigation */}
          <div className="flex flex-wrap justify-start md:justify-end gap-x-8 gap-y-4">
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                to={item.path}
                className="text-xs font-bold uppercase tracking-widest text-zinc-500 hover:text-cyan-primary transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 Edunetic <span className="text-zinc-500">India</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-600">
            Made with <span className="text-red-500">❤</span> for Future Leaders
          </div>
        </div>
      </div>
    </footer>
  );
};
