/**
 * Format a number as a USD currency string.
 * @param {number} value
 * @param {boolean} showSign – prepend "+" for positive values
 */
export function formatCurrency(value, showSign = false) {
  const abs = Math.abs(value).toFixed(2);
  if (showSign) return value >= 0 ? `+$${abs}` : `-$${abs}`;
  return `$${abs}`;
}

/**
 * Return the CSS color variable for a given spend percentage.
 */
export function spendColor(pct) {
  if (pct > 90) return "var(--red)";
  if (pct > 75) return "#f4c85a";
  return "var(--green)";
}
