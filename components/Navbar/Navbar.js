import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a className={styles.navLink}>01. About</a>
      </Link>
      <Link href="/project">
        <a className={styles.navLink}>02. Projects</a>
      </Link>
      <Link href="/contact">
        <a className={styles.navLink}>03. Contact Me</a>
      </Link>
    </nav>
  );
}
