import React from "react";
import styles from "./certifications.module.css";
import { certificationsList } from "../../data/data";
import "react-slideshow-image/dist/styles.css";
import { Fade } from "react-slideshow-image";
import Image from "next/image";
import { inherits } from "util";
export const Certifications: React.FC = () => {
  return (
    <section>
      <h2 className={styles.heading}>Certifications</h2>
      <div className={`slide-container ${styles.container}`}>
        <Fade>
          {certificationsList.map((fadeImage, index) => (
            <div key={index} className={styles.imagecontainer}>
              <Image
                src={fadeImage.path}
                alt={fadeImage.title}
                quality={100}
                fill
              />
              {/* <h2>{fadeImage.title}</h2> */}
            </div>
          ))}
        </Fade>
      </div>
    </section>
  );
};
