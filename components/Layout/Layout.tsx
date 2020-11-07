import React from "react";
import styles from "./Layout.module.scss";
import Header from "../Header/Header";

export default function Layout({ children }: any) {
  return (
    <main className={styles.container}>
      <Header />
      {children}
    </main>
  );
}
