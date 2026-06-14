"use client"
import { GraduationCap, Briefcase, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function RoleSelection() {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-6 py-12">
      <div className="max-w-4xl w-full">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Choose Your Path</h1>
          <p className="text-slate-500 dark:text-slate-400">Select how you want to experience NeuroPath</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <RoleCard 
            href="/register/student"
            icon={<GraduationCap className="w-10 h-10" />}
            title="I'm a Student"
            description="Build career readiness, track market alignment, and find your ideal path."
            color="bg-primary"
          />
          <RoleCard 
            href="/register/mentor"
            icon={<Briefcase className="w-10 h-10" />}
            title="I'm a Mentor"
            description="Guide future talents, manage mentorship requests, and share your expertise."
            color="bg-secondary"
          />
        </div>
      </div>
    </div>
  );
}

function RoleCard({ href, icon, title, description, color }: any) {
  return (
    <Link href={href}>
      <motion.div 
        whileHover={{ y: -5 }}
        className="glass p-10 rounded-3xl group cursor-pointer border-transparent hover:border-primary/50 transition-all text-center flex flex-col items-center"
      >
        <div className={`p-5 rounded-2xl ${color} text-white mb-6 transform group-hover:scale-110 transition-transform`}>
          {icon}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-slate-500 dark:text-slate-400 mb-8 leading-relaxed">
          {description}
        </p>
        <div className="flex items-center gap-2 font-bold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
          Continue <ArrowRight className="w-4 h-4" />
        </div>
      </motion.div>
    </Link>
  );
}