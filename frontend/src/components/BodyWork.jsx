import React from 'react';
import { motion } from 'framer-motion';
import { Wrench, Paintbrush, Layers, Camera } from 'lucide-react';

import foto1 from '../assets/bodywork/foto1.jpg';
import foto2 from '../assets/bodywork/foto2.jpg';
import foto3 from '../assets/bodywork/foto3.jpg';
import foto4 from '../assets/bodywork/foto4.jpg';
import foto5 from '../assets/bodywork/foto5.jpg';
import foto6 from '../assets/bodywork/foto6.jpg';
import foto7 from '../assets/bodywork/foto7.jpg';

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
    { url: foto2},
    { url: foto3 },
    { url: foto4 },
    { url: foto5},
    { url: foto6},
    { url: foto7}
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
              whileInView={{ opacity: 1, x: 0 }}
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

      {/* Gallery Section */}
      <div className="mt-10 md:mt-20">
        <div className="flex flex-col items-center mb-10 md:mb-16">
          <Camera className="text-magenta-300 mb-4" size={24} />
          <h3 className="font-horizon text-2xl md:text-4xl text-white uppercase italic text-center">Project Gallery</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-6 h-auto md:h-[750px]">
          {bodyGallery.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`relative overflow-hidden rounded-[1.2rem] md:rounded-[3rem] border border-white/10 group shadow-2xl
                /* Mobile: Kotak, Desktop: Bento Height */
                aspect-square md:aspect-auto
                /* Bento Grid Logic */
                ${i === 0 ? 'col-span-2 md:col-span-2 md:row-span-2' : ''} 
                ${i === 1 ? 'col-span-2 md:col-span-2 md:row-span-1' : ''}
                ${i === 2 ? 'col-span-1 md:col-span-1 md:row-span-1' : ''}
                ${i === 3 ? 'col-span-1 md:col-span-1 md:row-span-1' : ''}
                ${i === 4 ? 'col-span-2 md:col-span-2 md:row-span-1' : ''}
                ${i === 5 ? 'col-span-1 md:col-span-1 md:row-span-1' : ''}
                ${i === 6 ? 'col-span-1 md:col-span-1 md:row-span-1' : ''}`}
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
              />
             
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BodyWork;