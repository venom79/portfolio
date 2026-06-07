import Mountain from "./Mountain";

const MountainRange = () => {
  return (
    <group position={[0, -25, -190]}>
      <Mountain position={[-180, -30, 0]} scale={14} />
      <Mountain position={[-120, -30, 0]} scale={14} />
      <Mountain position={[-70, -30, -20]} scale={17} />
      <Mountain position={[-20, -30, 10]} scale={20} />
      <Mountain position={[40, -30, -15]} scale={18} />
      <Mountain position={[90, -30, 5]} scale={16} />
      <Mountain position={[140, -30, -10]} scale={19} />
      <Mountain position={[220, -30, -10]} scale={18} />
    </group>
  );
};

export default MountainRange;
