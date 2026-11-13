import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { describe, expect, it } from "vitest";
import { cvFile, profile, showCvDownload } from "./profile";
import { CATEGORIES, featuredProjects, projects } from "./projects";

describe("projects", () => {
  it("have unique slugs and a known category", () => {
    const keys = CATEGORIES.map((c) => c.key);
    expect(new Set(projects.map((p) => p.slug)).size).toBe(projects.length);
    for (const p of projects) expect(keys).toContain(p.category);
  });

  it("feature exactly two", () => {
    expect(featuredProjects).toHaveLength(2);
  });

  it("carry three decisions, a role and a stack each", () => {
    for (const p of projects) {
      expect(p.decisions).toHaveLength(3);
      expect(p.role.length).toBeGreaterThan(0);
      expect(p.stack.length).toBeGreaterThan(0);
    }
  });

  it("give links without a scheme", () => {
    for (const p of projects) if (p.url) expect(p.url).not.toMatch(/^https?:/);
  });
});

describe("content", () => {
  it("never names the company", () => {
    for (const file of ["profile.ts", "projects.ts"]) {
      const text = readFileSync(path.join(import.meta.dirname, file), "utf8");
      expect(text).not.toMatch(/crud\s*savvy/i);
    }
  });

  it("does not publish a phone number", () => {
    const text = readFileSync(path.join(import.meta.dirname, "profile.ts"), "utf8");
    expect(text).not.toMatch(/\+44|07\d{9}/);
  });

  it("shows the title on two lines", () => {
    expect(profile.titleLines).toHaveLength(2);
  });

  it("has the CV file whenever the download button is switched on", () => {
    if (showCvDownload) expect(existsSync(path.join(import.meta.dirname, "../../public/cv", cvFile))).toBe(true);
  });
});
