import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>Text</div>
      <div className={styles.photo}>Photo</div>
    </div>
  );
}
