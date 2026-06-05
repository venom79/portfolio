import React from "react";
import Tent from "../components/Tent";
import Campfire from "../components/Campfire";
import PineTree from "../components/PineTree";

const BaseCamp = () => {
  return (
    <>
      {/* Tent */}
      <Tent position={[0, 0.95, 10]} scale={3} rotation={[0, 1, 0]} />

      {/* Campfire */}
      <Campfire position={[4, -0.5, 13]} scale={1} />

      {/* Trees */}
      <PineTree position={[-8, -1, 2]} scale={2} />

      <PineTree position={[-12, -1, 9]} scale={1.7} />

      <PineTree position={[10, -1, 3]} scale={2.3} />

      <PineTree position={[13, -1, 10]} scale={1.8} />

      <PineTree position={[13, -1, 5]} scale={2.3} />

      <PineTree position={[-13, -1, 5]} scale={1.8} />
    </>
  );
};

export default BaseCamp;
