import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useUIStore } from "../store/uiStore";
import { FaChevronRight } from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const milestones = [
  {
    id: "hackathon",
    tag: "ACHIEVEMENT",
    title: "Top 10 Hackathon Finish",
    date: "2026",
    image: "/images/hackathon.jpg",
    shortDescription: "Placed 9th among 100 participating teams.",
    description:
      "One of my first experiences building under pressure, collaborating with a team, and presenting a solution within a strict deadline. It taught me teamwork, rapid problem solving and pitching ideas effectively.",
    highlights: [
      "9th Place",
      "100 Teams",
      "Team Collaboration",
      "Project Presentation",
    ],
  },
  {
    id: "freelance",
    tag: "MILESTONE",
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
    tag: "BUILD",
    title: "Real Estate Platform",
    date: "2026",
    image: "/images/real-estate.jpg",
    shortDescription: "Largest project built so far.",
    description:
      "A full-stack real estate platform featuring GraphQL APIs, PostgreSQL, Prisma ORM, authentication, reviews and property management.",
    highlights: ["React", "GraphQL", "Prisma", "PostgreSQL", "Authentication"],
  },
  {
    id: "portfolio",
    tag: "CREATIVE",
    title: "3D Expedition Portfolio",
    date: "2026",
    image: "/images/portfolio.jpg",
    shortDescription: "Interactive expedition-themed portfolio.",
    description:
      "Built with Three.js, React Three Fiber, GSAP and Framer Motion to create an explorable world rather than a traditional website.",
    highlights: ["Three.js", "React Three Fiber", "GSAP", "Framer Motion"],
  },
];

// ─── Divider ─────────────────────────────────────────────────────────────────

const SectionDivider = ({ label }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      margin: "0 0 20px",
    }}
  >
    <div style={{ flex: 1, height: "1px", background: "#3a2a14" }} />
    <span
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "11px",
        letterSpacing: "0.28em",
        color: "#5a4020",
        whiteSpace: "nowrap",
      }}
    >
      {label}
    </span>
    <div style={{ flex: 1, height: "1px", background: "#3a2a14" }} />
  </div>
);

// ─── List view ───────────────────────────────────────────────────────────────

const MilestonesList = ({ onSelect }) => (
  <div
    style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "14px",
    }}
  >
    {milestones.map((m, i) => (
      <motion.button
        key={m.id}
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: i * 0.07 }}
        onClick={() => onSelect(m)}
        style={{
          background: "#12100a",
          border: "1px solid #3a2a14",
          textAlign: "left",
          cursor: "pointer",
          display: "flex",
          flexDirection: "column",
          overflow: "hidden",
          transition: "border-color 0.2s",
        }}
        whileHover={{ borderColor: "#c8860a" }}
      >
        {/* Cover image */}
        <div
          style={{
            height: "160px",
            overflow: "hidden",
            background: "#0e0c08",
            position: "relative",
          }}
        >
          <img
            src={m.image}
            alt={m.title}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              filter: "sepia(30%) contrast(1.05) brightness(0.85)",
              display: "block",
            }}
            onError={(e) => {
              e.currentTarget.style.display = "none";
            }}
          />
          {/* Tag overlay */}
          <div
            style={{
              position: "absolute",
              top: "10px",
              left: "10px",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "10px",
              letterSpacing: "0.28em",
              color: "#1a1208",
              background: "#c8860a",
              padding: "2px 8px",
            }}
          >
            {m.tag}
          </div>
        </div>

        {/* Card body */}
        <div
          style={{
            padding: "14px 16px",
            display: "flex",
            flexDirection: "column",
            gap: "6px",
            flex: 1,
          }}
        >
          <div
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: "10px",
              color: "#5a4020",
              letterSpacing: "0.1em",
            }}
          >
            {m.date}
          </div>
          <h3
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(17px, 2.2vw, 20px)",
              letterSpacing: "0.06em",
              color: "#e8d5a3",
              margin: 0,
              lineHeight: 1.2,
            }}
          >
            {m.title}
          </h3>
          <p
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: "clamp(11px, 1.4vw, 12px)",
              color: "#7a5c35",
              margin: 0,
              lineHeight: 1.6,
            }}
          >
            {m.shortDescription}
          </p>
          <div
            style={{
              marginTop: "auto",
              paddingTop: "10px",
              display: "flex",
              alignItems: "center",
              gap: "6px",
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "11px",
              letterSpacing: "0.2em",
              color: "#c8860a",
            }}
          >
            VIEW ENTRY <FaChevronRight size={9} />
          </div>
        </div>
      </motion.button>
    ))}
  </div>
);

// ─── Detail view ─────────────────────────────────────────────────────────────

const MilestoneDetail = ({ milestone: m, onBack }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -16 }}
    transition={{ duration: 0.25 }}
  >
    {/* Breadcrumb */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "8px",
        marginBottom: "22px",
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "12px",
        letterSpacing: "0.2em",
      }}
    >
      <button
        onClick={onBack}
        style={{
          color: "#c8860a",
          background: "none",
          border: "none",
          cursor: "pointer",
          fontFamily: "inherit",
          fontSize: "inherit",
          letterSpacing: "inherit",
          padding: 0,
          textDecoration: "underline",
          textDecorationColor: "rgba(200,134,10,0.4)",
        }}
      >
        TRAIL MARKERS
      </button>
      <FaChevronRight size={9} color="#5a4020" />
      <span style={{ color: "#5a4020" }}>{m.title.toUpperCase()}</span>
    </div>

    {/* Cover */}
    <div
      style={{
        height: "clamp(180px, 28vw, 280px)",
        overflow: "hidden",
        marginBottom: "28px",
        border: "1px solid #3a2a14",
        position: "relative",
      }}
    >
      <img
        src={m.image}
        alt={m.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          filter: "sepia(25%) contrast(1.05) brightness(0.85)",
          display: "block",
        }}
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
      <div
        style={{
          position: "absolute",
          top: "14px",
          left: "14px",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.28em",
          color: "#1a1208",
          background: "#c8860a",
          padding: "3px 10px",
        }}
      >
        {m.tag}
      </div>
    </div>

    {/* Title block */}
    <div
      style={{
        borderLeft: "3px solid #c8860a",
        paddingLeft: "16px",
        marginBottom: "28px",
      }}
    >
      <div
        style={{
          fontFamily: "'Special Elite', monospace",
          fontSize: "11px",
          color: "#5a4020",
          letterSpacing: "0.1em",
          marginBottom: "4px",
        }}
      >
        {m.date}
      </div>
      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(26px, 4.5vw, 42px)",
          letterSpacing: "0.06em",
          color: "#e8d5a3",
          margin: 0,
          lineHeight: 1,
        }}
      >
        {m.title}
      </h2>
    </div>

    <SectionDivider label="FIELD REPORT" />

    <p
      style={{
        fontFamily: "'Special Elite', monospace",
        fontSize: "clamp(12px, 1.6vw, 14px)",
        color: "#7a5c35",
        lineHeight: 1.8,
        marginBottom: "28px",
      }}
    >
      {m.description}
    </p>

    <SectionDivider label="HIGHLIGHTS" />

    <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
      {m.highlights.map((h) => (
        <span
          key={h}
          style={{
            fontFamily: "'Bebas Neue', sans-serif",
            fontSize: "12px",
            letterSpacing: "0.15em",
            color: "#e8d5a3",
            background: "#12100a",
            border: "1px solid #3a2a14",
            padding: "5px 14px",
          }}
        >
          {h}
        </span>
      ))}
    </div>
  </motion.div>
);

// ─── Main modal ──────────────────────────────────────────────────────────────

const MilestonesModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);
  const [selectedMilestone, setSelectedMilestone] = useState(null);

  const handleClose = () => {
    setSelectedMilestone(null);
    closeBoard();
  };

  return (
    <AnimatePresence>
      {activeBoard === "milestones" && (
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
          onClick={(e) => e.target === e.currentTarget && handleClose()}
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
            {/* Grain */}
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
              <div
                style={{ display: "flex", alignItems: "center", gap: "8px" }}
              >
                <span
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(10px, 1.8vw, 13px)",
                    letterSpacing: "0.22em",
                    color: "#1a1208",
                  }}
                >
                  ◈ TRAIL MARKERS — EXPEDITION RECORD
                </span>
                {selectedMilestone && (
                  <>
                    <FaChevronRight size={9} color="rgba(26,18,8,0.5)" />
                    <span
                      style={{
                        fontFamily: "'Bebas Neue', sans-serif",
                        fontSize: "clamp(10px, 1.6vw, 12px)",
                        letterSpacing: "0.18em",
                        color: "rgba(26,18,8,0.7)",
                      }}
                    >
                      {selectedMilestone.title.toUpperCase()}
                    </span>
                  </>
                )}
              </div>
              <button
                onClick={handleClose}
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

            {/* Header */}
            <div
              style={{
                padding: "24px clamp(18px, 4vw, 36px) 20px",
                flexShrink: 0,
                position: "relative",
                zIndex: 1,
                borderBottom: "1px solid #2e1f0a",
              }}
            >
              <div
                style={{ borderLeft: "3px solid #c8860a", paddingLeft: "16px" }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(10px, 1.6vw, 12px)",
                    letterSpacing: "0.3em",
                    color: "#c8860a",
                    marginBottom: "4px",
                  }}
                >
                  IMPORTANT MOMENTS FROM THE EXPEDITION
                </div>
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(26px, 4.5vw, 44px)",
                    letterSpacing: "0.06em",
                    color: "#e8d5a3",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  TRAIL MARKERS
                </h1>
              </div>
            </div>

            {/* Scrollable content */}
            <div
              style={{
                overflowY: "auto",
                flex: 1,
                padding: "28px clamp(18px, 4vw, 36px)",
                position: "relative",
                zIndex: 1,
              }}
            >
              <AnimatePresence mode="wait">
                {!selectedMilestone ? (
                  <motion.div
                    key="list"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MilestonesList onSelect={setSelectedMilestone} />
                  </motion.div>
                ) : (
                  <motion.div
                    key={selectedMilestone.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <MilestoneDetail
                      milestone={selectedMilestone}
                      onBack={() => setSelectedMilestone(null)}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MilestonesModal;
