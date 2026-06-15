
"use client"
import React, { useState, useRef, useEffect } from 'react';
import { 
  MessageSquare, X, Send, Bot, User, 
  Terminal, Sparkles, Minus, Maximize2 
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'SYSTEM INITIALIZED. I AM NEUROPATH AI. HOW CAN I ASSIST YOUR CAREER TRAJECTORY TODAY?' }
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { role: 'user', content: input.toUpperCase() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate AI Response
    setTimeout(() => {
      const responses = [
        "ANALYZING MARKET ALIGNMENT SCORE... YOUR CURRENT PROFILES SHOWS 8% DRIFT IN CLOUD INFRASTRUCTURE.",
        "MENTOR SARAH TAN IS CURRENTLY ACTIVE. WOULD YOU LIKE TO TRIAGE A CONNECTION REQUEST?",
        "GLOBAL HUB UPDATE: SINGAPORE TECH HUB ALPHA IS SEEING 15% INCREASE IN RUST DEMAND.",
        "RESUME TELEMETRY RECEIVED. RECALCULATING PROJECTED SALARY INDEX FOR KUALA LUMPUR HUB.",
        "SUGGESTION: ENROLL IN DISTRIBUTED SYSTEMS LEVEL 2 TO INCREASE MAS BY 12%."
      ];
      const botMessage = { 
        role: 'assistant', 
        content: responses[Math.floor(Math.random() * responses.length)] 
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="fixed bottom-8 right-8 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="mb-6 w-[380px] h-[520px] bg-background border-2 border-foreground flex flex-col shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden"
          >
            {/* Header */}
            <div className="bg-foreground text-background p-4 flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Terminal size={16} />
                <span className="font-mono text-[10px] font-black uppercase tracking-widest">NeuroPath AI / Terminal v1.0</span>
              </div>
              <button onClick={() => setIsOpen(false)} className="hover:opacity-50 transition-opacity">
                <X size={18} />
              </button>
            </div>

            {/* Messages */}
            <div 
              ref={scrollRef}
              className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#0A0A0A]"
            >
              {messages.map((msg, i) => (
                <div key={i} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                  <div className={`max-w-[85%] p-4 border ${
                    msg.role === 'user' 
                    ? 'bg-accent text-white border-accent' 
                    : 'bg-muted text-foreground border-border'
                  }`}>
                    <p className={`font-mono text-[11px] leading-relaxed ${msg.role === 'assistant' ? 'uppercase' : ''}`}>
                      {msg.content}
                    </p>
                  </div>
                  <span className="font-mono text-[7px] uppercase mt-2 opacity-40">
                    {msg.role === 'assistant' ? 'System_AI' : 'User_Identity'}
                  </span>
                </div>
              ))}
              {isTyping && (
                <div className="flex items-center gap-2 text-accent">
                  <div className="w-1 h-1 bg-accent animate-bounce" />
                  <div className="w-1 h-1 bg-accent animate-bounce [animation-delay:0.2s]" />
                  <div className="w-1 h-1 bg-accent animate-bounce [animation-delay:0.4s]" />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t-2 border-foreground bg-background">
              <div className="flex gap-2">
                <input 
                  type="text" 
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="ENTER COMMAND..."
                  className="flex-1 bg-muted border border-border px-4 py-3 font-mono text-[10px] uppercase outline-none focus:border-accent"
                />
                <button 
                  onClick={handleSend}
                  className="w-12 bg-foreground text-background flex items-center justify-center hover:bg-accent hover:text-white transition-colors border border-foreground"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className={`w-16 h-16 rounded-none flex items-center justify-center shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] border-2 border-foreground transition-colors ${
          isOpen ? 'bg-background text-foreground' : 'bg-accent text-white'
        }`}
      >
        {isOpen ? <Minus size={24} /> : <MessageSquare size={24} />}
      </motion.button>
    </div>
  );
}
