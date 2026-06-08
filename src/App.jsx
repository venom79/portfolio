import { Canvas } from "@react-three/fiber";
import React from "react";
import World from "./scene/World";
import "./App.css";
import Hero from "./ui/Hero";
import { ForestUI } from "./ui/ForestUI";
import ParchmentModal from "./ui/ParchmentModal";
import { Leva } from "leva";
import JournalModal from "./ui/JournalModal";
import ContactModal from "./ui/ContactModal";

const App = () => {
  return (
    <>
      <Leva collapsed={false} />
      <Canvas
        camera={{ position: [0, 8, 20], fov: 60 }}
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
        }}
        shadows
      >
        <fog attach="fog" args={["#d6e3f0", 40, 200]} />
        <World />
      </Canvas>
      <Hero />
      <ForestUI />
      <ParchmentModal />
      <JournalModal />
      <ContactModal />
    </>
  );
};

export default App;
