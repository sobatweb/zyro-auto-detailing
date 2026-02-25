import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useState } from "react";

import int from "../assets/gallery/int.jpg";
import ext from "../assets/gallery/ext.jpg";
import rep from "../assets/gallery/repair.jpeg";
import coa from "../assets/gallery/coating.jpg";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const services = [
    {
      title: "Coating Package",
      tag: "5 types of packages",
      img: coa
    },
    {
      title: "Interior Series",
      tag: "Jok Trim",
      img: int
    },
    {
      title: "Exterior Series",
      tag: "Window Film",
      img: ext
    },
    {
      title: "Body Repair & Repaint",
      tag: "Repair & Repaint",
      img: rep
    },
  ];

  const handleExplore = (serviceTitle) => {
    const tabMapping = {
      "Coating Package": "coating",
      "Interior Series": "interior",
      "Exterior Series": "exterior",
      "Body Repair & Repaint": "bodywork"
    };

    const targetTab = tabMapping[serviceTitle];
    const event = new CustomEvent("changeServiceTab", { detail: targetTab });
    window.dispatchEvent(event);

    const section = document.getElementById("our-service");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about-us-1" className="bg-[#000000] py-20 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-6">

        {/* Header Section */}
        <div className="mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <span className="text-magenta-300 font-signature tracking-[0.2em] text-xl md:text-2xl mb-4 block">Our Tagline</span>
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-horizon text-white uppercase leading-[0.9] md:leading-[0.85] mb-8">
              SHINE <br />
              <span className="text-magenta-300 font-horizon-outline stroke-text">AS</span> YOU LIKE
            </h2>
          </motion.div>
        </div>

        {/* --- DYNAMIC ACCORDION LAYOUT --- */}
        <div className="flex flex-col md:flex-row gap-3 h-[500px] sm:h-[600px] md:h-[500px] mb-16 mt-20">
          {services.map((item, index) => (
            <motion.div
              onClick={() => handleExplore(item.title)}
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] cursor-pointer transition-all duration-700 ease-in-out w-full md:h-full
                ${hoveredIndex === index ? 'flex-[3] md:flex-[3]' : 'flex-[1] md:flex-1'} 
                ${hoveredIndex !== null && hoveredIndex !== index ? 'opacity-40 grayscale' : 'opacity-100'}`}
              layout
            >
              {/* Image Background */}
              <img
                src={item.img}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700"
                style={{ transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)' }}
              />

              {/* Overlay Gradient */}
              <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredIndex === index ? 'bg-black/40' : 'bg-black/60 md:bg-black/70'}`} />

              {/* Content Inside Card */}
              {/* PERBAIKAN: Padding diperkecil di mobile, justify-end dipertahankan */}
              <div className="absolute inset-0 p-4 sm:p-6 md:p-8 flex flex-col justify-end items-start">

                {/* Container Text */}
                {/* PERBAIKAN: Menghapus whitespace-nowrap agar teks bisa wrap ke bawah jika kepanjangan di mobile */}
                <motion.div
                  animate={{
                    // Pada mobile (lebar penuh), jangan di-rotasi. Rotasi hanya di desktop (saat menyempit ke samping)
                    rotate: window.innerWidth < 768 ? 0 : (hoveredIndex === index ? 0 : -90),
                    y: hoveredIndex === index ? 0 : (window.innerWidth < 768 ? 0 : -20)
                  }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="origin-left w-full"
                >
                  {/* Badge Tag */}
                  <motion.div
                    animate={{ opacity: hoveredIndex === index ? 1 : (window.innerWidth < 768 ? 1 : 0) }}
                    // PERBAIKAN: Teks tag diperkecil, padding disesuaikan
                    className="bg-magenta-300 text-white font-garet text-[7px] md:text-[9px] lg:text-[10px] font-black uppercase px-2 py-1 md:px-3 md:py-1.5 rounded-full mb-2 md:mb-4 w-fit shadow-md tracking-widest line-clamp-1"
                  >
                    {item.tag}
                  </motion.div>

                  {/* Title */}
                  {/* PERBAIKAN: Ukuran font diperkecil signifikan pada mode tertutup agar muat */}
                  <h3 className={`text-white font-horizon uppercase leading-tight md:leading-none transition-all duration-500 max-w-full
                    ${hoveredIndex === index 
                      ? 'text-lg sm:text-xl md:text-2xl lg:text-3xl' 
                      : 'text-sm sm:text-base md:text-[15px] lg:text-lg opacity-80 md:opacity-50'}
                  `}>
                    {item.title}
                  </h3>
                </motion.div>

                {/* View Details Button */}
                <div className="h-6 md:h-10 overflow-hidden"> 
                  {/* Di mobile selalu munculin (atau atur sesuai keinginan), di desktop muncul saat hover */}
                  {(hoveredIndex === index || window.innerWidth < 768) && (
                    <motion.div
                      onClick={() => handleExplore(item.title)}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mt-2 md:mt-4 flex items-center gap-2 text-magenta-300 text-[8px] md:text-[10px] font-black uppercase tracking-widest cursor-pointer"
                    >
                      Explore <ArrowRight size={12} className="md:w-[14px] md:h-[14px]" />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Footer About --- */}
        <div className="flex justify-center mt-10">
          <motion.a
            href="https://wa.me/6287884742550"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-magenta-300 text-white font-garet font-black uppercase tracking-[.2em] px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-xs shadow-[0_20px_40px_rgba(255,154,217,0.3)] hover:bg-white hover:text-magenta-300 transition-all duration-300"
          >
            Yuk, Ngobrol Dulu!
          </motion.a>
        </div>
      </div>
      <style>{`.stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }`}</style>
    </section>
  );
};

export default About;