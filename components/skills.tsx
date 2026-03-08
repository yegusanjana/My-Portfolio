"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Brain, Cloud, Activity } from "lucide-react"
import React, { useState } from "react"

/* ── tooltip helper ─────────────────────────────────────────── */
type Skill = {
  name: string
  tip?: string
  level?: "Production" | "Research" | "Familiar"
}

const levelColors: Record<string, string> = {
  Production: "bg-emerald-500/15 text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
  Research: "bg-violet-500/15 text-violet-600 dark:text-violet-400 border-violet-500/25",
  Familiar: "bg-sky-500/15 text-sky-600 dark:text-sky-400 border-sky-500/25",
}

function SkillChip({ skill }: { skill: Skill }) {
  const [show, setShow] = useState(false)
  return (
    <span
      className="relative inline-block"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <Badge
        className={`cursor-default select-none transition-colors ${
          skill.level
            ? levelColors[skill.level]
            : "bg-primary/10 text-primary border-primary/20"
        }`}
        variant="outline"
      >
        {skill.name}
        {skill.level && (
          <span className="ml-1.5 text-[0.6rem] opacity-70 font-normal">{skill.level}</span>
        )}
      </Badge>
      {show && skill.tip && (
        <span className="absolute z-30 bottom-full left-1/2 -translate-x-1/2 mb-2 w-max max-w-[220px] rounded-md bg-popover text-popover-foreground border border-border px-3 py-1.5 text-xs shadow-lg pointer-events-none whitespace-normal text-center">
          {skill.tip}
        </span>
      )}
    </span>
  )
}

/* ── data ───────────────────────────────────────────────────── */
type Column = {
  icon: React.ElementType
  title: string
  subtitle: string
  groups: { heading: string; skills: Skill[] }[]
}

const columns: Column[] = [
  {
    icon: Server,
    title: "Systems & Languages",
    subtitle: "The Core",
    groups: [
      {
        heading: "Languages",
        skills: [
          { name: "Go", level: "Production", tip: "2+ years at Ozone Cloud — concurrency, microservices" },
          { name: "C++", level: "Production", tip: "SIMD, lock-free DS, high-perf log engine" },
          { name: "Python", level: "Production", tip: "ML pipelines, FastAPI, scripting" },
          { name: "TypeScript", level: "Production", tip: "Next.js, React front-ends" },
          { name: "Java", level: "Familiar" },
          { name: "SQL", level: "Production", tip: "PostgreSQL query optimization" },
        ],
      },
      {
        heading: "Concepts",
        skills: [
          { name: "Concurrency (Goroutines/Channels)", tip: "Core pattern at Ozone — 95% deadlock reduction" },
          { name: "Lock-free Data Structures", tip: "Used in C++ log engine" },
          { name: "SIMD", tip: "Log parser vectorized instructions" },
          { name: "Memory Mgmt (mmap)", tip: "Zero-copy I/O for 4× throughput" },
        ],
      },
      {
        heading: "Backends",
        skills: [
          { name: "PostgreSQL" },
          { name: "MongoDB" },
          { name: "Redis", tip: "Caching layer — Synapo, Ozone" },
          { name: "RabbitMQ" },
          { name: "Kafka" },
        ],
      },
    ],
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    subtitle: "The Brain",
    groups: [
      {
        heading: "Frameworks",
        skills: [
          { name: "PyTorch", level: "Research", tip: "Gaze estimation, FER at Beckman" },
          { name: "OpenCV", level: "Production", tip: "Real-time video pipelines" },
          { name: "MediaPipe", level: "Research", tip: "Face mesh for gaze features" },
        ],
      },
      {
        heading: "AI Orchestration",
        skills: [
          { name: "LangGraph", level: "Production", tip: "Agentic RAG at ACES" },
          { name: "LangChain", level: "Production" },
          { name: "RAG Pipelines", tip: "Built production retrieval at ACES" },
        ],
      },
      {
        heading: "Vector Ops",
        skills: [
          { name: "Azure AI Search", tip: "Hybrid retrieval at ACES" },
          { name: "FAISS" },
          { name: "OpenAI Embeddings" },
        ],
      },
      {
        heading: "Architectures",
        skills: [
          { name: "CNNs" },
          { name: "HRNet", tip: "Facial landmark detection" },
          { name: "L2CS-Net", tip: "3D gaze estimation at Beckman" },
        ],
      },
    ],
  },
  {
    icon: Cloud,
    title: "Cloud & Infrastructure",
    subtitle: "The Scale",
    groups: [
      {
        heading: "Orchestration",
        skills: [
          { name: "Kubernetes", level: "Production", tip: "EKS & AKS — multi-cloud at Ozone" },
          { name: "Docker", level: "Production" },
          { name: "Tekton", tip: "CI/CD pipelines at Ozone" },
        ],
      },
      {
        heading: "Cloud Platforms",
        skills: [
          { name: "AWS (S3, EC2, EKS)", level: "Production" },
          { name: "Azure (Blob, Cosmos DB)", level: "Production", tip: "Used at ACES & Truvara" },
          { name: "GCP", level: "Familiar" },
        ],
      },
      {
        heading: "Reliability",
        skills: [
          { name: "Velero", tip: "Backup/Restore — disaster recovery at Ozone" },
          { name: "Fault Tolerance" },
          { name: "Multi-tenant Architecture" },
        ],
      },
    ],
  },
  {
    icon: Activity,
    title: "Observability & Tooling",
    subtitle: "The Modern Dev",
    groups: [
      {
        heading: "Monitoring",
        skills: [
          { name: "Prometheus", level: "Production", tip: "Metrics at Ozone" },
          { name: "Grafana", level: "Production" },
          { name: "Sentry" },
        ],
      },
      {
        heading: "AI-Native Tools",
        skills: [
          { name: "Langfuse", tip: "LLM tracing at ACES" },
          { name: "Claude Code" },
          { name: "Cursor" },
          { name: "GitHub Copilot" },
        ],
      },
      {
        heading: "Frontend",
        skills: [
          { name: "Next.js", level: "Production" },
          { name: "React", level: "Production" },
          { name: "Tailwind CSS", level: "Production" },
          { name: "Strapi", tip: "CMS integration at Truvara" },
        ],
      },
    ],
  },
]

/* ── component ──────────────────────────────────────────────── */
const Skills = () => (
  <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-7xl mx-auto">
      {/* header */}
      <div className="text-center mb-14">
        <h2 className="text-4xl font-bold text-foreground font-sans mb-3">Skills & Technologies</h2>
        <p className="text-muted-foreground">
          Hover any chip for context — each skill links back to a real project or role.
        </p>
        {/* legend */}
        <div className="flex items-center justify-center gap-4 mt-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500" /> Production
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-violet-500" /> Research
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-500" /> Familiar
          </span>
        </div>
      </div>

      {/* bento grid — 2 cols on md, 4 on lg */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {columns.map(({ icon: Icon, title, subtitle, groups }) => (
          <Card
            key={title}
            className="shadow-md border-border hover:border-primary/40 transition-colors"
          >
            <CardContent className="pt-6 space-y-5">
              {/* column header */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="w-[18px] h-[18px] text-primary" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground leading-tight">{title}</p>
                  <p className="text-[0.7rem] text-muted-foreground">{subtitle}</p>
                </div>
              </div>

              {/* skill groups */}
              {groups.map(({ heading, skills }) => (
                <div key={heading} className="space-y-2">
                  <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground font-semibold">
                    {heading}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {skills.map((s) => (
                      <SkillChip key={s.name} skill={s} />
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Skills
