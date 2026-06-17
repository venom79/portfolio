import React, { useState } from "react";
import Tent from "../components/Tent";
import Campfire from "../components/Campfire";
import PineTree from "../components/PineTree";
import Cat from "../components/Cat";
import { Laptop } from "../components/Laptop";
import { Journal } from "../components/Journal";
import { useUIStore } from "../store/uiStore";
import { BASECAMP_LAYOUT } from "../config/sceneLayouts";

const BaseCamp = () => {
  const openBoard = useUIStore((state) => state.openBoard);

  const width = window.innerWidth;

  const layout =
    width < 768
      ? BASECAMP_LAYOUT.mobile
      : width < 1024
        ? BASECAMP_LAYOUT.tablet
        : BASECAMP_LAYOUT.desktop;
  return (
    <>
      {/* Tent */}
      <Tent
        position={layout.tent.position}
        scale={layout.tent.scale}
        rotation={layout.tent.rotation}
      />

      {/* Campfire */}
      <Campfire
        position={layout.campfire.position}
        scale={layout.campfire.scale}
      />

      {/* Trees */}
      {layout.trees.map((tree, index) => (
        <PineTree key={index} position={tree.position} scale={tree.scale} />
      ))}
      <Cat
        position={layout.cat.position}
        rotation={layout.cat.rotation}
        scale={layout.cat.scale}
      />
      <Laptop
        position={layout.laptop.position}
        rotation={layout.laptop.rotation}
        scale={layout.laptop.scale}
        onClick={() => openBoard("laptop")}
      />
      <Journal
        position={layout.journal.position}
        rotation={layout.journal.rotation}
        scale={layout.journal.scale}
        onClick={() => openBoard("journal")}
      />
    </>
  );
};

export default BaseCamp;
