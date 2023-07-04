import React, { useEffect } from "react";
import Image from "next/image";
import avatar from "../../public/avatar.jpg";
import styles from "./about.module.css";
import { useState } from "react";
export const About: React.FC = () => {
  const [age, setAge] = useState(0);
  const [experience, setExperience] = useState(0);
  const [updated, setUpdated] = useState<Date>();
  const bod = new Date("02/03/1999");
  const expStart = new Date("07/01/2021");

  const calTime = (dateFrom: Date) => {
    const dateTime = new Date().getTime() - dateFrom.getTime();
    return Number((dateTime / (1000 * 60 * 60 * 24 * 365.2421897)).toFixed(10));
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setAge(calTime(bod));
      setExperience(calTime(expStart));
      setUpdated(new Date());
    }, 500);

    return () => clearInterval(timer);
  });
  return (
    <section>
      <div className={styles.main_grid}>
        <Image
          className={styles.avthar}
          src={avatar}
          alt="Worker"
          width={278}
          height={360}
        />
        <div className={styles.info_grid}>
          <div>
            <h2 className={styles.title}>
              Hi I&apos;m -{" "}
              <span className={styles.sectionTitleSecond}>
                SaiRam Rachamadugu
              </span>
            </h2>

            <h3 className={styles.subTitle}>
              Programer,Software Engineer and Dreamer
            </h3>
            <div className={styles.divider} />
          </div>
          <div className={styles.personalData}>
            <p className={styles.gridKey}>My age </p>
            <p className={styles.gridValue}>{age}</p>
            <p className={styles.gridKey}> Experience </p>
            <p className={styles.gridValue}> {experience}</p>
            <p className={styles.gridKey}> Updated </p>
            <p className={styles.gridValue}>{updated?.toDateString()}</p>
          </div>
          <div>
            <p style={{ marginTop: "10px" }}>
              I&apos;m a software engineer specialised in frontend and backend
              development for complex scalable web apps. I have rich experience
              in application development and testing, development team
              management and project management.
            </p>

            <p style={{ marginTop: "10px" }}>
              In ordinary life, together with my family, I am fond of tourism
              and traveling.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
