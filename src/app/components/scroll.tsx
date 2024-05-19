"use client";
import "../globals.css";
import styles from "../page.module.css";
import useHorizontalScroll from "../hooks/useHorizontalScroll";
import Canvas from "./three/canvas";
import Footer from "./footer";

export default function Scroll({ children }: { children: React.ReactNode }) {
  const { wrapperRef, scrollAreaRef, scrollPosition } = useHorizontalScroll();
  return (
    <>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.scrollable} ref={scrollAreaRef}>
          <div className={styles.flex}>
            {children}
            <Footer/>
          </div>
        </div>
      </div>
      <Canvas scrollPosition={scrollPosition} />
    </>
  );
}
