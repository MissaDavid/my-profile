import React from "react";

const Footer = () => {
  return (
    <footer
      className="mt-32 px-6 py-20 relative"
      style={{
        background: "var(--dust)",
        borderTop: `2px solid var(--olive-dark)`
      }}
    >
      <div className="max-w-6xl mx-auto text-center relative">
        {/* Corner brackets */}
        <div
          className="absolute top-0 left-0 w-8 h-8 opacity-30"
          style={{
            border: `2px solid var(--workshop-green)`,
            borderRight: 'none',
            borderBottom: 'none'
          }}
        />
        <div
          className="absolute top-0 right-0 w-8 h-8 opacity-30"
          style={{
            border: `2px solid var(--workshop-green)`,
            borderLeft: 'none',
            borderBottom: 'none'
          }}
        />

        {/* Footer content */}
        <div className="space-y-6">
          {/* Workshop signature */}
          <div className="flex items-center justify-center gap-4 mb-8">
            <div
              className="w-6 h-6 flex items-center justify-center text-sm font-bold"
              style={{
                background: "var(--workshop-green)",
                color: "var(--warm-white)"
              }}
            >
              ◈
            </div>
            <span
              className="text-sm font-medium tracking-wider uppercase"
              style={{ color: "var(--olive-dark)" }}
            >
              Workshop Built
            </span>
            <div
              className="w-6 h-6 flex items-center justify-center text-sm font-bold"
              style={{
                background: "var(--rust-red)",
                color: "var(--warm-white)"
              }}
            >
              ◆
            </div>
          </div>

          {/* Copyright */}
          <div
            className="text-xs tracking-wider uppercase"
            style={{ color: "var(--steel-gray)" }}
          >
            &copy; 2025 Melissa Tamplin
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap items-center justify-center gap-2 text-xs">
            <span style={{ color: "var(--steel-gray)" }}>Crafted with:</span>
            {[
              "React", "Next.js", "TypeScript", "Tailwind",
              "Framer Motion", "Storybook", "Resend"
            ].map((tech, index) => (
              <span key={tech}>
                <span
                  className="font-medium transition-colors duration-300 hover:text-opacity-100"
                  style={{
                    color: "var(--workshop-green)",
                    opacity: 0.8
                  }}
                >
                  {tech}
                </span>
                {index < 6 && <span style={{ color: "var(--dust)" }}>•</span>}
              </span>
            ))}
          </div>

          {/* Deployment info */}
          <div
            className="text-xs"
            style={{ color: "var(--steel-gray)" }}
          >
            Deployed on Vercel • Function over flash, always.
          </div>
        </div>

        {/* Bottom geometric accent */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2">
          <div
            className="w-4 h-4 rotate-45"
            style={{ background: "var(--workshop-green)", opacity: 0.6 }}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
