import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCameraStore } from "../store/cameraStore";

export const CameraController = () => {
  const { camera } = useThree();

  const section = useCameraStore((state) => state.section);

  const lookTarget = useRef({
    x: 0,
    y: 1,
    z: 10,
  });

  // Initial cinematic intro
  useEffect(() => {
    camera.position.set(0, 30, 30);

    gsap.to(camera.position, {
      x: 0,
      y: 2,
      z: 20,
      duration: 4,
      ease: "power2.inOut",
    });
  }, [camera]);

  // Forest Navigation
  useEffect(() => {
    if (section === "forest") {
      const tl = gsap.timeline();

      // Animate where camera looks
      // Animate where camera looks
      gsap.to(lookTarget.current, {
        x: 30,
        y: 0,
        z: 0,
        duration: 4.5,
        ease: "power2.inOut",
      });

      tl.to(camera.position, {
        x: 0,
        y: 0,
        z: 15,
        duration: 1,
        ease: "none",
      });

      tl.to(
        camera.position,
        {
          x: 5,
          y: 2,
          z: 10,
          duration: 1,
          ease: "none",
        },
        "<",
      );

      tl.to(
        camera.position,
        {
          x: 30,
          y: 5,
          z: 20,
          duration: 3,
          ease: "power2.inOut",
        },
        "<",
      );
    }
  }, [section, camera]);

  useFrame(() => {
    camera.lookAt(
      lookTarget.current.x,
      lookTarget.current.y,
      lookTarget.current.z,
    );
  });

  return null;
};
