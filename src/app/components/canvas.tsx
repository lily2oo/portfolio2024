"use client";
import { OrbitControls, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import styles from "../page.module.css";

interface Props {
  scrollPosition: number;
}

const Object = ({ scrollPosition }: Props) => {
  return (
    <mesh position={[0, 0, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshNormalMaterial />
    </mesh>
  );
};

const Scene = ({ scrollPosition }: Props) => {
  return (
    <div className={styles.canvasContainer} >
      <Canvas className={styles.canvas} camera={{ position: [0, 0, 2] }}>
        <Object scrollPosition={scrollPosition} />
      </Canvas>
    </div>
  );
};

export default Scene;