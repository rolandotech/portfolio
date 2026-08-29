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
- **React Email + Resend** — Contact form emails to Gmail
- **React Helmet Async** — SEO meta tags

## Features

- Dark theme with glassmorphism design
- Animated hero with typing effect, floating shapes, and parallax
- Skills with animated progress bars
- Experience timeline with scroll reveal
- Project cards with tilt effect, filtering, and modal
- Services showcase
- Testimonial slider
- Contact form with React Email + Resend (delivers to your Gmail)
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

## Contact Form Setup (React Email + Resend)

The contact form sends formatted emails to your Gmail using a [React Email](https://react.email/) template and [Resend](https://resend.com) on a Vercel serverless API route.

1. Create a free account at [Resend](https://resend.com)
2. Create an API key in the Resend dashboard
3. Copy `.env.example` to `.env.local` (for Vercel) or `.env`
4. Add these variables:

```
RESEND_API_KEY=re_your_api_key_here
CONTACT_TO_EMAIL=rolandomend23@gmail.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

5. Deploy the project to [Vercel](https://vercel.com) (required for `/api/contact`)
6. Add the same environment variables in your Vercel project settings

**Testing:** Resend lets you send to your own Gmail using `onboarding@resend.dev` as the sender. For production, verify a custom domain in Resend and update `RESEND_FROM_EMAIL`.

**Local API testing:** Install Vercel CLI and run `vercel dev` instead of `npm run dev` so `/api/contact` works locally.

Email template: `emails/contact-notification.jsx`

## Project Structure

```
src/
├── api/               # Vercel serverless contact endpoint
├── emails/            # React Email templates
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
