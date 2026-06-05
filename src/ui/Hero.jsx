import { motion } from "framer-motion";

const Hero = () => {
  return (
    <motion.div
      className="absolute left-12 top-1/2 z-50 max-w-xl -translate-y-1/2 text-stone-100 md:left-24"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 1.2,
        delay: 3.5,
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
        <button className="rounded-xl border border-stone-400/30 bg-stone-700/30 px-6 py-3 font-medium backdrop-blur-md transition-all hover:bg-stone-600/40">
          Start Expedition →
        </button>

        <button className="rounded-xl border border-stone-400/20 px-6 py-3 font-medium transition-all hover:bg-white/10">
          View Projects
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
