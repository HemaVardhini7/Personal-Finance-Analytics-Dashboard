// src/pages/Overview.jsx
import { useState, useEffect } from "react";
import {
  AreaChart, Area, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from "recharts";

import StatCard       from "../components/StatCard";
import SectionTitle   from "../components/SectionTitle";
import ChartTooltip   from "../components/ChartTooltip";
import TransactionRow from "../components/TransactionRow";

import { cashflowData, spendingData, transactions, statCards } from "../data/mockData";

export default function Overview({ onViewAll }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setVisible(true), 80); return () => clearTimeout(t); }, []);

  return (
    <div style={{ opacity: visible ? 1 : 0, transition: "opacity 0.4s" }}>

      {/* Stat cards */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, marginBottom: 28 }}>
        {statCards.map((s) => <StatCard key={s.label} {...s} />)}
      </div>

      {/* Cashflow + Spending pie */}
      <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 16 }}>

        {/* Area chart */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
          <SectionTitle>Cash Flow</SectionTitle>
          <ResponsiveContainer width="100%" height={220}>
            <AreaChart data={cashflowData}>
              <defs>
                <linearGradient id="gIncome" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#c8f45a" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#c8f45a" stopOpacity={0}   />
                </linearGradient>
                <linearGradient id="gExpenses" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%"  stopColor="#f45a8c" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#f45a8c" stopOpacity={0}   />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(255,255,255,0.04)" strokeDasharray="4 4" />
              <XAxis dataKey="month" tick={{ fill: "#6b7585", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#6b7585", fontSize: 11, fontFamily: "'DM Mono', monospace" }} axisLine={false} tickLine={false} tickFormatter={v => `$${v / 1000}k`} />
              <Tooltip content={<ChartTooltip />} />
              <Area type="monotone" dataKey="income"   stroke="#c8f45a" strokeWidth={2} fill="url(#gIncome)"   name="Income"   />
              <Area type="monotone" dataKey="expenses" stroke="#f45a8c" strokeWidth={2} fill="url(#gExpenses)" name="Expenses" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Donut */}
        <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
          <SectionTitle>Spending</SectionTitle>
          <ResponsiveContainer width="100%" height={150}>
            <PieChart>
              <Pie data={spendingData} cx="50%" cy="50%" innerRadius={45} outerRadius={70} dataKey="value" stroke="none">
                {spendingData.map((d, i) => <Cell key={i} fill={d.color} />)}
              </Pie>
              <Tooltip formatter={v => `$${v}`} contentStyle={{ background: "var(--surface2)", border: "1px solid var(--border)", borderRadius: 8, fontFamily: "'DM Mono', monospace", fontSize: 12 }} />
            </PieChart>
          </ResponsiveContainer>
          <div style={{ display: "flex", flexDirection: "column", gap: 6, marginTop: 8 }}>
            {spendingData.slice(0, 4).map((d, i) => (
              <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <div style={{ width: 8, height: 8, borderRadius: 2, background: d.color }} />
                  <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)" }}>{d.name}</span>
                </div>
                <span style={{ fontFamily: "'DM Mono', monospace", fontSize: 11 }}>${d.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div style={{ background: "var(--surface)", border: "1px solid var(--border)", borderRadius: 16, padding: 28 }}>
        <SectionTitle action={{ label: "View All →", fn: onViewAll }}>Recent Transactions</SectionTitle>
        {transactions.slice(0, 5).map(tx => (
          <TransactionRow key={tx.id} tx={tx} compact />
        ))}
      </div>
    </div>
  );
}
