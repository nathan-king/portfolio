import React from "react";
import styles from "./Project.module.scss";

export default function Projects({ children, ...props }) {
  const Background = props.img;

  return (
    <div>
      <h3 className={styles.heading}>{props.name}</h3>
      <div
        className={styles.project}
        style={{ flexDirection: props.direction }}
      >
        <div className={styles.text}></div>
        <div className={`image ${styles.image}`}></div>
        <style jsx>{`
          .image {
            background-image: url(${Background});
            background-size: cover;
          }
        `}</style>
      </div>
    </div>
  );
}
