
"use client"
import React from 'react';
import { ArrowRight, Target, TrendingUp, Zap, Calendar, Users, Globe, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';

export default function Home() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: [0.25, 0, 0, 1] }
  };

  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto border-b border-border">
        <motion.div 
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5, ease: [0.25, 0, 0, 1] }}
        >
          <span className="font-mono text-[10px] tracking-[0.3em] font-black text-accent uppercase mb-8 block">
            [ Talentbank Career OS 2026 ]
          </span>
          <h1 className="text-[clamp(3rem,10vw,8rem)] leading-[0.9] font-black tracking-tighter uppercase mb-12">
            Observe.<br/>
            Predict.<br/>
            <span className="text-outline">Grow.</span>
          </h1>
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-6">
              <p className="text-xl md:text-2xl text-mutedForeground font-medium leading-tight max-w-xl">
                The world's first Career Observability System. We align talent telemetry with global market shifts.
              </p>
            </div>
            <div className="md:col-span-6 flex flex-col sm:flex-row gap-8 justify-end">
              <Button href="/role-selection" variant="secondary">Start Journey</Button>
              <Button variant="primary">The Whitepaper <ArrowRight className="w-4 h-4"/></Button>
            </div>
          </div>
        </motion.div>
        
        {/* Layered Decorative Text */}
        <div className="absolute -bottom-10 right-0 text-[18rem] font-black text-white/5 pointer-events-none select-none leading-none hidden lg:block tracking-tighter">
          NP26
        </div>
      </section>

      {/* ABOUT US SECTION */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-border bg-muted/30">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-6">/ About the OS</h2>
            <h3 className="text-4xl font-bold tracking-tight leading-none uppercase">Bridging the gap between raw talent and economic demand.</h3>
          </div>
          <div className="lg:col-span-8 flex flex-col gap-12">
            <p className="text-2xl font-medium text-foreground leading-snug">
              Traditional education is reactive. NeuroPath is proactive. We track real-time technology drift and session telemetry from 50,000+ industry mentors to ensure your Market Alignment Score (MAS) stays above the curve.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-12 border-t border-border">
                <Stat icon={<Target/>} label="MAS Precision" value="99.2%" />
                <Stat icon={<Globe/>} label="Global Hubs" value="12" />
                <Stat icon={<Users/>} label="Active Mentors" value="4.8K" />
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES / CAPABILITIES */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-y-24 md:gap-x-12">
          <FeatureCard 
            num="01"
            title="Skill Drift Detection"
            description="We alert you when a core technology in your stack starts losing market relevance in your target region."
          />
          <FeatureCard 
            num="02"
            title="AI Mentor Triage"
            description="We don't just connect you to mentors. We connect you to the one professional who bridges your specific skill gap."
          />
          <FeatureCard 
            num="03"
            title="Market Alignment"
            description="Real-time telemetry benchmarking your profile against live job market demands in Malaysia, Germany, and UAE."
          />
        </div>
      </section>

      {/* EVENT TAB / SECTION */}
      <section className="py-32 bg-foreground text-background">
        <div className="px-6 md:px-12 max-w-7xl mx-auto">
           <div className="mb-20 flex flex-col md:flex-row justify-between items-end gap-8">
              <div>
                 <h2 className="text-xs font-black uppercase tracking-[0.4em] text-accent mb-6">/ Live Network</h2>
                 <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-[0.85]">Upcoming Events</h3>
              </div>
              <Button variant="secondary" className="border-background text-background hover:bg-background hover:text-foreground">View All Events</Button>
           </div>

           <div className="space-y-0">
              <EventRow date="JUN 25" title="Tech Talent Summit 2026" location="Kuala Lumpur" tag="Main Stage" />
              <EventRow date="JUL 02" title="Cloud Architecture Masterclass" location="Virtual" tag="Technical" />
              <EventRow date="JUL 18" title="NeuroPath Networking Night" location="Singapore" tag="Networking" />
           </div>
        </div>
      </section>

      {/* STUDENT REVIEWS */}
      <section className="py-32 px-6 md:px-12 max-w-7xl mx-auto border-b border-border overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <div className="lg:col-span-5">
               <h3 className="text-7xl font-black tracking-tighter uppercase leading-none mb-8">Voices from<br/>the System.</h3>
               <p className="text-mutedForeground text-lg">Real data. Real outcomes. How students are using Career OS to pivot.</p>
            </div>
            <div className="lg:col-span-7">
               <div className="space-y-12">
                  <Review 
                    text="NeuroPath identified a 15% gap in my Cloud proficiency that my university missed. Two months later, I secured a role at AWS."
                    author="Alex Tan" 
                    role="Cloud Engineer @ AWS" 
                  />
                  <Review 
                    text="The MAS score is a wake-up call. It's not just about learning—it's about learning what's currently being observed by the industry."
                    author="Sarah Lim" 
                    role="Data Scientist" 
                  />
               </div>
            </div>
        </div>
      </section>

      {/* FOOTER / ADVERTORIAL */}
      <footer className="pt-32 pb-12 px-6 md:px-12 max-w-7xl mx-auto">
         <div className="border-t-2 border-accent pt-12 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-6">
               <h4 className="text-6xl font-black tracking-tighter uppercase leading-none mb-8">Ready to be<br/>Observable?</h4>
               <div className="flex gap-4">
                  <Button href="/role-selection" variant="secondary">Join the Waitlist</Button>
                  <Button variant="primary">Hire Talent</Button>
               </div>
            </div>
            <div className="md:col-span-6 grid grid-cols-2 gap-8">
               <div className="space-y-4">
                  <p className="font-mono text-[10px] uppercase font-black tracking-widest text-mutedForeground">Platform</p>
                  <ul className="space-y-2 text-sm font-bold uppercase transition-all">
                     <li className="hover:text-accent cursor-pointer">Student Dashboard</li>
                     <li className="hover:text-accent cursor-pointer">Mentor Terminal</li>
                     <li className="hover:text-accent cursor-pointer">Market Telemetry</li>
                  </ul>
               </div>
               <div className="space-y-4">
                  <p className="font-mono text-[10px] uppercase font-black tracking-widest text-mutedForeground">Connect</p>
                  <ul className="space-y-2 text-sm font-bold uppercase">
                     <li className="hover:text-accent cursor-pointer">X / Twitter</li>
                     <li className="hover:text-accent cursor-pointer">LinkedIn</li>
                     <li className="hover:text-accent cursor-pointer">GitHub</li>
                  </ul>
               </div>
            </div>
         </div>
         <div className="mt-32 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-mono uppercase tracking-[0.2em] text-mutedForeground">
            <p>© 2026 NeuroPath System. All rights observed.</p>
            <p>Built for Talentbank Tech Hackathon</p>
         </div>
      </footer>
    </div>
  );
}

function FeatureCard({ num, title, description }: any) {
  return (
    <div className="group border-t border-border pt-8">
      <span className="font-mono text-xs font-black text-accent mb-8 block">{num}</span>
      <h4 className="text-3xl font-bold uppercase tracking-tight mb-6 leading-none">{title}</h4>
      <p className="text-mutedForeground font-medium text-lg leading-snug">{description}</p>
    </div>
  );
}

function Stat({ icon, label, value }: any) {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2 text-accent">
        {React.cloneElement(icon, { size: 16, strokeWidth: 2 })}
        <span className="font-mono text-[10px] font-black uppercase tracking-widest">{label}</span>
      </div>
      <div className="text-4xl font-black tracking-tighter">{value}</div>
    </div>
  );
}

function EventRow({ date, title, location, tag }: any) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 py-8 border-b border-background/20 items-center group hover:bg-background hover:text-foreground transition-all cursor-pointer px-4">
       <div className="md:col-span-2 font-mono text-xl font-black">{date}</div>
       <div className="md:col-span-6 text-2xl font-bold uppercase tracking-tight">{title}</div>
       <div className="md:col-span-2 text-sm uppercase font-black opacity-60 tracking-widest">{location}</div>
       <div className="md:col-span-2 flex justify-end">
          <span className="px-3 py-1 border border-current text-[10px] font-black uppercase tracking-widest">{tag}</span>
       </div>
    </div>
  );
}

function Review({ text, author, role }: any) {
  return (
    <div className="space-y-6">
       <p className="font-serif text-3xl italic leading-tight text-foreground">"{text}"</p>
       <div className="flex items-center gap-4">
          <div className="w-10 h-px bg-accent"></div>
          <div>
             <p className="font-black uppercase tracking-widest text-xs">{author}</p>
             <p className="text-[10px] uppercase font-bold text-mutedForeground tracking-wide">{role}</p>
          </div>
       </div>
    </div>
  );
}
