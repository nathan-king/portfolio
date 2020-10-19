import React from "react";
import styles from "./Project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Projects({ children, ...props }) {
  return (
    <div className={styles.container}>
      <div
        className={styles.project}
        style={{ flexDirection: props.direction }}
      >
        <div className={styles.text}>
          <h3 className={styles.heading}>{props.name}</h3>
          <p className={styles.p}>{props.description}</p>
          <ul className={styles.ul}>
            {!!props.features &&
              props.features.map((feature) => (
                <li className={styles.li}>{feature}</li>
              ))}
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
      <div className={styles.links}>
        <a className={styles.a} href={props.link}>
          <FontAwesomeIcon icon={faEye} className={styles.icon} />
        </a>
        <a className={styles.a} href={props.githubLink}>
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
    </div>
  );
}
