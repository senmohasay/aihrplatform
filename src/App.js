import React, { useState } from 'react';
import { Menu, X, ChevronRight, Users, TrendingUp, Globe, BookOpen, CheckCircle } from 'lucide-react';

export default function ConsultantWebsite() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [showCalendly, setShowCalendly] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      // In production, send this to your email service (Mailchimp, etc.)
      console.log('Newsletter signup:', email);
      setSubscribed(true);
      setTimeout(() => {
        setEmail('');
        setSubscribed(false);
      }, 3000);
    }
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white text-slate-900">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-700">Dipankar Sen</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <button onClick={() => scrollToSection('expertise')} className="text-sm font-medium hover:text-blue-700 transition">Expertise</button>
            <button onClick={() => scrollToSection('impact')} className="text-sm font-medium hover:text-blue-700 transition">Impact</button>
            <button onClick={() => scrollToSection('services')} className="text-sm font-medium hover:text-blue-700 transition">Services</button>
            <button onClick={() => scrollToSection('resources')} className="text-sm font-medium hover:text-blue-700 transition">Resources</button>
            <button onClick={() => setShowCalendly(true)} className="bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition">
              Schedule Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-200 p-4 space-y-3">
            <button onClick={() => scrollToSection('expertise')} className="block text-sm font-medium py-2 w-full text-left">Expertise</button>
            <button onClick={() => scrollToSection('impact')} className="block text-sm font-medium py-2 w-full text-left">Impact</button>
            <button onClick={() => scrollToSection('services')} className="block text-sm font-medium py-2 w-full text-left">Services</button>
            <button onClick={() => scrollToSection('resources')} className="block text-sm font-medium py-2 w-full text-left">Resources</button>
            <button onClick={() => {setShowCalendly(true); setMobileMenuOpen(false);}} className="w-full bg-blue-700 text-white px-6 py-2 rounded-lg text-sm font-medium">Schedule Call</button>
          </div>
        )}
      </nav>

      {/* Calendly Modal */}
      {showCalendly && (
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
              <p className="text-slate-600 mb-6">Book a free 30-minute call with me to discuss your HR transformation needs.</p>
              
              {/* Calendly Embed */}
              <div className="calendly-inline-widget" data-url="https://calendly.com/senmohasay/30min" style={{minWidth:'320px', height:'630px'}}></div>
              <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium">
              HR Transformation Expert
            </span>
          </div>
          
          <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
            Transform Your HR, <span className="text-blue-700">Deliver Impact</span>
          </h1>
          
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            26+ years guiding global enterprises through SAP SuccessFactors, Workday, and Oracle HCM transformations. 
            From strategy to delivery—helping organizations achieve operational excellence and measurable ROI.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button 
              onClick={() => setShowCalendly(true)}
              className="bg-blue-700 text-white px-8 py-4 rounded-lg font-medium hover:bg-blue-800 transition flex items-center justify-center gap-2"
            >
              Free Transformation Audit <ChevronRight size={20} />
            </button>
            <button 
              onClick={() => scrollToSection('impact')}
              className="border-2 border-blue-700 text-blue-700 px-8 py-4 rounded-lg font-medium hover:bg-blue-50 transition"
            >
              View Case Studies
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
              <div className="text-3xl sm:text-4xl font-bold text-blue-700">£5M+</div>
              <p className="text-sm text-slate-600">Programs Led</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Core Expertise</h2>
            <p className="text-lg text-slate-600">Specialized in enterprise HCM transformations</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* HCM Systems */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <Globe className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">HCM Platforms</h3>
              <ul className="space-y-3">
                {['SAP SuccessFactors', 'Workday', 'Oracle HCM Cloud'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-blue-700 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Testing & QA */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <TrendingUp className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Testing & QA</h3>
              <ul className="space-y-3">
                {['Test Strategy & Governance', 'UAT & E2E Testing', 'Quality Optimization'].map(item => (
                  <li key={item} className="flex items-start gap-2 text-sm">
                    <CheckCircle size={18} className="text-blue-700 flex-shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Program Leadership */}
            <div className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
              <Users className="text-blue-700 mb-4" size={32} />
              <h3 className="text-xl font-bold mb-4">Program Leadership</h3>
              <ul className="space-y-3">
                {['Team Management (50+ resources)', 'Global Rollouts', 'Multi-country Delivery'].map(item => (
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

      {/* Impact/Results Section */}
      <section id="impact" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Proven Results</h2>
            <p className="text-lg text-slate-600">Delivering measurable business impact</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="border-l-4 border-blue-700 pl-6">
                <div className="text-4xl font-bold text-blue-700">30%</div>
                <p className="text-lg text-slate-600">Reduction in Production Defects</p>
                <p className="text-sm text-slate-500 mt-2">Through QA process optimization</p>
              </div>

              <div className="border-l-4 border-blue-700 pl-6">
                <div className="text-4xl font-bold text-blue-700">£5M+</div>
                <p className="text-lg text-slate-600">Enterprise Programs Managed</p>
                <p className="text-sm text-slate-500 mt-2">Across 16 countries globally</p>
              </div>

              <div className="border-l-4 border-blue-700 pl-6">
                <div className="text-4xl font-bold text-blue-700">50+</div>
                <p className="text-lg text-slate-600">QA Teams Led</p>
                <p className="text-sm text-slate-500 mt-2">Distributed across UK, EU & offshore</p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <h3 className="text-2xl font-bold mb-6">Client Success Stories</h3>
              
              <div className="space-y-6">
                <div>
                  <p className="font-semibold text-slate-900">Major EU Retailer</p>
                  <p className="text-sm text-slate-600 mt-1">Led £5M Workday transformation across 16 countries with zero critical production incidents</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Global Manufacturing</p>
                  <p className="text-sm text-slate-600 mt-1">Delivered SAP SuccessFactors implementation for 10,000+ employees across Europe</p>
                </div>

                <div>
                  <p className="font-semibold text-slate-900">Financial Services</p>
                  <p className="text-sm text-slate-600 mt-1">Orchestrated Oracle HCM testing across 5 countries with integrated payroll systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-slate-100 py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">How I Help</h2>
            <p className="text-lg text-slate-600">Strategic consulting & hands-on delivery</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: 'Transformation Strategy',
                desc: 'Design your HCM roadmap, vendor selection, and delivery approach',
                icon: '📋'
              },
              {
                title: 'QA & Testing Leadership',
                desc: 'Build test strategies, governance frameworks, and quality processes',
                icon: '✓'
              },
              {
                title: 'Program Delivery',
                desc: 'Direct execution of HR transformations with proven methodologies',
                icon: '🚀'
              },
              {
                title: 'Team Training & Coaching',
                desc: 'Build capabilities in HCM tools and testing best practices',
                icon: '👥'
              }
            ].map((service, idx) => (
              <div key={idx} className="bg-white p-8 rounded-xl border border-slate-200 hover:shadow-lg transition">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-600 text-sm">{service.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button 
              onClick={() => setShowCalendly(true)}
              className="bg-blue-700 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-800 transition"
            >
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Resources/Learning Section */}
      <section id="resources" className="py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Learning Resources</h2>
            <p className="text-lg text-slate-600">Insights to accelerate your transformation</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white p-8 rounded-xl">
              <BookOpen size={32} className="mb-4" />
              <h3 className="text-2xl font-bold mb-3">Online Courses</h3>
              <p className="mb-6 text-blue-100">Master HR transformation from vendor selection to delivery. Self-paced video courses with certification.</p>
              <a 
                href="/" 
                className="inline-block bg-white text-blue-700 px-6 py-2 rounded-lg font-medium hover:bg-blue-50 transition"
              >
                Explore Courses
              </a>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-slate-100 border-2 border-blue-700 p-8 rounded-xl">
              <BookOpen size={32} className="mb-4 text-blue-700" />
              <h3 className="text-2xl font-bold mb-3">Weekly Insights</h3>
              <p className="mb-6 text-slate-600">HR transformation trends, HCM best practices, and real-world case studies delivered to your inbox.</p>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <input 
                  type="email" 
                  placeholder="Your email" 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-2 rounded-lg border border-slate-300 text-sm focus:outline-none focus:border-blue-500"
                />
                <button type="submit" className="w-full bg-blue-700 text-white py-2 rounded-lg font-medium hover:bg-blue-800 transition">
                  {subscribed ? 'Subscribed! ✓' : 'Subscribe Free'}
                </button>
              </form>
            </div>
          </div>

          {/* Recent Articles */}
          <div>
            <h3 className="text-2xl font-bold mb-8">Latest Articles</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: 'SAP SF vs Workday: A 2024 Comparison', date: 'March 2024', url: '/' },
                { title: 'Building Effective Test Strategies for HCM Transformations', date: 'February 2024', url: '/' },
                { title: 'Why 60% of HCM Projects Face Quality Issues (And How to Avoid It)', date: 'January 2024', url: '/' }
              ].map((article, idx) => (
                <a 
                  key={idx}
                  href={article.url}
                  className="border border-slate-200 p-6 rounded-lg hover:shadow-lg transition cursor-pointer"
                >
                  <p className="text-sm text-blue-700 font-medium mb-2">{article.date}</p>
                  <h4 className="font-bold text-slate-900 hover:text-blue-700 transition">{article.title}</h4>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-4">Ready to Transform Your HR?</h2>
          <p className="text-xl mb-8 text-blue-100">Get a free assessment of your HCM strategy and transformation readiness</p>
          <button 
            onClick={() => setShowCalendly(true)}
            className="bg-white text-blue-700 px-8 py-4 rounded-lg font-bold hover:bg-blue-50 transition inline-block"
          >
            Schedule Free Consultation
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold mb-4">Dipankar Sen</h3>
              <p className="text-sm text-slate-400">HR Transformation & HCM Expert</p>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Services</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Consulting</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition">Training</button></li>
                <li><a href="/" className="hover:text-white transition">Courses</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Resources</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><button onClick={() => scrollToSection('resources')} className="hover:text-white transition">Blog</button></li>
                <li><button onClick={() => scrollToSection('resources')} className="hover:text-white transition">Newsletter</button></li>
                <li><button onClick={() => scrollToSection('impact')} className="hover:text-white transition">Case Studies</button></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-sm">Connect</h4>
              <ul className="space-y-2 text-sm text-slate-400">
                <li><a href="mailto:senmohasay@gmail.com" className="hover:text-white transition">Email</a></li>
                <li><a href="https://www.linkedin.com/in/dipankar-sen-017aa924" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">LinkedIn</a></li>
                <li><button onClick={() => setShowCalendly(true)} className="hover:text-white transition">Book a Call</button></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-sm text-slate-400 text-center">
            <p>&copy; 2026 Dipankar Sen. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
