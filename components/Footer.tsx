'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Logo } from '@/components/Logo';
import { Instagram, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-foreground/70 max-w-xs">
              Luxury island experiences in the pristine waters of Seychelles. Premium charters, professional crew, unforgettable memories.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/" className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block">Home</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/about" className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block">About Us</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/gallery" className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block">Gallery</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/contact" className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block">Contact</Link>
                </motion.div>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-primary mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block">Clear Boat Experience</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block">Island Day Cruises</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block">Fishing With The Pro</Link>
                </motion.div>
              </li>
              <li>
                <motion.div whileHover={{ x: 4 }} transition={{ type: 'spring', stiffness: 300 }}>
                  <Link href="/services" className="text-sm text-foreground/70 hover:text-primary transition-colors inline-block">Beach Picnics</Link>
                </motion.div>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-primary mb-4">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone size={16} className="text-primary" />
                <a href="tel:+2482527887" className="hover:text-primary transition-colors">+248 252 78 87</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Phone size={16} className="text-primary" />
                <a href="tel:+2482588123" className="hover:text-primary transition-colors">+248 258 81 23</a>
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground/70">
                <Instagram size={16} className="text-primary" />
                <a href="https://instagram.com/letzgocharters" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">@letzgocharters</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center">
          <p className="text-sm text-foreground/60">
            © {new Date().getFullYear()} Let'z Go Charter. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
