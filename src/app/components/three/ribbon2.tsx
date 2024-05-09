"use client";
import { OrbitControls, Sky, CatmullRomLine, useTexture, } from "@react-three/drei";
import { Canvas, useFrame, useThree} from "@react-three/fiber";
import { useState, useEffect, useRef, useMemo } from "react";
import * as THREE from "three";

interface Props {
  scrollPosition: number;
}

const Ribbon2 = ({ scrollPosition }: Props) => {
  const curvePoints = useMemo<THREE.Vector3[]>(() => {
    return [
      new THREE.Vector3(0, -0.11, 2.0),
      new THREE.Vector3(1.4, 0.25, 1.4),
      new THREE.Vector3(1.98, 0.27, 0),
      new THREE.Vector3(1.4, -0.27, -1.4),
      new THREE.Vector3(0, -1.51, -2.0),
      new THREE.Vector3(-1.4, -1.07, -1.4),
      new THREE.Vector3(-1.98, 1.5, 0),
      new THREE.Vector3(-1.41, 0.06, 1.41),
    ];
  }, []);

  const ref = useRef<THREE.Mesh>(null);
  const timeRef = useRef(0);
  const { size, scene } = useThree();

  const texture = useTexture('/ribbon.webp');
  
  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.needsUpdate = true;
    texture.wrapS = 1000;
    texture.wrapT = 1000;
    texture.repeat.set(1, 1);
    texture.offset.setX(0.5);
  }, [texture]);

  texture.flipY = false;
  
  useEffect(() => {

    const frontMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.FrontSide,
      flatShading: true,
      toneMapped: false,
    });

    const backMaterial = new THREE.MeshStandardMaterial({
      map: texture,
      side: THREE.BackSide,
      flatShading: true,
      toneMapped: false,
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

    const uvs = tempPlane.attributes.uv;
    for (let i = 0; i < uvs.count; i++) {
      uvs.setX(i, 1 - uvs.getX(i));
    }

    ref.current!.geometry = tempPlane;
    ref.current!.material = materials;
  }, [curvePoints]);

  useFrame((state) => {
    const { camera } = state;
    timeRef.current += 0.001;
    const materials = Array.isArray(ref.current!.material)
      ? ref.current!.material
      : [ref.current!.material];
    materials.forEach((m) => {
      if (
        m instanceof THREE.MeshBasicMaterial ||
        m instanceof THREE.MeshStandardMaterial
      ) {
        if (m.map) {
          m.map.offset.x = -timeRef.current * 0.5;
        }
      }
    });

    const cameraPosition = new THREE.Vector3(
      THREE.MathUtils.mapLinear(
        scrollPosition,
        0,
        document.body.clientWidth,
        0,
        10
      ),
      0,
      0
    );
    camera.position.copy(cameraPosition)  ;
    camera.updateProjectionMatrix();
  });

  return (
    <>
      <mesh ref={ref} position={[2, 0, 0]} scale={[0.75, 0.75, 0.75]}></mesh>
    </>
  );
};

export default Ribbon2;
