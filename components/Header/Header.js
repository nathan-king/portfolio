import React from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <Navbar />
    </div>
  );
}
