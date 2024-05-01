"use client";
import { OrbitControls, Sky, CatmullRomLine } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import styles from "../page.module.css";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";
import { extend } from "@react-three/fiber";
import { Line2 } from "three/examples/jsm/lines/Line2.d.ts";

const Ribbon = () => {
  const [curvePoints, setCurvePoints] = useState<THREE.Vector3[]>([]);
  //   const lineRef = useRef<Line2>(null);
  const ref = useRef<THREE.Mesh>(null);

  useEffect(() => {
    const num = 8;
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
    }

    setCurvePoints(newCurvePoints);

    const curve = new THREE.CatmullRomCurve3(newCurvePoints);
    curve.tension = 0.5;
    curve.closed = true;

    let number = 1000;
    let frenetFrames = curve.computeFrenetFrames(number, true);
    let spacedPoints = curve.getSpacedPoints(number);
    let tempPlane = new THREE.PlaneGeometry(1, 1, number, 1);

    let dimentions = [-0.1,0.1];
    let point = new THREE.Vector3();
    let binormalShift = new THREE.Vector3();
    let finalPoints: any = [];

    dimentions.forEach(d => {
      for (let i = 0; i <= number; i++) {
        point = spacedPoints[i];
        binormalShift.copy(frenetFrames.binormals[i]).multiplyScalar(d);
        finalPoints.push(new THREE.Vector3().copy(point).add(binormalShift));
      }
    });

    tempPlane.setFromPoints(finalPoints);

    console.log(tempPlane, finalPoints);

    finalPoints[0].copy(finalPoints[number]);
    finalPoints[number + 1].copy(finalPoints[2 * number + 1]);

    ref.current!.geometry = tempPlane;
  }, []);

  return (
    <>
      <mesh ref={ref}>
        <meshBasicMaterial color={0x00ff00} side={THREE.DoubleSide} wireframe={true}/>
      </mesh>
      <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 30, 30]} />
        <meshNormalMaterial wireframe />
      </mesh>
      {curvePoints.length > 0 ? (
        <CatmullRomLine
          //   ref={lineRef}
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
