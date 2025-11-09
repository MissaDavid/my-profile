"use client";
import React from "react";
import {type Skill, skills} from "@/data/content";
import styles from "./skills.module.css";

const groupBy = (set: Iterable<any>, fn: (val: any) => string) => {
  return Array.from(set).reduce((accum, val) => {
    const key = fn(val);
    if (accum[key]) {
      return {...accum, [key]: [...accum[key], val]};
    }
    return {...accum, [key]: [val]};
  }, {});
};

const sortedSkills = skills.sort((a, b) => a.level - b.level || a.name.localeCompare(b.name));
const skillsByCategory = groupBy(sortedSkills, ({category}) => category);

const categoryIcons: Record<string, string> = {
  languages: "◈",
  frameworks: "◆",
  libraries: "▶",
  databases: "●",
  tools: "▲",
  speech: "■"
};

const categoryTitles: Record<string, string> = {
  languages: "LANGUAGES",
  frameworks: "FRAMEWORKS",
  libraries: "LIBRARIES",
  databases: "DATABASES",
  tools: "TOOLS",
  speech: "COMMUNICATION"
};

const SkillItem = ({skill}: {skill: Skill}) => {
  return (
    <div className={styles.skillItem}>
      <div className={styles.skillInfo}>
        <div className={styles.skillLogo}>{skill.logo}</div>
        <span className={styles.skillName}>{skill.name}</span>
      </div>
    </div>
  );
};

const SkillCategory = ({category, skills}: {category: string, skills: Skill[]}) => {
  return (
    <div className={styles.categorySection}>
      <div className={styles.categoryHeader}>
        <div className={styles.serviceMarker}>
          {categoryIcons[category]}
        </div>
        <h3 className={styles.categoryTitle}>
          {categoryTitles[category]}
        </h3>
        <div className={styles.categoryLine}></div>
      </div>

      <div className={styles.skillsGrid}>
        {skills.map((skill) => (
          <SkillItem key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className={styles.skillSection}>
      {/* Workshop-style header */}
      <div className={styles.sectionHeader}>
        <div className={styles.cornerBracket}></div>
        <h2 className={styles.title}>Workshop Arsenal</h2>
        <div className={styles.titleUnderline}>
          <div className={styles.line}></div>
          <div className={styles.diamond}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      {/* Philosophy text */}
      <div className={styles.philosophy}>
        <p>
          <span className={styles.emphasis}>Backend-focused craftsperson</span> comfortable across the full stack.
          Not afraid of new languages or frameworks—give me Rust and I&apos;ll take the challenge gladly.
        </p>
        <p>
          Five years building everything from startup MVPs to enterprise systems. REST APIs, ORMs, raw SQL,
          mentoring developers at all levels. The goal: meaningful projects that make people&apos;s lives better.
        </p>
      </div>

      {/* Skills arsenal */}
      <div className={styles.skillsArsenal}>
        {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
          <SkillCategory
            key={category}
            category={category}
            skills={categorySkills as Skill[]}
          />
        ))}
      </div>

      {/* Background geometric elements */}
      <div className={styles.backgroundGeometry}>
        <div className={styles.meshPattern}></div>
        <div className={styles.cornerAccent}></div>
      </div>
    </section>
  );
};

export default Skills;
