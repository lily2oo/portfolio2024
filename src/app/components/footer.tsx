"use client";
import "../globals.css";
import styles from "../page.module.css";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  return (
    <>
      <section className={styles.footer}>
        <div className={styles.absoluteArea}>
          <div className={styles.footerContainer}>
            <div className={styles.flex}>
              <div className={styles.container}>
                <h1 className={styles.title}>Portfolio</h1>
                <p className={styles.name}>@2024 Jumpei Suko</p>
              </div>
              <div className={styles.contactContainer}>
                <p className={styles.contact}>contact with me:</p>
                <p className={styles.gmail}>lily2oo.rec@gmail.com</p>
              </div>
              <div className={styles.snsContainer}>
                <a
                  target="_blank"
                  href="https://twitter.com/lily2oo"
                  className={styles.sns}
                >
                  X
                </a>
                <a
                  target="_blank"
                  href="https://www.wantedly.com/id/jumpei_suko"
                  className={styles.sns}
                >
                  Wantedly
                </a>
                <a
                  target="_blank"
                  href="https://www.instagram.com/_lily_2oo_/"
                  className={styles.sns}
                >
                  Instagram
                </a>
              </div>
            </div>
            <nav className={styles.nav}>
              <li>
                <a className={`${styles.link} ${pathname === '/' ? styles.active : ''}`} href="./">
                  TOP
                </a>
              </li>
              <li>
                <a className={`${styles.link} ${pathname === '/about' ? styles.active : ''}`} href="./about">
                  ABOUT
                </a>
              </li>
              <li>
                <a className={styles.link} href="">
                  WORK1
                </a>
              </li>
              <li>
                <a className={styles.link} href="">
                  WORK2
                </a>
              </li>
            </nav>
          </div>
        </div>
      </section>
      <div className={styles.next}>
        <div>
          <p className={styles.caption}>Next is ...</p>
          <p className={styles.link}>ABOUT &gt;</p>
        </div>
      </div>
    </>
  );
};

export default Footer;
