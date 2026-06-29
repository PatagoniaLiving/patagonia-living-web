"use client";
import { useState } from "react";
import { SITE } from "@/lib/content";

const field: React.CSSProperties = {
  width: "100%",
  background: "#fff",
  border: "1px solid rgba(15,14,12,0.16)",
  borderRadius: 8,
  padding: "14px 16px",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 15,
  fontWeight: 300,
  color: "#0f0e0c",
  minHeight: 50,
  outline: "none",
};

const labelStyle: React.CSSProperties = {
  display: "block",
  fontFamily: "'Montserrat', sans-serif",
  fontSize: 10, fontWeight: 500,
  letterSpacing: "0.14em", textTransform: "uppercase",
  color: "#8a8480", marginBottom: 8,
};

export default function PlanClient() {
  const [form, setForm] = useState({
    name: "", email: "", destination: "Not sure yet",
    dates: "", group: "", message: "",
  });

  const set = (k: string, v: string) => setForm((f) => ({ ...f, [k]: v }));

  const buildText = () =>
    `Hi Patagonia Living, I'd like to plan a ski trip.\n\n` +
    `Name: ${form.name || "—"}\n` +
    `Email: ${form.email || "—"}\n` +
    `Destination: ${form.destination}\n` +
    `Dates: ${form.dates || "—"}\n` +
    `Group size: ${form.group || "—"}\n\n` +
    `${form.message || ""}`.trim();

  const submitWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `${SITE.whatsappUrl}?text=${encodeURIComponent(buildText())}`;
    window.open(url, "_blank", "noopener");
  };

  const mailHref =
    `mailto:${SITE.email}` +
    `?subject=${encodeURIComponent("Trip enquiry — Patagonia Living")}` +
    `&body=${encodeURIComponent(buildText())}`;

  return (
    <div
      className="r-two"
      style={{ display: "grid", gap: "clamp(40px,6vw,88px)", alignItems: "start" }}
    >
      {/* Form */}
      <form onSubmit={submitWhatsApp} className="reveal">
        <div style={{ display: "flex", flexDirection: "column", gap: 22 }}>
          <div className="r-two" style={{ display: "grid", gap: 22 }}>
            <div>
              <label style={labelStyle} htmlFor="name">Name</label>
              <input id="name" style={field} value={form.name}
                onChange={(e) => set("name", e.target.value)} placeholder="Your name" />
            </div>
            <div>
              <label style={labelStyle} htmlFor="email">Email</label>
              <input id="email" type="email" style={field} value={form.email}
                onChange={(e) => set("email", e.target.value)} placeholder="you@email.com" />
            </div>
          </div>

          <div className="r-two" style={{ display: "grid", gap: 22 }}>
            <div>
              <label style={labelStyle} htmlFor="destination">Destination</label>
              <select id="destination" style={field} value={form.destination}
                onChange={(e) => set("destination", e.target.value)}>
                <option>Not sure yet</option>
                <option>Patagonia</option>
                <option>United States</option>
                <option>Europe</option>
                <option>A mix</option>
              </select>
            </div>
            <div>
              <label style={labelStyle} htmlFor="group">Group size</label>
              <input id="group" style={field} value={form.group}
                onChange={(e) => set("group", e.target.value)} placeholder="e.g. 2 adults, 2 kids" />
            </div>
          </div>

          <div>
            <label style={labelStyle} htmlFor="dates">Approximate dates</label>
            <input id="dates" style={field} value={form.dates}
              onChange={(e) => set("dates", e.target.value)} placeholder="e.g. mid-August, 7 nights" />
          </div>

          <div>
            <label style={labelStyle} htmlFor="message">Anything else</label>
            <textarea id="message" rows={4} style={{ ...field, resize: "vertical" }}
              value={form.message}
              onChange={(e) => set("message", e.target.value)}
              placeholder="Level, must-haves, special occasions…" />
          </div>

          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 4 }}>
            <button type="submit" className="btn-bronze" style={{ border: "none" }}>
              Send via WhatsApp
            </button>
            <a href={mailHref} className="btn-outline-dark">Send by email</a>
          </div>
          <p style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 11.5, fontWeight: 300,
            color: "#8a8480", lineHeight: 1.7, marginTop: 4,
          }}>
            We reply with a tailored proposal within 24 hours. No commitment.
          </p>
        </div>
      </form>

      {/* Direct contact */}
      <aside
        className="reveal reveal-d1 plan-aside"
        style={{
          background: "#0A0C0F",
          borderRadius: 14,
          padding: "clamp(28px,3.5vw,44px)",
        }}
      >
        <p className="eyebrow" style={{ color: "#B8965A", marginBottom: 22 }}>Or reach us directly</p>

        <a
          href={SITE.whatsappUrl}
          target="_blank" rel="noopener"
          style={{
            display: "flex", alignItems: "center", gap: 12,
            padding: "16px 20px", borderRadius: 10,
            background: "#25D366", marginBottom: 14,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 12, fontWeight: 600,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: "#fff",
          }}
        >
          WhatsApp · chat now
        </a>

        <a
          href={`mailto:${SITE.email}`}
          style={{
            display: "block",
            padding: "16px 20px", borderRadius: 10,
            border: "1px solid rgba(242,239,232,0.18)",
            marginBottom: 28,
            fontFamily: "'Montserrat', sans-serif",
            fontSize: 13, fontWeight: 300,
            color: "rgba(242,239,232,0.85)",
            wordBreak: "break-word",
          }}
        >
          {SITE.email}
        </a>

        <div style={{ borderTop: "1px solid rgba(242,239,232,0.10)", paddingTop: 24 }}>
          {[
            ["Where", "Andes · Rockies · Alps"],
            ["Hours", "Worldwide · 24/7 in season"],
            ["Response", "Tailored proposal within 24h"],
          ].map(([k, v]) => (
            <div key={k} style={{ display: "flex", justifyContent: "space-between", gap: 16, padding: "10px 0" }}>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 10, fontWeight: 500, letterSpacing: "0.14em",
                textTransform: "uppercase", color: "rgba(242,239,232,0.4)",
              }}>{k}</span>
              <span style={{
                fontFamily: "'Montserrat', sans-serif",
                fontSize: 12.5, fontWeight: 300,
                color: "rgba(242,239,232,0.8)", textAlign: "right",
              }}>{v}</span>
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
}
