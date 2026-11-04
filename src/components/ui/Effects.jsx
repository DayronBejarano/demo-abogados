import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';

// Fondo Atmosférico Oro/Ámbar
export const AmbientBackground = () => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0">
    <div className="absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[160px] animate-pulse" />
    <div className="absolute top-1/3 -right-40 h-[700px] w-[700px] rounded-full bg-yellow-600/5 blur-[180px] animate-pulse" style={{ animationDelay: '3s' }} />
    <div className="absolute -bottom-40 left-1/3 h-[600px] w-[600px] rounded-full bg-orange-500/5 blur-[160px]" />
    {/* Retícula muy sutil para dar orden y rigor */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
  </div>
);

// Tarjeta Glassmorphism Mate (Vidrio Esmerilado)
export const SpotlightCard = ({ children, className = "", glowColor = "rgba(251, 191, 36, 0.15)" }) => {
  const divRef = useRef(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e) => {
    if (!divRef.current) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      whileHover={{ y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 25 }}
      className={`relative overflow-hidden rounded-xl border border-white/5 bg-slate-900/60 backdrop-blur-3xl p-8 shadow-2xl transition-all duration-300 hover:border-amber-500/30 hover:shadow-[0_10px_40px_rgba(251,191,36,0.1)] ${className}`}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/30 to-transparent" />
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-10"
        style={{
          opacity,
          background: `radial-gradient(500px circle at ${position.x}px ${position.y}px, ${glowColor}, transparent 40%)`,
        }}
      />
      <div className="relative z-20">{children}</div>
    </motion.div>
  );
};

// Botón Corporativo Oro (Más sobrio, menos "gamer")
export const MagicGlowButton = ({ children, onClick, icon: Icon, className = "" }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative group inline-flex items-center justify-center overflow-hidden rounded-lg p-[1px] font-bold shadow-2xl focus:outline-none ${className}`}
    >
      <span className="absolute inset-[-1000%] animate-[spin_5s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#F59E0B_0%,#B45309_50%,#F59E0B_100%)]" />
      <span className="relative z-10 inline-flex h-full w-full cursor-pointer items-center justify-center gap-3 rounded-[7px] bg-slate-950 px-8 py-4 text-xs font-bold uppercase tracking-widest text-amber-50 backdrop-blur-3xl transition-colors group-hover:bg-slate-900">
        {children}
        {Icon && <Icon className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />}
      </span>
    </motion.button>
  );
};

export const ScrollReveal = ({ children, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.9, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  );
};