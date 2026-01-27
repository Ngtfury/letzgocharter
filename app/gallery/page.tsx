'use client';

import { motion } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { X } from 'lucide-react';

const galleryCategories = ['All', 'Boats', 'Islands', 'Clear Boat', 'Fishing', 'Beach Picnic'];

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1762353800112-b32322640632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHR1cnF1b2lzZSUyMHdhdGVyfGVufDF8fHx8MTc2ODU5MjY1Nnww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Boats' },
  { src: 'https://images.unsplash.com/photo-1658305808929-4825d131c245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2F0JTIwc2V5Y2hlbGxlc3xlbnwxfHx8fDE3Njg1OTI2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Boats' },
  { src: 'https://images.unsplash.com/photo-1593033166622-49e87e744422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhciUyMGdsYXNzJTIwYm9hdCUyMG9jZWFufGVufDF8fHx8MTc2ODU5MjY1N3ww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Clear Boat' },
  { src: 'https://images.unsplash.com/photo-1707296819777-f96b799efb41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBpY25pYyUyMGx1eHVyeXxlbnwxfHx8fDE3Njg1OTI2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Beach Picnic' },
  { src: 'https://images.unsplash.com/photo-1710442995783-3640c50c4ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwYm9hdCUyMG9jZWFufGVufDF8fHx8MTc2ODU5MjY1N3ww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Fishing' },
  { src: 'https://images.unsplash.com/photo-1660315250109-075f6b142ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMHBhcmFkaXNlfGVufDF8fHx8MTc2ODUxNDMzM3ww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Islands' },
  { src: 'https://images.unsplash.com/photo-1618822461310-da1be362e30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXljaGVsbGVzJTIwYmVhY2h8ZW58MXx8fHwxNzY4NTUxODYxfDA&ixlib=rb-4.1.0&q=80&w=1080', category: 'Islands' },
  { src: 'https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc2ODQ5MTc4NXww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Boats' },
  { src: 'https://images.unsplash.com/photo-1762353800112-b32322640632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHR1cnF1b2lzZSUyMHdhdGVyfGVufDF8fHx8MTc2ODU5MjY1Nnww&ixlib=rb-4.1.0&q=80&w=1080', category: 'Boats' },
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((img, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setLightboxImage(img.src)}
              >
                <ImageWithFallback
                  src={img.src || "/placeholder.svg"}
                  alt={`Gallery image ${index + 1}`}
                  className="w-full h-64 object-cover hover:scale-110 transition-transform duration-500"
                />
              </motion.div>
            ))}
          </div>
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
