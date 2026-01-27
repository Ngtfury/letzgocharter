'use client';

import Link from 'next/link';
import { motion } from 'motion/react';
import { Clock, Users, ArrowRight } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const services = [
  {
    title: 'Clear Boat Experience',
    description: 'Hop aboard our amazing clear boat and cruise across crystal clear waters to St. Anne Marine Park. Spot marine species, sea turtles, and enjoy exciting fish & tortoise feeding.',
    image: 'https://images.unsplash.com/photo-1593033166622-49e87e744422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhciUyMGdsYXNzJTIwYm9hdCUyMG9jZWFufGVufDF8fHx8MTc2ODU5MjY1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'St. Anne Marine Park exploration',
      'Fish & tortoise feeding',
      'Scenic tour of Moyenne Island, Long Island & Sandbank',
      'Local snacks, soft drinks & fresh sandwiches',
      'Marine Park & island entrance fees included',
    ],
    duration: '3 hours',
    capacity: '13 passengers maximum',
    pricing: {
      sharing: '€135 per person',
      halfDay: '€850 (3 hrs)',
      additionalHour: '€200 per hour',
      sunset: '€550 (2 hrs)',
    },
    details: 'Transfer at resort 30 mins prior. Multiple pricing options available.',
  },
  {
    title: 'Sandbank & St. Anne Marine Park',
    description: 'Perfect day of island fun exploring pristine sandbanks at St. Anne Marine Park, feeding fish at Moyenne Island, meeting giant tortoises, snorkeling in crystal-clear waters.',
    image: 'https://images.unsplash.com/photo-1618822461310-da1be362e30c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZXljaGVsbGVzJTIwYmVhY2h8ZW58MXx8fHwxNzY4NTUxODYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'Explore pristine sandbanks',
      'St. Anne Marine Park with fish feeding',
      'Giant tortoise feeding on Moyenne Island',
      'Seabob snorkeling experience',
      'Fruit platters & fresh sandwiches included',
    ],
    duration: 'Half Day: 4 hrs | Full Day: 6 hrs',
    capacity: '4-6 passengers (varies by boat)',
    pricing: {
      halfDay4hrs: '€750',
      fullDay6hrs: '€950',
      sunset2hrs: '€550',
      seabob: 'Optional - €270',
    },
    details: 'VIP transfer 30 mins prior. Snorkeling equipment & entrance fees included.',
    boats: 'Sally (Chris Craft 36ft, 4 pax) | Let\'z Go (IMG 40ft, 6 pax) | Sandbank (24ft Robalo)',
  },
  {
    title: 'Praslin & Curieuse Island Full Day Cruise',
    description: 'Enjoy a day trip to Praslin Island. Visit Vallée de Mai (UNESCO World Heritage Site), swim at the famous Anse Lazio beach, and cruise around Curieuse Island.',
    image: 'https://images.unsplash.com/photo-1660315250109-075f6b142ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMHBhcmFkaXNlfGVufDF8fHx8MTc2ODUxNDMzM3ww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'Vallée de Mai UNESCO World Heritage Site',
      'Anse Lazio - one of world\'s famous beaches',
      'Giant tortoise feeding',
      'Curieuse Island snorkeling',
      'Private guided tour included',
    ],
    duration: 'Full Day (8 hours)',
    capacity: '4-6 passengers',
    pricing: '€3,950',
    details: 'Departure 9 AM (flexible). VIP transfer 45 mins prior. Fruit platter, soft drinks, fresh sandwiches, snorkeling equipment, Seabob & entrance fees included.',
    boats: 'Sally (Chris Craft 36ft, 4 pax) | Let\'z Go (IMG 40ft, 6 pax)',
  },
  {
    title: 'La Digue & St. Pierre Island Full Day Cruise',
    description: 'Visit the charming "Bicycle Island" of La Digue with iconic granite boulders at Anse Source d\'Argent. Cruise around St. Pierre Island for swimming and snorkeling.',
    image: 'https://images.unsplash.com/photo-1762353800112-b32322640632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHR1cnF1b2lzZSUyMHdhdGVyfGVufDF8fHx8MTc2ODU5MjY1Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'Anse Source d\'Argent - iconic picturesque beach',
      'Private buggy or bicycle tour of La Digue',
      'Giant tortoise feeding',
      'St. Pierre Island snorkeling',
      'Crystal-clear waters & scenic beauty',
    ],
    duration: 'Full Day (8 hours)',
    capacity: '4-6 passengers',
    pricing: '€3,450',
    details: 'Departure 9 AM (flexible). VIP transfer 45 mins prior. Fruit platter, soft drinks, fresh sandwiches, snorkeling equipment, private buggy/bicycle tour & entrance fees included.',
    boats: 'Sally (Chris Craft 36ft, 4 pax) | Let\'z Go (IMG 40ft, 6 pax)',
  },
  {
    title: 'Fishing With The Pro',
    description: 'From amateurs to professionals, join our expert crew at the best fishing spots around the islands. Opportunity to catch marlin, sailfish, red snapper, kingfish and more.',
    image: 'https://images.unsplash.com/photo-1710442995783-3640c50c4ab3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoaW5nJTIwYm9hdCUyMG9jZWFufGVufDF8fHx8MTc2ODU5MjY1N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'Professional fishing crew & expertise',
      'Prime fishing spots around islands',
      'Opportunity to see dolphins',
      'Multiple fishing techniques (trolling, jigging, bottom line)',
      'All fishing gear provided',
    ],
    duration: 'Half Day (4 hrs) or Full Day (8 hrs)',
    capacity: 'Maximum 6 passengers',
    pricing: {
      halfDayNear: '€2,450',
      fullDayNear: '€2,900',
      fullDayDropoff: '€3,350 (30 knot miles)',
    },
    details: 'Departure 8 AM. VIP transfer 45 mins prior. Fruit platter, soft drinks, fresh sandwiches & fishing gear included.',
  },
  {
    title: 'Prestige Private Beach Picnic',
    description: 'The ultimate luxury experience - private beach setup at St. Anne Marine Park with exclusive amenities. Enjoy fish feeding, tortoise feeding, and a private BBQ with your own chef.',
    image: 'https://images.unsplash.com/photo-1707296819777-f96b799efb41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiZWFjaCUyMHBpY25pYyUyMGx1eHVyeXxlbnwxfHx8fDE3Njg1OTI2NTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    highlights: [
      'St. Anne Marine Park exploration',
      'Fish & tortoise feeding',
      'Seabob snorkeling experience',
      'Sandbank relaxation',
      'Private BBQ with personal chef',
      'Clear kayaks & paddleboards included',
    ],
    duration: '4-6 hours (flexible)',
    capacity: 'Maximum 4 passengers',
    pricing: '€3,350',
    details: 'Departure 8 AM - 12 PM or 1 PM - 5 PM. VIP transfer 45 mins prior. Fruit platter, soft drinks, fresh sandwiches, snorkeling equipment, clear kayaks, paddleboards, Seabob & entrance fees included.',
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1658305808929-4825d131c245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2F0JTIwc2V5Y2hlbGxlc3xlbnwxfHx8fDE3Njg1OTI2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Our services"
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
          <h1 className="text-5xl md:text-6xl text-primary mb-4">Our Services</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Curated experiences for unforgettable memories
          </p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="group relative h-full"
              >
                {/* Golden Glow Background */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-transparent rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Card Border with Golden Glow */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/30 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                
                {/* Main Card */}
                <div className="premium-card relative h-full flex flex-col">
                  
                  {/* Image Container */}
                  <div className="relative h-64 overflow-hidden">
                    <ImageWithFallback
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-muted" />
                  </div>

                  {/* Content Container */}
                  <div className="flex-1 p-8 flex flex-col">
                    
                    {/* Title & Description */}
                    <h2 className="text-2xl md:text-3xl text-primary mb-3 font-serif">{service.title}</h2>
                    <p className="text-sm md:text-base text-foreground/80 mb-6 line-clamp-3">{service.description}</p>

                    {/* Quick Info */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center gap-2 p-3 bg-primary/10 rounded-lg">
                        <Clock className="w-4 h-4 text-primary flex-shrink-0" />
                        <span className="text-xs md:text-sm text-foreground/70">{service.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 p-3 bg-accent/10 rounded-lg">
                        <Users className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-xs md:text-sm text-foreground/70">{service.capacity}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Highlights</h3>
                      <ul className="space-y-1">
                        {service.highlights.slice(0, 3).map((highlight, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-xs text-foreground/70">
                            <span className="text-primary mt-1 flex-shrink-0">•</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    {service.pricing && (
                      <div className="mb-6">
                        <h3 className="text-sm font-semibold text-primary mb-2 uppercase tracking-wide">Starting from</h3>
                        {typeof service.pricing === 'string' ? (
                          <p className="text-xl md:text-2xl font-serif text-accent">{service.pricing}</p>
                        ) : (
                          <p className="text-lg md:text-xl font-serif text-accent">
                            {Object.values(service.pricing)[0]}
                          </p>
                        )}
                      </div>
                    )}

                    {/* Book Button */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="mt-auto"
                    >
                      <Link
                        href="/booking"
                        className="block w-full px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-lg hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-medium text-center text-sm uppercase tracking-wide"
                      >
                        View Details & Book
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
