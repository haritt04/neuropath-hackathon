"use client"
import React, { useState } from 'react';
import { MessageSquare, X, Send, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'bot', text: 'Hi Alex! Your MAS for "Cloud Architect" is 68%. Would you like to check how to improve your alignment?' }
  ]);

  return (
    <div className="fixed bottom-8 right-8 z-[100]">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="mb-4 w-[350px] overflow-hidden rounded-2xl border bg-white dark:bg-slate-900 shadow-2xl"
          >
            <div className="bg-gradient-to-r from-primary to-secondary p-4 flex justify-between items-center text-white">
              <div className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                <span className="font-bold text-sm">PathFinder AI</span>
              </div>
              <button onClick={() => setIsOpen(false)}><X className="w-5 h-5"/></button>
            </div>
            
            <div className="h-80 overflow-y-auto p-4 space-y-4">
              {messages.map((m, i) => (
                <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`p-3 rounded-2xl text-sm max-w-[80%] ${
                    m.role === 'user' 
                      ? 'bg-primary text-white ml-auto rounded-tr-none' 
                      : 'bg-slate-100 dark:bg-slate-800 rounded-tl-none text-slate-800 dark:text-slate-200'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 border-t flex gap-2">
              <input 
                placeholder="Type here..." 
                className="flex-1 bg-slate-50 dark:bg-slate-800 border-none outline-none rounded-lg px-3 py-2 text-sm"
              />
              <button className="p-2 bg-primary text-white rounded-lg"><Send className="w-4 h-4"/></button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-tr from-primary to-secondary rounded-full shadow-lg flex items-center justify-center text-white hover:scale-110 transition-transform"
      >
        <MessageSquare />
        {isOpen ? null : (
                    <span className="absolute -top-1 -right-1 bg-accent w-4 h-4 rounded-full border-2 border-white dark:border-slate-900 animate-pulse"></span>
        )}
      </button>
    </div>
  );
}