import React, { useState, useEffect, useRef } from 'react';
import CyberLoader from './components/CyberLoader';
import CustomCursor from './components/CustomCursor';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import SkillsSection from './components/SkillsSection';
import ProjectsSection from './components/ProjectsSection';
import InternshipSection from './components/InternshipSection';
import EducationSection from './components/EducationSection';
import CertificatesSection from './components/CertificatesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import BackgroundEffects from './components/BackgroundEffects';
import { AnimatePresence, motion } from 'framer-motion';

function App() {
  const [loading, setLoading] = useState(true);
  const [breachWarning, setBreachWarning] = useState(false);
  const [logs, setLogs] = useState(["Auth: Handshake Success", "Scan: 0 Intrusions", "Node: Chennai Active", "Link: Encrypted", "V-Core: Optimized"]);

  useEffect(() => {
    const handleContextMenu = (e) => {
      e.preventDefault();
      setBreachWarning(true);
      setTimeout(() => setBreachWarning(false), 2500);
    };
    
    window.addEventListener('contextmenu', handleContextMenu);
    return () => window.removeEventListener('contextmenu', handleContextMenu);
  }, []);

  useEffect(() => {
    if (loading) return;
    const logPhrases = ["Auth: Handshake Success", "Scan: 0 Intrusions", "Node: Chennai Active", "Link: Encrypted", "V-Core: Optimized", "Routing: Secure", "Threat: None"];
    const interval = setInterval(() => {
      setLogs(prev => {
        const newLog = `[${new Date().toLocaleTimeString()}] ${logPhrases[Math.floor(Math.random() * logPhrases.length)]}`;
        return [...prev.slice(1), newLog];
      });
    }, 3000);
    return () => clearInterval(interval);
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-cyber-black text-white font-sans selection:bg-cyber-cyan/30 selection:text-white">
      <CustomCursor />
      
      {breachWarning && (
        <div className="fixed inset-0 z-[100000] bg-red-900/90 flex items-center justify-center pointer-events-none">
          <div className="text-center">
            <div className="text-6xl mb-4">⚠️</div>
            <h1 className="font-cyber text-4xl text-white font-bold tracking-widest uppercase">Security Breach Detected</h1>
            <p className="font-mono text-red-300 mt-2">UNAUTHORIZED ACCESS ATTEMPT BLOCKED</p>
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        {loading ? (
          <CyberLoader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative z-10"
          >
            <BackgroundEffects />
            
            {/* HUD Overlays */}
            <div className="fixed bottom-5 right-5 w-56 h-20 bg-black/85 border border-white/5 text-[8px] p-2.5 text-cyber-lime font-mono pointer-events-none z-[100] flex flex-col justify-end overflow-hidden hidden md:flex">
              {logs.map((log, i) => (
                <div key={i} className="text-cyber-lime">{log}</div>
              ))}
            </div>

            <div className="fixed bottom-5 left-5 text-[8px] text-cyber-cyan opacity-50 pointer-events-none z-[100] font-mono hidden md:block">
              SESSION_ID: 0x982A1<br />
              UPLINK: SECURE_AES256<br />
              LOC: CHENNAI_NODE
            </div>

            <Navbar />
            <main>
              <HeroSection />
              <AboutSection />
              <SkillsSection />
              <ProjectsSection />
              <InternshipSection />
              <EducationSection />
              <ContactSection />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
