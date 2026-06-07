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

    if (section === "summit") {
      const tl = gsap.timeline();

      // Look at summit first
      gsap.to(lookTarget.current, {
        x: -4,
        y: 90,
        z: -185,
        duration: 4,
        ease: "power2.inOut",
      });

      // Rise above forest
      tl.to(camera.position, {
        x: 0,
        y: 12,
        z: 15,
        duration: 1.5,
        ease: "power2.inOut",
      });

      // Fly toward mountains
      tl.to(camera.position, {
        x: 0,
        y: 60,
        z: -30,
        duration: 2,
        ease: "power2.inOut",
      });

      // Final summit composition
      tl.to(camera.position, {
        x: -4,
        y: 80,
        z: -115,
        duration: 2.5,
        ease: "power3.out",
      });
    }
  }, [section, camera]);

  useFrame(() => {
    camera.lookAt(
      lookTarget.current.x,
      lookTarget.current.y,
      lookTarget.current.z,
    );
  });
  useEffect(() => {
    console.log("SECTION:", section);
  }, [section]);
  return null;
};
