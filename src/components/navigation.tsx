"use client";
import React, {useEffect, useState} from "react";
import {motion} from "framer-motion";
import Link from "next/link";

import {links} from "@/data/content";
import Logo from "./Logo";
import WorkshopNavItem from "./WorkshopNavItem";

export default function Navigation() {
  const [activeSection, setActiveSection] = useState("");
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

  const handleNavClick = (href: string) => {
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

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
          {/* Logo and brand */}
          <Link
            href="/"
            className="flex items-end gap-1.5"
          >
            <Logo variant={theme === 'dark' ? 'brass' : 'original'} size={32} />
            <span
              className="font-bold text-base sm:text-lg"
              style={{
                fontFamily: "var(--jetbrains-mono)",
                color: "var(--workshop-brass)",
                letterSpacing: "-0.02em"
              }}
            >
              meibee.dev
            </span>
          </Link>

          {/* Workshop Navigation Items */}
          <ul className="flex items-center justify-center gap-x-2 sm:gap-x-4 text-[0.65rem] sm:text-[0.9rem] font-medium uppercase tracking-wider">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="flex items-center justify-center h-full relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <WorkshopNavItem
                  href={link.hash}
                  active={activeSection === link.hash}
                  onClick={() => handleNavClick(link.hash)}
                  theme={theme}
                  ariaCurrent={activeSection === link.hash}
                  className="px-2 sm:px-4 py-2"
                >
                  {link.name}
                </WorkshopNavItem>
              </motion.li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
}
