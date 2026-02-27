// src/components/SectionTitle.jsx
export default function SectionTitle({ children, action }) {
  return (
    <div style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 20,
    }}>
      <h2 style={{ fontSize: 16, fontWeight: 700, letterSpacing: "-0.01em" }}>
        {children}
      </h2>

      {action && (
        <button
          onClick={action.fn}
          style={{
            fontFamily: "'DM Mono', monospace",
            fontSize: 11,
            color: "var(--accent)",
            background: "none",
            border: "none",
            cursor: "pointer",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          {action.label}
        </button>
      )}
    </div>
  );
}
