import React from "react";
import styles from "./about.module.css"
// import { motion } from "framer-motion";

// import useScrollPosition from "@/hooks/useScrollPosition";

export default function About() {
  // const scrollY = useScrollPosition();

  
  return (
    <div id="about" className={styles.about}>
      {/*<motion.section*/}
      {/*  animate={scrollY > 0 ? "complete" : "initial"}*/}
      {/*  variants={{*/}
      {/*    complete: { opacity: 1, y: 0 },*/}
      {/*    initial: { opacity: 0, y: "20%" },*/}
      {/*  }}*/}
      {/*  initial="initial"*/}
      {/*  transition={{ duration: 1 }}*/}
      {/*>*/}
        <h2 className="text-3xl font-serif font-medium capitalize mb-8">
          About me
        </h2>
        <p>
          I was born and raised in France, but my curiosity pushed me to discover
          the world beyond my homeland. My journey began in the bustling streets of
          Seoul, where I became a translator specialising in Korean literature,
          with a focus on cinema and traditional music.
        </p>
        <p>
          After a few years filled with publications and movie festivals, I was ready to expand my skills. 
          I had always wanted to learn how to code, and the line between spoken languages and programing ones seemed very thin!
          So shortly after finishing a 6 months intensive coding bootcamp, I left for the caffeinated kingdom of Melbourne, Australia.
          Many months later, I got my first full-stack developer job. And it was A-MA-ZING. Being given
          problems and being able to translate them into solutions that have a positive impact
          on users was very fulfilling, and that experience only solidified my desire to stay and grow in the IT industry.
        </p>
        <p>
          I &quot;crossed the ditch&quot; not long after to live in Wellington
          Te Whanganui-a-Tara, Aotearoa New Zealand, where I worked as a Python Backend
          Software Engineer in a couple different digital agencies. Focusing on the
          backend was a deliberate choice that I do not regret. To me, there is more
          fun in understanding what happens <span className="italic">underneath the hood</span> and bringing every piece of the puzzle together.
        </p>

        <p>
          Finally, I ended my peregrinations in Ottawa, and broadened my horizons by working in cybersecurity. 
          I also celebrated the grant of my Permanent Residency in 2023: I can now call Canada home!
        </p>

        <p>
          In my spare time, I like playing video games and D&D, crocheting,
          playing the violin, teaching myself Unreal Engine... And entertaining
          my two cats, Buddy and Pib.
        </p>
      {/*</motion.section>*/}
    </div>
  );
}
