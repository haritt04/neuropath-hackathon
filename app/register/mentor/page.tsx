
"use client"
import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/Button';
import { ShieldCheck } from 'lucide-react';

export default function RegisterMentor() {
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md">
        <div className="mb-12 text-center md:text-left">
          <div className="w-12 h-12 bg-white inline-flex items-center justify-center mb-8">
            <ShieldCheck className="text-background w-6 h-6" />
          </div>
          <h1 className="text-5xl font-black uppercase tracking-tighter leading-none mb-4">Validate<br/>Authority.</h1>
          <p className="font-mono text-[10px] uppercase font-black text-mutedForeground tracking-widest">Industry Professional Verification</p>
        </div>

        <form className="space-y-8">
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">Full Name</label>
            <input type="text" placeholder="NAME / IDENTIFIER" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm uppercase placeholder:opacity-20" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">Organization Email</label>
            <input type="email" placeholder="NAME@CORP-ENTITY.COM" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm uppercase placeholder:opacity-20" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">LinkedIn Authority URL</label>
            <input type="url" placeholder="LINKEDIN.COM/IN/IDENTITY" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm placeholder:opacity-20" />
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-mutedForeground">Access Code</label>
            <input type="password" placeholder="••••••••" className="w-full px-4 py-4 bg-muted border border-border outline-none focus:border-accent text-white font-mono text-sm placeholder:opacity-20" />
          </div>
          
          <div className="pt-4 flex flex-col gap-6">
            {/* Fixing button colors to match the system - standard secondary inversion */}
            <Button href="/dashboard/mentor" variant="secondary" className="w-full justify-center">
              Request Admission
            </Button>
            <p className="text-center text-[10px] font-black uppercase tracking-widest text-mutedForeground">
              Verified identity? <Link href="/login" className="text-accent hover:underline">Sign In</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}
