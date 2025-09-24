"use client";
import React from "react";
import {motion} from "framer-motion";
import Link from "next/link";

import {links} from "@/data/content";

export default function Navigation() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 w-full h-16 shadow-lg backdrop-blur-[0.5rem]"
        style={{
          backgroundColor: "var(--worn-canvas)",
          borderBottom: `2px solid var(--olive-dark)`,
          boxShadow: "0 4px 20px rgba(0,0,0,0.1)"
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-[0.25rem] left-1/2 h-14 -translate-x-1/2 py-3">
        <div className="flex items-center">
          {/* Geometric accent - corner bracket */}
          <div
            className="w-6 h-6 mr-4"
            style={{
              border: `2px solid var(--workshop-green)`,
              borderRight: 'none',
              borderBottom: 'none'
            }}
          />

          <ul className="flex items-center justify-center gap-x-1 text-[0.9rem] font-medium text-sm uppercase tracking-wider">
            {links.map((link, index) => (
              <motion.li
                key={link.hash}
                className="flex items-center justify-center h-full relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <Link
                  className="flex items-center justify-center px-4 py-2 transition-all duration-300 relative group"
                  style={{ color: "var(--steel-gray)" }}
                  href={link.hash}
                >
                  <span className="relative z-10">{link.name}</span>

                  {/* Workshop-style hover background */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      backgroundColor: "var(--workshop-green)",
                    }}
                  />

                  {/* Corner accent on hover */}
                  <div
                    className="absolute top-0 left-0 w-2 h-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{
                      border: `1px solid var(--warm-white)`,
                      borderRight: 'none',
                      borderBottom: 'none'
                    }}
                  />

                  <span className="group-hover:text-white relative z-10 transition-colors duration-300">
                    {link.name}
                  </span>
                </Link>

                {/* Separator diamond */}
                {index < links.length - 1 && (
                  <div
                    className="w-2 h-2 mx-2 rotate-45 opacity-30"
                    style={{ backgroundColor: "var(--workshop-green)" }}
                  />
                )}
              </motion.li>
            ))}
          </ul>

          {/* Geometric accent - corner bracket (right) */}
          <div
            className="w-6 h-6 ml-4"
            style={{
              border: `2px solid var(--workshop-green)`,
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
