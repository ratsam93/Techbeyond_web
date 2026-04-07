import React from 'react';
import { motion } from 'framer-motion';
import { Database, Shield, Zap, Target, Cpu, RefreshCw } from 'lucide-react';

const FeatureGrid = () => {
  const features = [
    {
      title: 'Precision-Engineered Training Data',
      description: 'High-fidelity, human-vetted datasets for foundation model pre-training and fine-tuning.',
      icon: <Database className="text-blue-500" size={32} />
    },
    {
      title: 'Human-Led Model Curation',
      description: 'Expert human feedback loops (RLHF) to ensure safety, reliability, and precision.',
      icon: <Shield className="text-purple-500" size={32} />
    },
    {
      title: 'Scaleable GPU Infrastructure',
      description: 'Lightning-fast training pipelines optimized for the world’s most demanding AI tasks.',
      icon: <Zap className="text-yellow-500" size={32} />
    },
    {
      title: 'Vertical AI Solutions',
      description: 'Custom domain experts for specialized industries including Law, Finance, and STEM.',
      icon: <Target className="text-green-500" size={32} />
    },
    {
      title: 'Automated Evaluation Frameworks',
      description: 'Real-time benchmarking and stress-testing for LLMs and Generative Models.',
      icon: <RefreshCw className="text-red-500" size={32} />
    },
    {
      title: 'Continuous Optimization',
      description: 'Adaptive learning systems that evolve with your model’s growth and performance.',
      icon: <Cpu className="text-cyan-500" size={32} />
    }
  ];

  return (
    <section className="py-32 bg-black overflow-hidden">
      <div className="container-micro">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-black mb-6 tracking-tight"
          >
            Engineering the <span className="gradient-text">future of intelligence.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-zinc-400 text-lg max-w-2xl mx-auto"
          >
            Our comprehensive platform provides everything you need to build, train, and scale the next generation of AI models.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <motion.div 
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glow-card group"
            >
              <div className="mb-6 p-4 rounded-xl bg-white/5 w-fit group-hover:scale-110 transition-transform duration-500">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{feature.title}</h3>
              <p className="text-zinc-400 leading-relaxed text-sm">
                {feature.description}
              </p>
              
              {/* Subtle Line Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-transparent -mr-16 -mt-16 rounded-full blur-2xl group-hover:opacity-100 opacity-0 transition-opacity" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureGrid;
