import type { NextConfig } from "next";

// A static export: `npm run build` writes plain files to `out/`, which GitHub Pages serves. There is no server.
const config: NextConfig = {
  output: "export",
  images: { unoptimized: true },
};

export default config;
