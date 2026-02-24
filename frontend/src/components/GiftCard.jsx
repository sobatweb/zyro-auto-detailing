import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Sparkles, Quote, PenTool, MousePointerClick } from 'lucide-react';

const GiftCard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section id="owner-note" className="py-20 bg-[#000000] overflow-hidden min-h-screen flex flex-col justify-center">
      <div className="container mx-auto px-6 text-center mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-col items-center"
        >
          <span className="text-[#ff9ad9] font-signature uppercase text-3xl tracking-[0.5em] mb-4">Personal Memo</span>
          <div className="h-[3px] w-8 bg-[#ff9ad9] mb-4" />
          <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter">
            OWNER'S <br /> <span className="text-[#ff9ad9] font-horizon-outline stroke-text">NOTES.</span>
          </h2>
        </motion.div>
      </div>

      <div className="container mx-auto px-6 flex justify-center items-start">
        <div className="relative w-full max-w-[800px] perspective-1500">
          
          <motion.div
            onClick={() => setIsOpen(!isOpen)}
            animate={{ 
              rotateY: isOpen ? 180 : 0,
              scale: isOpen ? 1 : 0.98 
            }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
            className="w-full h-full relative preserve-3d cursor-pointer group"
          >
            {/* --- FRONT: ENVELOPE STATE --- */}
            <div 
              className="absolute inset-0 backface-hidden bg-[#0a0a0a] border border-white/10 rounded-[1rem] flex flex-col items-center justify-center overflow-hidden transition-all duration-500 shadow-[0_0_30px_rgba(255,154,217,0.1)] group-hover:shadow-[0_0_50px_rgba(255,154,217,0.3)] group-hover:border-[#ff9ad9]/50 min-h-[500px]"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-1000 ease-in-out" />
              </div>

              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#ff9ad9]/20 via-transparent to-transparent opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
              
              <motion.div 
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="z-10 flex flex-col items-center"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-[#ff9ad9] rounded-full blur-xl opacity-20 group-hover:opacity-40 animate-pulse" />
                  <Mail className="text-[#ff9ad9] relative z-10 mb-6 drop-shadow-[0_0_15px_rgba(255,154,217,0.6)]" size={72} strokeWidth={0.5} />
                </div>
                
                <span className="text-white font-black italic uppercase tracking-[0.6em] text-[14px] group-hover:text-[#ff9ad9] transition-colors">
                  Tap to Reveal
                </span>

                <motion.div 
                   animate={{ opacity: [0.4, 1, 0.4] }}
                   transition={{ duration: 2, repeat: Infinity }}
                   className="mt-4 flex items-center gap-2 text-[#ff9ad9]/60"
                >
                   <MousePointerClick size={14} />
                   <span className="text-[10px] font-bold uppercase tracking-widest">Interactive Message</span>
                </motion.div>
              </motion.div>

              <div className="absolute top-10 right-10 text-[#ff9ad9]/20 group-hover:text-[#ff9ad9]/40 transition-colors">
                <Sparkles size={40} />
              </div>
            </div>

            {/* --- BACK: THE LETTER --- */}
            <div 
              className="relative backface-hidden rotate-y-180 bg-[#111111] border border-[#ff9ad9]/20 rounded-[1rem] shadow-[0_0_50px_rgba(255,154,217,0.1)] min-h-full h-auto"
            >
              <div className="relative w-full p-8 md:p-16 flex flex-col items-center">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#ff9ad9]/5 blur-[100px] rounded-full pointer-events-none" />

                <div className="flex flex-col items-center gap-3 z-10 mb-10">
                  <PenTool size={20} className="text-[#ff9ad9] drop-shadow-[0_0_8px_rgba(255,154,217,0.4)]" />
                  <span className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em]">Zyro Director's Desk</span>
                </div>

                <div className="flex flex-col items-center justify-center z-10 w-full max-w-2xl my-4">
                  <Quote className="text-white/5 mb-6" size={50} />
                  
                  <h3 className="text-white font-black italic uppercase text-2xl md:text-3xl lg:text-4xl tracking-tighter mb-8 leading-tight drop-shadow-md text-center">
                    "Shine As<br /> You Like."
                  </h3>
                  
                  <div className="space-y-6 text-center">
                    {/* TEXT TETAP ORIGINAL */}
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

                <div className="flex flex-col items-center z-10 mt-12">
                  <span className="text-[#ff9ad9] font-horizon text-xl italic tracking-tighter drop-shadow-[0_0_10px_rgba(255,154,217,0.3)] mb-1">Zyro</span>
                  <span className="text-[#ffffff] font-horizon text-md italic uppercase">The Director</span>
                  <span className="text-gray-600 font-bold text-[9px] uppercase tracking-[0.4em] mt-2 mb-4">Official Private Note</span>
                  
                  <span className="text-[#ffffff]/40 font-black text-[9px] uppercase tracking-[0.2em] transition-all group-hover:text-[#ff9ad9]">
                    Tap anywhere to close
                  </span>
                </div>

                <div className="absolute inset-0 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pinstriped-suit.png')]" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .perspective-1500 { perspective: 1500px; }
        .preserve-3d { transform-style: preserve-3d; }
        .backface-hidden { 
          backface-visibility: hidden; 
          -webkit-backface-visibility: hidden; 
        }
        .rotate-y-180 { transform: rotateY(180deg); }
        .stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }
      `}</style>
    </section>
  );
};

export default GiftCard;