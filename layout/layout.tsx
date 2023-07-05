import styles from "../layout/layout.module.css";
import Link from "next/link";
import { headerData } from "@/data/data";
import { usePathname } from "next/navigation";
import { SocialLinks } from "@/components/social-networks/social-networks";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const toggle = () => {
    setOpen(!open);
  };
  return (
    <>
      <header className={styles.layout_header}>
        <div className={styles.desktopHeader}>
          {headerData?.map((i, index) => (
            <Link
              href={i.path}
              key={index}
              className={pathname === i.path ? styles.active : undefined}
            >
              {i.title}
            </Link>
          ))}
        </div>
        <div className={`${styles.mobileHeader} ${open ? styles.active : ""}`}>
          <GiHamburgerMenu
            size={40}
            onClick={toggle}
            className={styles.hamber}
          />

          {headerData?.map((i, index) => (
            <Link
              href={i.path}
              key={index}
              onClick={toggle}
              className={pathname === i.path ? styles.active : undefined}
            >
              {i.title}
            </Link>
          ))}
        </div>
      </header>

      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>
        <SocialLinks />
      </footer>
    </>
  );
}
