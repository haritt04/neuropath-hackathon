"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { UserPlus } from 'lucide-react';

export default function RegisterStudent() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md">
        <div className="mb-12 text-center md:text-left">
          <div className="w-12 h-12 bg-accent inline-flex items-center justify-center mb-8">
            <UserPlus className="text-white w-6 h-6" />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">Initiate<br/>Profile.</h1>
          <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Student Segment Initialization</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">Full Legal Name</label>
            <input type="text" placeholder="ALEXANDER TAN" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm uppercase placeholder:opacity-20" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">University Email</label>
            <input type="email" placeholder="ALEX@CAMPUS.EDU.MY" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm uppercase placeholder:opacity-20" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">Create Access Code</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm placeholder:opacity-20" />
          </div>
          
          <div className="pt-4 flex flex-col gap-6">
            <Button href="/onboarding" variant="secondary" className="w-full justify-center">
              Click Here For Demo Prototype
            </Button>
            <p className="text-center text-[10px] font-black uppercase tracking-widest text-mutedForeground">
              Identified before? <Link href="/login" className="text-accent hover:underline">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
