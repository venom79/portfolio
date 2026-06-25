import { useGLTF, Sparkles } from "@react-three/drei";
import { useState } from "react";
import { HoverLabel } from "./HoverLabel";
import { useUIStore } from "../store/uiStore";

const Flag = ({ position = [0, 0, 0], rotation = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF("/models/Flag.glb");

  const [hovered, setHovered] = useState(false);

  const openBoard = useUIStore((state) => state.openBoard);

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
      onClick={() => openBoard("milestones")}
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
        <Sparkles count={20} scale={4} size={4} speed={0.4} color="#ffd27d" />
      )}

      {hovered && (
        <group position={[0, 8, 0]}>
          <HoverLabel text="🏳 Trail Markers" />
        </group>
      )}

      <primitive
        object={scene.clone()}
        scale={hovered ? scale * 1.05 : scale}
      />
    </group>
  );
};

export default Flag;

useGLTF.preload("/models/Flag.glb");
