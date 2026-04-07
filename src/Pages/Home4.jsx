import React from 'react';
import MicroNavbar from '../Components/Layout/MicroNavbar';
import MicroFooter from '../Components/Layout/MicroFooter';
import HeroSection from '../Components/Sections/HeroSection';
import StatsSection from '../Components/Sections/StatsSection';
import FeatureGrid from '../Components/Sections/FeatureGrid';

const Home4 = () => {
  return (
    <div className="bg-black text-white selection:bg-blue-500/30 font-inter">
      <MicroNavbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <FeatureGrid />
        
        {/* Additional Logic Section */}
        <section className="py-32 bg-zinc-950">
          <div className="container-micro">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <h2 className="text-5xl font-black mb-8 leading-tight tracking-tight">
                  The infrastructure for <span className="gradient-text">human intelligence at scale.</span>
                </h2>
                <p className="text-zinc-400 text-lg mb-10 leading-relaxed">
                  Building foundation models requires more than just compute. It requires high-fidelity data, expert model curation, and human feedback loops that are as precise as the code itself.
                </p>
                <ul className="space-y-6">
                  {[
                    'Expert RLHF for model alignment',
                    'High-quality SFT data generation',
                    'Specialized domain knowledge',
                    'Real-time model evaluation'
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-4 text-white font-medium">
                      <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M20 6L9 17L4 12"/></svg>
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative group">
                <div className="absolute -inset-4 bg-blue-500/20 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative glass-morphism rounded-3xl p-8 border-white/10 aspect-square flex items-center justify-center overflow-hidden">
                   {/* Background Decorator */}
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                   <div className="w-64 h-64 border-2 border-white/5 rounded-full animate-ping opacity-20" />
                   <div className="absolute flex flex-col items-center gap-4">
                      <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-2xl">
                         <span className="text-black font-black text-3xl">AI</span>
                      </div>
                      <p className="text-zinc-500 font-mono text-sm tracking-widest uppercase">Platform Ready</p>
                   </div>
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

export default Home4;
