"use client";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import styles from "../../page.module.css";
import { use, useEffect, useRef, useState } from "react";
import * as THREE from "three";
import Ribbon from "./ribbon";
import Ribbon2 from "./ribbon2";
import { threshold } from "three/examples/jsm/nodes/Nodes.js";

interface scrollProps {
  scrollPosition: number;
}

interface transitionProps {
  children: React.ReactNode;
  isActive: boolean;
}

const Transition = ({ children, isActive }: transitionProps) => {
  const [opacity, setOpacity] = useState(isActive ? 1 : 0);

  useEffect(() => {
    if (isActive) {
      setOpacity(1);
    } else {
      const timeout = setTimeout(() => setOpacity(0), 500);
      return () => clearTimeout(timeout);
    }
  }, [isActive]);

  return (
    <div
      className={styles.transition}
      style={{
        opacity,
        transition: "opacity 0.5s ease-in-out",
        pointerEvents: isActive ? "auto" : "none",
      }}
    >
      {children}
    </div>
  );
};

const Scene1 = ({ scrollPosition }: scrollProps) => {
  return (
    <Canvas className={styles.canvas} camera={{ position: [0, 0, 2] }}>
      <Ribbon scrollPosition={scrollPosition} />
      <ambientLight color={0xffffff} intensity={0.5} />
      <directionalLight color={0xffffff} intensity={0.5} position={[0, 0, 5]} />
    </Canvas>
  );
};

const Scene2 = ({ scrollPosition }: scrollProps) => {
  return (
    <Canvas className={styles.canvas} camera={{ position: [0, 0, 2] }}>
      <Ribbon2 scrollPosition={scrollPosition} />
      <pointLight color={0xffffff} intensity={1.0} position={[3.5, 0, 0]} />
      <ambientLight color={0xffffff} intensity={0.5} />
    </Canvas>
  );
};

const ScrollHandler = ({ scrollPosition }: scrollProps) => {
  const [currentScene, setCurrentScene] = useState("scene1");
  const [threshold, setThreshold] = useState(0);

  useEffect(() => {
    setThreshold(window.innerWidth * 1);
  }, []);

  useEffect(() => {
    if (scrollPosition < threshold*0.8) {
      setCurrentScene("scene1");
    } else {
      setCurrentScene("scene2");
    }
  }, [scrollPosition, threshold]);

  return (
    <>
      <Transition isActive={currentScene === "scene1"}>
        <Scene1 scrollPosition={scrollPosition} />
      </Transition>
      <Transition isActive={currentScene === "scene2"}>
        <Scene2 scrollPosition={scrollPosition} />
      </Transition>
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
