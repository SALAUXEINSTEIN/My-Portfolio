/**
 * CV Page
 * Design: Modern Academic + Data-Driven Minimalism
 * - Professional CV/Resume display
 * - Downloadable PDF option
 * - Organized sections for education, experience, and skills
 */

import { Printer, Award, Briefcase, BookOpen, Code2 } from 'lucide-react';

export default function CV() {
  const education = [
    {
      degree: 'Ph.D. Mathematics (in progress)',
      institution: 'Lagos State University, Ojo',
      year: '2026–Present',
      focus: 'Numerical methods',
      details: 'Thesis: Multi-frequency exponentially fitted multiderivative Runge-Kutta methods.',
    },
    {
      degree: 'M.Sc. Mathematics',
      institution: 'Lagos State University, Ojo',
      year: '2025',
      focus: 'Mathematical modelling',
      details: 'Dissertation: Numerical Framework for Insulin Secretion Rate Estimation Using Euler and Runge-Kutta Methods; development of the ISEC Clinical Prediction Tool.',
    },
    {
      degree: 'B.Sc. (Hons) Mathematics, Second Class Upper',
      institution: 'Lagos State University, Ojo',
      year: '2022',
      focus: 'Mathematics',
      details: 'Professor Ajetumobi Foundation University Scholarship recipient (2021).',
    },
  ];

  const experience = [
    {
      title: 'AI Developer Bootcamp Instructor',
      organization: 'GOMYCODE | Lagos, Nigeria',
      period: 'Apr 2026 – Present',
      responsibilities: [
        'Completed AI Developer Bootcamp instructor training.',
        'Deliver live, project-based sessions and guide learners through portfolio projects and code reviews.',
        'Track learner progress, provide one-to-one support, and help graduates present GitHub portfolios.',
      ],
    },
    {
      title: 'Data Analytics Instructor (Remote)',
      organization: 'Tech4Dev | Nigeria',
      period: 'Jan 2026 – Present',
      responsibilities: [
        'Teach Excel, SQL, Python, data cleaning, visualisation, and Power BI dashboarding.',
        'Design practical case studies and capstone projects and assess learner submissions.',
      ],
    },
    {
      title: 'Data Analysis Instructor',
      organization: 'AltSchool Africa | Remote',
      period: 'Nov 2025 – Dec 2025',
      responsibilities: [
        'Developed and delivered practical curriculum in Python, Pandas, NumPy, MySQL, Excel, and Power BI.',
        'Tracked student progress and kept lessons aligned with industry practice.',
      ],
    },
    {
      title: 'DevOps, Data Science & Analytics Instructor',
      organization: 'Mindflux Academy | Nigeria (Hybrid)',
      period: 'Jul 2025 – Nov 2025',
      responsibilities: [
        'Taught machine learning, big-data analytics, AWS ML deployment, Docker, Jenkins CI/CD, and Terraform.',
        'Designed and supervised end-to-end student projects using Flask, Streamlit, and TensorFlow.',
      ],
    },
    {
      title: 'Lead Data Science, Data Analysis & Python Trainer',
      organization: 'LASU CBT 18 & 3MTT | Lagos, Nigeria',
      period: 'Sep 2023 – Jan 2025',
      responsibilities: [
        'Led cohorts in Python programming, data analysis, data science, and machine learning.',
        'Built practical curriculum and assessments and monitored cohort progress.',
      ],
    },
    {
      title: 'Solutions Architect',
      organization: 'JP Consult | Nigeria',
      period: 'Mar 2023 – Present',
      responsibilities: [
        'Translated business requirements into technical specifications for a distributor-central application.',
        'Designed microservices and CI/CD deployments to Kubernetes using Docker, Azure DevOps, and Terraform.',
      ],
    },
    {
      title: 'Remote Data Analyst & Trainer',
      organization: 'Sculptor Coaching | United Kingdom (Remote)',
      period: '2024',
      responsibilities: [
        'Analysed business performance using Python, SQL, Excel, and Power BI and built automated reporting dashboards.',
        'Delivered remote training in data cleaning, visualisation, and interpretation.',
      ],
    },
    {
      title: 'Data Science Instructor',
      organization: 'Tim-R Programming Consult | Nigeria',
      period: 'May 2023 – Apr 2024',
      responsibilities: [
        'Delivered Python for Data Science, SQL for Business Analytics, and Applied Machine Learning training.',
        'Taught practical deep-learning, Python, and R courses to corporate and academic learners.',
      ],
    },
    {
      title: 'Mathematics Tutor (Part-Time Programme)',
      organization: 'Lagos State University, Ojo | Lagos, Nigeria',
      period: '2021 – 2023',
      responsibilities: [
        'Taught Statistics for Management Sciences, Mathematics for Business, and Quantitative Methods.',
        'Used Python and SQL scripts to support CBT automation and assessment data management.',
      ],
    },
  ];

  const skills = [
    {
      category: 'Generative AI & LLMs',
      items: ['LLMs', 'Prompt Engineering', 'RAG', 'LangGraph', 'Tool Use', 'Opik', 'LLM Evaluation'],
    },
    {
      category: 'NLP & Transformers',
      items: ['Hugging Face', 'DialoGPT', 'BERT', 'Sentence-BERT', 'Prefix-Tuning', 'Bias Auditing'],
    },
    {
      category: 'Machine & Deep Learning',
      items: ['Scikit-learn', 'TensorFlow/Keras', 'PyTorch', 'CNNs', 'YOLOv8', 'Grad-CAM'],
    },
    {
      category: 'AI App Development',
      items: ['Python', 'Gradio', 'Streamlit', 'Flask', 'FastAPI', 'React', 'Next.js'],
    },
    {
      category: 'MLOps, Cloud & DevOps',
      items: ['Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'AWS', 'GCP', 'Azure DevOps'],
    },
    {
      category: 'Data Engineering & Analytics',
      items: ['SQL', 'MongoDB', 'Pandas', 'Airflow', 'Airbyte', 'dbt', 'Spark', 'Power BI'],
    },
  ];

  const certifications = [
    {
      title: 'AI Developer Bootcamp – Instructor Training',
      issuer: 'GOMYCODE',
      year: '2026',
    },
    {
      title: 'AWS Certified Solutions Architect – Associate',
      issuer: 'Amazon Web Services',
      year: '—',
    },
    {
      title: 'Deep Learning Masters; AIOps; AWS Big Data Fundamentals',
      issuer: 'Professional training',
      year: '—',
    },
    {
      title: 'Data Preparation for Machine Learning using Python',
      issuer: 'Osun R User Group & Tim-R Programming Consult',
      year: '2022',
    },
    {
      title: 'Statistical Computing with ENA for SMART Methodology',
      issuer: 'International Association for Statistical Computing, African Members Group',
      year: '—',
    },
  ];

  const publications = [
    'Mustapha, R. A., Akanbi, M. A., Abass, F. A., Salau, A. M., et al. (2025). A numerical solution of Eyring–Powell MHD nanofluid flow with convective surface condition and Dufour–Soret impact past a vertical plate. Journal of the Nigerian Mathematical Society, 44(2), 189–205.',
    'Mustapha, R. A., Abass, F. A., Enikuomehin, O. A., Akanbi, M. A., & Salau, A. M. (2024). A numerical analysis of the flow and heat transfer characteristics of Eyring–Powell fluid with mixed convection over a stratified sheet. Journal of the Nigerian Mathematical Society, 43(1), 59–79.',
    'Mustapha, R. A., Ogabi, C. O., Idowu, B. A., Ogungbe, A. S., Idowu, G. A., & Salau, A. M. (2022). Applications of Runge–Kutta–Fehlberg method and shooting technique for solving Eyring–Powell fluid through a channel with thermal radiation. International Journal of Advances in Engineering and Management, 4(2), 1661–1669.',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/10">
        <div className="container">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-primary mb-4">Curriculum Vitae</h1>
              <p className="text-lg text-foreground/80">
                AI development, technical instruction, industry experience, education, and selected publications
              </p>
            </div>
            <button onClick={() => window.print()} className="flex items-center gap-2 px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-smooth">
              <Printer className="w-5 h-5" />
              Print / Save as PDF
            </button>
          </div>
        </div>
      </section>

      {/* Professional Summary */}
      <section className="py-12 border-b border-border">
        <div className="container">
          <h2 className="text-primary mb-6">Professional Summary</h2>
          <div className="max-w-3xl space-y-4 text-foreground/80 leading-relaxed">
            <p>
              AI Developer and technical educator with a Master’s degree in Mathematics and over five years of experience building and teaching machine learning, data, and AI systems.
            </p>
            <p>
              Currently an Instructor at GOMYCODE, with previous instructor roles across technical bootcamps and universities. I build agentic AI, transformer chatbot, and explainable computer-vision applications, supported by cloud and DevOps experience. I have supervised Ph.D. thesis work across Mathematics, Transportation Engineering, Computer Science, Machine Learning, AI, Nursing, and related disciplines, and provide research consultation and publication-preparation assistance.
            </p>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-primary mb-12 flex items-center gap-3">
            <Briefcase className="w-6 h-6 text-accent" />
            Professional Experience
          </h2>

          <div className="space-y-8">
            {experience.map((job, index) => (
              <div key={index} className="pb-8 border-b border-border last:border-b-0">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{job.title}</h3>
                    <p className="text-foreground/70">{job.organization}</p>
                  </div>
                  <span className="text-sm font-semibold text-accent mt-2 md:mt-0">{job.period}</span>
                </div>
                <ul className="space-y-2">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="flex items-start gap-3 text-foreground/80">
                      <span className="text-accent mt-1">•</span>
                      {resp}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <h2 className="text-primary mb-12 flex items-center gap-3">
            <BookOpen className="w-6 h-6 text-accent" />
            Education
          </h2>

          <div className="space-y-8">
            {education.map((edu, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-smooth">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-3">
                  <div>
                    <h3 className="text-lg font-bold text-primary">{edu.degree}</h3>
                    <p className="text-foreground/70">{edu.institution}</p>
                  </div>
                  <span className="text-sm font-semibold text-accent mt-2 md:mt-0">{edu.year}</span>
                </div>
                <p className="text-sm text-accent font-medium mb-2">{edu.focus}</p>
                <p className="text-foreground/80">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-primary mb-12 flex items-center gap-3">
            <Code2 className="w-6 h-6 text-accent" />
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-primary font-semibold mb-4">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <h2 className="text-primary mb-12 flex items-center gap-3">
            <Award className="w-6 h-6 text-accent" />
            Certifications & Credentials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border">
                <h3 className="text-primary font-semibold mb-2">{cert.title}</h3>
                <p className="text-foreground/70 text-sm mb-2">{cert.issuer}</p>
                <p className="text-accent font-medium text-sm">{cert.year}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Publications Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-primary mb-6">Selected Publications</h2>
          <p className="text-foreground/70 mb-8">Author or co-author of 12 peer-reviewed articles in numerical methods and mathematical modelling.</p>

          <div className="max-w-3xl space-y-4">
            {publications.map((pub, index) => (
              <div key={index} className="flex gap-4 p-4 bg-card rounded-lg border border-border hover:border-accent transition-smooth">
                <span className="text-accent font-bold flex-shrink-0">{index + 1}.</span>
                <p className="text-foreground/80">{pub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary/5 border-t border-border">
        <div className="container text-center">
          <h3 className="text-primary mb-4">Interested in Collaboration?</h3>
          <p className="text-foreground/70 mb-6 max-w-2xl mx-auto">
            I'm open to consulting opportunities, research collaborations, and speaking engagements.
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
