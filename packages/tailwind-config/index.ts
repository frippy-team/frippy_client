import type { Config } from "tailwindcss";

const sharedConfig: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        "frippy-blue": "#3498db",
        "frippy-green": "#2ecc71",
        "frippy-orange": "#f39c12",
        "frippy-dark-gray": "#34495e",
        "frippy-text-light": "#7f8c8d",
      },
      fontFamily: {
        sans: ["Noto Sans KR", "sans-serif"],
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(0, 0, 0, 0.05)",
        card: "0 4px 12px rgba(0, 0, 0, 0.08)",
        nav: "0 -2px 5px rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};

export default sharedConfig;
