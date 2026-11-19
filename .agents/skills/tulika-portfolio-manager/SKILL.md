---
name: tulika-portfolio-manager
description: Guidelines, data structures, and maintenance workflows for Tulika Shree's premium personal portfolio website. Use when modifying or adding projects, updating resume details, adjusting design tokens, or deploying updates.
---

# Tulika Shree Portfolio Management Skill

This skill governs the structure, design language, and content maintenance rules for the personal portfolio website of **Tulika Shree**.

## 1. Core Principles & Brand Identity
- **Personality**: Minimal, editorial, modern, dark-themed, creative yet grounded and authentic.
- **Color Palette**:
  - Background: Deep Charcoal (`#090a0f`, `#0d0f17`)
  - Primary Text: Soft White (`#f4f4f5`)
  - Muted Text: Slate Grey (`#94a3b8`)
  - Accent: Electric Lavender / Violet (`#a78bfa`, `#8b5cf6`, `#c4b5fd`)
  - Borders: Restrained subtle translucent (`rgba(255, 255, 255, 0.08)`)
- **Typography**: Space Grotesk (headings, titles, bold editorial accents) and Inter (body copy, details, labels).
- **Integrity Rule**: Never fabricate experience, fake social links, or progress percentages. Where content is pending (e.g. project visuals), use intentional, high-aesthetic empty states designed for easy data injection.

## 2. Content & Data Schema
All editable portfolio content resides in `src/data/portfolioData.ts`. This centralizes:
- Personal information & contact details
- Academic credentials (B.Sc. Zoology, 3rd Year, A.N.S. College, Barh)
- Internship details (SKMT Trust)
- Creative & technical skill categories
- Project items (with status: `completed` or `in-progress` / `coming-soon`)

## 3. Adding New Projects
To add a new project:
1. Place assets inside `public/projects/`.
2. Append a new object to `projectsData` in `src/data/portfolioData.ts`:
   ```typescript
   {
     id: 'unique-slug',
     title: 'Project Title',
     category: 'Graphic Design' | 'Art & Craft' | 'Digital Experiments' | 'Vibe Coding',
     description: 'Concise summary of creative intent and methodology',
     technologies: ['Canva', 'Figma', 'Prompt Engineering'],
     imageUrl: '/projects/my-design.png',
     link: 'https://...',
     featured: true,
   }
   ```

## 4. Updating the Resume
The official resume file is housed at `public/assets/Tulika_Shree_Resume.pdf`.
Replacing this single file updates the download targets across Navigation, Hero, and Footer seamlessly without component modifications.
