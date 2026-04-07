import React from 'react';
import MicroNavbar from '../Components/Layout/MicroNavbar';
import MicroFooter from '../Components/Layout/MicroFooter';
import { motion } from 'framer-motion';
import { Globe, Shield, BarChart, Users, Cpu, Code } from 'lucide-react';

const Solutions = () => {
  const categories = [
    { title: 'For AI Labs', desc: 'Accelerate your foundation model training with high-fidelity, human-curated data and RLHF expert loops.', icon: <Cpu size={32} className="text-blue-500" /> },
    { title: 'For Enterprises', desc: 'Securely fine-tune and deploy proprietary models for specialized domain tasks with full data sovereignty.', icon: <Shield size={32} className="text-purple-500" /> },
    { title: 'For Startups', desc: 'Rapidly scale your AI capabilities with our off-the-shelf datasets and model evaluation infrastructure.', icon: <Zap size={32} className="text-yellow-500" /> }
  ];

  const benefits = [
    { title: 'RLHF Tuning', desc: 'Expert human feedback for precise model alignment.', icon: <Users size={24} /> },
    { title: 'Clean Datasets', desc: 'Superhuman data labeling and sanitation.', icon: <Database size={24} /> },
    { title: 'Agentic Safety', desc: 'Stress-testing for autonomous agent safety.', icon: <Shield size={24} /> },
    { title: 'Edge Deployment', desc: 'Optimized models for edge computing.', icon: <Globe size={24} /> },
    { title: 'Code Synthesis', desc: 'High-quality software engineering data.', icon: <Code size={24} /> },
    { title: 'Analytics', desc: 'Real-time performance metrics.', icon: <BarChart size={24} /> }
  ];

  return (
    <div className="bg-black text-white font-inter">
      <MicroNavbar />
      
      <main className="pt-40">
        <section className="container-micro mb-32">
           <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter leading-tight">
                 Engineered for <span className="gradient-text">Success.</span>
              </h1>
              <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl">
                 Tailored AI infrastructure and human data solutions for the world’s most ambitious teams.
              </p>
           </div>
        </section>

        {/* Categories */}
        <section className="py-24 bg-zinc-950 border-y border-white/5">
           <div className="container-micro">
              <div className="grid md:grid-cols-3 gap-8">
                 {categories.map((cat, i) => (
                    <motion.div 
                       key={cat.title}
                       initial={{ opacity: 0, scale: 0.95 }}
                       whileInView={{ opacity: 1, scale: 1 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="glass-morphism p-10 rounded-3xl border-white/10 hover:border-blue-500/30 transition-all group"
                    >
                       <div className="mb-6 p-4 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">{cat.icon}</div>
                       <h3 className="text-3xl font-black mb-4">{cat.title}</h3>
                       <p className="text-zinc-400 leading-relaxed mb-8">{cat.desc}</p>
                       <button className="btn-secondary-micro w-full justify-center">Contact Sales</button>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Bento Grid Features */}
        <section className="py-32 container-micro">
           <h2 className="text-4xl font-black mb-16 tracking-tight text-center">Core <span className="gradient-text">Capabilities.</span></h2>
           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {benefits.map((benefit, i) => (
                 <motion.div 
                    key={benefit.title}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="p-8 border border-white/5 rounded-2xl flex flex-col gap-4 hover:bg-white/5 transition-all"
                 >
                    <div className="text-blue-500">{benefit.icon}</div>
                    <div>
                       <h4 className="text-lg font-bold mb-1">{benefit.title}</h4>
                       <p className="text-zinc-500 text-sm">{benefit.desc}</p>
                    </div>
                 </motion.div>
              ))}
           </div>
        </section>
      </main>

      <MicroFooter />
    </div>
  );
};

// Simple icon placeholder helper
const Database = ({ size }) => <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>;

export default Solutions;
