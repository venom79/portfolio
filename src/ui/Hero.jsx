import { motion } from "framer-motion";
import { useCameraStore } from "../store/cameraStore";

const Hero = () => {
  const section = useCameraStore((state) => state.section);
  const setSection = useCameraStore((state) => state.setSection);

  return (
    <motion.div
      className={`absolute left-12 top-1/2 z-50 max-w-xl -translate-y-1/2 text-stone-100 md:left-24 ${
        section !== "baseCamp" ? "pointer-events-none" : ""
      }`}
      initial={{
        opacity: 0,
        y: 30,
      }}
      animate={{
        opacity: section === "baseCamp" ? 1 : 0,
        y: section === "baseCamp" ? 0 : 20,
      }}
      transition={{
        duration: 0.8,
        delay: section === "baseCamp" ? 3.5 : 0,
      }}
    >
      <p className="mb-3 text-sm uppercase tracking-[0.4em] text-stone-300">
        Base Camp
      </p>

      <h1
        className="mb-6 text-6xl font-bold leading-none md:text-8xl"
        style={{ fontFamily: "Playfair Display" }}
      >
        Aditya
        <br />
        Gaonkar.
      </h1>

      <p className="mb-8 max-w-md text-lg leading-relaxed text-stone-200 md:text-xl">
        Software developer exploring backend systems, AI, and everything in
        between.
      </p>

      <div className="flex gap-4">
        <button
          className="rounded-xl border border-stone-400/30 bg-stone-700/30 px-6 py-3 font-medium backdrop-blur-md transition-all hover:bg-stone-600/40"
          onClick={() => setSection("forest")}
        >
          Start Expedition →
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
