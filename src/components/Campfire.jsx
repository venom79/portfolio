import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Campfire({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF("/models/Campfire.glb");
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  return (
    <group>
      <pointLight
        castShadow
        color="#ff8c42"
        intensity={10}
        distance={15}
        position={[position[0], position[1] + 0.36, position[2]]}
      />

      <primitive
        object={scene.clone()}
        position={position}
        scale={scale}
        rotation={rotation}
      />
    </group>
  );
}
