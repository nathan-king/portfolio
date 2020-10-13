import React from "react";
import Link from "next/link";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>About</a>
      </Link>
      <Link href="/project">
        <a>Project</a>
      </Link>
      <Link href="/contact">
        <a>Contact Me</a>
      </Link>
    </nav>
  );
}
