import { useState, useEffect, useRef, useCallback } from "react";

interface UseHorizontalScrollOptions {}

export default function useHorizontalScroll(
  options: UseHorizontalScrollOptions = {}
) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const scrollAreaRef = useRef<HTMLDivElement>(null);
  const targetScrollRef = useRef(0);
  const currentScrollRef = useRef(0);
  const [scrollPosition, setScrollPosition] = useState<number>(0);

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

  const handleTouchStart = useCallback((e: TouchEvent) => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      const touch = e.touches[0];
      targetScrollRef.current = currentScrollRef.current;
      scrollArea.dataset.touchStartX = touch.clientX.toString();
      scrollArea.dataset.touchStartY = touch.clientY.toString();
      scrollArea.dataset.touchStartTime = Date.now().toString();
    }
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    e.preventDefault();
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      const touch = e.touches[0];
      const touchStartX = parseFloat(scrollArea.dataset.touchStartX || "0");
      const touchStartY = parseFloat(scrollArea.dataset.touchStartY || "0");
      const deltaX = touch.clientX - touchStartX;
      const deltaY = touch.clientY - touchStartY;

      if (Math.abs(deltaY) > Math.abs(deltaX)) {
        const maxScroll =
          scrollArea.scrollWidth -
          wrapperRef.current!.getBoundingClientRect().width;
        targetScrollRef.current = Math.max(
          0,
          Math.min(targetScrollRef.current - deltaY, maxScroll)
        );
      }
    }
  }, []);

  const handleTouchEnd = useCallback((e: TouchEvent) => {
    const scrollArea = scrollAreaRef.current;
    if (scrollArea) {
      const touchStartTime = parseInt(scrollArea.dataset.touchStartTime || "0");
      const touchEndTime = Date.now();
      const timeDelta = touchEndTime - touchStartTime;
      const touchStartY = parseFloat(scrollArea.dataset.touchStartY || "0");
      const touchEndY = e.changedTouches[0].clientY;
      const deltaY = touchEndY - touchStartY;
      const velocity = deltaY / timeDelta;

      targetScrollRef.current += velocity * 100;
      const maxScroll =
        scrollArea.scrollWidth -
        wrapperRef.current!.getBoundingClientRect().width;
      targetScrollRef.current = Math.max(
        0,
        Math.min(targetScrollRef.current, maxScroll)
      );

      delete scrollArea.dataset.touchStartX;
      delete scrollArea.dataset.touchStartY;
      delete scrollArea.dataset.touchStartTime;
    }
  }, []);

  useEffect(() => {
    const scrollArea = scrollAreaRef.current;
    let animationFrameId: number | null = null;
    let lastScrollTime = Date.now();
    let deltaY = 0;

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
        setScrollPosition(currentScrollRef.current);

        const isScrollFinished = Math.abs(
          currentScrollRef.current - targetScrollRef.current
        );
        if (Date.now() - lastScrollTime > 10 && isScrollFinished < 0.1) {
          cancelAnimationFrame(animationFrameId!);
          animationFrameId = null;
        } else {
          animationFrameId = requestAnimationFrame(updateScroll);
        }
      }
    };
    const handleScrollWithDeltaY = (e: WheelEvent) => {
      deltaY = e.deltaY;
      lastScrollTime = Date.now();
      handleScroll(e);

      if (!animationFrameId) {
        animationFrameId = requestAnimationFrame(updateScroll);
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
      window.addEventListener("wheel", handleScrollWithDeltaY);
      window.addEventListener("resize", handleResize);
      window.addEventListener("touchstart", handleTouchStart);
      window.addEventListener("touchmove", handleTouchMove, { passive: false });
      window.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      window.removeEventListener("wheel", handleScrollWithDeltaY);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
    };
  }, [
    handleScroll,
    handleResize,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  ]);

  return {
    wrapperRef,
    scrollAreaRef,
    scrollPosition,
  };
}
