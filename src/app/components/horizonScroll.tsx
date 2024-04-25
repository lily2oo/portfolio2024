"use client";
import "../globals.css";
import styles from "../page.module.css";
import { useEffect, useRef, useState, useCallback, ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function Home({ children }: Props) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);

  const handleScroll = useCallback((e: WheelEvent) => {
    const scrollArea = scrollAreaRef.current;
    if (Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
    if (scrollArea) {
      const maxScroll =
        scrollArea.scrollWidth -
        wrapperRef.current!.getBoundingClientRect().width;
      targetScrollRef.current = Math.max(
        0,
        Math.min(targetScrollRef.current + e.deltaY / 3, maxScroll)
      );
    }
  }, []);

  const handleResize = useCallback(() => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      document.body.style.height = `${
        scrollArea.getBoundingClientRect().height
      }px`;
      document.body.style.width = `${
        scrollArea.getBoundingClientRect().width
      }px`;
    }
  }, []);

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    const lerp = (start: number, end: number, multiplier: number) => {
      return (1 - multiplier) * start + multiplier * end;
    };

    const updateScroll = () => {
      if (scrollArea) {
        currentScrollRef.current = lerp(
          currentScrollRef.current,
          targetScrollRef.current,
          0.1
        );
        scrollArea.style.transform = `translate3d(${-currentScrollRef.current}px, 0, 0)`;
        requestAnimationFrame(updateScroll);
      }
    };

    if (scrollArea) {
      document.body.style.height = `${
        scrollArea.getBoundingClientRect().height
      }px`;
      document.body.style.width = `${
        scrollArea.getBoundingClientRect().width
      }px`;
      requestAnimationFrame(updateScroll);
      window.addEventListener("wheel", handleScroll);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, [handleScroll, handleResize]);

  return (
    <>
      <div className={styles.wrapper} ref={wrapperRef}>
        <div className={styles.scrollable} ref={scrollAreaRef}>
          <div className={styles.flex}>{children}</div>
        </div>
      </div>
    </>
  );
}
