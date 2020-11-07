import React from "react";
import Subheading from "../Subheading/Subheading";
import styles from "./ProjectSection.module.scss";

export default function ProjectSection({ children }: any) {
  return (
    <div className={styles.container} id="projects">
      <Subheading number="03."> Projects</Subheading>
      {children}
    </div>
  );
}
