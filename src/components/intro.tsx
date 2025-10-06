import React from "react";
import Link from "next/link";
import WorkshopButton from "@/components/WorkshopButton";
import {BsGithub, BsLinkedin} from "react-icons/bs";
import {HiDownload} from "react-icons/hi";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section
      id="home"
      className={styles.hero}
    >
      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          {/* Hero Label */}
          <span className={styles.heroLabel}>Full-Stack Craftsperson</span>

          {/* Hero Title */}
          <h1 className={styles.heroTitle}>Melissa</h1>

          {/* Hero Subtitle */}
          <p className={styles.heroSubtitle}>Software Developer</p>

          {/* Hero Description */}
          <p className={styles.heroDescription}>
            Building robust digital solutions with care and precision. Based in Ottawa, Canada,
            I approach each project as a maker who believes in doing things right.
          </p>

          {/* Skills Tags */}
          <div className={styles.heroSkills}>
            <span className={styles.skillTag}>Python</span>
            <span className={styles.skillTag}>FastAPI</span>
            <span className={styles.skillTag}>TypeScript</span>
            <span className={styles.skillTag}>React</span>
            <span className={styles.skillTag}>Next.js</span>
            <span className={styles.skillTag}>PostgreSQL</span>
          </div>

          {/* CTA Buttons */}
          <div className={styles.heroCta}>
            <Link href="#contact">
              <WorkshopButton variant="primary" theme="dark">
                Contact Me
              </WorkshopButton>
            </Link>

            <a href="/melissa-tamplin-2025-resume.pdf" target="_blank" rel="noopener noreferrer">
              <WorkshopButton variant="secondary" theme="dark">
                <HiDownload />
                View CV
              </WorkshopButton>
            </a>

            <div className={styles.socialButtons}>
              <a href="https://www.linkedin.com/in/mel-david/" target="_blank" rel="noopener noreferrer">
                <WorkshopButton variant="secondary" theme="dark" ariaLabel="LinkedIn">
                  <BsLinkedin />
                </WorkshopButton>
              </a>

              <a href="https://github.com/MissaDavid" target="_blank" rel="noopener noreferrer">
                <WorkshopButton variant="secondary" theme="dark" ariaLabel="Github">
                  <BsGithub />
                </WorkshopButton>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
