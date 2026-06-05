import { useFrame, useThree } from "@react-three/fiber";
import { useEffect } from "react";
import gsap from "gsap";

const IntroCamera = () => {
  const { camera } = useThree();

  useEffect(() => {
    camera.position.set(0, 30, 30);

    gsap.to(camera.position, {
      x: 0,
      y: 2,
      z: 20,
      duration: 4,
      ease: "power2.inOut",
    });
  }, []);
  useFrame(() => {
    camera.lookAt(0, 1, 10);
  });
  return null;
};

export default IntroCamera;
