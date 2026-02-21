import { motion } from 'framer-motion';
import { Star, ShieldCheck } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    { name: "Andra S.", car: "Porsche 911 GT3", text: "PPF-nya hampir tidak terlihat. Presisi pemotongan di bagian lekukan body sangat rapi. Studio detailing terbaik yang pernah saya coba.", status: "VVIP MEMBER" },
    { name: "Bobby K.", car: "BMW M4 Competition", text: "Paint correction-nya luar biasa. Mobil saya yang penuh swirl marks kembali seperti baru turun dari kontainer.", status: "REPEAT CLIENT" },
    { name: "Dimas R.", car: "Range Rover Vogue", text: "Layanan penjemputan dengan towing tertutup sangat aman. Gak perlu khawatir mobil kotor lagi di jalan.", status: "PREMIUM CLIENT" },
    { name: "Irfan M.", car: "Civic Type R", text: "Coating 9H-nya bikin air lari semua. Cuci mobil jadi jauh lebih gampang dan cat selalu terlihat basah (wet-look).", status: "GOLD MEMBER" },
    { name: "Sultan A.", car: "Mercedes G63", text: "Custom carbon kit-nya presisi 100%. Pemasangan rapi dan tidak ada bunyi getaran sama sekali.", status: "VVIP MEMBER" },
    { name: "Kevin L.", car: "Tesla Model 3", text: "Interior detailing-nya sampai ke sela-sela terkecil. Bau kabin jadi segar tanpa parfum yang menyengat.", status: "REGULAR CLIENT" }
  ];

  return (
    <section className="py-32 bg-[#050505]">
      <div className="container mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl font-black text-white italic uppercase italic">THE <span className="text-red-600">VERDICT.</span></h2>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-8 bg-white/5 rounded-[2rem] border border-white/10 hover:border-red-600/50 transition-colors group"
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => <Star key={s} size={10} fill="#FF3E3E" className="text-red-600" />)}
              </div>
              <ShieldCheck size={16} className="text-gray-700 group-hover:text-red-600" />
            </div>
            
            <p className="text-gray-400 italic text-sm font-medium mb-8 leading-relaxed">"{r.text}"</p>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-600 flex items-center justify-center font-black text-white italic">{r.name[0]}</div>
              <div>
                <h4 className="text-white font-black text-[10px] uppercase tracking-tighter">{r.name}</h4>
                <p className="text-red-600 text-[8px] font-black uppercase tracking-widest">{r.car}</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between">
               <span className="text-[8px] font-black text-gray-700 uppercase tracking-[0.3em]">{r.status}</span>
               <span className="text-[8px] font-black text-gray-800 uppercase tracking-widest">Verified Review</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;