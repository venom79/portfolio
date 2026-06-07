import { useGLTF } from "@react-three/drei";

const Chest = (props) => {
  const { scene } = useGLTF("/models/Chest.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene.clone()} {...props} />;
};

export default Chest;

useGLTF.preload("/models/Chest.glb");
