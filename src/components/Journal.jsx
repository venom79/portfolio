import { useGLTF, Sparkles } from "@react-three/drei";
import { useState } from "react";
import { HoverLabel } from "./HoverLabel";

export const Journal = ({
  position = [0, 0, 0],
  rotation = [0, 0, 0],
  scale = 1,
  onClick,
}) => {
  const { scene } = useGLTF("/models/Journal.glb");

  const [hovered, setHovered] = useState(false);

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
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
        <group position={[0, 0.5, 0]}>
          <HoverLabel text="📖 Explorer Journal" />
        </group>
      )}

      <primitive object={scene.clone()} scale={hovered ? scale * 1.3 : scale} />
    </group>
  );
};

useGLTF.preload("/models/Journal.glb");
