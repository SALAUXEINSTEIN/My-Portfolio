/**
 * Projects Page
 * Design: Modern Academic + Data-Driven Minimalism
 * - Grid layout showcasing data science and computer vision projects
 * - Category filtering for project types
 * - Detailed project cards with descriptions and technologies
 */

import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Generative AI', 'NLP', 'Computer Vision', 'Data Engineering'];

  const projects = [
    {
      id: 'job-scout',
      title: 'Job Scout: Observable AI Job-Search Agent',
      category: 'Generative AI',
      description: 'A LangGraph assistant that parses a CV, retrieves job openings, scores fit, explains skills gaps, and prepares application materials with fabrication checks and human review.',
      technologies: ['Python', 'LangGraph', 'Opik', 'Gradio', 'Next.js'],
      github: 'observable-job-agent',
    },
    {
      id: 'personal-chatbot',
      title: 'Personalised Transformer Chatbot',
      category: 'NLP',
      description: 'A DialoGPT dialogue system conditioned by a Sentence-BERT preference encoder and BERT dialogue-state tracking, with evaluation, ablation, and bias audits.',
      technologies: ['PyTorch', 'Hugging Face', 'DialoGPT', 'BERT', 'Docker'],
      github: 'Personal-ChatBot',
    },
    {
      id: 'pneumonia-cds',
      title: 'Pneumonia Clinical Decision Support',
      category: 'Computer Vision',
      description: 'A chest X-ray classification app built with MobileNetV2 and Grad-CAM, showing image regions that contribute to model predictions.',
      technologies: ['TensorFlow', 'Keras', 'MobileNetV2', 'Grad-CAM', 'Streamlit'],
      github: 'PNEUMONIA-CDS-APP',
    },
    {
      id: 'rakusen-vision',
      title: 'Post-Baked Product Quality Vision System',
      category: 'Computer Vision',
      description: 'Team-built quality inspection pipeline for baked products, using industrial camera streams, GPU-trained detection, and a web monitoring dashboard. Reported accuracy: up to 99.9%.',
      technologies: ['YOLOv8', 'Python', 'Flask', 'React', 'AWS'],
      github: 'RAKUSEN-LIMITED-POST-BAKED-QUALITY-PRODUCT-END-TO-END-VISION-SYSTEM',
    },
    {
      id: 'crop-disease',
      title: 'Ilaro Crop Disease Detector',
      category: 'Computer Vision',
      description: 'A crop disease prediction project with a reproducible training pipeline and a Streamlit interface for farmers and extension workers.',
      technologies: ['Python', 'Scikit-learn', 'Streamlit'],
      github: 'Ilaro-Crop-Disease-Detector',
    },
    {
      id: 'ecommerce-etl',
      title: 'Scalable E-Commerce ETL Pipeline',
      category: 'Data Engineering',
      description: 'An automated analytics pipeline combining API ingestion, SQL transformations, and scheduled revenue reporting, with handling for duplicates, nulls, and schema changes.',
      technologies: ['Airbyte', 'dbt', 'Airflow', 'AWS RDS', 'Docker'],
      github: 'Scalable-ETL-Pipeline-for-E-Commerce-Data-Ingestion-and-Reporting',
    },
  ];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-primary mb-6">My Projects</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Selected AI, machine learning, computer-vision, and data-engineering work. Each repository links to its source and implementation details.
            </p>
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                      className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                  selectedCategory === category
                    ? 'bg-accent text-accent-foreground'
                    : 'bg-secondary text-foreground hover:bg-secondary/80'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group flex flex-col bg-card rounded-xl border border-border overflow-hidden hover:border-accent hover:shadow-lg transition-smooth"
              >
                {/* Content */}
                <div className="flex-1 p-6 flex flex-col">
                  <div className="mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-primary mb-2 group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-foreground/70 text-sm mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="text-xs px-2 py-1 bg-secondary text-foreground rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-border">
                    <a
                      href={`https://github.com/SALAUXEINSTEIN/${project.github}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center gap-2 py-2 bg-accent/10 text-accent hover:bg-accent/20 rounded-lg transition-smooth font-medium text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Repository
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-12">
              <p className="text-foreground/60">No projects found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-t border-border">
        <div className="container text-center">
          <h3 className="text-primary mb-4">Interested in a Collaboration?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            I'm always open to discussing new projects, research collaborations, or consulting opportunities.
          </p>
          <a href="/contact" className="inline-block">
            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-smooth">
              Start a Project
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
