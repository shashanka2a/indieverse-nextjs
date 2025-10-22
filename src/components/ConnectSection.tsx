'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail } from 'lucide-react';

export function ConnectSection() {
  const socialLinks = [
    {
      icon: Instagram,
      label: 'Instagram',
      href: 'https://instagram.com/indieverse.art',
      username: '@indieverse.art',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:hello@indieverse.art',
      username: 'hello@indieverse.art',
    },
  ];

  return (
    <section className="relative px-4 md:px-8 py-24 md:py-32">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="font-serif text-4xl md:text-5xl mb-6"
        >
          Connect With Us
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-[#CFCFCF] mb-16 max-w-2xl mx-auto"
        >
          Join our community of film lovers and stay updated on the latest releases, 
          screenings, and behind-the-scenes stories.
        </motion.p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
          {socialLinks.map((link, index) => {
            const Icon = link.icon;
            return (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group flex items-center gap-4 p-6 rounded-2xl bg-[#1A1A1A] hover:bg-[#222222] transition-all duration-400 min-w-[280px]"
              >
                <div className="p-4 rounded-xl bg-[#FFC066]/10 group-hover:bg-[#FFC066]/20 transition-colors duration-400">
                  <Icon className="w-6 h-6 text-[#FFC066]" />
                </div>
                <div className="text-left">
                  <p className="text-sm text-[#CFCFCF]/60 mb-1">{link.label}</p>
                  <p className="text-white">{link.username}</p>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
