import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Loader2, Shield, MapPin, Gauge, ChevronRight } from 'lucide-react';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([{ role: 'bot', text: 'Ada yang bisa kami bantu mengenai proteksi atau modifikasi mobil Anda?' }]);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        top: scrollRef.current.scrollHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const askBot = (q, a) => {
    if (isTyping) return;
    setMessages(prev => [...prev, { role: 'user', text: q }]);
    
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setMessages(prev => [...prev, { role: 'bot', text: a }]);
    }, 2000);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[999] flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }} 
            animate={{ opacity: 1, scale: 1, y: 0 }} 
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="mb-4 w-[85vw] sm:w-[400px] bg-[#0A0A0A] border border-white/10 rounded-[2.5rem] overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.5)]"
          >
            
            {/* Header: X di Kiri */}
            <div className="p-6 bg-white flex flex-row-reverse justify-between items-center text-black">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-600 rounded-full animate-pulse" />
                <span className="font-black text-[10px] uppercase tracking-[0.2em]">AutoVault Support</span>
              </div>
              <button 
                onClick={() => setIsOpen(false)} 
                className="w-10 h-10 flex items-center justify-center hover:bg-black/5 rounded-full transition-colors"
              >
                <X size={20} strokeWidth={3} />
              </button>
            </div>
            
            {/* Chat Area */}
            <div 
              ref={scrollRef} 
              className="h-80 overflow-y-auto p-6 space-y-4 scrollbar-hide bg-[#050505]"
            >
              {messages.map((m, i) => (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  key={i} 
                  className={`max-w-[85%] p-4 rounded-2xl text-[11px] font-bold leading-relaxed ${
                    m.role === 'bot' 
                    ? 'bg-white/5 text-gray-400 rounded-tl-none border border-white/5' 
                    : 'bg-red-600 text-white self-end ml-auto rounded-tr-none'
                  }`}
                >
                  {m.text}
                </motion.div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-red-600 font-black text-[9px] uppercase tracking-[0.3em] ml-2">
                  <Loader2 size={12} className="animate-spin" /> Analyzing Request...
                </div>
              )}
            </div>

            {/* Quick Actions Card Section */}
            <div className="p-5 bg-black border-t border-white/5">
              <p className="text-[8px] font-black text-gray-700 uppercase tracking-[0.4em] mb-4 ml-2">System Inquiry</p>
              <div className="grid grid-cols-1 gap-2">
                <button 
                  onClick={() => askBot("Berapa lama garansi PPF?", "Garansi kami mencakup 10 tahun untuk anti-yellowing dan cracking!")} 
                  className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Shield size={14} className="text-red-600" />
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-widest">Garansi PPF</span>
                  </div>
                  <ChevronRight size={12} className="text-gray-700 group-hover:text-red-600" />
                </button>

                <button 
                  onClick={() => askBot("Lokasi workshop?", "Workshop kami berlokasi di area strategis Jakarta & Tangerang. Hubungi WA untuk map!")} 
                  className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <MapPin size={14} className="text-red-600" />
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-widest">Lokasi Studio</span>
                  </div>
                  <ChevronRight size={12} className="text-gray-700 group-hover:text-red-600" />
                </button>

                <button 
                  onClick={() => askBot("Cek Harga Coating?", "Coating kami mulai dari 3.5jt dengan opsi 2 atau 3 layer Nano Ceramic.")} 
                  className="group flex items-center justify-between p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <Gauge size={14} className="text-red-600" />
                    <span className="text-[10px] font-black text-gray-400 group-hover:text-white uppercase tracking-widest">Cek Harga Coating</span>
                  </div>
                  <ChevronRight size={12} className="text-gray-700 group-hover:text-red-600" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="w-16 h-16 bg-[#0A0A0A] border border-white/10 rounded-2xl flex items-center justify-center shadow-[10px_10px_20px_#000000,-5px_-5px_20px_rgba(255,255,255,0.02)] hover:shadow-red-600/40 hover:scale-105 transition-all duration-300"
      >
        <MessageSquare className="text-red-600" fill="currentColor" size={24} />
      </button>
    </div>
  );
};

export default Chatbot;