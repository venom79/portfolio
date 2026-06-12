import { useProgress } from "@react-three/drei";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import LottieModule from "lottie-react";

import { useCameraStore } from "../store/cameraStore";
import treeAnimation from "../assets/tree-loader.json";

export default function Loader() {
  const { progress } = useProgress();

  const setIsLoaded = useCameraStore((s) => s.setIsLoaded);

  const [visible, setVisible] = useState(true);
  const [fakeProgress, setFakeProgress] = useState(0);
  const [minimumTimePassed, setMinimumTimePassed] = useState(false);

  const Lottie = LottieModule.default;

  useEffect(() => {
    const timer = setTimeout(() => {
      setMinimumTimePassed(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setFakeProgress((prev) => {
        if (prev >= 95) return prev;

        return Math.min(prev + Math.random() * 6, 95);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (progress >= 100 && minimumTimePassed) {
      setFakeProgress(100);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 1200);

      return () => clearTimeout(timer);
    }
  }, [progress, minimumTimePassed]);

  return (
    <AnimatePresence
      onExitComplete={() => {
        setIsLoaded(true);
      }}
    >
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            scale: 1.03,
          }}
          transition={{
            duration: 1.2,
          }}
          className="
            fixed
            inset-0
            z-[9999]
            flex
            flex-col
            items-center
            justify-center
            overflow-hidden
            bg-gradient-to-b
            from-[#20311f]
            via-[#182631]
            to-[#0b1120]
            text-white
          "
        >
          {/* Background glow */}
          <div
            className="
              absolute
              h-[500px]
              w-[500px]
              rounded-full
              bg-orange-500/10
              blur-[140px]
            "
          />

          {/* Tree Animation */}
          <motion.div
            initial={{
              scale: 0.9,
              opacity: 0,
            }}
            animate={{
              scale: 1,
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="mb-6"
          >
            <Lottie animationData={treeAnimation} loop className="h-56 w-56" />
          </motion.div>

          {/* Title */}
          <h1 className="text-5xl font-bold">Expedition</h1>

          <p className="mt-2 mb-10 text-white/70">
            Every summit begins with a seed
          </p>

          {/* Progress Bar */}
          <div className="w-[360px] max-w-[85vw]">
            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="
                  h-full
                  rounded-full
                  bg-gradient-to-r
                  from-orange-500
                  via-amber-300
                  to-yellow-200
                "
                animate={{
                  width: `${fakeProgress}%`,
                }}
                transition={{
                  ease: "easeOut",
                }}
              />
            </div>

            <div className="mt-3 flex justify-between text-sm text-white/80">
              <span>Preparing expedition...</span>

              <span>{Math.floor(fakeProgress)}%</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
