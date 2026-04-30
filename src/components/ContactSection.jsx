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
      <div className="hud-panel p-12 md:p-24 border-t-4 border-t-cyber-cyan">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
          
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 uppercase tracking-tighter font-cyber">
              SECURE_UPLINK
            </h2>
            <p className="text-gray-500 text-sm mb-12 font-mono leading-relaxed uppercase">
              Initiating biometric handshake. All transmissions are routed via end-to-end encrypted tunnels for direct admin review.
            </p>
            
            <div className="space-y-10 text-[11px] font-mono text-cyber-cyan/70">
              <div className="flex flex-col gap-2 uppercase">
                <span className="text-gray-800 font-bold tracking-[0.4em]">Node_Email</span>
                <span className="text-white text-base">vigneshdevi22@gmail.com</span>
              </div>
              <div className="flex flex-col gap-2 uppercase">
                <span className="text-gray-800 font-bold tracking-[0.4em]">Comm_Channel</span>
                <span className="text-white text-base">+91 6374340277</span>
              </div>
            </div>
          </div>

          <form id="contact-form" className="space-y-6 font-mono" onSubmit={handleSubmit}>
            <input type="hidden" name="access_key" value="706b9412-7844-4e0f-a60f-1f6f60dde661" />
            <input type="hidden" name="subject" value="Vignesh_OS: New Message Detected" />
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                name="name" 
                placeholder="FULL_NAME" 
                required 
                className="bg-[rgba(0,10,15,0.7)] border border-white/10 text-white font-mono text-[0.8rem] p-[15px] outline-none w-full transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
              />
              <input 
                type="email" 
                name="email" 
                placeholder="EMAIL_SOURCE" 
                required 
                className="bg-[rgba(0,10,15,0.7)] border border-white/10 text-white font-mono text-[0.8rem] p-[15px] outline-none w-full transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
              />
            </div>
            
            <input 
              type="tel" 
              name="phone" 
              placeholder="COMM_PHONE" 
              className="bg-[rgba(0,10,15,0.7)] border border-white/10 text-white font-mono text-[0.8rem] p-[15px] outline-none w-full transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.1)]"
            />
            
            <textarea 
              name="message" 
              placeholder="PACKET_PAYLOAD" 
              rows="5" 
              required 
              className="bg-[rgba(0,10,15,0.7)] border border-white/10 text-white font-mono text-[0.8rem] p-[15px] outline-none w-full transition-all duration-300 focus:border-cyber-cyan focus:shadow-[0_0_15px_rgba(0,243,255,0.1)] resize-none"
            ></textarea>
            
            <button type="submit" disabled={formState !== 'idle'} className="btn-apex w-full tracking-[0.6em] disabled:opacity-50 disabled:cursor-not-allowed">
              {formState === 'idle' ? 'Send Message' : formState === 'encrypting' ? 'Encrypting...' : formState === 'sent' ? 'Sent' : 'Error'}
            </button>
            
            <div className={`text-[10px] font-mono mt-6 uppercase text-center min-h-[1.5em] tracking-widest ${formState === 'sent' ? 'text-cyber-lime' : formState === 'error' ? 'text-cyber-purple' : 'text-cyber-cyan'}`}>
              {formState === 'encrypting' && 'STATUS: PACKET_ENCRYPTING...'}
              {formState === 'sent' && 'STATUS: UPLINK_SYNC_COMPLETE.'}
              {formState === 'error' && 'STATUS: SIGNAL_LOST_RETRY.'}
            </div>
          </form>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
