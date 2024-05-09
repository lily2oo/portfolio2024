"use client";
import "./globals.css";
import styles from "./page.module.css";
import useHorizontalScroll from "./hooks/useHorizontalScroll";
import Canvas from "./components/three/canvas";
import Image from "next/image";

export default function Home() {
  const { wrapperRef, scrollAreaRef, scrollPosition } = useHorizontalScroll();
  return (
    <>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.scrollable} ref={scrollAreaRef}>
          <div className={styles.flex}>
            <section className={styles.header}>
              <div className={styles.absoluteArea}>
                <div className={styles.container}>
                  <h1 className={styles.title}>Portfolio</h1>
                  <p className={styles.name}>@2024 Jumpei Suko</p>
                </div>
              </div>
            </section>
            <section className={styles.about}>
              <div className={styles.absoluteArea}>
                <div className={styles.flex}>
                  <Image
                    src="/me.webp"
                    alt={""}
                    height={450}
                    width={300}
                    quality={100}
                  />
                  <div className={styles.textContainer}>
                    <p className={styles.caption}>
                      Designer / Frontend Engineer
                    </p>
                    <div className={styles.nameContainer}>
                      <p className={styles.name}>須古 純平</p>
                      <p className={styles.nameEN}>Jumpei Suko</p>
                    </div>
                    <p className={styles.desc}>
                      デジタルハリウッド大学4年。22歳。
                      <br />
                      祖父にもらった一眼レフをきっかけに、創作を始める。
                      <br />
                      デザインや企画を主に、クリエイティブ全般を行っている。
                    </p>
                    <div className={styles.button}>
                      <p>view more</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <section className={styles.skills}>
              <div className={styles.absoluteArea}>
                <div className={styles.titles}>
                  <p className={styles.caption}>I have Skills about</p>
                  <h2 className={styles.h2}>Design & Engineering</h2>
                  <p className={styles.desc}>
                    「魅せる」ものを
                    <br />
                    設計します。
                  </p>
                </div>
                <div className={styles.skillContainer}>
                  <div className={styles.skill1}>
                    <h3 className={styles.h3}>Design</h3>
                    <p className={styles.p}>Webデザイン</p>
                    <p className={styles.p}>グラフィック</p>
                    <p className={styles.p}>写真・映像</p>
                    <p className={styles.p}>編集</p>
                    <p className={styles.p}>企画・コピー</p>
                  </div>
                  <div className={styles.skill2}>
                    <h3 className={styles.h3}>Enginnering</h3>
                    <p className={styles.p}>Next.js+TypeScipt</p>
                    <p className={styles.p}>Three,R3f</p>
                    <p className={styles.p}>Flutter</p>
                  </div>
                </div>
              </div>
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
