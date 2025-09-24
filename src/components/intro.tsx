import React from "react";
import CtaButtons from "@/components/ctaButtons";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section
      id="home"
      className={styles.homeSection}
    >
      {/* Background geometric elements */}
      <div className={styles.geometricBackground}>
        <div className={styles.orbitCircle}></div>
        <div className={styles.cornerBracket}></div>
        <div className={styles.diamond}></div>
      </div>

      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          {/* Status indicator */}
          <div className={styles.statusBadge}>
            <div className={styles.pulse}></div>
            Currently Available
          </div>

          <div className={styles.title}>
            <span className={styles.greeting}>Hi, my name is</span>
            <br/>
            <span className={styles.name}>Melissa</span>
          </div>

          <div className={styles.subtitle}>
            I&apos;m a Software Developer living in Ottawa, Canada
          </div>

          {/* Geometric separator */}
          <div className={styles.separator}>
            <div className={styles.separatorLine}></div>
            <div className={styles.separatorDiamond}></div>
            <div className={styles.separatorLine}></div>
          </div>

          <CtaButtons/>
        </div>
      </div>

      {/* Side geometric accent */}
      <div className={styles.sideAccent}>
        <div className={styles.serviceMarker}>◈</div>
        <div className={styles.serviceMarker}>▶</div>
        <div className={styles.serviceMarker}>◆</div>
      </div>
    </section>
  );
}
