"use client";
import React, {useEffect, useState} from "react";
import Logo from "./Logo";

const Footer = () => {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    // Detect theme from document
    const updateTheme = () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') as 'light' | 'dark' || 'light';
      setTheme(currentTheme);
    };

    updateTheme();

    // Watch for theme changes
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    return () => observer.disconnect();
  }, []);

  return (
    <footer
      className="mt-32 px-6 py-20 relative"
      style={{
        background: "var(--workshop-subtle)",
        borderTop: `2px solid var(--workshop-border)`
      }}
    >
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Footer content */}
        <div className="space-y-6">
          {/* Workshop Built signature with maker's mark */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <Logo variant={theme === 'dark' ? 'brass' : 'two-tone'} size={36} />
            <div style={{ textAlign: 'left' }}>
              <div
                className="text-sm font-bold tracking-wider uppercase"
                style={{
                  fontFamily: "'Courier New', monospace",
                  color: "var(--workshop-heading)",
                  letterSpacing: '0.1em'
                }}
              >
                Workshop Built
              </div>
              <div
                className="text-xs uppercase"
                style={{
                  color: "var(--workshop-secondary)",
                  letterSpacing: '0.05em'
                }}
              >
                Maker&apos;s Mark
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="text-xs tracking-wider uppercase"
            style={{ color: "var(--workshop-secondary)" }}
          >
            &copy; 2025 Melissa Tamplin
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span style={{ color: "var(--workshop-secondary)" }}>Crafted with:</span>
            {[
              "React", "Next.js", "TypeScript", "Tailwind",
              "Framer Motion", "Storybook", "Resend"
            ].map((tech, index, arr) => (
              <span key={tech}>
                <span
                  className="font-semibold"
                  style={{
                    color: "var(--workshop-accent)"
                  }}
                >
                  {tech}
                </span>
                {index < arr.length - 1 && (
                  <span style={{ color: "var(--workshop-border)", margin: "0 0.25rem" }}>•</span>
                )}
              </span>
            ))}
          </div>

          {/* Deployment info */}
          <div
            className="text-xs italic"
            style={{ color: "var(--workshop-secondary)" }}
          >
            Deployed on Vercel • Function over flash, always.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
