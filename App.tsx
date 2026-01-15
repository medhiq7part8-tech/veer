
import React, { useState, useEffect } from 'react';
import { 
  ChevronRight, 
  Menu, 
  X,
  Star, 
  ChevronDown, 
  Home, 
  Layout, 
  Phone, 
  Calculator, 
  MoreHorizontal,
  MapPin,
  CheckCircle2,
  Info,
  PenTool,
  Briefcase,
  Map,
  BookOpen,
  Mail,
  Compass
} from 'lucide-react';
import { SERVICES, TESTIMONIALS, WHY_CHOOSE, FAQS, getIcon } from './constants';
import EstimateCalculator from './EstimateCalculator';
import WhatsAppWidget from './WhatsAppWidget';

/**
 * SEO STRATEGY BLOCK
 * --------------------------------
 * Primary Keyword: Interior Designers in Gurgaon
 * Secondary Keywords: Architects in Gurgaon, Modular kitchen in Gurgaon
 * Schema: LocalBusiness, FAQPage, Review
 */

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'residential' | 'commercial'>('residential');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Logo direct link using the provided Google Drive ID
  const logoUrl = "https://lh3.googleusercontent.com/d/1mLCmCMBhwNSXEp6Yz5D7jeHa-kReGFj9";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Lock scroll when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMenuOpen]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { label: 'Home', icon: <Home size={20} />, href: '#' },
    { label: 'About Us', icon: <Info size={20} />, href: '#about' },
    { label: 'Estimate', icon: <Calculator size={20} />, href: '#calculator' },
    { label: 'Services', icon: <Compass size={20} />, href: '#services' },
    { label: 'Portfolio', icon: <Briefcase size={20} />, href: '#portfolio' },
    { label: 'Process', icon: <PenTool size={20} />, href: '#process' },
    { label: 'Reviews', icon: <Star size={20} />, href: '#reviews' },
    { label: 'Contact Us', icon: <Mail size={20} />, href: '#contact' },
  ];

  return (
    <div className="min-h-screen border-box overflow-x-hidden">
      {/* WHATSAPP CHATBOT WIDGET */}
      <WhatsAppWidget />

      {/* STICKY CTA BUTTON (Desktop Only, Right Side) */}
      <div className={`hidden lg:flex fixed right-10 bottom-24 z-50 transition-all duration-500 transform ${isScrolled ? 'translate-x-0 opacity-100' : 'translate-x-32 opacity-0'}`}>
        <a 
          href="#calculator"
          className="bg-indigo-600 text-white p-6 rounded-full shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:scale-110 transition-transform group flex items-center gap-3 pr-8"
        >
          <div className="bg-white/20 p-2 rounded-full"><Calculator size={24} /></div>
          <span className="font-black text-sm uppercase tracking-widest">Check Your Project Cost</span>
        </a>
      </div>

      {/* MOBILE MENU OVERLAY & PANEL */}
      <div 
        className={`fixed inset-0 z-[100] transition-opacity duration-500 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay */}
        <div 
          className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm"
          onClick={toggleMenu}
        />
        
        {/* Slide-in Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-[85%] max-w-sm bg-slate-900 shadow-2xl transition-transform duration-500 ease-out p-8 flex flex-col ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="flex justify-end items-center mb-10">
            {/* Logo removed from here as per instruction */}
            <button 
              onClick={toggleMenu}
              className="p-3 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors cursor-pointer"
            >
              <X size={28} />
            </button>
          </div>

          <nav className="flex-1 overflow-y-auto custom-scrollbar pr-2">
            <ul className="space-y-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a 
                    href={link.href}
                    onClick={toggleMenu}
                    className="flex items-center gap-5 text-slate-300 hover:text-white py-5 px-3 border-b border-white/5 transition-all group"
                  >
                    <span className="text-indigo-400 group-hover:scale-110 transition-transform">{link.icon}</span>
                    <span className="font-black tracking-[0.15em] uppercase text-xs">{link.label}</span>
                  </a>
                </li>
              ))}
              
              <li className="pt-8 pb-4">
                <span className="text-[10px] font-black text-slate-500 uppercase tracking-[0.3em] px-3">Service Regions</span>
              </li>
              {['Gurgaon', 'Delhi NCR', 'Pan India'].map(loc => (
                <li key={loc}>
                  <a href={`#${loc.toLowerCase().replace(' ', '-')}`} onClick={toggleMenu} className="flex items-center gap-5 text-slate-400 hover:text-white py-4 px-3 transition-colors group">
                    <Map size={20} className="text-slate-600 group-hover:text-indigo-400 transition-colors" />
                    <span className="font-bold text-sm">{loc}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-auto pt-10 border-t border-white/5">
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all shadow-2xl shadow-indigo-600/30 active:scale-95 cursor-pointer">
              Book Free Consultation
            </button>
            <div className="flex justify-center gap-6 mt-10">
               <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
               <div className="w-1.5 h-1.5 rounded-full bg-slate-700"></div>
            </div>
          </div>
        </div>
      </div>

      {/* 1. STICKY TOP NAVIGATION (PREMIUM BEHAVIOR) */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-[60] transition-all duration-500 ease-in-out px-4 md:px-10 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-lg py-3 translate-y-0' 
            : 'bg-transparent py-8'
        }`}
        aria-label="Main Navigation"
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo Container - Prevents Layout Shift */}
          <div className="flex items-center w-32 md:w-48 h-12 relative overflow-hidden">
            <a href="/" className="block">
              <img 
                src={logoUrl} 
                alt="Veer Architects Logo" 
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1) ${
                  isScrolled && !isMenuOpen 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 -translate-y-12 pointer-events-none'
                }`}
              />
            </a>
          </div>

          {/* Desktop Menu - Visible only above 1024px */}
          <div className="hidden lg:flex items-center gap-10">
            {['Services', 'Portfolio', 'Process', 'Reviews', 'FAQs'].map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`} 
                className={`text-sm font-bold tracking-widest uppercase transition-all duration-300 hover:text-indigo-600 ${
                  isScrolled ? 'text-slate-900' : 'text-white/80 hover:text-white'
                }`}
              >
                {link}
              </a>
            ))}
            
            <a 
              href="#calculator"
              className={`ml-4 px-7 py-3 rounded-full font-bold text-sm transition-all duration-300 transform hover:scale-105 active:scale-95 flex items-center gap-2 ${
                isScrolled 
                  ? 'bg-indigo-600 text-white shadow-xl shadow-indigo-100' 
                  : 'bg-white/10 backdrop-blur-md text-white border border-white/30 hover:bg-white/20'
              }`}
            >
              <Calculator size={16} /> Get Free Estimate
            </a>
          </div>

          {/* Mobile Menu Button - Hidden on Desktop (Strictly lg:hidden) */}
          <button 
            onClick={toggleMenu}
            className={`lg:hidden p-2.5 rounded-xl transition-all duration-300 transform active:scale-90 cursor-pointer ${
              isScrolled ? 'bg-slate-100 text-slate-900' : 'bg-white/10 text-white backdrop-blur-sm shadow-xl'
            }`}
            aria-label="Toggle mobile menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={28} />
          </button>
        </div>
      </nav>

      {/* 2. ABOVE-THE-FOLD HERO */}
      <header className="relative h-screen flex items-center overflow-hidden bg-slate-900">
        <div className="absolute inset-0 z-0 scale-110">
          <img 
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&q=80&w=2000" 
            alt="Premium Interior Design Gurgaon" 
            className="w-full h-full object-cover opacity-60 transition-transform duration-[10s] animate-pulse-slow"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/40 to-transparent"></div>
        </div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 pt-20">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-indigo-600/20 border border-indigo-500/30 rounded-full text-indigo-300 font-bold text-xs uppercase tracking-widest mb-6 animate-fade-in">
              Award Winning Architects in Gurgaon
            </div>
            <h1 className="heading-font text-5xl md:text-8xl text-white font-bold leading-tight mb-8">
              Bespeaking <span className="text-indigo-400">Luxury</span> <br/>In Every Detail.
            </h1>
            <p className="text-lg md:text-xl text-slate-300 mb-12 leading-relaxed max-w-2xl font-light">
              Elevating living standards with architectural precision and premium interior designs. 
              Join 35,000+ homeowners who entrusted Veer Architects for their dream spaces.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a href="#calculator" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-2xl shadow-indigo-600/30">
                Get Free Estimate <ChevronRight size={22} />
              </a>
              <button className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 transition-all transform hover:-translate-y-1 cursor-pointer">
                Book Free Consultation
              </button>
            </div>
            
            <div className="mt-16 flex items-center gap-10">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map(i => (
                  <img key={i} src={`https://picsum.photos/seed/${i+100}/80/80`} className="w-14 h-14 rounded-full border-4 border-slate-900 shadow-xl" alt="Satisfied Client" />
                ))}
                <div className="w-14 h-14 rounded-full border-4 border-slate-900 bg-indigo-600 flex items-center justify-center text-white font-bold text-sm">+35k</div>
              </div>
              <div className="border-l border-white/20 pl-10">
                <div className="flex items-center gap-1.5 text-yellow-400 mb-1">
                  {[1, 2, 3, 4, 5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                  <span className="text-white font-black text-xl ml-2">5/5</span>
                </div>
                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">Verified Google Reviews</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce cursor-pointer opacity-40 hover:opacity-100 transition-opacity" onClick={() => window.scrollTo({top: window.innerHeight - 50, behavior: 'smooth'})}>
          <ChevronDown className="text-white" size={40} />
        </div>
      </header>

      {/* AI ESTIMATE CALCULATOR SECTION */}
      <EstimateCalculator />

      {/* 3. END-TO-END SOLUTIONS (ICON GRID) */}
      <section id="services" className="py-32 bg-white border-t border-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font tracking-tight text-slate-900">End-to-End Interior Solutions</h2>
            <div className="w-24 h-1.5 bg-indigo-600 mx-auto mb-6 rounded-full"></div>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg">We manage every aspect of your home transformation, ensuring a seamless journey from concept to reality.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {SERVICES.map((service) => (
              <div 
                key={service.id} 
                className="group p-10 border border-slate-100 rounded-[2.5rem] hover:border-indigo-100 hover:bg-indigo-50/20 transition-all duration-500 text-center cursor-pointer transform hover:-translate-y-2 shadow-sm hover:shadow-2xl hover:shadow-indigo-500/10"
              >
                <div className="w-20 h-20 bg-slate-50 rounded-3xl flex items-center justify-center mx-auto mb-8 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-500 text-indigo-600">
                  {getIcon(service.iconName, "w-10 h-10")}
                </div>
                <h3 className="font-bold text-slate-800 text-lg leading-snug">{service.label}</h3>
                <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity flex justify-center">
                  <span className="text-xs text-indigo-600 font-bold uppercase tracking-widest border-b-2 border-indigo-600 pb-1">Explore Design</span>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
             <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-bold transition-all hover:bg-indigo-600 hover:shadow-xl shadow-slate-200 cursor-pointer">
                Explore All 50+ Custom Services
             </button>
          </div>
        </div>
      </section>

      {/* 4. EXPERIENCE YOU'LL LOVE (SOCIAL PROOF) */}
      <section id="reviews" className="py-32 bg-slate-50 relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-16 mb-24">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-bold mb-8 heading-font tracking-tight leading-tight">An Experience <br/><span className="text-indigo-600">You'll Love</span></h2>
              <p className="text-slate-600 text-xl leading-relaxed font-light">Join thousands of homeowners in Gurgaon who transformed their lives by upgrading their living spaces with Veer Architects.</p>
            </div>
            <div className="flex flex-col items-center p-12 bg-white rounded-[3rem] shadow-2xl shadow-slate-200/60 border border-slate-100">
              <div className="flex items-center gap-3 mb-4">
                <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_92x30dp.png" alt="Google" className="h-8" />
                <span className="text-slate-400 font-bold tracking-widest uppercase text-xs">Verified</span>
              </div>
              <div className="text-7xl font-black text-slate-900 mb-3 tracking-tighter">5<span className="text-slate-300 font-light">/5</span></div>
              <div className="flex items-center gap-1.5 text-yellow-400 mb-4">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} size={28} fill="currentColor" />)}
              </div>
              <p className="text-slate-500 font-bold text-sm tracking-wide">35,000+ Happy Clients</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-10">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="bg-white p-12 rounded-[3.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 relative group border border-slate-50">
                <div className="absolute top-10 right-10 text-indigo-50 group-hover:text-indigo-100 transition-colors">
                  <Star size={48} fill="currentColor" />
                </div>
                <div className="flex items-center gap-1.5 text-yellow-400 mb-8">
                   {[1, 2, 3, 4, 5].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                </div>
                <p className="text-slate-700 mb-10 italic text-xl leading-relaxed font-light">"{t.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-indigo-600">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{t.name}</h4>
                    <p className="text-slate-400 text-sm flex items-center gap-1 font-medium tracking-tight"><MapPin size={14} className="text-indigo-400" /> {t.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-20 text-center">
            <a href="#" className="inline-flex items-center gap-3 text-indigo-600 font-bold text-xl hover:translate-x-2 transition-transform">
              Read 5000+ Google Reviews <ChevronRight size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* 5. WHY CHOOSE (ANIMATED) */}
      <section id="process" className="py-32 bg-slate-900 text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-indigo-600/5 -skew-x-12 translate-x-1/4"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl md:text-7xl font-bold mb-10 heading-font leading-tight text-white">Superior Standards, Guaranteed.</h2>
              <p className="text-indigo-200 text-xl mb-16 font-light leading-relaxed">We don't just decorate; we engineer spaces for longevity, functionality, and timeless aesthetics.</p>
              
              <div className="grid sm:grid-cols-2 gap-y-12 gap-x-10">
                {WHY_CHOOSE.map((point) => (
                  <div key={point.id} className="flex gap-6 items-start group">
                    <div className="w-16 h-16 bg-white/5 rounded-[1.5rem] flex-shrink-0 flex items-center justify-center text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                      {getIcon(point.icon, "w-8 h-8")}
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 text-white group-hover:text-indigo-300 transition-colors tracking-tight">{point.title}</h3>
                      <p className="text-slate-400 text-sm leading-relaxed font-light">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative order-1 lg:order-2 pb-16 lg:pb-0">
              <div className="absolute inset-0 bg-indigo-500 blur-[150px] opacity-10"></div>
              
              {/* FIXED: Feature Card CTA Pill Alignment and Visibility */}
              <div className="relative z-10 box-border">
                <div className="rounded-[4rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] border border-white/10 group bg-slate-800">
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592dea58ef23?auto=format&fit=crop&q=80&w=1200" 
                    alt="Architecture Interior Planning" 
                    className="w-full h-auto transition-transform duration-700 group-hover:scale-105 opacity-80"
                  />
                  {/* FEATURE CTA PILL - CENTER ALIGNED AND FULLY VISIBLE */}
                  <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 w-full flex justify-center px-6">
                    <button className="bg-indigo-600/90 backdrop-blur-md text-white px-10 py-5 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(79,70,229,0.5)] border border-white/20 hover:bg-white hover:text-indigo-600 transition-all duration-300 transform hover:scale-105 active:scale-95 whitespace-nowrap min-h-[56px] flex items-center justify-center cursor-pointer">
                      Architecture Interior Planning
                    </button>
                  </div>
                </div>

                {/* STAT BADGE - Fixed position to prevent mobile clipping and overlapping */}
                <div className="absolute -bottom-8 -left-4 lg:-bottom-12 lg:-left-12 bg-white p-8 lg:p-12 rounded-[3.5rem] shadow-2xl z-20 text-slate-900 animate-bounce-slow border-b-8 border-indigo-600 max-w-[180px] lg:max-w-none">
                  <div className="text-4xl lg:text-5xl font-black mb-1 tracking-tighter text-indigo-600">10+</div>
                  <div className="font-black text-[9px] lg:text-xs uppercase tracking-[0.2em] text-slate-400">Years Excellence</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW IT WORKS */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font tracking-tight">How It Works</h2>
            <p className="text-slate-500 max-w-2xl mx-auto text-lg font-light">A streamlined, tech-enabled process designed to respect your time and peace of mind.</p>
          </div>
          
          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 w-full h-0.5 bg-slate-100"></div>
            <div className="grid lg:grid-cols-5 gap-12 relative z-10">
              {[
                { step: '01', title: 'Consultation', desc: 'Expert designers visit your site for a comprehensive 1:1 briefing.' },
                { step: '02', title: 'Plan & Render', desc: 'Photorealistic 3D visuals and floor plans with unlimited iterations.' },
                { step: '03', title: 'Select Materials', desc: 'Experience 2000+ premium finishes at our exclusive Gurgaon studio.' },
                { step: '04', title: 'Project Execution', desc: 'Track progress via our client portal with daily site updates.' },
                { step: '05', title: 'Final Handover', desc: 'Deep cleaning and multi-stage quality audit before move-in.' },
              ].map((item, idx) => (
                <div key={idx} className="text-center lg:text-left group">
                  <div className="w-20 h-20 bg-slate-50 group-hover:bg-indigo-600 group-hover:text-white rounded-[2rem] flex items-center justify-center font-black text-2xl text-slate-300 transition-all duration-500 mb-8 mx-auto lg:mx-0 shadow-sm border border-slate-50">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-xl mb-4 text-slate-900 tracking-tight">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed font-light">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. PROJECT SHOWCASE */}
      <section id="portfolio" className="py-32 bg-slate-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-end justify-between mb-20 gap-10">
            <div>
              <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font tracking-tight text-slate-900">Portfolio</h2>
              <p className="text-slate-500 max-w-xl text-lg font-light">Witness the transformation of luxury residences across Gurgaon's premium enclaves.</p>
            </div>
            <div className="flex bg-white p-2 rounded-[1.5rem] shadow-xl shadow-slate-200/50 border border-slate-100">
              <button 
                onClick={() => setActiveTab('residential')}
                className={`px-10 py-4 rounded-[1.2rem] font-bold text-sm tracking-widest uppercase transition-all cursor-pointer ${activeTab === 'residential' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-50'}`}
              >
                Residential
              </button>
              <button 
                onClick={() => setActiveTab('commercial')}
                className={`px-10 py-4 rounded-[1.2rem] font-bold text-sm tracking-widest uppercase transition-all cursor-pointer ${activeTab === 'commercial' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-400 hover:text-indigo-600 hover:bg-slate-50'}`}
              >
                Commercial
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[1, 2, 3, 4, 5, 6].map(i => (
              <div key={i} className="group relative overflow-hidden rounded-[3.5rem] shadow-2xl bg-white h-[500px]">
                <img 
                  src={`https://picsum.photos/seed/${i + (activeTab === 'residential' ? 20 : 200)}/900/1200`} 
                  className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                  alt="Architectural Masterpiece" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-8 lg:p-12">
                  <span className="text-indigo-400 font-bold mb-3 uppercase tracking-[0.3em] text-[10px]">Gurgaon, Sector 65</span>
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6 leading-tight">Modern Minimalist <br/>Penthouse Design</h3>
                  
                  {/* FIXED: CTA Button within Card with proper clickability */}
                  <button className="bg-white text-slate-900 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 hover:bg-indigo-600 hover:text-white transition-all w-fit shadow-xl transform active:scale-95 min-h-[52px] cursor-pointer">
                    View Project <ChevronRight size={20} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. MID-PAGE CTA */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="bg-indigo-600 rounded-[5rem] p-16 md:p-32 text-center relative overflow-hidden shadow-3xl shadow-indigo-600/20">
            <div className="absolute top-0 left-0 w-full h-full opacity-20">
              <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white blur-[150px] -translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-white blur-[150px] translate-x-1/2 translate-y-1/2"></div>
            </div>
            <div className="relative z-10 max-w-4xl mx-auto">
              <h2 className="text-4xl md:text-7xl font-bold text-white mb-10 heading-font leading-tight tracking-tight">Elevate Your Living Standard</h2>
              <p className="text-indigo-100 text-xl md:text-2xl mb-16 font-light">Don't settle for average. Collaborate with Gurgaon's most innovative architects to build your legacy.</p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                <a href="#calculator" className="bg-white text-indigo-600 px-12 py-6 rounded-[2rem] font-black text-xl hover:shadow-[0_20px_60px_-10px_rgba(255,255,255,0.4)] transition-all transform hover:-translate-y-2 w-full sm:w-auto flex items-center justify-center">
                  Get Free Estimate
                </a>
                <button className="bg-indigo-500/20 text-white border-2 border-indigo-400/40 backdrop-blur-xl px-12 py-6 rounded-[2rem] font-black text-xl hover:bg-indigo-500/40 transition-all transform hover:-translate-y-2 w-full sm:w-auto cursor-pointer">
                  Talk to a Designer
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. LOCAL SEO BLOCK */}
      <section className="py-32 bg-slate-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-10 heading-font tracking-tight">Elite <span className="text-indigo-600">Interior Designers in Gurgaon</span></h2>
              <p className="text-slate-600 text-xl mb-10 leading-relaxed font-light">
                Positioned at the epicenter of Gurgaon's architectural renaissance, Veer Architects brings tailored design solutions to DLF, M3M, Emaar, and Central Park residences. We understand the unique structural requirements and lifestyle aspirations of Millennium City dwellers.
              </p>
              <div className="grid sm:grid-cols-2 gap-8 mb-16">
                {[
                  "Architects in Gurgaon",
                  "Modular Kitchen Experts",
                  "Luxury Interior Solutions",
                  "Custom Wardrobe Design"
                ].map(item => (
                  <div key={item} className="flex items-center gap-4 text-slate-800 font-bold tracking-tight">
                    <CheckCircle2 className="text-indigo-600" size={24} />
                    {item}
                  </div>
                ))}
              </div>
              <div className="p-10 bg-white rounded-[3rem] border border-slate-200 shadow-xl shadow-slate-200/40 flex flex-col md:flex-row items-center gap-8">
                <div className="w-20 h-20 bg-indigo-50 rounded-3xl flex items-center justify-center text-indigo-600 shrink-0">
                  <MapPin size={36} />
                </div>
                <div>
                  <h4 className="font-black text-slate-900 text-xl mb-1 uppercase tracking-widest">Experience Studio</h4>
                  <p className="text-slate-500 mb-1">Sector 48, Sohna Road, Gurgaon - 122018</p>
                  <p className="text-indigo-600 font-bold text-sm uppercase tracking-[0.2em]">Open Mon-Sat: 10AM - 7PM</p>
                </div>
              </div>
            </div>
            <div className="h-[600px] rounded-[5rem] overflow-hidden shadow-3xl relative border-[12px] border-white ring-1 ring-slate-200">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112222.75549098492!2d76.97341054335939!3d28.47171440000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d19d582e38859%3A0x2cf5b485471b4438!2sGurugram%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1)' }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps Location - Veer Architects"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section id="faqs" className="py-32 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-bold mb-6 heading-font tracking-tight">Expert Advice</h2>
            <p className="text-slate-500 text-lg font-light">Answering your most pressing questions about interior costs, timelines, and trends in Gurgaon.</p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {FAQS.map((faq, idx) => (
              <div key={idx} className={`border border-slate-100 rounded-[2.5rem] overflow-hidden transition-all duration-500 ${openFaq === idx ? 'bg-indigo-50/20 border-indigo-100 shadow-xl shadow-indigo-500/5' : 'bg-white'}`}>
                <button 
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-10 py-8 flex items-center justify-between text-left hover:bg-indigo-50/10 transition-colors cursor-pointer"
                >
                  <span className="text-xl font-bold text-slate-800 pr-8 tracking-tight">{faq.question}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500 ${openFaq === idx ? 'bg-indigo-600 text-white rotate-180' : 'bg-slate-50 text-slate-400'}`}>
                    <ChevronDown size={22} />
                  </div>
                </button>
                <div className={`transition-all duration-700 ease-in-out overflow-hidden ${openFaq === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="px-10 pb-10 text-slate-600 text-lg leading-relaxed font-light border-t border-indigo-50/50 pt-8">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. FOOTER */}
      <footer className="bg-slate-900 text-slate-400 pt-32 pb-40">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-16 mb-24">
            <div className="col-span-2">
              <p className="text-slate-500 mb-10 max-w-sm text-lg leading-relaxed font-light">
                Defining the benchmark for luxury architecture and high-end interiors in India's leading financial hub.
              </p>
              <div className="flex gap-6">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center hover:bg-indigo-600 text-white transition-all cursor-pointer transform hover:-translate-y-1">
                    <Star size={20} />
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Specialties</h4>
              <ul className="space-y-5 text-sm font-medium">
                {['Modular Kitchen', 'Luxury Wardrobes', 'Italian Concepts', 'Smart Homes', 'Pooja Units'].map(l => (
                  <li key={l} className="hover:text-white transition-colors cursor-pointer">{l}</li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Design Gallery</h4>
              <ul className="space-y-5 text-sm font-medium">
                {['Modern Living', 'Master Suites', 'Royal Dining', 'Kids Galaxy', 'Gourmet Kitchen'].map(l => (
                  <li key={l} className="hover:text-white transition-colors cursor-pointer">{l}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Corporate</h4>
              <ul className="space-y-5 text-sm font-medium">
                {['About Veer', 'Our Projects', 'Testimonials', 'Contact Us', 'Design Blog'].map(l => (
                  <li key={l} className="hover:text-white transition-colors cursor-pointer">{l}</li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-white font-black text-xs uppercase tracking-[0.3em] mb-8">Tools</h4>
              <ul className="space-y-5 text-sm font-medium">
                {['Cost Calculator', 'Site Visitation', 'Material Lab', 'Execution Log', 'Quality Specs'].map(l => (
                  <li key={l} className="hover:text-white transition-colors cursor-pointer">{l}</li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-10">
            <p className="text-slate-600 text-sm font-medium">© {new Date().getFullYear()} Veer Architects. Crafting Excellence in Gurgaon.</p>
            <div className="flex gap-12 text-xs font-bold uppercase tracking-widest text-slate-600">
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
              <a href="#" className="hover:text-white transition-colors">Terms</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>

      {/* MOBILE STICKY FOOTER (APP STYLE) */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 z-[100] bg-white/95 backdrop-blur-xl border-t border-slate-100 flex items-center justify-around px-2 py-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)]">
        <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer">
          <Home size={24} />
          <span className="text-[10px] font-black uppercase tracking-widest">Home</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer">
          <Layout size={24} />
          <span className="text-[10px] font-black uppercase tracking-widest">Designs</span>
        </button>
        <div className="relative -mt-12">
           <a href="#calculator" className="bg-indigo-600 text-white p-5 rounded-full shadow-[0_15px_30px_rgba(79,70,229,0.4)] border-4 border-white transition-transform active:scale-90 flex items-center justify-center cursor-pointer">
            <Calculator size={28} />
          </a>
          <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-widest text-indigo-600 w-max">Estimate</span>
        </div>
        <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer">
          <Phone size={24} />
          <span className="text-[10px] font-black uppercase tracking-widest">Call</span>
        </button>
        <button className="flex flex-col items-center gap-1.5 text-slate-400 hover:text-indigo-600 transition-colors cursor-pointer" onClick={toggleMenu}>
          <MoreHorizontal size={24} />
          <span className="text-[10px] font-black uppercase tracking-widest">More</span>
        </button>
      </div>

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1.1); }
          50% { transform: scale(1.15); }
        }
        .animate-fade-in {
          animation: fade-in 1.2s cubic-bezier(0.23, 1, 0.32, 1) forwards;
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse-slow 15s ease-in-out infinite;
        }
        html {
          scroll-behavior: smooth;
        }
        ::selection {
          background-color: rgba(79, 70, 229, 0.2);
          color: #4f46e5;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .border-box {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
};

export default App;
