/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { WaitlistModal } from "./components/WaitlistModal";
import { ScrollToTop } from "./components/ScrollToTop";
import { Home } from "./pages/Home";
import { AboutUs } from "./pages/About";
import { EcosystemSection } from "./pages/Ecosystem";
import { ContactPage } from "./pages/Contact";
import { RoadmapPage } from "./pages/Roadmap";

export default function App() {
  const [isWaitlistOpen, setIsWaitlistOpen] = useState(false);

  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen selection:bg-cyan-primary selection:text-black bg-zinc-950">
        <Navbar onOpenWaitlist={() => setIsWaitlistOpen(true)} />
        
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/ecosystem" element={<EcosystemSection />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/roadmap" element={<RoadmapPage />} />
          </Routes>
        </main>

        <Footer />
        <WaitlistModal isOpen={isWaitlistOpen} onClose={() => setIsWaitlistOpen(false)} />
      </div>
    </Router>
  );
}
