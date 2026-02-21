import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const links = [
    { name: 'Know Us', id: 'about-us-1' },
    { name: 'Our Stories', id: 'about-us-2' },
    { name: 'Our Services', id: 'our-service' },
    { name: 'FAQs', id: 'faq' },
    { name: 'Find Us', id: 'footer' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-[100] px-4 md:px-8 transition-all duration-300 ${
        isScrolled 
          ? 'bg-black/60 backdrop-blur-md py-3 shadow-lg' 
          : 'bg-black py-4' 
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo Section - Typographic Concept */}
        <div className="flex flex-col justify-center items-start group cursor-pointer">
          <div className="flex items-baseline">
            <span className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase italic group-hover:text-gray-200 transition-colors duration-300">
              ZYRO
            </span>
            {/* Red Accent Dot */}
            <span className="w-2 h-2 md:w-2.5 md:h-2.5 bg-red-600 rounded-sm ml-1 group-hover:scale-150 transition-transform duration-300 shadow-[0_0_10px_rgba(220,38,38,0.8)]"></span>
          </div>
          <span className="text-[0.6rem] md:text-xs font-semibold text-gray-400 tracking-[0.4em] uppercase -mt-1 group-hover:text-red-500 transition-colors duration-300">
            Autodetailing
          </span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a 
              key={link.id} 
              href={`#${link.id}`} 
              className="text-white text-sm md:text-base font-medium hover:text-red-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)} 
          className="md:hidden w-10 h-10 flex items-center justify-center text-white z-[110]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Side-Drawer */}
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
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={() => setIsOpen(false)} 
                  className="text-2xl font-bold text-white hover:text-red-600 transition-colors"
                >
                  {link.name}
                </a>
              ))}
              <div className="mt-10 pt-10 border-t border-white/10">
                <p className="text-xs font-bold text-gray-500 uppercase tracking-widest leading-loose">
                  Zyro <br /> Autodetailing
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