"use client";
import { OrbitControls, Sky, CatmullRomLine } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../page.module.css";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const Ribbon = () => {
  const [curvePoints, setCurvePoints] = useState<THREE.Vector3[]>([]);

  useEffect(() => {
    const num = 5;
    const newCurvePoints = [...curvePoints];
    for (let i = 0; i < num; i++) {
      let theta = (i / num) * Math.PI * 2;
      newCurvePoints.push(
        new THREE.Vector3().setFromSphericalCoords(
          1,
          Math.PI / 2 + Math.random() - 0.5,
          theta
        )
      );
      setCurvePoints(newCurvePoints);
      console.log(curvePoints.length);
    }
  }, []);

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 30, 30]} />
        <meshNormalMaterial wireframe />
      </mesh>
      {curvePoints.length > 0 ? (
        <CatmullRomLine
          points={curvePoints}
          closed={true}
          curveType="centripetal"
          tension={0.5}
          color="black"
          lineWidth={1}
          dashed={false}
        />
      ) : null}
    </>
  );
};

export default Ribbon;
