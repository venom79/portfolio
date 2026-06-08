import { Html } from "@react-three/drei";

export const HoverLabel = ({ text }) => {
  return (
    <Html center distanceFactor={8} zIndexRange={[100, 0]}>
      <div
        style={{ pointerEvents: "none" }}
        className="
          rounded-xs
          border
          border-white/10
          bg-white/10
          px-4
          py-2
          text-sm
          text-white
          backdrop-blur-md
          shadow-xl
          whitespace-nowrap
        "
      >
        {text}
      </div>
    </Html>
  );
};
