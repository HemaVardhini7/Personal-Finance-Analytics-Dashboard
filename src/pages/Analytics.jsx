// src/pages/Analytics.jsx
import {
  BarChart, Bar, Cell,
  LineChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

import SectionTitle from "../components/SectionTitle";
import InsightCard  from "../components/InsightCard";
import ChartTooltip from "../components/ChartTooltip";

import { weeklyData, cashflowData, insights } from "../data/mockData";

export default function Analytics() {
  return (
    <div>
      {/* Weekly + Savings */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>

        {/* Weekly bar */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
          <SectionTitle>This Week's Spending</SectionTitle>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={weeklyData} barSize={28}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
              <XAxis dataKey="day" tick={{ fill: "#6b7585", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7585", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} tickFormatter={v => `$${v}`} />
              <Tooltip formatter={v => `$${v}`} contentStyle={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 12 }} />
              <Bar dataKey="amount" radius={[6, 6, 0, 0]}>
                {weeklyData.map((d, i) => (
                  <Cell key={i} fill={d.day === "Fri" ? "var(--accent)" : "rgba(200,244,90,0.3)"} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Savings line */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
          <SectionTitle>Savings Trend</SectionTitle>
          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={cashflowData}>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
              <XAxis dataKey="month" tick={{ fill: "#6b7585", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7585", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} />
              <Tooltip content={<ChartTooltip />} />
              <Line
                type="monotone"
                dataKey="savings"
                stroke="var(--accent2)"
                strokeWidth={2.5}
                dot={{ fill: "var(--accent2)", r: 4, strokeWidth: 0 }}
                name="Savings"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* AI Insights */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
        <SectionTitle>AI Insights</SectionTitle>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}>
          {insights.map((ins, i) => <InsightCard key={i} {...ins} />)}
        </div>
      </div>
    </div>
  );
}
