import { Canvas } from "@react-three/fiber";
import React from "react";
import World from "./scene/World";
import "./App.css";
import Hero from "./ui/Hero";
import { ForestUI } from "./ui/ForestUI";
import ParchmentModal from "./ui/ParchmentModal";
import JournalModal from "./ui/JournalModal";
import ContactModal from "./ui/ContactModal";
import MilestonesModal from "./ui/MilestonesModel";
import AboutMeModal from "./ui/AboutMeModal";
import ExpeditionNavigator from "./ui/ExpeditionNavigator";
import { SummitUI } from "./ui/SummitUI";
import { useCameraStore } from "./store/cameraStore";
import Loader from "./ui/Loader";
import { Perf } from "r3f-perf";

const App = () => {
  const isLoaded = useCameraStore((s) => s.isLoaded);
  return (
    <>
      <Canvas
        camera={{ position: [0, 8, 20], fov: 60 }}
        style={{
          width: "100vw",
          height: "100vh",
          display: "block",
        }}
        shadows
      >
        {/* <Perf position="top-left" /> */}
        {/* <fog attach="fog" args={["#d6e3f0", 40, 200]} /> */}
        <World />
      </Canvas>
      <Loader />
      {isLoaded && (
        <>
          <ExpeditionNavigator />

          <Hero />
          <ForestUI />
          <SummitUI />

          <ParchmentModal />
          <JournalModal />
          <ContactModal />
          <MilestonesModal />
          <AboutMeModal />
        </>
      )}
    </>
  );
};

export default App;
