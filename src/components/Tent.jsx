import { useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function Tent({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF("/models/Tent.glb");
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  return (
    <primitive
      object={scene.clone()}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}
