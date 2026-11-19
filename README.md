# Tulika Shree — Premium Personal Portfolio Website

A minimal, modern, dark-themed personal portfolio website built with **React**, **TypeScript**, **Tailwind CSS**, and **Vite**.

Designed with an editorial agency aesthetic for **Tulika Shree** (Creative Designer | Digital Creator | Aspiring Developer).

---

## 🌟 Key Features

- **Editorial Dark Aesthetic**: Deep charcoal palette (`#08090d`), soft white typography, and electric lavender accents (`#a78bfa`).
- **Typographic & Geometric Identity**: Custom CSS/SVG monogram composition celebrating design, craft, and technology without generic stock imagery.
- **Factual Integrity**: 100% accurate representation of candidate status (Fresher, B.Sc. Zoology 3rd Year at A.N.S. College, Barh, ADCA, SKMT Trust Internship).
- **Working Resume Download**: Dedicated, valid `Tulika_Shree_Resume.pdf` in `public/assets/`, hooked to Navigation, Hero, and Footer actions.
- **Dynamic Projects Showcase**: High-aesthetic empty state with category filters (*Graphic Design, Art & Craft, Digital Experiments, Vibe Coding*), engineered to ingest real assets smoothly via `src/data/portfolioData.ts`.
- **Direct Contact System**: Form with real-time field validation, mail client dispatch fallback, and one-click copy-to-clipboard for email and phone.
- **Accessibility & Motion**: Respects `prefers-reduced-motion` and conforms to WCAG contrast standards.

---

## 🛠️ Project Structure

```text
├── .agents/skills/
│   └── tulika-portfolio-manager/    # Agent skill for maintaining & scaling the portfolio
├── public/
│   ├── assets/
│   │   ├── Tulika_Shree_Resume.pdf  # Verified resume PDF
│   │   └── resume.pdf               # Aliased download
│   ├── favicon.svg                  # Custom branded SVG favicon
│   └── og-image.svg                 # OpenGraph social share card
├── scripts/
│   └── generate-resume.js           # PDF generation script using PDFKit
├── src/
│   ├── components/
│   │   ├── Navbar.tsx               # Fixed responsive navigation + mobile menu
│   │   ├── Hero.tsx                 # Headline, badges, typographic monogram
│   │   ├── About.tsx                # Editorial narrative & mindset pillars
│   │   ├── Skills.tsx               # 4 Core skill cards + professional qualities
│   │   ├── Education.tsx            # Academic timeline (B.Sc. Zoology, 3rd Year)
│   │   ├── Internship.tsx           # SKMT Trust professional development card
│   │   ├── Projects.tsx             # Filterable showcase with curated empty state
│   │   ├── CareerGoals.tsx          # Career objective & "What's Next?" callout
│   │   ├── Contact.tsx              # Validated inquiry form & contact cards
│   │   ├── Footer.tsx               # Minimal footer with dynamic year & top scroll
│   │   └── Toast.tsx                # Non-intrusive status alerts
│   ├── data/
│   │   └── portfolioData.ts         # Single source of truth for all content
│   ├── App.tsx                      # Root composition
│   ├── index.css                    # Design tokens & glassmorphism utilities
│   └── main.tsx                     # Entrypoint
└── package.json
```

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser.

### 3. Build for production
```bash
npm run build
```
Build output will be bundled in the `dist/` directory.

### 4. Regenerate Resume PDF
```bash
node scripts/generate-resume.js
```

---

## 📝 Updating Portfolio Data

To update skills, bio, academic progress, or to add new portfolio project cards, edit `src/data/portfolioData.ts`. Project cards automatically format and render without changing layout components.
