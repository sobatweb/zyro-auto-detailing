import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Info, CheckCircle2, Camera ,ImageIcon} from 'lucide-react';
import foto1 from '../assets/interior/foto1.jpg';
import foto2 from '../assets/interior/foto2.jpg';
import foto3 from '../assets/interior/foto3.jpg';
import foto4 from '../assets/interior/foto4.jpg';


const InteriorSeries = () => {
  const packages = [
    {
      name: "Ferrari",
      accent: "border-red-600",
      glow: "shadow-red-600/40",
      brandColor: "#dc2626",
      desc: "Jok Permanen dengan material basic fabric leather yang fungsional dan ekonomis.",
      features: ["Ketebalan busa 0.5 cm", "Material basic fabric leather", "FREE Consule head", "FREE Doortrim Re-trim", "Daya tahan bahan 2 tahun"],
      pricing: [{ label: "2 Baris Jok", price: "Rp 3.500.000" }, { label: "3 Baris Jok", price: "Rp 4.100.000" }],
      note: "Motif Design: Serat Kayu / Kulit Jeruk"
    },
    {
      name: "Cherokee",
      accent: "border-white",
      glow: "shadow-white/20",
      brandColor: "#ffffff",
      desc: "Material soft fabric leather yang lebih empuk dan tahan lama untuk harian.",
      features: ["Ketebalan busa 0.6 cm", "Material soft fabric leather", "FREE Consule head", "FREE Doortrim Re-trim", "Daya tahan bahan 3–5 tahun"],
      pricing: [{ label: "2 Baris Jok", price: "Rp 4.000.000" }, { label: "3 Baris Jok", price: "Rp 4.500.000" }],
      note: "Motif Design: Serat Kayu / Kulit Jeruk"
    },
    {
      name: "MBtech",
      accent: "border-[#8B4513]",
      glow: "shadow-[#8B4513]/40",
      brandColor: "#8B4513",
      desc: "Premium quality synthetic leather dengan standar kenyamanan dan durabilitas tinggi.",
      features: ["Ketebalan busa 0.8 cm", "Anti gores & Anti jamur", "UV Protection (Tahan Panas)", "FREE Doortrim Re-trim", "Daya tahan bahan 7–10 tahun"],
      pricing: [{ label: "2 Baris Jok", price: "Rp 4.500.000" }, { label: "3 Baris Jok", price: "Rp 5.000.000" }],
      note: "Motif Design: Nappa / Serat Kayu / Kulit Jeruk"
    }
  ];

  const interiorGallery = [{ url: foto1 }, { url: foto2 }, { url: foto3 }, { url: foto4 }];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:py-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
        {packages.map((pkg, index) => (
          <motion.div
            key={index}
            className={`bg-[#111111] border-2 ${pkg.accent} rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 flex flex-col relative group transition-all duration-500 ${pkg.glow}`}
          >
            <div className="mb-6">
              <h3 className="font-horizon text-3xl md:text-4xl text-white uppercase italic tracking-tighter mb-2">{pkg.name}</h3>
              <div className="h-1.5 w-16" style={{ backgroundColor: pkg.brandColor }}></div>
            </div>

            <p className="font-garet text-white text-[12px] md:text-[13px] leading-relaxed mb-8 opacity-80 italic">"{pkg.desc}"</p>

            <div className="space-y-4 mb-10">
              {pkg.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle2 size={16} style={{ color: pkg.brandColor }} className="mt-0.5 shrink-0" />
                  <span className="font-garet text-white text-[10px] md:text-[11px] uppercase">{feat}</span>
                </div>
              ))}
            </div>

            <div className="mt-auto pt-6 border-t border-white/10">
              <div className="space-y-3">
                {pkg.pricing.map((p, i) => (
                  <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl md:rounded-2xl border border-white/5">
                    <span className="font-horizon text-[8px] md:text-[9px] text-gray-400 uppercase">{p.label}</span>
                    <span className="font-horizon text-base md:text-lg text-white">{p.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div className="relative bg-[#1A1A1A] border-2 border-magenta-300 rounded-[2rem] md:rounded-[2.5rem] p-6 md:p-8 overflow-hidden">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-center md:text-left">
            <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-magenta-300 flex items-center justify-center">
              <Settings className="text-white" size={32} />
            </div>
            <div>
              <h4 className="font-horizon text-white text-lg md:text-xl uppercase tracking-widest">Additional Package</h4>
              <p className="font-have-heart text-magenta-300 text-3xl md:text-4xl">STEERING AND SHIFT KNOB RE TRIM</p>
            </div>
          </div>
          <div className="text-center md:text-right">
            <p className="font-horizon text-white text-3xl md:text-4xl tracking-tighter">Rp 800.000</p>
          </div>
        </div>
      </motion.div>

      {/* Grid Gallery Seragam */}
      <div className="mt-20">
        <div className="flex items-center gap-4 mb-10">
          <div className="h-[1px] flex-1 bg-white/10"></div>
          <div className="flex items-center gap-2">
            <ImageIcon className="text-red-600" size={20} />
            <h3 className="font-horizon text-lg md:text-xl text-white uppercase tracking-[0.2em] md:tracking-[0.3em]">Interior Gallery</h3>
          </div>
          <div className="h-[1px] flex-1 bg-white/10"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4">
          {interiorGallery.map((img, i) => (
            <motion.div key={i} whileHover={{ y: -5 }} className="relative aspect-square rounded-xl md:rounded-2xl overflow-hidden border border-white/5 group">
              <img src={img.url} alt="Interior" className="w-full h-full object-cover transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InteriorSeries;