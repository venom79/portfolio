import { Text, useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useRef, useState } from "react";
import { useUIStore } from "../store/uiStore";

export const SignBoard = ({
  title,
  boardId,
  position = [0, 0, 0],
  rotation = [0, 0, 0],
}) => {
  const groupRef = useRef();
  const glowRef = useRef();

  const [hovered, setHovered] = useState(false);

  const { scene } = useGLTF("/models/WoodenSign.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  const openBoard = useUIStore((state) => state.openBoard);

  useFrame((state) => {
    if (!groupRef.current) return;

    // // Floating animation
    // groupRef.current.position.y =
    //   position[1] + Math.sin(state.clock.elapsedTime * 1.5) * 0.05;

    // Glow pulse
    if (glowRef.current) {
      const pulse = (Math.sin(state.clock.elapsedTime * 4) + 1) / 2;

      glowRef.current.material.opacity = hovered ? 0.15 + pulse * 0.15 : 0;
    }
  });

  return (
    <group
      ref={groupRef}
      position={position}
      rotation={rotation}
      onClick={() => openBoard(boardId)}
      onPointerOver={() => {
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "default";
      }}
    >
      {/* Glow */}

      <mesh ref={glowRef} position={[0, 2.8, -0.4]}>
        <planeGeometry args={[2.7, 2.1]} />
        <meshBasicMaterial color="#ffcf70" transparent opacity={0} />
      </mesh>

      {/* Sign Model */}

      <primitive object={scene.clone()} scale={hovered ? 2.08 : 2} />

      {/* Text */}

      <Text
        position={[0, 2.9, 0.15]}
        fontSize={0.35}
        color={hovered ? "#fff5d6" : "white"}
        anchorX="center"
        anchorY="middle"
        outlineWidth={0.02}
        outlineColor="#000"
      >
        {title}
      </Text>
    </group>
  );
};

useGLTF.preload("src/models/WoodenSign.glb");
