'use client';

import { motion } from 'motion/react';
import { Calendar, Users, Mail, Phone, MessageSquare } from 'lucide-react';
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

export default function BookingPage() {
  const { register, control, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (data: unknown) => {
    const formData = data as Record<string, unknown>;
    const message = `
Booking Request from ${formData.name}

Experience: ${formData.experience}
Date: ${formData.date}
Number of Guests: ${formData.guests}
${formData.extras ? `Extras: ${formData.extras}` : ''}

Contact Details:
Email: ${formData.email}
Phone/WhatsApp: ${formData.phone}

Special Requests:
${formData.specialRequests || 'None'}
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
            src="https://images.unsplash.com/photo-1598448056086-307e98ef5c4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5YWNodCUyMGludGVyaW9yJTIwbHV4dXJ5fGVufDF8fHx8MTc2ODQ5MTc4NXww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Book your experience"
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
          <h1 className="text-5xl md:text-6xl text-primary mb-4">Book Your Experience</h1>
          <p className="text-xl text-foreground/80">
            Your journey to paradise begins here
          </p>
        </motion.div>
      </section>

      {/* Booking Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* Experience Selection */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-muted/20 border border-border rounded-lg p-6"
              >
                <label className="block text-xl text-primary mb-4">
                  Choose Your Experience
                </label>
                <Controller
                  name="experience"
                  control={control}
                  rules={{ required: 'Please select an experience' }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <SelectTrigger className="w-full h-14 bg-background/60 backdrop-blur-md border border-primary/30 hover:border-primary/60 focus:ring-primary/50 text-base transition-all duration-300 shadow-sm hover:shadow-md">
                        <SelectValue placeholder="Select an experience..." />
                      </SelectTrigger>
                      <SelectContent className="bg-background/95 backdrop-blur-xl border-primary/20 shadow-xl max-h-[300px]">
                        {experiences.map((exp) => (
                          <SelectItem 
                            key={exp} 
                            value={exp}
                            className="text-base py-3 focus:bg-primary/10 focus:text-primary cursor-pointer transition-colors"
                          >
                            {exp}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.experience && (
                  <p className="text-destructive text-sm mt-2">{String(errors.experience.message)}</p>
                )}
              </motion.div>

              {/* Date & Guests */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-6"
              >
                <div className="bg-muted/20 border border-border rounded-lg p-6">
                  <label className="block text-xl text-primary mb-4 flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    Select Date
                  </label>
                  <input
                    type="date"
                    {...register('date', { required: 'Please select a date' })}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                  {errors.date && (
                    <p className="text-destructive text-sm mt-2">{String(errors.date.message)}</p>
                  )}
                </div>

                <div className="bg-muted/20 border border-border rounded-lg p-6">
                  <label className="block text-xl text-primary mb-4 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Number of Guests
                  </label>
                  <input
                    type="number"
                    min="1"
                    max="12"
                    {...register('guests', { required: 'Please enter number of guests', min: 1, max: 12 })}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Number of guests"
                  />
                  {errors.guests && (
                    <p className="text-destructive text-sm mt-2">{String(errors.guests.message)}</p>
                  )}
                </div>
              </motion.div>

              {/* Extras */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-muted/20 border border-border rounded-lg p-6"
              >
                <label className="block text-xl text-primary mb-4">
                  Add Extras (Optional)
                </label>
                <div className="space-y-3">
                  {extras.map((extra) => (
                    <label key={extra.name} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        value={extra.name}
                        {...register('extras')}
                        className="w-4 h-4 text-primary bg-input-background border-border rounded focus:ring-primary"
                      />
                      <span className="text-foreground/80">{extra.name} <span className="text-primary">({extra.price})</span></span>
                    </label>
                  ))}
                </div>
              </motion.div>

              {/* Contact Details */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="bg-muted/20 border border-border rounded-lg p-6 space-y-6"
              >
                <h3 className="text-xl text-primary mb-4">Contact Details</h3>

                <div>
                  <label className="block text-sm text-foreground/70 mb-2">Full Name</label>
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
                  <label className="block text-sm text-foreground/70 mb-2 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email
                  </label>
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
                  <label className="block text-sm text-foreground/70 mb-2 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone/WhatsApp
                  </label>
                  <input
                    type="tel"
                    {...register('phone', { required: 'Phone number is required' })}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="+248 XXX XXXX"
                  />
                  {errors.phone && (
                    <p className="text-destructive text-sm mt-2">{String(errors.phone.message)}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm text-foreground/70 mb-2 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4" />
                    Special Requests (Optional)
                  </label>
                  <textarea
                    {...register('specialRequests')}
                    rows={4}
                    className="w-full px-4 py-3 bg-input-background border border-border rounded-md text-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Any special requests or dietary requirements..."
                  />
                </div>
              </motion.div>

              {/* Submit */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-center"
              >
                <button
                  type="submit"
                  className="px-12 py-4 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors text-lg font-medium"
                >
                  Confirm Booking via WhatsApp
                </button>
                <p className="text-sm text-foreground/60 mt-4">
                  Clicking this button will open WhatsApp with your booking details
                </p>
              </motion.div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
