import React from "react";
import styles from "./Skill.module.scss";

export default function Skill({ children, ...props }: any) {
  return (
    <div
      className={`${styles.skill} ${props.full ? styles.full : null}`}
      onClick={props.onClick}
    >
      {children}
    </div>
  );
}
