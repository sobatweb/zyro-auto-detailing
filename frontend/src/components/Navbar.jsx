import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import logo from '../assets/logo/logo1.webp';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
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

  const handleScrollToSection = (e, id) => {
    e.preventDefault(); 
    setIsOpen(false);   

    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; 
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <nav
     
      className={`fixed top-0 left-0 w-full z-[100] px-6 md:px-12 transition-all duration-500 border-b bg-[#0f0208] ${
        isScrolled
          ? 'py-2 shadow-[0_4px_30px_rgba(244,168,208,0.1)] border-[#f4a8d0]/20' 
          : 'py-4 border-transparent shadow-none'
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center relative">

        {/* Logo Section */}
        <div className="flex flex-col justify-center items-start group cursor-pointer relative z-[110] ">
          <img
            src={logo} 
            alt="Zyro Logo"
            className="h-14 md:h-14 w-auto object-contain group-hover:scale-105 rounded-full transition-transform duration-300 drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]"
          />
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-12">
          {links.map((link) => (
            <a
              key={link.id}
              href={`#${link.id}`}
              onClick={(e) => handleScrollToSection(e, link.id)}
              className="text-white/90 text-base font-black tracking-widest hover:text-[#f4a8d0] transition-all uppercase hover:-translate-y-1 block cursor-pointer"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden flex items-center justify-center text-white p-2 -mr-2 relative z-[160]"
          style={{ WebkitTapHighlightColor: 'transparent' }}
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
        >
          {isOpen ? <X size={36} /> : <Menu size={36} />}
        </button>
      </div>

      {/* Mobile Side-Drawer */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/90 z-[150] md:hidden"
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              
              className="fixed top-0 right-0 h-screen w-[85vw] max-w-sm bg-[#0f0208] border-l border-[#f4a8d0]/20 z-[155] flex flex-col p-10 md:hidden shadow-[-20px_0_50px_rgba(0,0,0,0.8)]"
            >
              <div className="flex flex-col h-full justify-center space-y-8">
                {links.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.1 }}
                    key={link.id}
                    href={`#${link.id}`}
                    onClick={(e) => handleScrollToSection(e, link.id)} 
                    className="text-4xl font-black text-white hover:text-[#f4a8d0] transition-colors uppercase italic tracking-tighter cursor-pointer"
                  >
                    {link.name}
                  </motion.a>
                ))}

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="mt-12 pt-12 border-t border-[#f4a8d0]/20"
                >
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-[0.3em] leading-loose">
                    Zyro <br /> Autodetailing
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;