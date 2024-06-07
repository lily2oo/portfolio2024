"use client";
import "../globals.css";
import styles from "../page.module.css";
import useHorizontalScroll from "../hooks/useHorizontalScroll";
import Canvas from "./three/canvas";
import Footer from "./footer";
import { useState } from "react";

export default function Scroll({ children }: { children: React.ReactNode }) {
  const { wrapperRef, scrollAreaRef, scrollPosition } = useHorizontalScroll();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  return (
    <>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.scrollable} ref={scrollAreaRef}>
          <div className={styles.flex}>
            {children}
            <Footer />
          </div>
        </div>
      </div>
      <Canvas scrollPosition={scrollPosition} />
      <button
        className={`${styles.navButton} ${isMenuOpen ? styles.visible : null}`}
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      ></button>
      <div className={`${styles.menu} ${isMenuOpen ? styles.visible : null}`}>
        <Footer />
      </div>
    </>
  );
}
