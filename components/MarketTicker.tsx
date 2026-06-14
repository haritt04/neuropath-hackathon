"use client"
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function MarketTicker({ mode = "student" }) {
  const items = mode === "student" ? [
    { label: "Cloud Engineering", change: "+12.4%", trend: "up" },
    { label: "AI/ML Demand (SG)", change: "+24.8%", trend: "up" },
    { label: "Python/Backend", change: "-2.1%", trend: "down" },
    { label: "Cybersecurity (MY)", change: "+8.3%", trend: "up" },
  ] : [
    { label: "Skill Gap (Freshies)", change: "High", trend: "alert" },
    { label: "Mentor Availability", change: "Low", trend: "down" },
    { label: "Industry Alignment", change: "72%", trend: "neutral" },
    { label: "Upskilling Requests", change: "+45%", trend: "up" },
  ];

  return (
    <div className="w-full bg-slate-900 overflow-hidden py-2 hidden md:block">
      <motion.div 
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
        className="flex whitespace-nowrap gap-12"
      >
        {[...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-bold text-white/70 uppercase">
            {item.trend === "up" && <TrendingUp className="text-accent w-3 h-3" />}
            {item.trend === "alert" && <AlertCircle className="text-orange-500 w-3 h-3" />}
            <span>{item.label}:</span>
            <span className={item.trend === "up" ? "text-accent" : item.trend === "down" ? "text-red-400" : "text-primary"}>
              {item.change}
            </span>
            <ArrowUpRight className="w-3 h-3 opacity-30" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}