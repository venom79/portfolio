import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useUIStore } from "../store/uiStore";
import { useState } from "react";

const CONTENT = {
  skills: {
    title: "⚒ Skills & Tools",
    content: (
      <>
        <h3 className="mb-4 text-2xl font-bold">Backend Systems</h3>

        <ul className="mb-8 space-y-2">
          <li>Node.js</li>
          <li>Express.js</li>
          <li>GraphQL</li>
          <li>Prisma ORM</li>
          <li>PostgreSQL</li>
          <li>REST APIs</li>
        </ul>

        <h3 className="mb-4 text-2xl font-bold">Frontend Craft</h3>

        <ul className="mb-8 space-y-2">
          <li>React</li>
          <li>Next.js</li>
          <li>Tailwind CSS</li>
          <li>Three.js</li>
          <li>React Three Fiber</li>
          <li>Framer Motion</li>
        </ul>

        <h3 className="mb-4 text-2xl font-bold">Tools & Workflow</h3>

        <ul className="space-y-2">
          <li>Git & GitHub</li>
          <li>Linux</li>
          <li>Docker</li>
          <li>Figma</li>
          <li>VS Code</li>
        </ul>
      </>
    ),
  },

  experience: {
    title: "📜 Expedition Log",
    content: (
      <>
        <div className="mb-10 border-l-2 border-amber-800 pl-6">
          <h3 className="text-2xl font-bold">2025 - Present</h3>

          <p className="mb-3 text-lg italic">Freelance Developer</p>

          <p>
            Building full-stack applications, backend systems, GraphQL APIs and
            interactive web experiences.
          </p>
        </div>

        <div className="border-l-2 border-amber-800 pl-6">
          <h3 className="text-2xl font-bold">2024 - 2025</h3>

          <p className="mb-3 text-lg italic">Student Developer</p>

          <p>
            Focused on backend engineering, databases, system design and modern
            web development.
          </p>
        </div>
      </>
    ),
  },

  projects: {
    title: "🗺 Project Expeditions",
    content: (
      <div className="space-y-4">
        <button
          className="w-full rounded-xl border border-amber-900/20 bg-white/40 p-5 text-left transition hover:bg-white/60"
          onClick={() => setSelectedProject(PROJECTS[0])}
        >
          <h3 className="mb-2 text-xl font-bold">🏠 Real Estate Platform</h3>

          <p>
            Property listing platform with GraphQL backend, agent dashboard and
            advanced filtering.
          </p>
        </button>

        <button
          className="w-full rounded-xl border border-amber-900/20 bg-white/40 p-5 text-left transition hover:bg-white/60"
          onClick={() => alert("Open Portfolio Project")}
        >
          <h3 className="mb-2 text-xl font-bold">🏕 3D Portfolio</h3>

          <p>
            Interactive expedition themed portfolio built with Three.js and
            React Three Fiber.
          </p>
        </button>

        <button
          className="w-full rounded-xl border border-amber-900/20 bg-white/40 p-5 text-left transition hover:bg-white/60"
          onClick={() => alert("Open Future Project")}
        >
          <h3 className="mb-2 text-xl font-bold">🤖 AI Projects</h3>

          <p>Experiments and applications built while exploring AI and ML.</p>
        </button>
      </div>
    ),
  },
};
const PROJECTS = [
  {
    id: "real-estate",
    title: "Real Estate Platform",

    coverImage: "/images/real-estate-cover.jpg",

    description:
      "Property listing platform with GraphQL backend and agent dashboards.",

    story:
      "Built to learn scalable backend architecture, GraphQL and modern web application design.",

    tech: ["React", "GraphQL", "Prisma", "PostgreSQL", "Tailwind"],

    features: [
      "Property Listings",
      "Reviews",
      "Saved Properties",
      "Agent Dashboard",
    ],

    github: "#",
    demo: "#",
  },
];

const ProjectsList = ({ onSelect }) => {
  return (
    <div className="space-y-4">
      {PROJECTS.map((project) => (
        <button
          key={project.id}
          onClick={() => onSelect(project)}
          className="w-full rounded-xl border border-amber-900/20 bg-white/40 p-5 text-left transition hover:bg-white/60"
        >
          <h3 className="mb-2 text-xl font-bold">{project.title}</h3>

          <p>{project.description}</p>
        </button>
      ))}
    </div>
  );
};

const ProjectDetails = ({ project, onBack }) => {
  return (
    <div>
      {/* Breadcrumb */}

      <div className="mb-6 flex items-center gap-2 text-sm text-amber-800">
        <button onClick={onBack} className="font-semibold hover:underline">
          Projects
        </button>

        <span>›</span>

        <span>{project.title}</span>
      </div>

      {/* Back Button */}

      <button
        onClick={onBack}
        className="
          mb-6
          rounded-lg
          border
          border-amber-900/20
          bg-white/40
          px-4
          py-2
          transition
          hover:bg-white/60
        "
      >
        ← Back to Projects
      </button>

      {/* Cover */}

      <img
        src={project.coverImage}
        alt={project.title}
        className="
          mb-8
          h-72
          w-full
          rounded-xl
          object-cover
          shadow-lg
        "
      />

      {/* Title */}

      <h2 className="mb-4 text-4xl font-bold">{project.title}</h2>

      <p className="mb-8 text-xl">{project.description}</p>

      {/* Story */}

      <h3 className="mb-3 text-2xl font-bold">Story</h3>

      <p className="mb-8">{project.story}</p>

      {/* Tech */}

      <h3 className="mb-3 text-2xl font-bold">Tech Stack</h3>

      <div className="mb-8 flex flex-wrap gap-2">
        {project.tech.map((tech) => (
          <span
            key={tech}
            className="
              rounded-full
              bg-amber-100
              px-3
              py-1
              text-sm
            "
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Features */}

      <h3 className="mb-3 text-2xl font-bold">Features</h3>

      <ul className="mb-8 list-disc pl-6">
        {project.features.map((feature) => (
          <li key={feature}>{feature}</li>
        ))}
      </ul>

      {/* Links */}

      <div className="flex gap-4">
        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="
            rounded-lg
            bg-stone-800
            px-5
            py-3
            text-white
          "
        >
          GitHub
        </a>

        <a
          href={project.demo}
          target="_blank"
          rel="noreferrer"
          className="
            rounded-lg
            bg-amber-700
            px-5
            py-3
            text-white
          "
        >
          Live Demo
        </a>
      </div>
    </div>
  );
};

const ParchmentModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);

  const closeBoard = useUIStore((state) => state.closeBoard);

  const validBoards = ["skills", "experience", "projects"];
  const [selectedProject, setSelectedProject] = useState(null);
  if (!validBoards.includes(activeBoard)) {
    return null;
  }

  const data = CONTENT[activeBoard];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 30,
            scale: 0.95,
          }}
          transition={{
            duration: 0.3,
          }}
          className="
            relative
            h-[80vh]
            w-[90vw]
            max-w-5xl
            overflow-hidden
            rounded-2xl
            border-8
            border-[#6a4b2a]
            bg-[#f5e6c8]
            shadow-2xl
          "
        >
          {/* Paper Texture */}

          <div
            className="absolute inset-0 opacity-10"
            style={{
              background:
                "repeating-linear-gradient(0deg, transparent, transparent 28px, rgba(0,0,0,0.08) 29px)",
            }}
          />

          {/* Header */}

          <div className="relative flex items-center justify-between border-b border-amber-900/20 px-8 py-6">
            <h1
              className="text-4xl font-bold text-amber-950"
              style={{
                fontFamily: "Playfair Display",
              }}
            >
              {activeBoard === "projects" && selectedProject
                ? `Projects › ${selectedProject.title}`
                : data.title}
            </h1>

            <button
              onClick={closeBoard}
              className="
                rounded-full
                p-2
                transition
                hover:bg-black/10
              "
            >
              <X />
            </button>
          </div>

          {/* Content */}

          <div
            className="
              relative
              h-[calc(80vh-100px)]
              overflow-y-auto
              px-10
              py-8
              text-lg
              leading-relaxed
              text-amber-950
            "
          >
            {activeBoard === "projects" ? (
              selectedProject ? (
                <ProjectDetails
                  project={selectedProject}
                  onBack={() => setSelectedProject(null)}
                />
              ) : (
                <ProjectsList onSelect={setSelectedProject} />
              )
            ) : (
              data.content
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ParchmentModal;
