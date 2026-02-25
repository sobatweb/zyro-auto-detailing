

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Star, ShieldCheck, ChevronDown, ChevronUp } from 'lucide-react';

const Testimonials = () => {
  // State untuk mengatur apakah semua review ditampilkan di HP
  const [showAll, setShowAll] = useState(false);

  const reviews = [
    { name: "Susi susan", car: "Mobil", text: "Pas masuk harga promo akhir tahun ,tapi hasil ga kaleng2, melebihi ekspektasi Mantap bnerr 👍👍👍👍", status: "CLIENT" },
    { name: "adi tob", car: "Mobil", text: "Tempatnya nyaman, detailing enggine mesin nya ramah dan teliti , pelayanan yang super nyaman... Sukses selalu", status: "CLIENT" },
    { name: "Rinda Aprillia", car: "Mobil", text: "harga murah dibandingkan tempat lain, layanan disini juga sangat ramah, cukup rekomen lah", status: "CLIENT" },
    { name: "Rehan Alfarizi", car: "Avanza", text: "saya cat & coating mobil avanza, harganya murah dibanding tempat lain tapi kualitas jos 👍 hitamnya mengkilap, owner komunikatif kl saya nanya2. Sukses terus om", status: "CLIENT" },
    { name: "Umar Adin", car: "Mobil", text: "ownernya ramah banget, layanan disini juga bagus dan satset, kualitas sangat baik", status: "CLIENT" },
    { name: "adi andriani", car: "Mobil", text: "sy ada mobil proyek, turun mesin sekalian benerin cat body, cakep luar dalem", status: "CLIENT" }
  ];

  return (
    <section className="py-32 bg-zinc-800">
      <div className="container mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl font-black text-white italic uppercase">THE <span className="text-magenta-300">VERDICT.</span></h2>
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {reviews.map((r, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            // Jika showAll false dan index >= 3, sembunyikan di HP, tapi tetap tampilkan di Desktop (md:block)
            className={`p-8 bg-white/5 rounded-[2rem] border border-magenta-300/50 transition-colors group ${!showAll && i >= 3 ? 'hidden md:block' : 'block'
              }`}
          >
            <div className="flex justify-between items-start mb-6">
              <div className="flex gap-1">
                {[...Array(5)].map((_, s) => <Star key={s} size={10} fill="#FF3E3E" className="text-magenta-300" />)}
              </div>
              <ShieldCheck size={16} className="text-gray-700 group-hover:text-magenta-300" />
            </div>

            <p className="text-gray-400 italic text-sm font-medium mb-8 leading-relaxed">"{r.text}"</p>

            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-magenta-300 flex items-center justify-center font-black text-white italic">{r.name[0]}</div>
              <div>
                <h4 className="text-white font-black text-[10px] uppercase tracking-tighter">{r.name}</h4>
                <p className="text-magenta-300 text-[8px] font-black uppercase tracking-widest">{r.car}</p>
              </div>
            </div>
            <div className="mt-6 pt-4 border-t border-white/5 flex justify-between">
              <span className="text-[8px] font-black text-gray-300 uppercase tracking-[0.3em]">{r.status}</span>
              <span className="text-[8px] font-black text-gray-400 uppercase tracking-widest">Verified Review</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Tombol See More / Show Less - Hanya Muncul di HP (md:hidden) */}
      <div className="container mx-auto px-6 mt-10 flex justify-center md:hidden">
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

    </section>
  );
};

export default Testimonials;