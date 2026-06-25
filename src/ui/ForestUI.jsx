import { motion } from "framer-motion";
import { useCameraStore } from "../store/cameraStore";

export const ForestUI = () => {
  const section = useCameraStore((state) => state.section);

  if (section !== "forest") return null;

  return (
    <motion.div
      className="
        absolute
        top-4
        left-4
        z-50

        w-[88vw]
        max-w-[320px]

        sm:top-6
        sm:left-6
        sm:max-w-[380px]

        lg:top-8
        lg:left-8
        lg:max-w-[500px]
      "
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
        delay: 3,
        ease: "easeOut",
      }}
    >
      <div
        className="
          rounded-3xl
          border
          border-white/10

          bg-black/20

          p-4

          text-white
          backdrop-blur-md

          sm:p-6

          lg:p-7
        "
      >
        {/* Heading */}

        <p
          className="
            mb-2

            text-[10px]
            uppercase
            tracking-[0.35em]
            text-amber-300

            sm:text-xs
          "
        >
          SKILL WOODS
        </p>

        <h2
          className="
            mb-4

            text-2xl
            font-bold
            leading-tight

            sm:text-4xl
          "
        >
          Choose Your Trail
        </h2>

        {/* Desktop Description */}

        <p
          className="
            hidden
            mb-5
            text-base
            leading-relaxed
            text-white/80

            sm:block
          "
        >
          Three paths lie ahead. Which one will you follow?
        </p>

        {/* Trails */}

        <div
          className="
            space-y-3

            text-sm
            text-white/80

            sm:text-base
          "
        >
          {/* Desktop */}

          <div className="hidden space-y-3 sm:block">
            <p>🪓 Skills Trail → Technologies & Tools</p>
            <p>📜 Experience Trail → Journey & Growth</p>
            <p>🏕 Projects Trail → Things I've Built</p>
          </div>

          {/* Mobile */}

          <div className="space-y-2 sm:hidden">
            <p>🪓 Skills Trail</p>
            <p>📜 Experience Trail</p>
            <p>🏕 Projects Trail</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
