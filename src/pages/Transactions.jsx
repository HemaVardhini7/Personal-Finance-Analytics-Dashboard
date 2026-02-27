// src/pages/Transactions.jsx
import { useState } from "react";
import TransactionRow from "../components/TransactionRow";
import { transactions, categories } from "../data/mockData";

export default function Transactions() {
  const [filterCat, setFilterCat] = useState("All");

  const filtered =
    filterCat === "All" ? transactions : transactions.filter(t => t.cat === filterCat);

  return (
    <div>
      {/* Filter chips */}
      <div style={{ display: "flex", gap: 8, marginBottom: 24, flexWrap: "wrap" }}>
        {categories.map(c => (
          <button
            key={c}
            onClick={() => setFilterCat(c)}
            style={{
              padding: "8px 16px", borderRadius: 8,
              border: "1px solid",
              borderColor: filterCat === c ? "var(--accent)" : "var(--border)",
              background: filterCat === c ? "rgba(200,244,90,0.1)" : "none",
              color: filterCat === c ? "var(--accent)" : "var(--muted)",
              fontFamily: "'DM Mono', monospace", fontSize: 11,
              cursor: "pointer", letterSpacing: "0.05em",
            }}
          >
            {c}
          </button>
        ))}
      </div>

      {/* Table */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, overflow: "hidden" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr 1fr", padding: "14px 24px", borderBottom: "1px solid var(--border)" }}>
          {["Transaction", "Category", "Date", "Amount"].map(h => (
            <div key={h} style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase" }}>
              {h}
            </div>
          ))}
        </div>

        {/* Rows */}
        {filtered.map((tx, i) => (
          <div
            key={tx.id}
            style={{ borderBottom: i < filtered.length - 1 ? "1px solid var(--border)" : "none" }}
          >
            <TransactionRow tx={tx} compact={false} />
          </div>
        ))}
      </div>
    </div>
  );
}
