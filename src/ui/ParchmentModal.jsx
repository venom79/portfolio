import { AnimatePresence, motion } from "framer-motion";
import { useUIStore } from "../store/uiStore";
import { useState } from "react";
import { FaGithub, FaExternalLinkAlt, FaChevronRight } from "react-icons/fa";

// ─── Data ────────────────────────────────────────────────────────────────────

const SKILLS = {
  "BACKEND SYSTEMS": [
    "Node.js",
    "Express.js",
    "GraphQL",
    "Prisma ORM",
    "PostgreSQL",
    "REST APIs",
  ],
  "FRONTEND CRAFT": [
    "React",
    "Next.js",
    "Tailwind CSS",
    "Three.js",
    "React Three Fiber",
    "Framer Motion",
  ],
  "TOOLS & WORKFLOW": ["Git & GitHub", "Linux", "Docker", "Figma", "VS Code"],
};

const EXPERIENCE = [
  {
    period: "2025 — PRESENT",
    role: "Freelance Developer",
    detail:
      "Building full-stack applications, backend systems, GraphQL APIs and interactive web experiences for clients.",
  },
  {
    period: "2024 — 2025",
    role: "Student Developer",
    detail:
      "Focused on backend engineering, databases, system design and modern web development.",
  },
];

const PROJECTS = [
  {
    id: "real-estate",
    tag: "FULL STACK",
    title: "Real Estate Platform",
    short:
      "Property listing platform with GraphQL backend, agent dashboard and advanced filtering.",
    description:
      "A scalable property listing platform built with a GraphQL API at its core. Agents get a full dashboard to manage listings; buyers get fast, filtered search.",
    story:
      "Built to tackle the complexity of relational data in real estate — properties, agents, reviews, saved listings — and to learn how GraphQL handles it better than REST.",
    tech: ["React", "GraphQL", "Prisma", "PostgreSQL", "Tailwind CSS"],
    features: [
      "Property Listings & Search",
      "Agent Dashboard",
      "Reviews & Ratings",
      "Saved Properties",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: "portfolio",
    tag: "3D / CREATIVE",
    title: "3D Expedition Portfolio",
    short:
      "Interactive expedition-themed portfolio built with Three.js and React Three Fiber.",
    description:
      "This very site — a fully interactive 3D base camp scene where every object is a clickable portal into a section of the portfolio.",
    story:
      "Started as a curiosity about R3F and grew into a full custom portfolio. The goal was to make exploring a developer's background feel like an actual adventure.",
    tech: [
      "React",
      "Three.js",
      "React Three Fiber",
      "Framer Motion",
      "Zustand",
    ],
    features: [
      "Interactive 3D Scene",
      "Click-triggered Modals",
      "Expedition UI Theme",
      "Animated Navigation",
    ],
    github: "#",
    demo: "#",
  },
  {
    id: "ai-projects",
    tag: "AI / ML",
    title: "AI Experiments",
    short:
      "Experiments and applications built while exploring AI and ML integrations.",
    description:
      "A collection of AI-backed tools and experiments — from prompt-chained workflows to embedded search and generative interfaces.",
    story:
      "Exploring the frontier of AI integrations and building practical tools along the way.",
    tech: ["Python", "OpenAI API", "LangChain", "FastAPI", "React"],
    features: [
      "Prompt Engineering",
      "Embedding Search",
      "AI-Powered UIs",
      "Backend Pipelines",
    ],
    github: "#",
    demo: "#",
  },
];

// ─── Shared section label ────────────────────────────────────────────────────

const SectionLabel = ({ children }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      gap: "10px",
      margin: "0 0 18px",
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
      {children}
    </span>
    <div style={{ flex: 1, height: "1px", background: "#3a2a14" }} />
  </div>
);

// ─── Skills panel ────────────────────────────────────────────────────────────

const SkillsPanel = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
    {Object.entries(SKILLS).map(([category, items]) => (
      <div key={category}>
        <SectionLabel>{category}</SectionLabel>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "8px",
          }}
        >
          {items.map((skill) => (
            <span
              key={skill}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "13px",
                letterSpacing: "0.15em",
                color: "#e8d5a3",
                background: "#12100a",
                border: "1px solid #3a2a14",
                padding: "6px 14px",
              }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
);

// ─── Experience panel ────────────────────────────────────────────────────────

const ExperiencePanel = () => (
  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
    <SectionLabel>EXPEDITION LOG</SectionLabel>
    {EXPERIENCE.map((entry, i) => (
      <div
        key={i}
        style={{
          display: "grid",
          gridTemplateColumns: "clamp(120px, 22%, 160px) 1fr",
          gap: "0 20px",
          paddingBottom: "28px",
          marginBottom: i < EXPERIENCE.length - 1 ? "28px" : 0,
          borderBottom:
            i < EXPERIENCE.length - 1 ? "1px solid #2e1f0a" : "none",
        }}
      >
        <div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(12px, 1.8vw, 14px)",
              letterSpacing: "0.12em",
              color: "#c8860a",
              lineHeight: 1.3,
            }}
          >
            {entry.period}
          </div>
        </div>
        <div>
          <div
            style={{
              fontFamily: "'Bebas Neue', sans-serif",
              fontSize: "clamp(20px, 3vw, 26px)",
              letterSpacing: "0.06em",
              color: "#e8d5a3",
              marginBottom: "8px",
            }}
          >
            {entry.role}
          </div>
          <p
            style={{
              fontFamily: "'Special Elite', monospace",
              fontSize: "clamp(12px, 1.6vw, 13px)",
              color: "#7a5c35",
              margin: 0,
              lineHeight: 1.7,
            }}
          >
            {entry.detail}
          </p>
        </div>
      </div>
    ))}
  </div>
);

// ─── Project card ────────────────────────────────────────────────────────────

const ProjectCard = ({ project, onSelect, index }) => (
  <motion.button
    initial={{ opacity: 0, y: 14 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.07 }}
    onClick={() => onSelect(project)}
    style={{
      width: "100%",
      background: "#12100a",
      border: "1px solid #3a2a14",
      padding: "18px 20px",
      textAlign: "left",
      cursor: "pointer",
      display: "flex",
      flexDirection: "column",
      gap: "8px",
      transition: "border-color 0.2s, background 0.2s",
    }}
    onHoverStart={(e) => {
      e.target.style && (e.target.style.borderColor = "#c8860a");
    }}
    whileHover={{ borderColor: "#c8860a" }}
  >
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
          fontSize: "10px",
          letterSpacing: "0.28em",
          color: "#c8860a",
          background: "rgba(200,134,10,0.1)",
          border: "1px solid rgba(200,134,10,0.2)",
          padding: "2px 8px",
        }}
      >
        {project.tag}
      </span>
      <FaChevronRight size={11} color="#5a4020" />
    </div>
    <h3
      style={{
        fontFamily: "'Bebas Neue', sans-serif",
        fontSize: "clamp(18px, 2.5vw, 22px)",
        letterSpacing: "0.06em",
        color: "#e8d5a3",
        margin: 0,
      }}
    >
      {project.title}
    </h3>
    <p
      style={{
        fontFamily: "'Special Elite', monospace",
        fontSize: "clamp(11px, 1.5vw, 12px)",
        color: "#7a5c35",
        margin: 0,
        lineHeight: 1.6,
      }}
    >
      {project.short}
    </p>
  </motion.button>
);

// ─── Project detail ──────────────────────────────────────────────────────────

const ProjectDetail = ({ project, onBack }) => (
  <motion.div
    initial={{ opacity: 0, x: 24 }}
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
        marginBottom: "20px",
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
        PROJECTS
      </button>
      <FaChevronRight size={9} color="#5a4020" />
      <span style={{ color: "#5a4020" }}>{project.title.toUpperCase()}</span>
    </div>

    {/* Title block */}
    <div
      style={{
        borderLeft: "3px solid #c8860a",
        paddingLeft: "16px",
        marginBottom: "28px",
      }}
    >
      <span
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "11px",
          letterSpacing: "0.28em",
          color: "#c8860a",
        }}
      >
        {project.tag}
      </span>
      <h2
        style={{
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "clamp(28px, 5vw, 44px)",
          letterSpacing: "0.06em",
          color: "#e8d5a3",
          margin: "4px 0 8px",
          lineHeight: 1,
        }}
      >
        {project.title}
      </h2>
      <p
        style={{
          fontFamily: "'Special Elite', monospace",
          fontSize: "clamp(12px, 1.6vw, 13px)",
          color: "#8a7055",
          margin: 0,
        }}
      >
        {project.description}
      </p>
    </div>

    <SectionLabel>MISSION BRIEF</SectionLabel>
    <p
      style={{
        fontFamily: "'Special Elite', monospace",
        fontSize: "clamp(12px, 1.6vw, 13px)",
        color: "#7a5c35",
        lineHeight: 1.8,
        marginBottom: "28px",
      }}
    >
      {project.story}
    </p>

    {/* Two-col grid on desktop */}
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        gap: "24px",
        marginBottom: "28px",
      }}
    >
      <div>
        <SectionLabel>TECH STACK</SectionLabel>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
          {project.tech.map((t) => (
            <span
              key={t}
              style={{
                fontFamily: "'Bebas Neue', sans-serif",
                fontSize: "12px",
                letterSpacing: "0.15em",
                color: "#e8d5a3",
                background: "#12100a",
                border: "1px solid #3a2a14",
                padding: "5px 12px",
              }}
            >
              {t}
            </span>
          ))}
        </div>
      </div>

      <div>
        <SectionLabel>FIELD FEATURES</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {project.features.map((f) => (
            <div
              key={f}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "'Special Elite', monospace",
                fontSize: "clamp(11px, 1.5vw, 13px)",
                color: "#8a7055",
              }}
            >
              <span style={{ color: "#c8860a", fontSize: "8px" }}>◆</span>
              {f}
            </div>
          ))}
        </div>
      </div>
    </div>

    {/* CTA row */}
    <div
      style={{ height: "1px", background: "#3a2a14", marginBottom: "20px" }}
    />
    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
      <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          background: "#12100a",
          border: "1px solid #3a2a14",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "14px",
          letterSpacing: "0.18em",
          color: "#e8d5a3",
          textDecoration: "none",
          transition: "border-color 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#c8860a")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#3a2a14")}
      >
        <FaGithub size={14} />
        SOURCE CODE
      </a>
      <a
        href={project.demo}
        target="_blank"
        rel="noreferrer"
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          padding: "10px 20px",
          background: "linear-gradient(135deg, #c8860a 0%, #a06808 100%)",
          border: "none",
          fontFamily: "'Bebas Neue', sans-serif",
          fontSize: "14px",
          letterSpacing: "0.18em",
          color: "#1a1208",
          textDecoration: "none",
          transition: "opacity 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
        onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
      >
        <FaExternalLinkAlt size={12} />
        LIVE DEMO
      </a>
    </div>
  </motion.div>
);

// ─── Main modal ──────────────────────────────────────────────────────────────

const TITLES = {
  skills: "SKILLS & TOOLS",
  experience: "EXPEDITION LOG",
  projects: "PROJECT EXPEDITIONS",
};

const ParchmentModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);
  const [selectedProject, setSelectedProject] = useState(null);

  const validBoards = ["skills", "experience", "projects"];
  if (!validBoards.includes(activeBoard)) return null;

  const handleClose = () => {
    setSelectedProject(null);
    closeBoard();
  };

  return (
    <AnimatePresence>
      <motion.div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 100,
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
            width: "min(860px, 100%)",
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
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(10px, 1.8vw, 13px)",
                  letterSpacing: "0.22em",
                  color: "#1a1208",
                }}
              >
                ◈ {TITLES[activeBoard]}
              </span>
              {activeBoard === "projects" && selectedProject && (
                <>
                  <FaChevronRight size={9} color="rgba(26,18,8,0.5)" />
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "clamp(10px, 1.8vw, 13px)",
                      letterSpacing: "0.22em",
                      color: "rgba(26,18,8,0.7)",
                    }}
                  >
                    {selectedProject.title.toUpperCase()}
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
              padding: "24px clamp(18px, 4vw, 36px) 0",
              flexShrink: 0,
              position: "relative",
              zIndex: 1,
              borderBottom: "1px solid #2e1f0a",
              paddingBottom: "20px",
            }}
          >
            <div
              style={{
                borderLeft: "3px solid #c8860a",
                paddingLeft: "16px",
              }}
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
                OPERATIVE DOSSIER
              </div>
              <h1
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(26px, 4.5vw, 42px)",
                  letterSpacing: "0.06em",
                  color: "#e8d5a3",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                {TITLES[activeBoard]}
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
              {activeBoard === "skills" && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <SkillsPanel />
                </motion.div>
              )}

              {activeBoard === "experience" && (
                <motion.div
                  key="experience"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ExperiencePanel />
                </motion.div>
              )}

              {activeBoard === "projects" && !selectedProject && (
                <motion.div
                  key="projects-list"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "12px",
                  }}
                >
                  {PROJECTS.map((p, i) => (
                    <ProjectCard
                      key={p.id}
                      project={p}
                      onSelect={setSelectedProject}
                      index={i}
                    />
                  ))}
                </motion.div>
              )}

              {activeBoard === "projects" && selectedProject && (
                <motion.div
                  key={`project-${selectedProject.id}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ProjectDetail
                    project={selectedProject}
                    onBack={() => setSelectedProject(null)}
                  />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ParchmentModal;
