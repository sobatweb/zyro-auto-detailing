import { motion } from "framer-motion";
import { ShieldCheck, Zap, Microscope, Droplets } from "lucide-react";

const About = () => {
  const stats = [
    { label: "Cars Perfected", val: "500+" },
    { label: "PPF Installed", val: "12k sqft" },
    { label: "Detailing Hours", val: "8000+" }
  ];

  return (
    <section id="about" className="bg-[#050505] py-20 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -30 }} 
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-600 font-black tracking-[0.5em] text-[10px] uppercase mb-4 block italic">The Science of Shine</span>
            <h2 className="text-5xl md:text-8xl font-black text-white italic uppercase leading-[0.85] md:leading-[0.8] mb-10 tracking-tighter">
              WHERE <br /> <span className="text-red-600">ART</span> MEETS <br /> 
              <span className="text-transparent stroke-text">LABORATORY.</span>
            </h2>
            
            <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest leading-relaxed mb-12 max-w-lg border-l-2 border-red-600 pl-6">
              Kami menggabungkan pencahayaan inspeksi spektrum luas dan teknik pemolesan multi-tahap untuk hasil yang melampaui standar pabrik.
            </p>

            {/* Stats Grid: Mobile 2 columns, Desktop 3 columns */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-5 bg-white/5 rounded-[2rem] border border-white/5 shadow-xl">
                  <div className="text-xl md:text-2xl font-black text-white italic">{s.val}</div>
                  <div className="text-[7px] md:text-[8px] text-gray-500 font-black uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: Microscope, t: "Microscopic Precision", d: "Deteksi goresan level mikron." },
                { icon: Droplets, t: "Hydrophobic Lab", d: "Teknologi penolak air ekstrem." }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start bg-white/5 p-4 rounded-2xl md:bg-transparent md:p-0">
                  <item.icon className="text-red-600 shrink-0" size={20} />
                  <div>
                    <h4 className="text-white font-black text-[10px] uppercase mb-1">{item.t}</h4>
                    <p className="text-gray-500 text-[9px] font-bold uppercase leading-tight">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Image Container */}
          <div className="relative group mt-10 lg:mt-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-transparent blur-2xl opacity-10" />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} 
              whileInView={{ opacity: 1, scale: 1 }}
              className="relative z-10 rounded-[2.5rem] md:rounded-[3.rem] overflow-hidden border border-white/10"
            >
              <img 
                src="https://images.unsplash.com/photo-1607860108855-64acf2078ed9?w=800" 
                alt="Detailing Lab" 
                className="w-full transition-all duration-1000 aspect-square md:aspect-auto object-cover" 
              />
              <div className="absolute bottom-6 left-6 md:bottom-10 md:left-10">
                 <div className="flex items-center gap-2 bg-red-600 px-4 py-2 rounded-full text-white text-[9px] md:text-[10px] font-black uppercase italic tracking-widest">
                   <Zap size={12} fill="white" /> Master Detailer on Duty
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <style>{`.stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }`}</style>
    </section>
  );
};

export default About;