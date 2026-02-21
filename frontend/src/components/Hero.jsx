import { motion } from 'framer-motion';
import { ChevronRight, Zap } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] overflow-hidden flex flex-col lg:flex-row">
      
      {/* --- Left Content (Text) --- */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-6 md:px-16 pt-32 pb-10 lg:py-0 z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 mb-4"
        >
          <Zap size={14} className="text-red-600 fill-red-600" />
          <span className="text-red-600 font-black tracking-[0.4em] text-[10px] uppercase italic">
            Automotive Laboratory
          </span>
        </motion.div>

        <motion.h1 
          initial={{ x: -50, opacity: 0 }} 
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-5xl md:text-8xl lg:text-[8rem] font-black text-white leading-[0.9] lg:leading-[0.8] italic uppercase tracking-tighter mb-8"
        >
          CRAFTING <br /> 
          <span className="text-transparent stroke-text">ICONS.</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-gray-400 max-w-md text-[11px] md:text-base font-medium mb-10 leading-relaxed italic border-l-2 border-red-600 pl-6 uppercase tracking-wider"
        >
          Kami merekayasa ulang estetika kendaraan Anda menuju kesempurnaan mutlak dengan teknologi proteksi tercanggih.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <button className="px-8 py-4 bg-white text-black font-black uppercase text-[10px] tracking-[0.3em] hover:bg-red-600 hover:text-white transition-all flex items-center gap-3 active:scale-95 shadow-xl">
            Start Project <ChevronRight size={16} />
          </button>
        </motion.div>
      </div>

      {/* --- Right Content (Visual) --- */}
      <div className="w-full lg:w-1/2 relative flex flex-col lg:h-screen">
        
        {/* Gambar Container */}
        <div className="relative h-[40vh] md:h-[50vh] lg:h-full w-full overflow-hidden">
          {/* Gradient overlay - Di mobile lebih pekat di bawah agar transisi ke kartu mulus */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-transparent to-[#050505] lg:bg-gradient-to-r z-10" />
          
          <motion.img 
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.6 }}
            transition={{ duration: 1.5 }}
            src="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?w=1200" 
            alt="Performance Car" 
            className="w-full h-full object-cover grayscale"
          />
        </div>
        
        {/* Floating Card: Slim & Clean for Mobile */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
          className="relative lg:absolute bottom-6 lg:bottom-12 left-6 right-6 lg:left-[-80px] lg:right-auto z-20 
                     mt-[-40px] lg:mt-0 
                     p-5 md:p-8 backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[1.5rem] 
                     max-w-[260px] sm:max-w-xs lg:max-w-sm shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <p className="text-red-600 font-black text-[7px] uppercase tracking-[0.3em] mb-1">Featured Build</p>
              <h3 className="text-white font-black italic text-sm md:text-xl uppercase tracking-tighter leading-tight">
                The Onyx <br /> Edition.
              </h3>
            </div>
            <div className="bg-red-600/10 px-2 py-1 rounded-md border border-red-600/20">
              <span className="text-red-600 font-black text-[7px] uppercase italic">01/05</span>
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="h-[1px] w-full bg-white/10" />
            <p className="text-gray-400 text-[8px] md:text-[9px] font-bold uppercase tracking-[0.1em] leading-relaxed">
              Full PPF Stealth • Carbon Kit • Stage 2 Aero
            </p>
          </div>
        </motion.div>
      </div>

      <style>{`
        .stroke-text { 
          -webkit-text-stroke: 1px rgba(255,255,255,0.3); 
        }
        @media (min-width: 1024px) {
          .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.5); }
        }
      `}</style>
    </section>
  );
};

export default Hero;