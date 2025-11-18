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
      <header className="relative px-4 md:px-8 py-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center space-x-3"
          >
            <Image
              src="/favicon.svg"
              alt="Indieverse.mov Logo"
              width={32}
              height={32}
              className="w-8 h-8"
            />
            <span className="font-serif text-xl text-white">Indieverse.mov</span>
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
              Indieverse.mov
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
      <section className="relative px-4 md:px-8 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-3xl md:text-4xl mb-12 text-center"
          >
            Featured Films
          </motion.h2>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
            {/* The Beautiful Distance */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <FilmCard
                title="The Beautiful Distance"
                director="Shashank Jagannatham"
                description="Beautiful distance is a compelling romantic drama set against the backdrop of the high-stakes US tech industry (Seattle/San Jose). It tells the story of Arjun, a brilliant, perpetually under-resourced tech enthusiast juggling an F-1 visa and a dream of securing VC funding, and Anjali, a sharp, highly accomplished Program Manager shielded by the coveted stability of an H-1B visa. Their relationship is not a classic opposites-attract story, but a collision between two incompatible timelines: one built on speculative dreams and one built on absolute deadlines. The real distance, the doori, is not geographic, but the immense, practical gap between an F-1 student's financial precarity and a high-salaried manager's professional pressure, forcing them to choose between love and the hard-won security of the American Dream."
                imageSrc="/TBD.png"
                readNowUrl="https://gemini.google.com/share/faf79ef1ee0e"
                square={true}
              />
            </motion.div>

            {/* Shoreline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <FilmCard
                title="Shoreline"
                director="Shashank Jagannatham"
                description="Jason, a studious and isolated college student, joins his adventurous friends on a spontaneous road trip to Miami. Overwhelmed by the chaos of the city, he seeks solitude at dawn on the shoreline—where he confronts an alligator and, in a flash of mortality, the unlived memories of family and friendship. Surviving the encounter, Jason embraces life, reconnecting with his friends as the sun sets. Shoreline is an AI-crafted cinematic short that blends realism, suspense, and emotional depth—challenging us to ask: Are we living, or just existing?"
                imageSrc="/shoreline.png"
                readNowUrl="https://gemini.google.com/share/a7e181b83672"
                square={true}
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
              alt="Indieverse.mov Logo"
              width={24}
              height={24}
              className="w-6 h-6"
            />
            <p className="text-[#CFCFCF] text-sm">
              Indieverse.mov — Celebrating Independent Cinema
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