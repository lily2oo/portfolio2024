"use client";
import { OrbitControls, Sky, CatmullRomLine } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { useState, useEffect, useRef } from "react";
import * as THREE from "three";

const Ribbon = () => {
  const [curvePoints, setCurvePoints] = useState<THREE.Vector3[]>(() => {
    const num = 8;
    const initialCurvePoints = [];
    for (let i = 0; i < num; i++) {
      let theta = (i / num) * Math.PI * 2;
      initialCurvePoints.push(
        new THREE.Vector3().setFromSphericalCoords(
          1,
          Math.PI / 2 + 0.3 * (Math.random() - 0.5),
          theta
        )
      );
    }
    return initialCurvePoints;
  });

  const ref = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);

  useEffect(() => {
    const frontTexture = new THREE.TextureLoader().load("/front.jpg");
    const backTexture = new THREE.TextureLoader().load("/back.jpg");

    [frontTexture, backTexture].forEach((t) => {
      t.wrapS = 1000;
      t.wrapT = 1000;
      t.repeat.set(1, 1);
      t.offset.setX(0.5);
    });

    frontTexture.flipY = false;
    backTexture.flipY = false;

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: frontTexture,
      side: THREE.BackSide,
      roughness: 0.65,
      metalness: 0.25,
      flatShading: true,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      map: backTexture,
      side: THREE.FrontSide,
      roughness: 0.65,
      metalness: 0.25,
      flatShading: true,
    });

    const materials = [frontMaterial, backMaterial];

    const curve = new THREE.CatmullRomCurve3(curvePoints);
    curve.tension = 0.1;
    curve.closed = true;

    let number = 1000;
    let frenetFrames = curve.computeFrenetFrames(number, true);
    let spacedPoints = curve.getSpacedPoints(number);
    let tempPlane = new THREE.PlaneGeometry(1, 1, number, 1);

    tempPlane.addGroup(0, 6000, 0);
    tempPlane.addGroup(0, 6000, 1);

    let dimentions = [-0.08, 0.08];
    let point = new THREE.Vector3();
    let binormalShift = new THREE.Vector3();
    let finalPoints: any = [];

    dimentions.forEach((d) => {
      for (let i = 0; i <= number; i++) {
        point = spacedPoints[i];
        binormalShift.copy(frenetFrames.binormals[i]).multiplyScalar(d);
        finalPoints.push(
          new THREE.Vector3().copy(point).add(binormalShift).normalize()
        );
      }
    });

    tempPlane.setFromPoints(finalPoints);

    finalPoints[0].copy(finalPoints[number]);
    finalPoints[number + 1].copy(finalPoints[2 * number + 1]);

    ref.current!.geometry = tempPlane;
    ref.current!.material = materials;
  }, [curvePoints]);

  useFrame((state) => {
    const { pointer, camera } = state;
    timeRef.current += 0.001;
    const materials = Array.isArray(ref.current!.material)
      ? ref.current!.material
      : [ref.current!.material];
    materials.forEach((m) => {
      if (
        m instanceof THREE.MeshBasicMaterial ||
        m instanceof THREE.MeshStandardMaterial
      ) {
        m.map!.offset.x = timeRef.current * 0.5;
      }
    });

    camera.position.x = THREE.MathUtils.lerp(
      0,
      (pointer.x)*1,
      0.05
    );

    camera.position.y = THREE.MathUtils.lerp(
      0,
      (pointer.y)*10,
      0.05
    );
    camera.lookAt(0, 0, 0);
  });

  return (
    <>
      <mesh ref={ref}></mesh>
      {/* <mesh position={[0, 0, 0]}>
        <sphereGeometry args={[1, 30, 30]} />
        <meshNormalMaterial wireframe />
      </mesh> */}
      {/* {curvePoints.length > 0 ? (
        <CatmullRomLine
          //   ref={lineRef}
          points={curvePoints}
          closed={true}
          curveType="centripetal"
          tension={0.3}
          color="black"
          lineWidth={0}
          dashed={false}
        />
      ) : null} */}
    </>
  );
};

export default Ribbon;
