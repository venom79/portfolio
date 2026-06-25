import { AnimatePresence, motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaFilePdf } from "react-icons/fa";
import { useUIStore } from "../store/uiStore";

const ContactModal = () => {
  const activeBoard = useUIStore((state) => state.activeBoard);
  const closeBoard = useUIStore((state) => state.closeBoard);

  const channels = [
    {
      icon: <FaGithub size={28} />,
      label: "GITHUB",
      freq: "FREQ: 443.0 MHz",
      href: "https://github.com/venom79",
      isButton: false,
    },
    {
      icon: <FaLinkedin size={28} />,
      label: "LINKEDIN",
      freq: "FREQ: 80.0 MHz",
      href: "https://www.linkedin.com/in/adityagaonkar7/",
      isButton: false,
    },
    {
      icon: <FaEnvelope size={28} />,
      label: "FIELD MAIL",
      freq: "FREQ: 21.0 MHz",
      href: "https://mail.google.com/mail/?view=cm&fs=1&to=aditya.gaonkar1907@email.com",
      isButton: true,
    },
  ];

  return (
    <AnimatePresence>
      {activeBoard === "laptop" && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center px-4"
          style={{
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
              width: "min(640px, 100%)",
              background: "#1c1710",
              border: "2px solid #5a3e1b",
              boxShadow:
                "0 0 0 1px #2e1f0a, 0 24px 60px rgba(0,0,0,0.75), inset 0 1px 0 rgba(200,134,10,0.12)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Worn canvas grain overlay */}
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: `
                  repeating-linear-gradient(
                    0deg,
                    transparent,
                    transparent 2px,
                    rgba(0,0,0,0.06) 2px,
                    rgba(0,0,0,0.06) 3px
                  ),
                  repeating-linear-gradient(
                    90deg,
                    transparent,
                    transparent 4px,
                    rgba(255,255,255,0.015) 4px,
                    rgba(255,255,255,0.015) 5px
                  )
                `,
                pointerEvents: "none",
                zIndex: 0,
              }}
            />

            {/* Firelight amber top bar */}
            <div
              style={{
                background:
                  "linear-gradient(90deg, #c8860a 0%, #a06808 60%, #7a4e05 100%)",
                padding: "8px 20px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                position: "relative",
                zIndex: 1,
              }}
            >
              <span
                style={{
                  fontFamily: "'Bebas Neue', sans-serif",
                  fontSize: "clamp(11px, 2vw, 13px)",
                  letterSpacing: "0.22em",
                  color: "#1a1208",
                }}
              >
                ◈ BASE CAMP COMMS — CHANNEL OPEN
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

            {/* Body */}
            <div
              style={{
                padding: "clamp(20px, 4vw, 36px)",
                position: "relative",
                zIndex: 1,
              }}
            >
              {/* Header block */}
              <div
                style={{
                  borderLeft: "3px solid #c8860a",
                  paddingLeft: "16px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(11px, 1.8vw, 12px)",
                    letterSpacing: "0.3em",
                    color: "#c8860a",
                    marginBottom: "6px",
                  }}
                >
                  TRANSMISSION LOG — FIELD OPERATIVE
                </div>
                <h1
                  style={{
                    fontFamily: "'Bebas Neue', sans-serif",
                    fontSize: "clamp(32px, 6vw, 52px)",
                    letterSpacing: "0.06em",
                    color: "#e8d5a3",
                    lineHeight: 1,
                    margin: 0,
                  }}
                >
                  ADITYA GAONKAR
                </h1>
                <p
                  style={{
                    fontFamily: "'Special Elite', monospace",
                    fontSize: "clamp(12px, 1.8vw, 13px)",
                    color: "#8a7055",
                    marginTop: "8px",
                    margin: "8px 0 0",
                  }}
                >
                  Software developer • backend systems, AI &amp; everything in
                  between
                </p>
              </div>

              {/* Divider */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "24px",
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
                  SELECT CHANNEL
                </span>
                <div
                  style={{ flex: 1, height: "1px", background: "#3a2a14" }}
                />
              </div>

              {/* Channel buttons */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
                  gap: "12px",
                  marginBottom: "28px",
                }}
              >
                {channels.map(({ icon, label, freq, href, isButton }) => {
                  const sharedStyle = {
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    padding: "18px 12px",
                    background: "#12100a",
                    border: "1px solid #3a2a14",
                    cursor: "pointer",
                    textDecoration: "none",
                    transition: "border-color 0.2s, background 0.2s",
                    outline: "none",
                    color: "#c8860a",
                    fontFamily: "inherit",
                  };
                  const inner = (
                    <>
                      <div style={{ color: "#c8860a" }}>{icon}</div>
                      <div
                        style={{
                          fontFamily: "'Bebas Neue', sans-serif",
                          fontSize: "17px",
                          letterSpacing: "0.18em",
                          color: "#e8d5a3",
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontFamily: "'Special Elite', monospace",
                          fontSize: "10px",
                          color: "#5a4020",
                          letterSpacing: "0.1em",
                        }}
                      >
                        {freq}
                      </div>
                    </>
                  );

                  return isButton ? (
                    <button
                      key={label}
                      onClick={() => window.open(href, "_blank")}
                      style={sharedStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#c8860a";
                        e.currentTarget.style.background = "#1e1608";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#3a2a14";
                        e.currentTarget.style.background = "#12100a";
                      }}
                    >
                      {inner}
                    </button>
                  ) : (
                    <a
                      key={label}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      style={sharedStyle}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = "#c8860a";
                        e.currentTarget.style.background = "#1e1608";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = "#3a2a14";
                        e.currentTarget.style.background = "#12100a";
                      }}
                    >
                      {inner}
                    </a>
                  );
                })}
              </div>

              {/* Divider */}
              <div
                style={{
                  height: "1px",
                  background: "#3a2a14",
                  marginBottom: "20px",
                }}
              />

              {/* Resume row */}
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
                    fontSize: "clamp(11px, 1.6vw, 12px)",
                    color: "#5a4020",
                    letterSpacing: "0.05em",
                  }}
                >
                  ◉ ALL CHANNELS ENCRYPTED · RESPONSE TIME: VARIABLE
                </div>
                <a
                  href="/AdityaGaonkarResume.pdf"
                  download
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px 20px",
                    background:
                      "linear-gradient(135deg, #c8860a 0%, #a06808 100%)",
                    textDecoration: "none",
                    transition: "opacity 0.2s",
                    flexShrink: 0,
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
                >
                  <FaFilePdf size={16} color="#1a1208" />
                  <span
                    style={{
                      fontFamily: "'Bebas Neue', sans-serif",
                      fontSize: "15px",
                      letterSpacing: "0.2em",
                      color: "#1a1208",
                    }}
                  >
                    FIELD DOSSIER
                  </span>
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ContactModal;
