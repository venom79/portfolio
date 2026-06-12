import { Sparkles } from "@react-three/drei";

import Hiker from "../components/Hiker";
import Flag from "../components/Flag";
import MountainRange from "../components/MountainRange";
import SunriseSky from "../components/SunriseSky";

import { useCameraStore } from "../store/cameraStore";

const Summit = () => {
  const section = useCameraStore((state) => state.section);

  // const showSummitAtmosphere = section === "climb" || section === "summit";
  const atmosphere = useCameraStore((s) => s.summitAtmosphere);

  return (
    <group position={[-6, 54, -155]}>
      {/* SUN */}

      <mesh position={[140, 70, -200]}>
        <sphereGeometry args={[12, 32, 32]} />

        <meshStandardMaterial
          color="#ff6b35"
          emissive="#ff6b35"
          emissiveIntensity={8 * atmosphere}
          toneMapped={false}
        />
      </mesh>

      {/* SUNRISE SKY */}

      {atmosphere > 0.01 && <SunriseSky opacity={atmosphere} />}

      {/* MAIN SUN LIGHT */}

      <directionalLight
        position={[140, 70, -200]}
        intensity={2.5 * atmosphere}
        color="#ffb347"
      />

      {/* WARM FILL */}

      <directionalLight
        position={[-60, 40, -120]}
        intensity={0.5 * atmosphere}
        color="#ffe2b0"
      />

      {/* HIKER RIM LIGHT */}

      <pointLight
        position={[8, 28, 15]}
        intensity={1.8 * atmosphere}
        distance={60}
        color="#ffd59e"
      />

      {/* SUN GLOW LIGHT */}

      <pointLight
        position={[140, 70, -200]}
        intensity={4 * atmosphere}
        distance={300}
        color="#ffb347"
      />

      {/* PARTICLES */}

      <Sparkles
        count={Math.floor(40 * atmosphere)}
        scale={[120, 50, 120]}
        size={4}
        speed={0.1}
        color="#ffd27d"
      />

      {/* MOUNTAINS */}

      <MountainRange />

      {/* FLAG */}

      <Flag position={[6.2, 24, 16.1]} rotation={[0, 0, -0.2]} scale={3} />

      {/* HIKER */}

      <Hiker position={[2, 23.7, 14.7]} rotation={[0, 2.4, -0.245]} scale={7} />
    </group>
  );
};

export default Summit;
