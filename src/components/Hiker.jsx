import { useGLTF } from "@react-three/drei";

const Hiker = (props) => {
  const { scene } = useGLTF("/models/Hiker.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene.clone()} {...props} />;
};

export default Hiker;

useGLTF.preload("/models/Hiker.glb");
