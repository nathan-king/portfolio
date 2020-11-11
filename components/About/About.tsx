import React from "react";
import styles from "./About.module.scss";
import Subheading from "../Subheading/Subheading";

export default function About() {
  return (
    <div className={styles.container} id="about">
      <div className={styles.photo}>
        {/* <img className={styles.img} src="/me.jpg" /> */}
      </div>
      <div className={styles.text}>
        <Subheading number="i."> About Me</Subheading>
        <p>
          I have always been passionateabout technology. Having been born in the
          early 90s, I was able to watch the birth and evolution of the digital
          world. It was as a teenager that I first began to play around with and
          build my own websites. I have always been intrigued by the
          relationship between human beings and the digital world that has been
          imposed around us. I began studying psychology at university and to
          explore this relationship. My passions, however, have always lied with
          coding and the creative aspect of web development.
        </p>
      </div>
    </div>
  );
}
