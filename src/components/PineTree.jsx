import { Clone, useGLTF } from "@react-three/drei";
import { useEffect } from "react";

export default function PineTree({
  position = [0, 0, 0],
  scale = 1,
  rotation = [0, 0, 0],
}) {
  const { scene } = useGLTF("/models/Pine.glb");

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;

        // Trees usually don't need receiveShadow
        child.receiveShadow = false;
      }
    });
  }, [scene]);

  return (
    <Clone
      object={scene}
      position={position}
      scale={scale}
      rotation={rotation}
    />
  );
}

useGLTF.preload("/models/Pine.glb");
