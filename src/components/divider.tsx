"use client";
import React from "react";
import {motion} from "framer-motion";
import Logo from "./Logo";

type DividerProps = { className?: string };

function Divider({ className}: DividerProps ) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-4 my-16 ${className || ''}`}
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.125, duration: 0.6}}
    >
      {/* Left side geometric line */}
      <div
        className="w-24 h-px"
        style={{ background: "var(--steel-gray)", opacity: 0.4 }}
      />

      {/* Logo centerpiece */}
      <Logo size={32} variant="two-tone" />

      {/* Right side geometric line */}
      <div
        className="w-24 h-px"
        style={{ background: "var(--steel-gray)", opacity: 0.4 }}
      />
    </motion.div>
  );
};

export default Divider;
