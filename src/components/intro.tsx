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
          {/* Hero Hook */}
          <p className={styles.heroHook}>
            &ldquo;From translation work to building backend systems—precision work takes many forms.&rdquo;
          </p>

          {/* Hero Title */}
          <h1 className={styles.heroTitle}>Melissa Tamplin</h1>

          {/* Hero Subtitle */}
          <p className={styles.heroSubtitle}>Full-Stack Craftsperson | Backend-Focused</p>

          {/* Hero Location */}
          <p className={styles.heroLocation}>Based in Ottawa, Canada</p>

          {/* Hero Description */}
          <p className={styles.heroDescription}>
            I build robust digital solutions with the same care and precision required for translation:
            attention to detail, understanding what lies underneath, and function over flash.
          </p>

          {/* Skills Tags */}
          <div className={styles.heroSkills}>
            <span className={styles.skillTag}>Python</span>
            <span className={styles.skillTag}>.NET/C#</span>
            <span className={styles.skillTag}>TypeScript</span>
            <span className={styles.skillTag}>PostgreSQL</span>
            <span className={styles.skillTag}>Docker</span>
          </div>

          {/* CTA Buttons */}
          <div className={styles.heroCta}>
            <Link href="#contact">
              <WorkshopButton variant="primary" theme="dark">
                Start a Project
              </WorkshopButton>
            </Link>

            <Link href="#skills">
              <WorkshopButton variant="secondary" theme="dark">
                View Toolkit
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
