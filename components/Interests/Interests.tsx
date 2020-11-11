import React, { useState } from "react";
import styles from "./Interests.module.scss";
import Skill from "../Skill/Skill";
import Subheading from "../Subheading/Subheading";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faDesktop,
  faFileCode,
  faLaptopCode,
} from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faSass,
  faJsSquare,
  faNodeJs,
  faWordpressSimple,
} from "@fortawesome/free-brands-svg-icons";
import { TransitionGroup } from "react-transition-group";

export default function Interests() {
  const [on, setOn] = useState(false);
  const [flex, setFlex] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <div className={styles.container} id="skills">
      <Subheading number="ii."> Skills</Subheading>
      <div className={styles.skills}>
        <Skill>
          Web Dev{" "}
          <FontAwesomeIcon icon={faLaptopCode} className={styles.icon} />
        </Skill>
        <Skill>
          React <FontAwesomeIcon icon={faReact} className={styles.icon} />
        </Skill>
        <Skill>
          Design
          <FontAwesomeIcon icon={faDesktop} className={styles.icon} />
        </Skill>
        <Skill>
          CSS-in-JS{" "}
          <FontAwesomeIcon icon={faFileCode} className={styles.icon} />
        </Skill>
        <Skill>
          Sass/SCSS <FontAwesomeIcon icon={faSass} className={styles.icon} />
        </Skill>
        <Skill>
          JS (ES6+){" "}
          <FontAwesomeIcon icon={faJsSquare} className={styles.icon} />
        </Skill>
        <Skill>
          Wordpress
          <FontAwesomeIcon icon={faWordpressSimple} className={styles.icon} />
        </Skill>
        <Skill>
          Node.js
          <FontAwesomeIcon icon={faNodeJs} className={styles.icon} />
        </Skill>
      </div>
    </div>
  );
}
