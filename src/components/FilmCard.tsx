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
  square?: boolean;
}

export function FilmCard({ title, director, description, imageSrc, readNowUrl, featured = false, square = false }: FilmCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getAspectRatio = () => {
    if (square) return '1/1';
    if (featured) return '21/9';
    return '4/5';
  };

  return (
    <motion.div
      className="group relative overflow-hidden rounded-xl bg-[#1A1A1A] cursor-pointer"
      style={{ aspectRatio: getAspectRatio() }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
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
      <div className="relative h-full flex flex-col justify-end p-5 md:p-6">
        <motion.div
          initial={false}
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          className="space-y-3"
        >
          {/* Title & Director */}
          <div className="space-y-1.5">
            <h3 className={`font-serif tracking-tight ${featured ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
              {title}
            </h3>
            <p className="text-[#CFCFCF] text-xs md:text-sm">Directed by {director}</p>
          </div>

          {/* Description - Slide up on hover */}
          <motion.p
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0,
              height: isHovered ? 'auto' : 0,
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            className="text-[#CFCFCF] text-xs md:text-sm leading-relaxed overflow-hidden"
          >
            {description}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={false}
            animate={{
              opacity: isHovered ? 1 : 0.8,
              y: isHovered ? 0 : 8,
            }}
            transition={{ duration: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {readNowUrl ? (
              <Button
                onClick={() => window.open(readNowUrl, '_blank')}
                className="bg-[#FFC066] hover:bg-[#FFB04D] text-black rounded-xl px-6 py-2 text-sm transition-all duration-300"
              >
                Read Now
              </Button>
            ) : (
              <Button
                className="bg-[#FFC066] hover:bg-[#FFB04D] text-black rounded-xl px-6 py-2 text-sm transition-all duration-300"
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
        transition={{ duration: 0.3 }}
        className="absolute inset-0 border border-[#FFC066]/20 rounded-xl pointer-events-none"
      />
    </motion.div>
  );
}
