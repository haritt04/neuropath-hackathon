
"use client"
import React, { useState } from 'react';
import { 
  BarChart3, Inbox, CalendarPlus, Settings, 
  Check, X, Eye, FileText, Github, ExternalLink, 
  GraduationCap, Laptop, ChevronRight, Bell, Calendar, MapPin, Clock, Users, Globe
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/Button';

export default function MentorDashboard() {
  const [activeTab, setActiveTab] = useState('triage');

  const tabs = [
    { id: 'triage', label: 'Student Triage', icon: Inbox },
    { id: 'create-event', label: 'Create Event', icon: CalendarPlus },
    { id: 'settings', label: 'Profile Settings', icon: Settings },
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-white">
      {/* Side Navigation */}
      <aside className="w-20 md:w-64 border-r border-border flex flex-col p-6 sticky top-0 h-screen">
        <div className="mb-16 flex items-center gap-3">
          <div className="w-8 h-8 bg-foreground flex items-center justify-center text-background font-bold uppercase">M</div>
          <span className="hidden md:block font-black uppercase text-xl tracking-tighter">NeuroPath</span>
        </div>
        
        <nav className="flex-1 space-y-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
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
              <span className="font-mono text-[10px] uppercase tracking-widest opacity-40 px-2 py-1 bg-muted">Professional Terminal</span>
           </div>
           
           <div className="flex items-center gap-6">
              <button className="relative group">
                 <Bell size={20} className="text-mutedForeground group-hover:text-accent transition-colors" />
                 <span className="absolute -top-1 -right-1 w-2 h-2 bg-accent" />
              </button>
              <span className="font-mono text-[10px] uppercase font-bold tracking-tighter">SARAH TAN / ADMIN</span>
           </div>
        </header>

        <div className="p-8 md:p-16 flex-1">
          <AnimatePresence mode="wait">
            
            {/* STUDENT TRIAGE (Landing View) */}
            {activeTab === 'triage' && (
              <motion.div key="triage" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}}>
                <div className="mb-20">
                  <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">The Triage.</h1>
                  <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Active Verification Queues / Priority Observations</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-4 gap-px bg-border border border-border mb-20">
                  <Stat label="Total Triage" value="12" />
                  <Stat label="Average MAS" value="88%" />
                  <Stat label="Rejected" value="142" />
                  <Stat label="Wait Time" value="4h" />
                </div>

                <div className="space-y-0 border-t border-border">
                   <TriageRow 
                      name="Siti Aminah" university="University of Malaya" 
                      mas="92%" topic="Transitioning to MLOps"
                      desc="I've been working on backend systems for 2 years and want to move into production-grade ML infrastructure. Seeking guidance on tooling." 
                   />
                   <TriageRow 
                      name="Li Wei" university="NUS Singapore" 
                      mas="88%" topic="Cloud Architecture Internship"
                      desc="Final year CS student interested in multi-cloud strategies and serverless patterns. Looking for ASEAN market entry roadmap." 
                   />
                </div>
              </motion.div>
            )}

            {/* CREATE EVENT */}
            {activeTab === 'create-event' && (
              <motion.div key="create-event" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}} className="max-w-4xl">
                 <div className="mb-20">
                   <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">Announce.</h1>
                   <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Broadcasting to NeuroPath Regional Hubs</p>
                </div>

                <div className="p-12 border border-border bg-muted/10">
                   <form className="space-y-8" onSubmit={(e)=>e.preventDefault()}>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase font-mono tracking-widest">Event Name</label>
                            <input type="text" placeholder="TITLE OF EVENT" className="w-full bg-background border border-border p-4 text-xs font-mono uppercase focus:border-accent outline-none" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase font-mono tracking-widest">Field / Category</label>
                            <select className="w-full bg-background border border-border p-4 text-xs font-mono uppercase">
                               <option>Backend Architecture</option>
                               <option>Cloud Infrastructure</option>
                               <option>AI/ML Verification</option>
                               <option>Career Networking</option>
                            </select>
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase font-mono tracking-widest">Delivery Mode</label>
                            <div className="flex gap-4">
                               <button className="flex-1 py-3 border border-accent text-accent text-[10px] uppercase font-black tracking-widest bg-accent/5">Online</button>
                               <button className="flex-1 py-3 border border-border text-mutedForeground text-[10px] uppercase font-black tracking-widest hover:border-foreground hover:text-foreground">Onsite</button>
                            </div>
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase font-mono tracking-widest">Location / Link</label>
                            <input type="text" placeholder="ZOOM URL OR PHYSICAL HUB ADDR" className="w-full bg-background border border-border p-4 text-xs font-mono uppercase focus:border-accent outline-none" />
                         </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase font-mono tracking-widest">Timezone</label>
                            <input type="text" placeholder="GMT+8" className="w-full bg-background border border-border p-4 text-xs font-mono uppercase focus:border-accent outline-none" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase font-mono tracking-widest">Limited Seats</label>
                            <input type="number" placeholder="50" className="w-full bg-background border border-border p-4 text-xs font-mono uppercase focus:border-accent outline-none" />
                         </div>
                         <div className="space-y-2">
                            <label className="text-[10px] font-black uppercase font-mono tracking-widest">Target MAS</label>
                            <input type="number" placeholder="80" className="w-full bg-background border border-border p-4 text-xs font-mono uppercase focus:border-accent outline-none" />
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label className="text-[10px] font-black uppercase font-mono tracking-widest">Event Description</label>
                         <textarea placeholder="EDITORIAL SUMMARY OF EVENT..." className="w-full bg-background border border-border p-4 text-xs font-mono h-32 uppercase focus:border-accent outline-none"></textarea>
                      </div>

                      <Button variant="secondary" className="w-full justify-center">Deploy Announcement</Button>
                   </form>
                </div>
              </motion.div>
            )}

            {/* PROFILE SETTINGS */}
            {activeTab === 'settings' && (
              <motion.div key="settings" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}}>
                 <div className="mb-20">
                   <h1 className="text-7xl font-black uppercase tracking-tighter leading-none mb-4">Authority.</h1>
                   <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Professional Configuration & Organization Access</p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                   <div className="lg:col-span-8 space-y-12">
                      <div className="p-12 border border-border bg-muted/10">
                         <h4 className="text-xs font-mono font-black uppercase mb-8">Account Details</h4>
                         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            <div className="space-y-2 text-left">
                               <label className="font-mono text-[10px] font-black uppercase text-mutedForeground">Professional Name</label>
                               <input className="w-full bg-background border border-border p-4 text-xs font-mono focus:border-accent outline-none" defaultValue="SARAH TAN" />
                            </div>
                            <div className="space-y-2 text-left">
                               <label className="font-mono text-[10px] font-black uppercase text-mutedForeground">Verified Organization</label>
                               <input className="w-full bg-muted border border-border p-4 text-xs font-mono outline-none cursor-not-allowed" defaultValue="GRAB SINGAPORE" readOnly />
                            </div>
                         </div>
                         <Button variant="secondary" className="w-full justify-center">Save Profile Updates</Button>
                      </div>

                      <div className="p-12 border border-accent/20 bg-accent/5">
                         <h4 className="text-xs font-mono font-black uppercase mb-4 text-accent">Auto-Triage Active</h4>
                         <p className="text-sm font-medium leading-loose mb-8 italic">
                            Your terminal is currently set to automatically divert any student below 80% MAS to the automated suggestion bot.
                         </p>
                         <Button variant="primary">Modify Triage Rules</Button>
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

function Stat({ label, value }: any) {
  return (
    <div className="bg-background p-10 text-center">
      <h4 className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest mb-2">{label}</h4>
      <p className="text-5xl font-black tracking-tighter">{value}</p>
    </div>
  );
}

function TriageRow({ name, university, mas, topic, desc }: any) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 py-10 border-b border-border items-start group hover:bg-muted/50 transition-all px-4">
       <div className="lg:col-span-3">
          <div className="flex items-center gap-3 mb-2">
             <h3 className="text-2xl font-black uppercase tracking-tighter">{name}</h3>
             <span className="bg-accent text-white px-2 py-0.5 text-[8px] font-black uppercase tracking-widest">{mas} MAS</span>
          </div>
          <p className="font-mono text-[10px] uppercase text-mutedForeground tracking-widest">{university}</p>
       </div>
       <div className="lg:col-span-6">
          <h4 className="text-xs font-black uppercase tracking-widest mb-2 text-accent">Subject: {topic}</h4>
          <p className="text-sm font-medium leading-relaxed italic">"{desc}"</p>
       </div>
       <div className="lg:col-span-3 flex justify-end gap-4">
          <button title="Accept Connection" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-accent hover:border-accent hover:text-white transition-all"><Check size={20}/></button>
          <button title="View Assets" className="w-12 h-12 border border-border flex items-center justify-center hover:bg-foreground hover:text-background transition-all"><Eye size={20}/></button>
          <button title="Divert to Bot" className="w-12 h-12 border border-border flex items-center justify-center hover:text-accent transition-all"><X size={20}/></button>
       </div>
    </div>
  );
}
