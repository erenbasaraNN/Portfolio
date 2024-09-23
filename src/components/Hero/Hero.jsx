import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Eren</h1>
        <p className={styles.description}>
          I'm a full-stack developer with 2 years of experience using React,
          NodeJS and PHP Symfony. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:info@erenbasaran.com.tr" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/BW_Small.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
