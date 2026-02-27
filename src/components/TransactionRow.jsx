// src/components/TransactionRow.jsx
import { formatCurrency } from "../utils/formatters";

export default function TransactionRow({ tx, compact = false }) {
  return (
    <div style={{
      display: compact ? "flex" : "grid",
      gridTemplateColumns: compact ? undefined : "1fr 1fr 1fr 1fr",
      alignItems: "center",
      justifyContent: compact ? "space-between" : undefined,
      padding: compact ? "14px 16px" : "18px 24px",
      borderRadius: compact ? 10 : 0,
      background: compact ? "var(--surface2)" : "transparent",
      marginBottom: compact ? 4 : 0,
    }}>
      {/* Name + icon */}
      <div style={{ display: "flex", alignItems: "center", gap: compact ? 14 : 12 }}>
        <div style={{ fontSize: 20 }}>{tx.icon}</div>
        <div>
          <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{tx.name}</div>
          <div style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 10,
            color: "var(--muted)",
          }}>
            {tx.cat} · {tx.date}
          </div>
        </div>
      </div>

      {/* Category badge (table view only) */}
      {!compact && (
        <div>
          <span style={{
            fontFamily: "'DM Mono', monospace", fontSize: 11,
            padding: "4px 10px", borderRadius: 6,
            background: "var(--surface2)", color: "var(--muted)",
          }}>
            {tx.cat}
          </span>
        </div>
      )}

      {/* Date (table view only) */}
      {!compact && (
        <div style={{
          fontFamily: "'DM Mono', monospace", fontSize: 12,
          color: "var(--muted)", display: "flex", alignItems: "center",
        }}>
          {tx.date}
        </div>
      )}

      {/* Amount */}
      <div style={{
        fontFamily: "'DM Mono', monospace",
        fontSize: 14, fontWeight: 600,
        display: "flex", alignItems: "center",
        color: tx.amount > 0 ? "var(--green)" : "var(--red)",
      }}>
        {formatCurrency(tx.amount, true)}
      </div>
    </div>
  );
}
