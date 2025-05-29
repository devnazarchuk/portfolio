# Artem Nazarchuk - Portfolio Website

A modern, responsive portfolio website built with Next.js 13+ and TypeScript, showcasing my work as a Frontend Developer.

![Portfolio Preview](public/preview.png)

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Responsive**: Fully responsive design for all devices
- **Performance**: Optimized for Core Web Vitals
- **Accessibility**: WCAG compliant with ARIA attributes
- **Animations**: Smooth transitions using Framer Motion
- **Contact Form**: Integrated EmailJS for contact form functionality
- **Dark Theme**: Elegant dark theme with purple accents

## 🛠️ Technologies

- **Framework**: [Next.js 13+](https://nextjs.org/) (App Router)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Email**: [EmailJS](https://www.emailjs.com/)
- **Deployment**: [Vercel](https://vercel.com/)

## 📁 Project Structure

```
portfolio/
├── app/
│   ├── lib/           # Shared utilities and data
│   │   ├── animation.ts    # Animation configurations
│   │   └── data.ts         # Project and experience data
│   ├── ui/            # Reusable UI components
│   │   ├── chip.tsx        # Tag/Chip component
│   │   ├── cursor.tsx      # Custom cursor component
│   │   ├── experienceCard.tsx  # Experience section card
│   │   ├── link.tsx        # Navigation link component
│   │   └── projectCard.tsx # Project showcase card
│   ├── globals.css    # Global styles
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Main page component
├── public/            # Static assets
└── [config files]     # Various configuration files
```

## 🎨 Design Features

- **Custom Cursor**: Interactive custom cursor for enhanced UX
- **Smooth Scrolling**: Native smooth scrolling behavior
- **Section Navigation**: Sticky navigation with active section highlighting
- **Card Animations**: Smooth reveal animations for project and experience cards
- **Gradient Effects**: Subtle gradient backgrounds for visual interest
- **Responsive Typography**: Optimized text sizes for all screen sizes

## 🚀 Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/devnazarchuk/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env.local` file with:
   ```
   NEXT_PUBLIC_SERVICE_ID=your_emailjs_service_id
   NEXT_PUBLIC_TEMPLATE_ID=your_emailjs_template_id
   NEXT_PUBLIC_PUBLIC_KEY=your_emailjs_public_key
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   ```

## 📱 Responsive Design

- Mobile-first approach
- Breakpoints:
  - Mobile: < 640px
  - Tablet: 640px - 1024px
  - Desktop: > 1024px

## 🎯 Performance Optimizations

- Image optimization with Next.js
- Code splitting and lazy loading
- CSS purging with Tailwind
- Minimal dependencies
- Optimized animations

## 🔒 Security

- Environment variables for sensitive data
- Secure form handling with EmailJS
- No exposed API keys
- Protected routes

## 📄 License

MIT License - feel free to use this code for your own portfolio!

## 👨‍💻 Author

Artem Nazarchuk
- GitHub: [@devnazarchuk](https://github.com/devnazarchuk)
- LinkedIn: [Artem Nazarchuk](https://www.linkedin.com/in/devnazarchuk/)
- Email: devnazarchuk@gmail.com
