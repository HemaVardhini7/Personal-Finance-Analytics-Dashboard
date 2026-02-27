// src/components/ChartTooltip.jsx
export default function ChartTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;

  return (
    <div style={{
      background: "var(--surface2)",
      border: "1px solid var(--border)",
      borderRadius: 10,
      padding: "12px 16px",
      fontFamily: "'DM Mono', monospace",
      fontSize: 12,
    }}>
      <div style={{ color: "var(--muted)", marginBottom: 8 }}>{label}</div>
      {payload.map((p, i) => (
        <div key={i} style={{ color: p.color, marginBottom: 4 }}>
          {p.name}:{" "}
          <span style={{ color: "var(--text)" }}>
            ${p.value?.toLocaleString()}
          </span>
        </div>
      ))}
    </div>
  );
}
