# Postdoc Portfolio: ML in Chemistry & Synthesisability Prediction

A professional portfolio website showcasing expertise in organic molecule synthesisability prediction, graph learning methods, retrosynthesis planning, and machine learning applications in chemistry.

## Overview

This portfolio demonstrates research capabilities in:

*   **Graph Neural Networks for Chemistry**: Novel GNN-based approaches for molecular representation and retrosynthesis prediction
*   **Synthesisability Prediction**: ML models predicting synthesis feasibility with toxicity and sustainability constraints
*   **Interpretable Machine Learning**: Explainable AI methods for chemical property prediction with uncertainty quantification

## Design Philosophy

The website follows a **Scientific Minimalism** design approach:

*   Clean, professional typography using IBM Plex fonts
*   Teal accent color (#00a8a8) for emphasis and CTAs
*   Generous whitespace and asymmetric layouts
*   Focus on content clarity and research achievements
*   Subtle animations and smooth transitions

## Technology Stack

*   **Frontend**: React 19 with TypeScript
*   **Styling**: Tailwind CSS 4 with custom design tokens
*   **UI Components**: shadcn/ui
*   **Routing**: Wouter
*   **Build Tool**: Vite
*   **Deployment**: GitHub Pages

## Project Structure

```
postdoc-portfolio/
├── client/
│   ├── public/
│   │   └── images/          # Visual assets (molecular networks, diagrams)
│   ├── src/
│   │   ├── pages/           # Page components (Home, NotFound)
│   │   ├── components/      # Reusable UI components
│   │   ├── contexts/        # React contexts (Theme)
│   │   ├── App.tsx          # Main app component with routing
│   │   ├── main.tsx         # React entry point
│   │   └── index.css        # Global styles and design tokens
│   └── index.html           # HTML template
├── .github/
│   └── workflows/
│       └── deploy.yml       # GitHub Actions deployment workflow
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## Getting Started

### Prerequisites

*   Node.js 22+
*   pnpm 10+

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/postdoc-portfolio.git
cd postdoc-portfolio

# Install dependencies
pnpm install

# Start development server
pnpm run dev
```

The site will be available at `http://localhost:3000`
