import { motion } from "framer-motion";
import { ShieldCheck, Zap, Microscope, Droplets, ArrowRight } from "lucide-react";
import { useState } from "react";

const About = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const stats = [
    { label: "Cars Perfected", val: "500+" },
    { label: "PPF Installed", val: "12k+" },
    { label: "Detailing Hours", val: "8000+" }
  ];

  const services = [
    {
      title: "Coating Package",
      tag: "Diskon Up To 30% / Free Anti Karat",
      img: "https://images.unsplash.com/photo-1507136566006-cfc505b114fc?w=800"
    },
    {
      title: "Interior Series",
      tag: "Jok Permanen + Door Trim + Knoob Trim",
      img: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?w=800"
    },
    {
      title: "Exterior Series",
      tag: "Window Film",
      img: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?w=800"
    },
    {
      title: "Body Repair & Repaint",
      tag: "With Coating Promo",
      img: "https://images.unsplash.com/photo-1599256621730-535171e28e50?w=800"
    },
  ];

  return (
    <section id="about-us-1" className="bg-[#000000] py-20 md:py-32 overflow-hidden relative">
      <div className="container mx-auto px-6">

        {/* Header Section (Simetris dengan desain sebelumnya) */}
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

        {/* --- DYNAMIC ACCORDION LAYOUT (Sesuai Gambar) --- */}
        <div className="flex flex-col md:flex-row gap-3 h-auto md:h-[500px] mb-16">
          {services.map((item, index) => (
            <motion.div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`relative overflow-hidden rounded-[1.5rem] md:rounded-[2rem] cursor-pointer transition-all duration-700 ease-in-out h-[300px] sm:h-[400px] md:h-full
      ${hoveredIndex === index ? 'md:flex-[3]' : 'md:flex-1'} 
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
              <div className={`absolute inset-0 transition-opacity duration-500 ${hoveredIndex === index ? 'bg-black/40' : 'bg-black/60'}`} />

              {/* Content Inside Card */}
              <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end items-start">

                {/* Container untuk Text agar bisa rotasi */}
                <motion.div
                  animate={{
                    rotate: hoveredIndex === index ? 0 : -90,
                    y: hoveredIndex === index ? 0 : -20 // Sesuaikan nilai offset y agar posisinya pas di tengah saat terlipat
                  }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                  className="origin-left whitespace-nowrap"
                >
                  {/* Badge Tag - Hanya muncul/terlihat jelas saat horizontal/hover */}
                  <motion.div
                    animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                    className="bg-magenta-300 text-white font-garet text-[8px] md:text-[10px] font-black uppercase px-3 py-1 md:py-1.5 rounded-full mb-3 md:mb-4 w-fit shadow-md tracking-wider"
                  >
                    {item.tag}
                  </motion.div>

                  {/* Title */}
                  <h3 className={`text-white font-horizon uppercase leading-none transition-all duration-500
          ${hoveredIndex === index ? 'text-xl md:text-2xl' : 'text-[15px] md:text-lg opacity-80'}
        `}>
                    {item.title}
                  </h3>
                </motion.div>

                {/* View Details Button - Muncul saat hover */}
                <div className="h-8 md:h-10 overflow-hidden"> {/* Container agar tidak merusak layout saat muncul */}
                  {hoveredIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="mt-3 md:mt-4 flex items-center gap-2 text-magenta-300 text-[9px] md:text-[10px] font-black uppercase tracking-widest"
                    >
                      Explore <ArrowRight size={14} />
                    </motion.div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* --- Footer About (Stats & Deskripsi) --- */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 font-garet text-xs md:text-sm md:text-[15px] leading-relaxed mb-12 max-w-lg border-l-2 border-magenta-300 pl-6">
              Kami menggabungkan pencahayaan inspeksi spektrum luas dan teknik pemolesan multi-tahap untuk hasil yang melampaui standar pabrik.
            </p>

            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map((s, i) => (
                <div key={i} className="text-center p-4 bg-white/5 rounded-[1.25rem] md:rounded-[1.5rem] border border-white/5">
                  <div className="text-xl md:text-3xl font-horizon text-white mb-2">{s.val}</div>
                  <div className="text-[7px] md:text-[8px] font-garet text-gray-500 font-black uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div> */}

          <div className="flex justify-center md:justify-end">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-magenta-300 text-white font-garet font-black uppercase tracking-[.2em] px-8 md:px-10 py-4 md:py-5 rounded-full text-[10px] md:text-xs shadow-[0_20px_40px_rgba(255,154,217,0.3)] hover:bg-white hover:text-magenta-300 transition-all duration-300"
            >
              Yuk, Ngobrol Dulu!
            </motion.button>
          </div>
        </div>
      </div>
      <style>{`.stroke-text { -webkit-text-stroke: 1px rgba(255,255,255,0.2); }`}</style>
    </section>
  );
};

export default About;
