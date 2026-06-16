import { motion } from "framer-motion";
import { useCameraStore } from "../store/cameraStore";

const Hero = () => {
  const section = useCameraStore((state) => state.section);
  const setSection = useCameraStore((state) => state.setSection);

  return (
    <motion.div
      className={`
        pointer-events-none
        absolute
        top-[18%]
        left-0
        z-50
        w-full
        px-5
        text-stone-100

        sm:bottom-[20%]
        sm:px-8

        md:left-16
        md:top-1/2
        md:w-auto
        md:max-w-xl
        md:-translate-y-1/2
        md:px-0

        lg:left-24

        ${section !== "baseCamp" ? "opacity-0" : ""}
      `}
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
      <p className="mb-2 text-xs uppercase tracking-[0.3em] text-stone-300 sm:mb-3 sm:text-sm sm:tracking-[0.4em]">
        Base Camp
      </p>

      <h1
        className="
          mb-3
          text-[2.25rem]
          font-bold
          leading-none

          sm:text-5xl

          md:mb-6
          md:text-7xl

          lg:text-8xl
        "
        style={{ fontFamily: "Playfair Display" }}
      >
        Aditya
        <br />
        Gaonkar.
      </h1>

      <p
        className="
          mb-5
          max-w-[320px]
          text-base
          leading-relaxed
          text-stone-200

          sm:max-w-sm
          sm:text-lg

          md:mb-8
          md:max-w-md
          md:text-xl
        "
      >
        Software developer exploring backend systems, AI, and everything in
        between.
      </p>

      <div className="flex justify-start">
        <button
          className="
            pointer-events-auto

            min-w-[220px]
            rounded-xl
            border
            border-stone-400/30
            bg-stone-700/30

            px-6
            py-3

            text-sm
            font-medium

            backdrop-blur-md
            transition-all
            hover:bg-stone-600/40

            sm:text-base
          "
          onClick={() => setSection("forest")}
        >
          Start Expedition →
        </button>
      </div>
    </motion.div>
  );
};

export default Hero;
