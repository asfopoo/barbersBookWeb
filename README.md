# BarbersBook Marketing Website

A modern, responsive marketing and advertising website for the BarbersBook mobile app built with Vite, React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, gradient-rich design
- 📱 Fully responsive for all devices
- ⚡ Lightning-fast performance with Vite
- 🎯 Conversion-optimized landing page
- 🧩 Modular component structure

## Sections

- **Hero** - Eye-catching introduction with CTA buttons
- **Features** - Showcase of 8 key app features
- **How It Works** - 4-step process explanation
- **Pricing** - Three-tier pricing plans
- **Testimonials** - Social proof from satisfied customers
- **CTA** - Final call-to-action section
- **Footer** - Links and company information

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Installation

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

## Development

The app will run on `http://localhost:5173/` by default.

### Project Structure

```
src/
├── components/
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Pricing.tsx
│   ├── Testimonials.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
├── App.tsx
├── main.tsx
└── index.css
```

## Customization

### Colors

Update the primary color scheme in `tailwind.config.js`:

```js
theme: {
  extend: {
    colors: {
      primary: {
        // Customize these values
      }
    }
  }
}
```

### Content

Edit the component files in `src/components/` to update text, images, and features.

## Deployment

### Vercel (Recommended)

```bash
npm install -g vercel
vercel
```

### Netlify

```bash
npm run build
# Deploy the `dist` folder
```

### Manual Deployment

```bash
npm run build
# Upload the contents of the `dist` folder to your hosting provider
```

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Unicode emoji (easily replaceable with icon libraries)

## License

MIT

## Support

For questions or support, please contact support@thebarbersbook.com
