// src/pages/Budgets.jsx
import {
  BarChart, Bar, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

import BudgetCard   from "../components/BudgetCard";
import SectionTitle from "../components/SectionTitle";
import ChartTooltip from "../components/ChartTooltip";

import { budgets } from "../data/mockData";

export default function Budgets() {
  return (
    <div>
      {/* Cards grid */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
        {budgets.map(b => <BudgetCard key={b.cat} budget={b} />)}

        {/* Add new placeholder */}
        <div style={{
          background: "none",
          border: "1px dashed var(--border)",
          borderRadius: 16, padding: 28,
          display: "flex", alignItems: "center", justifyContent: "center",
          cursor: "pointer", color: "var(--muted)", fontSize: 13,
        }}>
          + New Budget
        </div>
      </div>

      {/* Grouped bar chart */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
        <SectionTitle>Budget vs Actual</SectionTitle>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={budgets} barSize={24} barGap={2}>
            <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
            <XAxis dataKey="cat" tick={{ fill: "#6b7585", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} />
            <YAxis tick={{ fill: "#6b7585", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} />
            <Tooltip content={<ChartTooltip />} />
            <Bar dataKey="limit" fill="rgba(255,255,255,0.06)" radius={[4, 4, 0, 0]} name="Budget" />
            <Bar dataKey="spent" radius={[4, 4, 0, 0]} name="Spent">
              {budgets.map((b, i) => <Cell key={i} fill={b.color} />)}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
