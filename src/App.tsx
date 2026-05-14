import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useMotionValueEvent } from 'motion/react';
import { Search, Menu, ChevronRight, Facebook, Twitter, Linkedin, Mail } from 'lucide-react';
import { featuredArticle, latestArticles, trendingArticles, exploreTopicsData } from './data';
import { ComputingIllustration, NetworkIllustration } from './Illustrations';
import { PreprintContainer, JournalIssueContainer, InstituteContainer, NewsListContainer, SecondaryNewsListContainer, LargeFeatureContainer, MagazinePromoContainer, TrendingSection } from './Containers';
import { ExploreTopics, Advertisement } from './components/NewSections';

function Header() {
  const { scrollY } = useScroll();
  const [isPastMasthead, setIsPastMasthead] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsPastMasthead(latest > 300);
  });

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;
    
    const handleScroll = () => {
      setIsScrolling(true);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        setIsScrolling(false);
      }, 250);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(timeoutId);
    };
  }, []);

  const headerVariants = {
    top: { 
      y: 0, 
      scale: 1,
      opacity: 1,
      transition: { type: "spring", stiffness: 300, damping: 30 }
    },
    scrolling: { 
      y: "-100%", 
      scale: 0.95,
      opacity: 0,
      transition: { type: "tween", duration: 0.2, ease: "easeOut" }
    },
    resting: { 
      y: 0, 
      scale: 1,
      opacity: 1,
      transition: { 
        type: "spring", 
        stiffness: 120, 
        damping: 10, 
        mass: 1,
        bounce: 0.4
      } 
    }
  };

  const currentVariant = !isPastMasthead ? "top" : (isScrolling ? "scrolling" : "resting");

  return (
    <motion.header 
      variants={headerVariants}
      initial="top"
      animate={currentVariant}
      className="bg-white border-b border-gray-200 sticky top-0 z-50 origin-top"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 -ml-2 mr-4 text-black hover:text-gray-600 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex items-center tracking-tight">
              <span className="text-2xl font-serif font-bold text-black">Knowware Aperiodic</span>
            </Link>
          </div>

          <nav className="hidden lg:flex space-x-8">
            {exploreTopicsData.map((topic) => (
              <Link key={topic.title} to={`/categories/${topic.slug}`} className="text-sm font-sans font-medium text-gray-700 hover:text-black transition-colors">
                {topic.title}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            <button className="text-black hover:text-gray-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="hidden md:block bg-black text-white px-4 py-2 text-xs font-sans font-bold uppercase tracking-wider hover:bg-gray-800 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}

function Hero() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16 border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Masthead / Left Column */}
        <div className="lg:col-span-7 flex flex-col">
          <div className="mb-8 border-b-4 border-black pb-8">
            <h1 className="text-5xl md:text-7xl font-serif font-bold text-black leading-tight mb-4 tracking-tight">
              Knowware Aperiodic
            </h1>
            <p className="text-xl md:text-2xl font-serif text-gray-600 italic">
              The premier journal for fundamental research in information theory, coding, and communications.
            </p>
          </div>
          
          <div className="bg-[#ea580c] text-white p-8 md:p-10 mt-auto">
            <div className="text-xs font-sans font-bold text-white/80 uppercase tracking-widest mb-2">
              Open Call
            </div>
            <h2 className="text-2xl md:text-4xl font-serif font-bold mb-4">
              Call for Articles: Knowware Aperiodic
            </h2>
            <p className="text-sm md:text-base font-serif text-white/90 leading-relaxed mb-8">
              We are actively seeking groundbreaking research, theoretical proofs, and perspectives on the future of information theory, cybernetics, and applied computation for our upcoming issues.
            </p>
            <div className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-black text-white px-6 py-3 text-xs font-sans font-bold uppercase tracking-widest hover:bg-gray-900 transition-colors border border-black">
                Submit Article
              </button>
              <a href="#" className="text-xs font-sans font-bold uppercase tracking-widest text-white hover:text-black transition-colors flex items-center group border border-transparent hover:border-black px-4 py-2">
                Guidelines <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
        {/* Sidebar / Right Column */}
        <div className="lg:col-span-5">
          <div className="bg-gray-50 p-6 md:p-8 h-full border border-gray-200">
            <div className="mb-10 border-b border-gray-200 pb-8">
              <div className="text-xs font-sans font-bold text-gray-500 uppercase tracking-widest mb-3">
                Featured Research
              </div>
              <Link to={`/articles/${featuredArticle.slug}`} className="text-2xl font-serif font-bold text-black mb-3 hover:text-gray-700 cursor-pointer transition-colors leading-snug block">
                {featuredArticle.title}
              </Link>
              <p className="text-sm text-gray-600 font-serif leading-relaxed mb-4">
                {featuredArticle.excerpt}
              </p>
              <div className="flex items-center text-xs font-sans">
                <span className="font-bold text-black uppercase tracking-wide">{featuredArticle.author}</span>
                <span className="mx-2 text-gray-300">•</span>
                <span className="text-gray-500">{featuredArticle.date}</span>
              </div>
            </div>

            <h3 className="text-sm font-sans font-bold text-black uppercase tracking-widest mb-6 border-b border-gray-200 pb-4">
              Latest Publications
            </h3>
            <div className="flex flex-col space-y-6">
              {trendingArticles.slice(0, 5).map((article, index) => (
                <Link key={article.id} to={`/articles/${article.slug}`} className="group cursor-pointer flex gap-4 items-start">
                  <div className="text-2xl font-serif font-bold text-gray-300 leading-none mt-1 w-6">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="text-base font-serif font-bold text-black group-hover:text-gray-600 transition-colors leading-snug mb-1">
                      {article.title}
                    </h4>
                    <div className="text-xs font-sans text-gray-500">
                      {article.author}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StickySection({ title, articles, visual, link }: { title: string, articles: any[], visual: React.ReactNode, link?: string }) {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 relative">
        
        {/* Sticky Image Container */}
        <div className="lg:col-span-6 hidden lg:block">
          <div className="sticky top-24 h-[calc(100vh-8rem)] flex flex-col justify-center">
            <a href={link || "#"} className="relative w-full h-[60vh] overflow-hidden bg-[#f4f4f4] border border-gray-200 group block">
              {visual}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-5 transition-all flex items-center justify-center">
                 <span className="opacity-0 group-hover:opacity-100 bg-white text-black px-4 py-2 text-xs font-bold uppercase tracking-widest transition-opacity border border-black">Explore</span>
              </div>
            </a>
            <div className="mt-4 text-xs font-sans text-gray-500 uppercase tracking-widest">
              {title} Focus
            </div>
          </div>
        </div>

        {/* Mobile Image (Not sticky) */}
        <div className="lg:hidden mb-8">
          <a href={link || "#"} className="relative w-full aspect-[4/3] overflow-hidden bg-[#f4f4f4] border border-gray-200 block">
            {visual}
          </a>
        </div>

        {/* Scrolling Sidebar Content */}
        <div className="lg:col-span-6">
          <h2 className="text-4xl font-serif font-bold text-black mb-12">
            {title}
          </h2>
          
          <div className="flex flex-col space-y-12">
            {articles.map((article, index) => (
              <Link key={article.id} to={`/articles/${article.slug}`} className="group cursor-pointer border-b border-gray-200 pb-12 last:border-0 last:pb-0 block">
                <div className="flex items-center space-x-2 mb-3">
                  <span className="border border-gray-300 px-2 py-0.5 text-[10px] font-sans font-bold text-gray-700 uppercase tracking-widest">
                    Article
                  </span>
                  <span className="text-[10px] font-sans font-bold text-[#ea580c] uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-black group-hover:text-gray-600 transition-colors leading-snug mb-4">
                  {article.title}
                </h3>
                <p className="text-base text-gray-600 font-serif leading-relaxed mb-6">
                  {article.excerpt || "A detailed abstract of the research paper, outlining the methodology, key findings, and implications for the field of information theory."}
                </p>
                <div className="flex items-center text-sm font-sans">
                  <span className="font-bold text-black uppercase tracking-wide">{article.author}</span>
                  <span className="mx-2 text-gray-300">•</span>
                  <span className="text-gray-500">{article.date}</span>
                </div>
              </Link>
            ))}

            <div className="pt-8">
              <a href="#" className="inline-flex items-center text-sm font-sans font-bold text-black hover:text-gray-600 uppercase tracking-wide group">
                View all {title} research <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </section>
  );
}


function CallForPapersCTA() {
  return (
    <section className="bg-black text-white py-16">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">Call for Papers: Special Issue on Post-Quantum Cryptography</h2>
        <p className="text-lg font-serif text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          We invite original research contributions addressing the theoretical foundations and practical implementations of cryptographic systems secure against quantum adversaries.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
          <button className="bg-white text-black px-8 py-3 text-sm font-sans font-bold uppercase tracking-widest hover:bg-gray-200 transition-colors">
            Submit Manuscript
          </button>
          <a href="#" className="text-sm font-sans font-bold uppercase tracking-widest hover:text-gray-300 transition-colors flex items-center group">
            Read Guidelines <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
        <div className="mt-8 text-xs font-sans text-gray-400 uppercase tracking-widest">
          Deadline: November 15, 2026
        </div>
      </div>
    </section>
  );
}

function MostReadCited() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <div>
          <h2 className="text-2xl font-serif font-bold text-black mb-8 pb-4 border-b-2 border-black">
            Most Read
          </h2>
          <div className="flex flex-col space-y-8">
            {latestArticles.slice(0, 3).map((article) => (
              <Link key={`read-${article.id}`} to={`/articles/${article.slug}`} className="group cursor-pointer">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="border border-gray-300 px-1.5 py-0.5 text-[10px] font-sans font-bold text-gray-700 uppercase tracking-widest">
                    Article
                  </span>
                  <span className="text-[10px] font-sans font-bold text-[#ea580c] uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-black group-hover:text-gray-600 transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <div className="text-sm font-sans text-gray-500">
                  {article.author}
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-serif font-bold text-black mb-8 pb-4 border-b-2 border-black">
            Most Cited
          </h2>
          <div className="flex flex-col space-y-8">
            {trendingArticles.slice(0, 3).map((article) => (
              <Link key={`cited-${article.id}`} to={`/articles/${article.slug}`} className="group cursor-pointer">
                <div className="flex items-center space-x-2 mb-2">
                  <span className="border border-gray-300 px-1.5 py-0.5 text-[10px] font-sans font-bold text-gray-700 uppercase tracking-widest">
                    Article
                  </span>
                  <span className="text-[10px] font-sans font-bold text-[#ea580c] uppercase tracking-widest">
                    {article.category}
                  </span>
                </div>
                <h3 className="text-xl font-serif font-bold text-black group-hover:text-gray-600 transition-colors leading-snug mb-2">
                  {article.title}
                </h3>
                <div className="text-sm font-sans text-gray-500">
                  {article.author}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SpecialIssues() {
  const issues = [
    { title: 'Machine Learning for Wireless Communications', date: 'January 2026', image: 'https://picsum.photos/seed/wireless/600/800' },
    { title: 'Information-Theoretic Security', date: 'October 2025', image: 'https://picsum.photos/seed/security/600/800' },
    { title: 'Coding for Distributed Storage Systems', date: 'July 2025', image: 'https://picsum.photos/seed/storage/600/800' },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200 bg-gray-50">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-3xl font-serif font-bold text-black mb-2">Special Issues</h2>
          <p className="text-gray-600 font-serif">Curated collections of research on emerging topics.</p>
        </div>
        <a href="#" className="hidden sm:flex text-sm font-sans font-bold uppercase tracking-widest hover:text-gray-600 transition-colors items-center group">
          View Archive <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {issues.map((issue, index) => (
          <div key={index} className="group cursor-pointer">
            <div className="relative aspect-[3/4] overflow-hidden mb-6 border border-gray-200">
              <img 
                src={issue.image} 
                alt={issue.title}
                className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-black bg-opacity-10 group-hover:bg-opacity-0 transition-all duration-500" />
            </div>
            <div className="text-xs font-sans font-bold text-gray-500 uppercase tracking-widest mb-2">
              {issue.date}
            </div>
            <h3 className="text-xl font-serif font-bold text-black group-hover:text-gray-600 transition-colors leading-snug">
              {issue.title}
            </h3>
          </div>
        ))}
      </div>
      
      <div className="mt-8 sm:hidden">
        <a href="#" className="text-sm font-sans font-bold uppercase tracking-widest hover:text-gray-600 transition-colors flex items-center group">
          View Archive <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </section>
  );
}

function NewsletterCTA() {
  return (
    <section className="relative overflow-hidden max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
      {/* Subtle Background Animation (Visible on Mobile/Tablet) */}
      <div className="absolute inset-0 pointer-events-none lg:hidden">
        <motion.div 
          animate={{ 
            x: [0, 30, -20, 0], 
            y: [0, -40, 20, 0],
            scale: [1, 1.2, 0.9, 1]
          }}
          transition={{ 
            duration: 18, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -top-10 -left-10 w-64 h-64 rounded-full bg-gray-100 blur-3xl opacity-70"
        />
        <motion.div 
          animate={{ 
            x: [0, -40, 30, 0], 
            y: [0, 30, -30, 0],
            scale: [1, 0.8, 1.1, 1]
          }}
          transition={{ 
            duration: 22, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute top-1/2 -right-10 w-72 h-72 rounded-full bg-gray-200 blur-3xl opacity-60"
        />
        <motion.div 
          animate={{ 
            x: [0, 20, -30, 0], 
            y: [0, 20, -20, 0],
            scale: [1, 1.1, 0.95, 1]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity,
            ease: "easeInOut" 
          }}
          className="absolute -bottom-10 left-1/4 w-56 h-56 rounded-full bg-gray-100 blur-3xl opacity-50"
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto text-center bg-white/40 backdrop-blur-sm p-6 rounded-3xl lg:bg-transparent lg:backdrop-blur-none lg:p-0">
        <Mail className="h-10 w-10 mx-auto mb-6 text-gray-400" />
        <h2 className="text-3xl font-serif font-bold text-black mb-4">Stay Updated</h2>
        <p className="text-lg text-gray-600 font-serif mb-8">
          Receive table of contents alerts, call for papers, and editorial updates directly to your inbox.
        </p>
        <form className="flex flex-col sm:flex-row max-w-xl mx-auto gap-4">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 border border-gray-300 px-4 py-3 text-sm font-sans focus:outline-none focus:border-black focus:ring-1 focus:ring-black bg-white"
            required
          />
          <button type="submit" className="bg-black text-white px-8 py-3 text-sm font-sans font-bold uppercase tracking-widest hover:bg-gray-800 transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-xs font-sans text-gray-400">
          By subscribing, you agree to our Privacy Policy and Terms of Service.
        </p>
      </div>
    </section>
  );
}

function EcosystemLinks() {
  return (
    <section className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-16 border-b border-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        <a href="#" className="block border border-gray-200 p-8 hover:border-black transition-colors group bg-[#f8f8f8]">
          <div className="text-xs font-sans font-bold text-gray-500 uppercase tracking-widest mb-4">Preprints</div>
          <h3 className="text-2xl font-serif font-bold text-black mb-4 group-hover:text-[#ea580c] transition-colors">Knowware Scientific Preprints</h3>
          <p className="text-sm font-serif text-gray-600 mb-8">Access early-stage research and preliminary findings before formal peer review.</p>
          <div className="text-xs font-sans font-bold text-black uppercase tracking-widest flex items-center">
            Visit Archive <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        <a href="#" className="block border border-gray-200 p-8 hover:border-black transition-colors group bg-black text-white">
          <div className="text-xs font-sans font-bold text-gray-400 uppercase tracking-widest mb-4">Institute</div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-[#ea580c] transition-colors">The A.R.C Institute of Knowware</h3>
          <p className="text-sm font-serif text-gray-400 mb-8">Applied Research and Cybernetics. Engineered for stimulating all of humanity.</p>
          <div className="text-xs font-sans font-bold text-white uppercase tracking-widest flex items-center">
            Learn More <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

        <a href="#" className="block border border-gray-200 p-8 hover:border-[#ea580c] transition-colors group bg-[#ea580c] text-white">
          <div className="text-xs font-sans font-bold text-white/80 uppercase tracking-widest mb-4">Verification</div>
          <h3 className="text-2xl font-serif font-bold text-white mb-4 group-hover:text-black transition-colors">H.A.R.T</h3>
          <p className="text-sm font-serif text-white/90 mb-8">Academic timestamping for legal and scientific verification. 8 Bitcoin Timestamped.</p>
          <div className="text-xs font-sans font-bold text-white uppercase tracking-widest flex items-center">
            Verify Now <ChevronRight className="h-4 w-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </a>

      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 pt-10 pb-6 mt-8">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div className="lg:col-span-1">
            <a href="/" className="flex items-center mb-4 tracking-tight">
              <span className="text-xl font-serif font-bold text-black">Knowware Aperiodic</span>
            </a>
            <p className="text-gray-600 text-sm mb-4 font-serif leading-relaxed">
              Advancing the fundamental understanding of information, communication, and computation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href="#" className="text-gray-400 hover:text-black transition-colors">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest mb-4 text-black">Research Areas</h4>
            <ul className="space-y-2 text-sm font-sans text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Information Theory</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Coding Theory</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Cryptography</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Signal Processing</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest mb-4 text-black">For Authors</h4>
            <ul className="space-y-2 text-sm font-sans text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Submit a Paper</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Author Guidelines</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Peer Review Process</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Ethics Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-xs font-sans font-bold uppercase tracking-widest mb-4 text-black">About</h4>
            <ul className="space-y-2 text-sm font-sans text-gray-600">
              <li><a href="#" className="hover:text-black transition-colors">Editorial Board</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors">Subscribe</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-6 flex flex-col md:flex-row justify-between items-center text-xs font-sans text-gray-500">
          <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-black transition-colors">Accessibility</a>
          </div>
          <p>&copy; {new Date().getFullYear()} Knowware Aperiodic. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  // Create longer lists of articles to demonstrate scrolling
  const computingArticles = [
    { ...latestArticles[0], id: 'c1', excerpt: 'Recent breakthroughs in quantum algorithms have demonstrated a significant speedup for specific classes of optimization problems. This paper provides a comprehensive review of these algorithms, focusing on their theoretical foundations and potential applications in cryptography and materials science. We also discuss the current limitations of noisy intermediate-scale quantum (NISQ) devices and propose novel error mitigation techniques.' },
    { ...latestArticles[1], id: 'c2', title: 'The Rise of Neuromorphic Chips: A Comprehensive Review', excerpt: 'An in-depth analysis of recent advancements in neuromorphic engineering and its implications for low-power AI. By mimicking the neural structure of the human brain, these chips offer a paradigm shift in computational efficiency. This review covers the underlying hardware architectures, including memristor-based synapses and spiking neural networks, and evaluates their performance against traditional von Neumann architectures.' },
    { ...latestArticles[2], id: 'c3', title: 'Quantum Error Correction Codes', excerpt: 'Proposing a new family of topological quantum codes with higher error thresholds. As quantum computers scale, the need for robust error correction becomes paramount. This research introduces a novel class of surface codes that exhibit superior resilience to both bit-flip and phase-flip errors. We provide rigorous mathematical proofs of their fault-tolerance properties and simulate their performance under realistic noise models.' },
    { ...latestArticles[3], id: 'c4', title: 'Limits of Computation in Thermodynamic Systems', excerpt: 'Exploring the fundamental bounds of energy dissipation during irreversible logical operations. Drawing on Landauer\'s principle, this paper investigates the thermodynamic costs associated with information processing at the nanoscale. We analyze the efficiency of various logic gates and propose theoretical models for reversible computing that could potentially bypass these energetic limits.' },
    { ...latestArticles[0], id: 'c5', title: 'Algorithmic Information Theory and Machine Learning', excerpt: 'Connecting Kolmogorov complexity to generalization bounds in deep neural networks. This study explores the relationship between the compressibility of a neural network\'s weights and its ability to generalize to unseen data. By applying concepts from algorithmic information theory, we derive new theoretical bounds that provide insights into the implicit regularization mechanisms of stochastic gradient descent.' },
  ];

  const communicationsArticles = [
    { ...trendingArticles[0], id: 'e1', excerpt: 'The transition to renewable energy sources requires a fundamental rethinking of power grid architectures. This paper proposes a decentralized control strategy for smart grids, utilizing advanced communication protocols and distributed ledger technology. We demonstrate how this approach can enhance grid stability, facilitate peer-to-peer energy trading, and improve resilience against cyber-physical attacks.' },
    { ...trendingArticles[1], id: 'e2', title: 'Capacity of the Gaussian Wiretap Channel', excerpt: 'Revisiting the secrecy capacity under novel constraints and fading models. In the context of physical layer security, the Gaussian wiretap channel serves as a fundamental model. This research extends previous results by considering scenarios with imperfect channel state information and correlated fading. We derive closed-form expressions for the ergodic secrecy capacity and propose optimal power allocation strategies.' },
    { ...trendingArticles[2], id: 'e3', title: 'Massive MIMO Systems: Asymptotic Analysis', excerpt: 'Deriving closed-form expressions for the achievable rate in multi-cell massive MIMO networks. As the number of antennas at the base station grows large, the effects of uncorrelated noise and fast fading vanish. This paper provides a rigorous asymptotic analysis of the signal-to-interference-plus-noise ratio (SINR) in such systems, taking into account pilot contamination and hardware impairments.' },
    { ...latestArticles[0], id: 'e4', title: 'Optical Fiber Communications: Non-linear Shannon Limit', excerpt: 'Investigating the capacity bounds of optical channels in the highly non-linear regime. The Kerr effect in optical fibers introduces non-linear distortions that limit the achievable data rates. This study explores the fundamental information-theoretic limits of these channels, proposing novel modulation formats and digital signal processing techniques to mitigate non-linear impairments and approach the Shannon limit.' },
    { ...latestArticles[1], id: 'e5', title: 'Semantic Communications for 6G', excerpt: 'A new paradigm focusing on the meaning of transmitted information rather than exact bit reproduction. Traditional communication systems aim to reliably transmit bits over a noisy channel. Semantic communications, however, seek to convey the underlying meaning or intent of the message. This paper outlines the theoretical framework for semantic information theory and discusses its potential applications in future 6G networks.' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-black selection:text-white">
      <Header />
      <main>
        <Hero />
        <MostReadCited />
        
        <Advertisement />

        <LargeFeatureContainer 
          image="https://picsum.photos/seed/pills/1400/700"
          tag1="FEATURE"
          tag2="BIOMEDICAL"
          title="When Pills Start Acting Like Machines"
          subtitle="Ingestible electronics can sense and act inside the gut"
          date="18 FEB 2026"
          readTime="11 MIN READ"
        />

        <NewsListContainer />
        <TrendingSection />
        
        <Advertisement />

        <StickySection 
          title="Computing & Complexity" 
          articles={computingArticles} 
          visual={<ComputingIllustration />} 
          link="#"
        />
        
        <SpecialIssues />
        <StickySection 
          title="Communications & Networks" 
          articles={communicationsArticles} 
          visual={<NetworkIllustration />} 
          link="#"
        />
        
        <MagazinePromoContainer />
        <InstituteContainer />
        <JournalIssueContainer />
        <PreprintContainer />

        <CallForPapersCTA />

        <LargeFeatureContainer 
          image="https://picsum.photos/seed/physics/1400/700"
          tag1="FEATURE"
          tag2="AI"
          title="AI Hunts for the Next Big Thing in Physics"
          subtitle="There's a crisis in particle physics. Researchers hope AI can help."
          date="03 FEB 2026"
          readTime="18 MIN READ"
        />

        <SecondaryNewsListContainer />

        <ExploreTopics />

        <EcosystemLinks />
        <NewsletterCTA />
      </main>
      <Footer />
    </div>
  );
}
