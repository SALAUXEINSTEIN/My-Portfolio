/**
 * Training Page
 * Design: Modern Academic + Data-Driven Minimalism
 * - Comprehensive training program catalog
 * - Course descriptions with learning outcomes
 * - Testimonials from past participants
 */

import { Clock, Users, Award, BookOpen } from 'lucide-react';

export default function Training() {
  const courses = [
    {
      id: 1,
      title: 'AI Development & LLM Applications',
      focus: 'LLMs, prompt engineering, RAG, chatbots, and AI agents',
      delivery: 'Live cohort instruction',
      description: 'Practical instruction in the AI Developer track, from LLM fundamentals to building useful AI applications.',
      topics: [
        'Prompt engineering and structured outputs',
        'Retrieval-augmented generation',
        'Chatbots and conversational applications',
        'Agent workflows and tool use',
        'Evaluation and responsible AI practices',
      ],
      outcomes: [
        'Build practical LLM-powered applications',
        'Connect models to tools and external information',
        'Evaluate outputs and guard against fabricated claims',
        'Present a project in a developer portfolio',
      ],
    },
    {
      id: 2,
      title: 'Data Analytics',
      focus: 'Excel, SQL, Python, data cleaning, visualisation, and Power BI',
      delivery: 'Cohort-based teaching',
      description: 'Business-focused analytics training using practical case studies and capstone projects built around real datasets.',
      topics: [
        'Spreadsheet analysis and reporting',
        'SQL for querying and data preparation',
        'Python with Pandas and NumPy',
        'Data cleaning and visualisation',
        'Power BI dashboards and storytelling',
      ],
      outcomes: [
        'Clean and analyse business datasets',
        'Write practical SQL and Python analyses',
        'Build and explain Power BI dashboards',
        'Present findings with clear data stories',
      ],
    },
    {
      id: 3,
      title: 'Machine Learning & Applied AI',
      focus: 'Model development, evaluation, and deployment',
      delivery: 'Project-based instruction',
      description: 'Hands-on learning across machine learning, deep learning, NLP, and computer vision, with deployment-oriented projects.',
      topics: [
        'Scikit-learn modelling and evaluation',
        'TensorFlow and PyTorch workflows',
        'NLP and transformer applications',
        'Computer vision and explainability',
        'Serving models with web applications',
      ],
      outcomes: [
        'Train and evaluate machine-learning models',
        'Choose metrics appropriate to a task',
        'Build an interface around a model',
        'Explain limitations and model outputs',
      ],
    },
    {
      id: 4,
      title: 'DevOps & Cloud for Data Applications',
      focus: 'Docker, CI/CD, Terraform, and AWS machine-learning services',
      delivery: 'Workshops and cohort training',
      description: 'Practical foundations for packaging, testing, and deploying data and machine-learning applications.',
      topics: [
        'Docker images and Compose workflows',
        'Jenkins and GitHub Actions CI/CD',
        'Infrastructure as code with Terraform',
        'AWS SageMaker, S3, and ECS',
        'Linux, Bash, and deployment practice',
      ],
      outcomes: [
        'Containerise an application for deployment',
        'Automate tests and delivery steps',
        'Understand cloud deployment building blocks',
        'Apply DevOps practices to ML projects',
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-primary mb-6">Training Programs</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              Practical, project-based instruction drawn from my work teaching AI development, data analytics, machine learning, and DevOps.
            </p>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Topics I Teach</h2>

          <div className="grid grid-cols-1 gap-8">
            {courses.map((course) => (
              <div
                key={course.id}
                className="group p-8 bg-card rounded-xl border border-border hover:border-accent hover:shadow-lg transition-smooth"
              >
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6 pb-6 border-b border-border">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-foreground/60">Delivery</p>
                      <p className="font-semibold text-foreground">{course.delivery}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-foreground/60">Approach</p>
                      <p className="font-semibold text-foreground">Project-based</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Award className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-foreground/60">Practice</p>
                      <p className="font-semibold text-foreground">Hands-on projects</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <BookOpen className="w-5 h-5 text-accent" />
                    <div>
                      <p className="text-xs text-foreground/60">Focus</p>
                      <p className="font-semibold text-foreground">{course.focus}</p>
                    </div>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                  {course.title}
                </h3>

                <p className="text-foreground/80 mb-6">{course.description}</p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
                  <div>
                    <h4 className="font-semibold text-primary mb-3">Topics Covered</h4>
                    <ul className="space-y-2">
                      {course.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-2 text-foreground/80">
                          <span className="text-accent mt-1">•</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-semibold text-primary mb-3">Learning Outcomes</h4>
                    <ul className="space-y-2">
                      {course.outcomes.map((outcome, index) => (
                        <li key={index} className="flex items-start gap-2 text-foreground/80">
                          <span className="text-accent mt-1">✓</span>
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a href="/contact" className="flex-1">
                    <button className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-smooth">
                      Enroll Now
                    </button>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Teaching approach */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">How I Teach</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              'Translate technical concepts into practical exercises and real-world builds.',
              'Use checkpoints and portfolio projects to make learning progress visible.',
              'Give structured feedback through code reviews and assessment.',
              'Support learners one-to-one and adapt lessons to cohort progress.',
            ].map((approach, index) => (
              <div
                key={index}
                className="p-8 bg-card rounded-xl border border-border hover:border-accent transition-smooth"
              >
                <p className="text-foreground/80">{approach}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Training */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto bg-primary/5 border border-primary/20 rounded-xl p-8 md:p-12">
            <h2 className="text-primary mb-4">Custom Training Programs</h2>
            <p className="text-foreground/80 mb-6">
              Need a tailored training program for your organization? I design and deliver custom courses based on your specific needs, skill levels, and objectives.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                'Customized curriculum aligned with your goals',
                'Flexible scheduling (online, in-person, or hybrid)',
                'Hands-on projects relevant to your industry',
                'Post-training support and mentoring',
                'Team assessments and progress tracking',
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-foreground/80">
                  <span className="text-accent">✓</span>
                  {item}
                </li>
              ))}
            </ul>
            <a href="/contact" className="inline-block">
              <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-smooth">
                Request Custom Program
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-primary text-primary-foreground border-t border-border">
        <div className="container text-center">
          <h3 className="text-primary-foreground mb-4">Ready to Advance Your Skills?</h3>
          <p className="text-primary-foreground/90 mb-6 max-w-2xl mx-auto">
              Tell me about your cohort, team, or training goals and we can discuss a suitable session.
          </p>
          <a href="/contact" className="inline-block">
            <button className="px-8 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-medium transition-smooth">
              Enroll Today
            </button>
          </a>
        </div>
      </section>
    </div>
  );
}
