import { motion } from 'framer-motion';
import { ChevronRight, Sparkles, ShieldCheck, Star, Award } from 'lucide-react';

import BgImage from '../assets/gallery/bg.jpeg';
// Import logo sesuai struktur folder src kamu
import LogoImg from '../assets/logo/logo1.webp';

// Import gambar untuk carousel 
import CarouselImg4 from '../assets/logo/logo-t/4.png';
import CarouselImg5 from '../assets/logo/logo-t/5.png';
import CarouselImg6 from '../assets/logo/logo-t/6.png';
import CarouselImg7 from '../assets/logo/logo-t/7.png';
import CarouselImg9 from '../assets/logo/logo-t/9.png';
import CarouselImg10 from '../assets/logo/logo-t/10.png';
import CarouselImg11 from '../assets/logo/logo-t/11.png';

const Hero = () => {
  const carouselImages = [CarouselImg4, CarouselImg5, CarouselImg6, CarouselImg7, CarouselImg9, CarouselImg10, CarouselImg11];
  const services = ['Coating Package', 'Interior Series', 'Exterior Series', 'Body Work'];

  return (
    // Tambahkan h-auto agar tidak memaksakan tinggi saat konten menumpuk di mobile
    <section className="relative min-h-screen h-auto bg-[#000000] overflow-hidden flex flex-col lg:flex-row">

      {/* --- Global Background Image --- */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 bg-black/80 lg:bg-black/70 z-10" />
        <motion.img
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ duration: 1.5 }}
          src={BgImage}
          alt="Auto Detailing Background"
          className="w-full h-full object-cover grayscale object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-black via-black/50 to-transparent z-10" />
      </div>

      {/* --- Left Content (Logo & Floating Card) --- */}
      {/* Padding disesuaikan untuk mobile agar tidak terlalu memakan layar */}
      <div className="w-full lg:w-1/2 flex justify-center items-center px-6 md:px-12 lg:px-16 pt-28 lg:pt-0 pb-16 lg:pb-40 z-10 min-h-[50vh] lg:min-h-screen">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-[280px] sm:max-w-xs md:max-w-sm lg:max-w-md relative flex justify-center"
        >
          <img
            src={LogoImg}
            alt="Hero Visual"
            className="w-full h-auto object-contain drop-shadow-[0_0_30px_rgba(255,154,217,0.3)] pb-16 lg:pb-12"
          />

          {/* --- Floating Card --- */}
          {/* Posisi disesuaikan agar selalu berada di bawah logo tanpa menabrak konten lain */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute bottom-0 lg:bottom-[10px] z-20 p-4 md:p-6 backdrop-blur-2xl bg-black/50 border border-white/10 rounded-[1.25rem] w-[280px] sm:w-[300px] lg:w-[340px] shadow-[0_30px_60px_rgba(0,0,0,0.8)]"
          >
            <div className="flex justify-between items-start mb-3">
              <div className="w-full text-center">
                <p className="text-magenta-300 font-garet font-black text-[8px] md:text-[9px] uppercase tracking-[0.3em] mb-1">Pengalaman Profesional</p>
                <h3 className="text-white font-garet font-black italic text-base md:text-xl uppercase tracking-tighter leading-tight">
                  Lebih dari <br /> <span className="font-horizon text-2xl">15 Tahun.</span>
                </h3>
              </div>
            </div>
            <div className="space-y-2">
              <div className="h-[1px] w-full bg-white/10" />
              <p className="text-gray-400 font-garet text-[8px] md:text-[9px] font-bold uppercase tracking-[0.2em] leading-relaxed text-center">
                Otomotif Mobil • Body Repair • Repaint
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* --- Right Content (Text & Info) --- */}
      {/* Diubah menjadi justify-center & text-center di mobile, text-right di desktop */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-end text-center lg:text-right px-4 sm:px-6 md:px-12 lg:px-16 pb-48 lg:pb-48 pt-8 lg:pt-24 z-10 min-h-[50vh] lg:min-h-screen">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex items-center justify-center lg:justify-end gap-2 mb-4"
        >
          <Sparkles size={14} className="text-magenta-300" />
          <span className="text-magenta-300 font-garet font-black tracking-[0.3em] text-[10px] md:text-[11px] uppercase italic">
            Auto Detailing
          </span>
        </motion.div>

        <motion.h1
          initial={{ x: 40, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-5xl sm:text-6xl lg:text-[7rem] font-horizon text-white leading-[0.9] uppercase mb-6"
        >
          SHINE <br />
          <span className="text-magenta-300 font-horizon-outline stroke-text">AS YOU LIKE</span>
        </motion.h1>

        {/* Tags Services - rata tengah di mobile */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center lg:justify-end gap-2 md:gap-3 mb-8"
        >
          {services.map((service, index) => (
            <span
              key={index}
              className="px-3 md:px-4 py-2 border border-white/10 bg-white/5 rounded-full text-[9px] sm:text-[10px] md:text-xs font-bold text-gray-300 uppercase tracking-widest backdrop-blur-sm"
            >
              {service}
            </span>
          ))}
        </motion.div>

        {/* Feature Cards - Gunakan Grid agar proporsional di mobile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col items-center lg:items-end gap-8 md:gap-10 mt-6 w-full"
        >
          <div className="grid grid-cols-3 md:flex md:flex-wrap justify-center lg:justify-end gap-2 sm:gap-4 md:gap-6 w-full max-w-md lg:max-w-none">
            
            <div className="flex flex-col items-center justify-start text-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-5 w-full md:w-[130px] lg:w-[140px] hover:bg-white/10 transition-colors">
              <Star size={18} className="text-magenta-300 mb-1" />
              <span className="text-white font-garet font-black text-[9px] sm:text-[11px] md:text-xs uppercase tracking-widest italic leading-none mt-1">QUALITY</span>
              <span className="text-gray-400 font-garet text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-wider font-bold">Over Money</span>
            </div>

            <div className="flex flex-col items-center justify-start text-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-5 w-full md:w-[130px] lg:w-[140px] hover:bg-white/10 transition-colors">
              <ShieldCheck size={18} className="text-magenta-300 mb-1" />
              <span className="text-white font-garet font-black text-[9px] sm:text-[11px] md:text-xs uppercase tracking-widest italic leading-none mt-1">TRUST</span>
              <span className="text-gray-400 font-garet text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-wider font-bold">Is Our Reward</span>
            </div>

            <div className="flex flex-col items-center justify-start text-center gap-2 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl md:rounded-2xl p-2 sm:p-4 md:p-5 w-full md:w-[130px] lg:w-[140px] hover:bg-white/10 transition-colors">
              <Award size={18} className="text-magenta-300 mb-1" />
              <span className="text-white font-garet font-black text-[9px] sm:text-[11px] md:text-xs uppercase tracking-widest italic leading-none mt-1">EXCEED</span>
              <span className="text-gray-400 font-garet text-[7px] sm:text-[8px] md:text-[9px] uppercase tracking-wider font-bold">Expectations</span>
            </div>

          </div>
        </motion.div>
      </div>

      {/* --- Carousel Marquee (Z-Index Tinggi, Background Gelap) --- */}
      {/* Tambahkan z-50 agar selalu di atas konten yang ter-scroll */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden bg-black/90 py-6 md:py-10 backdrop-blur-xl z-50 border-t border-white/10 flex items-center pt-12 md:pt-5">
        <div className="flex w-max animate-marquee gap-8 items-center">
          {[...carouselImages, ...carouselImages, ...carouselImages, ...carouselImages].map((img, i) => (
            <div key={i} className="flex-shrink-0 w-28 md:w-44 lg:w-52 flex justify-center items-center px-4">
              <img
                src={img}
                alt={`Brand ${i}`}
                className="h-24 md:h-22 lg:h-24 w-auto object-contain opacity-100 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      <style>{`
        .stroke-text { 
           -webkit-text-stroke: 1.5px rgba(255,255,255,0.3); 
        }
        @media (min-width: 1024px) {
          .stroke-text { -webkit-text-stroke: 2px rgba(255,255,255,0.5); }
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); } 
        }
        .animate-marquee {        
          animation: marquee 40s linear infinite; 
        }
        .animate-marquee:hover {        
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Hero;