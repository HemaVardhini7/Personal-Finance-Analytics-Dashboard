// src/components/BudgetCard.jsx
import { spendColor } from "../utils/formatters";

export default function BudgetCard({ budget }) {
  const { cat, limit, spent, color } = budget;
  const pct = Math.round((spent / limit) * 100);
  const remaining = limit - spent;

  return (
    <div style={{
      background: "var(--surface)",
      border: "1px solid var(--border)",
      borderRadius: 16,
      padding: 28,
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 20 }}>
        <div>
          <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 4 }}>{cat}</div>
          <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)" }}>
            ${spent} of ${limit}
          </div>
        </div>
        <div style={{
          fontFamily: "'DM Mono', monospace",
          fontSize: 22, fontWeight: 700,
          color: spendColor(pct),
        }}>
          {pct}%
        </div>
      </div>

      {/* Progress bar */}
      <div style={{ height: 6, background: "var(--surface2)", borderRadius: 99, overflow: "hidden" }}>
        <div style={{
          height: "100%",
          width: `${pct}%`,
          background: pct > 90 ? "var(--red)" : color,
          borderRadius: 99,
          transition: "width 0.6s ease",
        }} />
      </div>

      <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)", marginTop: 12 }}>
        ${remaining} remaining this month
      </div>
    </div>
  );
}
