"use client";
import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

export default function Divider() {
  return (
    <motion.div
      className="mt-16"
      initial={{opacity: 0, y: 100}}
      animate={{opacity: 1, y: 0}}
      transition={{delay: 0.125}}
    >
      <Image 
      src="/images/Cute_Bee.png"
      alt="pixel art of a cute bee"
      width={45}
      height={40}
      />
    </motion.div>
  );
}
