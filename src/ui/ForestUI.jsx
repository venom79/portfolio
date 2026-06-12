import { motion } from "framer-motion";
import { useCameraStore } from "../store/cameraStore";

export const ForestUI = () => {
  const section = useCameraStore((state) => state.section);
  const setSection = useCameraStore((state) => state.setSection);

  if (section !== "forest") return null;

  return (
    <motion.div
      className="absolute left-8 top-8 z-50 max-w-sm"
      initial={{
        opacity: 0,
        y: -20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
        delay: 3, // adjust to match camera travel time
        ease: "easeOut",
      }}
    >
      <div
        className="
          rounded-2xl
          border
          border-white/10
          bg-black/20
          p-5
          text-white
          backdrop-blur-md
        "
      >
        <p className="mb-2 text-sm uppercase tracking-[0.3em] text-amber-300">
          Skill Woods
        </p>

        <h2 className="mb-4 text-3xl font-bold">Choose Your Trail</h2>

        <p className="mb-4 text-white/80 leading-relaxed">
          Three paths lie ahead. Which one will you follow?
        </p>

        <div className="space-y-2 text-sm text-white/70">
          <p>🪓 Skills Trail → Technologies & Tools</p>
          <p>📜 Experience Trail → Journey & Growth</p>
          <p>🏕 Projects Trail → Things I've Built</p>
        </div>
      </div>
    </motion.div>
  );
};
