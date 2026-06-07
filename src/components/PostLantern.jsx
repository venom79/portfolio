import { useGLTF } from "@react-three/drei";

const PostLantern = (props) => {
  const { scene } = useGLTF("/models/PostLantern.glb");

  scene.traverse((child) => {
    if (child.isMesh) {
      child.castShadow = true;
      child.receiveShadow = true;
    }
  });

  return <primitive object={scene.clone()} {...props} />;
};

export default PostLantern;

useGLTF.preload("/models/PostLantern.glb");
