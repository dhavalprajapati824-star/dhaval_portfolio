"use client";
import { motion } from "framer-motion";

export default function Footer() {
  const socials = [
    { label: "Li", href: "https://linkedin.com" },
    { label: "Gh", href: "https://github.com" },
    { label: "Tw", href: "https://twitter.com" },
  ];

  return (
    <footer style={{
      padding: "2.25rem 4rem",
      borderTop: "1px solid var(--border)",
      background: "var(--surface)",
      display: "flex", alignItems: "center",
      justifyContent: "space-between", flexWrap: "wrap", gap: "1rem",
    }}>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "0.62rem",
        letterSpacing: "0.1em", color: "var(--text-subtle)",
      }}>
        © 2026 Dhaval Prajapati · Quality Analyst · Gujarat, India
      </div>

      <div style={{ display: "flex", gap: "0.625rem" }}>
        {socials.map((s) => (
          <motion.a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            data-hover
            whileHover={{ borderColor: "var(--accent)", color: "var(--accent)", y: -3 } as any}
            style={{
              width: 34, height: 34,
              border: "1px solid var(--border)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--text-muted)",
              fontFamily: "var(--font-mono)", fontSize: "0.72rem",
              textDecoration: "none", cursor: "none",
              transition: "border-color 0.25s, color 0.25s",
            }}
          >
            {s.label}
          </motion.a>
        ))}
      </div>

      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: "1.1rem", fontStyle: "italic", color: "var(--accent)",
      }}>
        Crafting Quality.
      </div>
    </footer>
  );
}
