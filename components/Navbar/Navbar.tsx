import styles from "./Navbar.module.scss";
// @ts-ignore
import { Link } from "react-scroll";

export default function Navbar() {
  // Make custom reusable hook and use in intereste

  return (
    <nav className={styles.nav}>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <a className={styles.navLink}>
          <span className={styles.roman}>i.</span> About
          <hr className={styles.hr} />
        </a>
      </Link>
      <Link
        activeClass="active"
        to="skills"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <a className={styles.navLink}>
          <span className={styles.roman}>ii.</span> Skills
          <hr className={styles.hr} />
        </a>
      </Link>
      <Link
        activeClass="active"
        to="projects"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <a className={styles.navLink}>
          <span className={styles.roman}>iii.</span> Projects
          <hr className={styles.hr} />
        </a>
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
      >
        <a className={styles.navLink}>
          <span className={styles.roman}>iv.</span> Contact Me
          <hr className={styles.hr} />
        </a>
      </Link>
    </nav>
  );
}
