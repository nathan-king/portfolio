import React from "react";
import styles from "./Skill.module.scss";

export default function Skill({ children, ...props }) {
  return (
    <div
      className={`${styles.skill} ${props.full ? styles.full : null}`}
      onClick={props.onClick}
    >
      {children}
    </div>
  );
}
