import React from "react";
import styles from "./Project.module.scss";

export default function Projects({ children, ...props }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{props.name}</h3>
      <div
        className={styles.project}
        style={{ flexDirection: props.direction }}
      >
        <div className={styles.text}>
          <p className={styles.p}>{props.description}</p>
          <ul>
            {!!props.features &&
              props.features.map((feature) => <li>{feature}</li>)}
          </ul>
        </div>
        <a href={props.link} target="_blank">
          <div className={`image ${styles.image}`}></div>
        </a>
        <style jsx>{`
          .image {
            background-image: url(${props.img});
            background-size: cover;
          }
        `}</style>
      </div>
    </div>
  );
}
