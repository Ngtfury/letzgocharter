'use client';

import { motion } from 'motion/react';
import { Phone, Mail, Instagram, MapPin, Send } from 'lucide-react';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import { useForm } from 'react-hook-form';

export default function ContactPage() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: unknown) => {
    const formData = data as Record<string, unknown>;
    const message = `
Contact Form Submission

Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}

Message:
${formData.message}
    `.trim();

    const whatsappUrl = `https://wa.me/2482527887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    reset();
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1660315250109-075f6b142ebc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0cm9waWNhbCUyMGlzbGFuZCUyMHBhcmFkaXNlfGVufDF8fHx8MTc2ODUxNDMzM3ww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Contact us"
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
          <h1 className="text-5xl md:text-6xl text-primary mb-4">Contact Us</h1>
          <p className="text-xl text-foreground/80">
            We're here to help plan your perfect experience
          </p>
        </motion.div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl text-primary mb-8">Get in Touch</h2>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl text-primary mb-2">Phone</h3>
                    <p className="text-foreground/80">
                      <a href="tel:+2482527887" className="hover:text-primary transition-colors">
                        +248 252 78 87
                      </a>
                    </p>
                    <p className="text-foreground/80">
                      <a href="tel:+2482588123" className="hover:text-primary transition-colors">
                        +248 258 81 23
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Instagram className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl text-primary mb-2">Instagram</h3>
                    <p className="text-foreground/80">
                      <a 
                        href="https://instagram.com/letzgocharters" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary transition-colors"
                      >
                        @letzgocharters
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl text-primary mb-2">Location</h3>
                    <p className="text-foreground/80">
                      Eden Island, Seychelles
                    </p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="rounded-lg overflow-hidden border border-border h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3943.9805944489673!2d55.47279!3d-4.614722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNMKwMzYnNTMuMCJTIDU1wrAyOCcyMi4wIkU!5e0!3m2!1sen!2s!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Eden Island, Seychelles"
                />
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-muted/20 border border-border rounded-lg p-8">
                <h2 className="text-3xl text-primary mb-6">Send us a Message</h2>
                
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">Name</label>
                    <input
                      type="text"
                      {...register('name', { required: 'Name is required' })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Your name"
                    />
                    {errors.name && (
                      <p className="text-destructive text-sm mt-2">{String(errors.name.message)}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">Email</label>
                    <input
                      type="email"
                      {...register('email', { required: 'Email is required', pattern: { value: /^\S+@\S+$/i, message: 'Invalid email' } })}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="your@email.com"
                    />
                    {errors.email && (
                      <p className="text-destructive text-sm mt-2">{String(errors.email.message)}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">Phone</label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="+248 XXX XXXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-foreground/70 mb-2">Message</label>
                    <textarea
                      {...register('message', { required: 'Message is required' })}
                      rows={6}
                      className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                      placeholder="Tell us how we can help..."
                    />
                    {errors.message && (
                      <p className="text-destructive text-sm mt-2">{String(errors.message.message)}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-medium flex items-center justify-center gap-2"
                  >
                    <Send className="w-5 h-5" />
                    Send Message via WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
