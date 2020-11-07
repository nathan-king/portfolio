// @ts-ignore
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
import { Link } from "react-scroll";
import { useState } from "react";

import styles from "./NavMobile.module.scss";

export default function NavMobile() {
  const [visible, setVisible] = useState(false);
  console.log(visible);

  return (
    <nav className={styles.nav}>
      <div className={styles.burger} onClick={() => setVisible(!visible)}>
        <Burger isOpen={visible} />
      </div>
      <div className={`${styles.menu} ${visible ? styles.visible : null}`}>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <a className={styles.navLink}>
            <span className={styles.roman}>i.</span> About
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
          </a>
        </Link>
      </div>
    </nav>
  );
}
