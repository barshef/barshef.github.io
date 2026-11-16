"use client";

import { useState } from "react";
import { CATEGORIES, CATEGORY_LABEL, STATUS_LABEL, STATUS_TONE, showStatusAndLinks, type Category, type Project } from "@/content/projects";

export function StatusPill({ project }: { project: Project }) {
  return <span className={`pill ${STATUS_TONE[project.status]}`}>{STATUS_LABEL[project.status]}</span>;
}

export function ProjectLink({ project }: { project: Project }) {
  if (!project.url) return <span className="d-link none">Private</span>;
  return (
    <a className="d-link" href={`https://${project.url}`} target="_blank" rel="noopener">
      {project.url} ↗<span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

/* The filterable list of every project, one row each. A row opens to show the engineering decisions, my role and the stack. */
export default function ProjectRegister({ projects }: { projects: Project[] }) {
  const [filter, setFilter] = useState<Category | "all">("all");
  const shown = projects.filter((p) => filter === "all" || p.category === filter);
  /* Without the status and link columns the row uses the narrower grid. */
  const cols = showStatusAndLinks ? "cols" : "cols slim";

  return (
    <div className="dir">
      <div className="dir-top">
        <div className="dir-title">
          All projects <span data-testid="dir-count">{shown.length}</span>
        </div>
        <div className="chips" role="group" aria-label="Filter projects">
          {CATEGORIES.map((c) => (
            <button key={c.key} type="button" className="chip" aria-pressed={filter === c.key} onClick={() => setFilter(c.key)}>
              {c.label}
            </button>
          ))}
        </div>
      </div>
      <div className={`${cols} dir-head label`} aria-hidden="true">
        <span>Project</span>
        <span>What it does</span>
        <span>Category</span>
        {showStatusAndLinks && <span>Status</span>}
        {showStatusAndLinks && <span>Link</span>}
        <span />
      </div>
      {shown.map((p) => (
        <details key={p.slug} data-testid="project-row">
          <summary className={cols}>
            <span className="d-name">
              {p.name}
              <small>{p.tagline}</small>
            </span>
            <span className="d-desc">{p.blurb}</span>
            <span className="d-cat">{CATEGORY_LABEL[p.category]}</span>
            {showStatusAndLinks && (
              <span className="d-status">
                <StatusPill project={p} />
              </span>
            )}
            {showStatusAndLinks && <ProjectLink project={p} />}
            <i className="chev" aria-hidden="true" />
          </summary>
          <div className="more">
            <div>
              <h4>Engineering decisions</h4>
              <ul>
                {p.decisions.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
            </div>
            <div>
              <h4>My role</h4>
              <p>{p.role}</p>
              <div className="stack">{p.stack}</div>
            </div>
          </div>
        </details>
      ))}
    </div>
  );
}
