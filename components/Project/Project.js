import React from "react";
import styles from "./Project.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Ratio from "react-ratio";

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
        <div className={styles.image}>
          <a href={props.link} target="_blank">
            <img src={props.img} className={styles.img} />
          </a>
        </div>
      </div>
      <div className={styles.links}>
        <a className={styles.a} href={props.link} target="_blank">
          <FontAwesomeIcon icon={faEye} className={styles.icon} />
        </a>
        <a className={styles.a} href={props.githubLink} target="_blank">
          <FontAwesomeIcon icon={faGithub} className={styles.icon} />
        </a>
      </div>
    </div>
  );
}
