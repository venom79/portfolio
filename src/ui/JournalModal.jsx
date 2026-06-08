import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "../store/uiStore";

const JournalModal = ({ isOpen, onClose }) => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);
  return (
    <AnimatePresence>
      {activeBoard === "journal" && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            initial={{
              scale: 0.8,
              rotate: -4,
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
              h-[70vh]
              w-[55vw]
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
                cursor-pointer
                z-20
                top-6
                rounded-lg
                bg-[#6b4423]
                px-4
                py-2
                text-white
              "
            >
              Close
            </button>

            {/* Content */}

            <div className="relative z-10">
              <h1
                className="mb-8 text-5xl text-[#4a2810]"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                Explorer's Journal
              </h1>

              <div className="space-y-6 text-[#3d2914]">
                <p className="italic">The next pages are still blank...</p>

                <p>
                  The explorer is currently gathering stories, discoveries, and
                  lessons from the trail.
                </p>

                <p>Future journal entries may include:</p>

                <ul className="list-inside list-disc space-y-2">
                  <li>Building a Real Estate Platform</li>
                  <li>Learning GraphQL</li>
                  <li>Creating this 3D Portfolio</li>
                  <li>Freelance Development Lessons</li>
                </ul>

                <div className="mt-12 border-t border-[#8b5a2b] pt-6">
                  <p className="text-sm italic text-[#7c5330]">
                    Journal Entry #0
                  </p>

                  <p className="mt-2">
                    Weather: Clear
                    <br />
                    Supplies: Adequate
                    <br />
                    Blog Posts: 0
                    <br />
                    Morale: High
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JournalModal;
