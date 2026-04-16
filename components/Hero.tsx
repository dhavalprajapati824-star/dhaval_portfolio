"use client";
import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const EASE = "easeOut" as const;

const rise = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.85, delay, ease: EASE },
});

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        alignItems: "center",
        padding: "8rem 4rem 5rem",
        position: "relative",
        overflow: "hidden",
        gap: "3rem",
      }}
    >
      {/* Background orbs */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <motion.div
          animate={{ x: [0, 28, -14, 0], y: [0, -20, 28, 0], scale: [1, 1.06, 0.97, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          style={{
            position: "absolute", top: -120, left: -80,
            width: 560, height: 560, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(var(--accent-rgb),0.11), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        <motion.div
          animate={{ x: [0, -20, 18, 0], y: [0, 24, -16, 0] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          style={{
            position: "absolute", bottom: -80, right: -80,
            width: 440, height: 440, borderRadius: "50%",
            background: "radial-gradient(circle, rgba(123,159,204,0.08), transparent 70%)",
            filter: "blur(100px)",
          }}
        />
        {/* Grid lines */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: "linear-gradient(rgba(var(--accent-rgb),0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(var(--accent-rgb),0.03) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage: "radial-gradient(ellipse 70% 80% at 30% 50%, black 20%, transparent 100%)",
        }} />
      </div>

      {/* Left: Text */}
      <div style={{ position: "relative", zIndex: 2 }}>
        {/* Available badge */}
        <motion.div {...rise(0.1)} style={{
          display: "inline-flex", alignItems: "center", gap: "0.6rem",
          padding: "0.45rem 1rem",
          border: "1px solid var(--border2)",
          background: "var(--surface)",
          fontFamily: "var(--font-mono)",
          fontSize: "0.63rem", letterSpacing: "0.16em", textTransform: "uppercase",
          color: "var(--accent)", marginBottom: "1.75rem",
        }}>
          <motion.span
            animate={{ scale: [1, 1.4, 1] }}
            transition={{ duration: 2.2, repeat: Infinity }}
            style={{ width: 7, height: 7, borderRadius: "50%", background: "var(--green)", display: "inline-block" }}
          />
          Open to Opportunities
        </motion.div>

        {/* Name */}
        <motion.h1 {...rise(0.25)} style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(3.8rem, 7vw, 6.8rem)",
          fontWeight: 700, lineHeight: 0.92,
          letterSpacing: "-0.02em", marginBottom: "1rem",
        }}>
          Dhaval<br />
          <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>Prajapati</em>
        </motion.h1>

        {/* Role */}
        <motion.div {...rise(0.42)} style={{
          display: "flex", alignItems: "center", gap: "0.75rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.8rem", letterSpacing: "0.1em",
          color: "var(--text-muted)", marginBottom: "1.75rem",
        }}>
          <span style={{ display: "block", width: 30, height: 1, background: "var(--accent)" }} />
          Quality Analyst &amp; QA Engineer
        </motion.div>

        {/* Description */}
        <motion.p {...rise(0.56)} style={{
          fontSize: "1rem", lineHeight: 1.88,
          color: "var(--text-muted)", maxWidth: 480, marginBottom: "2.5rem",
        }}>
          With over 8 years of experience in quality assurance, I am adept at ensuring product excellence and customer satisfaction.
        </motion.p>

        {/* CTAs */}
        <motion.div {...rise(0.7)} style={{ display: "flex", gap: "0.875rem", flexWrap: "wrap" }}>
          <motion.a
            href="#projects"
            data-hover
            whileHover={{ opacity: 0.85, y: -3, boxShadow: "0 14px 40px rgba(var(--accent-rgb), 0.35)" }}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 1.875rem",
              background: "var(--accent)", color: "var(--bg)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase",
              fontWeight: 500, textDecoration: "none", cursor: "none",
            }}
          >
            Explore Work →
          </motion.a>
          <motion.a
            href="#contact"
            data-hover
            whileHover={{ borderColor: "var(--accent)", color: "var(--accent)", y: -3 } as any}
            style={{
              display: "inline-flex", alignItems: "center", gap: "0.5rem",
              padding: "0.875rem 1.875rem",
              border: "1.5px solid var(--border2)", color: "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase",
              textDecoration: "none", cursor: "none",
              transition: "border-color 0.25s, color 0.25s",
            }}
          >
            Get In Touch
          </motion.a>
        </motion.div>

        {/* Location */}
        <motion.div {...rise(0.84)} style={{
          display: "flex", alignItems: "center", gap: "0.4rem",
          marginTop: "2rem",
          fontFamily: "var(--font-mono)",
          fontSize: "0.65rem", letterSpacing: "0.08em",
          color: "var(--text-subtle)",
        }}>
          <MapPin size={12} style={{ color: "var(--accent)" }} />
          Nadiad, Gujarat, India · Remote / Hybrid
        </motion.div>
      </div>

      {/* Right: Stats */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.9, delay: 0.9, ease: EASE }}
        style={{ position: "relative", zIndex: 2, display: "flex", flexDirection: "column", gap: "1rem" }}
        className="hidden lg:flex"
      >
        <StatCard num="8+" label="Years of Experience" big />
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
          <StatCard num="500+" label="Projects Tested" />
          <StatCard num="99%" label="Quality Rate" />
        </div>
        <AvailCard />
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        style={{
          position: "absolute", bottom: "2.5rem", left: "50%",
          transform: "translateX(-50%)",
          display: "flex", flexDirection: "column", alignItems: "center", gap: "0.6rem",
        }}
      >
        <motion.div
          animate={{ scaleY: [1, 0.55, 1], opacity: [1, 0.4, 1], y: [0, 10, 0] }}
          transition={{ duration: 2.4, repeat: Infinity }}
          style={{ width: 1, height: 52, background: "linear-gradient(var(--accent), transparent)" }}
        />
        <span style={{
          fontFamily: "var(--font-mono)",
          fontSize: "0.52rem", letterSpacing: "0.22em", textTransform: "uppercase",
          color: "var(--text-subtle)", writingMode: "vertical-rl",
        }}>Scroll</span>
      </motion.div>
    </section>
  );
}

function StatCard({ num, label, big }: { num: string; label: string; big?: boolean }) {
  return (
    <motion.div
      data-hover
      whileHover={{ x: 6, borderColor: "var(--border2)" } as any}
      style={{
        background: "var(--surface)", border: "1px solid var(--border)",
        padding: big ? "1.75rem 2rem" : "1.25rem 1.5rem",
        position: "relative", overflow: "hidden",
        transition: "border-color 0.3s",
      }}
    >
      <motion.div
        initial={{ scaleY: 0 }}
        whileHover={{ scaleY: 1 } as any}
        style={{
          position: "absolute", left: 0, top: 0, bottom: 0, width: 2,
          background: "var(--accent)", transformOrigin: "bottom",
        }}
        transition={{ duration: 0.3 }}
      />
      <div style={{
        fontFamily: "var(--font-display)",
        fontSize: big ? "3.2rem" : "2.2rem",
        fontWeight: 700, color: "var(--accent)", lineHeight: 1, marginBottom: "0.3rem",
      }}>{num}</div>
      <div style={{
        fontFamily: "var(--font-mono)",
        fontSize: "0.6rem", letterSpacing: "0.14em",
        textTransform: "uppercase", color: "var(--text-muted)",
      }}>{label}</div>
    </motion.div>
  );
}

function AvailCard() {
  return (
    <div style={{
      background: "var(--surface)", border: "1px solid var(--border)",
      padding: "1.1rem 1.5rem",
    }}>
      <div style={{
        display: "inline-flex", alignItems: "center", gap: "0.5rem",
        padding: "0.3rem 0.75rem",
        background: "rgba(93,184,148,0.08)",
        border: "1px solid rgba(93,184,148,0.22)",
        color: "var(--green)",
        fontFamily: "var(--font-mono)", fontSize: "0.62rem", letterSpacing: "0.1em",
      }}>
        <motion.span
          animate={{ scale: [1, 1.5, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--green)", display: "inline-block" }}
        />
        Available for Hire
      </div>
      <div style={{
        fontFamily: "var(--font-mono)", fontSize: "0.62rem",
        letterSpacing: "0.06em", color: "var(--text-muted)", marginTop: "0.4rem",
      }}>Gujarat · Remote / Hybrid</div>
    </div>
  );
}
