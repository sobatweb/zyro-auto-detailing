import { motion } from "framer-motion";
import { ShieldCheck, ArrowRight } from "lucide-react";

const Comparison = () => {
  return (
    <section id="comparison" className="py-20 md:py-32 bg-[#050505]">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          
          {/* Image Section */}
          <div className="order-2 lg:order-1 relative">
             <div className="relative aspect-[4/5] md:aspect-video lg:aspect-square rounded-[2.5rem] overflow-hidden border border-white/10 group">
                <img 
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=800" 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" 
                  alt="Comparison"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                
                {/* Floating Card: Dibuat lebih kecil di mobile & ditaruh di pojok */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  className="absolute bottom-6 left-6 right-6 md:right-auto bg-black/60 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10"
                >
                   <div className="flex items-center gap-2 mb-2">
                      <ShieldCheck className="text-red-600" size={14} />
                      <span className="text-gray-500 font-black text-[8px] uppercase tracking-widest">Lab Result</span>
                   </div>
                   <div className="flex items-baseline gap-2">
                     <span className="text-4xl font-black text-white italic">+32%</span>
                     <span className="text-red-600 font-black text-[10px] uppercase">Gloss</span>
                   </div>
                </motion.div>
             </div>
          </div>

          {/* Text Section */}
          <div className="order-1 lg:order-2">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }}>
              <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase leading-[0.8] mb-8 tracking-tighter">
                THE <span className="text-red-600">CLARITY</span> <br /> 
                <span className="text-transparent stroke-text">DIFFERENCE.</span>
              </h2>
              <p className="text-gray-400 text-xs md:text-sm font-bold uppercase tracking-widest mb-10 max-w-md italic border-l-2 border-red-600 pl-6">
                Kami mengincar kedalaman warna (depth) dan kejernihan pantulan yang tidak bisa dicapai salon mobil biasa.
              </p>
              
              <div className="grid grid-cols-1 gap-4">
                {['99.9% Swirl Removal', 'Industrial Self-Healing', 'Chemical Resistance'].map((text, idx) => (
                  <div key={idx} className="flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                    <div className="w-2 h-2 bg-red-600 rotate-45" />
                    <span className="text-white font-black uppercase text-[10px] tracking-widest italic">{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

        </div>
      </div>
      <style>{`.stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }`}</style>
    </section>
  );
};

export default Comparison;