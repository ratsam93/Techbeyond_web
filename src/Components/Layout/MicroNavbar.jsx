import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, MoveRight } from 'lucide-react';

const MicroNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Data Engine', path: '/data-engine' },
    { name: 'Intelligence', path: '/intelligence' },
    { name: 'Solutions', path: '/solutions', dropdown: [
      { name: 'For AI Labs', path: '/solutions/ai-labs' },
      { name: 'Custom AI', path: '/solutions/custom' }
    ]},
    { name: 'Research', path: '/insights' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'py-4' : 'py-6'}`}>
      <div className="container-micro">
        <div className={`glass-morphism rounded-2xl px-6 py-3 flex items-center justify-between transition-all ${scrolled ? 'shadow-2xl border-white/20' : 'border-white/10'}`}>
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
              <span className="text-black font-black text-xl">T</span>
            </div>
            <span className="text-xl font-bold tracking-tighter">TECHBEYOND</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <button className="flex items-center gap-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    {link.name} <ChevronDown size={14} className="group-hover:rotate-180 transition-transform" />
                  </button>
                ) : (
                  <Link to={link.path} className="text-sm font-medium text-zinc-400 hover:text-white transition-colors">
                    {link.name}
                  </Link>
                )}
                
                {link.dropdown && (
                  <div className="absolute top-full left-0 mt-4 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                    <div className="bg-zinc-900 border border-white/10 rounded-xl p-2 min-w-[200px] shadow-2xl">
                      {link.dropdown.map((sub) => (
                        <Link 
                          key={sub.name} 
                          to={sub.path}
                          className="block px-4 py-2 text-sm text-zinc-400 hover:text-white hover:bg-white/5 rounded-lg transition-all"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link to="/contact" className="btn-secondary-micro text-sm">
              Log in
            </Link>
            <Link to="/contact" className="btn-primary-micro text-sm">
              Get Started <MoveRight size={16} />
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden absolute top-full left-0 right-0 mt-2 px-6"
          >
            <div className="glass-morphism rounded-2xl p-6 flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link key={link.name} to={link.path} className="text-lg font-medium" onClick={() => setIsOpen(false)}>
                  {link.name}
                </Link>
              ))}
              <hr className="border-white/10" />
              <Link to="/contact" className="btn-primary-micro w-full justify-center" onClick={() => setIsOpen(false)}>
                Get Started
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default MicroNavbar;
