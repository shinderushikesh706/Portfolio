# Premium AI Engineer Portfolio

A world-class, modern, high-performance personal portfolio website specifically designed for an **AI Engineer specializing in Generative AI, Agentic AI, Large Language Models (LLMs), RAG pipelines, and scalable AI-powered software systems**.

Built with **Next.js 14 (App Router)**, **TypeScript**, **Tailwind CSS**, and **Framer Motion**.

---

## 🌟 Key Highlights & Design System

- **Aesthetic**: Minimalist, sleek, high-tech aesthetic inspired by Vercel, Linear, Apple, and Stripe.
- **Theme Support**: Dark theme by default with a smooth, persistent Light/Dark mode toggle (`next-themes`).
- **Interactive Autonomous Agent Canvas**: Live interactive HTML5 Canvas visualizer simulating an autonomous multi-agent state graph with particle dynamics and mouse interactions.
- **Single Source of Truth**: All personal details, bio, skills, experience, projects, education, and links are managed in a single, well-documented file: [`src/data/portfolioData.ts`](src/data/portfolioData.ts).
- **Architecture Deep-Dive Modals**: Interactive modal for each project showcasing system data flow, component breakdown, and engineering target metrics.
- **Strict Skill Integrity**: Only displays verified technologies specified for your profile (no invented expertise).
- **Working Contact System**: Functional contact form with real-time client-side validation, server-side Next.js App Router API route (`/api/contact`), and one-click copy email button with clipboard toast.
- **SEO & Structured Data**: Built-in Open Graph metadata, Twitter card tags, `robots.txt`, dynamic `sitemap.xml`, and JSON-LD schema for search engines.
- **Resume Integration**: Direct resume download link wired to [`public/resume.pdf`](public/resume.pdf).
- **Custom 404 Page**: System-themed 404 error page (`not-found.tsx`).

---

## 📁 Project Structure

```text
portfolio_new/
├── public/
│   ├── resume.pdf               # Place your actual resume PDF here
│   └── favicon.ico
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── contact/
│   │   │       └── route.ts     # Contact form API endpoint with validation
│   │   ├── globals.css          # Glassmorphism, animations, dark/light CSS vars
│   │   ├── layout.tsx           # Root layout with SEO metadata & JSON-LD
│   │   ├── not-found.tsx        # Custom 404 Error page
│   │   ├── page.tsx             # Main single-page portfolio layout
│   │   ├── robots.ts            # Dynamic robots.txt
│   │   └── sitemap.ts           # Dynamic sitemap.xml
│   ├── components/
│   │   ├── about/
│   │   │   └── AboutSection.tsx # Bio, core mission & 4 engineering pillars
│   │   ├── contact/
│   │   │   └── ContactSection.tsx # Contact form, copy email & social links
│   │   ├── education/
│   │   │   └── EducationSection.tsx # Degrees & certifications
│   │   ├── experience/
│   │   │   └── ExperienceSection.tsx # Career timeline with responsibilities & metrics
│   │   ├── hero/
│   │   │   ├── HeroSection.tsx  # Dynamic headline, cycling specialties, CTAs
│   │   │   └── NeuralCanvas.tsx # Interactive agent state graph visualizer
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       # Sticky glassmorphism nav with active section spy
│   │   │   └── Footer.tsx       # Minimalist footer with system status
│   │   ├── projects/
│   │   │   ├── ProjectCard.tsx  # Project card with tech badges & deep-dive button
│   │   │   ├── ProjectIllustration.tsx # Custom SVG architecture diagrams
│   │   │   ├── ProjectArchitectureModal.tsx # System breakdown modal
│   │   │   └── ProjectsSection.tsx # Filterable project showcase
│   │   ├── skills/
│   │   │   └── SkillsSection.tsx # Categorized & filterable skill grid
│   │   ├── theme/
│   │   │   ├── ThemeProvider.tsx # Next-themes client provider
│   │   │   └── ThemeToggle.tsx   # Light/Dark toggle button
│   │   └── ui/
│   │       ├── Badge.tsx        # Pill badges with color variants & dots
│   │       ├── Button.tsx       # Primary, glow, secondary & outline buttons
│   │       └── SectionHeading.tsx # Reusable section title with eyebrow badge
│   ├── data/
│   │   └── portfolioData.ts     # ⭐️ CENTRAL CONFIG FILE: Update your info here!
│   └── lib/
│       └── utils.ts             # Tailwind class merger (clsx + twMerge)
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🚀 Quick Start & Installation

### 1. Prerequisites
- Node.js 18.17+ or 20+
- npm, pnpm, or yarn

### 2. Install Dependencies
```bash
npm install
```

### 3. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser to view your website.

### 4. Build for Production
```bash
npm run build
npm run start
```

---

## ✏️ How to Personalize Your Website

All personal information, experience, projects, skills, and links are kept in a single configuration file:
👉 **[`src/data/portfolioData.ts`](src/data/portfolioData.ts)**

### 1. Update Personal Info & Social Links
Open `src/data/portfolioData.ts` and modify the `personal` object:
```typescript
personal: {
  name: "Your Name",                    // Replace [YOUR NAME]
  role: "AI Engineer",
  specialization: "Generative AI • Agentic AI • LLM Applications",
  statusText: "Available for AI Engineering Opportunities",
  isAvailable: true,
  headline: "Building Intelligent Systems with AI.",
  subheadline: "Specializing in Agentic AI, Generative AI...",
  email: "your.name@example.com",
  location: "San Francisco, CA / Remote",
  resumePath: "/resume.pdf",
  socialLinks: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourusername",
    email: "mailto:your.name@example.com",
  },
}
```

### 2. Update Career Experience
In `src/data/portfolioData.ts`, update the `experience` array with your real roles:
- Replace `company` with your actual companies.
- Replace `role` with your actual job titles.
- Update `responsibilities`, `achievements`, and `technologies`.
- Remove or set `isPlaceholder: false`.

### 3. Update Featured Projects
In `src/data/portfolioData.ts`, update the `projects` array:
- Add your real project titles, short descriptions, and GitHub/demo URLs.
- Customize the `architectureDetails` (overview, components, metrics) to display in the interactive architecture deep-dive modal.
- Set `isPlaceholder: false` once you replace the placeholder data.

### 4. Update Education & Certifications
In `src/data/portfolioData.ts`, edit `education` and `certifications` to match your actual university degrees, graduation years, and certifications.

### 5. Uploading Your Resume
Simply place your actual resume PDF into the `public/` directory with the filename `resume.pdf`:
```text
public/
  └── resume.pdf
```
The "Download Resume" buttons in both the Navbar and Hero section will automatically serve and download this file.

### 6. Configuring the Contact Form
The contact form currently calls `/api/contact` ([`src/app/api/contact/route.ts`](src/app/api/contact/route.ts)), which validates input and logs transmissions.
To send actual emails to your inbox, you can easily plug in **Resend**, **SendGrid**, or **Formspree**:
```typescript
// Example using Resend in src/app/api/contact/route.ts:
// import { Resend } from "resend";
// const resend = new Resend(process.env.RESEND_API_KEY);
// await resend.emails.send({
//   from: "Portfolio <onboarding@resend.dev>",
//   to: "your.email@example.com",
//   subject: `[Portfolio Inquiry] ${subject}`,
//   text: `From: ${name} (${email})\n\n${message}`,
// });
```

---

## 🚢 Deployment Guide (Vercel)

Deploying to [Vercel](https://vercel.com) takes less than 2 minutes:

1. Push your code to a GitHub repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial commit of AI engineer portfolio"
   git remote add origin https://github.com/yourusername/ai-portfolio.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [Vercel](https://vercel.com/new).
3. Import your GitHub repository.
4. Framework Preset will automatically detect **Next.js**.
5. Click **Deploy**.

---

## 🛠 Tech Stack Details

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS 3 with custom CSS variable tokens
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Theme**: Next-Themes (Dark/Light mode)

---

## 📄 License

MIT License — Feel free to use and adapt this portfolio for your personal brand!
