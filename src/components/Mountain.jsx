import { useGLTF } from "@react-three/drei";
import React, { useEffect } from "react";

const Mountain = ({ position = [0, 0, 0], scale = 1 }) => {
  const { scene } = useGLTF("/models/Mountain.glb");
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);
  return <primitive object={scene.clone()} position={position} scale={scale} />;
};

export default Mountain;
