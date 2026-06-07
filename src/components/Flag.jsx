import { useGLTF } from "@react-three/drei";

const Flag = (props) => {
  const { scene } = useGLTF("/models/Flag.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene.clone()} {...props} />;
};

export default Flag;

useGLTF.preload("/models/Flag.glb");
