import React from "react";
import styles from "./Contact.module.scss";
import Subheading from "../Subheading/Subheading";
import Skill from "../Skill/Skill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

export default function Contact() {
  return (
    <div className={styles.container} id="contact">
      <Subheading number="iv."> Contact</Subheading>
      <div>
        <div className={styles.contactBox}>
            <p className={styles.p}>
            I am always open to new experiences and opportunities to grow. So if
            you would like to have a chat, reach out to me!
            </p>
            <p className={styles.email}>
            <a
                href="mailto:nath.king93@gmail.com"
                target="_blank"
                className={styles.emailLink}
            >
                <FontAwesomeIcon icon={faEnvelope} className={styles.mailIcon} />
                nath.king93@gmail.com
            </a>
            <img className={styles.image} src="/contact.png" />
            </p>
        </div>

        <div className={styles.buttons}>
            <a href="https://github.com/nathan-king" target="_blank">
            <Skill>
                <FontAwesomeIcon icon={faGithub} className={styles.icon} /> Github
            </Skill>
            </a>
            <a
            href="https://www.linkedin.com/in/nathan-king-761830120/"
            target="_blank"
            >
            <Skill>
                <FontAwesomeIcon icon={faLinkedin} className={styles.icon} />
                LinkedIn
            </Skill>
            </a>
        </div>
      </div>
      <div className={styles.footer}>
        <p>
            Created && built by Nathan King [2020]
        </p>
        <br />
        <p>
        Last updated: 25-01-2021
        </p>
      </div>
    </div>
  );
}
