'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Euro, Clock, Users, Ship, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { useState, useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

const toursData = [
  {
    category: 'VIP Experience',
    description: 'Ultimate luxury on the brand new 64 ft Princess Yacht - Kalindi.',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodHxlbnwxfHx8fDE3Njg2MDk3MDh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    options: [
      {
        name: 'VIP Standard (Half Day)',
        duration: '4 hours',
        price: '€6,800',
        capacity: 'Up to 12 passengers',
        includes: ['Private 64ft Yacht', 'Seabob, jetski, efoil and snorkeling', 'Sandwiches, canapés & drinks', 'Luxury transfer included'],
      },
      {
        name: 'VIP Extravaganza (Full Day)',
        duration: '8 hours',
        price: '€12,500',
        capacity: 'Up to 12 passengers',
        includes: ['Extended Cruising', 'Seabob, jetski, efoil and snorkeling', 'Premium catering', 'VIP transfer in Mercedes/Defender'],
      },
      {
        name: 'VIP + Luxury Picnic',
        duration: 'Full Day',
        price: '€15,000',
        capacity: 'Up to 12 passengers',
        includes: ['All VIP Extravaganza features', 'Private Chef', 'Luxurious beach setup'],
      },
    ],
  },
  {
    category: 'Clear Boat Experience',
    description: 'Explore Seychelles in luxury',
    image: '/images/clear-boat-new.jpg',
    options: [
      {
        name: 'Sharing (Per Person)',
        duration: 'Full Day',
        price: '€135',
        capacity: 'Up to 13 passengers',
        includes: ['St. Anne Marine Park', 'Fish feeding', 'Tortoise feeding', 'Local snacks & sandwiches'],
      },
      {
        name: 'Private Half Day',
        duration: '3 hours',
        price: '€850',
        capacity: 'Full boat',
        includes: ['Crystal clear glass viewing', 'Marine guide', 'Snorkeling equipment', 'Refreshments'],
      },
      {
        name: 'Sunset Cruise',
        duration: '2 hours',
        price: '€550',
        capacity: 'Full boat',
        includes: ['Golden hour experience', 'Drinks & snacks', 'Scenic views'],
      },
    ],
  },
  {
    category: 'Sandbank & St. Anne Marine Park',
    description: 'Explore pristine white sandbanks and vibrant marine life',
    image: '/images/sandbank.jpg',
    options: [
      {
        name: 'Half Day Cruise',
        duration: '4 hours',
        price: '€750',
        capacity: '4-6 passengers',
        includes: ['St. Anne Marine Park', 'Fish feeding', 'Tortoise feeding on Moyenne Island', 'Seabob snorkeling', 'Sandbank walk', 'Fruit platter & sandwiches', 'Snorkeling equipment & entrance fees'],
        boats: '4 boats',
      },
      {
        name: 'Full Day Cruise',
        duration: '6 hours',
        price: '€950',
        capacity: '4-6 passengers',
        includes: ['Extended marine park exploration', 'North Coast Cruise', 'Seabob experience', 'Multiple feeding activities', 'Fruit platter & meal', 'All equipment included'],
        boats: '4 boats',
      },
      {
        name: 'Seabob Add-On',
        duration: 'Included',
        price: '€270',
        capacity: 'Per person',
        includes: ['Underwater scooter experience', 'Enhanced snorkeling'],
      },
    ],
  },
  {
    category: 'Praslin & Curieuse Island',
    description: 'Visit UNESCO World Heritage Site Vallée de Mai and pristine beaches',
    image: 'https://images.unsplash.com/photo-1660315250109-075f6b142ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMHBhcmFkaXNlfGVufDF8fHx8MTc2ODUxNDMzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    options: [
      {
        name: 'Full Day Cruise',
        duration: '8 hours',
        price: '€3,950',
        capacity: '4-6 passengers',
        includes: ['Vallée de Mai UNESCO tour', 'Anse Lazio beach swimming', 'Giant tortoise feeding', 'Curieuse Island snorkeling', 'Private tour guide', 'VIP transfer', 'Full meal & drinks', 'Seabob & snorkeling equipment', 'All entrance fees'],
        boats: '3 boats',
      },
    ],
  },
  {
    category: 'La Digue & St. Pierre Island',
    description: 'Explore the iconic "Bicycle Island" with granite boulders',
    image: '/images/ladigue.jpeg',
    options: [
      {
        name: 'Full Day Cruise',
        duration: '8 hours',
        price: '€3,450',
        capacity: '4-6 passengers',
        includes: ['Anse Source d\'Argent visit', 'Private buggy or bicycle tour', 'Giant tortoise feeding', 'St. Pierre Island snorkeling', 'Crystal-clear water swimming', 'VIP transfer', 'Soft drinks, water and sandwiches', 'Seabob & snorkeling equipment', 'All entrance fees'],
        boats: '3 boats',
      },
    ],
  },
  {
    category: 'Fishing With The Pro',
    description: 'Expert fishing adventure targeting big game fish',
    image: '/images/gallery/fishing/1.jpg',
    options: [
      {
        name: 'Half Day (Near Islands)',
        duration: '4 hours',
        price: '€2,450',
        capacity: 'Up to 6 passengers',
        includes: ['Professional fishing crew', 'Expert guidance', 'Multiple fishing techniques', 'Trolling, jigging, bottom-line', 'Opportunity for marlin, sailfish, snapper, kingfish', 'VIP transfer', 'Meals & drinks', 'All fishing gear'],
      },
      {
        name: 'Full Day (Near Islands)',
        duration: '8 hours',
        price: '€2,900',
        capacity: 'Up to 6 passengers',
        includes: ['Extended fishing time', 'Professional crew & equipment', 'Best fishing spots', 'Possibility to catch trophy fish', 'Dolphin watching opportunity', 'VIP transfer', 'Full meals & drinks', 'All fishing gear'],
      },
      {
        name: 'Full Day (Drop-off)',
        duration: '8 hours',
        price: '€3,350',
        capacity: 'Up to 6 passengers',
        includes: ['Deep sea fishing', '30 nautical miles offshore', 'Prime fishing grounds', 'Professional team', 'VIP transfer', 'Full meals & drinks', 'All premium fishing equipment'],
      },
    ],
  },
  {
    category: 'Prestige Private Beach Picnic',
    description: 'Ultimate luxury - private beach with personal chef BBQ',
    image: '/images/prestige-picnic.jpg',
    options: [
      {
        name: 'Half Day Picnic',
        duration: '4 hours',
        price: '€3,350',
        capacity: 'Maximum 4 passengers',
        includes: ['St. Anne Marine Park exploration', 'Fish & tortoise feeding', 'Seabob snorkeling', 'Private beach setup', 'Private BBQ with personal chef', 'Clear kayaks & paddleboards', 'Fruit platter & champagne', 'Full snorkeling equipment', 'All entrance fees & VIP transfer'],

      },
      {
        name: 'Full Day Picnic',
        duration: '6 hours',
        price: 'Available on request',
        capacity: 'Maximum 4 passengers',
        includes: ['Complete island experience', 'Sandbank relaxation time', 'All marine activities', 'Gourmet private BBQ', 'Premium beverages', 'Water sports equipment', 'Personalized service'],

      },
    ],
  },
];

const renderCardContent = (tour: any, tourIndex: number, expandedIndex: string | null, setExpandedIndex: (id: string | null) => void, getExperienceParam: (cat: string) => string) => (
  <>
    <div className="relative h-56 overflow-hidden shrink-0">
      <ImageWithFallback
        src={tour.image || "/placeholder.svg"}
        alt={tour.category}
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
      <div className="absolute bottom-4 left-4 right-4">
        <h2 className="text-xl font-serif text-primary drop-shadow-sm font-bold">{tour.category}</h2>
      </div>
    </div>
    <div className="p-5 flex flex-col flex-grow">
      <p className="text-sm text-foreground/80 mb-6 shrink-0">{tour.description}</p>
      <div className="space-y-3 my-auto">
        {tour.options.map((option: any, idx: number) => {
          const identifier = `${tourIndex}-${idx}`;
          const isExpanded = expandedIndex === identifier;
          return (
            <div key={idx} className="bg-background/40 rounded-lg border border-border/50 overflow-hidden">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setExpandedIndex(isExpanded ? null : identifier);
                }}
                className="w-full p-3 flex items-center justify-between hover:bg-muted/30 transition-colors text-left"
              >
                <div className="min-w-0 flex-1 pr-2">
                  <div className="font-semibold text-sm text-foreground truncate">{option.name}</div>
                  <div className="text-xs text-muted-foreground">{option.duration}</div>
                </div>
                <div className="text-right flex flex-col items-end shrink-0">
                  <span className="text-sm font-bold text-accent">{option.price}</span>
                  {isExpanded ? <ChevronUp className="w-3 h-3 mt-1" /> : <ChevronDown className="w-3 h-3 mt-1" />}
                </div>
              </button>
              
              <motion.div
                initial={false}
                animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="p-3 pt-0 text-xs text-foreground/70 border-t border-border/30">
                  <div className="py-2 space-y-2">
                    <p className="font-medium text-foreground/90">Includes:</p>
                    <ul className="space-y-1 pl-1">
                      {option.includes.map((item: string, i: number) => (
                        <li key={i} className="flex items-start gap-1.5">
                          <span className="text-accent">✓</span>
                          {item}
                        </li>
                      ))}
                    </ul>
                    <p className="pt-1 text-[10px] opacity-70">Capacity: {option.capacity}</p>
                  </div>
                  <Link href={`/booking?experience=${encodeURIComponent(getExperienceParam(tour.category))}`} className="block w-full text-center py-2 mt-2 bg-primary/90 hover:bg-primary text-primary-foreground rounded text-xs transition-colors" onClick={(e) => e.stopPropagation()}>
                    Book Now
                  </Link>
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  </>
);

function ToursContent() {
  const searchParams = useSearchParams();
  const highlightParam = searchParams.get('highlight');
  
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);
  const [highlightedTour, setHighlightedTour] = useState<string | null>(null);
  const highlightedTourRef = useRef<string | null>(null);

  useEffect(() => {
    if (highlightParam) {
      // First scroll to the element
      setTimeout(() => {
        const element = document.getElementById(highlightParam);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 100);
      
      // Then pop it up after scroll completes
      setTimeout(() => {
        setHighlightedTour(highlightParam);
        highlightedTourRef.current = highlightParam;
      }, 800);
    }
  }, [highlightParam]);

      useEffect(() => {
        const handleClick = () => {
          if (highlightedTourRef.current) {
            setHighlightedTour(null);
            highlightedTourRef.current = null;
          }
        };
        setTimeout(() => window.addEventListener('click', handleClick), 500);
        return () => window.removeEventListener('click', handleClick);
      }, [highlightedTour]);

  const getExperienceParam = (category: string) => {
    if (category === 'Praslin & Curieuse Island') return 'Praslin & Curieuse Island Cruise';
    if (category === 'La Digue & St. Pierre Island') return 'La Digue & St. Pierre Island Cruise';
    return category;
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1658305808929-4825d131c245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2F0JTIwc2V5Y2hlbGxlc3xlbnwxfHx8fDE3Njg1OTI2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our tours"
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
          <h1 className="text-5xl md:text-6xl text-primary mb-4">Our Tours & Packages</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Detailed pricing and package information
          </p>
        </motion.div>
      </section>

      {/* Tours Details */}
      <section className="py-20 relative min-h-[60vh]">
        <AnimatePresence>
          {highlightedTour && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-[99] bg-background/80 backdrop-blur-xl"
                onClick={() => {
                  setHighlightedTour(null);
                  highlightedTourRef.current = null;
                }}
              />
              <div className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none px-4 py-8">
                {toursData.filter(t => t.category === highlightedTour).map((tour) => (
                  <motion.div
                    layoutId={`card-${tour.category}`}
                    key={`modal-${tour.category}`}
                    className="w-[90vw] max-w-[420px] flex flex-col bg-card/95 backdrop-blur-md rounded-xl ring-1 ring-border shadow-2xl pointer-events-auto overflow-y-auto mx-auto"
                    style={{ maxHeight: '90vh' }}
                    onClick={(e) => e.stopPropagation()}
                    transition={{ type: 'spring', bounce: 0.15, duration: 0.8 }}
                  >
                    {renderCardContent(tour, toursData.indexOf(tour), expandedIndex, setExpandedIndex, getExperienceParam)}
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </AnimatePresence>

        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursData.map((tour, tourIndex) => (
              <motion.div
                layoutId={`card-${tour.category}`}
                key={tour.category}
                id={tour.category}
                onClick={() => {
                  setHighlightedTour(tour.category);
                  highlightedTourRef.current = tour.category;
                }}
                className="premium-card group flex flex-col h-full bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50 cursor-pointer overflow-hidden transition-colors"
                transition={{ type: 'spring', bounce: 0.15, duration: 0.8 }}
              >
                {renderCardContent(tour, tourIndex, expandedIndex, setExpandedIndex, getExperienceParam)}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-muted/20 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl text-primary mb-6">Ready to Book Your Adventure?</h2>
          <p className="text-foreground/80 mb-8 max-w-2xl mx-auto">
            Contact us directly via WhatsApp or email for personalized recommendations and special requests
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2482527887"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium"
            >
              WhatsApp: +248 252 78 87
            </a>
            <a
              href="https://wa.me/2482588123"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 bg-accent text-accent-foreground rounded-md hover:bg-accent/90 transition-colors font-medium"
            >
              WhatsApp: +248 258 81 23
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function ToursPage() {
  return (
    <Suspense fallback={<div className="min-h-screen pt-20 flex items-center justify-center">Loading...</div>}>
      <ToursContent />
    </Suspense>
  );
}
