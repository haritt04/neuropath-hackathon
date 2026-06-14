"use client"
import { useState } from 'react';
import Link from 'next/link';

export default function Login() {
  const [tab, setTab] = useState('student');

  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center p-6">
      <div className="glass w-full max-w-md rounded-3xl p-8 md:p-10">
        <h1 className="text-3xl font-bold text-center mb-8">Welcome Back</h1>
        
        <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl mb-8">
          <button 
            onClick={() => setTab('student')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${tab === 'student' ? 'bg-white dark:bg-slate-700 shadow-sm' : 'text-slate-500'}`}
          >
            Student
          </button>
          <button 
            onClick={() => setTab('mentor')}
            className={`flex-1 py-2 rounded-lg text-sm font-bold transition-all ${tab === 'mentor' ? 'bg-white dark:bg-slate-700 shadow-sm' : 'text-slate-500'}`}
          >
            Mentor
          </button>
        </div>

        <form className="space-y-6">
          <div className="space-y-2">
            <label className="text-sm font-medium">Email Address</label>
            <input type="email" placeholder="name@university.edu" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium">Password</label>
              <button type="button" className="text-xs text-primary hover:underline">Forgot password?</button>
            </div>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-3 rounded-xl bg-slate-50 dark:bg-slate-800 border-none outline-none focus:ring-2 focus:ring-primary/50 transition-all" />
          </div>
          
          <div className="flex items-center gap-2">
            <input type="checkbox" id="remember" className="rounded border-slate-300 text-primary focus:ring-primary" />
            <label htmlFor="remember" className="text-sm text-slate-500">Remember me</label>
          </div>

          <Link href={tab === 'student' ? '/dashboard/student' : '/dashboard/mentor'}>
            <button type="button" className="w-full py-4 bg-primary text-white rounded-xl font-bold mt-4 hover:shadow-lg hover:shadow-primary/30 transition-all">
              Sign In
            </button>
          </Link>

          <p className="text-center text-sm text-slate-500">
            Don't have an account? <Link href="/role-selection" className="text-primary font-bold hover:underline">Sign up</Link>
          </p>
        </form>
      </div>
    </div>
  );
}