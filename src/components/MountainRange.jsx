import Mountain from "./Mountain";

const MountainRange = () => {
  return (
    <>
      {/* Far layer */}
      <group position={[0, -25, -180]}>
        <Mountain position={[-80, -30, 0]} scale={18} />
        <Mountain position={[40, -30, 0]} scale={22} />
        <Mountain position={[170, -30, 0]} scale={18} />
      </group>

      {/* Mid layer */}
      <group position={[0, -25, -120]}>
        <Mountain position={[-90, -30, 0]} scale={15} />
        <Mountain position={[0, -30, 10]} scale={18} />
        <Mountain position={[90, -30, -10]} scale={15} />
      </group>
    </>
  );
};

export default MountainRange;
