import React from 'react';
import { Tilt } from 'react-tilt';
import { Shield, Code, Award, Activity } from 'lucide-react';

const EducationSection = () => {
  return (
    <section id="education" className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="flex items-center gap-10 mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter font-cyber">
            THE_VAULT
          </h2>
          <div className="h-px flex-1 bg-white/10"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <Tilt options={{ max: 15, scale: 1.05 }}>
            <a href="https://www.guvi.in/share-certificate/9W63z22U323T6781rn" target="_blank" rel="noreferrer" className="hud-panel p-10 flex flex-col items-center text-center group h-full block">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <Shield className="text-cyber-cyan opacity-50 group-hover:opacity-100" size={32} />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1 font-cyber">Ethical Hacking</h4>
              <p className="text-[9px] text-gray-600 uppercase font-mono tracking-tighter">GUVI_CERTIFIED_PROTOCOL</p>
            </a>
          </Tilt>

          <Tilt options={{ max: 15, scale: 1.05 }}>
            <a href="https://www.linkedin.com/posts/vignesh-m-b4a5ba300_successfully-completed-a-full-stack-web-development-activity-7351233165304176640-RgQm/?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEz5wOoBVVDLAbdIPDaqOLdkDjJINfZ_WCQ" target="_blank" rel="noreferrer" className="hud-panel p-10 flex flex-col items-center text-center group h-full block">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <Code className="text-cyber-cyan opacity-50 group-hover:opacity-100" size={32} />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1 font-cyber">Full Stack Node</h4>
              <p className="text-[9px] text-gray-600 uppercase font-mono tracking-tighter">INTERNSHIP_CREDENTIAL</p>
            </a>
          </Tilt>

          <Tilt options={{ max: 15, scale: 1.05 }}>
            <a href="https://ibb.co/mrF5qBRk" target="_blank" rel="noreferrer" className="hud-panel p-10 flex flex-col items-center text-center group h-full block">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <Award className="text-cyber-cyan opacity-50 group-hover:opacity-100" size={32} />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1 font-cyber">Proficiency Rank 2</h4>
              <p className="text-[9px] text-gray-600 uppercase font-mono tracking-tighter">ACADEMIC_REGISTRY_HONOR</p>
            </a>
          </Tilt>

          <Tilt options={{ max: 15, scale: 1.05 }}>
            <a href="https://www.linkedin.com/posts/vignesh-m-b4a5ba300_cybersecurity-cyberhygiene-workshop-activity-7384221066644107265-qScE/?utm_source=share&utm_medium=member_android&rcm=ACoAAEz5wOoBVVDLAbdIPDaqOLdkDjJINfZ_WCQ" target="_blank" rel="noreferrer" className="hud-panel p-10 flex flex-col items-center text-center group h-full block">
              <div className="w-16 h-16 border border-white/10 flex items-center justify-center mb-8 grayscale group-hover:grayscale-0 transition-all group-hover:border-cyber-cyan group-hover:shadow-[0_0_15px_rgba(0,243,255,0.2)]">
                <Activity className="text-cyber-cyan opacity-50 group-hover:opacity-100" size={32} />
              </div>
              <h4 className="text-xs font-bold text-white uppercase tracking-widest mb-1 font-cyber">Cyber Hygiene</h4>
              <p className="text-[9px] text-gray-600 uppercase font-mono tracking-tighter">WORKSHOP_ACTIVITY_LOG</p>
            </a>
          </Tilt>

        </div>
      </div>
    </section>
  );
};

export default EducationSection;
