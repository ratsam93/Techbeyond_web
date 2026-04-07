import React from 'react';
import { Link } from 'react-router-dom';
import { MoveRight } from 'lucide-react';

const MicroFooter = () => {
  const footerLinks = [
    {
      title: 'Platform',
      links: [
        { name: 'Data Engine', path: '/data-engine' },
        { name: 'Intelligence', path: '/intelligence' },
        { name: 'Solutions', path: '/solutions' },
        { name: 'Pricing', path: '/pricing' },
      ]
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Research', path: '/insights' },
        { name: 'Experts', path: '/experts' },
        { name: 'Careers', path: '/careers' },
      ]
    },
    {
      title: 'Legal',
      links: [
        { name: 'Privacy Policy', path: '/privacy-policy' },
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Contact Us', path: '/contact' },
      ]
    }
  ];

  return (
    <footer className="pt-24 pb-12 border-t border-white/5 relative overflow-hidden bg-black">
      {/* Glow Effect */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-500/10 blur-[120px] rounded-full -z-10" />

      <div className="container-micro">
        {/* CTA Section */}
        <div className="flex flex-col items-center text-center mb-24 max-w-2xl mx-auto">
          <h2 className="text-5xl font-black mb-8 leading-[1.1] tracking-tight">
            Ready to <span className="gradient-text">scale your AI capabilities?</span>
          </h2>
          <p className="text-zinc-400 text-lg mb-10">
            Join the world's leading AI labs and enterprises leveraging our human-led data engine.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/contact" className="btn-primary-micro min-w-[180px] justify-center">
              Get Started <MoveRight size={18} />
            </Link>
            <Link to="/about" className="btn-secondary-micro min-w-[180px] justify-center">
              Learn More
            </Link>
          </div>
        </div>

        {/* Footer Links */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-20">
          <div className="col-span-2 lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-6 group">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:rotate-12 transition-transform">
                <span className="text-black font-black text-2xl">T</span>
              </div>
              <span className="text-2xl font-bold tracking-tighter">TECHBEYOND</span>
            </Link>
            <p className="text-zinc-400 max-w-sm mb-8 leading-relaxed">
              We provide human-led AI training data and model curation for the world's most innovative AI teams.
            </p>
            <div className="flex gap-4">
              <Link to="/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                #
              </Link>
              <Link to="/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                #
              </Link>
              <Link to="/" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all">
                #
              </Link>
            </div>
          </div>

          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-widest">{group.title}</h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="text-zinc-400 hover:text-white transition-colors text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500">
          <p>© {new Date().getFullYear()} Techbeyond. All rights reserved.</p>
          <p className="flex items-center gap-2">
            Built for the future of <span className="text-zinc-300 font-medium">Artificial Intelligence</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default MicroFooter;
