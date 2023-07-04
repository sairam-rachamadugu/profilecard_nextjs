import styles from "../social-networks/social-networks.module.css";
import Link from "next/link";
import { soical_links } from "@/data/data";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { SocialIcon } from "react-social-icons";
export const SocialLinks: React.FC = () => {
  const pathname = usePathname();
  return (
    <section className={styles.container}>
      {soical_links?.map((i) => (
        <SocialIcon url={i.path} fgColor="white" label={i.title} key={i.path} />
      ))}
    </section>
  );
};
