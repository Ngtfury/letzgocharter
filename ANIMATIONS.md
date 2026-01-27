# Let'z Go Charter - Animation Features

## Overview
The website now includes professional, smooth animations throughout to enhance user experience and create a polished, premium feel.

## Page Transitions
- **Global Page Transitions**: Every page fade-in with a smooth upward motion (opacity: 0→1, y: 20→0) over 0.6s with easing
- **Location**: Wrapped in `PageTransition` component in root layout
- **Effect**: Creates seamless transitions when navigating between pages

## Component Animations

### Header
- **Navigation Links**: Animated underline (layoutId) that slides smoothly when active
- **Hover Effect**: Links lift up slightly (y: -2) on hover with smooth spring physics
- **Book Now Button**: Scales up to 1.05x on hover, scales down to 0.95x on click
- **Mobile Menu**: Smooth height animation (0 to auto) when opening/closing

### Footer
- **Link Animations**: All footer links slide right (x: 4) on hover with spring physics
- **Staggered**: Quick Links and Services sections have animated slide effects
- **Smooth Transitions**: Color transitions and motion work together seamlessly

### Scroll to Top Button
- **Appearance**: Fades in and scales up when page scrolls past 300px
- **Disappearance**: Fades out and scales down when scrolling back to top
- **Interaction**: Scales up on hover (1.1x), scales down on click (0.9x)
- **Location**: Fixed position at bottom-right, above WhatsApp button

## Page-Specific Animations

### Home Page (page.tsx)
- **Hero Section**: Title and CTA fade in and slide up on mount
- **Feature Cards**: Stagger animation (0.1s delay between items)
- **Experience Cards**: Scale animation on scroll (0.9 → 1)
- **Gallery Grid**: Staggered scale-in animations
- **Testimonials**: Individual cards fade in and slide up with stagger

### About Page (/about/page.tsx)
- **Hero Title**: Fade in and slide up animation
- **Story Section**: Text fades in on scroll view
- **Values Grid**: Cards stagger in (4 columns with 0.1s delays)
- **Fleet Images**: Slide animations (left and right)

### Services Page (/services/page.tsx)
- **Service Cards**: Staggered fade-in and slide up
- **Images**: Scale on hover for interactive feel
- **Highlights**: Smooth transitions

### Gallery Page (/gallery/page.tsx)
- **Hero**: Fade in and slide up animation
- **Gallery Grid**: Staggered scale animations
- **Lightbox**: Smooth open/close transitions with fade and scale
- **Category Filters**: Smooth re-animation when filtering

### Booking Page (/booking/page.tsx)
- **Form Elements**: Staggered fade-in animations
- **Input Fields**: Smooth focus animations
- **Submission**: WhatsApp link opens with success state

### Contact Page (/contact/page.tsx)
- **Hero Section**: Standard fade in and slide up
- **Contact Form**: Staggered input animations
- **Contact Info**: Smooth reveal animations

## Animation Utilities

### PageTransition Component (`/components/PageTransition.tsx`)
Exported animation variants for consistent animations:
- `staggerContainer`: Parent container with staggered children
- `staggerItem`: Individual item animation (0.1s stagger)
- `fadeInUp`: Fade + upward slide animation
- `scaleIn`: Scale animation from 0.95 to 1

### Timing Curves
- **Primary Easing**: [0.25, 0.46, 0.45, 0.94] (custom cubic-bezier)
- **Spring Animations**: stiffness: 300-380, damping: 40
- **Durations**: 0.6s (primary), 0.7s (longer), 0.8s (hero)

## Browser Compatibility
- Uses Framer Motion v12.29.2 with motion/react
- Hardware-accelerated transforms for smooth 60fps performance
- Fallback support for reduced-motion preferences

## Performance Notes
- All animations use transform and opacity (GPU-accelerated)
- Lazy animation triggers with `whileInView` for below-fold elements
- AnimatePresence wraps conditional elements for proper exit animations
- Minimal repaints through strategic use of `layoutId` for shared layout animations
