import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';

const ProjectsSection = () => {
  return (
    <section id="missions" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter font-cyber">
            MY PROJECTS
          </h2>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          
          {/* CyberSec EduSuite */}
          <Tilt options={{ max: 10, scale: 1.02 }} className="hud-panel group laser-scan overflow-hidden">
            <div className="p-6 md:p-10 relative z-10">
              <div className="flex justify-between text-[9px] mb-8 font-bold uppercase font-mono">
                <span className="text-cyber-purple border border-cyber-purple/50 px-2 py-0.5">PROJECT</span>
                <span className="text-gray-600">status: completed</span>
              </div>
              
              <h3 className="font-cyber text-2xl font-black text-white mb-4 group-hover:text-cyber-cyan transition uppercase">
                CyberSec EduSuite
              </h3>
              
              <p className="font-mono text-xs text-gray-400 leading-relaxed mb-10 h-16">
                A Linux-based educational cybersecurity simulation tool designed to teach cybersecurity concepts through safe, containerized labs.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8 font-mono">
                <span className="px-3 py-1 bg-black border border-white/5 text-[9px] text-white">LINUX</span>
                <span className="px-3 py-1 bg-black border border-white/5 text-[9px] text-white">SECURITY_LABS</span>
              </div>

              <a href="https://www.linkedin.com/posts/vignesh-m-b4a5ba300_cybersecurity-ethicalhacking-linux-activity-7427705005240983553-rNXK" target="_blank" rel="noreferrer" className="btn-apex !text-[9px] !px-4 !py-2 inline-block">
                View Project
              </a>
            </div>
          </Tilt>

          {/* Mehndi Creations */}
          <Tilt options={{ max: 10, scale: 1.02 }} className="hud-panel group laser-scan overflow-hidden">
            <div className="p-6 md:p-10 relative z-10">
              <div className="flex justify-between text-[9px] mb-8 font-bold uppercase font-mono">
                <span className="text-cyber-cyan border border-cyber-cyan/50 px-2 py-0.5">PROJECT</span>
                <span className="text-gray-600">status: live</span>
              </div>
              
              <h3 className="font-cyber text-2xl font-black text-white mb-4 group-hover:text-cyber-purple transition uppercase">
                Mehndi Creations
              </h3>
              
              <p className="font-mono text-xs text-gray-400 leading-relaxed mb-10 h-16">
                High-performance multi-page artist deployment with automated gallery indexing and client booking protocols.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8 font-mono">
                <span className="px-3 py-1 bg-black border border-white/5 text-[9px] text-white">BOOTSTRAP</span>
                <span className="px-3 py-1 bg-black border border-white/5 text-[9px] text-white">JS_ES6</span>
              </div>

              <a href="https://vignesh7778.github.io/Gomathi_mehendi_creations/" target="_blank" rel="noreferrer" className="btn-apex !text-[9px] !px-4 !py-2 inline-block">
                View Live Site
              </a>
            </div>
          </Tilt>

        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
