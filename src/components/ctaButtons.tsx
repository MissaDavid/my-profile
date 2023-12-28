import Link from "next/link";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import React from "react";

import styles from "./ctaButtons.module.css"


function CtaButtons() {
  return (
    <div className={styles.ctaButtons}>
      <Link
        href="#contact"
        className={styles.contact}
      >
        <BsArrowRight />
        Contact Me
      </Link>
      <a
        href="/resume-mt.pdf"
        target="_blank"
        className={styles.download}
      >
        <HiDownload />
        View CV
      </a>
      <a
        href="https://www.linkedin.com/in/mel-david/"
        target="_blank"
        className={styles.linkedin}
      >
        <BsLinkedin />
      </a>
      <a
        href="https://github.com/MissaDavid"
        target="_blank"
        className={styles.github}
      >
        {" "}
        <BsGithub />{" "}
      </a>
    </div>
  );
}

export default CtaButtons;
