import React from "react";
import Image from "next/image";
import CtaButtons from "@/components/ctaButtons";
import styles from "./intro.module.css";

export default function Intro() {
  return (
    <section
      id="home"
      className={styles.homeSection}
    >
      <div
        data-id="yellow-decoration-marker"
        className={styles.yellowDecoration}
      />
      <div className={styles.headerContainer}>
        <div className={styles.headerLeft}>
          <div className={styles.title}>
            Hi, my name is
            <br/>
            Melissa
          </div>
          <div className={styles.subtitle}>
            I&apos;m a Software Developer living in Ottawa, Canada
          </div>
          <CtaButtons/>
        </div>
        <Image
          src="/images/mel-cutout-bg.png"
          alt="profile photo"
          width={300}
          height={220}
          priority={true}
          className={styles.image}
        />
      </div>
    </section>
  );
}
