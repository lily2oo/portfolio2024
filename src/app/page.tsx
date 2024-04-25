"use client";
import "./globals.css";
import styles from "./page.module.css";
import HorizonScroll from "./components/horizonScroll";

export default function Home() {
  return (
    <>
      <HorizonScroll>
        <section className={styles.section1}></section>
        <section className={styles.section2}></section>
        <section className={styles.section1}></section>
        <section className={styles.section2}></section>
        <section className={styles.section1}></section>
        <section className={styles.section2}></section>
        <section className={styles.section1}></section>
        <section className={styles.section2}></section>
      </HorizonScroll>
    </>
  );
}
