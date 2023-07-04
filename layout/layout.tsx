import styles from "../layout/layout.module.css";
import Link from "next/link";
import { headerData } from "@/data/data";
import { usePathname } from "next/navigation";
import { SocialLinks } from "@/components/social-networks/social-networks";
export default function DashboardLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <>
      <header className={styles.layout_header}>
        {headerData?.map((i, index) => (
          <Link
            href={i.path}
            key={index}
            className={pathname === i.path ? styles.active : undefined}
          >
            {i.title}
          </Link>
        ))}
      </header>

      <main className={styles.main}>{children}</main>
      {/* <footer className={styles.footer}>
        <SocialLinks />
      </footer> */}
    </>
  );
}
