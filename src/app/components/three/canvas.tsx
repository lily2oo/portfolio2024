"use client";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../../page.module.css";
import { use, useRef } from "react";
import * as THREE from "three";
import Ribbon from "./ribbon";

interface Props {
  scrollPosition: number;
}

const Object = ({ scrollPosition }: Props) => {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    ref.current!.rotation.x = scrollPosition / 100;
  });
  return (
    <mesh ref={ref} position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const Scene = ({ scrollPosition }: Props) => {
  return (
    <div className={styles.canvasContainer} >
      <Canvas className={styles.canvas} camera={{ position: [0, 0, 2] }}>
        {/* <Object scrollPosition={scrollPosition} /> */}
        <Ribbon />
        {/* <OrbitControls /> */}
        <ambientLight color={0xffffff} intensity={0.5} />
        <directionalLight color={0xffffff} intensity={0.5} position={[0, 0, 5]} />
      </Canvas>
    </div>
  );
};

export default Scene;