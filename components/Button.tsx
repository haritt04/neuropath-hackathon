
"use client"
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ButtonProps {
  href?: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const Button = ({ href, variant = 'primary', children, className = '', onClick }: ButtonProps) => {
  const baseStyles = "inline-flex items-center gap-2 text-xs font-black uppercase tracking-widest transition-all duration-150 active:translate-y-px whitespace-nowrap";
  
  const variants = {
    primary: "text-accent relative py-2 group",
    secondary: "px-8 py-4 border border-foreground text-foreground hover:bg-foreground hover:text-background",
    ghost: "px-4 py-3 text-mutedForeground hover:text-foreground relative group",
  };

  const content = (
    <>
      {children}
      {(variant === 'primary' || variant === 'ghost') && (
        <span className={`absolute bottom-0 left-0 w-full ${variant === 'primary' ? 'h-0.5 bg-accent' : 'h-px bg-foreground'} origin-left scale-x-100 group-hover:scale-x-110 transition-transform`} />
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={`${baseStyles} ${variants[variant]} ${className}`}>
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={`${baseStyles} ${variants[variant]} ${className}`}>
      {content}
    </button>
  );
};
