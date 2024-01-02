"use client";
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

type DividerProps = { className?: string };

function Divider({ className}: DividerProps ) {
  return (
    <motion.div
      className={className}
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.125}}
    >
      <Image 
      src="/images/Cute_Bee.png"
      alt="pixel art of a cute bee"
      width={40}
      height={35}
      />
    </motion.div>
  );
};

export default Divider;
