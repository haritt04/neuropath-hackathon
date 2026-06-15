
"use client"
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, ChevronLeft, Github, Linkedin, 
  CloudUpload, Rocket, Loader2, Target, CheckCircle2 
} from 'lucide-react';
import { Button } from '@/components/Button';

export default function StudentOnboarding() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [country, setCountry] = useState('Malaysia');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisComplete, setAnalysisComplete] = useState(false);
  const [masScore, setMasScore] = useState(0);
  const totalSteps = 4;

  const handleFinish = () => {
    setIsAnalyzing(true);
    // Simulate AI Analysis of CV/Github
    setTimeout(() => {
      const baseScores: Record<string, number> = { 'Malaysia': 82, 'Singapore': 74, 'Germany': 61, 'UAE': 78 };
      setMasScore(baseScores[country] || 80);
      setIsAnalyzing(false);
      setAnalysisComplete(true);
      
      // Auto redirect after showing score
      setTimeout(() => {
        router.push('/dashboard/student');
      }, 3500);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center py-24 px-6 font-sans">
      <div className="max-w-4xl w-full mx-auto">
        <div className="mb-24 flex justify-between items-end border-b-2 border-accent pb-8">
           <div>
              <h1 className="text-8xl font-black uppercase tracking-tighter leading-none">{step.toString().padStart(2, '0')}</h1>
              <p className="font-mono text-[10px] uppercase font-black tracking-[0.4em] text-accent mt-4">
                {step === 4 ? 'SYSTEM ANALYSIS' : `Initialization / Segment ${step}`}
              </p>
           </div>
           <div className="text-right">
              <span className="font-mono text-4xl font-black opacity-20">
                {analysisComplete ? '100%' : Math.round((step / totalSteps) * 100)}%
              </span>
           </div>
        </div>

        <AnimatePresence mode="wait">
           {step === 1 && (
             <motion.div key="1" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-16">
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] max-w-xl">Market Categorization.</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border border border-border">
                   {['Malaysia', 'Singapore', 'Germany', 'UAE'].map(loc => (
                     <button 
                        key={loc} 
                        onClick={() => setCountry(loc)}
                        className={`p-10 text-left transition-colors group ${country === loc ? 'bg-accent text-white' : 'bg-background hover:bg-muted'}`}
                     >
                        <span className="font-mono text-[10px] font-black uppercase tracking-widest mb-4 block opacity-50">Market Hub</span>
                        <span className="text-3xl font-black uppercase">{loc}</span>
                     </button>
                   ))}
                </div>
             </motion.div>
           )}

           {step === 2 && (
             <motion.div key="2" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-16">
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] max-w-xl">Asset Alignment.</h2>
                <div className="space-y-8">
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground flex items-center gap-2 font-mono">
                        <Github size={14}/> Github Repository Link
                      </label>
                      <input type="url" placeholder="GITHUB.COM/USERNAME" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm uppercase" />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground flex items-center gap-2 font-mono">
                        <Linkedin size={14}/> LinkedIn Access URL
                      </label>
                      <input type="url" placeholder="LINKEDIN.COM/IN/IDENTITY" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm uppercase" />
                   </div>
                </div>
             </motion.div>
           )}

           {step === 3 && (
             <motion.div key="3" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0, x:-20}} className="space-y-12">
                <h2 className="text-5xl font-black uppercase tracking-tighter leading-[0.9] max-w-xl">Telemetry Upload.</h2>
                <div className="p-16 border-2 border-dashed border-border flex flex-col items-center justify-center gap-6 group hover:border-accent transition-colors cursor-pointer bg-muted/10">
                   <CloudUpload size={48} className="text-mutedForeground group-hover:text-accent transition-colors" />
                   <div className="text-center">
                      <p className="font-black uppercase tracking-widest text-sm">Upload CV / Portfolio (PDF)</p>
                      <p className="font-mono text-[10px] text-mutedForeground mt-2 tracking-widest">Maximum file size: 10MB</p>
                   </div>
                </div>
             </motion.div>
           )}

           {step === 4 && (
             <motion.div key="4" initial={{opacity:0}} animate={{opacity:1}} className="text-center py-10">
                {!isAnalyzing && !analysisComplete ? (
                    <div className="space-y-12">
                        <h2 className="text-5xl font-black uppercase tracking-tighter leading-tight">Ready for System Analysis?</h2>
                        <p className="font-mono text-sm uppercase tracking-widest text-mutedForeground">Selected Market: {country}</p>
                        <Button onClick={handleFinish} variant="secondary" className="px-16 py-6 text-lg">Initiate AI Triage</Button>
                    </div>
                ) : isAnalyzing ? (
                    <div className="space-y-12 flex flex-col items-center">
                        <Loader2 size={80} className="text-accent animate-spin" strokeWidth={1} />
                        <div className="space-y-4">
                            <h2 className="text-5xl font-black uppercase tracking-tighter">Analyzing Assets...</h2>
                            <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-accent animate-pulse">Scanning Code Repos / Parsing Career Telemetry</p>
                        </div>
                    </div>
                ) : (
                    <motion.div initial={{scale:0.95, opacity:0}} animate={{scale:1, opacity:1}} className="space-y-12">
                        <div className="inline-flex items-center gap-4 text-accent border border-accent px-6 py-2 mb-8">
                            <CheckCircle2 size={16} />
                            <span className="font-mono text-[10px] font-black uppercase tracking-widest">Triage Complete</span>
                        </div>
                        
                        <div className="flex flex-col items-center">
                            <h2 className="text-xs font-mono font-black uppercase tracking-[0.3em] text-mutedForeground mb-4">Calculated Market Alignment Score</h2>
                            <div className="text-[12rem] font-black tracking-tighter leading-none text-accent">
                               {masScore}<span className="text-4xl text-foreground">%</span>
                            </div>
                        </div>

                        <div className="max-w-md mx-auto grid grid-cols-2 gap-4">
                            <div className="p-4 border border-border text-left">
                                <p className="font-mono text-[8px] uppercase font-black text-mutedForeground mb-1">Hub Focus</p>
                                <p className="font-black uppercase text-sm">{country}</p>
                            </div>
                            <div className="p-4 border border-border text-left">
                                <p className="font-mono text-[8px] uppercase font-black text-mutedForeground mb-1">Primary Skill</p>
                                <p className="font-black uppercase text-sm">Fullstack Architecture</p>
                            </div>
                        </div>

                        <p className="font-mono text-[10px] uppercase tracking-widest text-mutedForeground pt-8 animate-pulse">Redirecting to Terminal Command Center...</p>
                    </motion.div>
                )}
             </motion.div>
           )}
        </AnimatePresence>

        {step < 4 && (
          <div className="mt-24 flex justify-between items-center">
             <Button onClick={() => setStep(s => Math.max(1, s - 1))} variant="primary" className={step === 1 ? 'opacity-0' : ''}>
                <ChevronLeft size={16}/> Previous
             </Button>
             <Button onClick={() => setStep(s => s + 1)} variant="secondary">
                Continue Section <ChevronRight size={16}/>
             </Button>
          </div>
        )}
      </div>
    </div>
  );
}
