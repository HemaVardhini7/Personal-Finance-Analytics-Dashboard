// ─── Cashflow (8 months) ──────────────────────────────────────────────────────
const months = ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan", "Feb"];

export const cashflowData = months.map((m, i) => ({
  month: m,
  income:   [4200, 4500, 4100, 5200, 4800, 6100, 4900, 5400][i],
  expenses: [2800, 3100, 2600, 3400, 3800, 4200, 3100, 3300][i],
  savings:  [1400, 1400, 1500, 1800, 1000, 1900, 1800, 2100][i],
}));

// ─── Spending Breakdown ───────────────────────────────────────────────────────
export const spendingData = [
  { name: "Housing",       value: 1200, color: "#c8f45a" },
  { name: "Food",          value: 580,  color: "#5af4c8" },
  { name: "Transport",     value: 320,  color: "#f4c85a" },
  { name: "Health",        value: 240,  color: "#f45a8c" },
  { name: "Entertainment", value: 180,  color: "#8c5af4" },
  { name: "Other",         value: 280,  color: "#5a8cf4" },
];

// ─── Transactions ─────────────────────────────────────────────────────────────
export const transactions = [
  { id: 1,  name: "Whole Foods Market",  cat: "Food",          amount: -94.20,  date: "Feb 23", icon: "🛒" },
  { id: 2,  name: "Salary Deposit",      cat: "Income",        amount: 5400.00, date: "Feb 22", icon: "💰" },
  { id: 3,  name: "Netflix",             cat: "Entertainment", amount: -15.99,  date: "Feb 21", icon: "📺" },
  { id: 4,  name: "Shell Gas Station",   cat: "Transport",     amount: -62.40,  date: "Feb 21", icon: "⛽" },
  { id: 5,  name: "Gym Membership",      cat: "Health",        amount: -49.00,  date: "Feb 20", icon: "💪" },
  { id: 6,  name: "Amazon",              cat: "Shopping",      amount: -127.54, date: "Feb 19", icon: "📦" },
  { id: 7,  name: "Freelance Payment",   cat: "Income",        amount: 850.00,  date: "Feb 18", icon: "💻" },
  { id: 8,  name: "Electric Bill",       cat: "Housing",       amount: -143.20, date: "Feb 17", icon: "⚡" },
  { id: 9,  name: "Spotify",             cat: "Entertainment", amount: -9.99,   date: "Feb 16", icon: "🎵" },
  { id: 10, name: "Restaurant",          cat: "Food",          amount: -78.30,  date: "Feb 15", icon: "🍽️" },
];

// ─── Budget Limits ────────────────────────────────────────────────────────────
export const budgets = [
  { cat: "Housing",       limit: 1400, spent: 1200, color: "#c8f45a" },
  { cat: "Food",          limit: 600,  spent: 580,  color: "#5af4c8" },
  { cat: "Transport",     limit: 350,  spent: 320,  color: "#f4c85a" },
  { cat: "Entertainment", limit: 200,  spent: 165,  color: "#8c5af4" },
  { cat: "Health",        limit: 300,  spent: 240,  color: "#f45a8c" },
];

// ─── Weekly Spending ──────────────────────────────────────────────────────────
export const weeklyData = [
  { day: "Mon", amount: 145 },
  { day: "Tue", amount: 89  },
  { day: "Wed", amount: 230 },
  { day: "Thu", amount: 67  },
  { day: "Fri", amount: 312 },
  { day: "Sat", amount: 198 },
  { day: "Sun", amount: 54  },
];

// ─── AI Insights ──────────────────────────────────────────────────────────────
export const insights = [
  {
    icon:  "🎯",
    title: "On Track",
    desc:  "You're on track to hit your $2,000 savings goal this month.",
    color: "#3dffa0",
  },
  {
    icon:  "⚠️",
    title: "Food Budget Alert",
    desc:  "Food spending is 96% of your budget with 5 days remaining.",
    color: "#f4c85a",
  },
  {
    icon:  "📈",
    title: "Income Growing",
    desc:  "Your income increased 12% over the past 3 months. Great trend!",
    color: "#5af4c8",
  },
];

// ─── Top-level stat cards ─────────────────────────────────────────────────────
export const statCards = [
  { label: "Net Worth",     value: "$84,320", sub: "+12.4% this year",       trend: 1,  accent: "#c8f45a" },
  { label: "Monthly Income",value: "$5,400",  sub: "+$500 vs last month",    trend: 1,  accent: "#5af4c8" },
  { label: "Monthly Spend", value: "$3,300",  sub: "-$100 vs last month",    trend: 1,  accent: "#f45a8c" },
  { label: "Savings Rate",  value: "38.9%",   sub: "+3.2% vs last month",    trend: 1,  accent: "#f4c85a" },
];

// ─── Transaction filter categories ───────────────────────────────────────────
export const categories = [
  "All", "Income", "Food", "Transport",
  "Housing", "Entertainment", "Health", "Shopping",
];
