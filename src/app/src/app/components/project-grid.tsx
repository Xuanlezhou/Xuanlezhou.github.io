"use client";

import { useState } from "react";
import ProjectCard from "./project-card";
import type { Project } from "../data/projects";

// Filterable project grid, filters built from each project's discipline label.
export default function ProjectGrid({ items }: { items: Project[] }) {
  const kinds = Array.from(new Set(items.map((p) => p.kind).filter(Boolean))) as string[];
  const [active, setActive] = useState("All");
  const shown = active === "All" ? items : items.filter((p) => p.kind === active);

  return (
    <div>
      <div className="mb-8 flex flex-wrap gap-2">
        {["All", ...kinds].map((k) => {
          const count = k === "All" ? items.length : items.filter((p) => p.kind === k).length;
          const on = k === active;
          return (
            <button
              key={k}
              onClick={() => setActive(k)}
              className={`border px-3 py-1.5 text-[13px] transition-colors ${
                on ? "border-ink bg-ink text-white" : "border-line bg-white text-muted hover:border-muted hover:text-ink"
              }`}
            >
              {k} <span className={on ? "text-white/60" : "text-muted/70"}>{count}</span>
            </button>
          );
        })}
      </div>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {shown.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </div>
  );
}
