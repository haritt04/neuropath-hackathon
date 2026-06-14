"use client"
import Link from 'next/link';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User } from 'lucide-react';

export default function RegisterStudent() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-slate-50 dark:bg-[#020617]">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="glass w-full max-w-md rounded-[2.5rem] p-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
            <UserPlus className="text-primary w-8 h-8" />
          </div>
          <h1 className="text-3xl font-black">Student Sign Up</h1>
          <p className="text-slate-500 text-sm mt-2 font-medium">Start your Career Observability journey</p>
        </div>

        <form className="space-y-5">
           <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Full Name</label>
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="text" placeholder="Alex Tan" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">University Email</label>
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="email" placeholder="alex@university.edu.my" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-bold text-slate-400 uppercase ml-1">Create Password</label>
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
              <input type="password" placeholder="••••••••" className="w-full pl-12 pr-4 py-4 rounded-2xl bg-slate-100 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all font-medium" />
            </div>
          </div>

          <Link href="/onboarding" className="block w-full pt-4">
            <button type="button" className="w-full py-4 bg-primary text-white rounded-2xl font-black shadow-lg shadow-primary/30 hover:scale-[1.02] active:scale-[0.98] transition-all">
              Create Account
            </button>
          </Link>

          <p className="text-center text-sm text-slate-500 font-medium">
            Already have an account? <Link href="/login" className="text-primary font-black hover:underline">Sign In</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}