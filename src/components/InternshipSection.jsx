import React from 'react';
import { motion } from 'framer-motion';

const InternshipSection = () => {
  return (
    <section id="experience" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter font-cyber">
            WORK EXPERIENCE
          </h2>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        <div className="hud-panel p-6 md:p-10 border-l-4 border-l-cyber-lime group">
          <div className="flex flex-col md:flex-row justify-between items-start mb-10 gap-6">
            <div>
              <span className="text-[9px] text-cyber-lime font-bold uppercase tracking-widest font-mono">
                Experience Timeline
              </span>
              <h3 className="text-2xl font-bold text-white uppercase mt-1 font-cyber">
                Full Stack Web Development Intern
              </h3>
              <div className="text-cyber-cyan font-bold text-sm mt-1 uppercase tracking-tighter font-mono">
                Adventure Technology Solutions Pvt Ltd
              </div>
            </div>
            <div className="text-right font-mono">
              <div className="text-xs font-bold text-white px-4 py-1 border border-white/10 bg-white/5 inline-block">
                02/06/2025 – 02/07/2025
              </div>
              <div className="text-[9px] text-gray-600 uppercase mt-2">
                Tambaram, Chennai
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h4 className="text-[10px] font-bold text-gray-500 mb-6 uppercase tracking-widest border-b border-white/5 pb-2 font-mono">
                Key Responsibilities
              </h4>
              <ul className="space-y-4 font-mono">
                <li className="flex items-start gap-4 text-[11px] text-gray-300 uppercase leading-relaxed">
                  <span className="text-cyber-lime mt-1">▶</span> Engineered responsive web interfaces using React.js and modern CSS patterns.
                </li>
                <li className="flex items-start gap-4 text-[11px] text-gray-300 uppercase leading-relaxed">
                  <span className="text-cyber-lime mt-1">▶</span> Assisted in backend integration tasks, bridging UI with data layers.
                </li>
                <li className="flex items-start gap-4 text-[11px] text-gray-300 uppercase leading-relaxed">
                  <span className="text-cyber-lime mt-1">▶</span> Gained hands-on mastery over HTML5, CSS3, JavaScript, and Full-Stack workflows.
                </li>
              </ul>
            </div>
            
            <div className="bg-[rgba(10,12,18,0.98)] p-6 border border-white/5">
              <h4 className="text-[10px] font-bold text-white mb-4 uppercase font-mono">
                Technologies Used
              </h4>
              <div className="flex flex-wrap gap-2 font-mono">
                <span className="px-2 py-1 border border-cyber-cyan/30 text-[8px] text-cyber-cyan">REACT.JS</span>
                <span className="px-2 py-1 border border-cyber-cyan/30 text-[8px] text-cyber-cyan">NODE.JS</span>
                <span className="px-2 py-1 border border-cyber-cyan/30 text-[8px] text-cyber-cyan">JAVASCRIPT</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InternshipSection;
