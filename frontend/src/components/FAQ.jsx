import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqData = [
    {
        id: 1,
        question: "Standar di Zyro dalam penerapan Coating?",
        answer: "Kami percaya coating yang sempurna hanya bisa didapat dari persiapan yang maksimal. Proses dimulai dari decontamination menyeluruh untuk memastikan body benar benar steril dari debu, karat ringan, tar, dan stain sebelum masuk tahap polishing. Kami melakukan 3 step polish menggunakan compound profesional RUPES agar permukaan rata, bersih, dan siap menerima coating secara optimal. Hasil akhirnya bukan hanya mengkilap, tetapi benar benar siap dikunci perlindungannya."
    },
    {
        id: 2,
        question: "Kerusakan cat apa saja yang bisa/ tidak bisa hilang saat polish?",
        answer: "Polish dapat menghilangkan baret halus, swirl mark, oksidasi ringan, water spot, dan baret sedang yang belum menembus lapisan clear coat. Jika goresan masih berada di lapisan clear coat, umumnya masih bisa diperbaiki dengan teknik dan kombinasi compound yang tepat. Namun kerusakan seperti cat terkelupas, retak, pecah, karat parah, atau goresan yang sudah menembus base coat tidak bisa hilang hanya dengan polish. Untuk kasus tersebut biasanya diperlukan repaint atau perbaikan body terlebih dahulu."
    },
    {
        id: 3,
        question: "Apakah Coating itu tahan terhadap gores?",
        answer: "Coating bukan pelindung anti gores total dan tidak dirancang untuk menahan benturan atau gesekan berat. Lapisan coating membantu meminimalisir swirl mark ringan akibat proses cuci dan pemakaian harian, tetapi tetap bisa tergores jika terkena gesekan kasar atau benda tajam. Fungsi utamanya adalah menjaga warna asli cat agar tidak cepat pudar, menguning, kusam, atau berjamur akibat paparan cuaca dan polusi. Jadi coating lebih fokus pada perawatan warna dan estetika jangka panjang."
    },
    {
        id: 4,
        question: "Kelebihan dan kekurangan Coating itu apa ya?",
        answer: "Kelebihan coating adalah efek hydrophobic yang membuat air dan kotoran sulit menempel sehingga mobil lebih mudah dibersihkan dan risiko baret halus akibat cuci berkurang. Kilap lebih tahan lama, warna terlihat lebih dalam, dan perawatan jangka panjang menjadi lebih efisien. Namun coating tidak kebal terhadap goresan berat, stone chip, atau benturan keras. Coating juga tetap membutuhkan perawatan rutin agar performanya optimal sesuai masa pakai."
    },
    {
        id: 5,
        question: "Hardness Level pada Coating itu apa maksudnya?",
        answer: "Hardness level seperti 8H, 9H, 10H mengacu pada skala kekerasan pensil (pH) yang digunakan untuk menguji kekerasan cairan kimia terhadap permukaan. Angka tersebut menunjukkan tingkat resistensi terhadap gesekan ringan. Lapisan coating sendiri umumnya memiliki ketebalan 5-10 micron di atas clear coat, sehingga tetap tipis namun berfungsi sebagai lapisan proteksi tambahan."
    },
    {
        id: 6,
        question: "Garansi Coating itu gimana maksudnya?",
        answer: "Garansi coating di Zyro berarti perlindungan layanan selama periode tertentu sesuai paket yang dipilih. Jika terjadi “accident” akibat pemakaian pada panel tertentu dalam masa garansi, kami menyediakan re-polish and re-coat pada panel tersebut tanpa biaya tambahan. Klaim berlaku selama masih dalam batas tahun garansi atau sebelum batas maksimal klaim tercapai, mana yang lebih dulu. Dengan sistem ini, perlindungan tetap terjaga tanpa perlu mengulang seluruh body."
    },
    {
        id: 7,
        question: "Apa bedanya Maintenance dan Klaim Garansi?",
        answer: "Maintenance adalah perawatan berkala untuk menjaga performa coating tetap optimal dan biasanya meliputi premium wash and wax, remove jamur kaca, decontamination ringan, re polish ringan, dan express detailing. Tujuannya untuk menjaga kilap, efek hydrophobic, dan kebersihan secara menyeluruh. Sedangkan klaim garansi dilakukan ketika ada kerusakan atau penurunan performa pada panel tertentu yang masih dalam masa garansi. Jadi maintenance bersifat preventif, sementara garansi bersifat korektif."
    }
];

const FAQItem = ({ question, answer, isOpen, onClick }) => {
    return (
        <div
            className={`bg-white/5 rounded-[1.5rem] p-5 mb-3 shadow-[0_4px_20px_rgba(0,0,0,0.1)] transition-all duration-300 border border-white/5 hover:border-white/10 ${isOpen ? 'bg-white/10 border-white/20' : ''}`}
        >
            <div
                className="flex justify-between items-start cursor-pointer group"
                onClick={onClick}
            >
                <h3 className="text-sm md:text-base font-bold text-white leading-tight pr-6 font-garet italic tracking-tight">
                    {question}
                </h3>
                <button
                    className={`shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]' : 'bg-white/5 text-white/50 group-hover:bg-white/10 group-hover:text-white'}`}
                >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                </button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0, marginTop: 0 }}
                        animate={{ height: 'auto', opacity: 1, marginTop: 12 }}
                        exit={{ height: 0, opacity: 0, marginTop: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                    >
                        <p className="text-gray-400 text-[13px] md:text-sm leading-relaxed font-garet tracking-wide">
                            {answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const FAQ = () => {
    const [openId, setOpenId] = useState(null);

    // Split data into two columns for desktop
    const leftColumn = faqData.filter((_, index) => index % 2 === 0);
    const rightColumn = faqData.filter((_, index) => index % 2 !== 0);

    return (
        <section id="faq" className="py-20 px-6 md:px-16 bg-[#050505] relative overflow-hidden">
            {/* Decorative Glows */}
            <div className="absolute top-0 left-1/4 w-72 h-72 bg-red-600/5 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-red-600/5 blur-[100px] pointer-events-none" />

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center mb-12">
                    <span className="text-red-600 font-black tracking-[0.5em] text-[10px] uppercase mb-4 block italic">
                        Customer Intelligence
                    </span>
                    <h2 className="text-2xl md:text-4xl font-black text-white uppercase italic tracking-tighter font-garet">
                        Frequently Asked <span className="text-red-600">Questions.</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-5 items-start">
                    {/* Left Column */}
                    <div className="space-y-0">
                        {leftColumn.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openId === faq.id}
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                            />
                        ))}
                    </div>

                    {/* Right Column */}
                    <div className="space-y-0">
                        {rightColumn.map((faq) => (
                            <FAQItem
                                key={faq.id}
                                question={faq.question}
                                answer={faq.answer}
                                isOpen={openId === faq.id}
                                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <style>{`
        .font-garet {
          font-family: 'Garet', 'Plus Jakarta Sans', sans-serif;
        }
        .stroke-text { 
          -webkit-text-stroke: 1px rgba(255,255,255,0.3); 
        }
      `}</style>
        </section>
    );
};

export default FAQ;
