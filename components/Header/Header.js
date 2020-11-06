import { useState, useEffect } from "react";
import Logo from "../Logo/Logo";
import Navbar from "../Navbar/Navbar";
import styles from "./Header.module.scss";
import dynamic from "next/dynamic";
import NavMobile from "../NavMobile/NavMobile";

export default function Header() {
  const [width, setWidth] = useState();
  // const [open, setOpen] = useState(false);
  const breakpoint = 1200;

  function updateMedia() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });

  return (
    <div className={styles.container}>
      <Logo />
      <Navbar />
      <NavMobile />
    </div>
  );
}
