/**
 * Contact Page
 * Design: Modern Academic + Data-Driven Minimalism
 * - Contact form for inquiries
 * - Contact information and social links
 * - Response time expectations
 */

import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';
import { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || 'Portfolio inquiry');
    const body = encodeURIComponent(`From: ${formData.name} (${formData.email})\n\n${formData.message}`);
    window.location.href = `mailto:a.salau1996@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'a.salau1996@gmail.com',
      href: 'mailto:a.salau1996@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+234 806 481 7040',
      href: 'tel:+2348064817040',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Lagos, Nigeria',
      href: 'https://maps.google.com/?q=Lagos%2C+Nigeria',
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/ayobami-salau-199a33199/',
      color: 'hover:text-blue-600',
    },
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/SALAUXEINSTEIN',
      color: 'hover:text-gray-800',
    },
    {
      icon: Mail,
      label: 'Email',
      href: 'mailto:a.salau1996@gmail.com',
      color: 'hover:text-green-600',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-background to-secondary/10">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-primary mb-6">Get in Touch</h1>
            <p className="text-xl text-foreground/80 leading-relaxed">
              I'm always interested in discussing new projects, research collaborations, and opportunities. Feel free to reach out with your inquiries.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-primary mb-8">Contact Information</h2>

                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <a
                      key={index}
                      href={info.href}
                      className="no-underline flex items-start gap-4 mb-6 group"
                    >
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-smooth flex-shrink-0">
                        <Icon className="w-6 h-6 text-accent" />
                      </div>
                      <div>
                        <p className="text-sm text-foreground/60 mb-1">{info.label}</p>
                        <p className="font-semibold text-foreground group-hover:text-accent transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Social Links */}
              <div className="pt-6 border-t border-border">
                <h3 className="text-primary mb-4">Connect With Me</h3>
                <div className="flex gap-4">
                  {socialLinks.map((link, index) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={index}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="no-underline"
                        aria-label={link.label}
                      >
                        <div className={`w-10 h-10 rounded-lg bg-secondary flex items-center justify-center text-foreground transition-smooth ${link.color}`}>
                          <Icon className="w-5 h-5" />
                        </div>
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Response Time */}
              <div className="pt-6 border-t border-border bg-primary/5 rounded-lg p-4">
                <p className="text-sm text-foreground/80">
                  <span className="font-semibold text-primary">Response Time:</span> I typically respond to inquiries within 24-48 hours.
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-xl border border-border p-8 md:p-10">
                <h2 className="text-primary mb-6">Send Me a Message</h2>

                {submitted ? (
                  <div className="bg-accent/10 border border-accent rounded-lg p-6 text-center">
                    <p className="text-accent font-semibold mb-2">Your email app should open with this message.</p>
                    <p className="text-foreground/70">
                      Send the prepared email to contact me directly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                        placeholder="Your name"
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email Address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-smooth"
                      >
                        <option value="">Select a subject</option>
                        <option value="ai">AI Development</option>
                        <option value="machine-learning">Machine Learning</option>
                        <option value="analytics">Data Analytics</option>
                        <option value="training">Technical Training</option>
                        <option value="thesis">Ph.D. Thesis Supervision</option>
                        <option value="publication">Research & Publication Assistance</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-foreground/40 focus:outline-none focus:ring-2 focus:ring-accent transition-smooth resize-none"
                        placeholder="Tell me about your project or inquiry..."
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-accent-foreground rounded-lg font-semibold transition-smooth"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-32 bg-secondary/10">
        <div className="container">
          <h2 className="text-primary mb-12 text-center">Frequently Asked Questions</h2>

          <div className="max-w-3xl mx-auto space-y-6">
            {[
              {
                q: 'What is your typical response time?',
                a: 'I aim to respond to all inquiries within 24-48 hours. During busy periods, it may take slightly longer.',
              },
              {
                q: 'Do you offer remote consulting and training?',
                a: 'Yes, I offer both online and in-person services. Remote consulting and training can be conducted via video conferencing with flexible scheduling.',
              },
              {
                q: 'What kinds of projects do you work on?',
                a: 'I build LLM applications and agents, machine-learning and computer-vision tools, and data engineering workflows.',
              },
              {
                q: 'Which research areas can you support?',
                a: 'I have supervised Ph.D. thesis work in Mathematics, Transportation Engineering, Computer Science, Machine Learning, Artificial Intelligence, Nursing, and related disciplines.',
              },
              {
                q: 'What does publication assistance include?',
                a: 'Support can include research consultation, analysis and interpretation, manuscript structure and clarity, formatting, and submission preparation.',
              },
              {
                q: 'What technical training do you deliver?',
                a: 'My teaching includes AI development, LLMs, data analytics, machine learning, and DevOps/cloud topics, delivered through practical projects and cohort instruction.',
              },
              {
                q: 'Can we discuss a project or training engagement?',
                a: 'Yes. Share your goals, audience, and expected outcome through the contact form and I will follow up by email.',
              },
            ].map((faq, index) => (
              <div key={index} className="p-6 bg-card rounded-lg border border-border hover:border-accent transition-smooth">
                <h3 className="text-primary mb-2 font-semibold">{faq.q}</h3>
                <p className="text-foreground/80">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
