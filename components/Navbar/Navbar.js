import React from "react";
import { Link } from "react-scroll";
import styles from "./Navbar.module.scss";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <a className={styles.navLink}>01. About</a>
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <a className={styles.navLink}>02. Skills</a>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <a className={styles.navLink}>03. Projects</a>
      </Link>

      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <a className={styles.navLink}>04. Contact Me</a>
      </Link>
    </nav>
  );
}
