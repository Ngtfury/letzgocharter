'use client';

import { useState } from 'react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string | string[];
  alt: string;
  className?: string;
}

export function ImageSlider({ images, alt, className = '' }: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesArray = Array.isArray(images) ? images : [images];

  if (imagesArray.length <= 1) {
    return (
      <ImageWithFallback
        src={imagesArray[0] || '/placeholder.svg'}
        alt={alt}
        className={className}
      />
    );
  }

  const handlePrevious = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? imagesArray.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === imagesArray.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full h-full group/slider overflow-hidden">
      <ImageWithFallback
        src={imagesArray[currentIndex]}
        alt={`${alt} - Image ${currentIndex + 1}`}
        className={className}
      />
      
      {/* Slider Controls */}
      <div className="absolute inset-0 flex items-center justify-between p-2 opacity-100 pointer-events-none z-20">
        <button
          onClick={handlePrevious}
          className="pointer-events-auto bg-black/60 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-sm transition-all shadow-xl border border-white/20"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={handleNext}
          className="pointer-events-auto bg-black/60 hover:bg-black/80 text-white rounded-full p-2 backdrop-blur-sm transition-all shadow-xl border border-white/20"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>
      
      {/* Dots Indicator */}
      <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5 z-10 pb-4">
        {imagesArray.map((_, idx) => (
          <div
            key={idx}
            className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
              idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
