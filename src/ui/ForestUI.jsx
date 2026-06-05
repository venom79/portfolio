import { motion } from "framer-motion";
import { useCameraStore } from "../store/cameraStore";

export const ForestUI = () => {
  const section = useCameraStore((state) => state.section);
  const setSection = useCameraStore((state) => state.setSection);

  if (section !== "forest") return null;

  return (
    <motion.div
      className="absolute top-8 left-8 z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <button
        className="rounded-xl border border-stone-400/30 bg-stone-700/30 px-5 py-3 text-stone-100 backdrop-blur-md hover:bg-stone-600/40"
        onClick={() => setSection("baseCamp")}
      >
        ← Return to Base Camp
      </button>
    </motion.div>
  );
};
