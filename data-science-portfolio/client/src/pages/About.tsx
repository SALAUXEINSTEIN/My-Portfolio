/**
 * About Page
 * Design: Modern Academic + Data-Driven Minimalism
 * - Professional bio with asymmetric layout
 * - Expertise areas with visual icons
 * - Timeline of key achievements
 */

import { BookOpen, Award, Users, Zap } from 'lucide-react';

export default function About() {
  const expertise = [
    { label: 'Generative AI & LLM Applications', icon: Zap },
    { label: 'Agentic Workflows & LangGraph', icon: BookOpen },
    { label: 'Machine Learning & Computer Vision', icon: Award },
    { label: 'Python, PyTorch & TensorFlow', icon: Users },
    { label: 'Cloud, MLOps & DevOps', icon: Zap },
    { label: 'Technical Training & Mentoring', icon: BookOpen },
  ];

  const achievements = [
    {
      year: '2026',
      title: 'AI Developer Instructor, GOMYCODE',
      description: 'Completed instructor training and began delivering project-based AI Developer instruction.',
    },
    {
      year: '2025–2026',
      title: 'Data & AI Education',
      description: 'Taught data analytics and AI development with Tech4Dev, AltSchool Africa, and Mindflux Academy.',
    },
    {
      year: '2023–2025',
      title: 'Lead Data Science Trainer, 3MTT',
      description: 'Led training in Python, data analysis, data science, and machine learning under Nigeria’s 3MTT programme.',
    },
    {
      year: '2022–2025',
      title: 'Mathematics Degrees, Lagos State University',
      description: 'Completed a B.Sc. and M.Sc. in Mathematics; currently pursuing a Ph.D. in Mathematics.',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-primary mb-6">About Me</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              I build AI and machine learning applications, teach technical cohorts, and bring a mathematical research background to practical engineering problems.
            </p>
          </div>
        </div>
      </section>

      {/* Professional Bio */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {/* Left: Bio Text */}
            <div className="space-y-6">
              <div>
                <h2 className="text-primary mb-4">Professional Background</h2>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  I am an AI Developer and technical educator with over five years of experience building and teaching machine learning, data, and AI systems. My work spans agentic AI, personalised language models, explainable computer vision, data engineering, and cloud delivery.
                </p>
                <p className="text-foreground/80 leading-relaxed mb-4">
                  I currently teach at GOMYCODE and have held instructor roles with Tech4Dev, AltSchool Africa, Mindflux Academy, 3MTT, Tim-R Programming Consult, and Lagos State University. I focus on practical, project-based learning, code review, and learner mentoring.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  I have supervised Ph.D. thesis work in Mathematics, Transportation Engineering, Computer Science, Machine Learning, Artificial Intelligence, Nursing, and related fields. I also provide research consultation and publication-preparation assistance, including methodology, analysis, manuscript structure, and submission readiness.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Alongside teaching, I work as a Solutions Architect at JP Consult, translating business requirements into technical designs and helping deliver microservices through Kubernetes-based CI/CD. I am based in Lagos, Nigeria.
                </p>
              </div>

              {/* Key Metrics */}
              <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border">
                <div>
                  <div className="text-3xl font-bold text-accent">5+</div>
                  <p className="text-sm text-foreground/60 mt-1">Years of Experience</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">12</div>
                  <p className="text-sm text-foreground/60 mt-1">Peer-reviewed papers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">M.Sc.</div>
                  <p className="text-sm text-foreground/60 mt-1">Mathematics</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent">2026</div>
                  <p className="text-sm text-foreground/60 mt-1">Ph.D. in progress</p>
                </div>
              </div>
            </div>

            {/* Right: Visual */}
            <div className="relative">
              <img
                src="https://avatars.githubusercontent.com/u/58710713?v=4"
                alt="Ayobami Muhammed Salau"
                className="w-full rounded-2xl shadow-lg"
              />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 rounded-full blur-3xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Areas of Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertise.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="group p-6 bg-card rounded-lg border border-border hover:border-accent hover:shadow-md transition-smooth"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <Icon className="w-5 h-5 text-accent group-hover:scale-110 transition-transform" />
                    <h3 className="font-semibold text-foreground">{item.label}</h3>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline of Achievements */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Key Milestones</h2>

          <div className="max-w-3xl mx-auto">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex gap-6 pb-12 last:pb-0">
                {/* Timeline dot and line */}
                <div className="flex flex-col items-center">
                  <div className="w-4 h-4 rounded-full bg-accent mt-2" />
                  {index !== achievements.length - 1 && (
                    <div className="w-0.5 h-24 bg-gradient-to-b from-accent to-border mt-4" />
                  )}
                </div>

                {/* Content */}
                <div className="pb-6 border-b border-border last:border-b-0">
                  <div className="text-sm font-semibold text-accent mb-1">{achievement.year}</div>
                  <h3 className="text-lg font-semibold text-primary mb-2">{achievement.title}</h3>
                  <p className="text-foreground/70">{achievement.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 md:py-24 bg-primary/5 border-t border-border">
        <div className="container text-center">
          <h3 className="text-primary mb-4">Interested in Collaboration?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Whether you need AI development, analytics support, or technical training, I'd be glad to discuss the work.
          </p>
          <a href="/contact" className="inline-block">
            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-smooth">
              Get in Touch
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
