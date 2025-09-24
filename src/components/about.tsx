import React from "react";
import styles from "./about.module.css"

export default function About() {
  return (
    <section id="about" className={styles.about}>
      {/* Workshop-style header with geometric accent */}
      <div className={styles.sectionHeader}>
        <div className={styles.cornerBracket}></div>
        <h2 className={styles.title}>About Me</h2>
        <div className={styles.titleUnderline}>
          <div className={styles.line}></div>
          <div className={styles.diamond}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      <div className={styles.content}>
        {/* Journey timeline with geometric markers */}
        <div className={styles.journeySection}>
          <div className={styles.journeyItem}>
            <div className={styles.marker}>01</div>
            <div className={styles.journeyContent}>
              <h3 className={styles.journeyTitle}>FRANCE → SEOUL</h3>
              <p>
                Born and raised in France, my curiosity drove me beyond my homeland to the bustling streets of
                Seoul, where I became a translator specializing in Korean literature, cinema and traditional music.
              </p>
            </div>
          </div>

          <div className={styles.journeyItem}>
            <div className={styles.marker}>02</div>
            <div className={styles.journeyContent}>
              <h3 className={styles.journeyTitle}>THE PIVOT</h3>
              <p>
                After years of publications and movie festivals, I was ready to expand my skills.
                The line between spoken languages and programming ones seemed thin! A 6-month intensive bootcamp
                led me to Melbourne's caffeinated kingdom, where I landed my first full-stack developer role.
              </p>
            </div>
          </div>

          <div className={styles.journeyItem}>
            <div className={styles.marker}>03</div>
            <div className={styles.journeyContent}>
              <h3 className={styles.journeyTitle}>BACKEND FOCUS</h3>
              <p>
                I "crossed the ditch" to Wellington, Aotearoa New Zealand, working as a Python Backend Engineer.
                Focusing on backend was deliberate—there's more rebellion in understanding what happens <span className={styles.emphasis}>underneath the hood</span>.
              </p>
            </div>
          </div>

          <div className={styles.journeyItem}>
            <div className={styles.marker}>04</div>
            <div className={styles.journeyContent}>
              <h3 className={styles.journeyTitle}>HOME BASE</h3>
              <p>
                Finally settled in Ottawa, broadening horizons in cybersecurity.
                Celebrated my Permanent Residency in 2023—Canada is now home.
              </p>
            </div>
          </div>
        </div>

        {/* Workshop philosophy section */}
        <div className={styles.philosophy}>
          <div className={styles.philosophyHeader}>
            <div className={styles.serviceMarker}>◈</div>
            <span className={styles.philosophyTitle}>WORKSHOP PHILOSOPHY</span>
          </div>
          <p className={styles.philosophyText}>
            Building solutions with craftmanship focus. Every problem is a puzzle waiting to be solved,
            every line of code serves a purpose. Function over flash, but with thoughtful rebellion.
          </p>
        </div>

        {/* Personal interests */}
        <div className={styles.interests}>
          <h3 className={styles.interestsTitle}>Beyond Code</h3>
          <div className={styles.interestsTags}>
            <span className={styles.tag}>Video Games</span>
            <span className={styles.tag}>D&D</span>
            <span className={styles.tag}>Crocheting</span>
            <span className={styles.tag}>Violin</span>
            <span className={styles.tag}>Unreal Engine</span>
            <span className={styles.tag}>Cat Whisperer</span>
          </div>
        </div>
      </div>

      {/* Background geometric element */}
      <div className={styles.backgroundGeometry}>
        <div className={styles.orbitCircle}></div>
      </div>
    </section>
  );
}
