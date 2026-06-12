import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Suspense } from "react";
import { Bloom, EffectComposer } from "@react-three/postprocessing";

import Mountain from "../components/Mountain";
import BaseCamp from "../sections/BaseCamp";
import Forest from "../sections/Forest";
import Summit from "../sections/Summit";

import { CameraController } from "../camera/CameraController";
import { useCameraStore } from "../store/cameraStore";

export default function World() {
  const section = useCameraStore((state) => state.section);
  return (
    <>
      <CameraController />

      <PerspectiveCamera makeDefault position={[0, 30, 40]} />

      {/* Neutral world background */}
      {section !== "summit" && <color attach="background" args={["#1c2333"]} />}

      {/* Neutral fog */}
      <fog attach="fog" args={["#2b3448", 100, 300]} />

      {/* Ambient */}
      <ambientLight intensity={0.35} color="#dfe7ff" />

      {/* Main light */}
      <directionalLight
        castShadow
        position={[20, 30, 20]}
        intensity={0.8}
        color="#fff4dc"
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-50}
        shadow-camera-right={50}
        shadow-camera-top={50}
        shadow-camera-bottom={-50}
      />

      {/* Fill light */}
      <directionalLight
        position={[-20, 15, -20]}
        intensity={0.25}
        color="#9eb6ff"
      />

      <EffectComposer>
        <Bloom intensity={1.2} luminanceThreshold={0.3} mipmapBlur />
      </EffectComposer>

      <Suspense fallback={null}>
        {/* World Mountains */}
        <Mountain position={[-60, -3, -120]} scale={8} />
        <Mountain position={[0, -3, -140]} scale={10} />
        <Mountain position={[60, -3, -120]} scale={9} />
        <Mountain position={[-30, -3, -70]} scale={5} />
        <Mountain position={[20, -3, -80]} scale={6} />
        <Mountain position={[0, -3, -60]} scale={3} />

        <BaseCamp />
        <Forest />
        <Summit />
      </Suspense>

      {/* Ground */}
      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#70884d" roughness={1} metalness={0} />
      </mesh>
    </>
  );
}
