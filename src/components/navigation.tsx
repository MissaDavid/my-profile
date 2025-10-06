"use client";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

import {links} from "@/data/content";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map(link => link.hash.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(`#${section}`);
            break;
          }
        }
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 w-full h-16 shadow-lg backdrop-blur-[0.5rem]"
        style={{
          backgroundColor: "var(--workshop-surface)",
          borderBottom: `3px solid var(--workshop-border)`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.25rem] left-1/2 h-14 -translate-x-1/2 py-3 px-4 w-full max-w-7xl">
        <div className="flex items-center justify-between w-full">
          {/* Logo with blinking cursor */}
          <Link
            href="/"
            className="font-bold text-base sm:text-lg relative logo-with-cursor"
            style={{
              fontFamily: "var(--jetbrains-mono)",
              color: "var(--workshop-brass)",
              letterSpacing: "-0.02em"
            }}
          >
            meibee.dev
          </Link>

          {/* Geometric accent - corner bracket (hidden on mobile) */}
          <div
            className="w-6 h-6 mr-2 sm:mr-4 hidden sm:block"
            style={{
              border: `2px solid var(--leather-tan)`,
              borderRight: 'none',
              borderBottom: 'none'
            }}
          />

          <ul className="flex items-center justify-center gap-x-2 sm:gap-x-4 text-[0.65rem] sm:text-[0.9rem] font-medium uppercase tracking-wider">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="flex items-center justify-center h-full relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className={`nav-link px-2 sm:px-4 py-2 relative ${activeSection === link.hash ? 'active' : ''}`}
                  href={link.hash}
                >
                  {link.name}
                </Link>
              </motion.li>
            ))}
          </ul>

          {/* Geometric accent - corner bracket (right, hidden on mobile) */}
          <div
            className="w-6 h-6 ml-2 sm:ml-4 hidden sm:block"
            style={{
              border: `2px solid var(--leather-tan)`,
              borderLeft: 'none',
              borderBottom: 'none',
              transform: 'rotate(90deg)'
            }}
          />
        </div>
      </nav>
    </header>
  );
}
