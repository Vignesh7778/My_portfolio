import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, ShieldCheck, Trophy, Star } from 'lucide-react';

const certificates = [
  {
    title: "Full Stack Web Development Internship",
    issuer: "Adventure Technology Solutions",
    type: "Certification",
    icon: ShieldCheck,
    color: "theme-secondary"
  },
  {
    title: "Advanced Ethical Hacking",
    issuer: "GUVI",
    type: "Certification",
    icon: ShieldCheck,
    color: "theme-primary"
  },
  {
    title: "General Proficiency",
    issuer: "2nd Rank in First Year",
    type: "Achievement",
    icon: Trophy,
    color: "yellow-500"
  },
  {
    title: "Appreciation Letter",
    issuer: "Cyber Hygiene Practices Workshop",
    type: "Achievement",
    icon: Star,
    color: "theme-secondary"
  },
  {
    title: "Frontend Workshop",
    issuer: "Institution Level",
    type: "Certification",
    icon: CheckCircle2,
    color: "blue-400"
  }
];

const CertificatesSection = () => {
  return (
    <section id="credentials" className="py-24 relative bg-theme-bg/50">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-cyber text-3xl md:text-5xl font-bold text-theme-text mb-4">
            Verified <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">Certificates</span>
          </h2>
          <p className="font-mono text-theme-muted text-sm">MY ACHIEVEMENTS & CERTIFICATES</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className={`glass-card p-6 rounded-xl border border-white/5 hover:border-${cert.color}/50 group relative overflow-hidden transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] cursor-pointer hover:-translate-y-1`}
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
                 <cert.icon size={80} className={`text-${cert.color}`} />
              </div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className={`p-2 rounded-lg bg-${cert.color}/10 text-${cert.color} border border-${cert.color}/20`}>
                    <cert.icon size={24} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-theme-muted bg-white/5 px-2 py-1 rounded">
                    {cert.type}
                  </span>
                </div>

                <h3 className="font-bold text-theme-text text-lg mb-2 leading-tight">
                  {cert.title}
                </h3>
                <p className="text-sm text-theme-muted font-mono">
                  {cert.issuer}
                </p>
              </div>
              
              {/* Scanline hover effect */}
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent via-white/5 to-transparent -translate-y-full group-hover:animate-[scanline_1.5s_ease-in-out] pointer-events-none"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificatesSection;
