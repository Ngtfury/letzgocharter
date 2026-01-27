'use client';

import { motion } from 'motion/react';
import { Heart, Shield, Leaf, Award } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';

const values = [
  { icon: Award, title: 'Excellence', description: 'Unwavering commitment to the highest standards' },
  { icon: Shield, title: 'Safety', description: 'Your security is our top priority' },
  { icon: Heart, title: 'Comfort', description: 'Luxurious experiences tailored to you' },
  { icon: Leaf, title: 'Sustainability', description: 'Protecting the oceans we love' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1658305808929-4825d131c245?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBib2F0JTIwc2V5Y2hlbGxlc3xlbnwxfHx8fDE3Njg1OTI2NTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="About us"
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
          <h1 className="text-5xl md:text-6xl text-primary mb-4">About Let'z Go Charter</h1>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Your gateway to unforgettable island experiences
          </p>
        </motion.div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl text-primary mb-6">Our Story</h2>
              <p className="text-lg text-foreground/80 leading-relaxed mb-6">
                Born from a passion for the pristine waters and stunning islands of Seychelles, Let'z Go Charter was founded to share the magic of these tropical paradises with the world. We believe that every journey should be more than just a trip—it should be a memory that lasts a lifetime.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our team of experienced captains, guides, and hospitality professionals work tirelessly to ensure every detail of your experience is perfect. From the moment you step aboard to the time you return to shore, we're dedicated to creating moments of pure joy and wonder.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl text-primary mb-6">Our Mission</h2>
              <p className="text-xl text-foreground/80 leading-relaxed">
                To provide premium, personalized charter experiences that showcase the natural beauty of Seychelles while maintaining the highest standards of safety, sustainability, and service excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-primary mb-4">Our Values</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-10 h-10 text-primary" />
                </div>
                <h3 className="text-2xl text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Overview */}
      <section className="py-20 bg-muted/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl text-primary mb-6">Our Fleet</h2>
            <p className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12">
              Modern, well-maintained vessels equipped with state-of-the-art safety equipment and luxurious amenities
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1762353800112-b32322640632?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB5YWNodCUyMHR1cnF1b2lzZSUyMHdhdGVyfGVufDF8fHx8MTc2ODU5MjY1Nnww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Luxury yacht"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                <h3 className="text-2xl text-primary mb-2">Luxury Day Cruiser</h3>
                <p className="text-foreground/80">Capacity: Up to 12 guests</p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative overflow-hidden rounded-lg"
            >
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1593033166622-49e87e744422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGVhciUyMGdsYXNzJTIwYm9hdCUyMG9jZWFufGVufDF8fHx8MTc2ODU5MjY1N3ww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Clear boat"
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-background to-transparent p-6">
                <h3 className="text-2xl text-primary mb-2">Clear Glass Boat</h3>
                <p className="text-foreground/80">Capacity: Up to 8 guests</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
