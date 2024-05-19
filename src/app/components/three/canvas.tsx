"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../../page.module.css";
import { useEffect, useState } from "react";
import * as THREE from "three";
import Ribbon from "./ribbon";
import Ribbon2 from "./ribbon2";
import { usePathname } from "next/navigation";

interface scrollProps {
  scrollPosition: number;
}

const Top1 = ({ scrollPosition }: scrollProps) => {
  return (
    <Canvas className={styles.canvas}>
      <Ribbon scrollPosition={scrollPosition} />
      <ambientLight color={0xffffff} intensity={0.5} />
      <directionalLight color={0xffffff} intensity={0.5} position={[0, 0, 5]} />
    </Canvas>
  );
};

const Top2 = ({ scrollPosition }: scrollProps) => {
  return (
    <Canvas className={styles.canvas} camera={{ position: [0, 0, 2] }}>
      <Ribbon2 scrollPosition={scrollPosition} />
      <pointLight color={0xffffff} intensity={1.0} position={[3.5, 0, 0]} />
      <ambientLight color={0xffffff} intensity={1.0} />
    </Canvas>
  );
};

const ScrollHandler = ({ scrollPosition }: scrollProps) => {
  const router = usePathname();
  const [currentScene, setCurrentScene] = useState("");
  const [threshold, setThreshold] = useState(0);

  useEffect(() => {
    setThreshold(window.innerWidth * 1);
  }, []);

  useEffect(() => {
    if (router === "/") {
      if (scrollPosition < threshold * 0.8) {
        setCurrentScene("Top1");
      } else {
        setCurrentScene("Top2");
      }
    } else if (router === "/about") {
    }
  }, [scrollPosition, threshold, router]);

  return (
    <>
      {currentScene === "Top1" && <Top1 scrollPosition={scrollPosition} />}
      {currentScene === "Top2" && <Top2 scrollPosition={scrollPosition} />}
    </>
  );
};

const Scene = ({ scrollPosition }: scrollProps) => {
  return (
    <div className={styles.canvasContainer}>
      <ScrollHandler scrollPosition={scrollPosition} />
    </div>
  );
};

export default Scene;
