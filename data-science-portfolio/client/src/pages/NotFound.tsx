import { Link } from 'wouter';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/10">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          {/* 404 Display */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[150px] font-bold text-accent/20 leading-none" style={{ fontFamily: 'Playfair Display, serif' }}>
              404
            </h1>
          </div>

          {/* Content */}
          <h2 className="text-primary mb-4">Page Not Found</h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
            The page you're looking for doesn't exist. It may have been moved or removed, or you might have followed an incorrect link.
          </p>

          {/* Suggestions */}
          <div className="bg-card rounded-lg border border-border p-8 mb-8">
            <h3 className="text-primary mb-4 font-semibold">Here are some helpful links:</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <a className="no-underline px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-smooth">
                  Go Home
                </a>
              </Link>
              <Link href="/projects">
                <a className="no-underline px-6 py-3 border border-primary text-primary hover:bg-primary/5 rounded-lg font-medium transition-smooth">
                  View Projects
                </a>
              </Link>
              <Link href="/contact">
                <a className="no-underline px-6 py-3 border border-accent text-accent hover:bg-accent/5 rounded-lg font-medium transition-smooth">
                  Contact Me
                </a>
              </Link>
            </div>
          </div>

          {/* Back Link */}
          <Link href="/">
            <a className="no-underline inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
