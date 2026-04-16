"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Link2, MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import FadeUp from "./FadeUp";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 3500);
  };

  return (
    <section id="contact" style={{ padding: "7rem 4rem", background: "var(--bg2)" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        <SectionHeader num="05" title="Let's Connect" />
        <div style={{
          display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "5rem", alignItems: "start",
        }} className="contact-grid">

          {/* Left */}
          <FadeUp>
            <h3 style={{
              fontFamily: "var(--font-display)",
              fontSize: "clamp(2.2rem, 3.5vw, 3rem)",
              fontWeight: 600, lineHeight: 1.1, marginBottom: "1.1rem",
            }}>
              Let&apos;s build<br />
              something{" "}
              <em style={{ fontStyle: "italic", color: "var(--accent)", fontWeight: 300 }}>excellent</em>
              <br />together.
            </h3>
            <p style={{
              fontSize: "0.95rem", lineHeight: 1.88,
              color: "var(--text-muted)", marginBottom: "2.25rem",
            }}>
              Whether you need a dedicated QA professional, want to discuss testing strategy, or are looking for
              someone passionate about quality — I&apos;d love to hear from you.
            </p>

            {/* Channels */}
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              <Channel icon={<Mail size={18} />} label="Email" value="dhaval.prajapati@gmail.com" href="mailto:dhaval.prajapati@gmail.com" />
              <Channel icon={<Link2 size={18} />} label="Phone" value="+91 99091 55425" />
              <Channel icon={<Link2 size={18} />} label="LinkedIn" value="linkedin.com/in/dhavalprajapati" href="https://linkedin.com" />
              <Channel icon={<MapPin size={18} />} label="Location" value="Nadiad, Gujarat, India · Open to Remote" />
            </div>
          </FadeUp>

          {/* Form */}
          <FadeUp delay={0.2}>
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0.875rem" }} className="form-row">
                <Field label="Your Name" placeholder="John Doe" type="text" />
                <Field label="Email" placeholder="john@example.com" type="email" />
              </div>
              <Field label="Subject" placeholder="QA Opportunity / Collaboration" type="text" />
              <Field label="Message" placeholder="Tell me about your project..." type="textarea" />

              <motion.button
                data-hover
                type="submit"
                whileHover={{ y: -3, boxShadow: "0 14px 40px rgba(var(--accent-rgb), 0.3)", opacity: 0.9 }}
                whileTap={{ scale: 0.97 }}
                animate={{ background: sent ? "var(--green)" : "var(--accent)" }}
                style={{
                  alignSelf: "flex-start",
                  display: "flex", alignItems: "center", gap: "0.75rem",
                  padding: "0.95rem 2.25rem",
                  color: "var(--bg)", border: "none",
                  fontFamily: "var(--font-mono)",
                  fontSize: "0.72rem", letterSpacing: "0.12em", textTransform: "uppercase",
                  fontWeight: 500, cursor: "none",
                  transition: "background 0.3s",
                }}
              >
                {sent ? "✓ Message Sent!" : "Send Message →"}
              </motion.button>
            </form>
          </FadeUp>
        </div>
      </div>
      <style>{`
        @media(max-width:900px){.contact-grid{grid-template-columns:1fr !important;gap:3rem !important}}
        @media(max-width:580px){.form-row{grid-template-columns:1fr !important}}
      `}</style>
    </section>
  );
}

function Field({ label, placeholder, type }: { label: string; placeholder: string; type: string }) {
  const isTextarea = type === "textarea";
  const shared: React.CSSProperties = {
    background: "var(--surface)", border: "1.5px solid var(--border)",
    color: "var(--text)", padding: "0.8rem 1rem",
    fontFamily: "var(--font-sans)", fontSize: "0.9rem",
    outline: "none", borderRadius: 0, width: "100%",
    transition: "border-color 0.25s, background 0.4s",
  };
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "0.45rem" }}>
      <label style={{
        fontFamily: "var(--font-mono)", fontSize: "0.6rem",
        letterSpacing: "0.12em", textTransform: "uppercase", color: "var(--text-muted)",
      }}>{label}</label>
      {isTextarea ? (
        <textarea
          placeholder={placeholder}
          rows={5}
          onFocus={(e) => { e.target.style.borderColor = "rgba(var(--accent-rgb),0.5)"; e.target.style.background = "var(--surface2)"; }}
          onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.background = "var(--surface)"; }}
          style={{ ...shared, resize: "none" }}
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          onFocus={(e) => { e.target.style.borderColor = "rgba(var(--accent-rgb),0.5)"; e.target.style.background = "var(--surface2)"; }}
          onBlur={(e) => { e.target.style.borderColor = "var(--border)"; e.target.style.background = "var(--surface)"; }}
          style={shared}
        />
      )}
    </div>
  );
}

function Channel({ icon, label, value, href }: { icon: React.ReactNode; label: string; value: string; href?: string }) {
  const content = (
    <motion.div
      data-hover
      whileHover={{ x: 6, borderColor: "var(--border2)" } as any}
      style={{
        display: "flex", alignItems: "center", gap: "1.1rem",
        padding: "1.1rem 1.375rem",
        background: "var(--surface)", border: "1px solid var(--border)",
        transition: "border-color 0.25s",
        cursor: href ? "none" : "default",
        textDecoration: "none", color: "inherit",
      }}
    >
      <div style={{
        width: 38, height: 38, flexShrink: 0,
        background: "rgba(var(--accent-rgb),0.08)",
        display: "flex", alignItems: "center", justifyContent: "center",
        color: "var(--accent)",
      }}>{icon}</div>
      <div>
        <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.6rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--text-muted)", marginBottom: "0.2rem" }}>{label}</div>
        <div style={{ fontSize: "0.88rem", fontWeight: 500 }}>{value}</div>
      </div>
      {href && <span style={{ marginLeft: "auto", color: "var(--text-subtle)", fontSize: "0.8rem" }}>→</span>}
    </motion.div>
  );
  return href ? <a href={href} target="_blank" rel="noopener noreferrer">{content}</a> : content;
}
