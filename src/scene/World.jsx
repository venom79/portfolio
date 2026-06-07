import { OrbitControls, PerspectiveCamera, Sky } from "@react-three/drei";
import { Suspense } from "react";
import Mountain from "../components/Mountain";
import BaseCamp from "../sections/BaseCamp";
import { CameraController } from "../camera/CameraController";
import Forest from "../sections/Forest";
import Summit from "../sections/Summit";

export default function World() {
  return (
    <>
      <CameraController />
      <PerspectiveCamera makeDefault position={[0, 30, 40]} />
      <mesh position={[80, 40, -150]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
      <Sky
        turbidity={6}
        rayleigh={1}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
        sunPosition={[150, 40, -300]}
      />
      <fog attach="fog" args={["#d8cbb3", 80, 350]} />
      {/* <fog attach="fog" args={["#c9d6c0", 40, 200]} /> */}
      {/* <fog attach="fog" args={["#c9d6c0", 40, 200]} /> */}
      <ambientLight intensity={0.3} />
      <directionalLight
        castShadow
        position={[20, 30, 20]}
        intensity={1.2}
        color="#ffd6a5"
      />

      <Suspense fallback={null}>
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

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[1000, 1000]} />
        <meshStandardMaterial color="#4b6b3c" />
      </mesh>

      <OrbitControls
        makeDefault
        enablePan={true}
        enableRotate={true}
        enableZoom={true}
      />
    </>
  );
}
