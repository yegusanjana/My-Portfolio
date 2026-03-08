"use client"

import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  ChevronDown,
  MapPin,
  Trophy,
  // Ozone icons
  Server,
  Zap,
  Shield,
  BarChart3,
  Cloud,
  Database,
  Container,
  GitBranch,
  Users,
  // Beckman icons
  Eye,
  Brain,
  Activity,
  Camera,
  Scan,
  AlertTriangle,
  Info,
  // ACES icons
  Workflow,
  Search,
  Wrench,
  FileText,
  Target,
  // Truvara icons
  Layout,
  FileCode2,
  Palette,
  Globe,
  RefreshCw,
  // LevelUp icons
  Code2,
  BookOpen,
  CheckCircle2,
} from "lucide-react"

/* ------------------------------------------------------------------ */
/*  Data for each role                                                 */
/* ------------------------------------------------------------------ */

interface RoleEntry {
  id: string
  year: string
  title: string
  company: string
  location: string
  period: string
  badge?: { label: string; sub: string }
  tags: string[]
}

const roles: RoleEntry[] = [
  {
    id: "beckman",
    year: "May 2025 – Present",
    title: "ML Engineer / Research Assistant",
    company: "Beckman Institute, UIUC",
    location: "Champaign, IL",
    period: "Sept 2025 – May 2026",
    tags: ["PyTorch", "OpenCV", "MediaPipe", "HRNet", "L2CS-Net", "Langfuse"],
  },
  {
    id: "aces",
    year: "Feb 2025 – May 2025",
    title: "AI Engineer / Research Assistant",
    company: "ACES, UIUC",
    location: "Champaign, IL",
    period: "Aug 2025 – Dec 2025",
    tags: ["LangGraph", "GPT-4.1", "Azure AI Search", "FAISS", "PyMuPDF"],
  },
  {
    id: "ozone",
    year: "Jan 2023 – Dec 2024",
    title: "Software Engineer",
    company: "Ozone Cloud",
    location: "San Francisco, CA ",
    period: "Jan 2023 – Dec 2024",
    badge: { label: "Developer of the Month — Feb 2024", sub: "Excellence in system refactoring and incident resolution" },
    tags: ["Go", "Kubernetes", "Tekton", "Velero", "GraphQL", "Docker"],
  },
  {
    id: "truvara",
    year: "May 2025 – Jul 2025",
    title: "Software Engineer Intern",
    company: "Truvara Technologies LLP",
    location: "Remote",
    period: "May 2025 – Jul 2025",
    tags: ["Next.js", "TypeScript", "Strapi", "Radix UI", "Tailwind CSS"],
  },
  {
    id: "levelup",
    year: "May 2022 – Jul 2022",
    title: "Software Engineer Intern",
    company: "LevelUp Learning",
    location: "Chennai, India",
    period: "May 2022 – Jul 2022",
    tags: ["Java / Spring Boot", "REST APIs", "React", "SQL"],
  },
]

/* ------------------------------------------------------------------ */
/*  Inline case-study content (rendered inside accordions)             */
/* ------------------------------------------------------------------ */

const BeckmanDetail = () => (
  <div className="space-y-8">
    <Card className="shadow-md border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <AlertTriangle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-foreground mb-2">The Challenge: The &ldquo;Infant Data&rdquo; Problem</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Standard CV models are trained on adults. When applied to infants, performance drops
              due to different facial proportions, lack of defined features, and erratic movement.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {[
        { category: "Vision", items: ["PyTorch", "OpenCV", "MediaPipe", "HRNet", "L2CS-Net"], Icon: Eye },
        { category: "Research Tools", items: ["L2CS-Net", "MPIIGaze", "PyAFAR"], Icon: Brain },
        { category: "Observability", items: ["Langfuse", "Claude Code (MCP)"], Icon: Activity },
      ].map((g) => (
        <div key={g.category} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background border border-border">
          <g.Icon className="w-4 h-4 text-primary" />
          <p className="text-[10px] font-semibold text-foreground">{g.category}</p>
          <div className="flex flex-wrap justify-center gap-1">
            {g.items.map((i) => <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20">{i}</Badge>)}
          </div>
        </div>
      ))}
    </div>
    {[
      { num: "01", title: "3D Gaze Estimation & Geometric Calibration", Icon: Scan, items: [
        { h: "Model Deployment", t: "Spearheaded the integration of L2CS-Net and HRNet architectures to predict 3D gaze vectors from unconstrained, multi-camera environments." },
        { h: "OpenCV Calibration Pipeline", t: "Developed a custom camera calibration workflow using intrinsics/extrinsics alignment and distortion correction to map 2D facial landmarks into a unified 3D coordinate system." },
        { h: "MediaPipe Iris Integration", t: "Integrated MediaPipe Iris for fine-grained iris tracking, providing a secondary anchor for gaze probability estimates." },
        { h: "Results", t: "Produced high-fidelity gaze vectors that allowed researchers to quantify \u201cjoint attention\u201d without manual frame-by-frame coding." },
      ]},
      { num: "02", title: "Infant Facial Expression Recognition (FER)", Icon: Camera, items: [
        { h: "Architecture", t: "Developed a CNN-based pipeline in PyTorch specifically tuned for infant facial action units." },
        { h: "Overcoming the \u201cTexture Gap\u201d", t: "Infant faces lack the \u201cwrinkle\u201d cues adults use. Utilized HRNet for robust landmark detection even under partial occlusion or rapid head turns." },
        { h: "Benchmarking", t: "Achieved a 58% Macro-F1 score. Used Confusion Matrices to identify and mitigate model bias between \u201cneutral\u201d and \u201cpositive\u201d states." },
      ]},
      { num: "03", title: "AI-Native Observability", Icon: Activity, items: [
        { h: "Langfuse Tracing", t: "Implemented Langfuse to monitor automated annotation agents, tracing exactly where a model failed in a multi-step video processing pipeline." },
        { h: "Claude Code (CLI) Integration", t: "Utilized Claude Code and the Model Context Protocol (MCP) to automate debugging of training scripts and data-processing logs." },
        { h: "Impact", t: "Reduced manual debugging overhead by 30%, allowing the research team to focus on behavioral insights." },
      ]},
    ].map((s) => (
      <SectionCard key={s.num} num={s.num} title={s.title} Icon={s.Icon} items={s.items} />
    ))}
    <div className="flex items-start gap-3 bg-blue-500/5 border border-blue-500/20 rounded-xl p-5">
      <Info className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-foreground text-xs mb-1">Technical Note: Why 58% Macro-F1?</p>
        <p className="text-xs text-muted-foreground leading-relaxed">
          Infant FER is a zero-shot/few-shot frontier. Traditional models trained on &ldquo;AffectNet&rdquo;
          fail on infants. Our pipeline bridges this gap through fine-tuning on behavioral datasets.
        </p>
      </div>
    </div>
  </div>
)

const AcesDetail = () => (
  <div className="space-y-8">
    <Card className="shadow-md border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <Target className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-foreground mb-2">The Challenge: The &ldquo;Research Bottleneck&rdquo;</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Department-wide stakeholders were overwhelmed by technical documentation.
              Manual synthesis was slow, prone to oversight, and non-scalable.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
    {/* Workflow diagram */}
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
      {[
        { label: "User Query", Icon: Search },
        { label: "Retrieval", Icon: FileText },
        { label: "Evaluation", Icon: BarChart3 },
        { label: "Re-writing", Icon: Wrench },
        { label: "Final Response", Icon: Zap },
      ].map((step, i, arr) => (
        <div key={step.label} className="flex items-center gap-3 sm:gap-0">
          <div className="flex flex-col items-center gap-1.5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
              <step.Icon className="w-5 h-5 text-primary" />
            </div>
            <span className="text-[10px] font-medium text-muted-foreground whitespace-nowrap">{step.label}</span>
          </div>
          {i < arr.length - 1 && (
            <svg className="w-7 h-3 text-primary/40 hidden sm:block mx-1.5" viewBox="0 0 32 16" fill="none">
              <path d="M0 8h24M24 8l-6-5M24 8l-6 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      ))}
    </div>
    <div className="grid grid-cols-3 gap-3">
      {[
        { value: "60%", label: "Reduction in Manual Research Time" },
        { value: "40%", label: "Faster Delivery via AI-Native Workflow" },
        { value: "0.1%", label: "Precision — Top Cited Documents" },
      ].map((m) => (
        <Card key={m.label} className="text-center shadow-sm">
          <CardContent className="p-4">
            <p className="text-2xl font-extrabold text-primary mb-0.5">{m.value}</p>
            <p className="text-[10px] text-muted-foreground leading-tight">{m.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {[
        { category: "Orchestration", items: ["LangGraph", "GPT-4.1", "LangChain"], Icon: Workflow },
        { category: "Search & Vector", items: ["Azure AI Search", "FAISS", "OpenAI Embeddings"], Icon: Search },
        { category: "Dev Tools", items: ["Cursor", "GitHub Copilot (Agent Mode)", "PyMuPDF"], Icon: Wrench },
      ].map((g) => (
        <div key={g.category} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50">
          <g.Icon className="w-4 h-4 text-primary" />
          <p className="text-[10px] font-semibold text-foreground">{g.category}</p>
          <div className="flex flex-wrap justify-center gap-1">
            {g.items.map((i) => <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20">{i}</Badge>)}
          </div>
        </div>
      ))}
    </div>
    {[
      { num: "01", title: "Orchestrating Autonomy with LangGraph", Icon: Workflow, items: [
        { h: "The DAG", t: "Modeled the assistant\u2019s logic as a graph where nodes represent tasks (Query Expansion, Source Validation, Final Synthesis)." },
        { h: "Conditional Logic", t: "The agent evaluates retrieved document quality; if insufficient, it autonomously triggers a secondary search with refined parameters." },
        { h: "Impact", t: "Reduced manual research synthesis time by 60% for department-wide stakeholders." },
      ]},
      { num: "02", title: "High-Performance Data Ingestion & Retrieval", Icon: FileText, items: [
        { h: "Document Parsing", t: "Leveraged PyMuPDF to extract clean text and metadata from complex, multi-column research papers." },
        { h: "High-Dimensional Indexing", t: "Utilized OpenAI Embeddings to transform text into vectors, indexed in Azure AI Search (VectorDB)." },
        { h: "Semantic Precision", t: "Fine-tuned retrieval using hybrid search (keyword + vector) to cite the most relevant 0.1% of the knowledge base." },
      ]},
      { num: "03", title: "AI-Native Development & Quality Control", Icon: BarChart3, items: [
        { h: "Development Velocity", t: "Accelerated delivery by 40% using Cursor and GitHub Copilot Agent Mode for automated unit tests and real-time profiling." },
        { h: "Observability with Langfuse", t: "Monitored \u201challucination rates\u201d and \u201ctoken costs\u201d across every LLM call. Traced multi-step agent executions end-to-end." },
      ]},
    ].map((s) => (
      <SectionCard key={s.num} num={s.num} title={s.title} Icon={s.Icon} items={s.items} />
    ))}
  </div>
)

const TruvaraDetail = () => (
  <div className="space-y-8">
    <Card className="shadow-md border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <Globe className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-foreground mb-2">The Challenge: Static to Dynamic Compliance</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Every compliance regulation change required manual code updates and redeployment.
              The goal: allow non-technical officers to update content in real-time.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
    <div className="grid grid-cols-3 gap-3">
      {[
        { value: "500+", label: "Active Platform Users" },
        { value: "60%", label: "Reduction in Release Overhead" },
        { value: "30+", label: "Reusable UI Components" },
      ].map((m) => (
        <Card key={m.label} className="text-center shadow-sm">
          <CardContent className="p-4">
            <p className="text-2xl font-extrabold text-primary mb-0.5">{m.value}</p>
            <p className="text-[10px] text-muted-foreground leading-tight">{m.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {[
        { category: "Frontend", items: ["Next.js", "React", "TypeScript"], Icon: Layout },
        { category: "Styling", items: ["Tailwind CSS", "Radix UI"], Icon: Palette },
        { category: "Backend / CMS", items: ["Strapi", "REST APIs"], Icon: Globe },
      ].map((g) => (
        <div key={g.category} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-background border border-border">
          <g.Icon className="w-4 h-4 text-primary" />
          <p className="text-[10px] font-semibold text-foreground">{g.category}</p>
          <div className="flex flex-wrap justify-center gap-1">
            {g.items.map((i) => <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20">{i}</Badge>)}
          </div>
        </div>
      ))}
    </div>
    {[
      { num: "01", title: "Architecting the GRC Platform", Icon: FileCode2, items: [
        { h: "Scalable Frontend", t: "Built the core platform using Next.js with SSR for fast initial load times on complex data tables and compliance reports." },
        { h: "Type Safety", t: "Enforced strict data models with TypeScript, significantly reducing runtime errors in financial reporting modules." },
        { h: "User Impact", t: "Deployed to 500+ users, maintaining high performance under concurrent data-heavy sessions." },
      ]},
      { num: "02", title: "Headless CMS Strategy", Icon: RefreshCw, items: [
        { h: "Decoupled Content", t: "Integrated Strapi CMS via REST APIs to separate compliance content from application logic." },
        { h: "The Result", t: "Real-time content updates without code changes, reducing release overhead by 60%." },
        { h: "Workflow Automation", t: "Configured webhooks to trigger ISR in Next.js, ensuring users always saw the latest regulatory data." },
      ]},
      { num: "03", title: "Design System & UX Refinement", Icon: Palette, items: [
        { h: "Reusable Component Library", t: "Developed 30+ accessible UI components using Radix UI and Tailwind CSS for dashboard, audit logs, and risk modules." },
        { h: "Feedback-Driven Iteration", t: "Conducted user feedback sessions with compliance managers, reducing \u201ctime-to-task\u201d for risk reports." },
      ]},
    ].map((s) => (
      <SectionCard key={s.num} num={s.num} title={s.title} Icon={s.Icon} items={s.items} />
    ))}
  </div>
)

const OzoneDetail = () => (
  <div className="space-y-8">
    {/* Executive Summary */}
    <Card className="shadow-md border-primary/20">
      <CardContent className="p-6">
        <h4 className="font-bold text-primary mb-2 text-sm">Executive Summary</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Owned the core API architecture and integrations platform. Transitioned a monolithic
          system into a scalable, multi-tenant microservices architecture coordinating 50+ services,
          1,000+ repositories, and multi-cloud disaster recovery.
        </p>
      </CardContent>
    </Card>
    {/* Metrics */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { value: "70%", label: "Deployment Stability Increase" },
        { value: "95%", label: "Reduction in Deadlocks" },
        { value: "<10m", label: "Multi-Cloud Recovery" },
        { value: "10x", label: "Capacity Scaling" },
      ].map((m) => (
        <Card key={m.label} className="text-center shadow-sm">
          <CardContent className="p-4">
            <p className="text-2xl font-extrabold text-primary mb-0.5">{m.value}</p>
            <p className="text-[10px] text-muted-foreground leading-tight">{m.label}</p>
          </CardContent>
        </Card>
      ))}
    </div>
    {/* Tech Stack */}
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
      {[
        { category: "Backend", items: ["Go", "Node.js", "GraphQL"], Icon: Server },
        { category: "Infrastructure", items: ["Kubernetes", "Tekton", "Docker", "Velero"], Icon: Container },
        { category: "Data", items: ["MongoDB", "Redis", "Kafka", "RabbitMQ"], Icon: Database },
        { category: "Cloud", items: ["AWS", "GCP", "Azure"], Icon: Cloud },
      ].map((g) => (
        <div key={g.category} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50">
          <g.Icon className="w-4 h-4 text-primary" />
          <p className="text-[10px] font-semibold text-foreground">{g.category}</p>
          <div className="flex flex-wrap justify-center gap-1">
            {g.items.map((i) => <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20">{i}</Badge>)}
          </div>
        </div>
      ))}
    </div>
    {[
      { num: "01", title: "Architectural Refactoring & Microservices", Icon: GitBranch, items: [
        { h: "The Transition", t: "Led refactoring of a monolithic application into a distributed microservices architecture using Golang, TypeScript, and MongoDB." },
        { h: "The Impact", t: "Improved scalability and deployment stability by 70%." },
        { h: "Orchestration", t: "Designed a distributed workflow platform on Tekton, enabling automated multi-tenant deployments across 50+ microservices." },
        { h: "API Excellence", t: "Owned the API architecture (REST and GraphQL), enforcing versioning, backward compatibility, and structured error standards via OpenAPI/Swagger." },
      ]},
      { num: "02", title: "Performance Engineering & Concurrency", Icon: Zap, items: [
        { h: "High-Volume Sync", t: "Built cron-based worker systems using Goroutines and Channels to sync thousands of GitHub repos, container registries, and clusters." },
        { h: "Race Condition Resolution", t: "Identified and resolved critical concurrency race conditions using Go\u2019s race detector, sync.WaitGroup, and mutexes." },
        { h: "Results", t: "Reduced deadlocks by 95%, production defects by 30%, and scaled capacity by 10x." },
      ]},
      { num: "03", title: "Multi-Cloud Resilience & Disaster Recovery", Icon: Cloud, items: [
        { h: "Zero-Downtime Infrastructure", t: "Built containerized pipelines using Docker and Kubernetes with automated rollback, reducing manual recovery effort by 40%." },
        { h: "The <10 Minute Restore", t: "Architected API-driven backup/restore pipelines using Velero and Tekton." },
        { h: "Parallel Streaming", t: "Parallelized streaming across AWS S3, GCS, Azure Blob, and MinIO, slashing recovery time from hours to under 10 minutes." },
      ]},
      { num: "04", title: "Security & API Integrations", Icon: Shield, items: [
        { h: "Third-Party Consolidation", t: "Debugged and consolidated 50+ external API integrations." },
        { h: "Security First", t: "Standardized authentication, token rotation, and request validation. Improved P95 latency consistency and reduced production error rate by 20%." },
        { h: "Idempotency", t: "Implemented idempotent execution patterns to ensure consistency during network partitions or service failures." },
      ]},
      { num: "05", title: "Observability & Full-Stack Experience", Icon: BarChart3, items: [
        { h: "Metrics that Matter", t: "Instrumented Prometheus metrics and built Grafana dashboards for worker health, queue depth, and latency." },
        { h: "Frontend Empowerment", t: "Revamped React/TypeScript architecture to create a real-time \u201cSelf-Diagnose\u201d dashboard, reducing support tickets." },
        { h: "On-Call Leadership", t: "Resolved high-priority production incidents by triaging Sentry errors and debugging MongoDB/Redis-backed services." },
      ]},
    ].map((s) => (
      <SectionCard key={s.num} num={s.num} title={s.title} Icon={s.Icon} items={s.items} />
    ))}
    {/* Mentorship */}
    <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-5 border border-border">
      <Users className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-foreground text-xs mb-1">Mentorship &amp; Team Leadership</p>
        <p className="text-xs text-muted-foreground">
          Mentored 2 junior engineers on Kubernetes and microservice debugging, improving team onboarding velocity.
        </p>
      </div>
    </div>
  </div>
)

const LevelupDetail = () => (
  <div className="space-y-8">
    <Card className="shadow-md border-primary/20">
      <CardContent className="p-6">
        <div className="flex items-start gap-3">
          <BookOpen className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
          <div>
            <h4 className="font-bold text-foreground mb-2">The Mission: Modernizing Educational Platforms</h4>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Transition legacy parts of the system into high-quality, scalable components
              following strict OOP and Clean Code principles.
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {[
        { category: "Backend", items: ["Java / Spring Boot", "REST APIs"], Icon: Code2 },
        { category: "Frontend", items: ["React", "JavaScript"], Icon: Layout },
        { category: "Database", items: ["SQL (PostgreSQL/MySQL)"], Icon: Database },
      ].map((g) => (
        <div key={g.category} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50">
          <g.Icon className="w-4 h-4 text-primary" />
          <p className="text-[10px] font-semibold text-foreground">{g.category}</p>
          <div className="flex flex-wrap justify-center gap-1">
            {g.items.map((i) => <Badge key={i} variant="secondary" className="text-[10px] px-1.5 py-0 bg-primary/10 text-primary border-primary/20">{i}</Badge>)}
          </div>
        </div>
      ))}
    </div>
    {[
      { num: "01", title: "Clean Code & Modular API Design", Icon: Code2, items: [
        { h: "The Approach", t: "Designed full-stack components and RESTful APIs using strict OOP and SOLID principles." },
        { h: "Scalability", t: "Decoupled frontend from backend logic, enabling new features without technical debt." },
        { h: "Documentation", t: "Followed industry standards for API documentation, ensuring seamless team handoffs." },
      ]},
      { num: "02", title: "Database Performance & Quality Assurance", Icon: Database, items: [
        { h: "Optimization", t: "Refactored SQL schemas and optimized database calls, significantly improving response times during peak usage." },
        { h: "Bug Resolution", t: "Triaged and fixed critical production bugs, ensuring high-quality delivery for educational platforms." },
        { h: "Testing", t: "Implemented unit tests to validate modular components, reducing regression rate for new deployments." },
      ]},
    ].map((s) => (
      <SectionCard key={s.num} num={s.num} title={s.title} Icon={s.Icon} items={s.items} />
    ))}
    <div className="flex items-start gap-3 bg-muted/50 rounded-xl p-5 border border-border">
      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
      <div>
        <p className="font-semibold text-foreground text-xs mb-1">Early Career Excellence</p>
        <p className="text-xs text-muted-foreground">
          Strict adherence to SOLID principles here directly shaped the high-scale systems and AI pipelines I build today.
        </p>
      </div>
    </div>
  </div>
)

/* ------------------------------------------------------------------ */
/*  Shared sub-component for section cards                             */
/* ------------------------------------------------------------------ */

function SectionCard({ num, title, Icon, items }: {
  num: string
  title: string
  Icon: React.ComponentType<{ className?: string }>
  items: { h: string; t: string }[]
}) {
  return (
    <Card className="shadow-md">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
            <Icon className="w-5 h-5 text-primary" />
          </div>
          <div>
            <p className="text-[10px] font-bold text-primary/60 tracking-widest uppercase">{num}</p>
            <CardTitle className="text-base font-bold text-foreground font-sans">{title}</CardTitle>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        {items.map((item) => (
          <div key={item.h} className="flex items-start gap-2">
            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <div className="text-sm">
              <span className="font-semibold text-foreground">{item.h}: </span>
              <span className="text-muted-foreground">{item.t}</span>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}

/* ------------------------------------------------------------------ */
/*  Map role ids to detail components                                  */
/* ------------------------------------------------------------------ */

const detailMap: Record<string, React.ComponentType> = {
  beckman: BeckmanDetail,
  aces: AcesDetail,
  truvara: TruvaraDetail,
  ozone: OzoneDetail,
  levelup: LevelupDetail,
}

/* ------------------------------------------------------------------ */
/*  Main component                                                     */
/* ------------------------------------------------------------------ */

export default function WorkExperience() {
  const [openId, setOpenId] = useState<string | null>(null)

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id))

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground font-sans mb-4">Work Experience</h2>
          <p className="text-lg text-muted-foreground font-sans">
            A timeline of engineering impact — click any role to explore the full case study
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-[9rem] top-0 bottom-0 w-px bg-primary/20 hidden md:block" />

          <div className="space-y-8">
            {roles.map((role) => {
              const isOpen = openId === role.id
              const Detail = detailMap[role.id]

              return (
                <div key={role.id} className="relative">
                  {/* Row: year | dot | card */}
                  <div className="flex items-start gap-6 md:gap-0">
                    {/* Year marker + location (left) */}
                    <div className="hidden md:flex w-[9rem] flex-shrink-0 flex-col items-end pr-6 pt-4">
                      <span className="text-sm font-bold text-primary whitespace-nowrap leading-tight">
                        {role.year}
                      </span>
                      <span className="flex items-center gap-1 mt-1 text-[11px] text-muted-foreground whitespace-nowrap">
                        <MapPin className="w-3 h-3" />
                        {role.location}
                      </span>
                    </div>

                    {/* Dot on the line */}
                    <div className="hidden md:flex flex-shrink-0 w-3 h-3 rounded-full bg-primary ring-4 ring-background mt-5 -ml-[6px] z-10" />

                    {/* Card (right) */}
                    <div className="flex-1 md:pl-6">
                      {/* Mobile year + location */}
                      <div className="mb-2 block md:hidden">
                        <span className="text-xs font-bold text-primary">{role.year}</span>
                        <span className="flex items-center gap-1 mt-0.5 text-[11px] text-muted-foreground">
                          <MapPin className="w-3 h-3" />{role.location}
                        </span>
                      </div>

                      <Card
                        className={`shadow-lg cursor-pointer transition-all duration-300 hover:shadow-xl border-border ${
                          isOpen ? "border-primary/50" : "hover:border-primary/30"
                        }`}
                        onClick={() => toggle(role.id)}
                      >
                        <CardContent className="p-5">
                          <div className="flex items-start justify-between gap-4">
                            <div className="flex-1 min-w-0">
                              <h3 className="text-lg font-bold text-foreground font-sans">
                                {role.title}
                              </h3>
                              <p className="text-sm text-primary font-medium">{role.company}</p>
                              {role.badge && (
                                <div className="inline-flex items-center gap-2 mt-3 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 rounded-lg px-3 py-1.5">
                                  <Trophy className="w-4 h-4 text-amber-500" />
                                  <span className="text-xs font-bold text-foreground">{role.badge.label}</span>
                                </div>
                              )}
                              <div className="flex flex-wrap gap-1.5 mt-3">
                                {role.tags.map((tag) => (
                                  <Badge
                                    key={tag}
                                    variant="secondary"
                                    className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary border-primary/20"
                                  >
                                    {tag}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            <div
                              className={`flex items-center gap-2 flex-shrink-0 rounded-lg px-4 py-2 text-sm font-semibold transition-all duration-300 shadow-md border border-primary/60 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer ${
                                isOpen
                                  ? "bg-primary text-primary-foreground"
                                  : "bg-amber-500 text-background hover:bg-amber-600"
                              }`}
                            >
                              <span>{isOpen ? "Close" : "View Work"}</span>
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-300 ${
                                  isOpen ? "rotate-180" : ""
                                }`}
                              />
                            </div>
                          </div>
                        </CardContent>
                      </Card>

                      {/* Accordion content */}
                      <div
                        className={`overflow-hidden transition-all duration-500 ease-in-out ${
                          isOpen ? "max-h-[5000px] opacity-100 mt-4" : "max-h-0 opacity-0"
                        }`}
                      >
                        {Detail && <Detail />}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
