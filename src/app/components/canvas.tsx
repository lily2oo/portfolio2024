"use client";
import { useEffect, useRef } from "react";
import "../../app/globals.css";

interface Props {
  scrollPosition: number;
}

const Mesh = ({ scrollPosition }: Props) => {
  useEffect(() => {
    console.log(scrollPosition);
  }, [scrollPosition]);
  return <></>;
};

const Scene = ({ scrollPosition }: Props) => {
  return (
    <>
      <canvas>
        <Mesh scrollPosition={scrollPosition} />
      </canvas>
    </>
  );
};

export default Scene;
