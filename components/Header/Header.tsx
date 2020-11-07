import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import dynamic from "next/dynamic";
import NavMobile from "../NavMobile/NavMobile";

export default function Header() {
  return (
    <div className={styles.container}>
      <Logo />
      <Navbar />
      <NavMobile />
    </div>
  );
}
