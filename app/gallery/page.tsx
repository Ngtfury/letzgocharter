'use client';

import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { X } from 'lucide-react';

const galleryCategories = ['All', 'Boats', 'Islands', 'Moments', 'Fishing', 'Beach Picnic', 'More'];

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
  { src: '/images/gallery/moments/7.JPG', category: 'Moments' },
  { src: '/images/gallery/moments/8.JPG', category: 'Moments' },
  { src: '/images/gallery/moments/9.jpg', category: 'Moments' },
  
  // Fishing
  { src: '/images/gallery/fishing/1.jpg', category: 'Fishing' },
  { src: '/images/gallery/fishing/2.jpg', category: 'Fishing' },
  { src: '/images/gallery/fishing/3.jpg', category: 'Fishing' },
  
  // Beach Picnic
  { src: '/images/gallery/beach-picnic/1.jpg', category: 'Beach Picnic' },
  { src: '/images/gallery/beach-picnic/2.jpg', category: 'Beach Picnic' },
  { src: '/images/gallery/beach-picnic/3.jpg', category: 'Beach Picnic' },
  
  // More
  ...[
    "DJI_20260417112101_0705_D.JPG", "DJI_20260417112133_0712_D.JPG", "DJI_20260417112724_0723_D.JPG",
    "DJI_20260417115458_0743_D.JPG", "DJI_20260417115520_0744_D.JPG", "IMG_3366.jpg", "IMG_3373.jpg",
    "IMG_3377.MOV", "IMG_3378.MOV", "IMG_3381.jpg", "IMG_3393.jpg", "IMG_3405.MOV", "IMG_3413.MOV",
    "IMG_4219.jpg", "IMG_4236.jpg", "IMG_4239.jpg", "IMG_4241.jpg", "IMG_4252.jpg", "IMG_4271.jpg",
    "IMG_4285.jpg", "IMG_4288.jpg", "IMG_4292.jpg", "IMG_4297.jpg", "IMG_4312.jpg", "_A7R4649.JPG",
    "_A7R4675.JPG", "_A7R4782.JPG", "_DSC4594.JPG", "_DSC4613.JPG"
  ].map(file => ({ src: `/images/gallerymore/${file}`, category: 'More' }))
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
            src="/images/sandbank.jpg"
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
            {filteredImages.map((img, index) => {
              const isVideo = img.src.toLowerCase().endsWith('.mov') || img.src.toLowerCase().endsWith('.mp4');
              return (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true, margin: "50px" }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-amber-500/40 shadow-[0_0_15px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.6)] hover:border-amber-500/80 transition-all duration-500 bg-background"
                onClick={() => setLightboxImage(img.src)}
              >
                <div className="relative h-48 w-full overflow-hidden">
                  {isVideo ? (
                    <>
                      <video
                        src={img.src}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-black/50 rounded-full flex items-center justify-center border border-white/20 backdrop-blur-sm">
                          <div className="w-0 h-0 border-t-8 border-t-transparent border-l-[12px] border-l-white border-b-8 border-b-transparent ml-1" />
                        </div>
                      </div>
                    </>
                  ) : (
                    <ImageWithFallback
                      src={img.src || "/placeholder.svg"}
                      alt={`Gallery image ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
              </motion.div>
              );
            })}
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
          {lightboxImage?.toLowerCase().endsWith('.mov') || lightboxImage?.toLowerCase().endsWith('.mp4') ? (
            <video
              src={lightboxImage}
              className="max-w-full max-h-full object-contain rounded-lg"
              controls
              autoPlay
              playsInline
            />
          ) : (
            <img
              src={lightboxImage || "/placeholder.svg"}
              alt="Lightbox view"
              className="max-w-full max-h-full object-contain rounded-lg"
            />
          )}
        </motion.div>
      )}
    </div>
  );
}
