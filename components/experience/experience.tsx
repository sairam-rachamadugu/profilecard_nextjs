import React from "react";
import styles from "./experience.module.css";

export const Experience: React.FC = () => {
  return (
    <section>
      <div className={styles.para}>
        <ul>
          <li>
            Worked on poc for Ideathon Event website building. We built using
            ReactAdmin at frontend and at backend we used MongoDB which takes
            care of data storage. cred operations. We also included Azure AD for
            authentication, Azure application insights for monitoring and azure
            ym for hosting the website.
          </li>
          <li>
            Worked on poc for AIO website which was used as centralized places
            for accessing all monitoring applications and reports used by
            monitoring teams. We have built using React.js, Express server and
            MongoDB.
          </li>
          <li>Experience with react native app development. </li>
          <li>
            I have also worked on the ELK stack for end-to-end monitoring.
            Utilized Azure knowledge in Kubernetes, Bicep deployment, and Azure
            Logic App to accomplish project objectives.
          </li>
        </ul>
      </div>
    </section>
  );
};
