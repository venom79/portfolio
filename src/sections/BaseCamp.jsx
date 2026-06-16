import React, { useState } from "react";
import Tent from "../components/Tent";
import Campfire from "../components/Campfire";
import PineTree from "../components/PineTree";
import Cat from "../components/Cat";
import { Laptop } from "../components/Laptop";
import { Journal } from "../components/Journal";
import { useUIStore } from "../store/uiStore";
import { Sparkles } from "@react-three/drei";

const BaseCamp = () => {
  const openBoard = useUIStore((state) => state.openBoard);
  const isMobile = window.innerWidth < 768;
  return (
    <>
      {/* Tent */}
      <Tent position={[0, 0.95, 10]} scale={3} rotation={[0, 1, 0]} />

      {/* Campfire */}
      <Campfire position={[3.5, -0.7, 12]} scale={0.8} />

      {/* Trees */}
      <PineTree position={[-8, -1, 2]} scale={2} />

      <PineTree position={[-12, -1, 9]} scale={1.7} />

      <PineTree position={[10, -1, 3]} scale={2.3} />

      <PineTree position={[13, -1, 10]} scale={1.8} />

      <PineTree position={[13, -1, 5]} scale={2.3} />

      <PineTree position={[-13, -1, 5]} scale={1.8} />
      <Cat
        position={isMobile ? [2.6, -1, 15.2] : [-1, -1, 14.5]}
        rotation={isMobile ? [0, -0.8, 0] : [0, 0, 0]}
        scale={0.6}
      />
      <Laptop
        position={isMobile ? [-0.6, -1, 14] : [2, -1, 14]}
        rotation={[0, -1.2, 0]}
        scale={1}
        onClick={() => openBoard("laptop")}
      />
      <Journal
        position={isMobile ? [1.4, -1, 14] : [4, -1, 14]}
        rotation={[0, 3, 0]}
        scale={1}
        onClick={() => openBoard("journal")}
      />
    </>
  );
};

export default BaseCamp;
