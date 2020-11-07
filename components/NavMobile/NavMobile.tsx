// @ts-ignore
import Burger from "@animated-burgers/burger-slip";
import "@animated-burgers/burger-slip/dist/styles.css";
// @ts-ignore
import { Link } from "react-scroll";
import { useState } from "react";

import styles from "./NavMobile.module.scss";

export default function NavMobile() {
  const [visible, setVisible] = useState(false);
  console.log(visible);

  return (
    <nav className={styles.nav}>
      <div
        className={`${styles.burger} ${visible ? styles.open : null}`}
        onClick={() => setVisible(!visible)}
      >
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
          <a className={styles.navLink}>About</a>
        </Link>
        <Link
          activeClass="active"
          to="skills"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <a className={styles.navLink}>Skills</a>
        </Link>
        <Link
          activeClass="active"
          to="projects"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <a className={styles.navLink}>Projects</a>
        </Link>
        <Link
          activeClass="active"
          to="contact"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <a className={styles.navLink}>Contact Me</a>
        </Link>
      </div>
    </nav>
  );
}
