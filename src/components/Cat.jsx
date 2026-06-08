import { useGLTF, useAnimations } from "@react-three/drei";
import { useEffect, useRef } from "react";
import * as THREE from "three";

const Cat = (props) => {
  const group = useRef();
  const isAnimating = useRef(false);

  const idleActionName =
    "AnimalArmature|AnimalArmature|AnimalArmature|Idle_Eating";

  const headbuttActionName =
    "AnimalArmature|AnimalArmature|AnimalArmature|Headbutt";

  const meowRef = useRef(new Audio("/sounds/meow.mp3"));

  const { scene, animations } = useGLTF("/models/Cat.glb");
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useEffect(() => {
    const idle = actions[idleActionName];

    if (idle) {
      idle.reset();
      idle.play();
      idle.timeScale = 0.6;
    }
  }, [actions]);

  const handleClick = () => {
    if (isAnimating.current) return;

    const idle = actions[idleActionName];
    const headbutt = actions[headbuttActionName];

    if (!idle || !headbutt) return;

    isAnimating.current = true;

    // Meow
    meowRef.current.currentTime = 0;
    meowRef.current.play().catch(() => {});

    idle.fadeOut(0.2);

    headbutt.reset();
    headbutt.setLoop(THREE.LoopOnce, 1);
    headbutt.clampWhenFinished = true;
    headbutt.timeScale = 1;
    headbutt.fadeIn(0.2);
    headbutt.play();

    const duration = headbutt.getClip().duration * 1000;

    setTimeout(() => {
      headbutt.fadeOut(0.2);

      idle.reset();
      idle.fadeIn(0.2);
      idle.play();

      isAnimating.current = false;
    }, duration);
  };

  return (
    <group
      ref={group}
      {...props}
      onClick={handleClick}
      onPointerOver={() => {
        document.body.style.cursor = "grab";
      }}
      onPointerOut={() => {
        document.body.style.cursor = "default";
      }}
    >
      <primitive object={scene} />
    </group>
  );
};

export default Cat;

useGLTF.preload("/models/Cat.glb");
