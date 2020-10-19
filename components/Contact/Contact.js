import React from "react";
import styles from "./Contact.module.scss";

export default function Contact() {
  return (
    <div className={styles.container} if="contact">
      <div className={styles.contactBox}>Insert Contact Info Here</div>
    </div>
  );
}
