// src/components/InsightCard.jsx
export default function InsightCard({ icon, title, desc, color }) {
  return (
    <div style={{
      background: "var(--surface2)",
      borderRadius: 12,
      padding: 20,
      borderLeft: `3px solid ${color}`,
    }}>
      <div style={{ fontSize: 22, marginBottom: 10 }}>{icon}</div>
      <div style={{ fontWeight: 700, fontSize: 13, marginBottom: 6 }}>{title}</div>
      <div style={{ fontSize: 12, color: "var(--muted)", lineHeight: 1.6 }}>{desc}</div>
    </div>
  );
}
