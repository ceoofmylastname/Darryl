import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquareText } from 'lucide-react';
import { ChatCard } from './ChatCard';

export const TestingPage = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);

  return (
    <div className="relative min-h-screen w-full font-serif overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2670&auto=format&fit=crop")',
        }}
      >
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full min-h-screen flex flex-col items-center pt-32 px-4 selection:bg-amber-500/30">

        {/* Top Branding */}
        <div className="w-full max-w-6xl flex justify-between text-white/90 text-sm tracking-widest font-sans uppercase mb-16 hidden md:flex">
          <span>Apartments & Penthouses</span>
          <span>Townhouses & Villas</span>
          <span className="font-serif text-2xl tracking-normal normal-case text-amber-100">DelSol Prime Homes</span>
          <span>+34 951 123 456</span>
        </div>

        {/* Main Hero Text */}
        <div className="text-center mb-12 space-y-6">
          <h1 className="text-5xl md:text-6xl text-[#3e4c66] drop-shadow-sm font-serif tracking-wide leading-tight text-white">
            <span className="block drop-shadow-md">Ask your questions.</span>
            <span className="block drop-shadow-md">Share your criteria.</span>
          </h1>
          <p className="text-white/90 text-xl font-sans font-light drop-shadow-md tracking-wide">
            Receive a first tailored selection within 24 hours.
          </p>

          {/* Start Chat Button - Only visible when chat is closed */}
          {!isChatOpen && (
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsChatOpen(true)}
              className="mt-8 px-8 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full font-sans font-medium uppercase tracking-wider hover:bg-white/20 transition-colors flex items-center gap-3 mx-auto"
            >
              <MessageSquareText size={20} />
              Start Personal Concierge
            </motion.button>
          )}
        </div>

        {/* Chat Interface Pop-up */}
        <div className="w-full flex justify-center h-[550px] items-end pb-10">
          <AnimatePresence>
            {isChatOpen && (
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="w-full flex justify-center"
              >
                <ChatCard onClose={() => setIsChatOpen(false)} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};
