"use client";
import "../globals.css";
import styles from "./work.module.css";
import Image from "next/image";

export default function Work1() {
  return (
    <>
      <section className={styles.header}>
        <div className={styles.container}>
          <h1 className={styles.title}>Portfolio</h1>
          <p className={styles.name}>@2024 Jumpei Suko</p>
        </div>
        <div className={styles.imageContainer}>
          <Image
            className={styles.image}
            src="/work1/work1.png"
            alt={""}
            height={618}
            width={1200}
            sizes="100vw"
            quality={100}
          />
        </div>
        <div className={styles.flex}>
          <div className={styles.descContainer}>
            <p className={styles.title}>Release :</p>
            <p className={styles.desc}>2024.06.31</p>
          </div>
          <div className={styles.descContainer}>
            <p className={styles.title}>Tools :</p>
            <p className={styles.desc}>Figma, Blender</p>
          </div>
          <div className={styles.descContainer}>
            <p className={styles.title}>Language :</p>
            <p className={styles.desc}>Next.js, TypeScript, R3f</p>
          </div>
        </div>
      </section>
    </>
  );
}
