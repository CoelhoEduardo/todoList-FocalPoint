import React from "react";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>FocalPoint</div>
      <div className={styles.welcome}>Bem-vindo de Volta, Marcus</div>
      <div className={styles.date}>Segunda, 01 de Dezembro de 2025</div>
    </header>
  );
};
