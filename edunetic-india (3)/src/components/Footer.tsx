import { TricolorIndia } from "./Common";

const LOGO_URL = "https://i.ibb.co/GvRqYYDY/BGR-LOGO-EDIN.png";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-zinc-950">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="flex items-center gap-2">
          <img src={LOGO_URL} alt="Edunetic India" className="h-8" referrerPolicy="no-referrer" />
          <span className="text-cyan-primary font-display font-bold uppercase tracking-tight">Edunetic <TricolorIndia /></span>
        </div>
        <div className="text-zinc-500 text-sm">
          © 2026 Edunetic <TricolorIndia />. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
