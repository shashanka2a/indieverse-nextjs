'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from './ui/button';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface FilmCardProps {
  title: string;
  director: string;
  description: string;
  imageSrc: string;
  readNowUrl?: string;
  featured?: boolean;
}

export function FilmCard({ title, director, description, imageSrc, readNowUrl, featured = false }: FilmCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden rounded-2xl bg-[#1A1A1A] cursor-pointer"
      style={{ aspectRatio: featured ? '21/9' : '4/5' }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {/* Image with Parallax Zoom */}
      <motion.div
        className="absolute inset-0"
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <ImageWithFallback
          src={imageSrc}
          alt={title}
          className="w-full h-full object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80" />
      </motion.div>

      {/* Content Overlay */}
      <div className="relative h-full flex flex-col justify-end p-8 md:p-10">
        <motion.div
          initial={false}
          animate={{ y: isHovered ? -10 : 0 }}
          transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-4"
        >
          {/* Title & Director */}
          <div className="space-y-2">
            <h3 className={`font-serif tracking-tight ${featured ? 'text-4xl md:text-5xl' : 'text-2xl md:text-3xl'}`}>
              {title}
            </h3>
            <p className="text-[#CFCFCF] text-sm">Directed by {director}</p>
          </div>

          {/* Description - Slide up on hover */}
          <motion.p
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#CFCFCF] text-sm leading-relaxed overflow-hidden"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 10,
            }}
            transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {readNowUrl ? (
              <Button
                onClick={() => window.open(readNowUrl, '_blank')}
                className="bg-[#FFC066] hover:bg-[#FFB04D] text-black rounded-2xl px-8 transition-all duration-400"
              >
                Read Now
              </Button>
            ) : (
              <Button
                className="bg-[#FFC066] hover:bg-[#FFB04D] text-black rounded-2xl px-8 transition-all duration-400"
              >
                Read More
              </Button>
            )}
          </motion.div>
        </motion.div>
      </div>

      {/* Hover Border Effect */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ duration: 0.4 }}
        className="absolute inset-0 border-2 border-[#FFC066]/30 rounded-2xl pointer-events-none"
      />
    </motion.div>
  );
}
