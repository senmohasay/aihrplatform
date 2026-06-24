import React, { useState } from 'react';
import { Menu, X, ChevronRight, Zap, FileText, BookOpen, Lock, Heart, Download, Eye, ShoppingCart, Lightbulb, Rocket, TrendingUp, Globe, CheckCircle } from 'lucide-react';

export default function AIHRConsultantWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [showProductPreview, setShowProductPreview] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

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
      fullContent: `This comprehensive guide covers:
      
      • 50+ Production-Ready HR Prompts
      • ChatGPT vs Claude vs Gemini Comparison
      • Building Custom AI Workflows
      • HR Document Generation with AI
      • Interview Question Generation
      • Performance Review Automation
      • Employee Feedback Analysis
      • Payroll Data Processing
      • Compliance Documentation
      • HR Analytics & Insights
      
      Plus: 10 HR-Specific Spreadsheet Formulas Using AI APIs`,
      icon: '🤖',
      deliverable: 'PDF Guide (45 pages) + Prompt Templates (Excel)',
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
      fullContent: `Master AI-Driven Testing for SAP SF:
      
      • AI Test Case Generation Framework
      • Using GenAI for Test Data Creation
      • Automated Test Script Writing
      • Defect Description Generation (AI-Powered)
      • UAT Process Automation with AI
      • Risk-Based Testing with AI Analytics
      • Performance Testing Report Generation
      • Regression Test Optimization
      • Test Coverage Analysis with AI
      • Predictive Defect Analysis
      
      + 30 Ready-to-Use Test Prompts for SAP SF`,
      icon: '✓',
      deliverable: 'PDF Guide (52 pages) + Prompt Library (Google Sheets)',
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
      fullContent: `Everything for a successful transformation:
      
      • 24-Month Implementation Roadmap
      • Phase-wise Breakdown (Design, Build, Test, Go-Live)
      • RACI Matrix Template
      • Resource Planning Sheet
      • Risk Register with Mitigation
      • Stakeholder Management Plan
      • Communication Timeline
      • Budget & Cost Tracking
      • KPI Dashboard Template
      • Post-Go-Live Support Plan
      
      Includes: 8 Different Transformation Scenarios`,
      icon: '📋',
      deliverable: 'PowerPoint (25 slides) + Excel Workbook',
      bonus: 'Excel Risk Register (Pre-filled with 50+ enterprise risks)'
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
      fullContent: `100+ Production-Ready Prompts:
      
      • 25+ Payroll Testing Prompts
      • 20+ Recruiting Process Prompts
      • 20+ Onboarding Automation Prompts
      • 15+ Performance Management Prompts
      • 15+ Talent Management Prompts
      • 5+ API Testing Prompts
      
      Each Prompt Includes:
      - Use Case Description
      - Expected Output Example
      - Modification Tips for Your System
      - Alternative Versions`,
      icon: '🎯',
      deliverable: 'Excel Workbook (Organized by Module) + PDF Reference',
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
      fullContent: `Complete Excel-Based AI Analytics System:
      
      • Sample HR Data with 5000+ Records
      • Automated Dashboard Formulas
      • ChatGPT Integration Setup
      • Headcount Analysis
      • Attrition Trends
      • Cost Per Hire Analysis
      • Training ROI Calculation
      • Compliance Metrics Tracking
      • Payroll Analysis Dashboard
      • Diversity & Inclusion Metrics
      
      + API Integration Guide for Real-Time Updates`,
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
      fullContent: `Complete Workday Go-Live Checklist:
      
      Discovery & Scoping: 45 Items
      Design Phase: 60 Items
      Build Phase: 75 Items
      Testing Phase: 120 Items
      UAT Phase: 85 Items
      Go-Live Preparation: 65 Items
      Post-Go-Live: 50 Items
      
      Each Item Includes:
      - Owner Assignment
      - Priority Level
      - Dependency Tracking
      - Timeline Estimate
      - Completion Status`,
      icon: '✅',
      deliverable: 'Excel Checklist + PDF (Printable)',
      bonus: 'Customizable for SAP SF, Oracle HCM'
    }
  ];

  // Blog Posts with Preview/Paywall
  const blogPosts = [
    {
      id: 1,
      title: 'Why 70% of HCM Transformations Fail (And How AI Changes That)',
      date: 'Jan 2025',
      category: 'HR Strategy',
      preview: 'The real reasons transformations fail and how Generative AI is reducing failures by 40%...',
      readTime: '8 min read',
      price: 149,
      locked: true,
      image: '🎯'
    },
    {
      id: 2,
      title: 'AI Prompt Engineering for Test Case Generation: A Complete Guide',
      date: 'Dec 2024',
      category: 'Testing',
      preview: 'How to use ChatGPT and Claude to generate 1000+ test cases in 1 hour...',
      readTime: '12 min read',
      price: 199,
      locked: true,
      image: '🤖'
    },
    {
      id: 3,
      title: '26 Years in HR Transformation: My Top 5 Mistakes and Lessons',
      date: 'Dec 2024',
      category: 'Leadership',
      preview: 'Real stories from billion-dollar programs and what I learned...',
      readTime: '15 min read',
      price: 249,
      locked: true,
      image: '💡'
    },
    {
      id: 4,
      title: 'Free: SAP SuccessFactors Implementation Best Practices',
      date: 'Nov 2024',
      category: 'SAP SF',
      preview: 'Everything you need to know for a successful SAP SF rollout. Completely free.',
      readTime: '10 min read',
      price: 0,
      locked: false,
      image: '📚'
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
      .catch(err => console.error('Error:', err));
    }
  };

  const initiatePayment = (product) => {
    if (product.price === 0) {
      window.location.href = `/blog/${product.id}`;
      return;
    }

    // Razorpay payment
    const options = {
      key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
      amount: product.price * 100,
      currency: 'INR',
      name: 'Dipankar Sen',
      description: product.title,
      handler: function(response) {
        // Verify payment on backend
        fetch('/api/razorpay/verify', {
          method: 'POST',
          body: JSON.stringify({
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            productId: product.id
          }),
          headers: { 'Content-Type': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            window.location.href = `/success?productId=${product.id}`;
          }
        });
      },
      prefill: {
        email: email || ''
      },
      theme: {
        color: '#1e40af'
      }
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  // Navigation Component
  const Navigation = () => (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        <button onClick={() => { setCurrentPage('home'); setMobileMenuOpen(false); }} className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:cursor-pointer">
          Dipankar Sen
        </button>
        
        <div className="hidden md:flex gap-8 items-center">
          <button onClick={() => setCurrentPage('home')} className="text-sm font-medium hover:text-blue-700 transition">Home</button>
          <button onClick={() => setCurrentPage('products')} className="text-sm font-medium hover:text-blue-700 transition">Resources</button>
          <button onClick={() => setCurrentPage('blog')} className="text-sm font-medium hover:text-blue-700 transition">Blog</button>
          <button onClick={() => setCurrentPage('courses')} className="text-sm font-medium hover:text-blue-700 transition">Courses</button>
          <button onClick={() => setShowCalendly(true)} className="bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
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
          <button onClick={() => { setCurrentPage('products'); setMobileMenuOpen(false); }} className="block text-sm font-medium py-2 w-full text-left">Resources</button>
          <button onClick={() => { setCurrentPage('blog'); setMobileMenuOpen(false); }} className="block text-sm font-medium py-2 w-full text-left">Blog</button>
          <button onClick={() => { setCurrentPage('courses'); setMobileMenuOpen(false); }} className="block text-sm font-medium py-2 w-full text-left">Courses</button>
          <button onClick={() => {setShowCalendly(true); setMobileMenuOpen(false);}} className="w-full bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium">Book Call</button>
        </div>
      )}
    </nav>
  );

  // Calendly Modal
  const CalendlyModal = () => {
    if (!showCalendly) return null;
    return (
      <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
          <button
            onClick={() => setShowCalendly(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 z-10"
          >
            <X size={24} />
          </button>
          
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4">Schedule a Consultation</h2>
            <p className="text-slate-600 mb-6">Book a 30-minute call to discuss your AI + HR strategy</p>
            
            <div className="calendly-inline-widget" data-url="https://calendly.com/senmohasay/new-meeting" style={{minWidth:'320px', height:'630px'}}></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
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
            <div className="mb-6">
              <div className="text-5xl mb-4">{selectedProduct.icon}</div>
              <h2 className="text-2xl font-bold mb-2">{selectedProduct.title}</h2>
              <p className="text-slate-600 mb-4">{selectedProduct.description}</p>
              
              <div className="flex items-baseline gap-2 mb-6">
                <span className="text-3xl font-bold text-blue-700">{selectedProduct.currency}{selectedProduct.price}</span>
                {selectedProduct.price > 0 && <span className="text-slate-500">one-time purchase</span>}
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
            </div>

            <div className="mb-6 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-blue-900 font-semibold mb-2">📋 What's Included:</p>
              <p className="text-sm text-blue-800 whitespace-pre-line">{selectedProduct.fullContent}</p>
            </div>

            <button
              onClick={() => initiatePayment(selectedProduct)}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition flex items-center justify-center gap-2"
            >
              <ShoppingCart size={20} />
              Get {selectedProduct.title} - {selectedProduct.currency}{selectedProduct.price}
            </button>

            <div className="mt-4 text-center text-xs text-slate-500">
              🔒 Secure Payment via Razorpay • 100% Money-Back Guarantee
            </div>
          </div>
        </div>
      </div>
    );
  };

  // HOME PAGE
  const HomePage = () => (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-blue-500/20 border border-blue-400/50 px-4 py-2 rounded-full">
            <Zap size={16} className="text-yellow-400" />
            <span className="text-sm font-medium">🤖 Generative AI + HR Transformation Expert</span>
          </div>
          
          <h1 className="text-6xl sm:text-7xl font-bold leading-tight">
            AI-Powered HR
            <br />
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Transformation
            </span>
          </h1>
          
          <p className="text-xl text-blue-100 max-w-3xl mx-auto leading-relaxed">
            26+ years of global HR transformation expertise + Oracle GenAI certification. 
            Help enterprises automate HR with AI while delivering £5M+ programs flawlessly.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => setCurrentPage('products')}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition flex items-center justify-center gap-2"
            >
              Explore Digital Resources <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => setShowCalendly(true)}
              className="border-2 border-blue-400 text-blue-300 px-8 py-4 rounded-lg font-semibold hover:bg-blue-950 transition"
            >
              Book a Call
            </button>
          </div>

          {/* Hero Stats */}
          <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-12 border-t border-blue-800/50">
            <div>
              <div className="text-4xl font-bold text-blue-300">26+</div>
              <p className="text-sm text-blue-300/70">Years Global Experience</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300">₹50K+</div>
              <p className="text-sm text-blue-300/70">Products Sold</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-300">2025</div>
              <p className="text-sm text-blue-300/70">GenAI Certified</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="bg-black/30 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-16 text-center">Your AI + HR Expert</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/50 p-8 rounded-xl hover:border-purple-500/50 transition">
              <Lightbulb className="text-yellow-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">GenAI Expertise</h3>
              <p className="text-blue-100">Oracle Cloud GenAI Professional. Expert in ChatGPT, Claude, and Gemini for HR automation and testing.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/50 p-8 rounded-xl hover:border-purple-500/50 transition">
              <Globe className="text-cyan-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Global Delivery</h3>
              <p className="text-blue-100">Delivered £5M+ HR transformations across 16 countries. Managed teams of 50+ QA members.</p>
            </div>

            <div className="bg-gradient-to-br from-blue-900/40 to-purple-900/40 border border-blue-700/50 p-8 rounded-xl hover:border-purple-500/50 transition">
              <Rocket className="text-pink-400 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Fast Implementation</h3>
              <p className="text-blue-100">SAP SuccessFactors, Workday, Oracle HCM. AI-accelerated testing reduces timelines by 40%.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your HR with AI?</h2>
          <p className="text-xl text-blue-100 mb-8">Get access to production-ready guides, templates, and AI prompts</p>
          <button 
            onClick={() => setCurrentPage('products')}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-xl transition inline-block"
          >
            Explore Digital Products
          </button>
        </div>
      </section>
    </div>
  );

  // PRODUCTS PAGE
  const ProductsPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Digital Products & Templates</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Production-ready guides, templates, and prompt libraries. 
            Buy once, use forever. 100% digital delivery. 🚀
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {digitalProducts.map((product) => (
            <div 
              key={product.id}
              className="bg-white border border-slate-200 rounded-xl hover:shadow-xl transition overflow-hidden group"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{product.icon}</div>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {product.category}
                  </span>
                </div>

                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-slate-600 mb-4 text-sm">{product.description}</p>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-bold text-blue-700">{product.currency}{product.price}</span>
                  <span className="text-sm text-slate-500">•</span>
                  <span className="text-sm text-slate-500">⭐ {product.rating} ({product.downloads}+ sold)</span>
                </div>

                <div className="space-y-3">
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
              </div>
            </div>
          ))}
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
      </div>
    </div>
  );

  // BLOG PAGE
  const BlogPage = () => (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold mb-4">Knowledge Hub</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Deep dives on AI + HR transformation. Some free, some premium for supporters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {blogPosts.map((post) => (
            <div 
              key={post.id}
              className="bg-white border border-slate-200 rounded-xl hover:shadow-xl transition overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="text-5xl">{post.image}</div>
                  {post.locked && <Lock className="text-amber-600" size={20} />}
                </div>

                <div className="flex gap-2 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{post.category}</span>
                  <span className="text-xs text-slate-500">{post.date}</span>
                  <span className="text-xs text-slate-500">•</span>
                  <span className="text-xs text-slate-500">{post.readTime}</span>
                </div>

                <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                <p className="text-slate-600 mb-6">{post.preview}</p>

                <div className="flex gap-3">
                  <button
                    onClick={() => {
                      if (post.price === 0) {
                        window.location.href = `/blog/${post.id}`;
                      } else {
                        setSelectedProduct({...post, fullContent: post.preview});
                        setShowProductPreview(true);
                      }
                    }}
                    className="flex-1 bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
                  >
                    {post.price === 0 ? 'Read Free' : `Unlock - ₹${post.price}`}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
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
              platform: 'Udemy',
              students: 1240,
              rating: 4.8,
              url: 'https://udemy.com/user/dipankar-sen-24/'
            },
            {
              title: 'SAP SuccessFactors Complete Masterclass',
              price: '₹3,499',
              platform: 'Udemy',
              students: 2156,
              rating: 4.9,
              url: 'https://udemy.com/user/dipankar-sen-24/'
            },
            {
              title: 'Workday Implementation & Testing',
              price: '₹3,999',
              platform: 'Udemy',
              students: 1876,
              rating: 4.7,
              url: 'https://udemy.com/user/dipankar-sen-24/'
            },
            {
              title: 'HCM Testing & QA Leadership',
              price: '₹2,499',
              platform: 'Teachable',
              students: 542,
              rating: 4.9,
              url: '#'
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
                  <p className="text-xs text-slate-500">{course.platform}</p>
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
      </div>
    </div>
  );

  // FOOTER
  const Footer = () => (
    <footer className="bg-slate-900 text-white py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Dipankar Sen</h3>
            <p className="text-sm text-slate-400">GenAI + HR Transformation Expert</p>
          </div>
          <div>
            <h4 className="font-bold mb-3 text-sm">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => setCurrentPage('products')} className="hover:text-white transition">Digital Products</button></li>
              <li><button onClick={() => setCurrentPage('blog')} className="hover:text-white transition">Blog</button></li>
              <li><button onClick={() => setCurrentPage('courses')} className="hover:text-white transition">Courses</button></li>
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
            <h4 className="font-bold mb-3 text-sm">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><button onClick={() => setShowCalendly(true)} className="hover:text-white transition">Book a Call</button></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-800 pt-8 text-sm text-slate-400 text-center">
          <p>&copy; 2025 Dipankar Sen. All rights reserved. | Made with ❤️ for Global HR Leaders</p>
        </div>
      </div>
    </footer>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <CalendlyModal />
      <ProductPreviewModal />
      
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'products' && <ProductsPage />}
      {currentPage === 'blog' && <BlogPage />}
      {currentPage === 'courses' && <CoursesPage />}
      
      <Footer />

      {/* Razorpay Script */}
      <script src="https://checkout.razorpay.com/v1/checkout.js"></script>
    </div>
  );
}
