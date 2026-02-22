import { motion } from "framer-motion";
import { Instagram, ExternalLink, Play } from "lucide-react";

// 1. Import gambar secara manual dari folder assets
import img1 from "../assets/gallery/post-1.webp";
import img2 from "../assets/gallery/post-2.webp";
import img3 from "../assets/gallery/post-3.webp";

const About2 = () => {
  
  const instagramFeeds = [
    {
      thumbnail: img1, // Menggunakan variabel import
      postUrl: "https://www.instagram.com/reel/DS7m4gjE2XR/?utm_source=ig_web_button_share_sheet&igsh=MzRlODBiNWFlZA==",
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
    }
  ];

  const sponsors = [
    "https://upload.wikimedia.org/wikipedia/commons/a/a6/Logo_NIKE.svg",
    "https://upload.wikimedia.org/wikipedia/commons/2/20/Adidas_Logo.svg",
    "https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.png",
    "https://upload.wikimedia.org/wikipedia/commons/b/bd/Puma_Logo_2022.svg",
  ];

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
              className="group relative aspect-square overflow-hidden rounded-[1rem] bg-zinc-900 border border-white/10"
            >
              {/* Gambar Lokal */}
              <img 
                src={item.thumbnail} 
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* Instagram Hover Overlay */}
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center backdrop-blur-[2px]">
                <Instagram className="text-white mb-3" size={30} />
                <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">View Post</span>
              </div>

              {/* Type Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className="px-3 py-1.5 backdrop-blur-xl bg-black/40 border border-white/20 rounded-lg flex items-center gap-2">
                   {item.type === "Reels" ? <Play size={10} className="text-magenta-300 fill-magenta-300" /> : <div className="w-1.5 h-1.5 rounded-full bg-magenta-300" />}
                   <span className="text-white font-black text-[8px] uppercase tracking-widest">{item.type}</span>
                </div>
              </div>

              {/* Label Tag */}
              <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <p className="text-white font-medium text-[12px] italic">{item.label}</p>
              </div>
            </motion.a>
          ))}
        </div>

        {/* Sponsored By */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-24 pt-12 border-t border-white/10"
        >
          <div className="flex flex-wrap justify-center items-center gap-12 opacity-40">
            {sponsors.map((logo, index) => (
              <img key={index} src={logo} alt="Sponsor" className="h-8 object-contain grayscale invert" />
            ))}
          </div>
        </motion.div>
      </div>
      
      <style>{`.stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }`}</style>
    </section>
  );
};

export default About2;