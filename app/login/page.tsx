"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';

export default function Login() {
  const [tab, setTab] = useState('student');

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md">
        <div className="mb-12">
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">Welcome<br/>Back.</h1>
          <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Identification required.</p>
        </div>
        
        <div className="flex gap-px bg-border border border-border mb-12">
          <button 
            onClick={() => setTab('student')}
            className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'student' ? 'bg-foreground text-background' : 'text-mutedForeground hover:text-foreground'}`}
          >
            Student
          </button>
          <button 
            onClick={() => setTab('mentor')}
            className={`flex-1 py-4 text-[10px] font-black uppercase tracking-widest transition-all ${tab === 'mentor' ? 'bg-foreground text-background' : 'text-mutedForeground hover:text-foreground'}`}
          >
            Mentor
          </button>
        </div>

        <form className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">Email Address</label>
            <input type="email" placeholder="USER@TERMINAL.NET" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm uppercase placeholder:opacity-20" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">Access Code</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm placeholder:opacity-20" />
          </div>
          
          <div className="pt-4 flex flex-col gap-6">
            <Button href={tab === 'student' ? '/dashboard/student' : '/dashboard/mentor'} variant="secondary" className="w-full justify-center">
              Login For Demo Prototype
            </Button>
            <Link href="/role-selection" className="text-center text-[10px] font-black uppercase tracking-widest text-mutedForeground hover:text-accent">
              Register New Account
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
