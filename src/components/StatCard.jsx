// src/components/StatCard.jsx
export default function StatCard({ label, value, sub, accent, trend }) {
  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 16,
      padding: "24px 28px",
      position: "relative",
      overflow: "hidden",
    }}>
      {/* top accent stripe */}
      <div style={{
        position: "absolute", top: 0, left: 0, right: 0, height: 2,
        background: accent || "var(--accent)",
        opacity: 0.8,
      }} />

      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 11,
        color: "var(--muted)",
        letterSpacing: "0.15em",
        textTransform: "uppercase",
        marginBottom: 12,
      }}>
        {label}
      </div>

      <div style={{ fontSize: 28, fontWeight: 800, letterSpacing: "-0.03em", marginBottom: 6 }}>
        {value}
      </div>

      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 12,
        color: trend > 0 ? "var(--green)" : trend < 0 ? "var(--red)" : "var(--muted)",
      }}>
        {trend > 0 ? "↑ " : trend < 0 ? "↓ " : ""}{sub}
      </div>
    </div>
  );
}
