"use client";
import React from "react";
import {motion} from "framer-motion";

type DividerProps = { className?: string };

function Divider({ className}: DividerProps ) {
  return (
    <motion.div
      className={`flex items-center justify-center gap-4 my-16 ${className || ''}`}
      initial={{opacity: 0, y: 50}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.125, duration: 0.6}}
    >
      {/* Workshop geometric divider */}
      <div
        className="w-12 h-px"
        style={{ background: "var(--dust)" }}
      />
      <div
        className="w-3 h-3 rotate-45 opacity-60"
        style={{ background: "var(--workshop-green)" }}
      />
      <div
        className="w-16 h-px"
        style={{ background: "var(--steel-gray)", opacity: 0.3 }}
      />
      <div
        className="w-2 h-2 rounded-full"
        style={{ background: "var(--rust-red)", opacity: 0.8 }}
      />
      <div
        className="w-16 h-px"
        style={{ background: "var(--steel-gray)", opacity: 0.3 }}
      />
      <div
        className="w-3 h-3 rotate-45 opacity-60"
        style={{ background: "var(--workshop-green)" }}
      />
      <div
        className="w-12 h-px"
        style={{ background: "var(--dust)" }}
      />
    </motion.div>
  );
};

export default Divider;
