"use client";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styles from "../../page.module.css";
import { use, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Ribbon from "./ribbon";
import Ribbon2 from "./ribbon2";
import { threshold } from "three/examples/jsm/nodes/Nodes.js";

interface Props {
  scrollPosition: number;
}

const Scene1 = () => {
  return (
    <Canvas className={styles.canvas} camera={{ position: [0, 0, 2] }}>
      <Ribbon />
      <ambientLight color={0xffffff} intensity={0.5} />
      <directionalLight color={0xffffff} intensity={0.5} position={[0, 0, 5]} />
    </Canvas>
  );
};

const Scene2 = ({ scrollPosition }: Props) => {
  return (
    <Canvas className={styles.canvas} camera={{ position: [0, 0, 2] }}>
      <Ribbon2 scrollPosition={scrollPosition} />
      <ambientLight color={0xffffff} intensity={0.5} />
      <directionalLight color={0xffffff} intensity={0.5} position={[0, 0, 5]} />
    </Canvas>
  );
};

const ScrollHandler = ({ scrollPosition }: Props) => {
  const [currentScene, setCurrentScene] = useState("scene1");
  const threshold = window.innerWidth * 1;

  useEffect(() => {
    console.log(threshold);
    if (scrollPosition < threshold) {
      setCurrentScene("scene1");
      console.log("scene1");
    } else {
      setCurrentScene("scene2");
      console.log("scene2");
    }
  }, [scrollPosition, threshold]);

  return (
    <>
      {currentScene === "scene1" ? (
        <Scene1 />
      ) : (
        <Scene2 scrollPosition={scrollPosition} />
      )}
    </>
  );
};

const Scene = ({ scrollPosition }: Props) => {
  return (
    <div className={styles.canvasContainer}>
      <ScrollHandler scrollPosition={scrollPosition} />
    </div>
  );
};

export default Scene;