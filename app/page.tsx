'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Anchor, Users, MapPin, Shield, Award, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const carouselImages = [
  {
    src: "https://images.unsplash.com/photo-1762353800112-b32322640632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHR1cnF1b2lzZSUyMHdhdGVyfGVufDF8fHx8MTc2ODU5MjY1Nnww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Luxury Yacht Adventures",
    subtitle: "Explore pristine waters in style"
  },
  {
    src: "/images/gallery/islands/1.jpg",
    title: "Island Cruising",
    subtitle: "Discover hidden gems of Seychelles"
  },
  {
    src: "/images/gallery/boats/1.jpg",
    title: "Premium Charters",
    subtitle: "Experience the ultimate in luxury"
  },
  {
    src: "/images/gallery/moments/1.jpg",
    title: "Unforgettable Moments",
    subtitle: "Create memories that last a lifetime"
  },
  {
    src: "/images/gallery/fishing/1.jpg",
    title: "Deep Sea Fishing",
    subtitle: "Adventure awaits in the deep blue"
  }
];

const experiences = [
  {
    title: 'Clear Boat Experience',
    description: 'Explore the underwater world without getting wet',
    image: '/images/clear-boat.jpg',
  },
  {
    title: 'Sandbank & Marine Park',
    description: 'Pristine sandbanks and vibrant coral reefs',
    image: 'https://images.unsplash.com/photo-1618822461310-da1be362e30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXljaGVsbGVzJTIwYmVhY2h8ZW58MXx8fHwxNzY4NTUxODYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
  },
  {
    title: 'Island Day Cruises',
    description: 'Discover Praslin, La Digue & more',
    image: '/images/gallery/islands/2.jpg',
  },
  {
    title: 'Fishing With The Pro',
    description: 'Deep sea fishing with expert guides',
    image: '/images/gallery/fishing/1.jpg',
  },
  {
    title: 'Prestige Beach Picnic',
    description: 'Exclusive beach dining experiences',
    image: 'https://images.unsplash.com/photo-1707296819777-f96b799efb41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBpY25pYyUyMGx1eHVyeXxlbnwxfHx8fDE3Njg1OTI2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
  },
];

const features = [
  { icon: Anchor, title: 'Premium Charters', description: 'Luxury vessels with top-tier amenities' },
  { icon: Users, title: 'Professional Crew', description: 'Experienced captains and guides' },
  { icon: MapPin, title: 'Handpicked Islands', description: 'Exclusive access to hidden gems' },
  { icon: Shield, title: 'All-Inclusive Luxury', description: 'Everything you need, provided' },
  { icon: Award, title: 'Small Groups Only', description: 'Intimate, personalized experiences' },
];

const testimonials = [
  {
    name: 'Sarah & Michael',
    text: "Our honeymoon with Let'z Go Charter was absolutely magical. The clear boat experience was breathtaking!",
    rating: 5,
  },
  {
    name: 'The Johnson Family',
    text: 'Perfect day out with the kids. The crew was amazing and made everyone feel special.',
    rating: 5,
  },
  {
    name: 'David Laurent',
    text: 'The fishing trip exceeded all expectations. Caught my biggest fish ever with their expert guidance.',
    rating: 5,
  },
];

const galleryImages = [
  { src: '/images/gallery/boats/1.jpg', category: 'Boats' },
  { src: '/images/gallery/islands/1.jpg', category: 'Islands' },
  { src: '/images/gallery/moments/1.jpg', category: 'Moments' },
  { src: '/images/gallery/fishing/1.jpg', category: 'Fishing' },
  { src: '/images/gallery/beach-picnic/1.jpg', category: 'Beach Picnic' },
];

export default function HomePage() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + carouselImages.length) % carouselImages.length);

  return (
    <div className="min-h-screen">
      {/* Hero Carousel Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Carousel Images */}
        {carouselImages.map((image, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: index === currentSlide ? 1 : 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <ImageWithFallback
              src={image.src || "/placeholder.svg"}
              alt={image.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
          </motion.div>
        ))}

        {/* Carousel Controls - Previous Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={prevSlide}
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full transition-all"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-6 h-6" />
        </motion.button>

        {/* Carousel Controls - Next Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={nextSlide}
          className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 p-3 bg-primary/80 hover:bg-primary text-primary-foreground rounded-full transition-all"
          aria-label="Next slide"
        >
          <ChevronRight className="w-6 h-6" />
        </motion.button>

        {/* Carousel Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {carouselImages.map((_, index) => (
            <motion.button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all ${
                index === currentSlide ? 'bg-primary w-8' : 'bg-primary/50 w-2 hover:bg-primary/75'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 container mx-auto px-4 text-center"
        >
          <h1 className="text-5xl md:text-7xl text-primary mb-6">
            Luxury Island Experiences<br />in Seychelles
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-3xl mx-auto">
            Private Charters • Island Cruises • Clear Boat • Beach Picnics
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/booking"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              Book Now
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-primary text-primary rounded-md hover:bg-primary/10 transition-colors text-lg font-medium"
            >
              Explore Experiences
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-4">Why Choose Us</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Experience the ultimate in luxury and professionalism
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <feature.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-foreground/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Experiences */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-4">Our Experiences</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Curated adventures for every dream
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-lg aspect-[4/3] cursor-pointer"
              >
                <ImageWithFallback
                  src={exp.image || "/placeholder.svg"}
                  alt={exp.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-2xl text-primary mb-2">{exp.title}</h3>
                  <p className="text-foreground/80">{exp.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-block px-8 py-3 border-2 border-primary text-primary rounded-md hover:bg-primary/10 transition-colors font-medium"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-4">Gallery</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
              Glimpses of paradise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {galleryImages.map((img, index) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group relative overflow-hidden rounded-xl cursor-pointer border border-amber-500/40 shadow-[0_0_15px_-5px_rgba(245,158,11,0.3)] hover:shadow-[0_0_35px_-5px_rgba(245,158,11,0.6)] hover:border-amber-500/80 transition-all duration-500 bg-background"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <ImageWithFallback
                    src={img.src || "/placeholder.svg"}
                    alt={img.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-4 left-4 z-10">
                    <span className="text-white text-lg font-medium drop-shadow-md">{img.category}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/gallery"
              className="inline-block px-8 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all hover:scale-105 shadow-lg shadow-primary/25"
            >
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-4">What Our Guests Say</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-muted/20 border border-border rounded-lg p-6"
              >
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_: unknown, i: number) => (
                    <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground/80 mb-4 italic">"{testimonial.text}"</p>
                <p className="text-primary font-medium">— {testimonial.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary/10">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl text-primary mb-6">
              Your Journey to Paradise Starts Here
            </h2>
            <Link
              href="/booking"
              className="inline-block px-10 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
            >
              Book Your Experience
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
