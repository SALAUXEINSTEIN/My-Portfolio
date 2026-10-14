/**
 * Services Page
 * Design: Modern Academic + Data-Driven Minimalism
 * - Comprehensive service offerings with detailed descriptions
 * - Service cards with benefits and features
 * - Pricing and engagement models
 */

import { CheckCircle, Briefcase, BookOpen, Users } from 'lucide-react';

export default function Services() {
  const services = [
    {
      id: 1,
      icon: Briefcase,
      title: 'AI & Machine Learning Prototyping',
      description: 'From problem framing to a working prototype for AI, NLP, computer vision, or predictive analytics.',
      features: [
        'Use-case definition and technical design',
        'Model and application architecture',
        'LLM, agent, or machine-learning implementation',
        'Evaluation, explainability, and quality checks',
        'Prototype handoff and deployment guidance',
      ],
      price: 'Custom',
    },
    {
      id: 2,
      icon: BookOpen,
      title: 'AI Application Development',
      description: 'Practical application development for teams exploring LLMs, agents, and data-powered products.',
      features: [
        'RAG and chatbot application design',
        'Agent workflows and tool integration',
        'API and interface implementation',
        'Observability and evaluation setup',
        'Responsible AI and human-review patterns',
      ],
      price: 'Project-based',
    },
    {
      id: 3,
      icon: Users,
      title: 'Technical Training',
      description: 'Project-based instruction for bootcamps, teams, and learners building practical technical skills.',
      features: [
        'AI development, LLMs, RAG, and agents',
        'Python, SQL, and data analytics',
        'Machine learning and deep learning',
        'Docker, CI/CD, and cloud ML deployment',
        'Curriculum, exercises, and assessment design',
      ],
      price: 'Group/Individual',
    },
    {
      id: 4,
      icon: BookOpen,
      title: 'Research & Publication Consultation',
      description: 'Research guidance and publication-preparation support across quantitative, technical, and applied disciplines.',
      features: [
        'Ph.D. thesis supervision across Mathematics, Transportation Engineering, Computer Science, Machine Learning, AI, Nursing, and related fields',
        'Research question and methodology consultation',
        'Quantitative analysis and interpretation of results',
        'Manuscript structure, clarity, and formatting support',
        'Journal submission preparation and publication guidance',
      ],
      price: 'Custom',
    },
  ];

  const engagementModels = [
    {
      title: 'Project Engagement',
      duration: 'Defined scope',
      description: 'A focused collaboration around a specific technical problem and agreed deliverables.',
      ideal: 'AI prototypes, model evaluation, architecture, and data workflows',
    },
    {
      title: 'Research Consultation',
      duration: 'As needed',
      description: 'Focused guidance through research design, analysis, thesis development, or publication preparation.',
      ideal: 'Ph.D. research, quantitative methods, manuscript readiness, and submission planning',
    },
    {
      title: 'Team Training',
      duration: 'Cohort-based',
      description: 'Hands-on instruction shaped around team goals, learner experience, and practical project work.',
      ideal: 'Bootcamps, workshops, and capability development',
    },
    {
      title: 'Curriculum & Instruction',
      duration: 'Defined scope',
      description: 'Course design, practical exercises, assessment, and delivery support for technical learning.',
      ideal: 'AI, data science, analytics, and DevOps learning tracks',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-primary mb-6">Services</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Practical support for AI development, research consultation, thesis supervision, publication preparation, and technical education.
            </p>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Ways I Can Help</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service) => {
              const Icon = service.icon;
              return (
                <div
                  key={service.id}
                  className="group p-8 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-smooth"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth">
                      <Icon className="w-6 h-6 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-primary mb-1">{service.title}</h3>
                      <p className="text-sm text-accent font-semibold">{service.price}</p>
                    </div>
                  </div>

                  <p className="text-foreground/70 mb-6">{service.description}</p>

                  <div className="space-y-3">
                    {service.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Engagement Models */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Engagement Models</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {engagementModels.map((model, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-accent transition-smooth"
              >
                <h3 className="text-primary mb-2">{model.title}</h3>
                <div className="text-sm text-accent font-semibold mb-3">{model.duration}</div>
                <p className="text-foreground/70 mb-4">{model.description}</p>
                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-foreground/60">
                    <span className="font-semibold text-foreground">Ideal for:</span> {model.ideal}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">How We Work Together</h2>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: '01',
                  title: 'Initial Consultation',
                  description: 'We discuss your needs, goals, and expectations. I learn about your project, challenges, and desired outcomes.',
                },
                {
                  step: '02',
                  title: 'Proposal & Planning',
                  description: 'I develop a detailed proposal outlining scope, methodology, timeline, and deliverables tailored to your requirements.',
                },
                {
                  step: '03',
                  title: 'Engagement & Execution',
                  description: 'We begin the work with regular communication, progress updates, and collaborative problem-solving.',
                },
                {
                  step: '04',
                  title: 'Delivery & Support',
                  description: 'Final deliverables are provided with documentation, training, and ongoing support as needed.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-accent text-accent-foreground flex items-center justify-center font-bold">
                      {item.step}
                    </div>
                  </div>
                  <div className="flex-1 pt-2">
                    <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                    <p className="text-foreground/70">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 md:py-32 bg-primary/5 border-t border-border">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Technical Expertise</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Programming Languages',
                items: ['Python', 'R', 'SQL', 'MATLAB'],
              },
              {
                title: 'Data Science Tools',
                items: ['Scikit-learn', 'TensorFlow', 'PyTorch', 'Pandas', 'NumPy'],
              },
              {
                title: 'Specialized Areas',
                items: ['Computer Vision', 'NLP', 'Time Series', 'Statistical Analysis'],
              },
            ].map((category, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-primary mb-4">{category.title}</h3>
                <ul className="space-y-2">
                  {category.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-foreground/80">
                      <div className="w-2 h-2 rounded-full bg-accent" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 border-t border-border">
        <div className="container text-center">
          <h3 className="text-primary mb-4">Ready to Get Started?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            Let's discuss how my services can help you achieve your data science and analytical goals.
          </p>
          <a href="/contact" className="inline-block">
            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-smooth">
              Schedule a Consultation
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
