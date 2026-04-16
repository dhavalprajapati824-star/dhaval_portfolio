"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "./ThemeProvider";
import { Sun, Moon, Menu, X } from "lucide-react";

const links = ["About", "Skills", "Projects", "Experience", "Contact"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 500,
          padding: "1.25rem 4rem",
          display: "flex", alignItems: "center", justifyContent: "space-between",
          background: scrolled ? "var(--glass)" : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
          transition: "background 0.4s, border-color 0.4s, backdrop-filter 0.4s",
        }}
      >
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.04 }}
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "1.5rem", fontWeight: 600,
            color: "var(--accent)", letterSpacing: "0.02em", cursor: "none",
          }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          D<span style={{ fontStyle: "italic", fontWeight: 300 }}>haval.</span>
        </motion.div>

        {/* Desktop Links */}
        <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", alignItems: "center" }}
          className="hidden md:flex">
          {links.map((l) => (
            <li key={l}>
              <NavLink label={l} onClick={() => scrollTo(l)} />
            </li>
          ))}
        </ul>

        {/* Controls */}
        <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
          {/* Theme toggle */}
          <motion.button
            data-hover
            whileHover={{ scale: 1.1, rotate: 15 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggle}
            style={{
              width: 38, height: 38, borderRadius: "50%",
              background: "var(--surface)",
              border: "1.5px solid var(--border2)",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "var(--accent)", cursor: "none",
            }}
          >
            {theme === "dark" ? <Sun size={15} /> : <Moon size={15} />}
          </motion.button>

          {/* Hire me (desktop) */}
          <motion.a
            href="#contact"
            data-hover
            whileHover={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
            style={{
              padding: "0.5rem 1.25rem",
              border: "1.5px solid var(--accent)",
              fontFamily: "var(--font-mono)",
              fontSize: "0.68rem", letterSpacing: "0.12em", textTransform: "uppercase",
              color: "var(--accent)", textDecoration: "none",
              transition: "background 0.25s, color 0.25s",
              cursor: "none",
            }}
            className="hidden md:inline-flex"
          >
            Hire Me
          </motion.a>

          {/* Hamburger (mobile) */}
          <button
            data-hover
            onClick={() => setMobileOpen(!mobileOpen)}
            style={{ background: "none", border: "none", color: "var(--text-muted)", cursor: "none", display: "flex" }}
            className="md:hidden"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            style={{
              position: "fixed", inset: 0, zIndex: 490,
              background: "var(--bg)",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center", gap: "2.5rem",
            }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l}
                data-hover
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => scrollTo(l)}
                style={{
                  background: "none", border: "none",
                  fontFamily: "var(--font-display)",
                  fontSize: "3rem", fontWeight: 600,
                  color: "var(--text)", cursor: "none",
                  transition: "color 0.2s",
                }}
                whileHover={{ color: "var(--accent)" } as any}
              >
                {l}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function NavLink({ label, onClick }: { label: string; onClick: () => void }) {
  const [hov, setHov] = useState(false);
  return (
    <motion.button
      data-hover
      onHoverStart={() => setHov(true)}
      onHoverEnd={() => setHov(false)}
      onClick={onClick}
      style={{
        background: "none", border: "none",
        fontFamily: "var(--font-mono)",
        fontSize: "0.68rem", letterSpacing: "0.14em", textTransform: "uppercase",
        color: hov ? "var(--text)" : "var(--text-muted)",
        cursor: "none", position: "relative", transition: "color 0.2s",
      }}
    >
      {label}
      <motion.span
        animate={{ scaleX: hov ? 1 : 0 }}
        style={{
          position: "absolute", bottom: -4, left: 0, right: 0, height: 1,
          background: "var(--accent)", transformOrigin: "left",
        }}
        transition={{ duration: 0.25 }}
      />
    </motion.button>
  );
}
