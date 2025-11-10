"use client";
import React from "react";
import styles from "./skills.module.css";
import { workshopStations, getSkillsByStation } from "@/data/content";
import WorkshopCard from "@/components/WorkshopCard";

const Skills = () => {
  return (
    <section id="skills" className={styles.skillSection}>
      {/* Workshop-style header */}
      <div className={styles.sectionHeader}>
        <div className={styles.cornerBracket}></div>
        <h2 className={styles.title}>Workshop Toolkit</h2>
        <div className={styles.titleUnderline}>
          <div className={styles.line}></div>
          <div className={styles.diamond}></div>
          <div className={styles.line}></div>
        </div>
      </div>

      {/* Philosophy text */}
      <div className={styles.philosophy}>
        <p>
          Backend-focused craftsperson comfortable across the full stack.
          Building software since 2019, from startup MVPs to enterprise systems.
          Give me a new language or framework—I&apos;ll figure it out.
        </p>
      </div>

      {/* Workshop Stations */}
      <div className={styles.stationsGrid}>
        {workshopStations.map((station) => {
          const stationSkills = getSkillsByStation(station.id);

          return (
            <WorkshopCard
              key={station.id}
              theme="light"
              marker={station.marker}
              className={styles.stationCard}
              statusLight={false}
            >
              <h3 className={styles.stationName}>{station.name}</h3>
              <p className={styles.stationDescription}>{station.description}</p>

              <div className={styles.stationTools}>
                {stationSkills.map((skill) => (
                  <div key={skill.id} className={styles.toolItem}>
                    <div className={styles.toolIcon} aria-hidden="true">
                      {skill.logo}
                    </div>
                    <span className={styles.toolName}>{skill.name}</span>
                  </div>
                ))}
              </div>
            </WorkshopCard>
          );
        })}
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
