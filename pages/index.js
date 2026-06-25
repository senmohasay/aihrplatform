import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Zap, FileText, BookOpen, Lock, Heart, Download, Eye, ShoppingCart, Lightbulb, Rocket, TrendingUp, Globe, CheckCircle, CreditCard } from 'lucide-react';
import Head from 'next/head';

export default function AIHRConsultantWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductPreview, setShowProductPreview] = useState(false);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState('');

  // Initialize Calendly
  useEffect(() => {
    const calendlyScript = document.createElement('script');
    calendlyScript.src = 'https://assets.calendly.com/assets/external/widget.js';
    calendlyScript.async = true;
    document.body.appendChild(calendlyScript);
  }, []);

  // Open Calendly Modal
  const openCalendly = () => {
    if (window.Calendly) {
      window.Calendly.showPopupWidget('https://calendly.com/senmohasay/new-meeting');
    } else {
      window.open('https://calendly.com/senmohasay/new-meeting', '_blank');
    }
  };

  // Digital Products Catalog
  const digitalProducts = [
    {
      id: 1,
      title: 'AI Prompt Engineering for HR Professionals',
      category: 'Guide',
      price: 499,
      currency: '₹',
      rating: 4.8,
      downloads: 342,
      description: 'Master ChatGPT, Claude, and Gemini for HR automation',
      preview: 'Learn 50+ tested prompts for recruitment, onboarding, performance reviews, and HR analytics. Save 10+ hours weekly on HR tasks.',
      icon: '🤖',
      deliverable: 'PDF Guide (45 pages) + Prompt Templates',
      bonus: 'Monthly updated prompts for 3 months'
    },
    {
      id: 2,
      title: 'GenAI for SAP SuccessFactors Testing',
      category: 'Guide',
      price: 799,
      currency: '₹',
      rating: 4.9,
      downloads: 218,
      description: 'AI-powered test case generation and automation',
      preview: 'Generate test cases 5x faster using AI. Use Claude, ChatGPT for automated test script creation.',
      icon: '✓',
      deliverable: 'PDF Guide (52 pages) + Prompt Library',
      bonus: 'Free 1-hour consulting call'
    },
    {
      id: 3,
      title: 'HR Transformation Roadmap Template',
      category: 'Template',
      price: 1299,
      currency: '₹',
      rating: 4.9,
      downloads: 156,
      description: 'Complete SAP/Workday implementation roadmap with timeline',
      preview: 'Ready-to-customize 24-month roadmap with milestones, resource planning, and risk management.',
      icon: '📋',
      deliverable: 'PowerPoint (25 slides) + Excel Workbook',
      bonus: 'Excel Risk Register (Pre-filled with 50+ risks)'
    },
    {
      id: 4,
      title: 'GenAI Prompt Library for HCM Testing',
      category: 'Prompt Collection',
      price: 599,
      currency: '₹',
      rating: 4.8,
      downloads: 425,
      description: '100+ Tested Prompts for Payroll, Recruiting, Onboarding',
      preview: 'Copy-paste prompts for test case generation, automation scripts, and quality assurance.',
      icon: '🎯',
      deliverable: 'Excel Workbook (Organized by Module) + PDF',
      bonus: 'Access to Private ChatGPT Thread with Weekly Updates'
    },
    {
      id: 5,
      title: 'AI-Powered HR Metrics Dashboard',
      category: 'Dashboard',
      price: 999,
      currency: '₹',
      rating: 4.7,
      downloads: 187,
      description: 'Excel dashboard using ChatGPT for HR analytics',
      preview: 'Pull HR data and use AI to generate insights, trends, and recommendations automatically.',
      icon: '📊',
      deliverable: 'Excel File (12 Worksheets) + Setup Guide',
      bonus: 'Sample data + ChatGPT prompt for insights'
    },
    {
      id: 6,
      title: 'Workday Implementation Checklist',
      category: 'Checklist',
      price: 399,
      currency: '₹',
      rating: 4.8,
      downloads: 512,
      description: 'Comprehensive 500-item checklist for Workday go-live',
      preview: '500 pre-configured items covering all phases from planning to post-go-live support.',
      icon: '✅',
      deliverable: 'Excel Checklist + PDF (Printable)',
      bonus: 'Customizable for SAP SF, Oracle HCM'
    }
  ];

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      fetch('/api/mailchimp/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
      })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            setSubscribed(true);
            setTimeout(() => {
              setEmail('');
              setSubscribed(false);
            }, 3000);
          }
        })
        .catch(err => console.error('Subscription error:', err));
    }
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="text-2xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent hover:cursor-pointer">
          AIHR Expert
        </button>
        
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => setCurrentPage('home')} className="text-sm font-medium hover:text-blue-700 transition">Home</button>
          <button onClick={() => setCurrentPage('products')} className="text-sm font-medium hover:text-blue-700 transition">Products</button>
          <button onClick={() => setCurrentPage('courses')} className="text-sm font-medium hover:text-blue-700 transition">Courses</button>
          <button onClick={openCalendly} className="bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
            Book Call
          </button>
        </div>

        <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200 p-4 space-y-3">
          <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="block text-sm font-medium py-2 w-full text-left">Home</button>
          <button onClick={() => { setCurrentPage('products'); setMobileMenuOpen(false); }} className="block text-sm font-medium py-2 w-full text-left">Products</button>
          <button onClick={() => { setCurrentPage('courses'); setMobileMenuOpen(false); }} className="block text-sm font-medium py-2 w-full text-left">Courses</button>
          <button onClick={() => {openCalendly(); setMobileMenuOpen(false);}} className="w-full bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium">Book Call</button>
        </div>
      )}
    </nav>
  );

  // Payment Modal (Net Banking Option)
  const PaymentModal = () => {
    if (!showPaymentModal || !selectedProduct) return null;

    return (
      <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={() => { setShowPaymentModal(false); setSelectedProduct(null); }}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X size={24} />
          </button>
          
          <div className="p-8">
            <h2 className="text-2xl font-bold mb-4">{selectedProduct.title}</h2>
            
            <div className="bg-blue-50 border-l-4 border-blue-600 p-4 mb-6">
              <p className="text-2xl font-bold text-blue-700">₹{selectedProduct.price}</p>
              <p className="text-sm text-blue-600 mt-1">One-time payment</p>
            </div>

            <div className="space-y-4 mb-6">
              {/* Net Banking Option */}
              <div className="border-2 border-blue-200 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CreditCard size={20} className="text-blue-700" />
                  Net Banking / Bank Transfer
                </h3>
                <div className="bg-slate-50 p-4 rounded space-y-2 text-sm mb-4">
                  <p><strong>Account Name:</strong> Dipankar Sen</p>
                  <p><strong>Account Number:</strong> 44802113336</p>
                  <p><strong>IFSC Code:</strong> SBIN0001722</p>
                  <p><strong>Bank:</strong> State Bank of India</p>
                  <p><strong>Amount:</strong> ₹{selectedProduct.price}</p>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  📧 After transfer, please email proof of payment to senmohasay@gmail.com with your product preference. We'll send download link within 24 hours.
                </p>
                <a href="mailto:senmohasay@gmail.com?subject=Product Purchase - Net Banking" className="block w-full bg-blue-700 text-white py-2 rounded-lg font-medium text-center hover:bg-blue-800 transition">
                  Send Payment Proof Email
                </a>
              </div>

              {/* UPI Option */}
              <div className="border-2 border-green-200 p-4 rounded-lg">
                <h3 className="font-semibold mb-3 flex items-center gap-2">
                  <CreditCard size={20} className="text-green-700" />
                  UPI / Google Pay / PhonePe
                </h3>
                <div className="bg-slate-50 p-4 rounded mb-4">
                  <p className="text-lg font-bold text-center text-green-700 mb-2">9836015441@rapl</p>
                  <p className="text-xs text-slate-600 text-center">Click to copy & paste in your payment app</p>
                </div>
                <button 
                  onClick={() => {
                    navigator.clipboard.writeText(process.env.NEXT_PUBLIC_UPI_ID);
                    alert('UPI ID copied! Paste in your payment app.');
                  }}
                  className="w-full bg-green-700 text-white py-2 rounded-lg font-medium hover:bg-green-800 transition"
                >
                  Copy UPI ID
                </button>
              </div>
            </div>

            <div className="text-center text-xs text-slate-500">
              🔒 Secure Payment | 100% Money-Back Guarantee (7 days)
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Product Preview Modal
  const ProductPreviewModal = () => {
    if (!showProductPreview || !selectedProduct) return null;
    return (
      <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={() => { setShowProductPreview(false); setSelectedProduct(null); }}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X size={24} />
          </button>
          
          <div className="p-8">
            <div className="text-5xl mb-4">{selectedProduct.icon}</div>
            <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
            <p className="text-slate-600 mb-4">{selectedProduct.description}</p>
            
            <div className="flex items-baseline gap-2 mb-6">
              <span className="text-3xl font-bold text-blue-700">₹{selectedProduct.price}</span>
              <span className="text-slate-500">one-time purchase</span>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6 py-4 border-y border-slate-200">
              <div>
                <p className="text-sm text-slate-600">Deliverable</p>
                <p className="font-bold text-sm">{selectedProduct.deliverable}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Bonus</p>
                <p className="font-bold text-sm">{selectedProduct.bonus}</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Downloaded by</p>
                <p className="font-bold text-sm">{selectedProduct.downloads}+ People</p>
              </div>
              <div>
                <p className="text-sm text-slate-600">Rating</p>
                <p className="font-bold text-sm">⭐ {selectedProduct.rating}</p>
              </div>
            </div>

            <button
              onClick={() => {
                setShowProductPreview(false);
                setShowPaymentModal(true);
              }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Get {selectedProduct.title} - ₹{selectedProduct.price}
            </button>

            <div className="mt-4 text-center text-xs text-slate-500">
              🔒 Secure Payment • 100% Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>
    );
  };

  // HOME PAGE
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              🤖 Oracle GenAI Professional + HR Expert
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Transform Your HR, <span className="text-blue-700">Deliver Impact</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            26+ years guiding global enterprises through HR transformations with AI acceleration. 
            From strategy to delivery—helping organizations achieve operational excellence and measurable ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition flex items-center justify-center gap-2"
            >
              Explore Digital Products <ChevronRight size={20} />
            </button>
            <button 
              onClick={openCalendly}
              className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              Schedule Free Call
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-slate-200">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-700">26+</div>
              <p className="text-sm text-slate-600">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-700">16</div>
              <p className="text-sm text-slate-600">Countries Delivered</p>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-blue-700">₹5M+</div>
              <p className="text-sm text-slate-600">Programs Led</p>
            </div>
          </div>
        </div>
      </section>

      {/* Google AdSense - Top */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '100%', maxWidth: '728px', height: 'auto' }}
            data-ad-client="ca-pub-9738444320278487"
            data-ad-slot="YOUR_AD_SLOT_ID_1"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-lg text-slate-600">Specialized in enterprise HCM transformations powered by AI</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <Globe className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">GenAI + HCM</h3>
              <ul className="space-y-3">
                {['SAP SuccessFactors', 'Workday', 'Oracle HCM Cloud', 'AI Testing', 'Prompt Engineering'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-blue-700 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <CheckCircle className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Testing & QA</h3>
              <ul className="space-y-3">
                {['Test Strategy', 'UAT Governance', 'Automation', 'AI-Powered Testing', 'Performance Testing'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-blue-700 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <TrendingUp className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Program Leadership</h3>
              <ul className="space-y-3">
                {['Change Management', 'Team Coaching', 'Risk Mitigation', 'Delivery Excellence', 'ROI Tracking'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-blue-700 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Google AdSense - Middle */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ins className="adsbygoogle"
            style={{ display: 'block', width: '100%', maxWidth: '728px', height: 'auto' }}
            data-ad-client="ca-pub-9738444320278487"
            data-ad-slot="YOUR_AD_SLOT_ID_2"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your HR?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free assessment of your HCM strategy and AI readiness</p>
          <button 
            onClick={openCalendly}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition inline-block"
          >
            📅 Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4 text-blue-400">AIHR Expert</h3>
              <p className="text-sm text-slate-400">HR Transformation & AI Expert</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Digital Products</button></li>
                <li><button onClick={() => setCurrentPage('courses')} className="hover:text-white transition">Courses</button></li>
                <li><button onClick={openCalendly} className="hover:text-white transition">Consulting</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:senmohasay@gmail.com" className="hover:text-white transition">Email</a></li>
                <li><a href="https://www.linkedin.com/in/dipankar-sen-017aa924" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
                <li><a href="https://udemy.com/user/dipankar-sen-24/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">Udemy</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Quick</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={openCalendly} className="hover:text-white transition">Book Call</button></li>
                <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Products</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-sm text-slate-400 text-center">
            <p>&copy; 2026 AIHR Expert. All rights reserved. | Made with <Heart size={16} className="inline text-red-500" /> for HR Leaders</p>
          </div>
        </div>
      </footer>
    </div>
  );

  // PRODUCTS PAGE
  const ProductsPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Digital Products</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Production-ready guides, templates, and prompt libraries.
            Buy once, use forever. 100% digital delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {digitalProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{product.icon}</div>
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                  {product.category}
                </span>
              </div>

              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-slate-600 mb-4 text-sm">{product.description}</p>

              <div className="flex items-baseline gap-2 mb-4">
                <span className="text-3xl font-bold text-blue-700">₹{product.price}</span>
                <span className="text-sm text-slate-500">⭐ {product.rating} ({product.downloads}+ sold)</span>
              </div>

              <button
                onClick={() => {
                  setSelectedProduct(product);
                  setShowProductPreview(true);
                }}
                className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition flex items-center justify-center gap-2"
              >
                <Eye size={18} />
                Preview & Buy
              </button>
            </div>
          ))}
        </div>

        {/* Google AdSense */}
        <div className="my-12 text-center">
          <div style={{ minHeight: '100px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ins className="adsbygoogle"
              style={{ display: 'block', width: '100%', maxWidth: '728px', height: 'auto' }}
              data-ad-client="ca-pub-9738444320278487"
              data-ad-slot="YOUR_AD_SLOT_ID_3"
              data-ad-format="auto"
              data-full-width-responsive="true"></ins>
          </div>
        </div>

        {/* Money Back Guarantee */}
        <div className="bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 p-8 rounded-xl text-center">
          <Heart className="text-red-600 mx-auto mb-4" size={32} />
          <h3 className="text-2xl font-bold mb-3">100% Satisfaction Guarantee</h3>
          <p className="text-slate-700 max-w-2xl mx-auto">
            Not satisfied? Get a full refund within 7 days. No questions asked.
            Our products are backed by 26+ years of enterprise experience.
          </p>
        </div>

        <button
          onClick={() => setCurrentPage('home')}
          className="mt-12 mx-auto block text-blue-700 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );

  // COURSES PAGE
  const CoursesPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Online Courses</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Self-paced video courses on HR transformation, AI, and testing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {[
            {
              title: 'GenAI for HR Professionals',
              price: '₹2,999',
              students: 1240,
              rating: 4.8,
              url: 'https://udemy.com/user/dipankar-sen-24/'
            },
            {
              title: 'SAP SuccessFactors Complete Masterclass',
              price: '₹3,499',
              students: 2156,
              rating: 4.9,
              url: 'https://udemy.com/user/dipankar-sen-24/'
            },
            {
              title: 'Workday Implementation & Testing',
              price: '₹3,999',
              students: 1876,
              rating: 4.7,
              url: 'https://udemy.com/user/dipankar-sen-24/'
            },
            {
              title: 'HCM Testing & QA Leadership',
              price: '₹2,499',
              students: 542,
              rating: 4.9,
              url: 'https://udemy.com/user/dipankar-sen-24/'
            }
          ].map((course, idx) => (
            <div key={idx} className="bg-white border border-slate-200 rounded-xl hover:shadow-xl transition p-8">
              <BookOpen className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-3">{course.title}</h3>
              <div className="flex items-center justify-between mb-4 py-4 border-y border-slate-200">
                <div>
                  <p className="text-sm text-slate-600">Students: {course.students.toLocaleString()}</p>
                  <p className="font-bold">⭐ {course.rating}</p>
                </div>
                <div className="text-right">
                  <p className="text-2xl font-bold text-blue-700">{course.price}</p>
                  <p className="text-xs text-slate-500">Udemy</p>
                </div>
              </div>
              <a
                href={course.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition block text-center"
              >
                View Course →
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={() => setCurrentPage('home')}
          className="mt-12 mx-auto block text-blue-700 hover:text-blue-800 font-medium"
        >
          ← Back to Home
        </button>
      </div>
    </div>
  );

  return (
    <>
      <Head>
        <title>AIHR Expert - AI + HR Transformation Expert</title>
        <meta name="description" content="26+ years HR transformation expertise. Oracle GenAI Professional. SAP SF, Workday, Oracle HCM specialist." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* Google AdSense */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9738444320278487" crossOrigin="anonymous"></script>
        
        {/* Calendly CSS */}
        <link href="https://assets.calendly.com/assets/external/widget.css" rel="stylesheet" />
      </Head>

      <div className="min-h-screen bg-white">
        <Navigation />
        <ProductPreviewModal />
        <PaymentModal />
        
        {currentPage === 'home' && <HomePage />}
        {currentPage === 'products' && <ProductsPage />}
        {currentPage === 'courses' && <CoursesPage />}
      </div>
    </>
  );
}