"use client";
import React from "react";
import { skills, type Skill } from "src/data/content";
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
console.log(2222, skillsByCategoryAndLevel);

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
    <section id="skills" className="scroll-mt-20 mx-6 my-6 text-justify">
      <h2 className="text-3xl font-serif font-medium capitalize mb-8 text-center">
        Skills
      </h2>
      <div>
        <p>
          I&apos;m a <b>Python Backend developer</b> who is also comfortable
          working on the frontend from time to time. <br />
          I&apos;m not afraid of working with different programming languages or
          frameworks ; if I can get the opportunity to work on a Rust project
          for example, I will happily take it! <br />I have worked on enterprise
          quality web apps, developed numerous REST APIs, worked with ORMs, and
          mentored people of all levels. <br />
        </p>
        <div className={styles.deck}>
          {skillsByCategoryAndLevel.map(({ id, ...rest }) => (
            <Skill key={id} {...rest} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
