"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, Text, useFBO } from "@react-three/drei";
import { useRef, useEffect } from "react";
import * as THREE from "three";

interface Props {
  scrollPosition: number;
}

const Lens = ({ scrollPosition }: Props) => {
  const text1 = useRef<THREE.Mesh>(null);
  const text2 = useRef<THREE.Mesh>(null);
  const lens = useRef<THREE.Mesh>(null);
  const renderTarget = useFBO();
  const pointerRef = useRef<THREE.Vector2 | null>(new THREE.Vector2(0, 0));
  const lastPointerMoveTimeRef = useRef(Date.now());

  useEffect(() => {
    const handlePointerEvent = (event: PointerEvent) => {
      if (event.target instanceof HTMLElement) {
        const rect = event.target.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        pointerRef.current = new THREE.Vector2(x, y);
        lastPointerMoveTimeRef.current = Date.now();
        console.log(pointerRef.current!.x, pointerRef.current!.y);
      }
    };

    let animationFrameId: number | null = null;

    const updatePointer = () => {
      if (Date.now() - lastPointerMoveTimeRef.current > 100) {
        cancelAnimationFrame(animationFrameId!);
        animationFrameId = null;
      } else {
        animationFrameId = requestAnimationFrame(updatePointer);
      }
    };

    window.addEventListener("pointermove", handlePointerEvent);
    animationFrameId = requestAnimationFrame(updatePointer);

    return () => {
      window.removeEventListener("pointermove", handlePointerEvent);
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  useFrame((state) => {
    const { gl, scene, camera } = state;

    const viewport = state.viewport.getCurrentViewport(state.camera, [0, 0, 2]);
    if (lens.current) {
      lens.current.position.x = THREE.MathUtils.lerp(
        lens.current.position.x,
        (pointerRef.current!.x * viewport.width) / 2,
        0.1
      );
      lens.current.position.y = THREE.MathUtils.lerp(
        lens.current.position.y,
        (pointerRef.current!.y * viewport.height) / 2,
        0.1
      );
    }
    if (text1.current && text2.current) {
      text1.current.visible = true;
      text2.current.visible = false;
    }
    gl.setRenderTarget(renderTarget);
    gl.render(scene, camera);
    if (text1.current && text2.current) {
      text1.current.visible = false;
      text2.current.visible = true;
    }

    gl.setRenderTarget(null);

  });

  return (
    <>
      <mesh ref={lens}>
        <sphereGeometry args={[1, 128]} />
        <MeshTransmissionMaterial
          buffer={renderTarget.texture}
          ior={1.025}
          thickness={0.5}
          chromaticAberration={0.05}
          backside
        />
      </mesh>
      <group>
        <mesh ref={text1}>
          <Text>まじむずい</Text>
        </mesh>
        <mesh ref={text2}>
          <Text>Tough</Text>
        </mesh>
      </group>
    </>
  );
};

export default Lens;
