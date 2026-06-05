import { useState } from "react";
import { useUIStore } from "../store/uiStore";

const dummyProjects = [
  {
    id: 1,
    title: "Real Estate Platform",
    shortDescription:
      "Property listing platform built using Next.js, GraphQL and PostgreSQL.",
    description:
      "A full-stack real estate platform featuring property listings, agent dashboards, media uploads, reviews, favorites, authentication and GraphQL APIs.",
    techStack: ["Next.js", "GraphQL", "Prisma", "PostgreSQL"],
  },
  {
    id: 2,
    title: "Portfolio Website",
    shortDescription: "Interactive 3D portfolio built with React Three Fiber.",
    description:
      "A game-like portfolio experience featuring a campsite, forest exploration, animated camera transitions and interactive content panels.",
    techStack: ["React", "Three.js", "R3F", "Tailwind"],
  },
  {
    id: 3,
    title: "AI Chat Application",
    shortDescription: "Conversational AI application with modern UI.",
    description:
      "An AI-powered chat application with authentication, conversation history and streaming responses.",
    techStack: ["React", "Node.js", "OpenAI API"],
  },
];

const ParchmentModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);

  const [selectedProject, setSelectedProject] = useState(null);

  if (!activeBoard) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60">
      <div className="h-[80vh] w-[70vw] overflow-y-auto rounded-2xl border-8 border-amber-900 bg-amber-100 p-10 shadow-2xl">
        <button
          className="mb-6 rounded bg-amber-800 px-4 py-2 text-white"
          onClick={() => {
            setSelectedProject(null);
            closeBoard();
          }}
        >
          Close
        </button>

        {/* SKILLS */}

        {activeBoard === "skills" && (
          <>
            <h1 className="mb-6 text-4xl font-bold">Skills</h1>

            <div className="space-y-4">
              <div>
                <h2 className="font-semibold">Backend</h2>
                <p>Node.js • Express • GraphQL • Prisma</p>
              </div>

              <div>
                <h2 className="font-semibold">Frontend</h2>
                <p>React • Next.js • Tailwind CSS</p>
              </div>

              <div>
                <h2 className="font-semibold">Database</h2>
                <p>PostgreSQL • MySQL</p>
              </div>
            </div>
          </>
        )}

        {/* EXPERIENCE */}

        {activeBoard === "experience" && (
          <>
            <h1 className="mb-6 text-4xl font-bold">Experience</h1>

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold">Freelance Development</h2>

                <p className="text-gray-700">
                  Built full-stack applications for clients, focusing on backend
                  systems, GraphQL APIs, database design and modern React
                  frontends.
                </p>
              </div>
            </div>
          </>
        )}

        {/* PROJECTS */}

        {activeBoard === "projects" && (
          <>
            {/* PROJECT LIST */}

            {!selectedProject && (
              <>
                <h1 className="mb-6 text-4xl font-bold">Projects</h1>

                <div className="space-y-6">
                  {dummyProjects.map((project) => (
                    <div
                      key={project.id}
                      className="rounded-lg border border-amber-700 bg-white/40 p-5"
                    >
                      <h2 className="mb-2 text-2xl font-semibold">
                        {project.title}
                      </h2>

                      <p className="mb-4 text-gray-700">
                        {project.shortDescription}
                      </p>

                      <button
                        className="rounded bg-amber-800 px-4 py-2 text-white"
                        onClick={() => setSelectedProject(project)}
                      >
                        View Details
                      </button>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* PROJECT DETAIL */}

            {selectedProject && (
              <>
                <div className="mb-6 flex items-center gap-3">
                  <button
                    className="rounded bg-amber-800 px-4 py-2 text-white"
                    onClick={() => setSelectedProject(null)}
                  >
                    ← Back
                  </button>

                  <p className="text-sm text-gray-600">
                    Projects &gt; {selectedProject.title}
                  </p>
                </div>

                <h1 className="mb-4 text-4xl font-bold">
                  {selectedProject.title}
                </h1>

                <p className="mb-6 text-lg">{selectedProject.description}</p>

                <h2 className="mb-2 text-2xl font-semibold">Tech Stack</h2>

                <div className="mb-8 flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-amber-700 px-3 py-1 text-white"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="rounded bg-amber-800 px-4 py-2 text-white">
                    GitHub
                  </button>

                  <button className="rounded bg-amber-800 px-4 py-2 text-white">
                    Live Demo
                  </button>
                </div>
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default ParchmentModal;
