"use client";
import "../globals.css";
import styles from "../page.module.css";
import useHorizontalScroll from "../hooks/useHorizontalScroll";
import Canvas from "./three/canvas";
import Footer from "./footer";
import { useState,useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Scroll({ children }: { children: React.ReactNode }) {
  const { wrapperRef, scrollAreaRef, scrollPosition } = useHorizontalScroll();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();
  useEffect(() => {
    console.log("Current pathname:", pathname);
  }, [pathname]);

  return (
    <div className={pathname === '/work2' ? styles.work2 : ""}>
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
    </div>
  );
}
