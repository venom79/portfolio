import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useUIStore } from "../store/uiStore";

const milestones = [
  {
    id: "hackathon",
    icon: "🏆",
    title: "Top 10 Hackathon Finish",
    date: "2026",

    image: "/images/hackathon.jpg",

    shortDescription: "Placed 9th among 100 participating teams.",

    description:
      "One of my first experiences building under pressure, collaborating with a team, and presenting a solution within a strict deadline. It taught me teamwork, rapid problem solving and pitching ideas effectively.",

    highlights: [
      "9th Place",
      "100 Teams Participated",
      "Team Collaboration",
      "Project Presentation",
    ],
  },

  {
    id: "freelance",
    icon: "💼",
    title: "First Freelance Project",
    date: "2026",

    image: "/images/freelance.jpg",

    shortDescription: "Delivered software for a real client.",

    description:
      "My first experience working directly with a client. Learned communication, requirements gathering, planning and delivering a real-world project.",

    highlights: [
      "Client Communication",
      "Requirements Gathering",
      "Project Delivery",
    ],
  },

  {
    id: "real-estate",
    icon: "🏠",
    title: "Real Estate Platform",
    date: "2026",

    image: "/images/real-estate.jpg",

    shortDescription: "Largest project built so far.",

    description:
      "A full stack real estate platform featuring GraphQL APIs, PostgreSQL, Prisma ORM, authentication, reviews and property management.",

    highlights: ["React", "GraphQL", "Prisma", "PostgreSQL", "Authentication"],
  },

  {
    id: "portfolio",
    icon: "🏕",
    title: "3D Portfolio",
    date: "2026",

    image: "/images/portfolio.jpg",

    shortDescription: "Interactive expedition-themed portfolio.",

    description:
      "Built with Three.js, React Three Fiber, GSAP and Framer Motion to create an explorable world rather than a traditional website.",

    highlights: ["Three.js", "React Three Fiber", "GSAP", "Framer Motion"],
  },
];

const MilestonesList = ({ onSelect }) => {
  return (
    <div className="grid gap-6">
      {milestones.map((milestone) => (
        <button
          key={milestone.id}
          onClick={() => onSelect(milestone)}
          className="
            overflow-hidden
            rounded-xl
            bg-white/30
            text-left
            transition
            hover:bg-white/50
            hover:scale-[1.01]
          "
        >
          <img
            src={milestone.image}
            alt={milestone.title}
            className="
              h-56
              w-full
              object-cover
            "
          />

          <div className="p-5">
            <p className="text-sm text-[#7c5330]">{milestone.date}</p>

            <h3 className="mt-1 text-2xl font-bold text-[#4a2810]">
              {milestone.icon} {milestone.title}
            </h3>

            <p className="mt-2 text-[#3d2914]">{milestone.shortDescription}</p>
          </div>
        </button>
      ))}
    </div>
  );
};

const MilestoneDetails = ({ milestone, onBack }) => {
  return (
    <div>
      {/* Breadcrumb */}

      <div className="mb-6 flex items-center gap-3">
        <button
          onClick={onBack}
          className="
            rounded-lg
            bg-[#6b4423]
            px-4
            py-2
            text-white
            transition
            hover:bg-[#7a5130]
          "
        >
          ← Back
        </button>

        <span className="text-[#7c5330]">
          Trail Markers &gt; {milestone.title}
        </span>
      </div>

      {/* Cover */}

      <img
        src={milestone.image}
        alt={milestone.title}
        className="
          mb-8
          h-80
          w-full
          rounded-xl
          object-cover
        "
      />

      {/* Title */}

      <h2 className="mb-2 text-4xl font-bold text-[#4a2810]">
        {milestone.icon} {milestone.title}
      </h2>

      <p className="mb-6 text-[#7c5330]">{milestone.date}</p>

      {/* Description */}

      <p className="mb-10 text-lg leading-relaxed text-[#3d2914]">
        {milestone.description}
      </p>

      {/* Highlights */}

      <h3 className="mb-4 text-2xl font-bold text-[#4a2810]">Highlights</h3>

      <div className="flex flex-wrap gap-3">
        {milestone.highlights.map((highlight) => (
          <span
            key={highlight}
            className="
              rounded-full
              bg-[#8b5a2b]/10
              px-4
              py-2
              text-[#4a2810]
            "
          >
            {highlight}
          </span>
        ))}
      </div>
    </div>
  );
};

const MilestonesModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);

  const [selectedMilestone, setSelectedMilestone] = useState(null);

  return (
    <AnimatePresence>
      {activeBoard === "milestones" && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.8,
              rotate: -2,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              rotate: 0,
              opacity: 1,
            }}
            exit={{
              scale: 0.8,
              opacity: 0,
            }}
            transition={{
              duration: 0.4,
            }}
            className="
              relative
              h-[80vh]
              w-[90vw]
              max-w-6xl
              overflow-hidden
              rounded-2xl
              border-[10px]
              border-[#6b4423]
              bg-[#f5e6c8]
              p-10
              shadow-2xl
            "
          >
            {/* Paper Texture */}

            <div
              className="absolute inset-0 opacity-10"
              style={{
                background:
                  "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(0,0,0,0.05) 4px)",
              }}
            />

            {/* Close */}

            <button
              onClick={() => {
                closeBoard();
                setSelectedMilestone(null);
              }}
              className="
                absolute
                right-6
                top-6
                z-20
                rounded-lg
                bg-[#6b4423]
                px-4
                py-2
                text-white
                transition
                hover:bg-[#7a5130]
              "
            >
              Close
            </button>

            <div className="relative z-10 h-full overflow-y-auto pr-2">
              <h1
                className="mb-3 text-5xl text-[#4a2810]"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                Trail Markers
              </h1>

              <p className="mb-10 italic text-[#7c5330]">
                Important moments from the expedition so far.
              </p>

              {selectedMilestone ? (
                <MilestoneDetails
                  milestone={selectedMilestone}
                  onBack={() => setSelectedMilestone(null)}
                />
              ) : (
                <MilestonesList onSelect={setSelectedMilestone} />
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MilestonesModal;
