"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ThemeToggle } from './ThemeToggle';
import { BrainCircuit, Bell, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const pathname = usePathname();
  const isDashboard = pathname.includes('/dashboard');

  return (
    <nav className="sticky top-0 z-50 bg-white/70 dark:bg-slate-900/40 backdrop-blur-md border-b border-slate-200/50 dark:border-slate-700/50 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="p-2 bg-primary rounded-lg transition-transform group-hover:scale-110">
          <BrainCircuit className="w-6 h-6 text-white" />
        </div>
        <span className="text-xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-500 dark:from-white dark:to-slate-400">
          NeuroPath
        </span>
      </Link>
      
      <div className="flex items-center gap-4">
        <AnimatePresence>
          {isDashboard && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative pr-2 mr-2 border-r border-slate-200 dark:border-slate-800"
            >
              <button className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:text-primary dark:hover:text-primary transition-all relative">
                <Bell size={20} />
                <span className="absolute top-2 right-2 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
        
        {/* Navigation Links (Hidden if not logged in / shown for convenience) */}
        <div className="hidden md:flex items-center gap-6 mr-4">
           {!isDashboard ? (
             <>
               <Link href="/role-selection" className="text-sm font-bold hover:text-primary transition-colors">Find Your Path</Link>
               <Link href="/login" className="text-sm font-bold hover:text-primary transition-colors">Sign In</Link>
             </>
           ) : (
             <span className="text-xs font-black px-3 py-1 bg-primary/10 text-primary rounded-full uppercase tracking-tighter">
                System Active
             </span>
           )}
        </div>

        <ThemeToggle />
      </div>
    </nav>
  );
}