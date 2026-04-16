"use client";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

const projects = [
  {
    num: "01", domain: "E-Commerce",
    title: "Multi-Platform Shopping App QA",
    desc: "Led end-to-end QA for a large-scale e-commerce platform across iOS, Android, and web. Designed 500+ test cases covering checkout flows, payment gateways, and inventory sync.",
    tags: ["Manual Testing", "Mobile QA", "Regression", "UAT", "Jira"],
    status: "Delivered",
  },
  {
    num: "02", domain: "FinTech",
    title: "Banking Mobile App Security QA",
    desc: "Comprehensive QA for a banking application ensuring data security, transaction accuracy, and regulatory compliance. Thorough negative testing and boundary value analysis via Postman.",
    tags: ["Security Testing", "API Testing", "Compliance", "Postman", "Mobile"],
    status: "Delivered",
  },
  {
    num: "03", domain: "Healthcare",
    title: "Patient Management System QA",
    desc: "End-to-end testing of a complex healthcare web platform. Validated HIPAA compliance, data integrity, and critical patient workflows targeting a zero-defect release.",
    tags: ["Web Testing", "HIPAA", "Test Planning", "Data Integrity"],
    status: "Delivered",
  },
  {
    num: "04", domain: "EdTech",
    title: "Learning Platform Cross-Browser QA",
    desc: "Verified full functionality across 12+ browsers and devices for an educational SaaS. Built a comprehensive suite covering video streaming, quizzes, and real-time collaboration.",
    tags: ["Cross-Browser", "Performance", "Exploratory", "TestRail"],
    status: "Delivered",
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "7rem 4rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="03" title="Projects" />
        <div style={{
          display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "1.25rem",
        }} className="proj-grid">
          {projects.map((p, i) => (
            <FadeUp key={p.num} delay={i * 0.13}>
              <ProjectCard project={p} />
            </FadeUp>
          ))}
        </div>
      </div>
      <style>{`@media(max-width:768px){.proj-grid{grid-template-columns:1fr !important}}`}</style>
    </section>
  );
}

function ProjectCard({ project }: { project: typeof projects[0] }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX  = useMotionValue(0.5);
  const mouseY  = useMotionValue(0.5);

  const glowX = useTransform(mouseX, [0, 1], ["0%", "100%"]);
  const glowY = useTransform(mouseY, [0, 1], ["0%", "100%"]);

  const handleMove = (e: React.MouseEvent) => {
    const rect = cardRef.current!.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width);
    mouseY.set((e.clientY - rect.top) / rect.height);
  };

  return (
    <motion.div
      ref={cardRef}
      data-hover
      onMouseMove={handleMove}
      whileHover={{ y: -8, borderColor: "var(--border2)", boxShadow: `0 28px 70px var(--shadow)` } as any}
      style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        padding: "2.5rem", position: "relative", overflow: "hidden",
        cursor: "none",
        transition: "border-color 0.3s, box-shadow 0.4s, background 0.5s",
      }}
    >
      {/* Mouse-tracking glow */}
      <motion.div
        style={{
          position: "absolute", inset: 0, pointerEvents: "none",
          opacity: 0,
          background: `radial-gradient(circle at 50% 50%, rgba(var(--accent-rgb),0.07), transparent 55%)`,
        }}
        whileHover={{ opacity: 1 } as any}
      />

      {/* Ghost number */}
      <div style={{
        position: "absolute", bottom: 14, right: 20,
        fontFamily: "var(--font-display)", fontSize: "7rem", fontWeight: 700,
        lineHeight: 1, color: "rgba(var(--accent-rgb),0.04)", pointerEvents: "none",
        transition: "color 0.3s",
      }}>{project.num}</div>

      {/* Domain */}
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "0.6rem",
        letterSpacing: "0.16em", textTransform: "uppercase",
        color: "var(--accent2)", marginBottom: "0.875rem",
        display: "flex", alignItems: "center", gap: "0.5rem",
      }}>
        <span style={{ display: "block", width: 18, height: 1, background: "var(--accent2)" }} />
        {project.domain}
      </div>

      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.5rem", fontWeight: 600, lineHeight: 1.2, marginBottom: "0.875rem",
      }}>{project.title}</h3>

      <p style={{
        fontSize: "0.87rem", lineHeight: 1.77,
        color: "var(--text-muted)", marginBottom: "1.5rem",
      }}>{project.desc}</p>

      {/* Tags */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.375rem", marginBottom: "1.75rem" }}>
        {project.tags.map((tag) => (
          <span key={tag} style={{
            padding: "0.25rem 0.7rem",
            background: "rgba(var(--accent-rgb),0.06)",
            border: "1px solid rgba(var(--accent-rgb),0.12)",
            fontFamily: "var(--font-mono)", fontSize: "0.6rem",
            letterSpacing: "0.07em", color: "var(--text-muted)",
          }}>{tag}</span>
        ))}
      </div>

      {/* Footer */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <span style={{
          display: "flex", alignItems: "center", gap: "0.45rem",
          fontFamily: "var(--font-mono)", fontSize: "0.6rem",
          letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--green)",
        }}>
          <motion.span
            animate={{ scale: [1, 1.5, 1] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block" }}
          />
          {project.status}
        </span>
        <motion.a
          href="#"
          data-hover
          whileHover={{ gap: "0.75rem" } as any}
          style={{
            display: "flex", alignItems: "center", gap: "0.45rem",
            fontFamily: "var(--font-mono)", fontSize: "0.68rem",
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "var(--accent)", textDecoration: "none",
            transition: "gap 0.2s",
          }}
        >
          View Details →
        </motion.a>
      </div>
    </motion.div>
  );
}
