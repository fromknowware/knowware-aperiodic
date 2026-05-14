import React from 'react';
import { Link } from 'react-router-dom';
import { Bookmark, ArrowLeft, ArrowRight } from 'lucide-react';

export function PreprintContainer() {
  return (
    <section className="bg-[#f4f4f4] py-16 border-b border-gray-300 font-sans">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6">
          Preprint . Version 1 . Posted 2026-04-24
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4 leading-tight tracking-tight">
          CacheCow: Ternary Edge Intelligence for Predictive Livestock Health Monitoring — A 500-Subject, 90-Day Validation Study
        </h2>
        <div className="text-sm font-bold text-black mb-2">
          Khayam, Fancy, Dean Brannan
        </div>
        <div className="text-xs text-gray-500 italic mb-12 max-w-2xl mx-auto">
          Artofficial Technologies / CacheCow, Calgary, Canada; Knowware Institute of Applied Research and Cybernetics, Calgary, Canada; Rockwell Automation / Knowware Institute Advisory Board
        </div>
        
        <div className="bg-white p-8 md:p-12 text-left shadow-sm mb-12 border border-gray-200">
          <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-6 text-center">Abstract</div>
          <p className="text-sm text-gray-800 leading-relaxed">
            We present deployment results from a 90-day validation study of the CacheCow system across 500 bovine subjects sourced from 10 ranches in Alberta, Canada. CacheCow ear tags incorporate ternary quantum diode processors, tunnelling magnetoresistance sensors, and on-device manifold reduction to deliver 48-hour advance health event predictions at sub-100mW power consumption. The system achieved 94.3% precision and 91.7% recall across seven classes of health events, corresponding to a validated first-year return on investment of 108% for participating ranchers.
          </p>
        </div>
        
        <div className="flex justify-center space-x-4 mb-16">
          <button className="bg-black text-white px-8 py-3 text-xs font-bold uppercase tracking-widest flex items-center hover:bg-gray-800 transition-colors">
            <span className="mr-2">□</span> PDF
          </button>
          <button className="bg-transparent border border-black text-black px-8 py-3 text-xs font-bold uppercase tracking-widest flex items-center hover:bg-black hover:text-white transition-colors">
            <span className="mr-2">□</span> HTML
          </button>
        </div>
        
        <div className="border-t border-gray-300 pt-8 text-left max-w-2xl mx-auto flex flex-col space-y-4">
          <div className="flex text-xs">
            <span className="w-32 font-bold text-gray-500 uppercase tracking-widest">Posted</span>
            <span className="text-black">2026-04-24</span>
          </div>
          <div className="flex text-xs">
            <span className="w-32 font-bold text-gray-500 uppercase tracking-widest">Subject Area</span>
            <span className="text-black">Preprints</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function JournalIssueContainer() {
  return (
    <section className="bg-[#f4f4f4] py-16 border-b border-gray-300 font-sans">
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-3 flex justify-center md:justify-end">
            <div className="w-48 h-72 bg-[#1a1a1a] text-white p-6 flex flex-col justify-center items-center text-center shadow-2xl transform -rotate-2 border border-gray-800">
              <div className="text-xs font-bold tracking-widest uppercase mb-2">Knowware</div>
              <div className="text-xs font-bold tracking-widest uppercase">Scientific</div>
              <div className="w-8 h-[1px] bg-white/50 my-6"></div>
              <div className="text-[8px] tracking-widest text-gray-400">ISSUE 001</div>
            </div>
          </div>
          <div className="md:col-span-9">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 border-b border-gray-300 pb-6">
              <div>
                <div className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-2">Issue</div>
                <h2 className="text-3xl md:text-4xl font-bold text-black tracking-tight">
                  Issue 001: The Convergence Issue
                </h2>
              </div>
              <div className="text-sm text-gray-500 mt-4 md:mt-0 font-bold">April 1, 2026</div>
            </div>
            
            <div>
              <h3 className="text-sm font-bold text-black uppercase tracking-widest mb-6">Articles</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                {[
                  { title: "Manifold Dimension Reduction in Physically Constrained Intelligent Systems: A Formal Proof of 98.5% Complexity Compression", authors: "Khayam., Yang-Hui He (Author)", pages: "1-22" },
                  { title: "Ternary Logic as the Natural Substrate for Biological Computation: Information-Theoretic Foundations and the Resolution of 35-Year Model-Based RL Instability", authors: "Khayam., Richard S. Sutton (Author)", pages: "23-51" },
                  { title: "Stochastic Resonance in Ternary Neural Computation: Brownian Noise as a Stabilising Substrate for Diffusion-Based Intelligence", authors: "Fancy., Bas van der Linden (Author)", pages: "52-74" },
                  { title: "The Base(9) Architecture: Mathematical Derivation of a Nine-Organ Computational Framework and Its Convergence with Mammalian Neuroanatomy", authors: "Khayam. (Author)", pages: "75-104" },
                  { title: "Bioelectric Integrity as an Intrinsic Reward Signal: Eliminating Reward Hacking via Physiological Constraints in Reinforcement Learning", authors: "Khayam., Yang-Hui He (Author)", pages: "105-128" },
                  { title: "Ternary Quantum Diodes: Room-Temperature Three-State Computation via Quantum Tunnelling in Germanium-Silicon Heterojunction Nanoscale Devices", authors: "Khayam., Bas van der Linden, Yang-Hui He (Author)", pages: "129-158" }
                ].map((article, i) => (
                  <div key={i} className="flex flex-col group cursor-pointer">
                    <h4 className="text-sm font-bold text-black leading-snug mb-2 group-hover:text-gray-600 transition-colors">{article.title}</h4>
                    <div className="text-xs text-gray-500 mb-1">{article.authors}</div>
                    <div className="text-xs text-gray-400">{article.pages}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <button className="bg-transparent border border-black text-black px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-black hover:text-white transition-colors">
                  View All Issues
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function InstituteContainer() {
  return (
    <section className="bg-[#e5e5e5] py-16 border-b border-gray-300 font-sans overflow-hidden relative">
      <div className="max-w-[1400px] mx-auto px-4 flex">
        {/* Left Sidebar */}
        <div className="w-32 hidden lg:flex flex-col space-y-6 text-[10px] font-bold tracking-widest uppercase text-gray-400 pt-8">
          <div className="text-black">Knowware</div>
          <div className="text-black">ARC</div>
          <div className="hover:text-black cursor-pointer transition-colors">About</div>
          <div className="hover:text-black cursor-pointer transition-colors">Scientific</div>
          <div className="hover:text-black cursor-pointer transition-colors">H.A.R.T</div>
        </div>
        
        {/* Main Content Area - Grid Background */}
        <div className="flex-1 bg-[#f0f0f0] border border-gray-400 relative shadow-2xl min-h-[700px] p-8 md:p-16"
             style={{ backgroundImage: 'linear-gradient(#d9d9d9 1px, transparent 1px), linear-gradient(90deg, #d9d9d9 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
          
          {/* Top Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-black pb-4 mb-16 gap-4">
            <div className="flex flex-wrap gap-x-8 gap-y-2 text-xs font-bold tracking-widest uppercase">
              <span>A.R.C</span>
              <span>Applied</span>
              <span>Research</span>
              <span>And</span>
              <span>Cybernetics</span>
            </div>
            <div className="text-sm font-bold tracking-widest uppercase bg-white px-3 py-1 border border-gray-300">
              Canada Proof 02.092
            </div>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[110px] font-bold text-black leading-[0.85] tracking-tighter max-w-4xl mb-8">
            THE A.R.C<br/>INSTITUTE<br/>OF KNOWWARE
          </h1>
          <div className="text-xs font-bold text-gray-400 uppercase tracking-widest max-w-xs ml-2">
            Engineered for stimulating all of humanity
          </div>
          
          {/* Floating Cards */}
          <div className="absolute bottom-12 right-12 flex flex-col space-y-0 transform rotate-2 hidden md:flex">
            <div className="bg-[#999999] p-8 w-[400px] shadow-2xl border border-gray-500 relative z-10 hover:z-30 transition-all hover:-translate-y-2 cursor-pointer">
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-3xl font-bold text-black leading-none tracking-tight">KNOWWARE<br/>SCIENTIFIC</h3>
                <div className="text-[10px] font-bold text-black uppercase text-right leading-tight">3901<br/>Proofs</div>
              </div>
              <p className="text-xs text-black font-medium uppercase tracking-wide leading-relaxed">
                Prior publishing platform and tools for academic discoveries, patents and inventions
              </p>
            </div>
            
            <div className="bg-[#ea580c] p-8 w-[400px] shadow-2xl border border-[#c2410c] transform translate-x-12 -translate-y-8 relative z-20 hover:z-30 transition-all hover:-translate-y-10 cursor-pointer">
              <h3 className="text-3xl font-bold text-black leading-none mb-6 tracking-tight">H.A.R.T</h3>
              <p className="text-xs text-black font-medium uppercase tracking-wide mb-12 leading-relaxed">
                Academic timestamping for legal and scientific verification
              </p>
              <div className="text-[10px] text-black font-bold uppercase tracking-widest">
                KWARC-2026-000001. FEB 02. 2026
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

export function NewsListContainer() {
  const news = [
    { tags: ['NEWS', 'BIOMEDICAL'], title: 'Your Watch Will One Day Track Blood Pressure', subtitle: 'Reflected radio signals reveal the insides of blood vessels', date: '24 FEB 2026', readTime: '3 MIN READ', img: 'https://picsum.photos/seed/watch/600/400' },
    { tags: ['SPONSORED ARTICLE', 'CONSUMER ELECTRONICS'], title: 'From Headsets to Hearing Aids', subtitle: 'How Bluetooth Low Energy Audio is reshaping wireless audio', date: '26 FEB 2026', readTime: '', img: 'https://picsum.photos/seed/headset/600/400' },
    { tags: ['NEWS', 'TRANSPORTATION'], title: 'Solid-State Battery is the Secret Behind Karma’s Kaveya', subtitle: 'Factorial Energy’s cells will power the Kaveya coupe due next year', date: '24 FEB 2026', readTime: '5 MIN READ', img: 'https://picsum.photos/seed/karma/600/400' },
  ];

  return (
    <section className="bg-[#f4f4f4] py-16 border-b border-gray-300 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col divide-y divide-gray-300 border-t border-b border-gray-300">
          {news.map((item, i) => (
            <Link key={i} to={`/articles/${item.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')}`} className="py-8 flex flex-col md:flex-row gap-8 items-stretch group cursor-pointer">
              <div className="w-full md:w-[400px] lg:w-[480px] aspect-[3/2] flex-shrink-0 border border-gray-200 overflow-hidden bg-gray-200">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="border border-gray-300 bg-white px-2 py-1 text-[10px] font-mono font-bold text-gray-700 uppercase tracking-widest">
                      {item.tags[0]}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#ea580c] uppercase tracking-widest">
                      {item.tags[1]}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-serif leading-tight mb-4 tracking-tight">
                    <span className="font-bold text-black group-hover:text-gray-700 transition-colors">{item.title}</span>
                    <span className="text-gray-400 mx-2 font-sans">›</span>
                    <span className="text-gray-500">{item.subtitle}</span>
                  </h3>
                </div>
                <div className="flex items-center text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest space-x-3 mt-6">
                  <span>{item.date}</span>
                  {item.readTime && (
                    <>
                      <span className="text-gray-300">|</span>
                      <span>{item.readTime}</span>
                    </>
                  )}
                  <span className="text-gray-300">|</span>
                  <Bookmark className="w-3 h-3 hover:text-black transition-colors" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SecondaryNewsListContainer() {
  const news = [
    { 
      type: 'article',
      tags: ['NEWS', 'CONSUMER ELECTRONICS'], 
      title: 'Rising Memory Price Hits Low-Cost Computer Makers', 
      subtitle: 'The price hike may be a warning sign for affordable consumer tech', 
      date: '23 FEB 2026', 
      readTime: '4 MIN READ', 
      img: 'https://picsum.photos/seed/raspberry/600/400' 
    },
    { 
      type: 'sponsored',
      sponsorName: 'BMF BOSTON MICRO FABRICATION',
      tags: ['WHITEPAPER', 'BIOMEDICAL'], 
      title: 'Achieving Micron-Level Tolerances: CAD Optimization For Sub-10µm 3D Printing', 
      subtitle: 'How to set realistic tolerances and match feature sizes to your printer’s resolution capabilities', 
      date: '26 FEB 2026', 
      readTime: '', 
      img: '' 
    },
    { 
      type: 'article',
      tags: ['INTERVIEW', 'COMPUTING'], 
      title: 'AI’s Math Tricks Don’t Work for Scientific Computing', 
      subtitle: 'Low-precision number formats don’t suit many simulations', 
      date: '23 FEB 2026', 
      readTime: '3 MIN READ', 
      img: 'https://picsum.photos/seed/math/600/400' 
    },
  ];

  return (
    <section className="bg-[#f4f4f4] py-16 border-b border-gray-300 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col divide-y divide-gray-300 border-t border-b border-gray-300">
          {news.map((item, i) => (
            <div key={i} className="py-8 flex flex-col md:flex-row gap-8 items-stretch group cursor-pointer">
              <div className="w-full md:w-[400px] lg:w-[480px] flex-shrink-0 flex flex-col justify-center">
                {item.type === 'article' ? (
                  <div className="w-full aspect-[3/2] border border-gray-200 overflow-hidden bg-gray-200">
                    <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
                  </div>
                ) : (
                  <div className="w-full py-8 flex flex-col items-start justify-center">
                    <div className="text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest mb-4">Sponsored By:</div>
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 bg-gray-800 flex items-center justify-center text-white font-bold text-xl">
                        BMF
                      </div>
                      <div className="font-bold text-xl leading-tight tracking-tight">
                        BOSTON MICRO<br/>FABRICATION
                      </div>
                    </div>
                  </div>
                )}
              </div>
              <div className="flex-1 flex flex-col justify-between py-2">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <span className="border border-gray-300 bg-white px-2 py-1 text-[10px] font-mono font-bold text-gray-700 uppercase tracking-widest">
                      {item.tags[0]}
                    </span>
                    <span className="text-[10px] font-mono font-bold text-[#ea580c] uppercase tracking-widest">
                      {item.tags[1]}
                    </span>
                  </div>
                  <h3 className="text-2xl md:text-4xl font-serif leading-tight mb-4 tracking-tight">
                    <span className="font-bold text-black group-hover:text-gray-700 transition-colors">{item.title}</span>
                    <span className="text-gray-400 mx-2 font-sans">›</span>
                    <span className="text-gray-500">{item.subtitle}</span>
                  </h3>
                </div>
                <div className="flex items-center text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest space-x-3 mt-6">
                  <span>{item.date}</span>
                  {item.readTime && (
                    <>
                      <span className="text-gray-300">|</span>
                      <span>{item.readTime}</span>
                    </>
                  )}
                  <span className="text-gray-300">|</span>
                  <Bookmark className="w-3 h-3 hover:text-black transition-colors" />
                  {item.type === 'sponsored' && (
                    <>
                      <span className="text-gray-300">|</span>
                      <button className="bg-gray-800 text-white px-4 py-2 hover:bg-black transition-colors">READ THE WHITEPAPER</button>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function LargeFeatureContainer({ image, tag1, tag2, title, subtitle, date, readTime }: any) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-gray-900 overflow-hidden group cursor-pointer">
        <img src={image} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 opacity-90" referrerPolicy="no-referrer" />
        
        {/* Dark overlay box */}
        <div className="absolute bottom-0 left-0 p-4 md:p-8 w-full md:w-[70%] lg:w-[60%]">
          <div className="border border-white/20 bg-[#0a0a0a]/90 backdrop-blur-sm p-6 md:p-10">
            <div className="flex items-center space-x-3 mb-4">
              <span className="border border-white/40 px-2 py-1 text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                {tag1}
              </span>
              <span className="text-[10px] font-mono font-bold text-white uppercase tracking-widest">
                {tag2}
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-white leading-tight mb-4 tracking-tight">
              {title} <span className="text-white/60 font-normal">› {subtitle}</span>
            </h2>
            <div className="flex items-center text-[10px] font-mono font-bold text-white/60 uppercase tracking-widest space-x-3 mt-6">
              <span>{date}</span>
              <span>|</span>
              <span>{readTime}</span>
              <span>|</span>
              <Bookmark className="w-3 h-3 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MagazinePromoContainer() {
  return (
    <section className="bg-[#1a1a1a] text-white py-16 border-y border-gray-800 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
          
          <div className="md:col-span-5">
            <h2 className="text-4xl md:text-5xl font-sans font-medium mb-6 tracking-tight leading-tight">
              The March 2026<br/>issue is here!
            </h2>
            <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-8 max-w-md">
              Knowware members exclusive: Enjoy your PDF download, and access articles online to start conversations with fellow readers and <span className="italic">Knowware Aperiodic</span> editors
            </p>
            <button className="bg-[#ea580c] text-white px-6 py-3 text-xs font-bold uppercase tracking-widest hover:bg-[#c2410c] transition-colors flex items-center">
              DOWNLOAD PDF <span className="ml-2">↓</span>
            </button>
          </div>

          <div className="md:col-span-4 border-y md:border-y-0 md:border-x border-gray-800 py-8 md:py-0 md:px-12 flex flex-col justify-center h-full">
            <div className="text-gray-400 text-lg mb-6">In this issue:</div>
            <ul className="space-y-6">
              <li className="text-xl font-bold hover:text-[#ea580c] cursor-pointer transition-colors leading-snug">AI Hunts for New Physics</li>
              <li className="text-xl font-bold hover:text-[#ea580c] cursor-pointer transition-colors leading-snug">The Anti-Induction Suit</li>
              <li className="text-xl font-bold hover:text-[#ea580c] cursor-pointer transition-colors leading-snug">In 1844, Chess Was Already Online</li>
            </ul>
            <a href="#" className="text-gray-400 hover:text-white mt-8 flex items-center transition-colors text-sm">
              See full issue <span className="ml-2">→</span>
            </a>
          </div>

          <div className="md:col-span-3 flex justify-center md:justify-end">
            <img src="https://picsum.photos/seed/magazinecover/400/550" alt="Magazine Cover" className="w-full max-w-[280px] shadow-2xl border border-gray-800" referrerPolicy="no-referrer" />
          </div>

        </div>
      </div>
    </section>
  );
}

export function TrendingSection() {
  const trending = [
    { id: '01', tag1: 'HANDS ON', tag2: 'DIY', title: "Unlocking Hendrix's Guitar Magic: The Pedal Chain", date: '25 FEB 2026', readTime: '5 MIN READ', img: 'https://picsum.photos/seed/guitar/400/300' },
    { id: '02', tag1: 'ARTICLE', tag2: 'HISTORY OF TECHNOLOGY', title: "An EV Prediction That Came 100 Years Too Soon", date: '14 HOURS AGO', readTime: '8 MIN READ', img: 'https://picsum.photos/seed/ev2/400/300' },
    { id: '03', tag1: 'FEATURE', tag2: 'BIOMEDICAL', title: "When Pills Start Acting Like Machines", date: '18 FEB 2026', readTime: '11 MIN READ', img: 'https://picsum.photos/seed/pills2/400/300' },
    { id: '04', tag1: 'NEWS', tag2: 'ROBOTICS', title: "Farming Robot Dogs Haul Produce From the Field", date: '27 FEB 2026', readTime: '3 MIN READ', img: 'https://picsum.photos/seed/robotdog2/400/300' },
  ];
  return (
    <section className="bg-[#1a1a1a] text-white py-16 border-b border-gray-800 font-sans">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-gray-800 pb-6">
          <h2 className="text-4xl md:text-5xl font-sans font-medium tracking-tight">
            Trending Stories
          </h2>
          <div className="flex items-center space-x-6 mt-4 md:mt-0 text-gray-400 text-sm">
            <span>The most-read stories on <span className="italic">Knowware Aperiodic</span> right now</span>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-800 border-x border-gray-800">
          {trending.map((item, i) => (
            <Link key={i} to={`/articles/${item.id}`} className="group cursor-pointer flex flex-col px-6 pb-6 pt-2">
              <div className="text-6xl md:text-7xl font-sans font-light text-gray-600 group-hover:text-white transition-colors duration-500 mb-6 tracking-tighter">
                {item.id}
              </div>
              <div className="flex items-center space-x-3 mb-4">
                <span className="border border-gray-700 px-2 py-1 text-[10px] font-mono font-bold text-gray-300 uppercase tracking-widest">
                  {item.tag1}
                </span>
                <span className="text-[10px] font-mono font-bold text-[#ea580c] uppercase tracking-widest">
                  {item.tag2}
                </span>
              </div>
              <h3 className="text-xl font-sans font-bold text-white group-hover:text-gray-300 transition-colors leading-snug mb-6 flex-grow">
                {item.title}
              </h3>
              <div className="flex items-center text-[10px] font-mono font-bold text-gray-500 uppercase tracking-widest space-x-3 mb-6">
                <span>{item.date}</span>
                <span>|</span>
                <span>{item.readTime}</span>
                <span>|</span>
                <Bookmark className="w-3 h-3 hover:text-white transition-colors" />
              </div>
              <div className="w-full aspect-[4/3] overflow-hidden bg-gray-800 mt-auto">
                <img src={item.img} alt={item.title} className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500" referrerPolicy="no-referrer" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
