"use client"
import React, { useState } from 'react';
import MarketTicker from "../../../components/MarketTicker";
import { 
  BarChart3, Users, Calendar, User, Sparkles, 
  MapPin, Clock, ArrowUpRight, CheckCircle2, 
  BookOpen, ExternalLink, ShieldAlert
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function StudentDashboard() {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Market Overview', icon: BarChart3 },
    { id: 'sessions', label: 'Alumni Sessions', icon: Users },
    { id: 'events', label: 'Events', icon: Calendar },
    { id: 'bridge', label: 'Bridge the Gap', icon: Sparkles },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="flex min-h-screen bg-slate-50 dark:bg-[#020617] text-slate-900 dark:text-slate-100 italic md:not-italic">
      {/* Side Navigation */}
      <aside className="w-20 md:w-64 border-r border-slate-200 dark:border-slate-800 flex flex-col p-4 bg-white/50 dark:bg-slate-900/50 backdrop-blur-xl">
        <div className="mb-8 px-2 flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">N</div>
          <span className="hidden md:block font-bold text-lg tracking-tighter">NeuroPath</span>
        </div>
        
        <nav className="flex-1 space-y-2">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`w-full flex items-center gap-3 p-3 rounded-xl transition-all ${
                activeTab === tab.id 
                ? 'bg-primary text-white shadow-lg shadow-primary/20' 
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
        <MarketTicker mode="student" />
        <div className="p-6 md:p-10">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div key="overview" initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} exit={{opacity:0}}>
                <div className="mb-10 flex flex-col md:flex-row md:items-end justify-between gap-4 text-left">
                  <div>
                    <h1 className="text-3xl font-black">Student Dashboard</h1>
                    <p className="text-slate-500 font-medium">Monitoring your Market Alignment Score (MAS)</p>
                  </div>
                  <div className="flex gap-2">
                    <div className="glass px-4 py-2 rounded-xl flex items-center gap-2 text-xs font-bold border-green-500/20 text-green-500">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      Live Telemetry
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 glass p-8 rounded-[2.5rem] flex flex-col items-center justify-center text-center">
                    <h3 className="text-xs font-black text-slate-400 uppercase tracking-widest mb-2">Market Alignment Score</h3>
                    <div className="text-8xl font-black gradient-text">82%</div>
                    <div className="mt-4 px-4 py-1 bg-green-500/10 text-green-500 rounded-full text-[10px] font-black uppercase tracking-widest">Strong Match</div>
                    <p className="mt-6 text-sm text-slate-500 leading-relaxed italic font-medium">
                      Your skills currently align with major tech hubs in <b>Kuala Lumpur</b> and <b>Singapore</b>.
                    </p>
                  </div>

                  <div className="lg:col-span-2 glass p-8 rounded-[2.5rem] text-left">
                    <h3 className="font-bold mb-6 flex items-center gap-2"><Sparkles className="w-4 h-4 text-primary"/> Skill Telemetry</h3>
                    <div className="space-y-6">
                      <SkillProgress label="Python (Backend)" score={90} color="bg-primary" />
                      <SkillProgress label="Cloud Systems" score={65} color="bg-secondary" />
                      <SkillProgress label="Problem Solving" score={85} color="bg-accent" />
                      <SkillProgress label="Market Context" score={40} color="bg-orange-500" />
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'sessions' && (
              <motion.div key="sessions" initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{opacity:0}} className="text-left">
                <h1 className="text-3xl font-black mb-8">Alumni Sessions</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <SessionCard 
                    name="Dato' Ismail" mentorType="Senior Cloud Architect @ AWS" 
                    time="Thu, 18 June - 10:00 AM" status="Available" 
                  />
                  <SessionCard 
                    name="Sarah Tan" mentorType="Principal Engineer @ Grab" 
                    time="Fri, 19 June - 3:00 PM" status="Limited Seats" 
                  />
                  <SessionCard 
                    name="Amirul Hafez" mentorType="Data Head @ Petronas" 
                    time="Sat, 20 June - 11:00 AM" status="Fully Booked" 
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'events' && (
              <motion.div key="events" initial={{opacity:0, x:10}} animate={{opacity:1, x:0}} exit={{opacity:0}} className="text-left">
                <h1 className="text-3xl font-black mb-8">Upcoming Events</h1>
                <div className="space-y-4">
                  <EventItem 
                    title="Tech Talent Summit 2026" 
                    location="Kuala Lumpur Convention Centre" 
                    date="25 June 2026" type="Career Fair" 
                  />
                  <EventItem 
                    title="NeuroPath Networking Night" 
                    location="Virtual / Zoom" 
                    date="02 July 2026" type="Networking" 
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'bridge' && (
              <motion.div key="bridge" initial={{opacity:0, scale:0.98}} animate={{opacity:1, scale:1}} exit={{opacity:0}} className="text-left">
                <div className="mb-8">
                  <h1 className="text-3xl font-black flex items-center gap-3">Bridge the Gap <ShieldAlert className="text-orange-500" /></h1>
                  <p className="text-slate-500 font-medium">Personalized recommendations for <b>Semi-Aligned</b> skills.</p>
                </div>
                
                <div className="bg-orange-500/5 border border-orange-500/20 rounded-[2rem] p-8 mb-8">
                  <h3 className="text-orange-600 dark:text-orange-400 font-black mb-2 uppercase text-xs tracking-widest">Skill Drift Detected</h3>
                  <p className="text-sm font-medium">Your <b>Cloud Computing</b> score is 65%. Most employers in Malaysia are looking for 80%+. Bridge this 15% gap to unlock 12 new job matches.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <RecommendationCard 
                    title="AWS Certified Solutions Architect" 
                    provider="Amazon / HRDC Claimable" 
                    impact="+12% MAS Boost"
                  />
                  <RecommendationCard 
                    title="Distributed Systems Bootcamp" 
                    provider="NeuroPath Alumni" 
                    impact="+8% MAS Boost"
                  />
                </div>
              </motion.div>
            )}

            {activeTab === 'profile' && (
              <motion.div key="profile" initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="text-left">
                <h1 className="text-3xl font-black mb-8">Profile Settings</h1>
                <div className="glass p-10 rounded-[2.5rem] max-w-2xl">
                  <div className="flex items-center gap-6 mb-10">
                    <div className="w-24 h-24 bg-primary/20 rounded-3xl flex items-center justify-center text-4xl">🎓</div>
                    <div>
                      <h2 className="text-2xl font-bold">Alex Tan</h2>
                      <p className="text-slate-500">Student ID: #NP-10293</p>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <ProfileField label="Primary Market" value="Malaysia / Singapore" />
                      <ProfileField label="Language" value="English / Malay" />
                    </div>
                    <button className="w-full py-4 bg-slate-900 border border-slate-700 dark:bg-white text-white dark:text-black rounded-2xl font-bold transition-all hover:opacity-90">Save Preferences</button>
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

function SkillProgress({ label, score, color }: any) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-end">
        <span className="font-bold text-sm tracking-tight">{label}</span>
        <span className="text-xs font-black opacity-60 tracking-widest">{score}%</span>
      </div>
      <div className="h-3 w-full bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div 
          initial={{width:0}} animate={{width: `${score}%`}}
          className={`h-full ${color}`}
        />
      </div>
    </div>
  );
}

function SessionCard({ name, mentorType, time, status }: any) {
  return (
    <div className="glass p-6 rounded-3xl group hover:border-primary/50 transition-all text-left">
      <div className="flex justify-between items-start mb-4">
        <div className="w-12 h-12 bg-slate-200 dark:bg-slate-800 rounded-2xl flex items-center justify-center text-xl">👤</div>
        <span className={`text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-widest ${status === 'Available' ? 'bg-accent/10 text-accent' : 'bg-orange-500/10 text-orange-500'}`}>
          {status}
        </span>
      </div>
      <h3 className="font-black text-lg">{name}</h3>
      <p className="text-xs text-slate-500 mb-6 font-medium tracking-tight h-8">{mentorType}</p>
      <div className="flex items-center gap-2 text-xs font-bold text-slate-400 mb-6 uppercase tracking-wider">
        <Clock size={14} /> {time}
      </div>
      <button className="w-full py-3 bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white rounded-xl font-black transition-all">
        Book Session
      </button>
    </div>
  );
}

function EventItem({ title, location, date, type }: any) {
  return (
    <div className="glass p-6 rounded-3xl flex flex-col md:flex-row md:items-center justify-between gap-4 text-left">
      <div>
        <div className="text-[10px] font-black text-primary uppercase mb-1 tracking-[0.2em]">{type}</div>
        <h3 className="font-black text-xl tracking-tight">{title}</h3>
        <div className="flex items-center gap-4 mt-2 text-slate-500 text-xs font-bold uppercase">
          <span className="flex items-center gap-1"><MapPin size={14}/> {location}</span>
          <span className="flex items-center gap-1"><Calendar size={14}/> {date}</span>
        </div>
      </div>
      <button className="px-8 py-3 bg-slate-900 border border-slate-700 dark:bg-white text-white dark:text-black rounded-xl font-bold flex items-center gap-2 hover:scale-105 transition-transform">
        Register <ArrowUpRight size={18}/>
      </button>
    </div>
  );
}

function RecommendationCard({ title, provider, impact }: any) {
  return (
    <div className="glass p-8 rounded-[2rem] border-primary/10 hover:border-primary/40 transition-all cursor-pointer group text-left">
      <div className="w-10 h-10 bg-primary/10 text-primary rounded-xl flex items-center justify-center mb-4">
        <BookOpen size={20} />
      </div>
      <h3 className="font-black text-xl mb-1 tracking-tight">{title}</h3>
      <p className="text-sm text-slate-500 mb-6 font-medium italic">{provider}</p>
      <div className="flex items-center justify-between">
        <span className="text-xs font-black text-accent tracking-widest uppercase">{impact}</span>
        <ExternalLink size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
      </div>
    </div>
  );
}

function ProfileField({ label, value }: any) {
  return (
    <div className="space-y-1">
      <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">{label}</label>
      <div className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800 font-bold border border-transparent hover:border-slate-300 dark:hover:border-slate-600 transition-all">{value}</div>
    </div>
  );
}