import { useGLTF, Sparkles } from "@react-three/drei";
import { useState, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { HoverLabel } from "./HoverLabel";
import { useUIStore } from "../store/uiStore";

export const Laptop = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  onClick,
}) => {
  const { scene } = useGLTF("/models/Laptop.glb");
  const [hovered, setHovered] = useState(false);
  const time = useRef(0);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;

      if (child.material?.name === "Screen") {
        child.material.emissive.set("#4da6ff");
      }
    }
  });

  useFrame((_, delta) => {
    time.current += delta;

    scene.traverse((child) => {
      if (child.isMesh && child.material?.name === "Screen") {
        child.material.emissiveIntensity =
          0.8 + Math.sin(time.current * 3) * 0.15 + Math.random() * 0.1;
      }
    });
  });

  return (
    <group
      position={position}
      rotation={rotation}
      onClick={onClick}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {hovered && (
        <Sparkles count={12} scale={2} size={3} speed={0.3} color="#f7d774" />
      )}

      {hovered && (
        <group position={[-0.7, 1.32, 0]}>
          <HoverLabel text="💻 Connect" />
        </group>
      )}

      <primitive object={scene.clone()} scale={hovered ? scale * 1.1 : scale} />
    </group>
  );
};

useGLTF.preload("/models/Laptop.glb");
