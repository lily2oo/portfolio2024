"use client";
import { OrbitControls, Sky, Line } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../page.module.css";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { LineGeometry } from "three/examples/jsm/lines/LineGeometry.js";
import { LineMaterial } from "three/examples/jsm/lines/LineMaterial.js";

const Ribbon = () => {
  const [curvePoints, setCurvePoints] = useState<THREE.Vector3[]>([]);
  const [lineGeometry] = useState(() => new LineGeometry());
  const [lineMaterial] = useState(
    () => new LineMaterial({ color: 0xffffff, linewidth: 1 })
  );

  useEffect(() => {
    const num = 5;
    const newCurvePoints = [];

    for (let i = 0; i < num; i++) {
      let theta = (i / num) * Math.PI * 2;
      newCurvePoints.push(
        new THREE.Vector3().setFromSphericalCoords(
          1,
          Math.PI / 2 + Math.random() - 0.5,
          theta
        )
      );
    }

    setCurvePoints(newCurvePoints);
  }, []);

  useEffect(() => {
    if (curvePoints.length > 0) {
      const curve = new THREE.CatmullRomCurve3(
        curvePoints,
        true,
        "centripetal",
        0.5
      );
      const points = curve.getPoints(50);
      lineGeometry.setFromPoints(points);
    }
  }, [curvePoints, lineGeometry]);

  return (
    <>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 30, 30]} />
        <meshNormalMaterial wireframe />
      </mesh>
      {curvePoints.length > 0 && (
        <Line geometry={lineGeometry} material={lineMaterial} />
      )}
    </>
  );
};
export default Ribbon;
