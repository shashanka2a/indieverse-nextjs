'use client';

import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';
import Image from 'next/image';
import { Button } from './components/ui/button';
import { FilmCard } from './components/FilmCard';
import { ConnectSection } from './components/ConnectSection';

export default function App() {
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/favicon.svg"
              alt="Indieverse.art Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-serif text-xl text-white">Indieverse.art</span>
          </motion.div>
        </div>
      </header>

      {/* Gradient Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-radial from-[#181818] via-[#0E0E0E] to-[#0E0E0E]" />
        <div className="absolute inset-0 bg-gradient-radial from-[#6B3FA0]/10 via-transparent to-transparent opacity-30" />
      </div>

      {/* Hero Section */}
      <motion.section 
        className="relative min-h-screen flex flex-col items-center justify-center px-4 md:px-8"
        style={{ opacity: heroOpacity, y: heroY }}
      >
        <div className="max-w-5xl w-full text-center space-y-8">
          {/* Main Headline */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
            className="space-y-4"
          >
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tight">
              Indieverse.art
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
              className="italic text-[#FFC066] text-lg md:text-xl max-w-2xl mx-auto"
            >
              Stories Beyond the Shoreline
            </motion.p>
          </motion.div>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#CFCFCF] max-w-[600px] mx-auto leading-relaxed px-4"
          >
            A curated collection of independent films that explore the human condition, 
            crafted by visionary storytellers pushing the boundaries of cinematic art.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
            className="pt-8"
          >
            <Button 
              size="lg"
              className="bg-[#FFC066] hover:bg-[#FFB04D] text-black transition-all duration-400 px-12 py-6 rounded-2xl"
            >
              Watch Trailer
            </Button>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-16 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            className="w-6 h-10 border-2 border-[#CFCFCF]/30 rounded-full flex items-start justify-center p-2"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-1.5 h-1.5 bg-[#FFC066] rounded-full"
            />
          </motion.div>
        </motion.div>
      </motion.section>

      {/* Films Section */}
      <section className="relative px-4 md:px-8 py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl mb-16 text-center"
          >
            Featured Films
          </motion.h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {/* Featured Large Card - The Beautiful Distance */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="md:col-span-2"
            >
              <FilmCard
                title="The Beautiful Distance"
                director="Shashank Jagannatham"
                description="An intimate exploration of human connection and the spaces between us"
                imageSrc="/TBD.png"
                readNowUrl="https://gemini.google.com/share/faf79ef1ee0e"
                featured={true}
              />
            </motion.div>

            {/* Shoreline */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="md:col-span-2"
            >
              <FilmCard
                title="Shoreline"
                director="Shashank Jagannatham"
                description="A contemplative journey along forgotten coasts, exploring themes of memory and solitude"
                imageSrc="/shoreline.png"
                readNowUrl="https://gemini.google.com/share/a7e181b83672"
                featured={true}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Connect Section */}
      <ConnectSection />

      {/* Footer */}
      <footer className="relative px-4 md:px-8 py-16 border-t border-white/10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/favicon.svg"
              alt="Indieverse.art Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="text-[#CFCFCF] text-sm">
              Indieverse.art — Celebrating Independent Cinema
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#CFCFCF]/60 text-sm"
          >
            © 2025 All Rights Reserved
          </motion.p>
        </div>
      </footer>
    </div>
  );
}