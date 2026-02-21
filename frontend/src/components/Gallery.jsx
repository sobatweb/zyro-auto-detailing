import { motion } from "framer-motion";
import { Camera, LayoutGrid } from "lucide-react";

const Gallery = () => {
  const images = [
    "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=800",
    "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800",
    "https://images.unsplash.com/photo-1580273916550-e323be2ae537?w=800",
    "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=800",
    "https://images.unsplash.com/photo-1502877338535-766e1452684a?w=800"
  ];

  return (
    <section id="gallery" className="py-32 bg-[#050505] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Gallery Title Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <div className="h-[2px] w-12 bg-red-600" />
            <span className="text-red-600 font-black uppercase text-[10px] tracking-[0.5em]">The Showcase</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl font-black text-white italic uppercase leading-[0.8] tracking-tighter"
            >
              VISUAL <br /> <span className="text-transparent stroke-text">ARCHIVE.</span>
            </motion.h2>
            
            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em] max-w-xs lg:text-right border-r-2 border-red-600 pr-6 lg:border-r-0 lg:border-l-2 lg:pl-6">
              Dokumentasi hasil kurasi dari setiap mahakarya yang telah kami kerjakan.
            </p>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((url, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: i * 0.1 }}
              className="relative group overflow-hidden rounded-[2.5rem] border border-white/5 bg-[#0A0A0A]"
            >
              {/* Image Overlay on Hover */}
              <div className="absolute inset-0 bg-red-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10" />
              
              <img 
                src={url} 
                alt={`AutoVault Project ${i}`} 
                className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700 ease-in-out" 
              />
              
              {/* Badge Glassmorphism */}
              <div className="absolute top-6 right-6 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="px-4 py-2 backdrop-blur-md bg-black/40 border border-white/10 rounded-full">
                   <span className="text-white font-black text-[8px] uppercase tracking-widest italic">Full Detail</span>
                </div>
              </div>

              {/* Bottom Info */}
              <div className="absolute bottom-0 left-0 right-0 p-8 z-20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-black to-transparent">
                <p className="text-red-600 font-black text-[9px] uppercase tracking-[0.4em] mb-1">Vault 0{i+1}</p>
                <h4 className="text-white font-black italic text-lg uppercase tracking-tighter">Hyper-Gloss Finish</h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`.stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }`}</style>
    </section>
  );
};

export default Gallery;