import React from "react";
import styles from "./about.module.css"
import WorkshopCard from "@/components/WorkshopCard";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* Workshop-style header with geometric accent */}
      <div className={styles.sectionHeader}>
        <div className={styles.cornerBracket}></div>
        <h2 className={styles.title}>Building the Toolbox</h2>
        <div className={styles.titleUnderline}>
          <div className={styles.line}></div>
          <div className={styles.diamond}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className={styles.content}>
        <div className={styles.craftPhases}>
          {/* Phase 1: Translation Craft */}
          <WorkshopCard
            theme="light"
            marker="01"
            skillBadge="Attention to Detail"
            statusLight={false}
            className={styles.phaseCard}
          >
            <h3 className={styles.phaseTitle}>Language & Precision</h3>
            <p className={styles.phaseContent}>
              Started as a translator specializing in Korean language—literature,
              cinema, traditional arts. Turns out translating a 400-page novel teaches
              you a lot about precision: every word carries weight, context shapes
              meaning, and quality lives in the details most people never see.
            </p>
          </WorkshopCard>

          {/* Phase 2: Software Craft */}
          <WorkshopCard
            theme="light"
            marker="02"
            skillBadge="Problem Solving"
            statusLight={false}
            className={styles.phaseCard}
          >
            <h3 className={styles.phaseTitle}>Building Systems</h3>
            <p className={styles.phaseContent}>
              Intensive bootcamp in Paris revealed that spoken languages and programming
              languages aren&apos;t so different—both need structure, syntax, and an
              understanding of how pieces connect. First full-stack role in Melbourne&apos;s
              caffeinated chaos: learning to build systems from start to finish, at
              every layer.
            </p>
          </WorkshopCard>

          {/* Phase 3: Systems Craft */}
          <WorkshopCard
            theme="light"
            marker="03"
            skillBadge="System Design"
            statusLight={false}
            className={styles.phaseCard}
          >
            <h3 className={styles.phaseTitle}>What Lies Beneath</h3>
            <p className={styles.phaseContent}>
              Deliberately dove into backend work—the foundation that makes everything
              else possible. Python, .NET, databases, APIs. There&apos;s something satisfying
              about building the engine room. Now as a consultant, I get the best of
              both worlds: variety in projects, depth in systems.
            </p>
          </WorkshopCard>
        </div>

        <div className={styles.beyondCode}>
          <h3 className={styles.beyondTitle}>Beyond the Keyboard</h3>
          <p className={styles.beyondContent}>
            Off-duty, you&apos;ll find me playing video games, crocheting, soldering retro
            consoles, playing music, throwing pottery, or managing two very opinionated
            cats.
          </p>
        </div>
      </div>

      {/* Background geometric element */}
      <div className={styles.backgroundGeometry}>
        <div className={styles.orbitCircle}></div>
      </div>
    </section>
  );
}
