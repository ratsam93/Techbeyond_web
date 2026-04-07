import React from 'react';
import MicroNavbar from '../Components/Layout/MicroNavbar';
import MicroFooter from '../Components/Layout/MicroFooter';
import { motion } from 'framer-motion';
import { Database, UserCheck, Zap, Globe, Shield, BarChart } from 'lucide-react';

const DataEngine = () => {
  const sections = [
    {
      title: 'Human-in-the-loop data curation',
      desc: 'Our global network of 50,000+ experts identifies, labels, and enriches data with superhuman precision.',
      icon: <UserCheck size={40} className="text-blue-500" />
    },
    {
      title: 'Multi-modal expertise',
      desc: 'From complex code generation to medical analysis and creative writing—our data engine handles it all.',
      icon: <Database size={40} className="text-purple-500" />
    },
    {
      title: 'Enterprise-grade security',
      desc: 'Military-grade encryption and strict privacy protocols ensure your sensitive training data remains yours.',
      icon: <Shield size={40} className="text-green-500" />
    }
  ];

  return (
    <div className="bg-black text-white font-inter">
      <MicroNavbar />
      
      <main className="pt-40">
        {/* Hero */}
        <section className="container-micro mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
              The <span className="gradient-text">Data Engine</span> for the next billion parameters.
            </h1>
            <p className="text-zinc-400 text-xl leading-relaxed mb-12">
              High-fidelity datasets, expert human labeling, and real-time model evaluation at global scale.
            </p>
            <button className="btn-primary-micro px-8 py-4 text-lg">
              Start Training
            </button>
          </motion.div>
        </section>

        {/* Feature Grid */}
        <section className="py-24 bg-zinc-950 border-y border-white/5">
          <div className="container-micro">
            <div className="grid md:grid-cols-3 gap-12">
              {sections.map((s, i) => (
                <motion.div 
                   key={s.title}
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ delay: i * 0.1 }}
                >
                  <div className="mb-6">{s.icon}</div>
                  <h3 className="text-2xl font-bold mb-4">{s.title}</h3>
                  <p className="text-zinc-400 leading-relaxed">{s.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Visual Showcase */}
        <section className="py-32 overflow-hidden">
           <div className="container-micro text-center">
              <h2 className="text-4xl font-black mb-16 tracking-tight">Built for <span className="gradient-text">Performance.</span></h2>
              <div className="glass-morphism rounded-3xl p-12 aspect-[21/9] flex items-center justify-center relative">
                 <div className="absolute inset-0 bg-blue-500/5 animate-pulse" />
                 <div className="flex flex-col items-center gap-4 text-zinc-500">
                    <BarChart size={64} />
                    <p className="font-mono text-xs tracking-widest uppercase">Data Flow Visualization</p>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <MicroFooter />
    </div>
  );
};

export default DataEngine;
