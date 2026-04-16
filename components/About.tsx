"use client";
import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

const chips = [
  "Manual Testing","Mobile QA","Web Testing","Test Planning",
  "Bug Tracking","Agile / Scrum","API Testing","Regression","UAT","Cross-Browser",
];

export default function About() {
  return (
    <section id="about" style={{ padding: "7rem 4rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="01" title="About Me" />
        <div style={{
          display: "grid",
          gridTemplateColumns: "300px 1fr",
          gap: "5rem",
          alignItems: "start",
        }}
          className="about-grid"
        >
          {/* Profile Card */}
          <FadeUp>
            <motion.div
              style={{
                background: "var(--surface)", border: "1px solid var(--border)",
                padding: "2.25rem 2rem", textAlign: "center",
                position: "sticky", top: "7rem",
              }}
            >
              {/* Avatar */}
              <div style={{
                width: "100%", aspectRatio: "1",
                background: "var(--bg3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                marginBottom: "1.5rem", position: "relative", overflow: "hidden",
              }}>
                <div style={{
                  position: "absolute", inset: 0,
                  background: "linear-gradient(135deg, rgba(var(--accent-rgb),0.07) 0%, transparent 60%)",
                }} />
                <span style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "7rem", fontWeight: 700, fontStyle: "italic",
                  color: "rgba(var(--accent-rgb),0.14)", lineHeight: 1,
                }}>DP</span>
              </div>

              <div style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", fontWeight: 600, marginBottom: "0.25rem" }}>
                Dhaval Prajapati
              </div>
              <div style={{
                fontFamily: "var(--font-mono)", fontSize: "0.62rem",
                letterSpacing: "0.12em", textTransform: "uppercase",
                color: "var(--accent)", marginBottom: "1.1rem",
              }}>Quality Analyst</div>

              <div style={{
                display: "inline-flex", alignItems: "center", gap: "0.45rem",
                padding: "0.3rem 0.875rem",
                background: "rgba(93,184,148,0.08)",
                border: "1px solid rgba(93,184,148,0.22)",
                color: "var(--green)",
                fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em",
              }}>
                <motion.span
                  animate={{ scale: [1,1.6,1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block" }}
                />
                Available Now
              </div>

              <div style={{ height: 1, background: "var(--border)", margin: "1.25rem 0" }} />

              {/* Meta */}
              {[
                ["Experience", "8+ Years"],
                ["Location", "Nadiad, Gujarat, India"],
                ["Focus", "Manual QA"],
                ["Mode", "Remote / Hybrid"],
              ].map(([k, v]) => (
                <div key={k} style={{
                  display: "flex", justifyContent: "space-between",
                  alignItems: "center", marginBottom: "0.7rem",
                }}>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.58rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)" }}>{k}</span>
                  <span style={{ fontSize: "0.83rem", fontWeight: 500 }}>{v}</span>
                </div>
              ))}
            </motion.div>
          </FadeUp>

          {/* Content */}
          <FadeUp delay={0.18}>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "1.9rem", fontWeight: 300, fontStyle: "italic",
              marginBottom: "1.35rem", lineHeight: 1.3,
              color: "var(--text)",
            }}>
              "Quality is not an act — it is a habit cultivated with intent."
            </h3>
            {[
              "With over 8+ years of experience in quality assurance, I am adept at ensuring product excellence and customer satisfaction. My journey spans diverse domains, giving me a unique cross-domain perspective.",
              "Skilled in manual testing across software, mobile apps, and web technologies. Known for analytical prowess, sharp attention to detail, and seamless collaboration with cross-functional teams in Agile environments.",
              "Passionate about continuous improvement and staying ahead of industry trends. I believe quality is not just a phase in development — it's an organizational mindset that drives long-term success.",
            ].map((p, i) => (
              <p key={i} style={{ fontSize: "0.97rem", lineHeight: 1.9, color: "var(--text-muted)", marginBottom: "1.1rem" }}>{p}</p>
            ))}

            {/* Chips */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "1.75rem" }}>
              {chips.map((chip, i) => (
                <motion.span
                  key={chip}
                  data-hover
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.04 + 0.3 }}
                  whileHover={{
                    borderColor: "var(--accent)",
                    color: "var(--accent)",
                    backgroundColor: "rgba(var(--accent-rgb),0.06)",
                  } as any}
                  style={{
                    padding: "0.375rem 0.875rem",
                    border: "1px solid var(--border)",
                    fontFamily: "var(--font-mono)",
                    fontSize: "0.62rem", letterSpacing: "0.08em",
                    color: "var(--text-muted)", cursor: "none",
                    transition: "all 0.22s",
                  }}
                >
                  {chip}
                </motion.span>
              ))}
            </div>
          </FadeUp>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .about-grid { grid-template-columns: 1fr !important; gap: 3rem !important; }
          .about-grid > div:first-child > div { position: static !important; }
        }
      `}</style>
    </section>
  );
}
