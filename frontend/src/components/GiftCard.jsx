import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Quote, PenTool, MousePointerClick } from 'lucide-react';

const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="owner-note" className="py-8 md:py-20 bg-[#000000] overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Header Section */}
      <div className="container mx-auto px-6 text-center mb-6 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <span className="text-[#ff9ad9] font-signature uppercase text-xl md:text-3xl tracking-[0.5em] mb-2 md:mb-4">Personal Memo</span>
          <div className="h-[2px] w-8 bg-[#ff9ad9] mb-3 md:mb-4" />
          <h2 className="text-3xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-tight">
            TO OUR BELOVED<br /> <span className="text-[#ff9ad9] font-horizon-outline stroke-text">CUSTOMER.</span>
          </h2>
        </motion.div>
      </div>

     
      <div className="container mx-auto px-4 md:px-10 flex justify-center items-center">
        <div className="relative w-full max-w-5xl perspective-1500">
          
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            animate={{ 
              rotateY: isOpen ? 180 : 0,
              scale: isOpen ? 1 : 0.98 
            }}
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.2 }}
            className="w-full relative preserve-3d cursor-pointer group h-auto"
          >
            <div 
              className="absolute inset-0 backface-hidden bg-[#0a0a0a] border border-white/10 rounded-[1rem] md:rounded-[1.5rem] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(255,154,217,0.1)] group-hover:shadow-[0_0_50px_rgba(255,154,217,0.2)] z-20"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff9ad9]/10 via-transparent to-transparent opacity-60" />
              
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="z-10 flex flex-col items-center px-6 text-center"
              >
                <div className="relative mb-4 md:mb-6">
                  <div className="absolute inset-0 bg-[#ff9ad9] rounded-full blur-2xl opacity-20 animate-pulse" />
                  <Mail className="text-[#ff9ad9] relative z-10" size={50} md:size={64} strokeWidth={0.5} />
                </div>
                
                <span className="text-white font-black italic uppercase tracking-[0.4em] text-[10px] md:text-sm group-hover:text-[#ff9ad9] transition-colors">
                  Tap to Open Message
                </span>
              </motion.div>
            </div>

            {/* --- BACK: THE LETTER (Relative agar div parent melebar mengikuti teks) --- */}
            <div 
              className="relative backface-hidden rotate-y-180 bg-[#111111] border border-[#ff9ad9]/30 rounded-[1rem] md:rounded-[1.5rem] shadow-[0_0_60px_rgba(255,154,217,0.15)] flex flex-col w-full"
            >
              <div className="relative w-full p-6 md:p-12 lg:p-16 flex flex-col justify-between">
                {/* Background Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#ff9ad9]/5 blur-[100px] rounded-full pointer-events-none" />

                {/* Header */}
                <div className="flex flex-col items-center gap-1 md:gap-2 z-10 mb-8">
                  <PenTool size={16} className="text-[#ff9ad9]" />
                  <span className="text-gray-500 font-bold text-[8px] md:text-[10px] uppercase tracking-[0.3em]">Zyro Auto Detailing</span>
                </div>

                {/* Body Content */}
                <div className="flex flex-col items-center justify-center z-10 w-full max-w-4xl mx-auto flex-grow py-4">
                  <Quote className="text-[#ff9ad9]/10 mb-4 md:mb-6" size={30} md:size={50} />
                  
                  <div className="space-y-6 text-center">
                  
                    <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed italic">
                      Terima kasih sudah mempercayakan kendaraan Anda kepada Zyro Autodetailing. Bagi kami, setiap mobil yang datang bukan sekadar objek pengerjaan, melainkan simbol nilai dan kebanggaan yang layak dirawat dengan standar terbaik.
                    </p>
                    <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed italic">
                      Zyro terinspirasi dari filosofi kata zero yang berarti titik awal, sebuah komitmen untuk mengembalikan setiap kendaraan ke kondisi paling murninya, bersih dari swirl, goresan halus, dan sisa overspray yang menutupi karakter asli cat.
                    </p>
                    <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed italic">
                      Kami tidak hanya mengejar kilap sesaat. Melalui proses paint correction yang terukur dan tahapan surface refinement yang presisi, kami memulihkan kedalaman warna, kejernihan refleksi, serta definisi gloss agar tampil sebagaimana seharusnya sejak awal.
                    </p>
                    <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed italic">
                      Komitmen kami adalah menghadirkan standar proteksi yang melampaui ekspektasi industri. Pemilihan material coating berbasis ceramic nanotechnology, pembaruan teknik kerja, dan kontrol kualitas yang konsisten menjadi fondasi agar hasil tidak hanya indah saat selesai, tetapi bertahan dalam penggunaan jangka panjang.
                    </p>
                    <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed italic">
                      Di balik setiap hasil, ada tim detailer dan polisher yang bekerja dengan disiplin dan ketelitian tinggi. Karena bagi kami, perbedaan besar selalu lahir dari perhatian pada detail kecil.
                    </p>
                    <p className="text-gray-400 font-medium text-sm md:text-base leading-relaxed italic">
                      Selamat menikmati pengalaman berkendara dengan kemilau yang kembali ke titik terbaiknya.
                    </p>
                  </div>
                </div>

                {/* Footer / Signature */}
                <div className="flex flex-col items-end justify-end w-full z-10 mt-12 md:mt-20">
                  <span className="text-[#ff9ad9] font-alexbrush text-3xl md:text-5xl lg:text-6xl tracking-wide drop-shadow-[0_0_10px_rgba(255,154,217,0.3)]">
                    Lets Make It Shine
                  </span>
                  
                  <div className="mt-4">
                    <span className="text-[#ffffff]/20 font-black text-[7px] md:text-[9px] uppercase tracking-[0.2em] hover:text-[#ff9ad9]/60 transition-colors">
                      Tap Anywhere to Close
                    </span>
                  </div>
                </div>

                {/* Texture Overlay */}
                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');

        .perspective-1500 { perspective: 1500px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { 
          backface-visibility: hidden; 
          -webkit-backface-visibility: hidden; 
        }
        .rotate-y-180 { transform: rotateY(180deg); }
        .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.1); }
        .font-alexbrush { font-family: 'Alex Brush', cursive; }
      `}</style>
    </section>
  );
};

export default GiftCard;