import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

const skillsData = [
  { name: 'React.js / Next.js', val: 95 },
  { name: 'Node.js / Express', val: 88 },
  { name: 'Python / Java', val: 85 },
  { name: 'SQL / MongoDB', val: 90 },
  { name: 'Security Forensics', val: 94 }
];

const radarData = {
  labels: ['PROBLEM SOLVING', 'ANALYSIS', 'FULL-STACK', 'LOGIC', 'AGILITY', 'TEAMWORK'],
  datasets: [{
    data: [98, 92, 90, 85, 95, 88],
    backgroundColor: 'rgba(0, 243, 255, 0.1)',
    borderColor: '#00f3ff',
    borderWidth: 1,
    pointBackgroundColor: '#00f3ff'
  }]
};

const radarOptions = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    r: {
      grid: { color: 'rgba(255, 255, 255, 0.05)' },
      angleLines: { color: 'rgba(255, 255, 255, 0.1)' },
      ticks: { display: false },
      pointLabels: { color: '#00f3ff', font: { size: 9, weight: 'bold', family: 'JetBrains Mono' } }
    }
  },
  plugins: { legend: { display: false } }
};

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setIsVisible(true);
      }
    }, { threshold: 0.2 });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Radar Visualization */}
          <Tilt options={{ max: 5, scale: 1.01 }} className="hud-panel p-6 md:p-12 rounded-2xl">
            <h3 className="text-xs font-bold text-cyber-cyan uppercase tracking-[0.4em] mb-12 text-center font-mono">
              SKILL MATRIX
            </h3>
            <div className="h-[320px]">
              <Radar data={radarData} options={radarOptions} />
            </div>
          </Tilt>

          {/* Saturation Progress */}
          <Tilt options={{ max: 5, scale: 1.01 }} className="hud-panel p-6 md:p-12 rounded-2xl">
            <h3 className="text-xs font-bold text-cyber-purple uppercase tracking-[0.4em] mb-12 text-center font-mono">
              TECHNICAL PROFICIENCY
            </h3>
            <div className="space-y-8">
              {skillsData.map((s, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-[10px] font-bold text-gray-500 mb-1.5 uppercase font-mono">
                    <span>{s.name}</span>
                    <span className="text-cyber-cyan">{s.val}%</span>
                  </div>
                  <div className="h-1 bg-white/5 mt-3 overflow-hidden">
                    <motion.div 
                      className="h-full bg-cyber-cyan shadow-[0_0_10px_#00f3ff]"
                      initial={{ width: 0 }}
                      animate={isVisible ? { width: `${s.val}%` } : { width: 0 }}
                      transition={{ duration: 2, delay: idx * 0.1, ease: [0.1, 1, 0.1, 1] }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </Tilt>
        </div>

      </div>
    </section>
  );
};

export default SkillsSection;
