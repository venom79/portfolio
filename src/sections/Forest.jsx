import PineTree from "../components/PineTree";
import { SignBoard } from "../components/SignBoard";

const Forest = () => {
  return (
    <group position={[30, 0, 0]}>
      {/* LEFT SIGNBOARD - SKILLS */}
      <SignBoard
        title="Skills"
        boardId="skills"
        position={[-8, -1, 8]}
        rotation={[0, 0.5, 0]}
      />

      <SignBoard
        title="Experience"
        boardId="experience"
        position={[-2.5, -1, 9]}
        rotation={[0, -0.2, 0]}
      />

      <SignBoard
        title="Projects"
        boardId="projects"
        position={[3, -1, 11]}
        rotation={[0, -0.8, 0]}
      />

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

      <PineTree position={[-18, -1, -28]} scale={2.7} />
      <PineTree position={[-6, -1, -30]} scale={2.4} />

      <PineTree position={[6, -1, -32]} scale={2.5} />
      <PineTree position={[18, -1, -28]} scale={2.8} />

      {/* SIDE TREES */}

      <PineTree position={[-22, -1, -5]} scale={2.3} />
      <PineTree position={[-24, -1, -20]} scale={2.5} />

      <PineTree position={[22, -1, -5]} scale={2.3} />
      <PineTree position={[24, -1, -18]} scale={2.4} />

      {/* BACK FILLERS */}

      <PineTree position={[-20, -1, -40]} scale={2.8} />
      <PineTree position={[-8, -1, -42]} scale={2.5} />

      <PineTree position={[8, -1, -44]} scale={2.6} />
      <PineTree position={[20, -1, -40]} scale={2.9} />
    </group>
  );
};

export default Forest;
