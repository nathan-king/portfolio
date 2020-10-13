import React from "react";
import styles from "./Projects.module.scss";

export default function Projects(props) {
  return (
    <div
      className={styles.container}
      style={{ flexDirection: props.direction }}
    >
      <div className={styles.text}>Text</div>
      <div className={styles.image}>Image</div>
    </div>
  );
}
