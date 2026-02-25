import React, { useState } from "react";
import { motion } from "framer-motion";
import { Instagram, Play, ChevronDown, ChevronUp } from "lucide-react";

import img1 from "../assets/gallery/1.jpg";
import img2 from "../assets/gallery/post-2.webp";
import img3 from "../assets/gallery/post-3.webp";
import vid1 from "../assets/gallery/video/1.mp4";
import vid2 from "../assets/gallery/video/2.mp4";
import vid3 from "../assets/gallery/video/3.mp4";

// Sponsor logo
import spo1 from "../assets/logo/logo-s/1.jpg";
import spo2 from "../assets/logo/logo-s/2.png";
import spo3 from "../assets/logo/logo-s/3.jpg";
import spo4 from "../assets/logo/logo-s/4.png";

const About2 = () => {
 
  const [showAll, setShowAll] = useState(false);

  const instagramFeeds = [
    {
      thumbnail: img1,
      postUrl: "https://www.instagram.com/reel/DUf58rRk7MG/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      type: "Reels",
      label: "@zyro.autodetailing"
    },
    {
      thumbnail: img2, 
      postUrl: "https://www.instagram.com/p/DTp6dY1EyVT/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      type: "Post",
      label: "@zyro.autodetailing"
    },
    {
      thumbnail: img3,
      postUrl: "https://www.instagram.com/p/DS_wrP8E8pn/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
      type: "Post",
      label: "@zyro.autodetailing"
    },
    {
      thumbnail: vid1, 
      postUrl: "https://www.instagram.com/reel/DU7L3oPk-yi/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      type: "Reels",
      label: "@zyro.autodetailing"
    },
    {
      thumbnail: vid2, 
      postUrl: "https://www.instagram.com/reel/DT10aL_E5wj/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      type: "Reels",
      label: "@zyro.autodetailing"
    },
    {
      thumbnail: vid3,
      postUrl: "https://www.instagram.com/reel/DTO3ZqdEzA1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==",
      type: "Reels",
      label: "@zyro.autodetailing"
    }
  ];

  const sponsors = [spo1, spo2, spo3, spo4];

  const isVideo = (filePath) => {
    return filePath && typeof filePath === 'string' && filePath.match(/\.(mp4|webm|ogg)/i);
  };

  return (
    <section id="about-us-2" className="py-32 bg-[#000000] overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="mb-20">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4 mb-6"
          >
            <span className="text-magenta-300 font-signature uppercase text-2xl tracking-[0.5em]">Our Gallery</span>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-black text-white italic uppercase leading-[0.8] tracking-tighter"
            >
              WHY <br /> <span className="text-magenta-300 font-horizon-outline stroke-text">CHOOSING US?</span>
            </motion.h2>
            
            <p className="text-gray-500 font-bold text-[10px] uppercase tracking-[0.3em] max-w-xs lg:text-left border-l-2 border-magenta-300 pl-6">
              Klik pada konten untuk melihat detail pengerjaan kami langsung di Instagram.
            </p>
          </div>
        </div>

        {/* Instagram Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instagramFeeds.map((item, i) => (
            <motion.a
              key={i}
              href={item.postUrl}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className={`group relative aspect-square overflow-hidden rounded-[1rem] bg-zinc-900 border border-white/10 ${
                !showAll && i >= 3 ? 'hidden md:block' : 'block'
              }`}
            >
              {isVideo(item.thumbnail) ? (
                <video 
                  src={item.thumbnail} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  autoPlay loop muted playsInline
                />
              ) : (
                <img 
                  src={item.thumbnail} 
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              )}

              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <Instagram className="text-white mb-3" size={30} />
                <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">View Post</span>
              </div>

              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1.5 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg flex items-center gap-2">
                   {item.type === "Reels" ? <Play size={10} className="text-magenta-300 fill-magenta-300" /> : <div className="w-1.5 h-1.5 rounded-full bg-magenta-300" />}
                   <span className="text-white font-black text-[8px] uppercase tracking-widest">{item.type}</span>
                </div>
              </div>

              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                <p className="text-white font-medium text-[12px] italic">{item.label}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Tombol See More / Show Less - Hanya Muncul di HP (md:hidden) */}
        <div className="mt-10 flex justify-center md:hidden">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-6 py-3 border border-magenta-300 text-magenta-300 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-magenta-300 hover:text-white transition-colors"
          >
            {showAll ? (
              <>Show Less <ChevronUp size={16} /></>
            ) : (
              <>See More <ChevronDown size={16} /></>
            )}
          </button>
        </div>

        {/* --- SPONSORED BY SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 flex flex-col items-center"
        >
          {/* Label Header */}
          <div className="flex items-center gap-4 mb-12">
             <div className="h-[1px] w-12 bg-magenta-300" />
             <span className="text-magenta-300 font-black uppercase text-[10px] tracking-[0.4em]">Official Partners</span>
             <div className="h-[1px] w-12 bg-magenta-300" />
          </div>

          {/* Logo Grid */}
          <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20 transition-opacity duration-500">
            {sponsors.map((logo, index) => (
              <img 
                key={index} 
                src={logo} 
                alt="Sponsor" 
                className="h-12 md:h-16 w-auto object-contain  transition-all duration-300 cursor-pointer"
              />
            ))}
          </div>
        </motion.div>
      </div>
      
      <style>{`.stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }`}</style>
    </section>
  );
};

export default About2;