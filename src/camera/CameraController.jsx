import { useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { useCameraStore } from "../store/cameraStore";

export const CameraController = () => {
  const { camera } = useThree();

  const section = useCameraStore((state) => state.section);

  const setSection = useCameraStore((s) => s.setSection);

  const setSummitAtmosphere = useCameraStore((s) => s.setSummitAtmosphere);

  const isLoaded = useCameraStore((s) => s.isLoaded);

  const lookTarget = useRef({
    x: 0,
    y: 1,
    z: 10,
  });

  const animateAtmosphere = (from, to, duration = 3) => {
    const obj = { value: from };

    gsap.to(obj, {
      value: to,
      duration,
      ease: "power2.inOut",
      onUpdate() {
        setSummitAtmosphere(obj.value);
      },
    });
  };

  // Initial cinematic intro
  useEffect(() => {
    if (!isLoaded) return;

    camera.position.set(0, 30, 30);

    gsap.to(camera.position, {
      x: 0,
      y: 2,
      z: 20,
      duration: 4,
      ease: "power2.inOut",
    });
  }, [camera, isLoaded]);

  // Forest Navigation
  useEffect(() => {
    if (!isLoaded) return;
    gsap.killTweensOf(camera.position);
    gsap.killTweensOf(lookTarget.current);

    if (section === "baseCamp") {
      animateAtmosphere(useCameraStore.getState().summitAtmosphere, 0, 2);
      const tl = gsap.timeline();

      // Look back at the camp
      gsap.to(lookTarget.current, {
        x: 0,
        y: 1,
        z: 10,
        duration: 3,
        ease: "power2.inOut",
      });

      tl.to(camera.position, {
        x: 0,
        y: 25,
        z: 10,
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(camera.position, {
        x: 0,
        y: 10,
        z: 25,
        duration: 1.5,
        ease: "power2.inOut",
      });

      tl.to(camera.position, {
        x: 0,
        y: 2,
        z: 20,
        duration: 2,
        ease: "power3.out",
      });
    }

    if (section === "forest") {
      animateAtmosphere(useCameraStore.getState().summitAtmosphere, 0, 2);
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
          x: 25,
          y: 6,
          z: 20,
          duration: 3,
          ease: "power2.inOut",
        },
        "<",
      );
    }

    if (section === "climb") {
      animateAtmosphere(0, 1, 5);

      const tl = gsap.timeline();

      // Start rotating immediately
      tl.to(
        lookTarget.current,
        {
          x: -4,
          y: 90,
          z: -185,
          duration: 2.5,
          ease: "power2.inOut",
        },
        0, // start at timeline time 0
      );

      // Rise above forest
      tl.to(
        camera.position,
        {
          x: 0,
          y: 12,
          z: 15,
          duration: 1.5,
          ease: "power2.inOut",
        },
        "<",
      );

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

      tl.call(() => {
        setSection("summit");
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
