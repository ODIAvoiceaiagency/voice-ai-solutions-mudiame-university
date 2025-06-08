import { useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function Home() {
  const lexiRef = useRef(null);
  const atlasRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const script = document.createElement("script");
      script.src = "https://vaas.crossai.co.uk/embed/lexi.js";
      script.async = true;
      script.onload = () => {
        if (window?.Lexi) window.Lexi.init(lexiRef.current);
      };
      document.body.appendChild(script);

      const atlas = document.createElement("script");
      atlas.src = "https://vaas.crossai.co.uk/embed/atlas.js";
      atlas.async = true;
      atlas.onload = () => {
        if (window?.Atlas) window.Atlas.init(atlasRef.current);
      };
      document.body.appendChild(atlas);
    }
  }, []);

  // Logo component that matches the uploaded image
  const SpiralLogo = ({ size = 80, className = "" }) => (
    <div className={`relative ${className}`} style={{ width: size, height: size }}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 200 200" 
        className="drop-shadow-2xl"
      >
        <defs>
          <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#e2e8f0" />
            <stop offset="50%" stopColor="#cbd5e1" />
            <stop offset="100%" stopColor="#94a3b8" />
          </linearGradient>
          <filter id="logoShadow">
            <feDropShadow dx="0" dy="8" stdDeviation="4" floodColor="#1e293b" floodOpacity="0.3"/>
          </filter>
        </defs>
        
        {/* Spiral paths with 3D effect */}
        <path
          d="M100 20 C140 20, 180 60, 180 100 C180 140, 140 180, 100 180 C60 180, 20 140, 20 100 C20 80, 35 65, 55 65"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="16"
          strokeLinecap="round"
          filter="url(#logoShadow)"
        />
        <path
          d="M100 40 C125 40, 160 65, 160 100 C160 125, 135 160, 100 160 C75 160, 40 135, 40 100 C40 85, 50 75, 65 75"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="14"
          strokeLinecap="round"
          filter="url(#logoShadow)"
        />
        <path
          d="M100 60 C115 60, 140 75, 140 100 C140 115, 125 140, 100 140 C85 140, 60 125, 60 100 C60 90, 68 85, 78 85"
          fill="none"
          stroke="url(#logoGradient)"
          strokeWidth="12"
          strokeLinecap="round"
          filter="url(#logoShadow)"
        />
        <circle
          cx="100"
          cy="100"
          r="8"
          fill="url(#logoGradient)"
          filter="url(#logoShadow)"
        />
      </svg>
    </div>
  );

  // Floating star component with more realistic variations
  const FloatingStar = ({ delay = 0, duration = 20, size = 2 }) => (
    <div
      className={`absolute rounded-full ${size === 1 ? 'bg-slate-200' : size === 2 ? 'bg-blue-100' : 'bg-white'} ${size === 3 ? 'opacity-90' : 'opacity-60'}`}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite alternate`,
        boxShadow: size === 3 ? '0 0 4px rgba(255, 255, 255, 0.8)' : 'none',
      }}
    />
  );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-950 to-slate-950 text-white overflow-hidden relative" style={{
      background: 'radial-gradient(ellipse at top, #0f172a 0%, #1e293b 25%, #0c1525 50%, #020617 100%)',
    }}>
      {/* Custom CSS for floating animations */}
      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(10px) rotate(5deg); }
          50% { transform: translateY(-10px) translateX(-5px) rotate(-3deg); }
          75% { transform: translateY(-15px) translateX(8px) rotate(2deg); }
          100% { transform: translateY(-25px) translateX(-10px) rotate(-5deg); }
        }
        
        @keyframes floatSlow {
          0% { transform: translateY(0px) translateX(0px) scale(1); }
          50% { transform: translateY(-30px) translateX(15px) scale(1.1); }
          100% { transform: translateY(-60px) translateX(-20px) scale(0.9); }
        }
        
        @keyframes drift {
          0% { transform: translateX(-100px) translateY(0px); }
          100% { transform: translateX(calc(100vw + 100px)) translateY(-50px); }
        }
        
        @keyframes pulse3d {
          0%, 100% { transform: scale(1) rotateY(0deg); box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { transform: scale(1.05) rotateY(180deg); box-shadow: 0 0 40px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes orbitalFloat {
          0% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-15px) translateX(15px) rotate(90deg); }
          50% { transform: translateY(0px) translateX(20px) rotate(180deg); }
          75% { transform: translateY(15px) translateX(5px) rotate(270deg); }
          100% { transform: translateY(0px) translateX(0px) rotate(360deg); }
        }
      `}</style>

      {/* Deep space cosmic background with realistic midnight blue nebulae */}
      <div className="absolute inset-0 opacity-25">
        <div 
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-950 to-indigo-950 rounded-full mix-blend-multiply filter blur-xl"
          style={{ animation: 'floatSlow 25s ease-in-out infinite alternate' }}
        ></div>
        <div 
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-gradient-to-r from-slate-800 to-blue-900 rounded-full mix-blend-multiply filter blur-xl"
          style={{ animation: 'floatSlow 30s ease-in-out infinite alternate-reverse' }}
        ></div>
        <div 
          className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-gradient-to-r from-gray-800 to-slate-900 rounded-full mix-blend-multiply filter blur-xl"
          style={{ animation: 'floatSlow 20s ease-in-out infinite alternate' }}
        ></div>
        <div 
          className="absolute top-1/2 right-1/3 w-72 h-72 bg-gradient-to-r from-blue-900 to-slate-800 rounded-full mix-blend-multiply filter blur-xl"
          style={{ animation: 'floatSlow 35s ease-in-out infinite alternate-reverse' }}
        ></div>
        {/* Additional deep space elements */}
        <div 
          className="absolute top-1/6 right-1/6 w-48 h-48 bg-gradient-to-r from-indigo-950 to-slate-950 rounded-full mix-blend-multiply filter blur-2xl opacity-60"
          style={{ animation: 'floatSlow 40s ease-in-out infinite alternate' }}
        ></div>
        <div 
          className="absolute bottom-1/6 left-1/6 w-64 h-64 bg-gradient-to-r from-gray-900 to-blue-950 rounded-full mix-blend-multiply filter blur-2xl opacity-70"
          style={{ animation: 'floatSlow 28s ease-in-out infinite alternate-reverse' }}
        ></div>
      </div>

      {/* Realistic starfield with varied sizes and distant galaxy effect */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(200)].map((_, i) => (
          <FloatingStar 
            key={i} 
            delay={Math.random() * 20}
            duration={15 + Math.random() * 10}
            size={Math.random() < 0.7 ? 1 : Math.random() < 0.9 ? 2 : 3}
          />
        ))}
        
        {/* Distant galaxy clusters */}
        {[...Array(20)].map((_, i) => (
          <div
            key={`galaxy-${i}`}
            className="absolute rounded-full bg-gradient-to-r from-blue-200 to-white opacity-20 filter blur-sm"
            style={{
              width: `${Math.random() * 4 + 1}px`,
              height: `${Math.random() * 4 + 1}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${20 + Math.random() * 15}s ease-in-out infinite alternate`,
            }}
          />
        ))}
      </div>

      {/* Earth visible in the distance */}
      <div className="absolute bottom-0 right-0 pointer-events-none">
        <div 
          className="relative w-96 h-96 rounded-full overflow-hidden"
          style={{ 
            transform: 'translate(30%, 30%)',
            animation: 'floatSlow 60s ease-in-out infinite alternate'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 via-green-400 to-blue-500 rounded-full opacity-80"></div>
          <div className="absolute inset-4 bg-gradient-to-br from-green-500 via-blue-400 to-green-600 rounded-full opacity-70"></div>
          <div className="absolute top-8 left-8 w-16 h-12 bg-green-600 rounded-full opacity-80"></div>
          <div className="absolute top-20 right-12 w-20 h-16 bg-green-500 rounded-full opacity-75"></div>
          <div className="absolute bottom-16 left-16 w-24 h-20 bg-green-600 rounded-full opacity-70"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white rounded-full opacity-20"></div>
          <div className="absolute inset-0 rounded-full shadow-2xl shadow-black/50"></div>
        </div>
      </div>

      {/* Cosmic dust and meteor trails */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {[...Array(25)].map((_, i) => (
          <div
            key={`meteor-${i}`}
            className="absolute w-1 h-8 bg-gradient-to-b from-blue-200 via-slate-300 to-transparent rounded-full opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              transform: 'rotate(45deg)',
              animation: `drift ${40 + Math.random() * 20}s linear ${Math.random() * 10}s infinite`,
            }}
          />
        ))}
        
        {/* Space dust particles */}
        {[...Array(50)].map((_, i) => (
          <div
            key={`dust-${i}`}
            className="absolute w-px h-px bg-slate-300 rounded-full opacity-25"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${25 + Math.random() * 15}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 px-6 py-12">
        {/* Header with Logo - Floating */}
        <header 
          className="flex items-center justify-between max-w-7xl mx-auto mb-16"
          style={{ animation: 'float 8s ease-in-out infinite' }}
        >
          <div className="flex items-center gap-4">
            <div style={{ animation: 'orbitalFloat 12s ease-in-out infinite' }}>
              <SpiralLogo size={60} />
            </div>
            <div>
              <h2 className="text-2xl font-bold bg-gradient-to-r from-slate-200 to-blue-200 bg-clip-text text-transparent">
                VAAS
              </h2>
              <p className="text-sm text-slate-400">Voice AI Automation</p>
            </div>
          </div>
          <nav 
            className="hidden md:flex items-center gap-6"
            style={{ animation: 'float 10s ease-in-out infinite alternate' }}
          >
            <a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">Features</a>
            <a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">Solutions</a>
            <a href="#" className="text-slate-300 hover:text-blue-300 transition-colors">Contact</a>
          </nav>
        </header>

        {/* Hero Section - Floating */}
        <section 
          className="text-center space-y-8 max-w-6xl mx-auto"
          style={{ animation: 'float 15s ease-in-out infinite alternate' }}
        >
          <div className="space-y-6">
            {/* Large centered logo - Orbital floating */}
            <div 
              className="flex justify-center mb-8"
              style={{ animation: 'orbitalFloat 20s ease-in-out infinite' }}
            >
              <div style={{ animation: 'pulse3d 6s ease-in-out infinite' }}>
                <SpiralLogo size={120} />
              </div>
            </div>
            
            <div 
              className="inline-flex items-center gap-2 bg-blue-500/20 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 text-sm font-medium"
              style={{ animation: 'float 12s ease-in-out infinite' }}
            >
              🚀 Nigeria's Premier Voice AI Platform
            </div>
            
            <h1 
              className="text-6xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white via-slate-100 to-blue-100 bg-clip-text text-transparent leading-tight drop-shadow-lg"
              style={{ animation: 'float 18s ease-in-out infinite alternate' }}
            >
              Speak.
              <br />
              <span className="text-blue-200">Automate.</span>
              <br />
              <span className="text-cyan-200">Monetize.</span>
            </h1>
            
            <p 
              className="text-xl md:text-2xl text-slate-200 max-w-3xl mx-auto leading-relaxed drop-shadow-md"
              style={{ animation: 'float 14s ease-in-out infinite' }}
            >
              Transform your business with AI-powered voice automation that understands, responds, and delivers results in real-time.
            </p>
          </div>

          <div 
            className="flex flex-col sm:flex-row justify-center gap-4 mt-12"
            style={{ animation: 'float 16s ease-in-out infinite alternate' }}
          >
            <Button 
              className="group text-lg px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl border border-blue-400/20"
              style={{ animation: 'float 10s ease-in-out infinite' }}
            >
              <span className="mr-2 text-xl group-hover:animate-pulse">🎤</span>
              Start Talking Now
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 rounded-full transition-opacity duration-300"></div>
            </Button>
            <Button 
              variant="outline" 
              className="text-lg px-8 py-4 border-2 border-blue-400/50 hover:border-blue-300 bg-slate-900/30 backdrop-blur-sm hover:bg-blue-500/10 rounded-full transition-all duration-300 transform hover:scale-105"
              style={{ animation: 'float 11s ease-in-out infinite alternate' }}
            >
              <span className="mr-2 text-xl">💼</span>
              View Agent Use Cases
            </Button>
          </div>
        </section>

        {/* Use Cases Section - Cards floating individually */}
        <section className="mt-24 max-w-7xl mx-auto">
          <div 
            className="text-center mb-16"
            style={{ animation: 'float 13s ease-in-out infinite' }}
          >
            <div 
              className="flex justify-center mb-6"
              style={{ animation: 'orbitalFloat 15s ease-in-out infinite' }}
            >
              <SpiralLogo size={50} />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent drop-shadow-lg">
              Powering Innovation Across Industries
            </h2>
            <p className="text-lg text-slate-200 max-w-2xl mx-auto drop-shadow-md">
              From education to finance, our voice AI agents are transforming how businesses operate and engage with customers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Mudiame University",
                description: "Voice-powered student support, alumni engagement, and automated admissions workflows.",
                icon: "🎓",
                gradient: "from-emerald-500/20 to-blue-500/20",
                border: "border-emerald-400/30",
                animation: "float 17s ease-in-out infinite"
              },
              {
                title: "Loan & Debt Recovery",
                description: "Persistent voice agents for collections, WhatsApp reminders, and real-time payment links.",
                icon: "💰",
                gradient: "from-amber-500/20 to-blue-500/20",
                border: "border-amber-400/30",
                animation: "float 19s ease-in-out infinite alternate"
              },
              {
                title: "Events & SMEs",
                description: "WhatsApp ticketing, voice registrations, and automated customer support for local businesses.",
                icon: "🎪",
                gradient: "from-purple-500/20 to-blue-500/20",
                border: "border-purple-400/30",
                animation: "float 21s ease-in-out infinite"
              }
            ].map((item, index) => (
              <Card 
                key={index}
                className={`group bg-gradient-to-br ${item.gradient} backdrop-blur-sm border ${item.border} hover:border-opacity-60 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-xl hover:shadow-2xl`}
                style={{ animation: item.animation }}
              >
                <CardContent className="p-8 relative overflow-hidden">
                  <div 
                    className="absolute top-4 right-4"
                    style={{ animation: 'orbitalFloat 25s ease-in-out infinite' }}
                  >
                    <SpiralLogo size={30} className="opacity-20 group-hover:opacity-30 transition-opacity duration-300" />
                  </div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-4">
                      <span 
                        className="text-3xl"
                        style={{ animation: 'float 8s ease-in-out infinite alternate' }}
                      >
                        {item.icon}
                      </span>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-100 transition-colors duration-300 drop-shadow-md">
                        {item.title}
                      </h3>
                    </div>
                    
                    <p className="text-slate-200 leading-relaxed group-hover:text-slate-100 transition-colors duration-300 drop-shadow-sm">
                      {item.description}
                    </p>
                    
                    <div className="mt-6 flex items-center text-sm text-blue-200 group-hover:text-blue-100 transition-colors duration-300">
                      <span>Learn more</span>
                      <span className="ml-2 transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Stats Section - Floating */}
        <section 
          className="mt-24 text-center"
          style={{ animation: 'float 22s ease-in-out infinite alternate' }}
        >
          <div 
            className="flex justify-center mb-8"
            style={{ animation: 'orbitalFloat 18s ease-in-out infinite' }}
          >
            <SpiralLogo size={60} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { number: "50K+", label: "Voice Interactions Daily", animation: "float 12s ease-in-out infinite" },
              { number: "99.9%", label: "Uptime Guarantee", animation: "float 14s ease-in-out infinite alternate" },
              { number: "200+", label: "Active Business Partners", animation: "float 16s ease-in-out infinite" }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="space-y-2"
                style={{ animation: stat.animation }}
              >
                <div className="text-4xl md:text-5xl font-black bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
                  {stat.number}
                </div>
                <div className="text-slate-300 text-sm uppercase tracking-wider drop-shadow-sm">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Call to Action - Floating */}
        <section 
          className="mt-24 text-center"
          style={{ animation: 'float 20s ease-in-out infinite' }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 to-indigo-500/10 backdrop-blur-sm border border-blue-400/20 rounded-3xl p-12 max-w-4xl mx-auto relative overflow-hidden">
            <div 
              className="absolute top-6 right-6"
              style={{ animation: 'orbitalFloat 30s ease-in-out infinite' }}
            >
              <SpiralLogo size={40} className="opacity-20" />
            </div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg">
              Ready to Transform Your Business?
            </h3>
            <p className="text-lg text-slate-200 mb-8 max-w-2xl mx-auto drop-shadow-md">
              Join hundreds of Nigerian businesses already using VAAS to automate operations and boost revenue.
            </p>
            <Button 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-lg px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border border-blue-400/20"
              style={{ animation: 'float 9s ease-in-out infinite alternate' }}
            >
              Get Started Today
            </Button>
          </div>
        </section>

        {/* Footer - Floating */}
        <footer 
          className="mt-24 pt-12 border-t border-slate-700/50"
          style={{ animation: 'float 25s ease-in-out infinite alternate' }}
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
            <div className="md:col-span-2">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                <div style={{ animation: 'orbitalFloat 20s ease-in-out infinite' }}>
                  <SpiralLogo size={50} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-slate-200 to-blue-200 bg-clip-text text-transparent">
                    VAAS
                  </h3>
                  <p className="text-slate-400">Voice AI Automation Solutions</p>
                </div>
              </div>
              <p className="text-slate-300 max-w-md drop-shadow-sm">
                Empowering Nigerian businesses with cutting-edge voice AI technology for automation, engagement, and growth.
              </p>
            </div>
            <div style={{ animation: 'float 18s ease-in-out infinite' }}>
              <h4 className="font-semibold mb-4 text-blue-200">Solutions</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Voice Agents</li>
                <li>WhatsApp Integration</li>
                <li>Payment Links</li>
                <li>Analytics</li>
              </ul>
            </div>
            <div style={{ animation: 'float 22s ease-in-out infinite alternate' }}>
              <h4 className="font-semibold mb-4 text-blue-200">Support</h4>
              <ul className="space-y-2 text-slate-400 text-sm">
                <li>Documentation</li>
                <li>API Reference</li>
                <li>Community</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-slate-700/30 text-center text-slate-500 text-sm">
            <div 
              className="flex justify-center mb-4"
              style={{ animation: 'orbitalFloat 15s ease-in-out infinite' }}
            >
              <SpiralLogo size={30} className="opacity-50" />
            </div>
            © 2025 VAAS. All rights reserved. | Powered by CrossAI
          </div>
        </footer>
      </div>

      {/* Voice Agents - Preserved original functionality */}
      <div className="fixed bottom-6 left-6 z-50" ref={lexiRef} id="lexi-agent" />
      <div className="fixed bottom-6 right-6 z-50" ref={atlasRef} id="atlas-agent" />
    </main>
  );
}