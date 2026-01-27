'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { X } from 'lucide-react';

const galleryCategories = ['All', 'Boats', 'Islands', 'Moments', 'Fishing', 'Beach Picnic'];

const galleryImages = [
  // Boats
  { src: '/images/gallery/boats/1.jpg', category: 'Boats' },
  { src: '/images/gallery/boats/2.jpg', category: 'Boats' },
  { src: '/images/gallery/boats/3.jpg', category: 'Boats' },
  { src: '/images/gallery/boats/4.jpg', category: 'Boats' },
  { src: '/images/gallery/boats/5.jpg', category: 'Boats' },
  { src: '/images/gallery/boats/6.jpg', category: 'Boats' },
  { src: '/images/gallery/boats/7.jpg', category: 'Boats' },
  { src: '/images/gallery/boats/8.jpg', category: 'Boats' },
  
  // Islands
  { src: '/images/gallery/islands/1.jpg', category: 'Islands' },
  { src: '/images/gallery/islands/2.jpg', category: 'Islands' },
  { src: '/images/gallery/islands/3.jpg', category: 'Islands' },
  { src: '/images/gallery/islands/4.jpg', category: 'Islands' },
  { src: '/images/gallery/islands/5.jpg', category: 'Islands' },
  
  // Moments
  { src: '/images/gallery/moments/1.jpg', category: 'Moments' },
  { src: '/images/gallery/moments/2.jpg', category: 'Moments' },
  { src: '/images/gallery/moments/3.jpg', category: 'Moments' },
  { src: '/images/gallery/moments/4.jpg', category: 'Moments' },
  { src: '/images/gallery/moments/5.jpg', category: 'Moments' },
  { src: '/images/gallery/moments/6.jpg', category: 'Moments' },
  
  // Fishing
  { src: '/images/gallery/fishing/1.jpg', category: 'Fishing' },
  { src: '/images/gallery/fishing/2.jpg', category: 'Fishing' },
  { src: '/images/gallery/fishing/3.jpg', category: 'Fishing' },
  
  // Beach Picnic
  { src: '/images/gallery/beach-picnic/1.jpg', category: 'Beach Picnic' },
  { src: '/images/gallery/beach-picnic/2.jpg', category: 'Beach Picnic' },
  { src: '/images/gallery/beach-picnic/3.jpg', category: 'Beach Picnic' },
];

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const filteredImages = selectedCategory === 'All' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1618822461310-da1be362e30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXljaGVsbGVzJTIwYmVhY2h8ZW58MXx8fHwxNzY4NTUxODYxfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Gallery"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-6xl text-primary mb-4">Gallery</h1>
          <p className="text-xl text-foreground/80">
            Moments captured in paradise
          </p>
        </motion.div>
      </section>

      {/* Filter */}
      <section className="py-8 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted/20 border border-border text-foreground/70 hover:text-primary hover:border-primary'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div 
             key={selectedCategory}
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 0.4 }}
             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-amber-500/40 shadow-[0_0_15px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.6)] hover:border-amber-500/80 transition-all duration-500 bg-background"
                onClick={() => setLightboxImage(img.src)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <ImageWithFallback
                    src={img.src || "/placeholder.svg"}
                    alt={`Gallery image ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            onClick={() => setLightboxImage(null)}
            className="absolute top-4 right-4 p-2 bg-primary/20 rounded-full hover:bg-primary/30 transition-colors"
          >
            <X className="w-6 h-6 text-primary" />
          </button>
          <img
            src={lightboxImage || "/placeholder.svg"}
            alt="Lightbox view"
            className="max-w-full max-h-full object-contain rounded-lg"
          />
        </motion.div>
      )}
    </div>
  );
}
