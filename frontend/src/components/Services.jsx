import { motion } from 'framer-motion';
import { Shield, Sparkles, Wand2, Hammer, Check } from 'lucide-react';

const Services = () => {
  const serviceList = [
    {
      cat: "Protection",
      icon: Shield,
      title: "PPF Stealth Armor",
      price: "15M+",
      features: ["Self-healing technology", "Anti-yellowing 10yr warranty", "High-gloss or Matte finish"]
    },
    {
      cat: "Aesthetic",
      icon: Sparkles,
      title: "Ceramic Coating 9H",
      price: "3.5M+",
      features: ["Diamond-hard protection", "Extreme hydrophobicity", "Deep wet-look shine"]
    },
    {
      cat: "Correction",
      icon: Wand2,
      title: "Paint Correction",
      price: "2.0M+",
      features: ["Remove 99% swirl marks", "Orange peel reduction", "Multi-stage machine polish"]
    },
    {
      cat: "Modification",
      icon: Hammer,
      title: "V-Vault Custom",
      price: "Contact",
      features: ["Forged carbon parts", "Interior re-trim", "Body-kit installation"]
    }
  ];

  return (
    <section id="services" className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 text-center mb-24">
        <h2 className="text-6xl font-black text-white italic uppercase tracking-tighter">TECHNICAL <br /> <span className="text-red-600">SOLUTIONS.</span></h2>
      </div>

      <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {serviceList.map((s, i) => (
          <motion.div 
            key={i}
            whileHover={{ y: -15 }}
            className="bg-[#0a0a0a] border border-white/5 p-8 rounded-[2.5rem] flex flex-col justify-between shadow-[15px_15px_30px_#000000,-5px_-5px_30px_#111111]"
          >
            <div>
              <div className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center text-red-600 mb-8 border border-white/5">
                <s.icon size={24} />
              </div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">{s.cat}</span>
              <h3 className="text-xl font-black text-white italic uppercase mt-2 mb-6 tracking-tight">{s.title}</h3>
              <div className="space-y-3 mb-10">
                {s.features.map((f, idx) => (
                  <div key={idx} className="flex gap-2 items-center">
                    <Check size={10} className="text-red-600" />
                    <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{f}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="pt-6 border-t border-white/5 flex justify-between items-center">
              <span className="text-white font-black italic">{s.price}</span>
              <button className="text-red-600 font-black uppercase text-[9px] tracking-widest hover:translate-x-2 transition-transform italic">Details →</button>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;