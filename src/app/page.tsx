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
            <section className={styles.section1}>
              <div className={styles.absoluteArea}>
                <div className={styles.container}>
                  <h1 className={styles.title}>Portfolio</h1>
                  <p className={styles.name}>@2024 Jumpei Suko</p>
                </div>
              </div>
            </section>
            <section className={styles.section2}>
              <div className={styles.absoluteArea}></div>
            </section>
            <section className={styles.section1}>
              <div className={styles.absoluteArea}></div>
            </section>
            <section className={styles.section2}>
              <div className={styles.absoluteArea}></div>
            </section>
            <section className={styles.section1}>
              <div className={styles.absoluteArea}></div>
            </section>{" "}
            <section className={styles.section2}>
              <div className={styles.absoluteArea}></div>
            </section>
            <section className={styles.section1}>
              <div className={styles.absoluteArea}></div>
            </section>
          </div>
        </div>
      </div>
      <Canvas scrollPosition={scrollPosition} />
    </>
  );
}
