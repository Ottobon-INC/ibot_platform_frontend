import React, { useState, useRef, UIEvent } from 'react';
import { motion } from 'framer-motion';
import { Users, Code2, Briefcase, Network, ArrowRight } from 'lucide-react';

const AUDIENCES = [
  {
    icon: <Users size={22} />,
    role: 'Talent Leaders',
    coreNeed: 'Signal before the offer.',
    solution: 'Eliminate subjective interviews. Get concrete, reproducible evidence of how candidates actually build and adapt.',
  },
  {
    icon: <Code2 size={22} />,
    role: 'Engineering Leaders',
    coreNeed: 'Readiness before production.',
    solution: 'Candidates complete sandbox tasks mirrored on your conventions. Inspect pull requests and coachability before day one.',
  },
  {
    icon: <Briefcase size={22} />,
    role: 'Capability Leaders',
    coreNeed: 'Direct connection to role.',
    solution: 'Move past completion certificates. Benchmark actual capability gaps across realistic operational milestones.',
  },
  {
    icon: <Network size={22} />,
    role: 'Workforce Partners',
    coreNeed: 'Pre-validated placements.',
    solution: 'Deliver pre-tested contributors backed by audited sandbox execution records on the client’s exact stack.',
  },
];

export function IntegrationSection() {
  const [activeTab, setActiveTab] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: UIEvent<HTMLDivElement>) => {
    const scrollTop = e.currentTarget.scrollTop;
    const height = e.currentTarget.clientHeight;
    // Calculate which item is currently occupying the majority of the view
    const newIndex = Math.round(scrollTop / height);
    if (newIndex !== activeTab && newIndex >= 0 && newIndex < AUDIENCES.length) {
      setActiveTab(newIndex);
    }
  };

  return (
    <section id="who-its-for" className="relative w-full py-32 bg-white border-b border-slate-200 overflow-hidden">
      <div className="mx-auto w-full px-5 max-w-[1200px] relative z-10">
        
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-20">
          <h2 className="text-[#0F172A] font-normal mb-6 text-[40px] sm:text-[48px] tracking-tight" style={{ fontFamily: 'var(--font-display)' }}>
            Built for enterprise <br className="sm:hidden" /> <span className="font-semibold text-orange-600">decision makers.</span>
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 items-start">
          
          {/* Left Indicators (Read-only) */}
          <div className="flex flex-col gap-4 w-full lg:w-2/5 lg:h-[400px]">
            {AUDIENCES.map((item, idx) => {
              const isActive = activeTab === idx;
              return (
                <div 
                  key={idx} 
                  className={`text-left px-6 flex-1 rounded-2xl border transition-all duration-300 relative overflow-hidden flex flex-col justify-center ${
                    isActive 
                      ? 'border-orange-500 bg-orange-50 shadow-md z-10' 
                      : 'border-slate-200 bg-white opacity-60'
                  }`}
                >
                  <h3 className={`text-xl font-bold transition-colors ${isActive ? 'text-orange-600' : 'text-slate-800'}`}>
                    {item.role}
                  </h3>
                  <div className="text-sm font-mono text-slate-500 mt-1 font-semibold tracking-wide">
                    {item.coreNeed}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Glass Card (Scrollable) */}
          <div className="w-full lg:w-3/5 h-[400px] relative rounded-[2rem] bg-slate-900 shadow-2xl overflow-hidden">
            {/* Decorative background glow (Fixed) */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-orange-500/20 rounded-full blur-[80px] pointer-events-none" />
            
            {/* Scrolling Container */}
            <div 
              ref={scrollRef}
              onScroll={handleScroll}
              className="absolute inset-0 overflow-y-auto overflow-x-hidden snap-y snap-mandatory scroll-smooth flex flex-col [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
              {AUDIENCES.map((item, idx) => (
                <div 
                  key={idx} 
                  className="w-full h-full shrink-0 snap-start p-10 sm:p-12 text-white flex flex-col justify-center relative"
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-5 text-orange-400 shadow-inner">
                    {item.icon}
                  </div>
                  
                  <h4 className="text-2xl sm:text-3xl font-bold mb-5 text-white leading-tight">
                    {item.role} Solution
                  </h4>
                  
                  <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-lg font-light">
                    {item.solution}
                  </p>
                  
                  <div className="mt-10 flex items-center gap-2 text-orange-400 font-bold uppercase tracking-widest text-sm cursor-pointer hover:gap-4 transition-all w-max">
                    Explore integration <ArrowRight size={18} />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
