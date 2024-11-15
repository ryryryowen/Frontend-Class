import { ReactNode } from "react";
import Link from "next/link";
import styles from "./global-layout.module.css";

const GlobalLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link href={"/"}>📓 Book List</Link>
      </header>
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>Copyright @Owen</footer>
    </div>
  );
};

export default GlobalLayout;
