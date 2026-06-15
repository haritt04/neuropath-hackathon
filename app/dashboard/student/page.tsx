
"use client"
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Users, Calendar, User, Sparkles, 
  Bell, MapPin, Search, ChevronRight, ArrowUpRight, 
  ExternalLink, BrainCircuit, Globe, Filter, RefreshCw
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/Button';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('events');
  const [selectedCountry, setSelectedCountry] = useState('Malaysia');
  const [masScore, setMasScore] = useState(82);
  const [viewDetail, setViewDetail] = useState(null); // Used for event or alumni detail view

  const tabs = [
    { id: 'events', label: 'Events Feed', icon: Calendar },
    { id: 'overview', label: 'Market Overview', icon: BarChart3 },
    { id: 'sessions', label: 'Alumni Network', icon: Users },
    { id: 'skills', label: 'Skills Map', icon: Sparkles },
    { id: 'profile', label: 'Identity', icon: User },
  ];

  // Logic to simulate MAS change based on country
  useEffect(() => {
    const scores: Record<string, number> = { 'Malaysia': 82, 'Singapore': 74, 'Germany': 61, 'UAE': 78 };
    setMasScore(scores[selectedCountry] || 82);
  }, [selectedCountry]);

  const closeDetail = () => setViewDetail(null);

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Side Navigation */}
      <aside className="w-20 md:w-64 border-r border-border flex flex-col p-6 sticky top-0 h-screen">
        <div className="mb-16 flex items-center gap-3">
          <div className="w-8 h-8 bg-accent flex items-center justify-center text-white font-bold">N</div>
          <span className="hidden md:block font-black uppercase text-xl tracking-tighter">NeuroPath</span>
        </div>
        
        <nav className="flex-1 space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => { setActiveTab(tab.id); closeDetail(); }}
              className={`w-full flex items-center gap-4 py-3 px-2 transition-all ${
                activeTab === tab.id 
                ? 'text-accent border-l-2 border-accent' 
                : 'text-mutedForeground hover:text-foreground opacity-50 hover:opacity-100'
              }`}
            >
              <tab.icon size={20} strokeWidth={1.5} />
              <span className="hidden md:block font-black uppercase text-[10px] tracking-widest">{tab.label}</span>
            </button>
          ))}
        </nav>
      </aside>

      {/* Content Area */}
      <main className="flex-1 flex flex-col">
        {/* Header */}
        <header className="border-b border-border p-6 flex justify-between items-center bg-background sticky top-0 z-10">
           <div className="flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40">Section / {activeTab}</span>
           </div>
           
           <div className="flex items-center gap-6">
              <button className="relative group">
                 <Bell size={20} className="text-mutedForeground group-hover:text-accent transition-colors" />
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent" />
              </button>
              <span className="font-mono text-[10px] uppercase font-bold tracking-tighter">ALEX TAN</span>
           </div>
        </header>

        <div className="p-8 md:p-16 flex-1">
          <AnimatePresence mode="wait">
            
            {/* EVENTS FEED (Reddit Style) */}
            {activeTab === 'events' && !viewDetail && (
              <motion.div key="events" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="max-w-4xl">
                <div className="mb-16">
                  <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">Network Feed.</h1>
                  <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Global Hub Announcements & Job Telemetry</p>
                </div>

                <div className="space-y-6">
                   <EventPost 
                      author="Dato' Ismail" 
                      title="Tech Talent Summit: Mapping Asian Hubs in 2026" 
                      date="2h ago" 
                      comments={12} 
                      tag="Live Event"
                      onClick={() => setViewDetail({ type: 'event', id: 1, title: 'Tech Talent Summit 2026' })}
                    />
                   <EventPost 
                      author="Sarah Tan" 
                      title="Skill Drift Alert: Cloud Engineering in SG now requires Rust proficiency" 
                      date="5h ago" 
                      comments={48} 
                      tag="Critical"
                      onClick={() => setViewDetail({ type: 'event', id: 2, title: 'Skill Drift Update' })}
                    />
                   <EventPost 
                      author="Grab Engineering" 
                      title="Opening: 12 Backend Positions for NeuroPath Verified MAS (90%+)" 
                      date="1d ago" 
                      comments={106} 
                      tag="Opportunity"
                      onClick={() => setViewDetail({ type: 'event', id: 3, title: 'Grab Hiring Event' })}
                    />
                </div>
              </motion.div>
            )}

            {/* EVENT DETAIL VIEW */}
            {viewDetail?.type === 'event' && (
              <motion.div key="event-detail" initial={{opacity:0}} animate={{opacity:1}} className="max-w-3xl">
                <button onClick={closeDetail} className="font-mono text-[10px] uppercase font-black text-accent mb-12 flex items-center gap-2">
                   ← Return to feed
                </button>
                <div className="mb-12 border-b-2 border-accent pb-8">
                   <span className="font-mono text-[10px] font-black uppercase text-mutedForeground tracking-widest block mb-4">Event Details</span>
                   <h2 className="text-6xl font-black uppercase tracking-tighter leading-none">{viewDetail.title}</h2>
                </div>
                <div className="space-y-8 mb-16">
                   <p className="text-2xl font-medium leading-snug">
                     This event is part of the Talentbank Career OS Hackathon 2026, aimed at redefining how professionals in Asia are observed and managed within the global economy. 
                   </p>
                   <ul className="space-y-2 font-mono text-xs uppercase tracking-widest">
                      <li>Location: Kuala Lumpur Convention Centre</li>
                      <li>Capacity: 200 Verified MAS Participants</li>
                      <li>Timezone: GMT+8</li>
                   </ul>
                </div>
                <div className="p-12 bg-muted/30 border border-border">
                   <h4 className="text-xl font-bold uppercase mb-8">Registration Form</h4>
                   <form className="space-y-6" onSubmit={(e)=>e.preventDefault()}>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase font-mono">Current MAS: {masScore}%</label>
                         <input type="text" readOnly value="ALEX TAN / #NP-10293" className="w-full bg-background/50 border border-border p-4 text-xs font-mono" />
                      </div>
                      <Button variant="secondary" className="w-full justify-center">Submit Participation Request</Button>
                   </form>
                </div>
              </motion.div>
            )}

            {/* MARKET OVERVIEW (MAS SCORE) */}
            {activeTab === 'overview' && (
              <motion.div key="overview" initial={{opacity:0}} animate={{opacity:1}}>
                <div className="mb-20 flex justify-between items-end">
                   <div>
                     <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">Market Radar.</h1>
                     <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Profiling Alignment Score [MAS]</p>
                   </div>
                   <div className="flex gap-4 items-center">
                      <Filter size={14} className="text-mutedForeground" />
                      <select 
                        value={selectedCountry}
                        onChange={(e) => setSelectedCountry(e.target.value)}
                        className="bg-transparent border-b border-border font-mono text-xs font-black uppercase outline-none py-2"
                      >
                         <option>Malaysia</option>
                         <option>Singapore</option>
                         <option>Germany</option>
                         <option>UAE</option>
                      </select>
                   </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                  <div className="lg:col-span-6 border-t-4 border-accent p-12 bg-muted/20 relative overflow-hidden group">
                    <h3 className="font-mono text-[10px] font-black uppercase text-mutedForeground tracking-widest mb-12">Live Alignment in {selectedCountry}</h3>
                    <div className="text-[12rem] font-black tracking-tighter leading-none text-accent">
                       {masScore}<span className="text-4xl text-foreground">%</span>
                    </div>
                    <div className="mt-12 flex gap-4">
                       <span className="px-4 py-2 border border-border text-[10px] font-black uppercase tracking-widest">Profile Status: Observable</span>
                    </div>
                  </div>

                  <div className="lg:col-span-6 space-y-12">
                    <div className="border-b border-border pb-8">
                       <h4 className="text-2xl font-bold uppercase mb-4 tracking-tighter">Skill Telemetry</h4>
                       <p className="text-sm text-mutedForeground">Market specific benchmarks for {selectedCountry}</p>
                    </div>
                    <SkillBlock label="Cloud Infrastructure" score={masScore - 5} color="bg-accent" />
                    <SkillBlock label="Backend Security" score={95} color="bg-foreground" />
                    <SkillBlock label="Regional Cultural Context" score={masScore + 10} color="bg-mutedForeground" />
                  </div>
                </div>
              </motion.div>
            )}

            {/* ALUMNI SESSIONS */}
            {activeTab === 'sessions' && !viewDetail && (
              <motion.div key="sessions" initial={{opacity:0}} animate={{opacity:1}} >
                 <div className="mb-20">
                   <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">The Network.</h1>
                   <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Connect with Industry verified professionals</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-border border border-border">
                   <AlumniCard name="Sarah Tan" company="Grab SG" role="Principal Engineer" onClick={() => setViewDetail({ type: 'alumni', title: 'Sarah Tan' })} />
                   <AlumniCard name="Amirul Hafez" company="Petronas" role="Data Lead" onClick={() => setViewDetail({ type: 'alumni', title: 'Amirul Hafez' })} />
                   <AlumniCard name="Dato' Ismail" company="Tech Hub" role="Director" onClick={() => setViewDetail({ type: 'alumni', title: "Dato' Ismail" })} />
                </div>
              </motion.div>
            )}

            {/* ALUMNI DETAIL + REQUEST FORM */}
            {viewDetail?.type === 'alumni' && (
              <motion.div key="alumni-detail" initial={{opacity:0}} animate={{opacity:1}} className="max-w-3xl">
                <button onClick={closeDetail} className="font-mono text-[10px] uppercase font-black text-accent mb-12 flex items-center gap-2">
                   ← All Professionals
                </button>
                <div className="flex gap-8 items-start mb-16">
                   <div className="w-24 h-24 bg-accent flex items-center justify-center text-4xl">👤</div>
                   <div>
                      <h2 className="text-6xl font-black uppercase tracking-tighter leading-none mb-2">{viewDetail.title}</h2>
                      <p className="font-mono text-[10px] uppercase font-black text-accent tracking-[0.3em]">Verified Senior Mentor</p>
                   </div>
                </div>
                <div className="p-12 border border-border bg-muted/10">
                   <h4 className="text-xl font-bold uppercase mb-8">Request Connection</h4>
                   <form className="space-y-6">
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase font-mono">Objective</label>
                         <select className="w-full bg-background border border-border p-4 text-xs font-mono uppercase">
                            <option>Career Navigation</option>
                            <option>Technical Alignment</option>
                            <option>Role Referral</option>
                         </select>
                      </div>
                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase font-mono">Message Context</label>
                         <textarea placeholder="DESCRIBE YOUR GOAL..." className="w-full bg-background border border-border p-4 text-xs font-mono h-32 uppercase"></textarea>
                      </div>
                      <Button variant="secondary" className="w-full justify-center">Submit Mentor Request</Button>
                   </form>
                </div>
              </motion.div>
            )}

            {/* SKILLS MAP (formerly Bridge Gap) */}
            {activeTab === 'skills' && (
              <motion.div key="skills" initial={{opacity:0}} animate={{opacity:1}}>
                <div className="mb-20">
                   <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">Skills Map.</h1>
                   <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">AI Assisted Proficiency Benchmark for {selectedCountry}</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                   <div className="space-y-8">
                       <h3 className="text-xs font-mono font-black uppercase border-b-2 border-accent pb-2 inline-block">Regional Deficits</h3>
                       <div className="p-8 bg-accent/5 border border-accent/20">
                          <p className="text-xl font-medium leading-snug">
                             In <span className="font-bold underline">{selectedCountry}</span>, employers are currently shifting away from monolithic architectures. Your telemetry shows a <span className="text-accent font-black">12% gap</span> in Distributed Systems.
                          </p>
                       </div>
                       <div className="space-y-4">
                          <SuggestionItem title="Rust Programming for Cloud" provider="Hub Learning" />
                          <SuggestionItem title="Kubernetes Core Patterns" provider="Professional Guild" />
                       </div>
                   </div>
                   <div className="bg-muted/10 border border-border p-12 flex items-center justify-center">
                       <div className="text-center font-mono opacity-20">
                          <BrainCircuit size={150} strokeWidth={0.5} />
                          <p className="mt-8 uppercase tracking-[0.5em] text-[10px]">Processing Telemetry</p>
                       </div>
                   </div>
                </div>
              </motion.div>
            )}

            {/* PROFILE SETTINGS */}
            {activeTab === 'profile' && (
              <motion.div key="profile" initial={{opacity:0}} animate={{opacity:1}}>
                <div className="mb-20">
                   <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">Identity.</h1>
                   <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Account Configuration & Profile Assets</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                   <div className="lg:col-span-7 space-y-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <label className="font-mono text-[10px] font-black uppercase text-mutedForeground">Display Name</label>
                            <input className="w-full bg-muted border border-border p-4 text-xs font-mono focus:border-accent outline-none" defaultValue="ALEX TAN" />
                         </div>
                         <div className="space-y-2">
                            <label className="font-mono text-[10px] font-black uppercase text-mutedForeground">Email Registry</label>
                            <input className="w-full bg-muted border border-border p-4 text-xs font-mono focus:border-accent outline-none" defaultValue="ALEX@CAMPUS.EDU.MY" />
                         </div>
                      </div>
                      <div className="space-y-4 pt-12 border-t border-border">
                         <h4 className="text-xs font-mono font-black uppercase">Asset Recalculation</h4>
                         <p className="text-sm text-mutedForeground mb-6">Submitting new CV or Github data will re-trigger the AI Matching Engine.</p>
                         <div className="p-8 border border-border border-dashed flex justify-between items-center group hover:border-accent transition-colors cursor-pointer">
                            <span className="font-black uppercase text-xs">Drop New Telemetry Files...</span>
                            <RefreshCw size={16} className="group-hover:rotate-180 transition-transform duration-500" />
                         </div>
                         <Button variant="secondary" className="w-full justify-center">Recalculate AI Alignment Score</Button>
                      </div>
                   </div>
                   <div className="lg:col-span-5 border-l border-border pl-12">
                      <h4 className="text-xs font-mono font-black uppercase mb-8">Metadata</h4>
                      <div className="space-y-6">
                         <MetaRow label="Observation Date" value="15 JUN 2026" />
                         <MetaRow label="Verification Status" value="LEVEL 2" />
                         <MetaRow label="Active Hub" value={selectedCountry} />
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

function EventPost({ author, title, date, comments, tag, onClick }: any) {
  return (
    <div onClick={onClick} className="p-8 border border-border bg-background hover:border-accent transition-all cursor-pointer group">
       <div className="flex justify-between items-start mb-6">
          <div className="flex gap-3 items-center">
             <div className="w-6 h-6 bg-muted flex items-center justify-center text-[10px] font-black">?</div>
             <span className="font-mono text-[10px] uppercase font-black">{author}</span>
             <span className="font-mono text-[10px] text-mutedForeground">• {date}</span>
          </div>
          <span className="px-2 py-0.5 border border-border text-[8px] font-black uppercase tracking-widest">{tag}</span>
       </div>
       <h3 className="text-3xl font-black uppercase tracking-tighter leading-none mb-6 group-hover:text-accent transition-colors">{title}</h3>
       <div className="flex gap-6 font-mono text-[10px] uppercase font-black text-mutedForeground">
          <span>{comments} Comments</span>
          <span>Share</span>
       </div>
    </div>
  );
}

function AlumniCard({ name, company, role, onClick }: any) {
  return (
    <div onClick={onClick} className="bg-background p-10 hover:bg-accent hover:text-white transition-all group cursor-pointer">
       <div className="w-12 h-12 border border-border group-hover:border-white flex items-center justify-center mb-8">
          <User size={20} />
       </div>
       <h4 className="text-3xl font-black uppercase tracking-tighter leading-none mb-4">{name}</h4>
       <p className="font-mono text-[10px] uppercase font-black tracking-widest opacity-60 mb-8">{role} @ {company}</p>
       <div className="flex items-center gap-2 font-black uppercase tracking-widest text-[10px]">
          Request Terminal Link <ArrowUpRight className="w-4 h-4" />
       </div>
    </div>
  );
}

function SkillBlock({ label, score, color }: any) {
  return (
    <div className="space-y-4">
      <div className="flex justify-between items-end">
        <span className="font-black uppercase text-xs tracking-widest">{label}</span>
        <span className="font-mono text-[10px] font-black">{score}%</span>
      </div>
      <div className="h-1 w-full bg-muted">
        <motion.div initial={{width:0}} animate={{width: `${score}%`}} className={`h-full ${color}`} />
      </div>
    </div>
  );
}

function SuggestionItem({ title, provider }: any) {
  return (
    <div className="p-6 border border-border flex justify-between items-center group hover:border-accent cursor-pointer transition-all">
       <div>
          <h4 className="font-black uppercase text-sm">{title}</h4>
          <p className="font-mono text-[10px] uppercase text-mutedForeground tracking-widest">Provider: {provider}</p>
       </div>
       <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
    </div>
  );
}

function MetaRow({ label, value }: any) {
  return (
    <div className="flex justify-between py-2 border-b border-border">
       <span className="font-mono text-[10px] font-black uppercase text-mutedForeground">{label}</span>
       <span className="font-mono text-[10px] font-black uppercase">{value}</span>
    </div>
  );
}
