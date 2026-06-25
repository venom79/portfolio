import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "../store/uiStore";

const STATS = [
  { label: "ROLE", value: "Software Developer" },
  { label: "LEARNING", value: "AI & Machine Learning" },
  { label: "STRONGHOLD", value: "Backend Engineering" },
  { label: "ACTIVE MISSION", value: "Real Estate Platform" },
  { label: "PREFERRED ARMS", value: "GraphQL & PostgreSQL" },
  { label: "SIDE QUEST", value: "Interactive Experiences" },
];

const AboutMeModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);

  return (
    <AnimatePresence>
      {activeBoard === "about" && (
        <motion.div
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "16px",
            background: "rgba(10, 8, 4, 0.82)",
            backdropFilter: "blur(3px)",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={(e) => e.target === e.currentTarget && closeBoard()}
        >
          <motion.div
            initial={{ scale: 0.88, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.9, y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            style={{
              width: "min(900px, 100%)",
              maxHeight: "90vh",
              display: "flex",
              flexDirection: "column",
              background: "#1c1710",
              border: "2px solid #5a3e1b",
              boxShadow:
                "0 0 0 1px #2e1f0a, 0 24px 60px rgba(0,0,0,0.75), inset 0 1px 0 rgba(200,134,10,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Grain overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.06) 2px, rgba(0,0,0,0.06) 3px),
                  repeating-linear-gradient(90deg, transparent, transparent 4px, rgba(255,255,255,0.015) 4px, rgba(255,255,255,0.015) 5px)
                `,
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Top bar */}
            <div
              style={{
                background:
                  "linear-gradient(90deg, #c8860a 0%, #a06808 60%, #7a4e05 100%)",
                padding: "8px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexShrink: 0,
                position: "relative",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(10px, 1.8vw, 13px)",
                  letterSpacing: "0.22em",
                  color: "#1a1208",
                }}
              >
                ◈ OPERATIVE PROFILE — CLASSIFIED
              </span>
              <button
                onClick={closeBoard}
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "13px",
                  letterSpacing: "0.15em",
                  color: "#1a1208",
                  background: "rgba(0,0,0,0.2)",
                  border: "1px solid rgba(0,0,0,0.3)",
                  padding: "3px 14px",
                  cursor: "pointer",
                }}
              >
                ✕ CLOSE
              </button>
            </div>

            {/* Scrollable body */}
            <div
              style={{
                overflowY: "auto",
                flex: 1,
                padding: "clamp(20px, 4vw, 36px)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* ── Header ── */}
              <div
                style={{
                  borderLeft: "3px solid #c8860a",
                  paddingLeft: "16px",
                  marginBottom: "32px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(10px, 1.6vw, 12px)",
                    letterSpacing: "0.3em",
                    color: "#c8860a",
                    marginBottom: "6px",
                  }}
                >
                  MEET THE EXPLORER
                </div>
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(32px, 6vw, 56px)",
                    letterSpacing: "0.06em",
                    color: "#e8d5a3",
                    lineHeight: 1,
                    margin: "0 0 10px",
                  }}
                >
                  ADITYA GAONKAR
                </h1>
                <p
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: "clamp(12px, 1.6vw, 14px)",
                    color: "#8a7055",
                    margin: 0,
                    fontStyle: "italic",
                  }}
                >
                  Every journey starts with curiosity.
                </p>
              </div>

              {/* ── Photo + Bio grid ── */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                  gap: "clamp(20px, 4vw, 36px)",
                  marginBottom: "36px",
                  alignItems: "start",
                }}
              >
                {/* Photo */}
                <div style={{ display: "flex", justifyContent: "center" }}>
                  <div
                    style={{
                      width: "100%",
                      maxWidth: "260px",
                      border: "2px solid #5a3e1b",
                      boxShadow: "4px 4px 0 #2e1f0a, 0 0 0 1px #2e1f0a",
                      overflow: "hidden",
                      background: "#12100a",
                      flexShrink: 0,
                    }}
                  >
                    <img
                      src="/images/me.png"
                      alt="Aditya Gaonkar"
                      style={{
                        width: "100%",
                        display: "block",
                        filter: "sepia(20%) contrast(1.05)",
                      }}
                    />
                    {/* Caption strip */}
                    <div
                      style={{
                        padding: "8px 12px",
                        borderTop: "1px solid #3a2a14",
                        fontFamily: "'Special Elite', monospace",
                        fontSize: "10px",
                        color: "#5a4020",
                        letterSpacing: "0.1em",
                      }}
                    >
                      ◉ OPERATIVE · ADITYA G. · BASE CAMP
                    </div>
                  </div>
                </div>

                {/* Bio paragraphs */}
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "14px",
                  }}
                >
                  {[
                    "Hi, I'm Aditya — a software developer who enjoys building things and understanding how they work under the hood.",
                    "My interests revolve around backend engineering, GraphQL, databases, system design and artificial intelligence.",
                    "I enjoy taking apart complex systems, learning how they function, and then building my own versions from scratch.",
                    "This portfolio itself is an example of that mindset. Instead of a traditional website, I wanted visitors to explore my work through a small interactive world.",
                    "I'm currently focused on sharpening my backend skills, learning AI/ML, and shipping projects that solve real problems.",
                  ].map((para, i) => (
                    <p
                      key={i}
                      style={{
                        fontFamily: "'Special Elite', monospace",
                        fontSize: "clamp(12px, 1.6vw, 14px)",
                        color: "#9a7a50",
                        lineHeight: 1.8,
                        margin: 0,
                      }}
                    >
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* ── Divider ── */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", background: "#3a2a14" }}
                />
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.28em",
                    color: "#5a4020",
                  }}
                >
                  OPERATIVE STATS
                </span>
                <div
                  style={{ flex: 1, height: "1px", background: "#3a2a14" }}
                />
              </div>

              {/* ── Stats grid ── */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "1px",
                  background: "#2e1f0a",
                  border: "1px solid #2e1f0a",
                  marginBottom: "36px",
                }}
              >
                {STATS.map(({ label, value }) => (
                  <div
                    key={label}
                    style={{
                      background: "#12100a",
                      padding: "14px 16px",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "10px",
                        letterSpacing: "0.28em",
                        color: "#c8860a",
                        marginBottom: "4px",
                      }}
                    >
                      {label}
                    </div>
                    <div
                      style={{
                        fontFamily: "'Special Elite', monospace",
                        fontSize: "clamp(12px, 1.6vw, 13px)",
                        color: "#e8d5a3",
                      }}
                    >
                      {value}
                    </div>
                  </div>
                ))}
              </div>

              {/* ── Divider ── */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", background: "#3a2a14" }}
                />
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.28em",
                    color: "#5a4020",
                  }}
                >
                  BEYOND THE CODE
                </span>
                <div
                  style={{ flex: 1, height: "1px", background: "#3a2a14" }}
                />
              </div>

              {/* ── Beyond coding ── */}
              <div
                style={{
                  background: "#12100a",
                  border: "1px solid #3a2a14",
                  padding: "clamp(16px, 3vw, 24px)",
                  marginBottom: "32px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "14px",
                }}
              >
                {[
                  "Outside of software, I enjoy trekking and spending time in the mountains. There's something rewarding about climbing a trail, reaching a summit, and taking in the view after a long journey.",
                  "I naturally gravitate toward mountains over beaches — which is one of the reasons this portfolio is built around an expedition theme. The idea of constantly exploring, learning, and climbing higher resonates with how I approach both life and software.",
                  "And of course, whenever I'm back at base camp, you'll probably find me spending time with my cat.",
                ].map((para, i) => (
                  <p
                    key={i}
                    style={{
                      fontFamily: "'Special Elite', monospace",
                      fontSize: "clamp(12px, 1.6vw, 13px)",
                      color: "#7a5c35",
                      lineHeight: 1.8,
                      margin: 0,
                    }}
                  >
                    {para}
                  </p>
                ))}
              </div>

              {/* ── Quote ── */}
              <div
                style={{
                  borderTop: "1px solid #3a2a14",
                  paddingTop: "20px",
                  textAlign: "center",
                }}
              >
                <p
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(20px, 3.5vw, 28px)",
                    letterSpacing: "0.2em",
                    color: "#c8860a",
                    margin: 0,
                  }}
                >
                  "STILL CLIMBING."
                </p>
                <p
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: "11px",
                    color: "#5a4020",
                    marginTop: "6px",
                    letterSpacing: "0.1em",
                  }}
                >
                  — ADITYA GAONKAR · FIELD LOG
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
