
import React, { useState, useEffect } from 'react';
import { MessageCircle, X, Send, ArrowRight } from 'lucide-react';

const WHATSAPP_NUMBER = "919953330396"; // Updated client number

const QUICK_REPLIES = [
  { label: '🏠 Home Interior Cost', message: 'Hi, I’m interested in Home Interior services. Please share details.' },
  { label: '🏢 Office Interior', message: 'Hi, I’m interested in Office Interior design. I would like to discuss my workspace.' },
  { label: '🏬 Shop Interior', message: 'Hi, I’m interested in Retail/Shop Interior design. Please share your portfolio and costs.' },
  { label: '📐 Architecture Design', message: 'Hi, I’m looking for an Architect for my upcoming project. Can we schedule a call?' },
  { label: '📞 Talk to Expert', message: 'Hi, I want to talk to a design expert from Veer Architects.' },
];

const WhatsAppWidget: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show after 200px scroll for better responsiveness
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
        setIsOpen(false); // Close chat if user scrolls back to top
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Run once on mount in case the page is already scrolled
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleWhatsAppRedirect = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`;
    window.open(url, '_blank');
  };

  return (
    <>
      {/* TRIGGER ICON - CRITICAL: High Z-Index and adjusted bottom position for mobile */}
      <div 
        className={`fixed bottom-[100px] lg:bottom-10 right-6 z-[9998] transition-all duration-500 ease-in-out transform ${
          isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
        }`}
      >
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group relative flex items-center justify-center w-16 h-16 lg:w-20 lg:h-20 bg-[#25D366] text-white rounded-full shadow-[0_15px_50px_rgba(37,211,102,0.5)] transition-all hover:scale-110 active:scale-95 animate-pulse-custom cursor-pointer"
            aria-label="Open WhatsApp Chat"
          >
            <MessageCircle size={32} className="lg:scale-125" />
            <div className="absolute -top-14 right-0 bg-white text-slate-900 text-[10px] font-black py-2 px-5 rounded-full shadow-2xl border border-slate-100 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none tracking-widest">
              NEED HELP? CHAT NOW
            </div>
          </button>
        )}
      </div>

      {/* CHAT WINDOW - CRITICAL: Z-Index 9999 */}
      <div 
        className={`fixed bottom-[100px] lg:bottom-10 right-6 z-[9999] w-[92%] max-w-sm transition-all duration-500 cubic-bezier(0.175, 0.885, 0.32, 1.275) transform origin-bottom-right ${
          isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <div className="bg-white rounded-[2.5rem] shadow-[0_30px_100px_-20px_rgba(0,0,0,0.4)] border border-slate-100 overflow-hidden">
          {/* Header */}
          <div className="bg-[#075e54] p-6 lg:p-8 text-white relative">
            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 hover:bg-white/10 rounded-full transition-colors cursor-pointer"
            >
              <X size={24} />
            </button>
            <div className="flex items-center gap-5">
              <div className="relative shrink-0">
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-[#075e54] font-black text-2xl shadow-inner">
                  V
                </div>
                <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 border-2 border-[#075e54] rounded-full"></div>
              </div>
              <div>
                <h4 className="font-black text-xl leading-none mb-1.5 tracking-tight">Veer Architects</h4>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></div>
                  <p className="text-white/80 text-xs font-bold tracking-wide">Online • Expert Support</p>
                </div>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-6 lg:p-8 bg-slate-50 min-h-[320px] max-h-[60vh] overflow-y-auto custom-scrollbar flex flex-col">
            <div className="bg-white p-5 rounded-3xl rounded-tl-none shadow-sm border border-slate-100 max-w-[90%] mb-8 animate-fade-in relative">
              <p className="text-slate-800 text-sm leading-relaxed font-medium">
                Hi 👋 Welcome to Veer Architects. <br/>How can we help you today?
              </p>
              <span className="text-[10px] text-slate-400 font-bold block mt-3 uppercase tracking-tighter">Support Assistant</span>
            </div>

            <div className="space-y-3 mt-auto">
              <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] px-1 mb-2">Select an option</p>
              {QUICK_REPLIES.map((reply) => (
                <button
                  key={reply.label}
                  onClick={() => handleWhatsAppRedirect(reply.message)}
                  className="w-full text-left bg-white hover:bg-indigo-600 border border-slate-200 hover:border-indigo-600 p-4 rounded-2xl text-slate-700 hover:text-white text-xs font-black transition-all duration-300 flex items-center justify-between group cursor-pointer shadow-sm hover:shadow-lg hover:shadow-indigo-600/20 active:scale-[0.98]"
                >
                  <span className="tracking-tight">{reply.label}</span>
                  <ArrowRight size={16} className="text-slate-300 group-hover:text-white group-hover:translate-x-1 transition-all" />
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="p-5 lg:p-6 bg-white border-t border-slate-100">
             <div 
              onClick={() => handleWhatsAppRedirect("Hi, I would like to discuss a project.")}
              className="bg-slate-50 border border-slate-100 p-4 rounded-2xl flex items-center justify-between text-slate-400 text-xs font-bold px-6 cursor-pointer hover:border-indigo-200 hover:bg-indigo-50/30 transition-all group"
             >
               <span className="group-hover:text-indigo-600">Type your message...</span>
               <Send size={18} className="text-indigo-600 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
             </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes pulse-custom {
          0%, 100% { transform: scale(1); box-shadow: 0 15px 50px rgba(37,211,102,0.5); }
          50% { transform: scale(1.08); box-shadow: 0 15px 60px rgba(37,211,102,0.7); }
        }
        .animate-pulse-custom {
          animation: pulse-custom 3s ease-in-out infinite;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f8fafc;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e2e8f0;
          border-radius: 10px;
        }
      `}</style>
    </>
  );
};

export default WhatsAppWidget;
