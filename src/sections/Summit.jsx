import { Sparkles } from "@react-three/drei";

import Hiker from "../components/Hiker";
import Flag from "../components/Flag";
import MountainRange from "../components/MountainRange";
import SunriseSky from "../components/SunriseSky";

import { useCameraStore } from "../store/cameraStore";
import { SUMMIT_LAYOUT } from "../config/sceneLayouts";

const Summit = () => {
  const atmosphere = useCameraStore((s) => s.summitAtmosphere);

  const width = window.innerWidth;

  const layout =
    width < 768
      ? SUMMIT_LAYOUT.mobile
      : width < 1024
        ? SUMMIT_LAYOUT.tablet
        : SUMMIT_LAYOUT.desktop;

  return (
    <group position={layout.groupPosition}>
      {/* SUN */}

      <mesh position={layout.sun.position}>
        <sphereGeometry args={[layout.sun.radius, 32, 32]} />

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
        position={layout.mainLight.position}
        intensity={layout.mainLight.intensity * atmosphere}
        color="#ffb347"
      />

      {/* WARM FILL */}

      <directionalLight
        position={layout.fillLight.position}
        intensity={layout.fillLight.intensity * atmosphere}
        color="#ffe2b0"
      />

      {/* HIKER RIM LIGHT */}

      <pointLight
        position={layout.rimLight.position}
        intensity={layout.rimLight.intensity * atmosphere}
        distance={layout.rimLight.distance}
        color="#ffd59e"
      />

      {/* SUN GLOW */}

      <pointLight
        position={layout.sunGlow.position}
        intensity={layout.sunGlow.intensity * atmosphere}
        distance={layout.sunGlow.distance}
        color="#ffb347"
      />

      {/* MOUNTAINS */}

      <MountainRange />

      {/* FLAG */}

      <Flag
        position={layout.flag.position}
        rotation={layout.flag.rotation}
        scale={layout.flag.scale}
      />

      {/* HIKER */}

      <Hiker
        position={layout.hiker.position}
        rotation={layout.hiker.rotation}
        scale={layout.hiker.scale}
      />
    </group>
  );
};

export default Summit;
