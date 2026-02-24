import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Paintbrush, Layers, Camera,ImageIcon } from 'lucide-react';

import foto1 from '../assets/bodywork/foto1.jpg';
import foto3 from '../assets/bodywork/foto3.jpg';
import foto4 from '../assets/bodywork/foto4.jpg';
import foto8 from '../assets/bodywork/foto8.jpg';

const BodyWork = () => {
  const points = [
    {
      id: "01",
      title: "Repair",
      icon: Wrench,
      desc: "Memperbaiki bagian mobil yang penyok, berlubang, atau rusak akibat kecelakaan dengan presisi tinggi mengembalikan bentuk asli pabrikan.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      id: "02",
      title: "Repaint",
      icon: Paintbrush,
      desc: "Pengecatan ulang sebagian atau seluruh bagian body mobil menggunakan sistem oven dan cat premium untuk hasil warna yang akurat dan tahan lama.",
      color: "from-magenta-500 to-purple-600"
    },
    {
      id: "03",
      title: "Peelable Paint",
      icon: Layers,
      desc: "Teknik terbaru pengecatan menggunakan cat khusus yang dapat dikelupas tanpa merusak cat asli kendaraan Anda.",
      color: "from-orange-500 to-yellow-500"
    }
  ];

  const bodyGallery = [
    { url: foto1 },
    { url: foto3 },
    { url: foto4 },
    { url: foto8 }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6 py-12 md:py-24 overflow-x-hidden">
      {/* Hero Section */}
      <div className="flex flex-col lg:flex-row gap-10 md:gap-16 items-center mb-24 md:mb-40">
        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6 text-center lg:text-left">
          <h2 className="font-horizon text-[26px] sm:text-4xl md:text-5xl text-white tracking-tight md:tracking-tighter italic leading-[1.1] md:leading-none break-words">
            RESTORATION & <br />
            <span className="text-magenta-300">PERFECTION.</span>
          </h2>
          <p className="font-garet text-white/50 text-[10px] md:text-sm max-w-md mx-auto lg:mx-0 uppercase tracking-[0.2em]">
            Standard profesional untuk hasil yang tak tertandingi.
          </p>
        </div>

        <div className="w-full lg:w-1/2 space-y-4 md:space-y-6">
          {points.map((item) => (
            <motion.div 
              key={item.id} 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              className="flex gap-4 md:gap-6 p-5 md:p-6 rounded-[1.5rem] md:rounded-[2rem] bg-white/5 border border-white/10 transition-all hover:bg-white/10"
            >
              <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center shrink-0`}>
                <item.icon className="text-white" size={24} />
              </div>
              <div>
                <h4 className="font-horizon text-base md:text-lg text-white uppercase">{item.title}</h4>
                <p className="font-garet text-white/60 text-[10px] md:text-[11px] leading-relaxed uppercase">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

     {/* Grid Gallery Seragam */}
      <div className="mt-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] flex-1 bg-white/10"></div>
          <div className="flex items-center gap-2">
            <ImageIcon className="text-magenta-300" size={20} />
            <h3 className="font-horizon text-lg md:text-xl text-white uppercase tracking-[0.2em] md:tracking-[0.3em]">Project Gallery</h3>
          </div>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {bodyGallery.map((img, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group">
              <img src={img.url} alt="Bodywork" className="w-full h-full object-cover transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyWork;