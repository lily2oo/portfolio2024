"use client";
import "./globals.css";
import styles from "./page.module.css";
import useHorizontalScroll from "./hooks/useHorizontalScroll";
import Canvas from "./components/three/canvas";

export default function Home() {
  const { wrapperRef, scrollAreaRef, scrollPosition } = useHorizontalScroll();
  return (
    <>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.scrollable} ref={scrollAreaRef}>
          <div className={styles.flex}>
            <section className={styles.section1}></section>
            <section className={styles.section2}></section>
            <section className={styles.section1}></section>
            <section className={styles.section2}></section>
            <section className={styles.section1}></section>
            <section className={styles.section2}></section>
            <section className={styles.section1}></section>
            <section className={styles.section2}></section>
          </div>
        </div>
      </div>
      <Canvas scrollPosition={scrollPosition} />
    </>
  );
}
