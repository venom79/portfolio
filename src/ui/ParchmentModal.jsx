import { useState } from "react";
import { useUIStore } from "../store/uiStore";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const projects = [
  {
    id: 1,
    emoji: "🏠",
    title: "Real Estate Platform",
    short: "Property listing platform with GraphQL APIs and agent dashboards.",
    description:
      "A full-stack real estate platform featuring property listings, agent dashboards, media uploads, reviews, favorites, and GraphQL APIs. Built for scale with Prisma ORM and PostgreSQL on the backend.",
    features: [
      "Property listing with search & filter",
      "Agent dashboard with analytics",
      "Media upload with CDN delivery",
      "Reviews and favorites system",
      "GraphQL API with authentication",
      "Responsive mobile-first UI",
    ],
    challenges:
      "The biggest challenge was designing an efficient GraphQL schema that balanced query flexibility with performance — solved using DataLoader for batching and caching.",
    techStack: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
    github: "#",
    demo: "#",
  },
  {
    id: 2,
    emoji: "🌲",
    title: "Portfolio Website",
    short: "Interactive 3D portfolio with campsite exploration.",
    description:
      "A game-like portfolio experience featuring a campsite, forest exploration, animated camera transitions and interactive content panels. Built entirely in the browser using React Three Fiber.",
    features: [
      "3D campsite environment",
      "Animated camera journeys",
      "Interactive content discovery",
      "Optimised 3D asset loading",
      "Mobile-friendly touch controls",
    ],
    challenges:
      "Achieving smooth 60fps across all devices required aggressive LOD management, lazy-loaded assets, and a custom render pipeline for mobile.",
    techStack: ["React", "Three.js", "R3F", "Tailwind"],
    github: "#",
    demo: "#",
  },
  {
    id: 3,
    emoji: "🤖",
    title: "AI Chat Application",
    short: "Conversational AI app with streaming responses.",
    description:
      "An AI-powered chat application with authentication, persistent conversation history, and real-time streaming responses from OpenAI APIs. Features a clean, minimal UI focused on the conversation.",
    features: [
      "Real-time token streaming",
      "Conversation history",
      "User authentication (JWT)",
      "Markdown rendering",
      "Export conversations",
    ],
    challenges:
      "Managing streaming state cleanly in React without causing re-render waterfalls required careful use of refs and a custom streaming hook.",
    techStack: ["React", "Node.js", "OpenAI API"],
    github: "#",
    demo: "#",
  },
];

const skillsData = [
  {
    category: "Backend Systems",
    items: [
      "Node.js",
      "Express",
      "GraphQL",
      "REST APIs",
      "Prisma",
      "Auth & JWT",
    ],
  },
  {
    category: "Frontend Craft",
    items: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Three.js",
      "React Three Fiber",
    ],
  },
  {
    category: "Data & Storage",
    items: ["PostgreSQL", "MySQL", "Redis", "Schema Design"],
  },
  {
    category: "Tools & Workflow",
    items: ["Git", "Docker", "CI/CD", "Linux", "Figma"],
  },
];

const experienceData = [
  {
    year: "Present — 2022",
    role: "Freelance Full-Stack Developer",
    place: "◆ Remote, Worldwide",
    body: "Ventured through uncharted client territories — building full-stack applications, GraphQL APIs, database architectures, and modern React frontends. Each project a new expedition with its own summit.",
  },
  {
    year: "2021 — 2020",
    role: "Junior Web Developer",
    place: "◆ Agency Base Camp",
    body: "First expeditions into professional software development. Cut trails through unfamiliar codebases, maintained client sites, and learned to move fast without losing the map.",
  },
  {
    year: "2020",
    role: "Self-Directed Exploration",
    place: "◆ The Wilderness of Self-Study",
    body: "Began the journey from scratch — camping with tutorials, documentation, and open-source projects. The hardest terrain, but the most formative peaks.",
  },
];

/* ─────────────────────────────────────────────
   Styles (injected once as a <style> tag)
───────────────────────────────────────────── */
const JOURNAL_STYLES = `
  @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=Caveat:wght@400;600&display=swap');

  :root {
    --walnut:         #3a2010;
    --walnut-light:   #4a2f1b;
    --leather:        #6b4423;
    --leather-light:  #8b5a2b;
    --parchment:      #f5e6c8;
    --parchment-dark: #e8d5aa;
    --parchment-deep: #d4bc8a;
    --gold:           #d4af37;
    --gold-light:     #e8c94a;
    --ink:            #2b1d0e;
    --ink-light:      #4a3520;
    --ink-muted:      #6b5240;
    --rust:           #8b3a1a;
  }

  /* ── Overlay ── */
  .jrnl-overlay {
    position: fixed;
    inset: 0;
    z-index: 100;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0, 0, 0, 0.72);
    animation: jrnlFadeIn 0.3s ease both;
  }
  @keyframes jrnlFadeIn { from { opacity: 0; } to { opacity: 1; } }

  /* ── Frame ── */
  .jrnl-frame {
    position: relative;
    width: min(760px, 92vw);
    max-height: 88vh;
    background: var(--walnut);
    border-radius: 16px;
    padding: 12px;
    box-shadow:
      0 0 0 3px #2a1508,
      0 12px 60px rgba(0,0,0,0.8),
      0 3px 12px rgba(0,0,0,0.5),
      inset 0 1px 0 rgba(255,255,255,0.07);
    animation: jrnlReveal 0.45s cubic-bezier(0.22,1,0.36,1) both;
  }
  @keyframes jrnlReveal {
    from { opacity: 0; transform: scale(0.94) translateY(16px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  /* ── Leather inner ── */
  .jrnl-inner {
    background: var(--leather);
    border-radius: 8px;
    padding: 8px;
    position: relative;
    overflow: hidden;
  }
  .jrnl-inner::before {
    content: '';
    position: absolute;
    inset: 0;
    background: repeating-linear-gradient(
      90deg, transparent 0px, transparent 18px,
      rgba(0,0,0,0.04) 18px, rgba(0,0,0,0.04) 19px
    );
    pointer-events: none;
    border-radius: 8px;
  }

  /* ── Page ── */
  .jrnl-page {
    background: var(--parchment);
    border-radius: 5px;
    padding: 28px 32px 36px;
    position: relative;
    overflow: hidden;
    max-height: calc(88vh - 80px);
    overflow-y: auto;
    scrollbar-width: thin;
    scrollbar-color: var(--parchment-deep) transparent;
  }
  .jrnl-page::-webkit-scrollbar { width: 4px; }
  .jrnl-page::-webkit-scrollbar-thumb { background: var(--parchment-deep); border-radius: 2px; }

  /* Parchment atmosphere */
  .jrnl-page::before {
    content: '';
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse at 20% 80%, rgba(139,90,43,0.09) 0%, transparent 50%),
      radial-gradient(ellipse at 82% 18%, rgba(139,90,43,0.06) 0%, transparent 50%),
      radial-gradient(ellipse at 58% 65%, rgba(160,110,50,0.05) 0%, transparent 40%);
    pointer-events: none;
    z-index: 0;
  }
  .jrnl-page > * { position: relative; z-index: 1; }

  /* Ruling lines */
  .jrnl-lines {
    position: absolute;
    inset: 0;
    pointer-events: none;
    overflow: hidden;
    opacity: 0.10;
  }
  .jrnl-lines::after {
    content: '';
    position: absolute;
    inset: 0;
    top: 120px;
    background: repeating-linear-gradient(
      to bottom, transparent 0px, transparent 27px,
      #8b5a2b 27px, #8b5a2b 28px
    );
  }

  /* Coffee stains */
  .jrnl-stain {
    position: absolute;
    border-radius: 50%;
    pointer-events: none;
    background: radial-gradient(circle, #8b5a2b 30%, transparent 70%);
  }
  .jrnl-stain-1 { width: 80px; height: 72px; opacity: 0.06; top: 44px; right: 64px; transform: rotate(-15deg) scaleX(0.9); }
  .jrnl-stain-2 { width: 50px; height: 46px; opacity: 0.05; bottom: 80px; left: 36px; transform: rotate(8deg); }

  /* Corner ornaments */
  .jrnl-corner { position: absolute; width: 36px; height: 36px; opacity: 0.32; pointer-events: none; }
  .jrnl-corner-tl { top: 10px;  left: 10px; }
  .jrnl-corner-tr { top: 10px;  right: 10px; transform: scaleX(-1); }
  .jrnl-corner-bl { bottom: 10px; left: 10px; transform: scaleY(-1); }
  .jrnl-corner-br { bottom: 10px; right: 10px; transform: scale(-1); }

  /* Expedition stamp */
  .jrnl-stamp {
    position: absolute;
    right: 30px; top: 88px;
    width: 72px; height: 72px;
    border: 3px solid var(--rust);
    border-radius: 50%;
    display: flex; align-items: center; justify-content: center;
    opacity: 0.20;
    transform: rotate(12deg);
    pointer-events: none; z-index: 1;
    font-family: 'Playfair Display', serif;
    font-size: 7.5px;
    color: var(--rust);
    text-transform: uppercase;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.4;
  }

  /* Map watermark */
  .jrnl-map-bg {
    position: absolute;
    bottom: 18px; right: 18px;
    opacity: 0.04;
    pointer-events: none;
    z-index: 0;
  }

  /* ── Header ── */
  .jrnl-header {
    text-align: center;
    margin-bottom: 18px;
    animation: jrnlSlideIn 0.5s ease 0.05s both;
  }
  @keyframes jrnlSlideIn {
    from { opacity: 0; transform: translateY(-8px); }
    to   { opacity: 1; transform: translateY(0); }
  }
  .jrnl-eyebrow {
    font-family: 'Caveat', cursive;
    font-size: 13px;
    color: var(--ink-muted);
    letter-spacing: 3px;
    text-transform: uppercase;
    margin-bottom: 3px;
  }
  .jrnl-title {
    font-family: 'Playfair Display', serif;
    font-size: 27px;
    font-weight: 700;
    color: var(--walnut);
    letter-spacing: 1px;
  }
  .jrnl-divider {
    display: flex;
    align-items: center;
    gap: 7px;
    justify-content: center;
    margin-top: 8px;
  }
  .jrnl-divider-line {
    flex: 1; max-width: 80px; height: 1px;
    background: linear-gradient(to right, transparent, var(--gold), transparent);
  }
  .jrnl-divider-diamond {
    width: 6px; height: 6px;
    background: var(--gold);
    transform: rotate(45deg);
    flex-shrink: 0;
  }

  /* ── Nav tabs ── */
  .jrnl-tabs {
    display: flex;
    gap: 5px;
    justify-content: center;
    margin-bottom: 18px;
    animation: jrnlSlideIn 0.5s ease 0.12s both;
  }
  .jrnl-tab {
    font-family: 'Caveat', cursive;
    font-size: 14px;
    font-weight: 600;
    color: var(--ink-muted);
    background: var(--parchment-dark);
    border: 1.5px solid var(--parchment-deep);
    border-radius: 4px 4px 0 0;
    padding: 5px 16px;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.4px;
  }
  .jrnl-tab:hover {
    background: var(--parchment-deep);
    color: var(--walnut);
    transform: translateY(-2px);
  }
  .jrnl-tab.active {
    background: var(--parchment);
    color: var(--walnut);
    border-color: var(--gold);
    border-bottom-color: var(--parchment);
  }

  /* ── Content area ── */
  .jrnl-content {
    animation: jrnlSlideIn 0.4s ease 0.18s both;
  }

  /* ── Section headings ── */
  .jrnl-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 22px;
    font-weight: 700;
    color: var(--walnut);
    letter-spacing: 0.4px;
    margin-bottom: 3px;
  }
  .jrnl-handwritten {
    font-family: 'Caveat', cursive;
    font-size: 15px;
    color: var(--ink-muted);
    margin-bottom: 14px;
  }
  .jrnl-rule {
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 12px 0 16px;
    opacity: 0.45;
  }
  .jrnl-rule-line { flex: 1; height: 1px; background: var(--ink-muted); }
  .jrnl-rule-dot  { font-size: 12px; color: var(--ink-muted); }

  /* ── Skills ── */
  .jrnl-skill-cat        { margin-bottom: 18px; }
  .jrnl-skill-cat-title  {
    font-family: 'Playfair Display', serif;
    font-size: 12px;
    font-weight: 700;
    color: var(--leather);
    text-transform: uppercase;
    letter-spacing: 2.5px;
    margin-bottom: 9px;
    display: flex;
    align-items: center;
    gap: 8px;
  }
  .jrnl-skill-cat-title::after {
    content: '';
    flex: 1;
    height: 1px;
    background: linear-gradient(to right, var(--parchment-deep), transparent);
  }
  .jrnl-skill-tags { display: flex; flex-wrap: wrap; gap: 7px; }
  .jrnl-skill-tag {
    font-family: 'Crimson Pro', serif;
    font-size: 13px;
    font-weight: 600;
    background: var(--walnut-light);
    color: var(--parchment);
    border: 1.5px solid var(--gold);
    border-radius: 3px;
    padding: 4px 12px;
    letter-spacing: 0.4px;
    cursor: default;
    transition: all 0.2s;
    display: flex;
    align-items: center;
    gap: 5px;
  }
  .jrnl-skill-tag::before { content: '◆'; font-size: 6px; color: var(--gold); }
  .jrnl-skill-tag:hover {
    background: var(--leather);
    transform: translateY(-1px);
    box-shadow: 0 2px 8px rgba(212,175,55,0.22);
  }

  /* ── Timeline ── */
  .jrnl-timeline {
    position: relative;
    padding-left: 28px;
  }
  .jrnl-timeline::before {
    content: '';
    position: absolute;
    left: 8px; top: 8px; bottom: 8px;
    width: 2px;
    background: linear-gradient(to bottom, var(--gold), var(--parchment-deep));
  }
  .jrnl-tl-entry { position: relative; margin-bottom: 20px; }
  .jrnl-tl-dot {
    position: absolute;
    left: -24px; top: 6px;
    width: 12px; height: 12px;
    border-radius: 50%;
    background: var(--gold);
    border: 2px solid var(--walnut-light);
  }
  .jrnl-tl-year  {
    font-family: 'Caveat', cursive;
    font-size: 13px; font-weight: 600;
    color: var(--rust); margin-bottom: 2px;
  }
  .jrnl-tl-role  {
    font-family: 'Playfair Display', serif;
    font-size: 17px; font-weight: 700;
    color: var(--walnut); margin-bottom: 2px;
  }
  .jrnl-tl-place {
    font-family: 'Caveat', cursive;
    font-size: 14px; color: var(--leather); margin-bottom: 6px;
  }
  .jrnl-tl-body {
    font-family: 'Crimson Pro', serif;
    font-size: 14px; font-style: italic;
    color: var(--ink-light); line-height: 1.6;
    background: rgba(139,90,43,0.06);
    border-left: 3px solid var(--parchment-deep);
    padding: 8px 10px;
    border-radius: 0 4px 4px 0;
  }

  /* ── Projects grid ── */
  .jrnl-projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
    gap: 16px;
    padding: 6px 2px;
  }
  .jrnl-note {
    background: var(--parchment-dark);
    border: 1.5px solid var(--parchment-deep);
    border-radius: 4px;
    padding: 14px;
    cursor: pointer;
    transition: all 0.25s;
    position: relative;
    overflow: hidden;
  }
  .jrnl-note:nth-child(1) { transform: rotate(-1.5deg); }
  .jrnl-note:nth-child(2) { transform: rotate(1deg); }
  .jrnl-note:nth-child(3) { transform: rotate(-0.8deg); }
  .jrnl-note:nth-child(4) { transform: rotate(1.8deg); }
  .jrnl-note:hover {
    transform: rotate(0deg) translateY(-4px) scale(1.02) !important;
    box-shadow: 0 6px 22px rgba(74,47,27,0.28);
    background: #f0d9a8;
    z-index: 2;
  }
  .jrnl-note-pin {
    position: absolute;
    top: -6px; left: 50%;
    transform: translateX(-50%);
    width: 10px; height: 10px;
    border-radius: 50%;
    background: var(--rust);
    box-shadow: 0 2px 4px rgba(0,0,0,0.28);
  }
  .jrnl-note-thumb {
    width: 100%; height: 76px;
    border-radius: 3px;
    margin-bottom: 10px;
    display: flex; align-items: center; justify-content: center;
    font-size: 30px;
    background: var(--walnut-light);
    color: rgba(245,230,200,0.7);
  }
  .jrnl-note-title {
    font-family: 'Playfair Display', serif;
    font-size: 14px; font-weight: 700;
    color: var(--walnut); margin-bottom: 4px; line-height: 1.25;
  }
  .jrnl-note-desc {
    font-family: 'Crimson Pro', serif;
    font-size: 12px; color: var(--ink-muted);
    line-height: 1.4; margin-bottom: 8px;
  }
  .jrnl-note-techs { display: flex; flex-wrap: wrap; gap: 4px; }
  .jrnl-note-tech {
    font-family: 'Caveat', cursive;
    font-size: 11px;
    background: rgba(74,47,27,0.12);
    color: var(--leather);
    border-radius: 2px;
    padding: 1px 5px;
  }
  .jrnl-note-btn {
    margin-top: 9px;
    font-family: 'Caveat', cursive;
    font-size: 13px; font-weight: 600;
    background: var(--walnut-light);
    color: var(--parchment);
    border: 1.5px solid var(--gold);
    border-radius: 3px;
    padding: 4px 10px;
    cursor: pointer;
    transition: all 0.2s;
    display: block; width: 100%; text-align: center;
  }
  .jrnl-note-btn:hover {
    background: var(--leather);
    box-shadow: 0 0 9px rgba(212,175,55,0.28);
    transform: translateY(-1px);
  }

  /* ── Project detail ── */
  .jrnl-breadcrumb {
    font-family: 'Caveat', cursive;
    font-size: 14px; color: var(--ink-muted);
    margin-bottom: 14px;
    display: flex; align-items: center; gap: 5px;
  }
  .jrnl-breadcrumb-sep { color: var(--gold); font-size: 10px; }

  .jrnl-banner {
    width: 100%; height: 110px;
    border-radius: 4px;
    background: var(--walnut-light);
    margin-bottom: 16px;
    display: flex; align-items: center; justify-content: center;
    font-size: 46px;
    color: rgba(245,230,200,0.55);
    position: relative; overflow: hidden;
  }
  .jrnl-banner::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, transparent 55%, rgba(42,21,8,0.32) 100%);
  }
  .jrnl-banner-title {
    position: absolute; bottom: 10px; left: 14px;
    font-family: 'Playfair Display', serif;
    font-size: 18px; font-weight: 700;
    color: var(--parchment); z-index: 1;
    text-shadow: 0 1px 5px rgba(0,0,0,0.5);
  }

  .jrnl-detail-section-title {
    font-family: 'Playfair Display', serif;
    font-size: 15px; font-weight: 700;
    color: var(--leather);
    margin: 14px 0 6px;
    padding-bottom: 3px;
    border-bottom: 1px solid var(--parchment-deep);
    display: flex; align-items: center; gap: 6px;
  }
  .jrnl-detail-body {
    font-family: 'Crimson Pro', serif;
    font-size: 14px; color: var(--ink-light); line-height: 1.65;
  }
  .jrnl-feature-list { list-style: none; padding: 0; margin: 0; }
  .jrnl-feature-list li {
    font-family: 'Crimson Pro', serif;
    font-size: 13px; color: var(--ink-light);
    padding: 3px 0; display: flex; align-items: baseline; gap: 7px;
  }
  .jrnl-feature-list li::before {
    content: '✦'; color: var(--gold); font-size: 9px; flex-shrink: 0;
  }
  .jrnl-tech-stack { display: flex; flex-wrap: wrap; gap: 6px; }
  .jrnl-tech-badge {
    font-family: 'Caveat', cursive;
    font-size: 13px; font-weight: 600;
    background: var(--walnut-light);
    color: var(--gold);
    border: 1.5px solid var(--gold);
    border-radius: 3px;
    padding: 3px 10px;
  }
  .jrnl-detail-actions { display: flex; gap: 10px; margin-top: 18px; }

  /* ── Buttons ── */
  .jrnl-btn {
    font-family: 'Caveat', cursive;
    font-size: 15px; font-weight: 600;
    background: var(--walnut-light);
    color: var(--parchment);
    border: 2px solid var(--gold);
    border-radius: 4px;
    padding: 7px 18px;
    cursor: pointer;
    transition: all 0.2s;
    letter-spacing: 0.5px;
    position: relative; overflow: hidden;
  }
  .jrnl-btn::after {
    content: '';
    position: absolute; inset: 0;
    background: linear-gradient(to bottom, rgba(255,255,255,0.07) 0%, transparent 50%);
    pointer-events: none;
  }
  .jrnl-btn:hover {
    background: var(--leather);
    box-shadow: 0 0 14px rgba(212,175,55,0.32);
    transform: translateY(-2px);
    border-color: var(--gold-light);
  }
  .jrnl-btn:active { transform: translateY(0); }

  /* ── Close ── */
  .jrnl-close {
    position: absolute;
    top: -6px; right: -6px;
    width: 32px; height: 32px;
    border-radius: 50%;
    background: var(--walnut);
    border: 2px solid var(--gold);
    color: var(--parchment);
    font-size: 15px;
    cursor: pointer;
    display: flex; align-items: center; justify-content: center;
    transition: all 0.2s;
    z-index: 10;
    font-family: monospace;
  }
  .jrnl-close:hover {
    background: var(--leather);
    box-shadow: 0 0 10px rgba(212,175,55,0.3);
    transform: scale(1.1);
  }
`;

/* ─────────────────────────────────────────────
   Sub-components
───────────────────────────────────────────── */
const CornerSVG = () => (
  <svg viewBox="0 0 36 36" fill="none" width="36" height="36">
    <path d="M2 2 L14 2 M2 2 L2 14" stroke="#6b4423" strokeWidth="1.5" />
    <path d="M5 5 L10 5 M5 5 L5 10" stroke="#d4af37" strokeWidth="1" />
    <circle cx="3" cy="3" r="1.5" fill="#d4af37" />
  </svg>
);

const CompassSVG = () => (
  <svg width="30" height="30" viewBox="0 0 28 28" fill="none">
    <circle cx="14" cy="14" r="12" stroke="#d4af37" strokeWidth="1.5" />
    <circle cx="14" cy="14" r="3" fill="#d4af37" />
    <polygon points="14,4 16,14 14,12 12,14" fill="#3a2010" />
    <polygon points="14,24 12,14 14,16 16,14" fill="#8b5a2b" />
    <polygon points="4,14 14,12 12,14 14,16" fill="#d4af37" />
    <polygon points="24,14 14,16 16,14 14,12" fill="#d4af37" />
    <text x="12.5" y="8" fontSize="4" fill="#d4af37" fontFamily="serif">
      N
    </text>
  </svg>
);

const MapBgSVG = () => (
  <svg className="jrnl-map-bg" width="200" height="200" viewBox="0 0 200 200">
    <circle
      cx="100"
      cy="100"
      r="90"
      stroke="#4a2f1b"
      strokeWidth="1"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="70"
      stroke="#4a2f1b"
      strokeWidth="0.5"
      fill="none"
    />
    <circle
      cx="100"
      cy="100"
      r="50"
      stroke="#4a2f1b"
      strokeWidth="0.4"
      fill="none"
    />
    <line
      x1="10"
      y1="100"
      x2="190"
      y2="100"
      stroke="#4a2f1b"
      strokeWidth="0.5"
    />
    <line
      x1="100"
      y1="10"
      x2="100"
      y2="190"
      stroke="#4a2f1b"
      strokeWidth="0.5"
    />
    <path
      d="M100 18 L106 75 L100 86 L94 75 Z"
      stroke="#4a2f1b"
      strokeWidth="0.5"
      fill="none"
    />
    <text x="97" y="16" fontSize="8" fill="#4a2f1b">
      N
    </text>
  </svg>
);

/* ─── Skills section ─── */
const SkillsSection = () => (
  <div className="jrnl-content">
    <div className="jrnl-section-title">⚒ Skills &amp; Craft</div>
    <div className="jrnl-handwritten">
      Tools of the expedition, forged through years in the field
    </div>
    <div className="jrnl-rule">
      <div className="jrnl-rule-line" />
      <div className="jrnl-rule-dot">◆</div>
      <div className="jrnl-rule-line" />
    </div>
    {skillsData.map((cat) => (
      <div className="jrnl-skill-cat" key={cat.category}>
        <div className="jrnl-skill-cat-title">{cat.category}</div>
        <div className="jrnl-skill-tags">
          {cat.items.map((item) => (
            <div className="jrnl-skill-tag" key={item}>
              {item}
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
);

/* ─── Experience section ─── */
const ExperienceSection = () => (
  <div className="jrnl-content">
    <div className="jrnl-section-title">📜 Expedition Log</div>
    <div className="jrnl-handwritten">
      Milestones charted across years of exploration
    </div>
    <div className="jrnl-rule">
      <div className="jrnl-rule-line" />
      <div className="jrnl-rule-dot">◆</div>
      <div className="jrnl-rule-line" />
    </div>
    <div className="jrnl-timeline">
      {experienceData.map((entry) => (
        <div className="jrnl-tl-entry" key={entry.role}>
          <div className="jrnl-tl-dot" />
          <div className="jrnl-tl-year">{entry.year}</div>
          <div className="jrnl-tl-role">{entry.role}</div>
          <div className="jrnl-tl-place">{entry.place}</div>
          <div className="jrnl-tl-body">"{entry.body}"</div>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Projects list ─── */
const ProjectsSection = ({ onSelect }) => (
  <div className="jrnl-content">
    <div className="jrnl-section-title">🗺 Project Expeditions</div>
    <div className="jrnl-handwritten">Journeys documented, summits reached</div>
    <div className="jrnl-rule">
      <div className="jrnl-rule-line" />
      <div className="jrnl-rule-dot">◆</div>
      <div className="jrnl-rule-line" />
    </div>
    <div className="jrnl-projects-grid">
      {projects.map((p) => (
        <div className="jrnl-note" key={p.id}>
          <div className="jrnl-note-pin" />
          <div className="jrnl-note-thumb">{p.emoji}</div>
          <div className="jrnl-note-title">{p.title}</div>
          <div className="jrnl-note-desc">{p.short}</div>
          <div className="jrnl-note-techs">
            {p.techStack.map((t) => (
              <span className="jrnl-note-tech" key={t}>
                {t}
              </span>
            ))}
          </div>
          <button className="jrnl-note-btn" onClick={() => onSelect(p)}>
            View Details →
          </button>
        </div>
      ))}
    </div>
  </div>
);

/* ─── Project detail ─── */
const ProjectDetail = ({ project, onBack }) => (
  <div className="jrnl-content">
    <div className="jrnl-breadcrumb">
      <button
        className="jrnl-btn"
        style={{ padding: "4px 12px", fontSize: "13px" }}
        onClick={onBack}
      >
        ← Back
      </button>
      <span>Projects</span>
      <span className="jrnl-breadcrumb-sep">◆</span>
      <span>{project.title}</span>
    </div>

    <div className="jrnl-banner">
      <span>{project.emoji}</span>
      <div className="jrnl-banner-title">{project.title}</div>
    </div>

    <div className="jrnl-detail-section-title">📖 Overview</div>
    <div className="jrnl-detail-body">{project.description}</div>

    <div className="jrnl-detail-section-title">✦ Features</div>
    <ul className="jrnl-feature-list">
      {project.features.map((f) => (
        <li key={f}>{f}</li>
      ))}
    </ul>

    <div className="jrnl-detail-section-title">⛰ Challenges</div>
    <div className="jrnl-detail-body" style={{ fontStyle: "italic" }}>
      {project.challenges}
    </div>

    <div className="jrnl-detail-section-title">⚒ Tech Stack</div>
    <div className="jrnl-tech-stack">
      {project.techStack.map((t) => (
        <div className="jrnl-tech-badge" key={t}>
          {t}
        </div>
      ))}
    </div>

    <div className="jrnl-detail-actions">
      <button className="jrnl-btn">⌥ GitHub</button>
      <button className="jrnl-btn">◉ Live Demo</button>
    </div>
  </div>
);

/* ─────────────────────────────────────────────
   Main component
───────────────────────────────────────────── */
const ParchmentModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);

  const [activeTab, setActiveTab] = useState("skills");
  const [selectedProject, setSelectedProject] = useState(null);

  if (!activeBoard) return null;

  const tabs = [
    { key: "skills", label: "⚒ Skills" },
    { key: "experience", label: "📜 Experience" },
    { key: "projects", label: "🗺 Projects" },
  ];

  const handleTabClick = (key) => {
    setActiveTab(key);
    setSelectedProject(null);
  };

  const handleClose = () => {
    setSelectedProject(null);
    closeBoard();
  };

  return (
    <>
      {/* Inject styles once */}
      <style dangerouslySetInnerHTML={{ __html: JOURNAL_STYLES }} />

      <div
        className="jrnl-overlay"
        onClick={(e) => e.target === e.currentTarget && handleClose()}
      >
        <div className="jrnl-frame">
          {/* Close button */}
          <button
            className="jrnl-close"
            onClick={handleClose}
            aria-label="Close journal"
          >
            ✕
          </button>

          <div className="jrnl-inner">
            <div className="jrnl-page">
              {/* Decoration */}
              <div className="jrnl-lines" aria-hidden="true" />
              <div className="jrnl-stain jrnl-stain-1" aria-hidden="true" />
              <div className="jrnl-stain jrnl-stain-2" aria-hidden="true" />

              <svg
                className="jrnl-corner jrnl-corner-tl"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <CornerSVG />
              </svg>
              <svg
                className="jrnl-corner jrnl-corner-tr"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <CornerSVG />
              </svg>
              <svg
                className="jrnl-corner jrnl-corner-bl"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <CornerSVG />
              </svg>
              <svg
                className="jrnl-corner jrnl-corner-br"
                viewBox="0 0 36 36"
                fill="none"
                aria-hidden="true"
              >
                <CornerSVG />
              </svg>

              <div className="jrnl-stamp" aria-hidden="true">
                EXPEDITION
                <br />◆ LOG ◆<br />
                VERIFIED
              </div>

              <MapBgSVG />

              {/* Header */}
              <div className="jrnl-header">
                <div style={{ marginBottom: 5 }}>
                  <CompassSVG />
                </div>
                <div className="jrnl-eyebrow">
                  Field Notes &amp; Expedition Records
                </div>
                <div className="jrnl-title">Explorer's Journal</div>
                <div className="jrnl-divider">
                  <div className="jrnl-divider-line" />
                  <div className="jrnl-divider-diamond" />
                  <svg width="16" height="10" viewBox="0 0 16 10">
                    <path
                      d="M0 5 Q4 0 8 5 Q12 10 16 5"
                      stroke="#d4af37"
                      strokeWidth="1"
                      fill="none"
                    />
                  </svg>
                  <div className="jrnl-divider-diamond" />
                  <div className="jrnl-divider-line" />
                </div>
              </div>

              {/* Tabs — hidden when viewing project detail */}
              {!selectedProject && (
                <div className="jrnl-tabs">
                  {tabs.map((t) => (
                    <button
                      key={t.key}
                      className={`jrnl-tab${activeTab === t.key ? " active" : ""}`}
                      onClick={() => handleTabClick(t.key)}
                    >
                      {t.label}
                    </button>
                  ))}
                </div>
              )}

              {/* Content */}
              {activeTab === "skills" && !selectedProject && <SkillsSection />}
              {activeTab === "experience" && !selectedProject && (
                <ExperienceSection />
              )}
              {activeTab === "projects" && !selectedProject && (
                <ProjectsSection onSelect={setSelectedProject} />
              )}
              {selectedProject && (
                <ProjectDetail
                  project={selectedProject}
                  onBack={() => setSelectedProject(null)}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ParchmentModal;
