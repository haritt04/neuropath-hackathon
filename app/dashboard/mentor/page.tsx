"use client"
import React, { useState } from 'react';
import MarketTicker from "../../../components/MarketTicker";
import { 
  BarChart3, Inbox, CalendarPlus, User, 
  Check, X, Calendar, Clock, MapPin, 
  Settings, MessageSquare, Send, Eye, FileText, Github, ExternalLink, GraduationCap, Laptop
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Management', icon: BarChart3 },
    { id: 'inbox', label: 'Student Inbox', icon: Inbox },
    { id: 'events', label: 'Create Event', icon: CalendarPlus },
    { id: 'settings', label: 'Profile Settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100">
      {/* Side Navigation */}
      <aside className="w-20 md:w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
        <div className="mb-8 px-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-secondary rounded-lg flex items-center justify-center text-white font-bold">N</div>
          <span className="hidden md:block font-bold text-lg tracking-tighter">NeuroPath</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                activeTab === tab.id 
                ? 'bg-secondary text-white shadow-lg shadow-secondary/20' 
                : 'text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800'
              }`}
            >
              <tab.icon size={20} />
              <span className="hidden md:block font-bold text-sm tracking-tight">{tab.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 overflow-y-auto">
        <MarketTicker mode="mentor" />
        <div className="p-6 md:p-10 text-left">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div key="overview" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>
                <h1 className="text-3xl font-black mb-10">Mentor Command Center</h1>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
                  <StatCard label="Active Mentees" value="12" color="text-secondary" />
                  <StatCard label="Sessions Help" value="48" color="text-primary" />
                  <StatCard label="Event Reach" value="1.2k" color="text-accent" />
                  <StatCard label="Avg. MAS Bridge" value="+15%" color="text-orange-500" />
                </div>

                <div className="glass p-8 rounded-[2.5rem]">
                  <h3 className="font-black mb-6">AI Priority Triage</h3>
                  <p className="text-sm text-slate-500 mb-6 font-medium">Our bot is currently filtering requests based on your <b>80% MAS threshold</b>.</p>
                  <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1 p-6 rounded-2xl bg-secondary/5 border border-secondary/20">
                      <span className="text-xs font-black text-secondary uppercase tracking-[0.2em]">High Impact</span>
                      <p className="text-sm mt-1 font-bold">5 students with 90%+ MAS waiting for review.</p>
                    </div>
                    <div className="flex-1 p-6 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-transparent">
                      <span className="text-xs font-black text-slate-400 uppercase tracking-[0.2em]">Bot Active</span>
                      <p className="text-sm mt-1 font-bold italic text-slate-400">12 low-alignment requests diverted to Bridge-the-Gap bot.</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'inbox' && (
              <motion.div key="inbox" initial={{opacity:0, x:20}} animate={{opacity:1, x:0}} exit={{opacity:0}}>
                <h1 className="text-3xl font-black mb-8">Mentorship Inbox</h1>
                <div className="space-y-6">
                  <StudentRequest 
                    name="Siti Aminah" university="University of Malaya" 
                    mas="92%" topic="Transitioning to MLOps"
                    description="I've been working on backend systems for 2 years and want to move into production-grade ML infrastructure. Seeking guidance on tooling and architectural best practices."
                    github="github.com/sitiaminah"
                    skills={['Docker', 'Kubernetes', 'Python', 'PyTorch']}
                  />
                  <StudentRequest 
                    name="Li Wei" university="NUS Singapore" 
                    mas="88%" topic="Cloud Architecture Internship" 
                    description="Final year CS student interested in multi-cloud strategies and serverless patterns. Looking for career roadmap advice in the ASEAN market."
                    github="github.com/liwei-dev"
                    skills={['AWS', 'Terraform', 'Node.js', 'Go']}
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'events' && (
              <motion.div key="events" initial={{opacity:0, scale:0.95}} animate={{opacity:1, scale:1}} exit={{opacity:0}}>
                <h1 className="text-3xl font-black mb-8">Publish New Event</h1>
                <div className="glass p-10 rounded-[2.5rem] max-w-3xl">
                  <form className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-1 col-span-2">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Event Title</label>
                        <input className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border-none font-bold" placeholder="Masterclass: Building for Asia" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Date</label>
                        <input type="date" className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border-none font-bold" />
                      </div>
                      <div className="space-y-1">
                        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Location</label>
                        <input className="w-full p-4 rounded-xl bg-slate-100 dark:bg-slate-800 border-none font-bold" placeholder="Zoom or HQ" />
                      </div>
                    </div>
                    <button type="button" className="w-full py-4 bg-secondary text-white rounded-2xl font-black flex items-center justify-center gap-2 hover:opacity-90 transition-all text-sm uppercase italic">
                      <Send size={18} /> Publish to NeuroPath Network
                    </button>
                  </form>
                </div>
              </motion.div>
            )}

            {activeTab === 'settings' && (
              <motion.div key="settings" initial={{opacity:0}} animate={{opacity:1}}>
                <h1 className="text-3xl font-black mb-8">Dashboard Settings</h1>
                <div className="glass p-10 rounded-[2.5rem] max-w-2xl">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center p-4 rounded-2xl bg-secondary/10 border border-secondary/20">
                      <span className="font-bold tracking-tight">Auto-Triage Mode</span>
                      <div className="w-12 h-6 bg-secondary rounded-full p-1 relative cursor-pointer">
                        <div className="w-4 h-4 bg-white rounded-full ml-auto shadow-sm"></div>
                      </div>
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-black text-slate-400 uppercase tracking-widest">LinkedIn Verification</label>
                      <div className="p-4 bg-green-500/5 text-green-500 border border-green-500/20 rounded-xl font-bold flex items-center gap-2 text-sm italic">
                        <Check size={16}/> Verified Professional Account
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}

function StatCard({ label, value, color }: any) {
  return (
    <div className="glass p-6 rounded-3xl text-center flex flex-col justify-center border-none">
      <h4 className="text-[10px] font-black uppercase text-slate-400 tracking-widest mb-1 font-mono">{label}</h4>
      <p className={`text-4xl font-black ${color} tracking-tighter`}>{value}</p>
    </div>
  );
}

function StudentRequest({ name, university, mas, topic, description, github, skills }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={`glass rounded-[2rem] transition-all duration-500 overflow-hidden border-2 ${expanded ? 'border-secondary/30' : 'border-transparent'}`}>
      <div className="p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-slate-50/50 dark:hover:bg-slate-800/10 transition-all text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 bg-secondary/10 rounded-2xl flex items-center justify-center text-2xl font-bold text-secondary">
            {name[0]}
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <h3 className="font-black text-xl tracking-tight">{name}</h3>
              <span className="px-2 py-0.5 bg-accent text-white text-[8px] font-black rounded uppercase tracking-widest">{mas} MAS</span>
            </div>
            <p className="text-sm font-medium text-slate-500">{university} • <span className="italic opacity-80">{topic}</span></p>
          </div>
        </div>
        <div className="flex gap-3">
          <button 
            onClick={() => setExpanded(!expanded)}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-black uppercase transition-all ${expanded ? 'bg-secondary text-white' : 'bg-slate-100 dark:bg-slate-800'}`}
          >
            <Eye size={16}/> {expanded ? 'Close Profile' : 'View Profile'}
          </button>
          <button className="p-3 rounded-xl bg-green-500/10 text-green-500 hover:bg-green-500 hover:text-white transition-all border border-green-500/20"><Check size={20}/></button>
          <button className="p-3 rounded-xl bg-red-500/10 text-red-500 hover:bg-red-500 hover:text-white transition-all border border-red-500/20"><X size={20}/></button>
        </div>
      </div>

      <AnimatePresence>
        {expanded && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-900/10"
          >
            <div className="p-8 grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div>
                  <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                    <User size={12}/> Student Overview
                  </h4>
                  <p className="text-sm font-medium leading-relaxed text-slate-600 dark:text-slate-400 italic">
                    "{description}"
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill: string) => (
                    <span key={skill} className="px-3 py-1 bg-secondary/5 text-secondary text-[10px] font-black rounded-lg border border-secondary/10">
                      #{skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-2 flex items-center gap-2">
                  <Laptop size={12}/> Portfolio & Assets
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  <a href="#" className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-secondary transition-all group">
                    <div className="flex items-center gap-3">
                      <FileText className="text-primary" size={20}/>
                      <div>
                        <p className="text-xs font-black">Official Resume.pdf</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Verified Assets</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <a href={`https://${github}`} target="_blank" className="flex items-center justify-between p-4 rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 hover:border-secondary transition-all group">
                    <div className="flex items-center gap-3">
                      <Github className="text-slate-900 dark:text-white" size={20}/>
                      <div>
                        <p className="text-xs font-black">{github}</p>
                        <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Code Telemetry</p>
                      </div>
                    </div>
                    <ExternalLink size={14} className="opacity-30 group-hover:opacity-100 transition-opacity" />
                  </a>

                  <div className="p-4 rounded-2xl bg-slate-100 dark:bg-slate-800/50 border border-transparent flex items-center gap-3">
                    <GraduationCap className="text-accent" size={20}/>
                    <div>
                      <p className="text-xs font-black font-mono">GPA: 3.85 / 4.00</p>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest italic">Academic Telemetry</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="p-6 bg-slate-100/50 dark:bg-slate-800/50 flex justify-end gap-4">
               <button className="text-[10px] font-black uppercase text-slate-400 hover:text-slate-900 dark:hover:text-white transition-all">Schedule Interview</button>
               <button className="text-[10px] font-black uppercase text-secondary flex items-center gap-1 hover:underline">
                 Open Full Workspace <ExternalLink size={12}/>
               </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}