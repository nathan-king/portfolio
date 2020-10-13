import React from "react";
import styles from "./Hero.module.scss";

export default function Hero() {
  return (
    <div className={styles.container}>
      <h1>
        Hello
        <br /> I'm Nathan!
      </h1>
      <h2>I design and build things for the web.</h2>
      <p>Front-end React developer from Sydney, Australia</p>
    </div>
  );
}
