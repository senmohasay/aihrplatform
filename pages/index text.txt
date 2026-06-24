import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Zap, ShoppingCart, BookOpen, Heart } from 'lucide-react';
import Head from 'next/head';

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  useEffect(() => {
    // Load Google AdSense script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID';
    script.crossOrigin = 'anonymous';
    document.head.appendChild(script);

    // Load Calendly script for modal
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);
  }, []);

  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget('https://calendly.com/senmohasay/new-meeting');
    } else {
      // Fallback: direct link if script not loaded
      window.open('https://calendly.com/senmohasay/new-meeting', '_blank');
    }
  };

  return (
    <>
      <Head>
        <title>AIHR Expert - AI + HR Transformation Expert</title>
        <meta name="description" content="26+ years HR transformation expertise. Oracle GenAI Professional. SAP SF, Workday, Oracle HCM specialist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-YOUR_ADSENSE_ID" crossOrigin="anonymous"></script>
        
        {/* Calendly CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-gradient-to-b from-slate-900 via-blue-900 to-slate-900 text-white">
        {/* Navigation */}
        <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              AIHR Expert
            </h1>
            <div className="hidden md:flex gap-6">
              <a href="#home" className="text-slate-900 hover:text-blue-700 font-medium">Home</a>
              <a href="#expertise" className="text-slate-900 hover:text-blue-700 font-medium">Expertise</a>
              <a href="#products" className="text-slate-900 hover:text-blue-700 font-medium">Products</a>
              <button onClick={openCalendly} className="bg-blue-700 text-white px-6 py-2 rounded-lg font-medium hover:bg-blue-800">
                Book Call
              </button>
            </div>
            <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
              {mobileMenuOpen ? <X size={24} className="text-slate-900" /> : <Menu size={24} className="text-slate-900" />}
            </button>
          </div>
          {mobileMenuOpen && (
            <div className="md:hidden bg-white border-t p-4 space-y-3">
              <a href="#home" className="block text-slate-900 font-medium py-2">Home</a>
              <a href="#expertise" className="block text-slate-900 font-medium py-2">Expertise</a>
              <a href="#products" className="block text-slate-900 font-medium py-2">Products</a>
              <button onClick={openCalendly} className="w-full block bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-center">Book Call</button>
            </div>
          )}
        </nav>

        {/* Hero Section */}
        <section id="home" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 px-4 py-2 rounded-full mb-6">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">🤖 Oracle GenAI Professional + 26 Years HR Expert</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold leading-tight mb-6">
            AI-Powered HR
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
            26+ years guiding global enterprises through HR transformations. 
            Now powered by Generative AI to deliver 50% faster implementations and 91% fewer defects.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#products" className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition inline-flex items-center justify-center gap-2">
              Explore Digital Products <ChevronRight size={20} />
            </a>
            <button onClick={openCalendly} className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-950 transition">
              Schedule Free Call
            </button>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-blue-800/50 mt-12">
            <div>
              <div className="text-4xl font-bold text-blue-300">26+</div>
              <p className="text-sm text-blue-300/70">Years Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300">₹5M+</div>
              <p className="text-sm text-blue-300/70">Programs Led</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300">2025</div>
              <p className="text-sm text-blue-300/70">GenAI Certified</p>
            </div>
          </div>
        </section>

        {/* Google AdSense Banner - Top */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* AdSense Ad Unit 1 */}
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '100%', maxWidth: '728px', height: 'auto' }}
              data-ad-client="ca-pub-YOUR_ADSENSE_ID"
              data-ad-slot="YOUR_AD_SLOT_ID_1"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
        </section>

        {/* Expertise Section */}
        <section id="expertise" className="bg-black/30 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">Your AI + HR Expert</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/50 p-8 rounded-xl hover:border-purple-500/50 transition">
                <Zap className="text-yellow-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">GenAI Expertise</h3>
                <p className="text-blue-100">
                  Oracle Cloud GenAI Professional (2025). Expert in ChatGPT, Claude, Gemini for HR automation.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/50 p-8 rounded-xl hover:border-purple-500/50 transition">
                <ShoppingCart className="text-cyan-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Global Delivery</h3>
                <p className="text-blue-100">
                  Delivered ₹5M+ HR transformations across 16 countries. Managed QA teams of 50+.
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/50 p-8 rounded-xl hover:border-purple-500/50 transition">
                <BookOpen className="text-pink-400 mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4">Fast Implementation</h3>
                <p className="text-blue-100">
                  SAP SF, Workday, Oracle HCM. AI-accelerated testing reduces timelines by 50%.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section id="products" className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2 className="text-4xl font-bold text-center mb-16">Digital Products & Resources</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white/10 border border-blue-500/50 p-8 rounded-xl hover:border-purple-500/50 transition">
              <ShoppingCart className="text-blue-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">6 Digital Products</h3>
              <p className="text-blue-100 mb-6">
                Production-ready guides, templates, and prompt libraries. Total value: ₹4,594
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-blue-300">₹499-₹1,299</p>
                <p className="text-sm text-blue-300/70">Individual products</p>
              </div>
              <a href="https://dipankarsen.com/products" className="block bg-blue-700 text-white py-3 rounded-lg font-semibold text-center hover:bg-blue-800 transition mb-4">
                View All Products
              </a>
              <p className="text-sm text-blue-300">
                • AI Prompts for HR (₹499)<br/>
                • GenAI SAP SF Testing (₹799)<br/>
                • Prompt Library 100+ (₹599)<br/>
                • Transformation Roadmap (₹1,299)<br/>
                • HR Metrics Dashboard (₹999)<br/>
                • Workday Checklist (₹399)
              </p>
            </div>

            <div className="bg-white/10 border border-blue-500/50 p-8 rounded-xl hover:border-purple-500/50 transition">
              <BookOpen className="text-purple-400 mb-4" size={32} />
              <h3 className="text-2xl font-bold mb-3">Online Courses</h3>
              <p className="text-blue-100 mb-6">
                Video courses on GenAI, SAP SF, Workday & testing. Learn at your own pace.
              </p>
              <div className="mb-6">
                <p className="text-3xl font-bold text-purple-300">₹2,999-₹3,999</p>
                <p className="text-sm text-blue-300/70">Per course on Udemy</p>
              </div>
              <a href="https://udemy.com/user/dipankar-sen-24/" target="_blank" rel="noopener noreferrer" className="block bg-purple-700 text-white py-3 rounded-lg font-semibold text-center hover:bg-purple-800 transition mb-4">
                View Courses on Udemy
              </a>
              <p className="text-sm text-blue-300">
                1,000+ students enrolled<br/>
                4.8/5 average rating<br/>
                Money-back guarantee
              </p>
            </div>
          </div>

          {/* Google AdSense Banner - Middle */}
          <div className="my-12 text-center">
            <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* AdSense Ad Unit 2 */}
              <ins className="adsbygoogle"
                style={{ display: 'block', width: '100%', maxWidth: '728px', height: 'auto' }}
                data-ad-client="ca-pub-YOUR_ADSENSE_ID"
                data-ad-slot="YOUR_AD_SLOT_ID_2"
                data-ad-format="auto"
                data-full-width-responsive="true"></ins>
              <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="bg-black/30 py-20">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-center mb-16">What Customers Say</h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white/5 border border-blue-700/30 p-8 rounded-xl">
                <p className="text-blue-100 mb-4">
                  "Dipankar's AI prompts saved us 40+ hours per month on HR tasks. Incredible value for ₹499!"
                </p>
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
                <p className="text-sm text-blue-300 mt-2">- HR Manager, Fortune 500</p>
              </div>

              <div className="bg-white/5 border border-blue-700/30 p-8 rounded-xl">
                <p className="text-blue-100 mb-4">
                  "The GenAI testing guide reduced our test creation time by 60%. Highly recommended!"
                </p>
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
                <p className="text-sm text-blue-300 mt-2">- QA Lead, Tech Company</p>
              </div>

              <div className="bg-white/5 border border-blue-700/30 p-8 rounded-xl">
                <p className="text-blue-100 mb-4">
                  "The 24-month transformation roadmap was exactly what we needed for our SAP SF project."
                </p>
                <p className="font-semibold">⭐⭐⭐⭐⭐</p>
                <p className="text-sm text-blue-300 mt-2">- PMO Director, Global Services</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your HR with AI?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Get a free 30-minute consultation to discuss your strategy
          </p>
          <button onClick={openCalendly} className="inline-block bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition">
            📅 Schedule Free Consultation
          </button>
        </section>

        {/* Google AdSense Banner - Bottom */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
          <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            {/* AdSense Ad Unit 3 */}
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '100%', maxWidth: '728px', height: 'auto' }}
              data-ad-client="ca-pub-YOUR_ADSENSE_ID"
              data-ad-slot="YOUR_AD_SLOT_ID_3"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
            <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-slate-900 text-white border-t border-blue-800/50 py-12">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="font-bold mb-4 text-blue-400">AIHR Expert</h3>
                <p className="text-sm text-slate-400">GenAI + HR Transformation Expert</p>
                <p className="text-sm text-slate-400 mt-2">26+ Years Global Experience</p>
              </div>
              <div>
                <h4 className="font-bold mb-3">Follow</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><a href="https://linkedin.com/in/dipankar-sen-017aa924" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
                  <li><a href="https://udemy.com/user/dipankar-sen-24/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Udemy Courses</a></li>
                  <li><a href="mailto:senmohasay@gmail.com" className="hover:text-white transition">Email</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold mb-3">Quick Links</h4>
                <ul className="space-y-2 text-sm text-slate-400">
                  <li><button onClick={openCalendly} className="hover:text-white transition">Book Call</button></li>
                  <li><a href="#products" className="hover:text-white transition">Products</a></li>
                  <li><a href="#expertise" className="hover:text-white transition">Expertise</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-slate-800 pt-8 text-sm text-slate-400 text-center">
              <p>&copy; 2026 AIHR Expert. All rights reserved. | Made with <Heart size={16} className="inline text-red-500" /> for HR Leaders</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}