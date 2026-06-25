import { motion } from "framer-motion";
import { useCameraStore } from "../store/cameraStore";

export const SummitUI = () => {
  const section = useCameraStore((state) => state.section);

  if (section !== "summit") return null;

  return (
    <motion.div
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
      className="
        absolute
        top-3
        left-3
        z-50

        w-[82vw]
        max-w-[300px]

        rounded-3xl
        border
        border-white/10

        bg-black/20

        p-4

        text-white

        backdrop-blur-md

        shadow-[0_10px_40px_rgba(0,0,0,0.25)]

        sm:top-6
        sm:left-6
        sm:w-[85vw]
        sm:max-w-[380px]
        sm:p-6

        lg:top-8
        lg:left-8
        lg:max-w-[420px]
        lg:p-7

        lg:border-orange-300/20
        lg:bg-gradient-to-b
        lg:from-[#2b211a]/85
        lg:to-[#171717]/85
        lg:backdrop-blur-xl
        lg:shadow-[0_0_40px_rgba(255,170,80,0.15)]
      "
    >
      {/* Heading */}

      <p
        className="
          mb-2
          text-[10px]
          uppercase
          tracking-[0.35em]
          text-orange-300

          sm:text-xs
        "
      >
        THE SUMMIT
      </p>

      <h2
        className="
          mb-4
          text-2xl
          font-bold
          leading-tight

          sm:text-4xl

          lg:text-5xl
        "
      >
        Current Position
      </h2>

      {/* Description */}

      <p
        className="
          hidden
          mb-5
          text-sm
          leading-relaxed
          text-white/80

          sm:block
        "
      >
        Where the expedition stands today.
      </p>

      {/* Skills */}

      <div
        className="
          space-y-2

          text-base
          text-white/90

          sm:space-y-3
          sm:text-lg

          lg:text-xl
        "
      >
        <p>Backend Engineering</p>

        <p>System Design</p>

        <p className="hidden sm:block">AI & Machine Learning</p>
      </div>

      {/* Divider */}

      <div
        className="
          mt-4
          border-t
          border-white/10
          pt-3

          sm:mt-6
          sm:pt-5
        "
      >
        <p
          className="
            mb-1
            text-xs
            text-orange-300

            sm:text-sm
          "
        >
          Next Peak
        </p>

        {/* Mobile */}

        <p
          className="
            text-base
            font-semibold

            sm:hidden
          "
        >
          Building larger systems.
        </p>

        {/* Desktop */}

        <p
          className="
            hidden
            font-semibold
            leading-relaxed

            sm:block
            sm:text-lg
          "
        >
          Building larger systems &
          <br />
          solving harder problems.
        </p>
      </div>
    </motion.div>
  );
};
