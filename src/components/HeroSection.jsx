import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 pb-32 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center z-10 gap-16">
        
        {/* Left Content */}
        <div className="w-full lg:w-2/3 space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex items-center gap-3 text-cyber-cyan text-[10px] font-bold uppercase tracking-[0.4em] mb-8">
              <span className="w-2 h-2 bg-cyber-cyan rounded-full animate-ping"></span>
              Verified_Vanguard_Node // Authorized
            </div>
            
            <h1 className="font-cyber text-[clamp(2.5rem,6vw,4.5rem)] font-black text-white leading-none mb-6 drop-shadow-[3px_3px_0px_#00f3ff]">
              VIGNESH M
            </h1>
            
            <h2 className="text-xl md:text-2xl text-gray-500 font-bold uppercase tracking-tighter mb-8 font-cyber">
              Java Developer <span className="text-cyber-cyan/50 mx-2">/</span> Cybersecurity Engineer <span className="text-cyber-cyan/50 mx-2">/</span> Full-Stack Node
            </h2>
            
            <p className="text-gray-400 font-mono text-sm leading-relaxed max-w-2xl border-l-2 border-cyber-cyan/50 pl-6 italic mb-10">
              "Motivated Computer Science Engineering student with a strong interest in cybersecurity and full-stack web development. Passionate about building secure, user-friendly applications and continuously improving problem-solving skills."
            </p>

            <div className="flex flex-wrap gap-6 pt-4">
              <a href="#missions" className="btn-apex shadow-[0_0_20px_rgba(0,243,255,0.2)]">
                Explore Missions
              </a>
              <a href="#uplink" className="btn-outline">
                Secure Handshake
              </a>
            </div>

            <div className="flex gap-8 pt-8 opacity-40">
              <a href="https://www.linkedin.com/in/vignesh-murali-dharan/" target="_blank" rel="noreferrer" className="text-[9px] hover:text-cyber-cyan transition-all font-bold tracking-widest uppercase flex items-center gap-2">
                <FaLinkedin size={14} /> LINKEDIN_UPLINK
              </a>
              <a href="https://github.com/Vignesh7778" target="_blank" rel="noreferrer" className="text-[9px] hover:text-cyber-cyan transition-all font-bold tracking-widest uppercase flex items-center gap-2">
                <FaGithub size={14} /> GITHUB_REPO
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right Content - Profile Widget */}
        <div className="w-full lg:w-1/3 hidden lg:block">
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            <Tilt options={{ max: 15, scale: 1.02, perspective: 1000 }} className="hud-panel p-10 text-center border-t-2 border-t-cyber-purple laser-scan relative overflow-hidden">
              <span className="text-[9px] text-cyber-cyan/50 uppercase block mb-4 font-bold tracking-widest">Neural_Metadata_Verified</span>
              <div className="text-5xl font-black text-white font-cyber">8.98</div>
              <div className="text-[9px] text-gray-500 font-bold mt-2 uppercase tracking-widest">Aggregate_CGPA</div>
              
              <div className="mt-8 pt-6 border-t border-white/5 space-y-4">
                <div className="flex justify-between text-[9px] font-bold font-mono">
                  <span className="text-gray-600">STATUS:</span>
                  <span className="text-white">PRE_FINAL_YEAR_STUDENT</span>
                </div>
                <div className="flex justify-between text-[9px] font-bold font-mono">
                  <span className="text-gray-600">LEVEL:</span>
                  <span className="text-white">INTERN_VETERAN</span>
                </div>
              </div>
            </Tilt>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
