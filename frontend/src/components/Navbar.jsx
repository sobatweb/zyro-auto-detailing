import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Gauge } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Services', id: 'services' },
    { name: 'Comparison', id: 'comparison' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <nav className="fixed w-full z-[100] px-4 md:px-6 py-6">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center gap-2 text-white group cursor-pointer">
          <div className="p-2 bg-red-600 rounded-lg group-hover:rotate-90 transition-transform duration-500">
            <Gauge size={20} className="md:w-6 md:h-6" strokeWidth={3} />
          </div>
          <span className="font-black text-xl md:text-2xl tracking-tighter uppercase italic">AUTO<span className="text-red-600">VAULT.</span></span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex bg-black/40 backdrop-blur-xl border border-white/10 px-8 py-3 rounded-full gap-8">
          {links.map((link) => (
            <a key={link.id} href={`#${link.id}`} className="text-white text-[10px] font-black uppercase tracking-[0.2em] hover:text-red-600 transition-colors">
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden w-10 h-10 flex items-center justify-center bg-white text-black rounded-full shadow-lg z-[110]">
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Side-Drawer (Not Full Screen) */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Dark Overlay */}
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[101] md:hidden"
            />
            {/* Drawer */}
            <motion.div 
              initial={{ x: '100%' }} animate={{ x: 0 }} exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[75%] bg-[#0A0A0A] border-l border-white/10 z-[105] p-10 flex flex-col justify-center gap-8 md:hidden shadow-2xl"
            >
              {links.map((link) => (
                <a key={link.id} href={`#${link.id}`} onClick={() => setIsOpen(false)} 
                  className="text-3xl font-black text-white italic uppercase hover:text-red-600 transition-colors">
                  {link.name}
                </a>
              ))}
              <div className="mt-10 pt-10 border-t border-white/5">
                <p className="text-[10px] font-black text-gray-600 uppercase tracking-widest leading-loose">
                  Precision <br /> Auto Aesthetics <br /> Studio
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;