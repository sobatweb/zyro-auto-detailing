import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const UltimateServiceTransition = () => {
  const { scrollYProgress } = useScroll();
  const bgY = useTransform(scrollYProgress, [0.3, 0.7], ["0%", "10%"]);

  return (
    <section className="relative min-h-[70vh] md:h-[85vh] bg-[#020202] overflow-hidden flex items-center justify-center py-20">
      
      {/* 1. Background Grid & Glow */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 z-0 opacity-40">
        <div className="absolute inset-0" style={{ 
          backgroundImage: `linear-gradient(to right, #111 1px, transparent 1px), linear-gradient(to bottom, #111 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#FF9AD910_0%,_transparent_70%)]" />
      </motion.div>

      <div className="relative z-10 w-full max-w-6xl px-4 md:px-6">
        
        {/* Technical Header */}
        <div className="text-center mb-10 md:mb-16">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="font-mono text-magenta-300 text-[8px] md:text-[10px] uppercase mb-4 tracking-[0.3em] md:tracking-[0.6em]"
            >
              System Analysis In Progress
            </motion.div>
            <h2 className="font-horizon text-2xl md:text-6xl text-white italic tracking-tighter leading-tight">
              DRIVEN BY <span className="text-magenta-300 ">PRECISION.</span>
            </h2>
        </div>

        {/* 2. The Interactive SVG Car */}
        <div className="relative">
          <svg viewBox="0 0 900 300" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto drop-shadow-[0_0_40px_rgba(255,154,217,0.1)] scale-110 md:scale-100">
            
            {/* Realistic Sports Car Body Outline */}
            <motion.path
              d="M100 220 L140 220 C145 180 225 180 230 220 L640 220 C645 180 725 180 730 220 L800 220 L790 190 C780 160 730 140 660 130 C600 120 530 70 430 65 C280 60 160 110 100 140 C70 160 90 220 100 220 Z"
              stroke="white"
              strokeWidth="1.5"
              strokeOpacity="0.2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 2 }}
            />

            {/* Roda Depan dengan Looping Rotation */}
            <g transform="translate(185, 220)">
              <motion.circle
                r="38"
                stroke="#FF9AD9"
                strokeWidth="3"
                strokeDasharray="40 20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <circle r="10" stroke="#FF9AD9" strokeWidth="1" strokeOpacity="0.5" />
            </g>

            {/* Roda Belakang dengan Looping Rotation */}
            <g transform="translate(685, 220)">
              <motion.circle
                r="38"
                stroke="#FF9AD9"
                strokeWidth="3"
                strokeDasharray="40 20"
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              <circle r="10" stroke="#FF9AD9" strokeWidth="1" strokeOpacity="0.5" />
            </g>

            {/* The Scanning Laser (Non-stop Loop) */}
            <motion.path
              d="M100 220 L140 220 C145 180 225 180 230 220 L640 220 C645 180 725 180 730 220 L800 220 L790 190 C780 160 730 140 660 130 C600 120 530 70 430 65 C280 60 160 110 100 140 C70 160 90 220 100 220 Z"
              stroke="#FF9AD9"
              strokeWidth="4"
              strokeLinecap="round"
              initial={{ pathLength: 0.15, pathOffset: 0 }}
              animate={{ pathOffset: [0, 1] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              style={{ filter: "drop-shadow(0 0 12px #FF9AD9)" }}
            />
          </svg>

          {/* 3. The 4 Service Aspects Hotspots - Responsive Positioning */}
          <div className="absolute inset-0 pointer-events-none font-horizon">
            {/* Desktop Positions (Hidden on Small Screens) */}
            <div className="hidden md:block">
                <ServiceHotspot x="55%" y="15%" label="Coating Package" delay={1} />
                <ServiceHotspot x="42%" y="40%" label="Interior Series" delay={1.3} />
                <ServiceHotspot x="15%" y="55%" label="Exterior Series" delay={1.6} />
                <ServiceHotspot x="78%" y="45%" label="Body Work" delay={1.9} />
            </div>

            {/* Mobile Positions (Stacked or Simplified) */}
            <div className="md:hidden flex flex-wrap justify-between gap-y-32 mt-10">
                <ServiceHotspot x="10%" y="10%" label="Coating" delay={1} />
                <ServiceHotspot x="60%" y="10%" label="Interior" delay={1.2} />
                <ServiceHotspot x="10%" y="85%" label="Exterior" delay={1.4} />
                <ServiceHotspot x="60%" y="85%" label="Body Work" delay={1.6} />
            </div>
          </div>
        </div>

        {/* Footer Technical Info - Hidden on very small screens */}
        <div className="mt-20 hidden md:flex justify-between items-end border-t border-white/5 pt-6 font-mono text-[8px] text-white/20 uppercase tracking-[0.3em]">
          <div>Scan_Res: 4K_UHD</div>
          <div className="text-magenta-300 animate-pulse uppercase">Diagnostic Complete</div>
          <div>EST_2024</div>
        </div>
      </div>

      <style jsx>{`
        .font-horizon { font-family: 'Horizon', sans-serif; }
      `}</style>
    </section>
  );
};

const ServiceHotspot = ({ x, y, label, delay }) => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.5 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ delay, duration: 0.5 }}
    className="absolute"
    style={{ left: x, top: y }}
  >
    <div className="flex items-center gap-2 md:gap-3">
        <div className="relative flex-shrink-0">
            <div className="w-1.5 h-1.5 md:w-2 md:h-2 bg-magenta-300 rounded-full shadow-[0_0_10px_#FF9AD9]" />
            <div className="absolute inset-[-4px] border border-magenta-300/30 rounded-full animate-ping" />
        </div>
        <h4 className="text-white text-[10px] md:text-[12px] uppercase tracking-[0.1em] md:tracking-widest whitespace-nowrap bg-black/40 backdrop-blur-sm px-2 py-1 rounded">
            {label}
        </h4>
    </div>
  </motion.div>
);

export default UltimateServiceTransition;