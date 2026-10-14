/**
 * Home Page
 * Design: Modern Academic + Data-Driven Minimalism
 * - Asymmetric hero layout with text left, visual right
 * - Data visualization aesthetic with network graphics
 * - Clear hierarchy and generous whitespace
 */

import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowRight, Bot, BookOpen, Code2, GraduationCap } from 'lucide-react';

export default function Home() {
  const expertise = [
    {
      icon: Bot,
      title: 'Generative AI & Agents',
      description: 'LLM applications, LangGraph workflows, evaluation, and responsible tool use',
    },
    {
      icon: Code2,
      title: 'Machine Learning',
      description: 'Practical models across NLP, computer vision, and predictive analytics',
    },
    {
      icon: BookOpen,
      title: 'Applied Research',
      description: 'Mathematical modelling, numerical methods, and explainable AI',
    },
    {
      icon: GraduationCap,
      title: 'Technical Education',
      description: 'Project-based instruction in AI development, data, and software practice',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary/20 -z-10" />

        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-500">
              <div className="space-y-4">
                <h1 className="text-primary leading-tight">
                  Ayobami Muhammed Salau
                </h1>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  AI Developer, machine learning engineer, and technical instructor building practical AI systems and helping developers learn to build them.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-b border-border">
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <p className="text-sm text-foreground/60">Years in AI & Data</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-accent">12</div>
                  <p className="text-sm text-foreground/60">Peer-reviewed papers</p>
                </div>
                <div className="space-y-1">
                  <div className="text-2xl font-bold text-accent">Lagos</div>
                  <p className="text-sm text-foreground/60">Nigeria</p>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Link href="/projects">
                  <a className="no-underline">
                    <Button className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground">
                      Explore My Work
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </a>
                </Link>
                <Link href="/contact">
                  <a className="no-underline">
                    <Button variant="outline" className="w-full sm:w-auto border-primary text-primary hover:bg-primary/5">
                      Get in Touch
                    </Button>
                  </a>
                </Link>
              </div>
            </div>

            {/* Right: Visual Element */}
            <div className="relative h-96 md:h-full min-h-96 animate-in fade-in slide-in-from-right-4 duration-500 delay-100">
              <img
                src="https://avatars.githubusercontent.com/u/58710713?v=4"
                alt="Ayobami Muhammed Salau"
                className="w-full h-full object-cover rounded-2xl shadow-lg"
              />
              {/* Decorative accent line */}
              <div className="absolute -left-4 top-1/2 w-1 h-24 bg-gradient-to-b from-transparent via-accent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-primary mb-4">Core Expertise</h2>
            <p className="text-lg text-foreground/70">
              Building responsible AI products and teaching the skills behind them
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-8 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-smooth"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-primary mb-2">{item.title}</h3>
                      <p className="text-foreground/70">{item.description}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Featured Services Preview */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 p-8 border border-border hover:border-accent transition-smooth">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-accent/0 group-hover:from-primary/5 group-hover:to-accent/5 transition-smooth" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-primary/20 mb-4" />
                <h3 className="text-primary mb-2">Consulting</h3>
                <p className="text-foreground/70 mb-4">
                  Data science consulting for research and industry projects
                </p>
                <Link href="/services">
                  <a className="no-underline text-accent font-medium hover:text-accent/80 transition-smooth">
                    Learn more →
                  </a>
                </Link>
              </div>
            </div>

            {/* Service Card 2 */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-accent/5 to-primary/5 p-8 border border-border hover:border-accent transition-smooth">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-primary/0 group-hover:from-accent/5 group-hover:to-primary/5 transition-smooth" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-accent/20 mb-4" />
                  <h3 className="text-primary mb-2">AI Development</h3>
                  <p className="text-foreground/70 mb-4">
                    LLM applications, agent workflows, and machine-learning prototypes
                </p>
                <Link href="/services">
                  <a className="no-underline text-accent font-medium hover:text-accent/80 transition-smooth">
                    Learn more →
                  </a>
                </Link>
              </div>
            </div>

            {/* Service Card 3 */}
            <div className="group relative overflow-hidden rounded-xl bg-gradient-to-br from-secondary/20 to-primary/5 p-8 border border-border hover:border-accent transition-smooth">
              <div className="absolute inset-0 bg-gradient-to-br from-secondary/0 to-primary/0 group-hover:from-secondary/10 group-hover:to-primary/5 transition-smooth" />
              <div className="relative z-10">
                <div className="w-12 h-12 rounded-lg bg-secondary/40 mb-4" />
                <h3 className="text-primary mb-2">Training Programs</h3>
                <p className="text-foreground/70 mb-4">
                  AI development, Python, data analytics, and machine-learning instruction
                </p>
                <Link href="/training">
                  <a className="no-underline text-accent font-medium hover:text-accent/80 transition-smooth">
                    Learn more →
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-primary-foreground mb-4">Ready to Collaborate?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Whether you need AI development expertise, analytics support, or technical training, let's discuss your goals.
          </p>
          <Link href="/contact">
            <a className="no-underline">
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                Start a Conversation
              </Button>
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
