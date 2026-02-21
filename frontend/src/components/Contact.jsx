import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send, Zap } from "lucide-react";

const Contact = () => {
  const contactInfo = [
    { icon: MapPin, label: "Studio Location", val: "Address, City" },
    { icon: Phone, label: "Official WhatsApp", val: "+62 000 0000 0000" },
    { icon: Mail, label: "Business Inquiry", val: "hello@autovault.com" }
  ];

  return (
    <section id="contact" className="py-32 bg-[#050505] relative overflow-hidden">
      {/* Background Decor (Blurry Glow) */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-red-600/10 blur-[150px] rounded-full -translate-y-1/2" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20">
          
          {/* Left Side: Typography & Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-8xl font-black text-white italic uppercase leading-[0.8] mb-10 tracking-tighter">
              LET'S <br /> <span className="text-red-600">UPGRADE.</span>
            </h2>
            <p className="text-gray-500 font-bold uppercase text-[10px] tracking-[0.4em] mb-12 max-w-sm">
              Konsultasikan proyek modifikasi atau proteksi kendaraan Anda dengan tim ahli kami.
            </p>
            
            <div className="space-y-4">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex gap-6 items-center p-6 rounded-[2rem] bg-[#0a0a0a] border border-white/5 shadow-[8px_8px_16px_#000000,-4px_-4px_16px_rgba(255,255,255,0.02)]">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-red-600">
                    <item.icon size={20} />
                  </div>
                  <div>
                    <p className="text-[9px] font-black uppercase tracking-widest text-gray-600 mb-1">{item.label}</p>
                    <p className="text-white font-bold text-sm tracking-tight">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Glassmorphism Form */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[3rem] relative overflow-hidden group"
          >
            {/* Glossy Overlay Effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 -rotate-45 translate-x-16 -translate-y-16 group-hover:translate-x-10 transition-transform duration-700" />
            
            <div className="flex items-center gap-3 mb-10 text-red-600">
              <Zap size={18} fill="currentColor" />
              <h3 className="text-white font-black uppercase tracking-widest text-xs">Send Request</h3>
            </div>

            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid md:grid-cols-2 gap-4">
                <input 
                  type="text" 
                  placeholder="FULL NAME" 
                  className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl text-white text-[10px] font-black tracking-widest focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
                <input 
                  type="text" 
                  placeholder="CAR MODEL" 
                  className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl text-white text-[10px] font-black tracking-widest focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
                />
              </div>
              <input 
                type="email" 
                placeholder="EMAIL ADDRESS" 
                className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl text-white text-[10px] font-black tracking-widest focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase"
              />
              <textarea 
                rows="4" 
                placeholder="TELL US ABOUT THE PROJECT" 
                className="w-full p-5 bg-black/40 border border-white/10 rounded-2xl text-white text-[10px] font-black tracking-widest focus:border-red-600 outline-none transition-all placeholder:text-gray-700 uppercase resize-none"
              />
              
              <button className="w-full py-5 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] rounded-2xl flex items-center justify-center gap-3 hover:bg-red-600 hover:text-white transition-all duration-500">
                Submit Request <Send size={14} />
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;