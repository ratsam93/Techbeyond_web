import React from 'react';
import { motion } from 'framer-motion';
import { MoveRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  };

  return (
    <section className="relative pt-40 pb-24 overflow-hidden min-h-screen flex items-center bg-black">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full -z-10" />

      <div className="container-micro">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Badge */}
          <motion.div 
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-white mb-8"
          >
            <span className="flex h-2 w-2 rounded-full bg-blue-500 animate-pulse" />
            Empowering the World's Leading AI Labs
          </motion.div>

          <motion.h1 
            variants={itemVariants}
            className="text-6xl md:text-8xl font-black mb-8 leading-[1.05] tracking-tight text-white"
          >
            The <span className="gradient-text">human infrastructure</span> for AI.
          </motion.h1>

          <motion.p 
            variants={itemVariants}
            className="text-xl md:text-2xl text-zinc-400 mb-12 leading-relaxed max-w-2xl mx-auto"
          >
            Techbeyond provides the precision-engineered training data and expert human intelligence that powers tomorrow's most capable foundation models.
          </motion.p>

          <motion.div 
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link to="/contact" className="btn-primary-micro min-w-[200px] justify-center px-8 py-4 text-lg">
              Get Started <MoveRight size={20} />
            </Link>
            <Link to="/about" className="btn-secondary-micro min-w-[200px] justify-center px-8 py-4 text-lg">
              Explore Our Platform
            </Link>
          </motion.div>

          {/* Social Proof / Trusted By */}
          <motion.div 
            variants={itemVariants}
            className="mt-24"
          >
            <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest mb-10">Trusted By Innovators At</p>
            <div className="flex flex-wrap justify-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
              {['OpenAI', 'Anthropic', 'Mistral', 'Meta', 'Google'].map((name) => (
                <span key={name} className="text-2xl font-black tracking-tighter text-white cursor-default select-none">
                  {name}
                </span >
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Hero Visual Decorator */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};

export default HeroSection;
