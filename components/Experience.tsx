"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import SectionHeader from "./SectionHeader";

const jobs = [
  {
    period: "2023 — Present",
    title: "Senior Quality Analyst",
    company: "Techrupt Innovations",
    desc: "Senior software QA tester with full system development lifecycle experience, including test plans, test cases, and test processes. Hands-on technology professional accustomed to working in complex, project-based projects. Multifaceted experience in QA software testing and user-acceptance testing.",
    achievements: [
      // "Reduced post-release defects by 40% through structured regression suites",
      // "Implemented TestRail-based test case management across 3 active projects",
      // "Collaborated with 5+ cross-functional teams in Agile sprints",
    ],
  },
  {
    period: "2016 — 2013",
    title: "Senior Quality Analyst",
    company: "Goovy Technoweb Pvt ltd.",
    desc: "Detail-oriented Quality Analyst with experience in manual and functional testing across web and mobile applications. Skilled in creating test cases, executing test plans, identifying defects, and ensuring high-quality product delivery. Worked closely with development teams to improve software performance, usability, and reliability.",
    achievements: [
      // "Documented 200+ bugs with detailed reproduction steps and severity ratings",
      // "Built foundational expertise in STLC and defect lifecycle management",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: "7rem 4rem", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="04" title="Experience" />
        <div style={{ position: "relative", paddingLeft: "2rem", maxWidth: 760 }}>
          {/* Vertical line */}
          <div style={{
            position: "absolute", left: 0, top: 0, bottom: 0, width: 1,
            background: "linear-gradient(to bottom, var(--accent), transparent)",
          }} />
          {jobs.map((job, i) => <TimelineItem key={job.period} job={job} index={i} />)}
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ job, index }: { job: typeof jobs[0]; index: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.65, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      style={{ position: "relative", marginBottom: "3.25rem" }}
    >
      {/* Dot */}
      <motion.div
        whileHover={{ backgroundColor: "var(--accent)" } as any}
        style={{
          position: "absolute", left: -34, top: 6,
          width: 10, height: 10, borderRadius: "50%",
          border: "1.5px solid var(--accent)",
          background: "var(--bg)",
          transition: "background 0.25s",
        }}
      />

      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "0.62rem",
        letterSpacing: "0.12em", textTransform: "uppercase",
        color: "var(--accent)", marginBottom: "0.5rem",
      }}>{job.period}</div>

      <h3 style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.4rem", fontWeight: 600, marginBottom: "0.25rem",
      }}>{job.title}</h3>

      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "0.72rem",
        color: "var(--text-muted)", marginBottom: "0.875rem",
      }}>{job.company}</div>

      <p style={{ fontSize: "0.9rem", lineHeight: 1.8, color: "var(--text-muted)", marginBottom: "0.875rem" }}>
        {job.desc}
      </p>

      <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
        {job.achievements.map((a) => (
          <li key={a} style={{ display: "flex", gap: "0.625rem", fontSize: "0.85rem", color: "var(--text-muted)" }}>
            <span style={{ color: "var(--accent)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", marginTop: 1, flexShrink: 0 }}>→</span>
            {a}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
