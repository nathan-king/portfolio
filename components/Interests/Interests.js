import React, { useState } from "react";
import styles from "./Interests.module.scss";
import Skill from "../Skill/Skill";
import Subheading from "../Subheading/Subheading";

export default function Interests() {
  const [on, setOn] = useState(false);
  const [flex, setFlex] = useState(false);
  const toggle = () => setOn(!on);

  return (
    <div className={styles.container} id="skills">
      <Subheading number="02."> Skills</Subheading>
      {!on ? (
        <div className={styles.grid}>
          <Skill>Web Dev</Skill>
          <Skill>Web Design</Skill>
          <Skill>React</Skill>
          <Skill full={true} onClick={toggle}>
            See More...
          </Skill>
        </div>
      ) : (
        <>
          <div className={styles.grid}>
            <Skill>Web Dev</Skill>
            <Skill>Web Design</Skill>
            <Skill>React</Skill>
          </div>
          <div className={styles.grid}>
            <Skill>CSS-in-JS</Skill>
            <Skill>Sass/SCSS</Skill>
            <Skill>JavaScript (ES6+)</Skill>
          </div>
        </>
      )}
    </div>
  );
}
