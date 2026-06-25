import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useCameraStore } from "../store/cameraStore";

const destinations = [
  {
    id: "summit",
    label: "SUMMIT",
    image: "/images/summit-preview.png",
    clip: "polygon(50% 50%, 0% 0%, 100% 0%)",
  },

  {
    id: "baseCamp",
    label: "BASE",
    image: "/images/basecamp-preview.png",
    clip: "polygon(50% 50%, 0% 0%, 0% 100%)",
  },

  {
    id: "forest",
    label: "FOREST",
    image: "/images/forest-preview.png",
    clip: "polygon(50% 50%, 100% 0%, 100% 100%)",
  },
];

const sectionNames = {
  baseCamp: "BASE",
  forest: "FOREST",
  summit: "SUMMIT",
};

export default function ExpeditionNavigator() {
  const section = useCameraStore((state) => state.section);
  const setSection = useCameraStore((state) => state.setSection);

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  if (isMobile) {
    return (
      <>
        <button
          onClick={() => setOpen((prev) => !prev)}
          className="
            fixed
            bottom-4
            right-4
            z-[500]
            flex
            h-14
            w-14
            items-center
            justify-center
            rounded-full
            border-2
            border-[#6b4423]
            bg-[#f5e6c8]
            text-2xl
            shadow-xl
          "
        >
          🧭
        </button>

        <AnimatePresence>
          {open && (
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.8,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                scale: 0.8,
              }}
              className="
                fixed
                bottom-20
                right-4
                z-[500]
                h-[135px]
                w-[135px]

                sm:h-[150px]
                sm:w-[150px]

                md:h-[190px]
                md:w-[190px]
              "
            >
              <Compass
                section={section}
                setSection={setSection}
                onNavigate={() => setOpen(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="
        fixed
        bottom-6
        right-6
        z-[500]
        h-[190px]
        w-[190px]
      "
    >
      <Compass section={section} setSection={setSection} />
    </motion.div>
  );
}

function Compass({ section, setSection, onNavigate }) {
  return (
    <div
      className="
        relative
        h-full
        w-full
        overflow-hidden
        rounded-full
        border-[3px]
        sm:border-4
        md:border-[5px]
        border-[#6b4423]
        shadow-2xl
      "
    >
      <Slice
        destination={destinations[0]}
        active={section === "summit" || section === "climb"}
        onClick={() => {
          setSection("climb");
          onNavigate?.();
        }}
      />

      <Slice
        destination={destinations[1]}
        active={section === "baseCamp"}
        onClick={() => {
          setSection("baseCamp");
          onNavigate?.();
        }}
      />

      <Slice
        destination={destinations[2]}
        active={section === "forest"}
        onClick={() => {
          setSection("forest");
          onNavigate?.();
        }}
      />

      <div
        className="
          absolute
          bottom-2
          sm:bottom-3
          md:bottom-4
          text-[7px]
          sm:text-[8px]
          md:text-[9px]
          left-1/2
          -translate-x-1/2
          font-bold
          uppercase
          tracking-wider
          text-[#ffbc85]
        "
      >
        Expedition
      </div>

      <div
        className="
          absolute
          left-1/2
          top-1/2
          z-20
          flex
          h-11
          w-11
          sm:h-12
          sm:w-12
          md:h-14
          md:w-14
          -translate-x-1/2
          -translate-y-1/2
          flex-col
          items-center
          justify-center
          rounded-full
          border-2
          border-[#6b4423]
          bg-[#f5e6c8]
          text-center
          shadow-xl
        "
      >
        <div className="text-xs sm:text-sm md:text-base">🧭</div>

        <div className="text-[8px] sm:text-[9px] md:text-[10px] font-bold text-[#4a2810]">
          {sectionNames[section]}
        </div>
      </div>
    </div>
  );
}

function Slice({ destination, active, onClick }) {
  const labelPosition = {
    summit: "top-3 left-1/2 -translate-x-1/2 md:top-6",

    baseCamp: "bottom-14 left-2 md:bottom-20 md:left-4",

    forest: "bottom-14 right-2 md:bottom-20 md:right-3",
  };

  return (
    <button
      onClick={onClick}
      className={`
        absolute
        inset-0
        overflow-hidden
        transition-all
        duration-300
        ${
          active
            ? "brightness-125 scale-[1.05] saturate-150"
            : "hover:brightness-110"
        }
      `}
      style={{
        clipPath: destination.clip,
        boxShadow: active ? "inset 0 0 30px rgba(255,215,0,0.6)" : "none",
      }}
    >
      <img
        src={destination.image}
        alt={destination.label}
        className="
          h-full
          w-full
          object-cover
        "
      />

      <div
        className={`
          absolute
          inset-0
          ${active ? "bg-yellow-300/20" : "bg-black/20"}
        `}
      />

      {active && (
        <div
          className="
            absolute
            inset-0
            border-[3px]
            sm:border-4
            md:border-[6px]
            border-yellow-300
          "
          style={{
            clipPath: destination.clip,
          }}
        />
      )}

      <div
        className={`
          absolute
          z-30
          ${labelPosition[destination.id]}
          bg-black/70
          rounded
          px-1
          py-0.5
          sm:px-1.5
          sm:py-0.5
          md:px-2
          md:py-1
          text-[7px]
          sm:text-[8px]
          md:text-[9px]
          font-semibold
          text-white
          backdrop-blur-sm
        `}
      >
        {destination.label}
      </div>
    </button>
  );
}
