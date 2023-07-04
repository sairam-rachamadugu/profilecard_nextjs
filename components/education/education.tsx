import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "./education.module.css";
const inter = Inter({ subsets: ["latin"] });

export const Education: React.FC = () => {
  return (
    <section>
      <h2 className={styles.heading}>Education</h2>
      <div className={styles.outerCard}>
        <div className={styles.rightCard}>
          <h3>2014 - 2015</h3>
          <h4 className={styles.title}>GREENWOOD HIGH SCHOOL</h4>
          <h5>CGPA : 10</h5>
        </div>
        <div className={styles.leftCard}>
          {" "}
          <h3>2015 - 2017</h3>
          <h4 className={styles.title}>NARAYANA JUNIOR COLLEGE</h4>
          <h5>Branch : MPC</h5>
          <h5>Percentage : 96.5%</h5>
        </div>
        <div className={styles.rightCard}>
          {" "}
          <h3>2017 - 2021</h3>
          <h4 className={styles.title}>CVR COLLEGE OF ENGINEERING</h4>
          <h5>Branch : CSE</h5>
          <h5>CGPA : 9.1</h5>
        </div>
        <div className={styles.leftCard}>
          {" "}
          <h3>2021 - Present</h3>
          <h4 className={styles.title}>TCS</h4>
          <h5>ROLE : SYSTEM ENGINEER</h5>
        </div>
      </div>
    </section>
  );
};
