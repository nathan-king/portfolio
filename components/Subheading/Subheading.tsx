import React from "react";
import styles from "./Subheading.module.scss";

export default function Subheading({ children, ...props }: any) {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>
        <span className={styles.number}>{props.number}</span>
        {children}
      </h2>
    </div>
  );
}
