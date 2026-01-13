import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, FileText } from "lucide-react";
import { useState } from "react";

/**
 * Scientific Minimalism Design System
 * - Clean typography with IBM Plex Serif/Sans
 * - Teal accents (#00a8a8) for emphasis
 * - Generous whitespace and asymmetric layouts
 * - Minimal animations: fade-in, subtle scale on hover
 */

export default function Home() {
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur border-b border-border">
        <div className="container py-4 flex items-center justify-between">
          <div className="text-2xl font-bold text-foreground">
            <span className="text-accent">ML</span> Chemistry
          </div>
          <div className="flex gap-6 items-center">
            <a href="#research" className="text-sm hover:text-accent transition-colors">
              Research
            </a>
            <a href="#projects" className="text-sm hover:text-accent transition-colors">
              Projects
            </a>
            <a href="#skills" className="text-sm hover:text-accent transition-colors">
              Skills
            </a>
            <a href="#contact" className="text-sm hover:text-accent transition-colors">
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container py-20 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Predicting Molecular <span className="text-accent">Synthesisability</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Advancing organic synthesis through graph learning, machine learning, and retrosynthesis prediction. Integrating toxicity and sustainability considerations for practical chemistry applications.
            </p>
            <div className="flex gap-4 pt-4">
              <Button className="bg-accent text-accent-foreground hover:bg-accent/90">
                View Research <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="border-border">
                Download CV
              </Button>
            </div>
          </div>
          <div className="relative h-96 md:h-full rounded-lg overflow-hidden">
            <img
              src="/images/hero-molecular-network.png"
              alt="Molecular Network Visualization"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </section>
      {/* ... other sections ... */}
    </div>
  );
}
