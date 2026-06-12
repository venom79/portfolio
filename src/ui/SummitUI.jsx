import { motion } from "framer-motion";
import { useCameraStore } from "../store/cameraStore";

export const SummitUI = () => {
  const section = useCameraStore((state) => state.section);

  if (section !== "summit") return null;

  return (
    <motion.div
      className="
        absolute
        left-8
        top-8
        z-50
        max-w-sm
        rounded-2xl
        border
        border-orange-300/20
        bg-gradient-to-b
        from-[#2b211a]/80
        to-[#151515]/80
        p-6
        text-white
        backdrop-blur-xl
        shadow-[0_0_40px_rgba(255,170,80,0.15)]
      "
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.8,
      }}
    >
      <p className="mb-2 text-xs uppercase tracking-[0.25em] text-orange-200">
        The Summit
      </p>

      <h2 className="mb-3 text-4xl font-bold">Current Position</h2>

      <p className="mb-5 text-sm text-white/70">
        Where the expedition stands today.
      </p>

      <div className="space-y-2 text-white/90">
        <p>Backend Engineering</p>
        <p>System Design</p>
        <p>AI & Machine Learning</p>
      </div>

      <div className="mt-5 border-t border-white/10 pt-4">
        <p className="text-sm text-orange-200">Next Peak</p>

        <p className="font-medium">
          Building larger systems & solving harder problems.
        </p>
      </div>
    </motion.div>
  );
};
