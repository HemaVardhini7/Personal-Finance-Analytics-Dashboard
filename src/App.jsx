// src/App.jsx
import { useState } from "react";
import Sidebar      from "./components/Sidebar";
import Overview     from "./pages/Overview";
import Transactions from "./pages/Transactions";
import Budgets      from "./pages/Budgets";
import Analytics    from "./pages/Analytics";
import "./styles/globals.css";

const PAGES = {
  overview:     Overview,
  transactions: Transactions,
  budgets:      Budgets,
  analytics:    Analytics,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("overview");
  const Page = PAGES[activeTab];

  return (
    <div style={{ minHeight: "100vh", background: "var(--bg)" }}>
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main style={{ marginLeft: 220, padding: "40px 40px 60px" }}>
        {/* Page header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 36 }}>
          <div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 11, color: "var(--muted)", letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>
              February 2026
            </div>
            <h1 style={{ fontSize: 32, fontWeight: 800, letterSpacing: "-0.04em", lineHeight: 1 }}>
              {activeTab.charAt(0).toUpperCase() + activeTab.slice(1)}
            </h1>
          </div>
          <button style={{
            background: "var(--accent)", color: "#0a0c0f",
            border: "none", borderRadius: 10, padding: "12px 20px",
            fontFamily: "'Syne', sans-serif", fontSize: 13, fontWeight: 700,
            cursor: "pointer",
          }}>
            + Add Transaction
          </button>
        </div>

        {/* Active page */}
        <Page onViewAll={() => setActiveTab("transactions")} />
      </main>
    </div>
  );
}
