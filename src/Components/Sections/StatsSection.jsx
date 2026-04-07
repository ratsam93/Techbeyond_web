import React from 'react';
import { motion } from 'framer-motion';

const StatsSection = () => {
  const stats = [
    { label: 'Human Experts', value: '50,000+' },
    { label: 'Models Trained', value: '2,500+' },
    { label: 'Data Points Curated', value: '1.2B+' },
    { label: 'Global Offices', value: '12' },
    { label: 'Accuracy Rating', value: '99.9%' }
  ];

  return (
    <section className="py-20 border-y border-white/5 bg-black/50 overflow-hidden">
      <div className="flex whitespace-nowrap overflow-hidden">
        {/* Repeating Animation Loop */}
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="flex gap-24 items-center shrink-0 pr-24"
        >
          {[...stats, ...stats].map((stat, idx) => (
            <div key={idx} className="flex items-center gap-6">
              <span className="text-5xl md:text-6xl font-black text-white tracking-tighter">
                {stat.value}
              </span>
              <span className="text-zinc-500 font-semibold uppercase tracking-widest text-sm">
                {stat.label}
              </span>
              <div className="w-2 h-2 rounded-full bg-blue-500" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
