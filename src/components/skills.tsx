"use client";
import React from "react";
import { skills, type Skill } from "@/data/content";
import styles from "./skills.module.css";

// const groupBy = (set: Iterable<any>, fn: (val: any) => string) => {
//   return Array.from(set).reduce((accum, val) => {
//     const key = fn(val);
//
//     if (accum[key]) {
//       return { ...accum, [key]: [...accum[key], val] };
//     }
//
//     return { ...accum, [key]: [val] };
//   }, {});
// };
//
// const sortedSkills = skills.sort((a, b) => a.name.localeCompare(b.name));
// console.log("sorted?", sortedSkills);
// const skillsByCategory = groupBy(sortedSkills, ({ category }) => category);
// const skillsByCategoryByLevel = Object.entries(skillsByCategory).reduce(
//   (accum, [category, skills]) => {
//     // @ts-ignore
//     const categoryByLevel = groupBy(skills, ({ level }) => level);
//     return { ...accum, [category]: categoryByLevel };
//   },
//   {},
// );
//
// console.log(111111, skillsByCategory);

const skillsByCategoryAndLevel = skills.sort((a, b) =>
  a.category > b.category
    ? 1
    : a.category === b.category
      ? a.level > b.level
        ? 1
        : a.level === b.level
          ? a.name > b.name
            ? 1
            : -1
          : -1
      : -1,
);

const Skill = ({ category, logo, name, level }: Omit<Skill, "id">) => {
  return (
    <label htmlFor={name} className={styles[`cardLevel${level}`]}>
      <input className={styles.input} type="checkbox" name={name} />
      <div className={styles.leftNook}>
        {category.split("").map((letter, index) => (
          <h4 key={`${index}-${letter}`} className={styles.category}>
            {letter}
          </h4>
        ))}
      </div>
      <div className={styles.cardCentre}>
        <h3 className={styles[`name${level}`]}>{name}</h3>
        <div className={styles.logo}>{logo}</div>
      </div>
      <div className={styles.rightNook}>
        <h3 className={styles[`level${level}`]}>{level}</h3>
      </div>
    </label>
  );
};
const Skills = () => {
  return (
    <section id="skills" className={styles.skillSection}>
      <h2 className={styles.title}>
        Skills
      </h2>
      <div>
        <p>
          I&apos;m a <b>Python Backend developer</b> who is also comfortable
          working on the frontend from time to time. <br />
          I&apos;m not afraid of working with different programming languages or
          frameworks (if I were to get the opportunity to work with Rust, 
          I would happily take on the challenge!). <br />
          In the past 5 years, I have worked on enterprise quality web applications, developed numerous REST APIs, 
          worked with various ORMs as well as raw SQL, and mentored people of all levels. <br />
          In an ideal scenario, I would love to work on meaningful projects that would give me the opportunity to help people. <br/>
        </p>
        <div className={styles.deck}>
          {skillsByCategoryAndLevel.map(({ id, ...rest }) => (
            <div key={id} className={styles.card}>
              <Skill key={id} {...rest} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
