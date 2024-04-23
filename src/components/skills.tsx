"use client";
import React, {useState} from "react";
import {skills, type Skill} from "@/data/content";
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

const sortedSkills = skills.sort((a, b) => a.name.localeCompare(b.name));
const skillsByCategory = groupBy(sortedSkills, ({category}) => category);

const Skill = ({id, category, logo, name}: Skill) => {
  return (
    <label htmlFor={id} className={styles[`${category}Skill`]}>
      <input className={styles.input} type="checkbox" name={name} id={id}/>
      <div className={styles.leftNook}>
        {category.split("").map((letter, index) => (
          <h4 key={`${index}-${letter}`} className={styles.category}>
            {letter}
          </h4>
        ))}
      </div>
      <div className={styles.cardCentre}>
        <h3 className={styles.name}>{name}</h3>
        <div className={styles.logo}>{logo}</div>
      </div>
      <div className={styles.rightNook}>
      </div>
    </label>
  );
};

const Skills = () => {
  const [hoveredId, setHoveredId] = useState<undefined | string>()

  const renderCard = (skill: Skill) => {
    return (
      <>
        <div
          key={skill.id}
          className={styles.card}
          onMouseLeave={() => setHoveredId(undefined)}
          onMouseEnter={() => setHoveredId(skill.id)}
        >
          <Skill key={skill.id} {...skill} />
        </div>
        {
          hoveredId === skill.id &&
          (<div
            key={skill.id}
            className={styles.hoveredCard}
          >
            <Skill key={skill.id} {...skill} />
          </div>)
        }
      </>
    );
  }

  const renderSkills = () => {
    const skillEntries = Object.entries(skillsByCategory) as [string, Skill[]][];
    return skillEntries.map(([key, value]) => {
      return (
        <div key={key} className={styles.cardColumn}>
          {value.map(renderCard)}
        </div>
      );
    });
  }

  return (
    <section id="skills" className={styles.skillSection}>
      <h2 className={styles.title}>
        Skills
      </h2>
      <div>
        <p>
          I&apos;m a <span className="font-bold">Backend developer</span> who is also comfortable
          working on the frontend from time to time. <br/>
          I&apos;m not afraid of working with different programming languages or
          frameworks (if I were to get the opportunity to work with Rust,
          I would happily take on the challenge!). <br/>
          Over the last 5 years, I have contributed to a diverse range of web applications, from startup
          ventures to enterprise-level projects. During this period, I have developed numerous REST APIs and
          worked with various ORMs, as well as raw SQL. I also had the rewarding experience of mentoring
          people across all skill levels. <br/>
          In an ideal scenario, I would love to work on meaningful projects that would give me the opportunity to help
          people. <br/>
        </p>
        <div className={styles.deck}>
          {renderSkills()}
        </div>
      </div>
    </section>
  );
};

export default Skills;
