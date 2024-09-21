import React from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import logo from "./../../public/Shape.png";

export const Header = () => {
  const currentDate = new Date().toLocaleDateString("pt-BR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const capitalizeFirstLetter = (str: string) => {
    return str.replace(/^./, str[0].toUpperCase());
  };

  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        <Image src={logo} width={33.1} height={32.93} alt="logo" priority />
        <h1>FocalPoint</h1>
      </div>
      <div className={styles.welcome}>Bem-vindo de volta, Marcus</div>
      <div className={styles.date}>{capitalizeFirstLetter(currentDate)}</div>
    </header>
  );
};
