import React from 'react';
import MicroNavbar from '../Components/Layout/MicroNavbar';
import MicroFooter from '../Components/Layout/MicroFooter';
import { motion } from 'framer-motion';
import { Brain, Cpu, MessageSquare, Zap, Target, Search } from 'lucide-react';

const Intelligence = () => {
  const models = [
    { title: 'Cortex-1', type: 'Foundation Model', desc: 'Our flagship LLM optimized for long-horizon reasoning and complex agentic tasks.', icon: <Brain size={32} className="text-blue-500" /> },
    { title: 'Realm', type: 'World Model', desc: 'Physics-informed neural networks designed for robotics and spatial intelligence.', icon: <Target size={32} className="text-purple-500" /> },
    { title: 'Zeno', type: 'Evaluation Suite', desc: 'Real-time benchmarking and stress-testing for any generative model.', icon: <Zap size={32} className="text-yellow-500" /> }
  ];

  return (
    <div className="bg-black text-white font-inter">
      <MicroNavbar />
      
      <main className="pt-40 pb-32">
        <section className="container-micro mb-32">
           <div className="max-w-4xl">
              <h1 className="text-6xl md:text-8xl font-black mb-8 tracking-tighter">
                 Beyond <span className="gradient-text">Parameters.</span>
              </h1>
              <p className="text-zinc-400 text-xl leading-relaxed max-w-2xl mb-12">
                 We are building the next generation of model intelligence—optimized for reasoning, safety, and real-world utility.
              </p>
              <div className="flex gap-4">
                 <button className="btn-primary-micro px-8 py-4">Explore our Research</button>
                 <button className="btn-secondary-micro px-8 py-4">Read our Whitepaper</button>
              </div>
           </div>
        </section>

        {/* Model Showcase */}
        <section className="py-24 bg-zinc-950 border-y border-white/5 overflow-hidden">
           <div className="container-micro">
              <h2 className="text-3xl font-bold mb-16 tracking-tight text-center">Our <span className="gradient-text">Foundation.</span></h2>
              <div className="grid md:grid-cols-3 gap-8">
                 {models.map((model, i) => (
                    <motion.div 
                       key={model.title}
                       initial={{ opacity: 0, y: 20 }}
                       whileInView={{ opacity: 1, y: 0 }}
                       viewport={{ once: true }}
                       className="glow-card group p-10"
                    >
                       <div className="mb-8 p-6 bg-white/5 rounded-2xl w-fit group-hover:scale-110 transition-transform duration-500">{model.icon}</div>
                       <div className="mb-4">
                          <span className="text-blue-500 text-xs font-mono tracking-widest uppercase mb-1 d-block">{model.type}</span>
                          <h3 className="text-3xl font-black">{model.title}</h3>
                       </div>
                       <p className="text-zinc-400 leading-relaxed mb-8">{model.desc}</p>
                       <button className="text-white font-semibold flex gap-2 items-center hover:gap-4 transition-all">
                          Learn More <Search size={18} />
                       </button>
                    </motion.div>
                 ))}
              </div>
           </div>
        </section>

        {/* Technical Specification Section */}
        <section className="py-32 container-micro">
           <div className="grid lg:grid-cols-2 gap-24 items-center">
              <div className="relative aspect-square glass-morphism rounded-3xl p-12 overflow-hidden flex items-center justify-center border-white/10 group">
                 <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent group-hover:opacity-100 opacity-50 transition-opacity" />
                 <Cpu size={128} className="text-white/20 group-hover:scale-110 transition-transform duration-1000" />
                 <div className="absolute top-12 left-12 p-3 bg-white/5 rounded-xl border border-white/10 text-xs font-mono">CORE-INFRA-v4</div>
              </div>
              <div>
                 <h2 className="text-4xl font-black mb-8 tracking-tight">Enterprise Intelligence at <span className="gradient-text">Sub-Millisecond Latency.</span></h2>
                 <p className="text-zinc-400 text-lg leading-relaxed mb-10">
                    Our architecture is designed for the most demanding real-time applications. From high-frequency trading to safety-critical robotics, we deliver intelligence where it matters most.
                 </p>
                 <div className="grid grid-cols-2 gap-8">
                    <div>
                       <div className="text-3xl font-black mb-2 text-white">99.9%</div>
                       <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest">Accuracy</p>
                    </div>
                    <div>
                       <div className="text-3xl font-black mb-2 text-white">&lt;50ms</div>
                       <p className="text-zinc-500 text-sm font-semibold uppercase tracking-widest">Inference</p>
                    </div>
                 </div>
              </div>
           </div>
        </section>
      </main>

      <MicroFooter />
    </div>
  );
};

export default Intelligence;
