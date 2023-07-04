import React from "react";
import styles from "./skills.module.css";
import { skillsList } from "../../data/data";
export const Skills: React.FC = () => {
  return (
    <section className={styles.card}>
      <h2 className={styles.title}>Technical Skills Cloud</h2>
      <div className={styles.skillsList}>
        {skillsList?.map((i, index) => (
          <div className={styles.skill} key={index}>
            {i}
          </div>
        ))}
      </div>
    </section>
  );
};
