import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion } from 'motion/react';
import { 
  Compass, 
  Mountain, 
  Mail, 
  Instagram, 
  Music, 
  ChevronRight, 
  Award, 
  Briefcase, 
  Map as MapIcon
} from 'lucide-react';
import { experiences, skills, projects, type Experience, type Project } from './data';

// --- Components ---

const Header = () => {
  const location = useLocation();
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-forest/80 backdrop-blur-md border-b border-parchment/10">
      <nav className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-serif text-2xl font-bold text-parchment tracking-tight">
          LLK<span className="text-amber-glow">.</span>
        </Link>
        <div className="flex gap-8">
          {[
            { name: 'Home', path: '/' },
            { name: 'Portfolio', path: '/portfolio' },
            { name: 'Contact', path: '#contact' }
          ].map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`text-sm font-medium transition-colors hover:text-amber-glow ${
                location.pathname === item.path ? 'text-amber-glow' : 'text-parchment/70'
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

const Footer = () => (
  <footer id="contact" className="bg-midnight py-20 border-t border-parchment/10">
    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
      <div>
        <h2 className="font-serif text-4xl font-bold mb-6">Let's start the <span className="text-amber-glow italic">expedition</span>.</h2>
        <p className="text-parchment/60 max-w-md mb-8">
          Whether it's a complex administrative project or a mountain trek, I'm ready to lead with structure and heart.
        </p>
      </div>
      <div className="space-y-4">
        <a href="mailto:ludwinalrstk@gmail.com" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-parchment/5 flex items-center justify-center group-hover:bg-amber-glow/20 transition-colors">
            <Mail className="w-5 h-5 text-amber-glow" />
          </div>
          <div>
            <p className="text-xs text-parchment/40 uppercase tracking-widest">Email</p>
            <p className="text-parchment group-hover:text-amber-glow transition-colors">ludwinalrstk@gmail.com</p>
          </div>
        </a>
        <a href="https://instagram.com/inicupi" target="_blank" rel="noreferrer" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-parchment/5 flex items-center justify-center group-hover:bg-amber-glow/20 transition-colors">
            <Instagram className="w-5 h-5 text-amber-glow" />
          </div>
          <div>
            <p className="text-xs text-parchment/40 uppercase tracking-widest">Instagram</p>
            <p className="text-parchment group-hover:text-amber-glow transition-colors">@inicupi</p>
          </div>
        </a>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 mt-20 pt-8 border-t border-parchment/5 text-center text-parchment/30 text-xs">
      &copy; {new Date().getFullYear()} Ludwina Larasati Kristiawan. Orchestrating structure, fueled by the wild.
    </div>
  </footer>
);

const SectionHeader = ({ title, icon: Icon, subtitle }: { title: string, icon: any, subtitle?: string }) => (
  <div className="mb-12">
    <div className="flex items-center gap-3 mb-2">
      <Icon className="w-6 h-6 text-amber-glow" />
      <h2 className="font-serif text-3xl font-bold tracking-tight">{title}</h2>
    </div>
    {subtitle && <p className="text-parchment/50 font-medium">{subtitle}</p>}
    <div className="w-20 h-1 bg-amber-glow mt-4 rounded-full"></div>
  </div>
);

// --- Pages ---

const HomePage = () => {
  return (
    <div className="topo-bg">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-20">
          <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-forest to-transparent"></div>
          {/* Subtle Mountain Silhouette */}
          <svg className="absolute bottom-0 left-0 w-full h-64 text-midnight fill-current" viewBox="0 0 1440 320">
            <path d="M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,192C960,203,1056,181,1152,149.3C1248,117,1344,75,1392,53.3L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-amber-glow/10 text-amber-glow text-xs font-bold uppercase tracking-widest mb-6 border border-amber-glow/20">
              Currently Student @ SMAK Frateran Surabaya
            </span>
            <h1 className="font-serif text-6xl md:text-8xl font-bold mb-6 leading-tight">
              Ludwina <br />
              <span className="text-amber-glow italic">Larasati</span>
            </h1>
            <p className="text-xl md:text-2xl text-parchment/80 font-light mb-8 max-w-lg border-l-2 border-copper pl-6">
              "Orchestrating structure, fueled by the wild."
            </p>
            <div className="flex gap-4">
              <Link to="/portfolio" className="px-8 py-4 bg-amber-glow text-forest font-bold rounded-sm glow-hover flex items-center gap-2">
                View Portfolio <ChevronRight className="w-4 h-4" />
              </Link>
              <a href="#about" className="px-8 py-4 border border-parchment/20 text-parchment font-bold rounded-sm hover:bg-parchment/5 transition-colors">
                About Me
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="polaroid -rotate-3 w-80 mx-auto">
              <img 
                src="/uploads/profil.jpeg" 
                alt="Ludwina Larasati" 
                className="w-full h-96 object-cover mb-4"
                referrerPolicy="no-referrer"
              />
              <p className="font-serif text-center text-gray-800 text-lg italic">The Organized Adventurer</p>
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-24 h-24 bg-copper/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-amber-glow/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-midnight/50 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
          <div className="relative">
            <div className="aspect-square bg-forest rounded-2xl overflow-hidden shadow-2xl border border-parchment/10">
              <img 
                src="/uploads/personal.jpeg" 
                alt="Mountain Trek" 
                className="w-full h-full object-cover opacity-60 mix-blend-luminosity hover:opacity-100 transition-opacity duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest via-transparent to-transparent"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 bg-copper p-6 rounded-xl shadow-xl">
              <Compass className="w-12 h-12 text-parchment animate-pulse" />
            </div>
          </div>
          <div>
            <SectionHeader title="About Me" icon={Mountain} subtitle="Discipline meets Adventure" />
            <div className="space-y-6 text-lg text-parchment/70 leading-relaxed">
              <p>
                My name is <span className="text-parchment font-bold">Ludwina</span>. I thrive at the intersection of discipline and adventure. As a meticulous leader, I find satisfaction in creating efficient structures and administrative order.
              </p>
              <p>
                When I'm not managing projects, you'll find me listening to music to recharge or hiking up a mountain—I deeply love nature and the perspective it gives me.
              </p>
              <p className="italic text-amber-glow font-serif text-xl">
                "I believe that good management is like a well-planned expedition: it requires a clear map, a strong rhythm, and the resilience to climb."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-parchment/10 to-transparent"></div>
        
        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="text-center mb-20">
            <SectionHeader title="Experience" icon={Briefcase} />
          </div>
          
          <div className="grid gap-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`wax-seal p-8 bg-parchment/5 rounded-lg border border-parchment/10 hover:border-amber-glow/30 transition-all group`}
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold text-parchment group-hover:text-amber-glow transition-colors">{exp.title}</h3>
                    <p className="text-parchment/60 mt-2">{exp.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-copper">
                    <Award className="w-4 h-4" />
                    {exp.type}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        
        {/* Subtle musical notes integrated into background */}
        <Music className="absolute top-1/4 right-10 w-24 h-24 text-parchment/5 -rotate-12" />
        <Music className="absolute bottom-1/4 left-10 w-16 h-16 text-parchment/5 rotate-12" />
      </section>
    </div>
  );
};

const PortfolioPage = () => {
  return (
    <div className="pt-32 pb-20 topo-bg min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <SectionHeader title="My Skills" icon={Compass} subtitle="Equipped for any terrain" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, i) => (
              <div key={i} className="p-6 bg-midnight/50 border border-parchment/10 rounded-xl flex items-start gap-4 hover:border-amber-glow/50 transition-colors group">
                <div className="w-10 h-10 rounded-lg bg-copper/20 flex items-center justify-center shrink-0 group-hover:bg-amber-glow/20 transition-colors">
                  <Award className="w-5 h-5 text-amber-glow" />
                </div>
                <span className="text-lg font-medium text-parchment/80">{skill}</span>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="flex items-center justify-between mb-12">
          <SectionHeader title="Projects" icon={MapIcon} subtitle="The map of my journey" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group"
            >
              <div className="relative mb-6">
                <div className="polaroid rotate-1 group-hover:rotate-0 transition-transform duration-500">
                  <img 
                    src={project.images[0]} 
                    alt={project.title} 
                    className="w-full h-64 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  {project.images.length > 1 && (
                    <div className="absolute top-2 right-2 px-2 py-1 bg-black/50 backdrop-blur-sm text-[10px] text-white rounded">
                      +{project.images.length - 1} more
                    </div>
                  )}
                </div>
                <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-amber-glow flex items-center justify-center rounded-full shadow-lg transform scale-0 group-hover:scale-100 transition-transform duration-300">
                  <ChevronRight className="w-6 h-6 text-forest" />
                </div>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-amber-glow mb-2 block">{project.category}</span>
              <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-amber-glow transition-colors">{project.title}</h3>
              <p className="text-parchment/60 text-sm leading-relaxed">{project.description}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
