"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

const categories = [
  {
    num: "01", icon: "🔬", title: "Testing Types",
    skills: [
      { name: "Manual Testing", pct: 98 },
      { name: "Regression Testing", pct: 95 },
      { name: "UAT / Functional", pct: 92 },
      { name: "Exploratory Testing", pct: 90 },
      { name: "Negative / Boundary", pct: 93 },
    ],
  },
  {
    num: "02", icon: "📱", title: "Platforms",
    skills: [
      { name: "Web Applications", pct: 96 },
      { name: "iOS / Android Apps", pct: 90 },
      { name: "API Testing (Postman)", pct: 85 },
      { name: "Cross-Browser", pct: 92 },
      { name: "Desktop Software", pct: 80 },
    ],
  },
  {
    num: "03", icon: "🛠", title: "Tools & Tech",
    skills: [
      { name: "Jira / Confluence", pct: 95 },
      { name: "TestRail / TestLink", pct: 88 },
      { name: "Postman", pct: 82 },
      { name: "Selenium (Basic)", pct: 65 },
      { name: "Charles Proxy", pct: 78 },
    ],
  },
  {
    num: "04", icon: "⚙️", title: "Methodologies",
    skills: [
      { name: "Agile / Scrum", pct: 94 },
      { name: "SDLC / STLC", pct: 92 },
      { name: "Test Case Design", pct: 97 },
      { name: "Risk-Based Testing", pct: 86 },
      { name: "Defect Life Cycle", pct: 96 },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "7rem 4rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="02" title="Expertise" />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)",
          gap: "1px", background: "var(--border)",
        }}
          className="skills-grid"
        >
          {categories.map((cat, ci) => (
            <SkillBlock key={cat.num} cat={cat} delay={ci * 0.12} />
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.skills-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}

function SkillBlock({ cat, delay }: { cat: typeof categories[0]; delay: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [hovered, setHovered] = [false, () => {}];

  return (
    <FadeUp delay={delay}>
      <motion.div
        ref={ref}
        onHoverStart={() => {}}
        onHoverEnd={() => {}}
        whileHover={{ backgroundColor: "var(--bg2)" } as any}
        style={{
          background: "var(--bg)",
          padding: "2.75rem",
          position: "relative",
          overflow: "hidden",
          transition: "background 0.3s",
        }}
      >
        {/* Top accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileHover={{ scaleX: 1 } as any}
          transition={{ duration: 0.45 }}
          style={{
            position: "absolute", top: 0, left: 0, right: 0, height: 1,
            background: "linear-gradient(to right, var(--accent), transparent)",
            transformOrigin: "left",
          }}
        />

        {/* Ghost number */}
        <div style={{
          position: "absolute", top: 14, right: 18,
          fontFamily: "var(--font-display)", fontSize: "4.5rem", fontWeight: 700,
          color: "rgba(var(--accent-rgb),0.05)", lineHeight: 1, pointerEvents: "none",
        }}>{cat.num}</div>

        <div style={{ fontSize: "1.3rem", marginBottom: "0.75rem" }}>{cat.icon}</div>
        <div style={{
          fontFamily: "var(--font-mono)", fontSize: "0.65rem",
          letterSpacing: "0.15em", textTransform: "uppercase",
          color: "var(--accent)", marginBottom: "1.75rem",
        }}>{cat.title}</div>

        <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
          {cat.skills.map((skill, si) => (
            <li key={skill.name} style={{ display: "flex", flexDirection: "column", gap: "0.4rem" }}>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <span style={{ fontSize: "0.87rem", fontWeight: 500 }}>{skill.name}</span>
                <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.67rem", color: "var(--text-muted)" }}>
                  {skill.pct}%
                </span>
              </div>
              {/* Bar */}
              <div style={{ height: "1.5px", background: "var(--border)", position: "relative", overflow: "hidden" }}>
                <motion.div
                  initial={{ width: 0 }}
                  animate={inView ? { width: `${skill.pct}%` } : {}}
                  transition={{ duration: 1.4, delay: si * 0.08 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  style={{
                    position: "absolute", top: 0, left: 0, height: "100%",
                    background: "linear-gradient(to right, var(--accent), var(--accent2))",
                  }}
                />
              </div>
            </li>
          ))}
        </ul>
      </motion.div>
    </FadeUp>
  );
}
