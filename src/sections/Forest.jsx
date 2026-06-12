import { Sparkles } from "@react-three/drei";
import PineTree from "../components/PineTree";
import { SignBoard } from "../components/SignBoard";
import PostLantern from "../components/PostLantern";

const Forest = () => {
  return (
    <group position={[30, 0, 0]}>
      {/* LEFT SIGNBOARD - SKILLS */}
      <SignBoard
        title="Skills"
        boardId="skills"
        position={[-7, -1, 9]}
        rotation={[0, 0.7, 0]}
      />

      <SignBoard
        title="Experience"
        boardId="experience"
        position={[-1, -1, 8]}
        rotation={[0, -0.15, 0]}
      />
      <SignBoard
        title="Projects"
        boardId="projects"
        position={[2.5, -1, 9]}
        rotation={[0, -0.9, 0]}
      />
      <PostLantern position={[-4, -1, 9]} rotation={[0, 0.2, 0]} scale={1.2} />
      <pointLight
        castShadow
        color="#ff8c42"
        intensity={20}
        distance={15}
        position={[-4, 1.7, 11]}
      />
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[-4, -0.98, 9.5]}>
        <circleGeometry args={[2.5, 32]} />
        <meshBasicMaterial color="#ffcc66" transparent opacity={0.08} />
      </mesh>

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[1, -0.99, 12]}>
        <planeGeometry args={[29, 7]} />
        <meshStandardMaterial color="#7a5a3a" />
      </mesh>

      {/* FRONT FOREST */}

      <PineTree position={[-12, -1, 4]} scale={2.5} />
      <PineTree position={[12, -1, 4]} scale={2.5} />

      <PineTree position={[-10, -1, -6]} scale={2.2} />
      <PineTree position={[10, -1, -6]} scale={2.2} />

      {/* MIDDLE LAYER */}

      <PineTree position={[-15, -1, -15]} scale={2.4} />
      <PineTree position={[-8, -1, -18]} scale={2.1} />

      <PineTree position={[8, -1, -17]} scale={2.3} />
      <PineTree position={[15, -1, -14]} scale={2.4} />

      {/* DENSE CENTER */}

      <PineTree position={[-18, -1, -8]} scale={2.7} />
      <PineTree position={[-6, -1, -0]} scale={2.4} />

      <PineTree position={[8, -1, 2]} scale={2.5} />
      <PineTree position={[18, -1, -8]} scale={2.8} />

      {/* SIDE TREES */}

      <PineTree position={[-22, -1, -5]} scale={2.3} />
      <PineTree position={[-24, -1, -20]} scale={2.5} />

      <PineTree position={[22, -1, -5]} scale={2.3} />
      <PineTree position={[24, -1, 0]} scale={2.4} />

      {/* BACK FILLERS */}

      <PineTree position={[1, -1, -40]} scale={2.8} />
      <PineTree position={[2, -1, -1]} scale={2.5} />

      <PineTree position={[-2, -1, -1]} scale={2.6} />
      <PineTree position={[5, -1, -0]} scale={2.9} />
    </group>
  );
};

export default Forest;
