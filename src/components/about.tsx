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
        <h2 className="text-3xl font-serif font-medium capitalize mb-8 text-center">
          About me
        </h2>
        <p>
          I was born and raised in France, but my curiosity led me to explore
          the world beyond my homeland, starting with the bustling streets of
          Seoul. I became a translator and interpret in Korean language,
          specialising in cinema and traditional music.
        </p>
        <p>
          But after a few years I was ready to expand my skills. In my eyes, the
          line between a spoken language and a programing one is very thin!
        </p>
        <p>
          So I learned how to code and I left for the caffeinated kingdom of
          Melbourne, Australia, where I got my first full-stack developer job
          back in 2019. It was an amazing experience that only solidified my
          desire to stay and grow in the IT industry. I really love being given
          problems and translate them into solutions that have a positive impact
          on users.
        </p>
        <p>
          I &quot;crossed the ditch&quot; not long after to live in Wellington
          Te Whanganui-a-Tara, Aotearoa New Zealand, and worked as a backend
          software engineer for a couple digital agencies. Focusing on the
          backend was a deliberate choice that I do not regret. There is more
          fun in understanding what happens under the hood.
        </p>

        <p>
          I finally ended my peregrinations in Ottawa, and was granted permanent
          residency in 2023, so I can now call Canada home!
        </p>
        <p>
          All these experiences have helped me grow, have enriched my worldview
          and fueled me with the desire to give a voice to diverse group of
          people through my work. And if I can help save the planet in the
          process, that&apos;s an added bonus.
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
