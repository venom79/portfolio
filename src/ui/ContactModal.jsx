import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { useUIStore } from "../store/uiStore";

const ContactModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);

  return (
    <AnimatePresence>
      {activeBoard === "laptop" && (
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
                top-6
                z-20
                cursor-pointer
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
                className="mb-3 text-5xl text-[#4a2810]"
                style={{
                  fontFamily: "Playfair Display",
                }}
              >
                Explorer's Communication Log
              </h1>

              <p className="mb-8 text-[#7c5330] italic">
                Establish communication with the explorer.
              </p>

              <div className="mt-12 flex justify-center gap-10">
                <a
                  href="https://github.com/venom79"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:scale-110"
                >
                  <FaGithub size={60} className="text-[#4a2810]" />
                </a>

                <a
                  href="https://www.linkedin.com/in/adityagaonkar7/"
                  target="_blank"
                  rel="noreferrer"
                  className="transition hover:scale-110"
                >
                  <FaLinkedin size={60} className="text-[#4a2810]" />
                </a>

                <button
                  onClick={() => {
                    window.open(
                      "https://mail.google.com/mail/?view=cm&fs=1&to=aditya.gaonkar1907@email.com",
                      "_blank",
                    );
                  }}
                  className="transition hover:scale-110 cursor-pointer"
                >
                  <FaEnvelope size={60} className="text-[#4a2810]" />
                </button>
              </div>
              <p className="mt-8 text-center text-[#7c5330] italic">
                Choose a communication channel.
              </p>

              <div className="mt-10 border-t border-[#8b5a2b] pt-6">
                <div className="flex justify-center">
                  <a
                    href="/AdityaGaonkarResume.pdf"
                    download
                    className="
        flex
        flex-col
        items-center
        gap-2
        transition
        hover:scale-110
      "
                  >
                    <FaFilePdf size={60} className="text-[#4a2810]" />

                    <span className="text-sm font-medium text-[#7c5330]">
                      Resume
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
