'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Euro, Clock, Users, Ship, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { useState } from 'react';

const toursData = [
  {
    category: 'Clear Boat Experience',
    description: 'Immerse yourself in the underwater world without getting wet',
    image: '/images/clear-boat.jpg',
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
    image: 'https://images.unsplash.com/photo-1618822461310-da1be362e30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXljaGVsbGVzJTIwYmVhY2h8ZW58MXx8fHwxNzY4NTUxODYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    options: [
      {
        name: 'Half Day Cruise',
        duration: '4 hours',
        price: '€750',
        capacity: '4-6 passengers',
        includes: ['St. Anne Marine Park', 'Fish feeding', 'Tortoise feeding on Moyenne Island', 'Seabob snorkeling', 'Sandbank walk', 'Fruit platter & sandwiches', 'Snorkeling equipment & entrance fees'],
      },
      {
        name: 'Full Day Cruise',
        duration: '6 hours',
        price: '€950',
        capacity: '4-6 passengers',
        includes: ['Extended marine park exploration', 'North Coast Cruise', 'Seabob experience', 'Multiple feeding activities', 'Fruit platter & meal', 'All equipment included'],
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
        boats: 'Sally (4 pax) or Let\'z Go (6 pax)',
      },
    ],
  },
  {
    category: 'La Digue & St. Pierre Island',
    description: 'Explore the iconic "Bicycle Island" with granite boulders',
    image: 'https://images.unsplash.com/photo-1762353800112-b32322640632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHR1cnF1b2lzZSUyMHdhdGVyfGVufDF8fHx8MTc2ODU5MjY1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    options: [
      {
        name: 'Full Day Cruise',
        duration: '8 hours',
        price: '€3,450',
        capacity: '4-6 passengers',
        includes: ['Anse Source d\'Argent visit', 'Private buggy or bicycle tour', 'Giant tortoise feeding', 'St. Pierre Island snorkeling', 'Crystal-clear water swimming', 'VIP transfer', 'Full meal & drinks', 'Seabob & snorkeling equipment', 'All entrance fees'],
        boats: 'Sally (4 pax) or Let\'z Go (6 pax)',
      },
    ],
  },
  {
    category: 'Fishing With The Pro',
    description: 'Expert fishing adventure targeting big game fish',
    image: 'https://images.unsplash.com/photo-1710442995783-3640c50c4ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwYm9hdCUyMG9jZWFufGVufDF8fHx8MTc2ODU5MjY1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
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
    image: 'https://images.unsplash.com/photo-1707296819777-f96b799efb41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBpY25pYyUyMGx1eHVyeXxlbnwxfHx8fDE3Njg1OTI2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
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

export default function ToursPage() {
  const [expandedIndex, setExpandedIndex] = useState<string | null>(null);

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
          <h1 className="text-5xl md:text-6xl text-primary mb-4">Our Tours & Experiences</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Detailed pricing and package information
          </p>
        </motion.div>
      </section>

      {/* Tours Details */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {toursData.map((tour, tourIndex) => (
              <motion.div
                key={tour.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: tourIndex * 0.1 }}
                className="premium-card group flex flex-col h-full bg-card/40 backdrop-blur-sm border-border/50 hover:border-primary/50"
              >
                {/* Image Container */}
                <div className="relative h-56 overflow-hidden">
                  <ImageWithFallback
                    src={tour.image || "/placeholder.svg"}
                    alt={tour.category}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h2 className="text-xl font-serif text-primary drop-shadow-sm font-bold">{tour.category}</h2>
                  </div>
                </div>

                {/* Body */}
                <div className="p-5 flex flex-col flex-grow">
                  <p className="text-sm text-foreground/80 mb-6 line-clamp-3">{tour.description}</p>
                  
                  {/* Options */}
                  <div className="space-y-3 mt-auto">
                    {tour.options.map((option, idx) => {
                      const identifier = `${tourIndex}-${idx}`;
                      const isExpanded = expandedIndex === identifier;
                      return (
                        <div key={idx} className="bg-background/40 rounded-lg border border-border/50 overflow-hidden">
                          <button
                            onClick={() => setExpandedIndex(isExpanded ? null : identifier)}
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
                          
                          {/* Expanded Content */}
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
                                  {option.includes.map((item, i) => (
                                    <li key={i} className="flex items-start gap-1.5">
                                      <span className="text-accent">✓</span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                                <p className="pt-1 text-[10px] opacity-70">Capacity: {option.capacity}</p>
                              </div>
                              <Link href="/booking" className="block w-full text-center py-2 mt-2 bg-primary/90 hover:bg-primary text-primary-foreground rounded text-xs transition-colors">
                                Book Now
                              </Link>
                            </div>
                          </motion.div>
                        </div>
                      );
                    })}
                  </div>
                </div>
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
