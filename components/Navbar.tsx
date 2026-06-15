
"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { BrainCircuit } from 'lucide-react';

export default function Navbar() {
  const pathname = usePathname();
  
  // Only show on the marketing landing page
  if (pathname !== '/') return null;

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-transparent px-6 md:px-12 py-8 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-3 group">
        <div className="w-8 h-8 bg-accent flex items-center justify-center">
          <BrainCircuit className="w-5 h-5 text-white" strokeWidth={1.5} />
        </div>
        <span className="text-xl font-bold tracking-tighter uppercase font-sans">
          NeuroPath
        </span>
      </Link>
      
      <div className="flex items-center gap-10">
        <Link href="/role-selection" className="text-xs font-black uppercase tracking-widest hover:text-accent transition-colors">
          Find Path
        </Link>
        <Link href="/login" className="text-xs font-black uppercase tracking-widest hover:text-accent transition-colors">
          Member Sign In
        </Link>
      </div>
    </nav>
  );
}
