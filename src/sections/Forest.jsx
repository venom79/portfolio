import PineTree from "../components/PineTree";
import { SignBoard } from "../components/SignBoard";
import PostLantern from "../components/PostLantern";
import { FOREST_LAYOUT } from "../config/sceneLayouts";

const Forest = () => {
  const width = window.innerWidth;

  const layout =
    width < 768
      ? FOREST_LAYOUT.mobile
      : width < 1024
        ? FOREST_LAYOUT.tablet
        : FOREST_LAYOUT.desktop;

  return (
    <group position={layout.groupPosition}>
      {/* Signboards */}

      <SignBoard
        title="Skills"
        boardId="skills"
        position={layout.signs.skills.position}
        rotation={layout.signs.skills.rotation}
      />

      <SignBoard
        title="Experience"
        boardId="experience"
        position={layout.signs.experience.position}
        rotation={layout.signs.experience.rotation}
      />

      <SignBoard
        title="Projects"
        boardId="projects"
        position={layout.signs.projects.position}
        rotation={layout.signs.projects.rotation}
      />

      {/* Lantern */}

      <PostLantern
        position={layout.lantern.position}
        rotation={layout.lantern.rotation}
        scale={layout.lantern.scale}
      />

      <pointLight
        castShadow
        color="#ff8c42"
        intensity={20}
        distance={15}
        position={[
          layout.lantern.position[0],
          layout.lantern.position[1] + 2.7,
          layout.lantern.position[2] + 2,
        ]}
      />

      <mesh
        rotation={[-Math.PI / 2, 0, 0]}
        position={[
          layout.lantern.position[0],
          -0.98,
          layout.lantern.position[2] + 0.5,
        ]}
      >
        <circleGeometry args={[2.5, 32]} />
        <meshBasicMaterial color="#ffcc66" transparent opacity={0.08} />
      </mesh>

      {/* Path */}

      <mesh rotation={[-Math.PI / 2, 0, 0]} position={layout.path.position}>
        <planeGeometry args={layout.path.size} />
        <meshStandardMaterial color="#7a5a3a" />
      </mesh>

      {/* Trees */}

      {layout.trees.map((tree, index) => (
        <PineTree key={index} position={tree.position} scale={tree.scale} />
      ))}
    </group>
  );
};

export default Forest;
