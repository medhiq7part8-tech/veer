
import React, { useState } from 'react';
import { 
  Building2, Home, Briefcase, ShoppingBag, HardHat, 
  MapPin, Ruler, CheckCircle2, ChevronRight, ChevronLeft,
  Zap, ShieldCheck, Gem, User, Phone, Mail, Calculator,
  Info
} from 'lucide-react';
import { CalculatorState, ProjectType, FinishLevel, TimelinePreference } from './types';
import { calculateEstimate } from './pricingConfig';

const STEPS = 6;

const EstimateCalculator: React.FC = () => {
  const [state, setState] = useState<CalculatorState>({
    step: 1,
    projectType: 'home',
    propertyType: 'Apartment',
    location: 'Gurgaon',
    area: 1200,
    scope: {
      kitchen: true,
      bedrooms: 2,
      livingDining: true,
      wardrobes: 2,
      falseCeiling: true,
      flooringUpgrade: false,
      workstations: 0,
      displayUnits: false
    },
    finishLevel: 'premium',
    timeline: 'standard',
    leadInfo: { name: '', mobile: '', email: '', city: '' }
  });

  const [isCalculating, setIsCalculating] = useState(false);
  const [result, setResult] = useState<any>(null);

  const nextStep = () => setState(prev => ({ ...prev, step: prev.step + 1 }));
  const prevStep = () => setState(prev => ({ ...prev, step: prev.step - 1 }));

  const handleCalculate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsCalculating(true);
    // Simulate AI Processing
    setTimeout(() => {
      const calcResult = calculateEstimate(state);
      setResult(calcResult);
      setIsCalculating(false);
      nextStep();
    }, 2000);
  };

  const formatPrice = (num: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(num);
  };

  return (
    <div id="calculator" className="py-24 bg-white overflow-hidden scroll-mt-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 heading-font">AI-Powered Project Estimator</h2>
            <p className="text-slate-500 text-lg">Get a premium architecture & interior quote tailored to your space in 2 minutes.</p>
          </div>

          {/* PROGRESS BAR */}
          <div className="mb-12 relative">
            <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
              <div 
                className="h-full bg-indigo-600 transition-all duration-500 ease-out"
                style={{ width: `${(state.step / STEPS) * 100}%` }}
              />
            </div>
            <div className="flex justify-between mt-4">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Step {state.step} of {STEPS}</span>
              <span className="text-xs font-bold text-indigo-600 uppercase tracking-widest">
                {state.step === STEPS ? 'Result Ready' : 'In Progress'}
              </span>
            </div>
          </div>

          <div className="bg-white border border-slate-100 rounded-[3rem] shadow-2xl shadow-indigo-500/5 p-8 md:p-12 min-h-[500px] flex flex-col">
            
            {/* STEP 1: PROJECT TYPE */}
            {state.step === 1 && (
              <div className="animate-fade-in flex-1">
                <h3 className="text-2xl font-bold mb-8 text-slate-900">What are you looking to design?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    { id: 'home', label: 'Home Interior', icon: <Home /> },
                    { id: 'architecture', label: 'Architecture', icon: <Building2 /> },
                    { id: 'office', label: 'Office Interior', icon: <Briefcase /> },
                    { id: 'retail', label: 'Retail/Shop', icon: <ShoppingBag /> },
                    { id: 'turnkey', label: 'Full Turnkey', icon: <HardHat /> },
                  ].map(type => (
                    <button
                      key={type.id}
                      onClick={() => { setState(p => ({ ...p, projectType: type.id as ProjectType })); nextStep(); }}
                      className={`p-8 rounded-[2rem] border-2 transition-all flex flex-col items-center gap-4 group ${
                        state.projectType === type.id 
                        ? 'border-indigo-600 bg-indigo-50/30' 
                        : 'border-slate-100 hover:border-indigo-200 hover:bg-slate-50'
                      }`}
                    >
                      <div className={`w-16 h-16 rounded-2xl flex items-center justify-center transition-all ${
                        state.projectType === type.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400 group-hover:bg-indigo-100 group-hover:text-indigo-600'
                      }`}>
                        {type.icon}
                      </div>
                      <span className="font-bold text-slate-800">{type.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* STEP 2: PROPERTY DETAILS */}
            {state.step === 2 && (
              <div className="animate-fade-in flex-1">
                <h3 className="text-2xl font-bold mb-8 text-slate-900">Property Details</h3>
                <div className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Location</label>
                      <div className="flex flex-wrap gap-3">
                        {['Gurgaon', 'Delhi NCR', 'Other City'].map(loc => (
                          <button
                            key={loc}
                            onClick={() => setState(p => ({ ...p, location: loc }))}
                            className={`px-6 py-3 rounded-xl border-2 font-bold transition-all ${
                              state.location === loc ? 'border-indigo-600 bg-indigo-50 text-indigo-600' : 'border-slate-100 text-slate-500 hover:border-slate-200'
                            }`}
                          >
                            {loc}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">Built-up Area (Sq Ft)</label>
                      <div className="relative">
                        <input 
                          type="number" 
                          value={state.area}
                          onChange={(e) => setState(p => ({ ...p, area: parseInt(e.target.value) || 0 }))}
                          className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-6 py-4 font-bold text-xl outline-none focus:border-indigo-600 transition-all"
                        />
                        <Ruler className="absolute right-6 top-1/2 -translate-y-1/2 text-slate-300" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-auto pt-10 flex gap-4">
                  <button onClick={prevStep} className="px-8 py-4 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all">Back</button>
                  <button onClick={nextStep} className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all flex items-center justify-center gap-2">Next <ChevronRight size={20} /></button>
                </div>
              </div>
            )}

            {/* STEP 3: SCOPE */}
            {state.step === 3 && (
              <div className="animate-fade-in flex-1">
                <h3 className="text-2xl font-bold mb-8 text-slate-900">Define Your Scope</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {state.projectType !== 'office' && state.projectType !== 'retail' && (
                    <>
                      <button 
                        onClick={() => setState(p => ({ ...p, scope: { ...p.scope, kitchen: !p.scope.kitchen } }))}
                        className={`p-6 rounded-2xl border-2 flex items-center justify-between transition-all ${state.scope.kitchen ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100'}`}
                      >
                        <span className="font-bold">Modular Kitchen</span>
                        <CheckCircle2 className={state.scope.kitchen ? 'text-indigo-600' : 'text-slate-200'} />
                      </button>
                      <div className="p-6 rounded-2xl border-2 border-slate-100 flex items-center justify-between">
                        <span className="font-bold">Bedrooms</span>
                        <div className="flex items-center gap-4">
                          <button onClick={() => setState(p => ({ ...p, scope: { ...p.scope, bedrooms: Math.max(0, p.scope.bedrooms - 1) } }))} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold">-</button>
                          <span className="font-bold w-4 text-center">{state.scope.bedrooms}</span>
                          <button onClick={() => setState(p => ({ ...p, scope: { ...p.scope, bedrooms: p.scope.bedrooms + 1 } }))} className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold">+</button>
                        </div>
                      </div>
                      <button 
                        onClick={() => setState(p => ({ ...p, scope: { ...p.scope, falseCeiling: !p.scope.falseCeiling } }))}
                        className={`p-6 rounded-2xl border-2 flex items-center justify-between transition-all ${state.scope.falseCeiling ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100'}`}
                      >
                        <span className="font-bold">False Ceiling</span>
                        <CheckCircle2 className={state.scope.falseCeiling ? 'text-indigo-600' : 'text-slate-200'} />
                      </button>
                      <button 
                        onClick={() => setState(p => ({ ...p, scope: { ...p.scope, flooringUpgrade: !p.scope.flooringUpgrade } }))}
                        className={`p-6 rounded-2xl border-2 flex items-center justify-between transition-all ${state.scope.flooringUpgrade ? 'border-indigo-600 bg-indigo-50' : 'border-slate-100'}`}
                      >
                        <span className="font-bold">Flooring Upgrade</span>
                        <CheckCircle2 className={state.scope.flooringUpgrade ? 'text-indigo-600' : 'text-slate-200'} />
                      </button>
                    </>
                  )}
                  {state.projectType === 'office' && (
                    <div className="p-6 rounded-2xl border-2 border-slate-100 flex flex-col gap-4 col-span-2">
                       <label className="font-bold">Number of Workstations</label>
                       <input 
                        type="range" min="0" max="100" step="5"
                        value={state.scope.workstations}
                        onChange={(e) => setState(p => ({ ...p, scope: { ...p.scope, workstations: parseInt(e.target.value) } }))}
                        className="w-full accent-indigo-600"
                       />
                       <div className="text-indigo-600 font-bold text-center text-2xl">{state.scope.workstations} Stations</div>
                    </div>
                  )}
                </div>
                <div className="mt-auto pt-10 flex gap-4">
                  <button onClick={prevStep} className="px-8 py-4 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all">Back</button>
                  <button onClick={nextStep} className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all flex items-center justify-center gap-2">Next <ChevronRight size={20} /></button>
                </div>
              </div>
            )}

            {/* STEP 4: FINISH LEVEL */}
            {state.step === 4 && (
              <div className="animate-fade-in flex-1">
                <h3 className="text-2xl font-bold mb-8 text-slate-900">Finish & Material Quality</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {[
                    { id: 'economy', label: 'Economy', desc: 'Functional, high-quality basics for rentals or tight budgets.', icon: <Zap /> },
                    { id: 'premium', label: 'Premium', desc: 'Superior finishes, custom textures, and top-tier brands.', icon: <ShieldCheck /> },
                    { id: 'luxury', label: 'Luxury', desc: 'High-end exotic veneers, Italian marbles, and automation.', icon: <Gem /> },
                  ].map(level => (
                    <button
                      key={level.id}
                      onClick={() => setState(p => ({ ...p, finishLevel: level.id as FinishLevel }))}
                      className={`p-8 rounded-[2rem] border-2 transition-all flex flex-col gap-4 text-left ${
                        state.finishLevel === level.id 
                        ? 'border-indigo-600 bg-indigo-50/30 ring-4 ring-indigo-500/10' 
                        : 'border-slate-100 hover:border-indigo-200'
                      }`}
                    >
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                        state.finishLevel === level.id ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-400'
                      }`}>
                        {level.icon}
                      </div>
                      <h4 className="font-bold text-xl">{level.label}</h4>
                      <p className="text-sm text-slate-500 leading-relaxed">{level.desc}</p>
                    </button>
                  ))}
                </div>
                <div className="mt-auto pt-10 flex gap-4">
                  <button onClick={prevStep} className="px-8 py-4 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all">Back</button>
                  <button onClick={nextStep} className="flex-1 bg-slate-900 text-white py-4 rounded-2xl font-bold hover:bg-indigo-600 transition-all flex items-center justify-center gap-2">Next <ChevronRight size={20} /></button>
                </div>
              </div>
            )}

            {/* STEP 5: LEAD INFO */}
            {state.step === 5 && (
              <div className="animate-fade-in flex-1">
                <h3 className="text-2xl font-bold mb-8 text-slate-900">Get Your Personalized Estimate</h3>
                <p className="text-slate-500 mb-8">Almost there! We just need your contact details to generate the AI report and send it to your inbox.</p>
                <form onSubmit={handleCalculate} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input 
                        required
                        type="text" 
                        placeholder="Full Name"
                        value={state.leadInfo.name}
                        onChange={(e) => setState(p => ({ ...p, leadInfo: { ...p.leadInfo, name: e.target.value } }))}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-12 py-4 font-bold outline-none focus:border-indigo-600 transition-all"
                      />
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                    </div>
                    <div className="relative">
                      <input 
                        required
                        type="tel" 
                        placeholder="Mobile Number"
                        value={state.leadInfo.mobile}
                        onChange={(e) => setState(p => ({ ...p, leadInfo: { ...p.leadInfo, mobile: e.target.value } }))}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-12 py-4 font-bold outline-none focus:border-indigo-600 transition-all"
                      />
                      <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                    </div>
                    <div className="relative">
                      <input 
                        required
                        type="email" 
                        placeholder="Email Address"
                        value={state.leadInfo.email}
                        onChange={(e) => setState(p => ({ ...p, leadInfo: { ...p.leadInfo, email: e.target.value } }))}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-12 py-4 font-bold outline-none focus:border-indigo-600 transition-all"
                      />
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                    </div>
                    <div className="relative">
                      <input 
                        required
                        type="text" 
                        placeholder="City"
                        value={state.leadInfo.city}
                        onChange={(e) => setState(p => ({ ...p, leadInfo: { ...p.leadInfo, city: e.target.value } }))}
                        className="w-full bg-slate-50 border-2 border-slate-100 rounded-2xl px-12 py-4 font-bold outline-none focus:border-indigo-600 transition-all"
                      />
                      <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-300" size={20} />
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-slate-400 text-xs">
                    <CheckCircle2 size={16} className="text-indigo-600 shrink-0" />
                    <p>By clicking "Show Estimate", you agree to our privacy policy and consent to be contacted by our design consultants.</p>
                  </div>
                  <div className="pt-6 flex gap-4">
                    <button type="button" onClick={prevStep} className="px-8 py-4 rounded-2xl font-bold text-slate-500 bg-slate-100 hover:bg-slate-200 transition-all">Back</button>
                    <button 
                      disabled={isCalculating}
                      type="submit" 
                      className="flex-1 bg-indigo-600 text-white py-4 rounded-2xl font-black text-lg hover:bg-indigo-700 transition-all flex items-center justify-center gap-2 shadow-xl shadow-indigo-600/30"
                    >
                      {isCalculating ? (
                        <>Processing AI Estimate...</>
                      ) : (
                        <>Show My Estimate <Calculator size={22} /></>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            )}

            {/* STEP 6: RESULT */}
            {state.step === 6 && result && (
              <div className="animate-fade-in flex-1 flex flex-col">
                <div className="text-center mb-10">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 text-green-600 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                    <CheckCircle2 size={14} /> AI Estimate Generated
                  </div>
                  <h3 className="text-3xl font-bold text-slate-900">Your Project Estimate</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="bg-indigo-600 p-10 rounded-[3rem] text-white flex flex-col justify-center items-center text-center shadow-2xl shadow-indigo-200">
                    <span className="text-sm font-bold uppercase tracking-[0.3em] opacity-80 mb-4">Approximate Cost Range</span>
                    <div className="text-4xl md:text-5xl font-black mb-4 tracking-tighter">
                      {formatPrice(result.min)} - {formatPrice(result.max)}
                    </div>
                    <p className="text-indigo-100 text-sm font-light">*Exclusive of GST & Local Taxes</p>
                  </div>

                  <div className="grid grid-cols-1 gap-4">
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Expected Timeline</span>
                      <p className="text-2xl font-bold text-slate-900">{result.timelineDays} Working Days</p>
                    </div>
                    <div className="p-6 bg-slate-50 rounded-3xl border border-slate-100">
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-1 block">Finish Selection</span>
                      <p className="text-2xl font-bold text-slate-900 uppercase">{state.finishLevel}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-10">
                   {[
                     { label: 'Design Cost', value: result.breakup.design },
                     { label: 'Materials', value: result.breakup.material },
                     { label: 'Execution', value: result.breakup.execution },
                   ].map(item => (
                     <div key={item.label} className="text-center p-4 border border-slate-100 rounded-2xl">
                        <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-1 block">{item.label}</span>
                        <span className="text-sm font-bold text-slate-800">{formatPrice(item.value)}</span>
                     </div>
                   ))}
                </div>

                <div className="mt-auto space-y-4">
                  <div className="bg-slate-50 p-6 rounded-2xl text-slate-500 text-sm flex items-start gap-4 italic font-light">
                    {/* Add missing icon import fix */}
                    <Info size={20} className="text-indigo-600 shrink-0" />
                    Our estimate is based on real-time material costs in Gurgaon market. This acts as a reliable baseline for your planning.
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <button className="flex-1 bg-indigo-600 text-white py-5 rounded-[1.5rem] font-black text-lg hover:shadow-2xl transition-all">Get Detailed Quotation</button>
                    <button className="flex-1 bg-white border-2 border-slate-100 text-slate-900 py-5 rounded-[1.5rem] font-black text-lg hover:bg-slate-50 transition-all">Book Free Site Visit</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EstimateCalculator;
