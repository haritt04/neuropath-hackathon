"use client"
import { ArrowRight, Target, TrendingUp, Users, Zap } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {
  return (
    <div className="relative overflow-hidden">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-6 max-w-7xl mx-auto text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.5 }}
        >
          <span className="px-4 py-1.5 rounded-full glass text-sm font-semibold text-primary mb-6 inline-block">
            Talentbank Career OS 2026
          </span>
          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            Observe. <span className="gradient-text">Predict.</span> Grow.
          </h1>
          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            The world's first Career Observability System. Using AI to bridge the gap between education and global market demand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/role-selection" className="px-8 py-4 bg-primary text-white rounded-xl font-bold flex items-center justify-center gap-2 hover:scale-105 transition-transform">
              Get Started <ArrowRight className="w-5 h-5" />
            </Link>
            <button className="px-8 py-4 glass rounded-xl font-bold hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors">
              Find Mentor
            </button>
          </div>
        </motion.div>
      </section>

      {/* Feature Grid */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard 
            icon={<Target className="text-primary" />}
            title="Market Alignment Score (MAS)"
            description="Real-time telemetry on how well your skills match industry demands in Malaysia, Germany, and UAE."
          />
          <FeatureCard 
            icon={<TrendingUp className="text-secondary" />}
            title="Skill Drift Detection"
            description="Get alerted the moment your technology stack starts losing market relevance."
          />
          <FeatureCard 
            icon={<Zap className="text-accent" />}
            title="AI Mentor Gateway"
            description="Intelligent triage that connects you to the right professionals based on alignment scores."
          />
        </div>
      </section>
    </div>
  );
}

function FeatureCard({ icon, title, description }: any) {
  return (
    <div className="p-8 glass rounded-3xl hover:border-primary/50 transition-all cursor-default group">
      <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-3">{title}</h3>
      <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">{description}</p>
    </div>
  );
}