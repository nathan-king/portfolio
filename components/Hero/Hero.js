import React from "react";
import styles from "./Hero.module.scss";
import Typist from "react-typist";

export default function Hero() {
  return (
    <div className={styles.container}>
      <p className={styles.preheading}>
        <Typist
          cursor={{ blink: true, hideWhenDone: true }}
          avgTypingDelay={100}
        >
          Hi there, my name is
        </Typist>
      </p>

      <h1 className={styles.heading}>Nathan King.</h1>
      <h1 className={`${styles.heading} ${styles.heading2}`}>
        I build things for the web.
      </h1>
      <p className={styles.subheading}>
        I'm a font-end developer based in Sydney, Australia. I build and design
        React websites and web applications.
      </p>
    </div>
  );
}
