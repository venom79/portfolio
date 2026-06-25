import { motion, AnimatePresence } from "framer-motion";
import { useUIStore } from "../store/uiStore";
import { FaExternalLinkAlt, FaBookOpen, FaCompass } from "react-icons/fa";

// ─── Placeholder blog entries (replace with real fetch later) ───────────────
const BLOG_POSTS = [
  {
    id: 1,
    tag: "BUILD LOG",
    date: "JUN 2026",
    title: "Building a 3D Portfolio in React Three Fiber",
    excerpt:
      "How I turned a camping scene into a fully interactive developer portfolio — from scene setup to click-triggered modals.",
  },
  {
    id: 2,
    tag: "FIELD NOTES",
    date: "MAY 2026",
    title: "GraphQL vs REST: Lessons From the Trail",
    excerpt:
      "After shipping two APIs with each approach, here's what I actually learned about query flexibility, over-fetching, and DX.",
  },
  {
    id: 3,
    tag: "DISPATCH",
    date: "APR 2026",
    title: "Freelance Development — Year One",
    excerpt:
      "Contracts, chaos, and code. A brutally honest debrief on my first year of independent software development.",
  },
];

// ─── Single post card ────────────────────────────────────────────────────────
const PostCard = ({ post, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: 0.1 + index * 0.07, duration: 0.3 }}
    style={{
      background: "#12100a",
      border: "1px solid #3a2a14",
      padding: "16px 18px",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      position: "relative",
    }}
  >
    {/* Tag + date row */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.28em",
          color: "#c8860a",
          background: "rgba(200,134,10,0.1)",
          padding: "2px 8px",
          border: "1px solid rgba(200,134,10,0.25)",
        }}
      >
        {post.tag}
      </span>
      <span
        style={{
          fontFamily: "'Special Elite', monospace",
          fontSize: "10px",
          color: "#5a4020",
          letterSpacing: "0.1em",
        }}
      >
        {post.date}
      </span>
    </div>

    {/* Title */}
    <h3
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(16px, 2.2vw, 20px)",
        letterSpacing: "0.06em",
        color: "#e8d5a3",
        margin: 0,
        lineHeight: 1.15,
      }}
    >
      {post.title}
    </h3>

    {/* Excerpt */}
    <p
      style={{
        fontFamily: "'Special Elite', monospace",
        fontSize: "clamp(11px, 1.5vw, 12px)",
        color: "#7a5c35",
        margin: 0,
        lineHeight: 1.6,
      }}
    >
      {post.excerpt}
    </p>

    {/* Read more */}
    <div style={{ marginTop: "4px" }}>
      <button
        disabled
        title="Coming soon"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "6px",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "12px",
          letterSpacing: "0.2em",
          color: "#c8860a",
          background: "transparent",
          border: "1px solid #3a2a14",
          padding: "5px 14px",
          cursor: "not-allowed",
          opacity: 0.6,
        }}
      >
        <FaBookOpen size={11} />
        READ DISPATCH
      </button>
    </div>
  </motion.div>
);

// ─── Main modal ──────────────────────────────────────────────────────────────
const JournalModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);

  return (
    <AnimatePresence>
      {activeBoard === "journal" && (
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
              width: "min(680px, 100%)",
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
                ◈ EXPEDITION DEVLOG — FIELD JOURNAL OPEN
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
                padding: "clamp(18px, 4vw, 32px)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Header */}
              <div
                style={{
                  borderLeft: "3px solid #c8860a",
                  paddingLeft: "16px",
                  marginBottom: "24px",
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
                  OPERATIVE LOGS — DISPATCHES FROM THE FIELD
                </div>
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(28px, 5.5vw, 48px)",
                    letterSpacing: "0.06em",
                    color: "#e8d5a3",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  THE DEVLOG
                </h1>
                <p
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: "clamp(11px, 1.6vw, 13px)",
                    color: "#8a7055",
                    marginTop: "8px",
                    margin: "8px 0 0",
                  }}
                >
                  Build logs, field notes &amp; lessons from the trail.
                </p>
              </div>

              {/* Divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "18px",
                }}
              >
                <div
                  style={{ flex: 1, height: "1px", background: "#3a2a14" }}
                />
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "11px",
                    letterSpacing: "0.25em",
                    color: "#5a4020",
                  }}
                >
                  LATEST DISPATCHES
                </span>
                <div
                  style={{ flex: 1, height: "1px", background: "#3a2a14" }}
                />
              </div>

              {/* Blog cards */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                {BLOG_POSTS.map((post, i) => (
                  <PostCard key={post.id} post={post} index={i} />
                ))}
              </div>

              {/* Coming soon notice */}
              <div
                style={{
                  background: "rgba(200,134,10,0.06)",
                  border: "1px dashed rgba(200,134,10,0.2)",
                  padding: "12px 16px",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "24px",
                }}
              >
                <FaCompass
                  size={14}
                  color="#c8860a"
                  style={{ flexShrink: 0 }}
                />
                <p
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: "12px",
                    color: "#7a5c35",
                    margin: 0,
                    lineHeight: 1.5,
                  }}
                >
                  More dispatches incoming. The explorer is still writing.{" "}
                  <span style={{ color: "#c8860a" }}>
                    Full devlog launching soon.
                  </span>
                </p>
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "#3a2a14",
                  marginBottom: "20px",
                }}
              />

              {/* Footer row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "12px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: "clamp(10px, 1.4vw, 11px)",
                    color: "#5a4020",
                    letterSpacing: "0.05em",
                  }}
                >
                  ◉ ENTRY #0 · WEATHER: CLEAR · MORALE: HIGH
                </div>

                <button
                  disabled
                  title="Devlog launching soon"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                    padding: "10px 20px",
                    background:
                      "linear-gradient(135deg, #c8860a 0%, #a06808 100%)",
                    border: "none",
                    cursor: "not-allowed",
                    opacity: 0.55,
                    flexShrink: 0,
                  }}
                >
                  <FaExternalLinkAlt size={13} color="#1a1208" />
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "15px",
                      letterSpacing: "0.2em",
                      color: "#1a1208",
                    }}
                  >
                    VISIT DEVLOG SITE
                  </span>
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default JournalModal;
