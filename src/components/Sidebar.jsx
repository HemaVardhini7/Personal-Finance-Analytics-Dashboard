// src/components/Sidebar.jsx
const TAB_META = {
  overview:     { label: "Overview",     icon: "📊" },
  transactions: { label: "Transactions", icon: "↔️" },
  budgets:      { label: "Budgets",      icon: "🎯" },
  analytics:    { label: "Analytics",    icon: "📈" },
};

export default function Sidebar({ activeTab, setActiveTab }) {
  return (
    <div style={{
      position: "fixed",
      top: 0, left: 0, bottom: 0,
      width: 220,
      background: "var(--surface)",
      borderRight: "1px solid var(--border)",
      display: "flex",
      flexDirection: "column",
      padding: "32px 0",
      zIndex: 100,
    }}>
      {/* Logo */}
      <div style={{ padding: "0 24px 32px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 32, height: 32, borderRadius: 8,
            background: "var(--accent)",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 16,
          }}>₿</div>
          <div>
            <div style={{ fontWeight: 800, fontSize: 15, letterSpacing: "-0.02em" }}>Finsight</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--muted)" }}>
              Personal Finance
            </div>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav style={{ padding: "0 12px", flex: 1 }}>
        {Object.entries(TAB_META).map(([key, { label, icon }]) => {
          const active = activeTab === key;
          return (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              style={{
                display: "flex", alignItems: "center", gap: 12,
                width: "100%", padding: "12px 16px",
                borderRadius: 10, marginBottom: 4,
                background: active ? "rgba(200,244,90,0.1)" : "none",
                border: active ? "1px solid rgba(200,244,90,0.2)" : "1px solid transparent",
                color: active ? "var(--accent)" : "var(--muted)",
                cursor: "pointer",
                fontFamily: "'Syne', sans-serif",
                fontSize: 13, fontWeight: active ? 600 : 400,
                textAlign: "left",
                transition: "all 0.15s",
              }}
            >
              <span style={{ fontSize: 16 }}>{icon}</span>
              {label}
            </button>
          );
        })}
      </nav>

      {/* User */}
      <div style={{ padding: "16px 24px", borderTop: "1px solid var(--border)" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontSize: 14, fontWeight: 800, color: "#0a0c0f",
          }}>AJ</div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 600 }}>Alex Johnson</div>
            <div style={{ fontFamily: "'DM Mono', monospace", fontSize: 10, color: "var(--muted)" }}>
              Premium Plan
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
