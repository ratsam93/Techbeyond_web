import React from 'react';
import { Link } from 'react-router-dom';
import MicroNavbar from '../Components/Layout/MicroNavbar';
import MicroFooter from '../Components/Layout/MicroFooter';
import { motion } from 'framer-motion';
import { Ghost, MoveRight, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="bg-black text-white font-inter min-h-screen flex flex-col">
      <MicroNavbar />
      
      <main className="flex-1 flex items-center justify-center pt-20">
        <section className="container-micro text-center">
           <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto"
           >
              <div className="mb-10 flex justify-center">
                 <div className="w-24 h-24 bg-white/5 rounded-3xl flex items-center justify-center border border-white/10 animate-floating">
                    <Ghost size={48} className="text-zinc-500" />
                 </div>
              </div>
              <h1 className="text-8xl font-black mb-6 tracking-tighter">404</h1>
              <h2 className="text-3xl font-bold mb-8 tracking-tight">The data you're looking for <span className="gradient-text">is missing.</span></h2>
              <p className="text-zinc-400 text-lg mb-12 leading-relaxed">
                 The page you are trying to reach has been archived or moved. Our experts are already indexing the correct path.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                 <Link to="/" className="btn-primary-micro min-w-[200px] justify-center px-8 py-4">
                    <ArrowLeft size={18} className="mr-2" /> Back to Home
                 </Link>
                 <Link to="/contact" className="btn-secondary-micro min-w-[200px] justify-center px-8 py-4">
                    Contact Support <MoveRight size={18} className="ml-2" />
                 </Link>
              </div>
           </motion.div>
        </section>
      </main>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -z-10 animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-purple-600/5 blur-[150px] rounded-full -z-10" />

      <MicroFooter />
    </div>
  );
};

export default NotFound;
