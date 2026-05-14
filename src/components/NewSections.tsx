import React from 'react';
import { Bookmark, ArrowLeft, ArrowRight } from 'lucide-react';
import { exploreTopicsData } from '../data';

export function TriContentBlock() {
  const articles = [
    {
      id: 1,
      tag1: "NEWS",
      tag2: "BIOMEDICAL",
      title: "Your Watch Will One Day Track Blood Pressure",
      subtitle: "Reflected radio signals reveal the insides of blood vessels",
      date: "24 FEB 2026",
      readTime: "3 MIN READ",
      image: "https://picsum.photos/seed/concert/800/500"
    },
    {
      id: 2,
      tag1: "SPONSORED ARTICLE",
      tag2: "CONSUMER ELECTRONICS",
      title: "From Headsets to Hearing Aids",
      subtitle: "How Bluetooth Low Energy Audio is reshaping wireless audio",
      date: "26 FEB 2026",
      readTime: null,
      image: "https://picsum.photos/seed/laptop/800/500"
    },
    {
      id: 3,
      tag1: "NEWS",
      tag2: "TRANSPORTATION",
      title: "Solid-State Battery is the Secret Behind Karma's Kaveya",
      subtitle: "Factorial Energy's cells will power the Kaveya coupe due next year",
      date: "24 FEB 2026",
      readTime: "5 MIN READ",
      image: "https://picsum.photos/seed/landscape/800/500"
    }
  ];

  return (
    <section className="bg-[#f4f4f4] py-16 border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col">
          {articles.map((article, index) => (
            <div key={article.id} className={`flex flex-col md:flex-row gap-8 py-10 ${index !== 0 ? 'border-t border-gray-300' : ''}`}>
              <div className="md:w-2/5 shrink-0">
                <img src={article.image} alt={article.title} className="w-full h-auto object-cover aspect-[16/10]" referrerPolicy="no-referrer" />
              </div>
              <div className="md:w-3/5 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest border border-gray-300 px-2 py-1">{article.tag1}</span>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-widest text-[#e85d04]">{article.tag2}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-serif font-bold text-black mb-2 leading-tight">
                  {article.title} <span className="text-gray-500 font-normal">&gt; {article.subtitle}</span>
                </h3>
                <div className="flex items-center gap-3 text-xs font-sans text-gray-500 uppercase tracking-widest mt-6">
                  <span>{article.date}</span>
                  {article.readTime && (
                    <>
                      <span className="text-gray-300">|</span>
                      <span>{article.readTime}</span>
                    </>
                  )}
                  <span className="text-gray-300">|</span>
                  <button className="hover:text-black transition-colors">
                    <Bookmark className="h-3 w-3" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ExploreTopics() {
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = current.firstElementChild?.clientWidth || 300;
      if (direction === 'left') {
        current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
      } else {
        current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="bg-[#1a1a1a] text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl font-sans font-normal">Explore topics</h2>
          <div className="flex items-center gap-6">
            <p className="text-sm text-gray-400 max-w-xs border-l border-gray-600 pl-4">
              Knowware Aperiodic reports on developments in each of these categories
            </p>
            <div className="flex gap-4">
              <button onClick={() => scroll('left')} className="text-gray-500 hover:text-white transition-colors">
                <ArrowLeft className="h-6 w-6" />
              </button>
              <button onClick={() => scroll('right')} className="text-gray-500 hover:text-white transition-colors">
                <ArrowRight className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
        
        <div className="relative border-t border-l border-gray-800">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
          >
            {exploreTopicsData.map((topic, index) => (
              <div key={index} className="w-full sm:w-1/2 lg:w-1/3 shrink-0 snap-start border-r border-b border-gray-800 p-8 flex flex-col h-full min-h-[300px] hover:bg-[#222] transition-colors cursor-pointer">
                <h3 className="text-2xl font-sans mb-auto">{topic.title}</h3>
                <p className="text-sm text-gray-300 font-sans font-medium leading-relaxed mt-8">
                  {topic.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function Advertisement() {
  return (
    <section className="bg-[#e5e5e5] py-8 border-b border-gray-300">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <span className="text-[10px] text-gray-400 uppercase tracking-widest mb-2">Advertisement</span>
        <div className="w-full max-w-5xl bg-white border border-gray-200 flex flex-col md:flex-row items-center relative overflow-hidden h-auto md:h-48">
          <div className="absolute top-1 right-1 flex items-center gap-1 text-blue-400 cursor-pointer z-10">
            <span className="text-[10px]">Ad</span>
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
          </div>
          
          <div className="w-full md:w-1/3 bg-black h-full flex flex-col justify-center p-6 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-red-900 opacity-80"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-red-600 transform skew-x-[-20deg] translate-x-16"></div>
            <div className="relative z-10">
              <div className="text-white text-xs font-bold mb-4 tracking-widest">CROWDSTRIKE</div>
              <h3 className="text-white text-2xl font-bold leading-tight mb-1">2026 Global<br/>Threat Report</h3>
              <p className="text-red-500 text-xs">Year of the Evasive Adversary</p>
            </div>
          </div>
          
          <div className="w-full md:w-2/3 h-full flex flex-col md:flex-row items-center justify-between p-8 gap-6 bg-white">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 text-red-600">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M22 12l-10 8-10-8 10-8 10 8z" /><path d="M12 22l-10-8h20l-10 8z" opacity="0.5"/></svg>
              </div>
              <h3 className="text-3xl font-sans font-bold text-black">2026 Global Threat Report</h3>
            </div>
            <button className="bg-black text-white px-10 py-4 rounded-full font-sans font-bold hover:bg-gray-800 transition-colors whitespace-nowrap">
              Download
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
