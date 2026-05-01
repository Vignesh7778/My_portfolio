import React, { useState } from 'react';

const ContactSection = () => {
  const [formState, setFormState] = useState('idle');

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('encrypting');
    
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    
    // Simulate or actually call web3forms
    fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    })
    .then(res => {
        if(res.status === 200) {
            setFormState('sent');
            e.target.reset();
        } else {
            setFormState('error');
        }
    })
    .catch(() => setFormState('error'))
    .finally(() => { setTimeout(() => setFormState('idle'), 5000); });
  };

  return (
    <section id="uplink" className="scroll-mt-32 px-6 lg:px-12 max-w-7xl mx-auto mb-48 relative z-10">
      <div className="hud-panel p-6 md:p-12 lg:p-24 border-t-4 border-t-cyber-cyan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter font-cyber">
              CONTACT ME
            </h2>
            <p className="text-gray-500 text-sm mb-12 font-mono leading-relaxed uppercase">
              Feel free to reach out. I am always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>
               
            <div className="space-y-10 text-[11px] font-mono text-cyber-cyan/70">
              <div className="flex flex-col gap-2 uppercase">
                <span className="text-gray-800 font-bold tracking-[0.4em]">Email Address</span>
                <span className="text-white text-base break-all">vigneshdevi22@gmail.com</span>
              </div>
              <div className="flex flex-col gap-2 uppercase">
                <span className="text-gray-800 font-bold tracking-[0.4em]">Phone Number</span>
                <span className="text-white text-base">+91 6374340277</span>
              </div>
            </div>
          </div>

          <form id="contact-form" className="space-y-6 font-mono" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="b48523cf-4e77-4832-a0bb-00a7e5418205" />
            <input type="hidden" name="subject" value="New Message from Portfolio Website" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name" 
                placeholder="FULL NAME" 
                required 
                className="bg-[rgba(0,10,15,0.7)] border border-white/10 text-white font-mono text-[0.8rem] p-[15px] outline-none w-full transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="EMAIL ADDRESS" 
                required 
                className="bg-[rgba(0,10,15,0.7)] border border-white/10 text-white font-mono text-[0.8rem] p-[15px] outline-none w-full transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
              />
            </div>
            
            <input 
              type="tel" 
              name="phone" 
              placeholder="PHONE NUMBER" 
              className="bg-[rgba(0,10,15,0.7)] border border-white/10 text-white font-mono text-[0.8rem] p-[15px] outline-none w-full transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
            />
            
            <textarea 
              name="message" 
              placeholder="YOUR MESSAGE" 
              rows="5" 
              required 
              className="bg-[rgba(0,10,15,0.7)] border border-white/10 text-white font-mono text-[0.8rem] p-[15px] outline-none w-full transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.1)] resize-none"
            ></textarea>
            
            <button type="submit" disabled={formState !== 'idle'} className="btn-apex w-full tracking-[0.6em] disabled:opacity-50 disabled:cursor-not-allowed">
              {formState === 'idle' ? 'Send Message' : formState === 'encrypting' ? 'Sending...' : formState === 'sent' ? 'Sent' : 'Error'}
            </button>
            
            <div className={`text-[10px] font-mono mt-6 uppercase text-center min-h-[1.5em] tracking-widest ${formState === 'sent' ? 'text-cyber-lime' : formState === 'error' ? 'text-cyber-purple' : 'text-cyber-cyan'}`}>
              {formState === 'encrypting' && 'STATUS: SENDING MESSAGE...'}
              {formState === 'sent' && 'STATUS: MESSAGE SENT SUCCESSFULLY.'}
              {formState === 'error' && 'STATUS: FAILED TO SEND. PLEASE TRY AGAIN.'}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
