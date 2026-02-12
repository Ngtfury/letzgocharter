'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, Users, Mail, Phone, MessageSquare, Ship, ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useForm, Controller } from 'react-hook-form';
import { ImageWithFallback } from '@/components/ImageWithFallback';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const experiences = [
  'Clear Boat Experience',
  'Sandbank & St. Anne Marine Park',
  'Praslin & Curieuse Island Cruise',
  'La Digue & St. Pierre Island Cruise',
  'Fishing With The Pro',
  'Prestige Private Beach Picnic',
];

const extras = [
  { name: 'Seabob Water Scooter', price: '€270' },
  { name: 'Private Beach Picnic BBQ Setup', price: 'Included in package' },
  { name: 'Jet Ski Rental (Optional)', price: 'Available upon request' },
  { name: 'Clear Kayaks & Paddleboards', price: 'Included in Prestige Picnic' },
];

const boats = [
  {
    id: 'sally',
    name: 'Sally',
    image: '/images/sally.jpeg',
    description: 'A classic luxury experience with premium amenities.'
  },
  {
    id: 'letzgoboat',
    name: 'LetzGoBoat',
    image: '/images/DSC02979.jpg',
    //
    description: 'Modern, fast, and perfect for island hopping.'
  }
];

export default function BookingPage() {
  const [selectedBoat, setSelectedBoat] = useState<string | null>(null);
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: any) => {
    const message = `
🚢 *NEW BOOKING REQUEST*
Boat: ${selectedBoat?.toUpperCase()}
Experience: ${data.experience}
Date: ${data.date}
Guests: ${data.guests}

✨ *Extras:* ${data.extras ? (Array.isArray(data.extras) ? data.extras.join(', ') : data.extras) : 'None'}

👤 *Contact Details:*
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}

📝 *Special Requests:*
${data.specialRequests || 'None'}
    `.trim();

    const whatsappUrl = `https://wa.me/2482527887?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="min-h-screen pt-20 bg-background">
      {/* Hero Section */}
      <section className="relative h-[35vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?q=80&w=1080"
            alt="Book your experience"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/20 to-background" />
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative z-10 text-center px-4"
        >
          <h1 className="text-5xl md:text-7xl font-light text-primary mb-2">Book Your Journey</h1>
          <p className="text-lg text-foreground/60 uppercase tracking-widest">
            {selectedBoat ? `Step 2: Details for ${selectedBoat}` : 'Step 1: Choose Your Vessel'}
          </p>
        </motion.div>
      </section>

      <section className="pb-20 pt-10">
        <div className="container mx-auto px-4 max-w-5xl">
          
          <AnimatePresence mode="wait">
            {!selectedBoat ? (
              /* BOAT SELECTION STEP */
              <motion.div
                key="boat-selection"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, x: -100 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {boats.map((boat) => (
                  <motion.div
                    key={boat.id}
                    whileHover={{ y: -10 }}
                    onClick={() => setSelectedBoat(boat.name)}
                    className="group cursor-pointer relative rounded-2xl overflow-hidden border border-border bg-muted/10 transition-all hover:border-primary/50 shadow-xl"
                  >
                    <div className="aspect-[16/10] overflow-hidden">
                      <img 
                        src={boat.image} 
                        alt={boat.name} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                      />
                    </div>
                    <div className="p-8 bg-gradient-to-t from-background via-background/90 to-transparent">
                      <h3 className="text-3xl font-light text-primary mb-2">{boat.name}</h3>
                      <p className="text-foreground/60 mb-6">{boat.description}</p>
                      <div className="flex items-center text-primary font-medium gap-2">
                        Select This Boat <Ship className="w-5 h-5" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* BOOKING FORM STEP */
              <motion.div
                key="booking-form"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                className="max-w-3xl mx-auto"
              >
                <button 
                  onClick={() => setSelectedBoat(null)}
                  className="flex items-center gap-2 text-foreground/50 hover:text-primary transition-colors mb-8 group"
                >
                  <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" /> Change Boat Selection
                </button>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                  {/* Experience Card */}
                  <div className="bg-muted/10 border border-border rounded-2xl p-8 backdrop-blur-sm">
                    <label className="block text-2xl font-light text-primary mb-6">Experience & Date</label>
                    <div className="space-y-6">
                      <Controller
                        name="experience"
                        control={control}
                        rules={{ required: 'Required' }}
                        render={({ field }) => (
                          <Select onValueChange={field.onChange}>
                            <SelectTrigger className="h-14 bg-background/50 border-primary/20">
                              <SelectValue placeholder="Choose your experience..." />
                            </SelectTrigger>
                            <SelectContent>
                              {experiences.map(exp => (
                                <SelectItem key={exp} value={exp}>{exp}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}
                      />
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label className="text-sm flex items-center gap-2 text-foreground/70"><Calendar className="w-4 h-4" /> Date</label>
                          <input 
                            type="date" 
                            {...register('date', { required: true })}
                            className="w-full h-14 px-4 bg-background/50 border border-border rounded-md focus:ring-1 focus:ring-primary outline-none transition-all"
                          />
                        </div>
                        <div className="space-y-2">
                          <label className="text-sm flex items-center gap-2 text-foreground/70"><Users className="w-4 h-4" /> Guests (Max 12)</label>
                          <input 
                            type="number" 
                            {...register('guests', { required: true, max: 12 })}
                            placeholder="Number of guests"
                            className="w-full h-14 px-4 bg-background/50 border border-border rounded-md focus:ring-1 focus:ring-primary outline-none"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Extras Card */}
                  <div className="bg-muted/10 border border-border rounded-2xl p-8">
                    <label className="block text-2xl font-light text-primary mb-6">Enhance Your Trip</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {extras.map((extra) => (
                        <label key={extra.name} className="flex items-start gap-3 p-4 border border-border/50 rounded-xl hover:bg-primary/5 cursor-pointer transition-colors">
                          <input type="checkbox" value={extra.name} {...register('extras')} className="mt-1 accent-primary" />
                          <div>
                            <p className="font-medium text-foreground/90">{extra.name}</p>
                            <p className="text-xs text-primary/70">{extra.price}</p>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Contact Info */}
                  <div className="bg-muted/10 border border-border rounded-2xl p-8 space-y-6">
                    <label className="block text-2xl font-light text-primary">Personal Information</label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <input {...register('name', { required: true })} placeholder="Full Name" className="h-14 px-4 bg-background/50 border border-border rounded-md outline-none focus:border-primary" />
                      <input {...register('phone', { required: true })} placeholder="WhatsApp Number" className="h-14 px-4 bg-background/50 border border-border rounded-md outline-none focus:border-primary" />
                    </div>
                    <input {...register('email', { required: true })} placeholder="Email Address" className="w-full h-14 px-4 bg-background/50 border border-border rounded-md outline-none focus:border-primary" />
                    <textarea {...register('specialRequests')} placeholder="Special requests, dietary needs, etc." rows={4} className="w-full p-4 bg-background/50 border border-border rounded-md outline-none focus:border-primary" />
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full py-6 bg-primary text-primary-foreground rounded-full text-xl font-light tracking-widest uppercase hover:bg-primary/90 transition-all shadow-xl flex items-center justify-center gap-3"
                  >
                    Confirm with WhatsApp <CheckCircle2 className="w-6 h-6" />
                  </motion.button>
                </form>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>
    </div>
  );
}