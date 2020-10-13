import React from "react";
import styles from "./About.module.scss";

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <h2>About Me</h2>
        <p>
          I have always been passionate about technology. Having been born in
          the early 90s, I was able to watch the birth and evolution of the
          digital world. It was as a teenager that I first began to play around
          with and build my own websites. I have always been intrigued by the
          relationship between human beings and the digital world that has been
          imposed around us. I began studying psychology at university and to
          explore this relationship.
        </p>
      </div>
      <div className={styles.photo}>
        <img
          className={styles.img}
          src="https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1534&q=80"
        />
      </div>
    </div>
  );
}
