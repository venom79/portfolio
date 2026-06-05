import { OrbitControls, Sky } from "@react-three/drei";
import { Suspense } from "react";
import Mountain from "../components/Mountain";
import BaseCamp from "../sections/BaseCamp";
import IntroCamera from "../camera/IntroCamera";

export default function World() {
  return (
    <>
      <IntroCamera />

      <mesh position={[80, 40, -150]}>
        <sphereGeometry args={[3, 32, 32]} />
        <meshBasicMaterial color="yellow" />
      </mesh>
      <Sky
        turbidity={10}
        rayleigh={3}
        mieCoefficient={0.005}
        mieDirectionalG={0.7}
        sunPosition={[50, 10, -100]}
      />
      <fog attach="fog" args={["#d8cbb3", 40, 200]} />
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
      </Suspense>

      <mesh receiveShadow rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
        <planeGeometry args={[150, 300]} />
        <meshStandardMaterial color="#4b6b3c" />
      </mesh>

      {/* <OrbitControls
        enablePan={false}
        minDistance={5}
        maxDistance={30}
        maxPolarAngle={Math.PI / 2.1}
      /> */}
    </>
  );
}
