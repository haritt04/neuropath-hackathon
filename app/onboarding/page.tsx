"use client"

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronRight, 
  ChevronLeft, 
  Check, 
  Target, 
  MapPin, 
  Brain, 
  CloudUpload, 
  Link as LinkIcon,
  Sparkles,
  Rocket
} from 'lucide-react';
import Link from 'next/link';

export default function StudentOnboarding() {
  const [step, setStep] = useState(1);
  const [isCalculating, setIsCalculating] = useState(false);
  const totalSteps = 5;

  // Data States
  const [formData, setFormData] = useState({
    country: 'Malaysia',
    workLocation: 'On-site',
    isRemote: true,
    interests: [] as string[],
    skills: {
      'Python/Coding': 50,
      'System Design': 50,
      'Data Structures': 50
    },
    portfolio: '',
    cvStatus: 'pending'
  });

  const nextStep = () => {
    if (step === 4) {
      setIsCalculating(true);
      setStep(5);
      // Simulate "AI Calculation"
      setTimeout(() => setIsCalculating(false), 3000);
    } else {
      setStep(s => Math.min(s + 1, totalSteps));
    }
  };

  const prevStep = () => setStep(s => Math.max(s - 1, 1));

  const toggleInterest = (interest: string) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-[#020617] flex flex-col justify-center py-12 px-6">
      <div className="max-w-3xl w-full mx-auto">
        
        {/* Progress Stepper */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-4">
            <div>
              <h4 className="text-primary font-bold text-sm tracking-widest uppercase">Onboarding</h4>
              <p className="text-slate-400 text-xs text-left">Step {step} of {totalSteps}</p>
            </div>
            <div className="text-right">
              <span className="text-2xl font-black text-slate-800 dark:text-white">
                {Math.round((step / totalSteps) * 100)}%
              </span>
            </div>
          </div>
          <div className="h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-gradient-to-r from-primary via-secondary to-accent"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        {/* Wizard Container */}
        <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden min-h-[550px] flex flex-col transition-all">
          
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Preference */}
            {step === 1 && (
              <motion.div 
                key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-left">
                  <h2 className="text-3xl font-bold flex items-center gap-3"><MapPin className="text-primary" /> Location Preference</h2>
                  <p className="text-slate-500 mt-2">Where do you want to start your professional journey?</p>
                </div>

                <div className="space-y-6 text-left">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 uppercase">Target Country</label>
                    <select 
                      className="w-full p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary/50 font-semibold"
                      value={formData.country}
                      onChange={(e) => setFormData({...formData, country: e.target.value})}
                    >
                      <option>Malaysia</option>
                      <option>Singapore</option>
                      <option>Germany</option>
                      <option>UAE</option>
                      <option>Thailand</option>
                    </select>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {['On-site', 'Hybrid'].map(type => (
                      <button 
                        key={type}
                        onClick={() => setFormData({...formData, workLocation: type})}
                        className={`p-5 rounded-2xl border-2 transition-all text-left ${formData.workLocation === type ? 'border-primary bg-primary/5' : 'border-transparent bg-slate-100 dark:bg-slate-800'}`}
                      >
                        <span className="block font-bold">{type}</span>
                        <span className="text-[10px] text-slate-400 uppercase">Traditional Office</span>
                      </button>
                    ))}
                  </div>

                  <label className="flex items-center gap-3 p-4 rounded-2xl bg-slate-100 dark:bg-slate-800 cursor-pointer">
                    <input 
                      type="checkbox" 
                      className="w-5 h-5 rounded border-slate-300 text-primary focus:ring-primary"
                      checked={formData.isRemote}
                      onChange={(e) => setFormData({...formData, isRemote: e.target.checked})}
                    />
                    <span className="font-bold">Open to Remote Opportunities</span>
                  </label>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Interests */}
            {step === 2 && (
              <motion.div 
                key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-left">
                  <h2 className="text-3xl font-bold flex items-center gap-3"><Target className="text-secondary" /> Career Interests</h2>
                  <p className="text-slate-500 mt-2">Select the tracks you want to be observable in.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-left">
                  {[
                    'Backend Engineering', 'AI/ML', 'Cloud Computing', 
                    'DevOps', 'Cybersecurity', 'Data Engineering', 'Product Management'
                  ].map((track) => (
                    <button
                      key={track}
                      onClick={() => toggleInterest(track)}
                      className={`p-4 rounded-xl border-2 transition-all flex items-center justify-between font-bold ${
                        formData.interests.includes(track) 
                        ? 'border-secondary bg-secondary/5 text-secondary' 
                        : 'border-transparent bg-slate-100 dark:bg-slate-800 text-slate-500'
                      }`}
                    >
                      {track}
                      {formData.interests.includes(track) && <Check className="w-4 h-4" />}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 3: Skills */}
            {step === 3 && (
              <motion.div 
                key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-left">
                  <h2 className="text-3xl font-bold flex items-center gap-3"><Brain className="text-accent" /> Skill Assessment</h2>
                  <p className="text-slate-500 mt-2">Self-rate your proficiency in core competencies.</p>
                </div>

                <div className="space-y-10 py-6 text-left">
                  {Object.entries(formData.skills).map(([skill, value]) => (
                    <div key={skill} className="space-y-3">
                      <div className="flex justify-between items-center px-1">
                        <span className="font-bold tracking-tight">{skill}</span>
                        <span className="text-xs font-black bg-accent/10 text-accent px-2 py-1 rounded">
                          {value < 30 ? 'Novice' : value < 70 ? 'Intermediate' : 'Expert'} ({value}%)
                        </span>
                      </div>
                      <input 
                        type="range" 
                        className="w-full h-2 bg-slate-100 dark:bg-slate-800 rounded-full appearance-none accent-accent cursor-pointer"
                        value={value}
                        onChange={(e) => setFormData({
                          ...formData, 
                          skills: {...formData.skills, [skill]: parseInt(e.target.value)}
                        })}
                      />
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* STEP 4: Assets */}
            {step === 4 && (
              <motion.div 
                key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}
                className="space-y-8"
              >
                <div className="text-left">
                  <h2 className="text-3xl font-bold flex items-center gap-3"><CloudUpload className="text-primary" /> Assets & Presence</h2>
                  <p className="text-slate-500 mt-2">Upload your resume and links for AI analysis.</p>
                </div>

                <div className="space-y-6 text-left">
                  <div className="p-10 border-2 border-dashed border-slate-200 dark:border-slate-800 rounded-3xl flex flex-col items-center justify-center gap-4 hover:border-primary/50 transition-all cursor-pointer group">
                    <CloudUpload className="w-12 h-12 text-slate-300 group-hover:text-primary transition-colors" />
                    <div className="text-center">
                      <p className="font-bold">Upload CV (PDF)</p>
                      <p className="text-xs text-slate-400">Max size 5MB</p>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400 flex items-center gap-2 uppercase tracking-wide"><LinkIcon className="w-4 h-4"/> Portfolio / GitHub URL</label>
                    <input 
                      type="url" 
                      placeholder="https://github.com/yourprofile"
                      className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary/50"
                      value={formData.portfolio}
                      onChange={(e) => setFormData({...formData, portfolio: e.target.value})}
                    />
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 5: Final Score / Loading */}
            {step === 5 && (
              <motion.div 
                key="step5" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center flex-1 space-y-8 text-center"
              >
                {isCalculating ? (
                  <div className="space-y-6 py-12">
                    <div className="relative w-32 h-32 mx-auto">
                      <motion.div 
                         className="absolute inset-0 border-4 border-primary/20 rounded-full"
                      />
                      <motion.div 
                         className="absolute inset-0 border-4 border-t-primary rounded-full"
                         animate={{ rotate: 360 }}
                         transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                         <Sparkles className="w-8 h-8 text-primary animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h2 className="text-3xl font-black gradient-text">Analyzing Telemetry...</h2>
                      <p className="text-slate-500 mt-2">Our AI is mapping your profile to global market demands.</p>
                    </div>
                  </div>
                ) : (
                  <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="py-6">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Rocket className="text-accent w-10 h-10" />
                    </div>
                    <h2 className="text-3xl font-black mb-2">MAS Generated!</h2>
                    <p className="text-slate-500 mb-10 max-w-md mx-auto">Congratulations! Based on your current telemetry, your Market Alignment Score is higher than 65% of your peers.</p>

                    <div className="inline-block relative mb-12">
                      <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-full" />
                      <div className="relative glass border-accent/20 p-8 rounded-[2rem] min-w-[280px]">
                        <span className="text-xs font-black text-slate-400 uppercase tracking-widest">Your Live MAS Score</span>
                        <div className="text-7xl font-black text-accent mt-2">82<span className="text-2xl text-slate-400">%</span></div>
                        <div className="mt-4 flex items-center justify-center gap-1 text-xs text-primary font-bold">
                          Primary Match: Cloud Architecture
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center gap-4">
                      <Link href="/dashboard/student" className="px-12 py-4 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/30 hover:scale-105 transition-transform">
                        Launch Dashboard
                      </Link>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            )}

          </AnimatePresence>

          {/* Navigation Controls */}
          {step < 5 && (
            <div className="mt-auto flex justify-between items-center pt-8 border-t border-slate-100 dark:border-slate-800">
              <button 
                onClick={prevStep} 
                disabled={step === 1}
                className={`flex items-center gap-2 font-bold transition-opacity ${step === 1 ? 'opacity-0 pointer-events-none' : 'text-slate-400 hover:text-slate-800'}`}
              >
                <ChevronLeft className="w-5 h-5" /> Back
              </button>

              <button 
                onClick={nextStep}
                className="flex items-center gap-2 px-10 py-4 bg-primary text-white rounded-2xl font-bold hover:scale-105 transition-transform shadow-lg shadow-primary/20"
              >
                {step === 4 ? 'Generate Score' : 'Continue'} <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}