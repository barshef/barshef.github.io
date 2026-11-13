import { defineConfig } from "@playwright/test";

// The walk runs against the site in development mode, so it needs nothing but Node.
const site = process.env.E2E_BASE_URL ?? "http://localhost:3030";

export default defineConfig({
  testDir: "./tests/e2e",
  timeout: 90_000,
  workers: 1,
  expect: { timeout: 20_000 },
  use: { baseURL: site, trace: "retain-on-failure", screenshot: "only-on-failure" },
  webServer: { command: "npm run dev", url: site, reuseExistingServer: true, timeout: 180_000 },
});
