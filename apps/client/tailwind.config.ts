import type { Config } from "tailwindcss";
import sharedConfig from "@frippy-client/tailwind-config";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,jsx,js}"],
  theme: {
    ...(sharedConfig.theme || {}),
    extend: {
      ...(sharedConfig.theme?.extend || {}),
    },
  },
  plugins: [...(sharedConfig.plugins || [])],
};

export default config;
