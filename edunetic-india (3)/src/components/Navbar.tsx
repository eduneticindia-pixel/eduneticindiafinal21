import React from "react";
import { Link, useLocation } from "react-router-dom";
import { TricolorIndia } from "./Common";
import { Home, Info, LayoutGrid, Mail } from "lucide-react";

const LOGO_URL = "https://i.ibb.co/GvRqYYDY/BGR-LOGO-EDIN.png";

export const Navbar = ({ onOpenWaitlist }: { onOpenWaitlist: () => void }) => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const navItems = [
    { name: 'Home', path: '/', id: 'home', icon: <Home size={18} /> },
    { name: 'About', path: '/about', id: 'about-us', icon: <Info size={18} /> },
    { name: 'Ecosystem', path: '/ecosystem', id: 'ecosystem', icon: <LayoutGrid size={18} /> },
    { name: 'Contact', path: '/contact', id: 'contact', icon: <Mail size={18} /> }
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, item: typeof navItems[0]) => {
    if (item.id === 'home') {
      if (isHome) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isHome) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="fixed top-[15px] left-[15px] right-[15px] z-50 flex justify-center items-center pointer-events-none">
        <div className="glass rounded-full px-4 md:px-6 py-1.5 md:py-2 flex items-center justify-between gap-4 md:gap-8 pointer-events-auto w-full max-w-7xl border border-white/10 shadow-2xl">
          <Link to="/" onClick={handleLogoClick} className="flex items-center gap-3">
            <img src={LOGO_URL} alt="Edunetic India" className="h-8 md:h-12" referrerPolicy="no-referrer" />
            <div className="flex flex-row items-center justify-center leading-none gap-2">
              <span className="text-lg md:text-2xl font-display font-bold tracking-tighter cyan-glow uppercase text-cyan-primary">Edunetic</span>
              <span className="text-lg md:text-2xl font-bold md:font-black tracking-tighter uppercase bg-gradient-to-r from-[#FF9933] via-[#FFFFFF] to-[#138808] bg-clip-text text-transparent">India</span>
            </div>
          </Link>
          
          <div className="hidden xl:flex items-center gap-8">
            {navItems.map((item) => (
              <Link 
                key={item.id} 
                to={item.path}
                onClick={(e) => handleNavClick(e, item)}
                className="relative text-xs font-bold uppercase tracking-widest text-zinc-400 hover:text-cyan-primary transition-colors whitespace-nowrap group py-2"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-cyan-primary transition-all duration-300 group-hover:w-full" />
              </Link>
            ))}
          </div>

          <button 
            onClick={onOpenWaitlist}
            className="px-5 md:px-10 py-2.5 md:py-4 bg-cyan-primary text-black text-[10px] md:text-xs font-black uppercase tracking-[0.2em] rounded-full hover:bg-cyan-light transition-all transform hover:scale-105 shadow-xl shadow-cyan-primary/30 whitespace-nowrap"
          >
            Join Waitlist
          </button>
        </div>
      </nav>

      {/* Bottom Mobile & Tablet Snackbar */}
      <div className="fixed bottom-0 left-0 right-0 z-50 xl:hidden pointer-events-auto">
        <div className="glass px-2 py-2 flex items-center justify-between border-t border-white/10 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
          {navItems.map((item) => (
            <Link 
              key={item.id} 
              to={item.path}
              onClick={(e) => handleNavClick(e, item)}
              className={`flex-1 flex flex-col items-center gap-1 py-3 rounded-xl transition-all duration-300 ${
                location.pathname === item.path 
                  ? 'text-cyan-primary bg-cyan-primary/10' 
                  : 'text-zinc-500 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="text-[9px] font-black uppercase tracking-wider whitespace-nowrap">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
