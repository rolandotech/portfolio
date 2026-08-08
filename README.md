# Rolando M. Mendoza Jr. — Portfolio

A premium, award-winning developer portfolio built with React, Vite, Tailwind CSS, and Framer Motion.

## Tech Stack

- **React 19** — UI library
- **Vite** — Build tool
- **React Router** — Client-side routing
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Animations & transitions
- **Lucide React** — Icon library
- **React Hook Form** — Form validation
- **EmailJS** — Contact form integration
- **React Helmet Async** — SEO meta tags

## Features

- Dark theme with glassmorphism design
- Animated hero with typing effect, floating shapes, and parallax
- Skills with animated progress bars
- Experience timeline with scroll reveal
- Project cards with tilt effect, filtering, and modal
- Services showcase
- Testimonial slider
- Contact form with EmailJS integration
- Loading screen, custom cursor, scroll progress bar
- Fully responsive (desktop, tablet, mobile)
- Lazy-loaded routes for performance
- SEO-friendly with React Helmet

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## EmailJS Setup

1. Create an account at [EmailJS](https://www.emailjs.com/)
2. Copy `.env.example` to `.env`
3. Fill in your EmailJS credentials:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
├── components/
│   ├── contact/       # Contact form
│   ├── experience/    # Timeline components
│   ├── hero/          # Hero section & floating elements
│   ├── layout/        # Navbar, Footer, Layout, Loading, Cursor
│   ├── projects/      # Project cards, filter, modal
│   ├── services/      # Service cards
│   ├── skills/        # Skill cards
│   ├── testimonials/  # Testimonial slider
│   └── ui/            # Reusable UI (Button, GlassCard, etc.)
├── data/              # Static content data
├── hooks/             # Custom React hooks
├── pages/             # Route pages
└── utils/             # Animation variants & constants
```

## License

MIT
