# LucenEdge — Full-Spectrum Business Engineering Website

A luxury, production-grade Next.js 15 website for LucenEdge — a full-spectrum technology and business services company.

---

## 🚀 Getting Started

### Prerequisites
- Node.js 18.17+
- npm or yarn

### Installation

```bash
# Clone or unzip the project
cd lucenedge

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🗂️ Project Structure

```
lucenedge/
├── app/                          # Next.js App Router pages
│   ├── page.tsx                  # Home
│   ├── layout.tsx                # Root layout
│   ├── globals.css               # Design system & global styles
│   ├── loading.tsx               # Loading screen
│   ├── not-found.tsx             # 404 page
│   ├── about/                    # About page
│   ├── blog/                     # Blog & Insights
│   ├── careers/                  # Careers & job listings
│   ├── contact/                  # Multi-step contact form
│   ├── industries/               # Industry landing pages
│   ├── work/                     # Case studies
│   └── services/
│       ├── page.tsx              # Services hub
│       └── (services)/           # Individual service pages
│           ├── software-dev/
│           ├── web-mobile/
│           ├── automation/
│           ├── ai-services/
│           ├── ai-ml/
│           ├── accounting/
│           └── staffing/
│
├── components/
│   ├── animations/
│   │   ├── CustomCursor.tsx      # Spring cursor with hover states
│   │   ├── GrainOverlay.tsx      # Film grain texture
│   │   ├── PageTransition.tsx    # Curtain sweep transitions
│   │   └── SmoothScroll.tsx      # Lenis smooth scroll
│   ├── layout/
│   │   ├── Navbar.tsx            # Navigation with mega menu
│   │   ├── Footer.tsx            # Full footer
│   │   ├── LiveTicker.tsx        # Stats ticker bar
│   │   └── ServicePageLayout.tsx # Reusable service page template
│   └── sections/
│       ├── HeroSection.tsx       # Three.js particle network hero
│       ├── OrbitalSection.tsx    # Three.js 3D orbital model
│       ├── StatsSection.tsx      # Animated stats counters
│       ├── ServicesPreviewSection.tsx
│       ├── IndustriesMarquee.tsx
│       ├── WhyLucenEdge.tsx
│       ├── TestimonialsSection.tsx
│       └── TransformationCTA.tsx
│
├── hooks/
│   ├── useScrollReveal.ts        # GSAP scroll animations
│   └── useMagnetic.ts            # Magnetic button physics
│
└── lib/
    └── utils.ts                  # cn(), service config, constants
```

---

## 🎨 Design System

### Color Palette
| Variable | Value | Usage |
|---|---|---|
| `--obsidian` | `#07070F` | Base background |
| `--platinum` | `#E8E8F0` | Primary text |
| `--lucen-gold` | `#D4AF37` | Brand accent |
| `--lucen-blue` | `#00D4FF` | Default service accent |

### Per-Service Colors
| Service | Color | CSS Variable Scope |
|---|---|---|
| Software Dev | `#0066FF` | `[data-service="software"]` |
| Web & Mobile | `#7B2FFF` | `[data-service="web-mobile"]` |
| Automation | `#00D4C8` | `[data-service="automation"]` |
| AI Services | `#C8C8FF` | `[data-service="ai-services"]` |
| AI/ML | `#FFB800` | `[data-service="ai-ml"]` |
| Accounting | `#00C896` | `[data-service="accounting"]` |
| Staffing | `#FF8C42` | `[data-service="staffing"]` |

### Typography
- **Display:** Cormorant Garamond (serif, luxury feel)
- **Body:** DM Sans (clean, readable)
- **Mono:** JetBrains Mono (tech, labels, stats)

---

## ⚙️ Key Dependencies

| Package | Purpose |
|---|---|
| `next@15` | Framework |
| `framer-motion` | Page transitions, hover animations |
| `three` + `@react-three/fiber` | 3D orbital model & particle hero |
| `gsap` | Scroll-triggered animations |
| `lenis` | Smooth scroll |
| `react-countup` | Animated stat counters |
| `sonner` | Toast notifications |
| `lucide-react` | Icons |

---

## 📄 Pages

| Route | Page |
|---|---|
| `/` | Home |
| `/services` | Services Hub |
| `/services/software-dev` | Software Development |
| `/services/web-mobile` | Web & Mobile Apps |
| `/services/automation` | Automation Services |
| `/services/ai-services` | AI Services |
| `/services/ai-ml` | AI / ML Engineering |
| `/services/accounting` | Accounting Services |
| `/services/staffing` | Staffing Services |
| `/work` | Case Studies |
| `/industries` | Industries We Serve |
| `/about` | About Us |
| `/blog` | Blog & Insights |
| `/careers` | Careers |
| `/contact` | Contact |

---

## 🏗️ Build for Production

```bash
npm run build
npm run start
```

---

## 📝 Customization Notes

1. **Replace placeholder content** — client names, stats, and case study details in the section components
2. **Add real images** — the design is image-ready but uses CSS/SVG placeholders
3. **Connect a CMS** — recommended: Sanity.io for blog posts and case studies
4. **Connect contact form** — wire up to your backend or Resend/Formspree
5. **Add analytics** — drop in Vercel Analytics or Plausible

---

Built with precision. Engineered to scale. — LucenEdge
