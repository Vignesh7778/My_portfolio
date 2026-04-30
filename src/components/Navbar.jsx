import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const triggerCVExtraction = () => {
    // Basic download link for Resume
    window.open('/VIGNESH_M_resume.pdf', '_blank');
  };

  return (
    <nav className={`fixed w-full z-50 border-b transition-all duration-300 ${scrolled ? 'bg-black/90 border-white/5 backdrop-blur-lg' : 'bg-transparent border-transparent'}`}>
      <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-20">
        
        <div className="flex items-center gap-4 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
          <div className="w-10 h-10 border border-cyber-cyan/30 flex items-center justify-center font-bold text-cyber-cyan bg-cyber-cyan/5 font-cyber">V</div>
          <div className="hidden sm:block">
            <div className="text-[11px] font-bold text-white uppercase tracking-widest leading-none font-mono">VIGNESH M</div>
            <div className="text-[7px] text-cyber-cyan uppercase opacity-60 mt-1 font-mono">Master_Apex_Admin</div>
          </div>
        </div>
        
        <div className="hidden md:flex space-x-8 text-[10px] font-black tracking-[0.2em] uppercase font-cyber">
          <a href="#hero" className="hover:text-cyber-cyan transition-all cursor-pointer">CORE</a>
          <a href="#skills" className="hover:text-cyber-cyan transition-all cursor-pointer">NEURAL</a>
          <a href="#missions" className="hover:text-cyber-cyan transition-all cursor-pointer">MISSIONS</a>
          <a href="#uplink" className="hover:text-cyber-cyan transition-all cursor-pointer">UPLINK</a>
        </div>
        
        <div className="flex items-center gap-4">
          <button onClick={triggerCVExtraction} className="btn-apex !px-5 !py-2 !text-[9px]">DOWNLOAD_RESUME.sh</button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
