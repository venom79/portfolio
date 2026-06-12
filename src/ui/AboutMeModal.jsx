import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "../store/uiStore";

const AboutMeModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);

  return (
    <AnimatePresence>
      {activeBoard === "about" && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.8,
              rotate: 2,
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
              onClick={closeBoard}
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
                Meet The Explorer
              </h1>

              <p className="mb-10 italic text-[#7c5330]">
                Every journey starts with curiosity.
              </p>

              {/* Photo + Intro */}

              <div className="mb-12 grid grid-cols-1 gap-8 md:grid-cols-[280px_1fr]">
                {/* Photo */}

                <div className="flex justify-center">
                  <div
                    className="
                      overflow-hidden
                      rounded-2xl
                      border-4
                      border-[#8b5a2b]
                      bg-white/30
                      shadow-lg
                    "
                  >
                    <img
                      src="/images/me.png"
                      alt="Aditya Gaonkar"
                      className="
                        h-full
                        w-full
                        object-cover
                      "
                    />
                  </div>
                </div>

                {/* About */}

                <div className="space-y-6 text-lg leading-relaxed text-[#3d2914]">
                  <p>
                    Hi, I'm Aditya, a software developer who enjoys building
                    things and understanding how they work under the hood.
                  </p>

                  <p>
                    My interests currently revolve around backend engineering,
                    GraphQL, databases, system design and artificial
                    intelligence.
                  </p>

                  <p>
                    I enjoy taking apart complex systems, learning how they
                    function, and then building my own versions from scratch.
                  </p>

                  <p>
                    This portfolio itself is an example of that mindset. Instead
                    of creating a traditional website, I wanted visitors to
                    explore my work through a small interactive world.
                  </p>

                  <p>
                    I'm currently focused on improving my backend development
                    skills, learning AI/ML, and building projects that solve
                    real problems.
                  </p>
                </div>
              </div>

              {/* Explorer Stats */}

              <div className="mt-12 rounded-xl bg-white/30 p-6">
                <h2 className="mb-4 text-2xl font-bold text-[#4a2810]">
                  Explorer Stats
                </h2>

                <div className="grid gap-4 text-[#3d2914] md:grid-cols-2">
                  <div>
                    <strong>Role</strong>
                    <p>Software Developer</p>
                  </div>

                  <div>
                    <strong>Currently Learning</strong>
                    <p>AI & Machine Learning</p>
                  </div>

                  <div>
                    <strong>Favorite Area</strong>
                    <p>Backend Engineering</p>
                  </div>

                  <div>
                    <strong>Current Project</strong>
                    <p>Real Estate Platform</p>
                  </div>

                  <div>
                    <strong>Tech I Enjoy</strong>
                    <p>GraphQL & PostgreSQL</p>
                  </div>

                  <div>
                    <strong>Side Quest</strong>
                    <p>Building Interactive Experiences</p>
                  </div>
                </div>
              </div>

              {/* Beyond Coding */}

              <div className="mt-10 rounded-xl bg-white/20 p-6">
                <h2 className="mb-4 text-2xl font-bold text-[#4a2810]">
                  Beyond Coding
                </h2>

                <p className="text-[#3d2914] leading-relaxed">
                  Outside of software development, I enjoy trekking and spending
                  time in the mountains. There's something rewarding about
                  climbing a trail, reaching a summit, and taking in the view
                  after a long journey.
                </p>

                <p className="mt-4 text-[#3d2914] leading-relaxed">
                  I naturally gravitate toward mountains over beaches, which is
                  one of the reasons this portfolio is built around an
                  expedition theme. The idea of constantly exploring, learning,
                  and climbing higher resonates with how I approach both life
                  and software development.
                </p>

                <p className="mt-4 text-[#3d2914] leading-relaxed">
                  And of course, whenever I'm back at base camp, you'll probably
                  find me spending time with my ginger cat.
                </p>
              </div>

              {/* Quote */}

              <div className="mt-10 border-t border-[#8b5a2b] pt-6">
                <p className="text-center text-xl italic text-[#7c5330]">
                  "Still climbing."
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AboutMeModal;
