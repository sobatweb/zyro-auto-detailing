import React, { useState, useEffect} from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import CoatingPackage from './CoatingPackage';
import InteriorSeries from './InteriorSeries';
import ExteriorSeries from './ExteriorSeries.jsx';
import BodyWork from './BodyWork';

const OurServices = () => {
 const [activeTab, setActiveTab] = useState('coating');

  useEffect(() => {
    const handleTabChange = (event) => {
      if (event.detail) {
        setActiveTab(event.detail); // Ubah tab sesuai data yang dikirim
      }
    };

    // Pasang listener saat komponen muncul
    window.addEventListener("changeServiceTab", handleTabChange);

    // Bersihkan listener saat komponen hilang
    return () => window.removeEventListener("changeServiceTab", handleTabChange);
  }, []);

  const menuItems = [
    { id: 'coating', label: 'Coating Package' },
    { id: 'interior', label: 'Interior Series' },
    { id: 'exterior', label: 'Exterior Series' },
    { id: 'bodywork', label: 'Body Work' },
  ];

  const renderContent = () => {
    switch (activeTab) {
      case 'coating': return <CoatingPackage />;
      case 'interior': return <InteriorSeries />;
      case 'exterior': return <ExteriorSeries />;
      case 'bodywork': return <BodyWork />;
      default: return <CoatingPackage />;
    }
  };

  return (
    <section id="our-service" className="py-24 bg-[#000000] min-h-screen overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h4 className="font-have-heart text-magenta-300 text-3xl md:text-5xl mb-2 lowercase">
            Our Premium
          </h4>
          <h2 className="font-horizon text-white text-4xl md:text-7xl uppercase tracking-tighter">
            SERVICES
          </h2>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-20 border-b border-white/10 pb-6">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="relative group"
            >
              <span className={`font-horizon text-sm md:text-lg uppercase tracking-widest transition-colors duration-300 ${
                activeTab === item.id ? 'text-magenta-300' : 'text-white/40 group-hover:text-white'
              }`}>
                {item.label}
              </span>
              {activeTab === item.id && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute -bottom-[10px] left-0 right-0 h-1 bg-magenta-300 shadow-[0_0_15px_#FF9AD9]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Content Area */}
        <div className="relative">
          <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }} 
              >
              {renderContent()}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <style jsx>{`
        .font-horizon { font-family: 'Horizon', sans-serif; }
        .font-garet { font-family: 'Garet', sans-serif; }
        .font-have-heart { font-family: 'Have Heart Two', cursive; }
      `}</style>
    </section>
  );
};

export default OurServices;