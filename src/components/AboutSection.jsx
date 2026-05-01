import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Shield, Coffee, Code2, BrainCircuit } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter font-cyber">
            ABOUT ME
          </h2>
          <div className="h-px flex-1 bg-white/5"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <Tilt options={{ max: 15, scale: 1.05 }} className="hud-panel p-6 md:p-8">
            <Shield className="text-cyber-cyan mb-4" size={32} />
            <h4 className="text-[11px] font-bold text-white mb-2 uppercase font-cyber">Secure Development</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed uppercase font-mono">
              Focused on ethical hacking foundations and defensive coding architectures from day one.
            </p>
          </Tilt>

          <Tilt options={{ max: 15, scale: 1.05 }} className="hud-panel p-6 md:p-8">
            <Coffee className="text-cyber-cyan mb-4" size={32} />
            <h4 className="text-[11px] font-bold text-white mb-2 uppercase font-cyber">Java Engineering</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed uppercase font-mono">
              Strong problem-solving capability with Java, C, and Python backends.
            </p>
          </Tilt>

          <Tilt options={{ max: 15, scale: 1.05 }} className="hud-panel p-6 md:p-8">
            <Code2 className="text-cyber-cyan mb-4" size={32} />
            <h4 className="text-[11px] font-bold text-white mb-2 uppercase font-cyber">Full-Stack Web Dev</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed uppercase font-mono">
              Skilled in React.js, Node, and MongoDB basics for high-def responsive UI.
            </p>
          </Tilt>

          <Tilt options={{ max: 15, scale: 1.05 }} className="hud-panel p-6 md:p-8">
            <BrainCircuit className="text-cyber-cyan mb-4" size={32} />
            <h4 className="text-[11px] font-bold text-white mb-2 uppercase font-cyber">Agile Methodology</h4>
            <p className="text-[9px] text-gray-500 leading-relaxed uppercase font-mono">
              Continuous learner with growth mindset, proven in internship environments.
            </p>
          </Tilt>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
