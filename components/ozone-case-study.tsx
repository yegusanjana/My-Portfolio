import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Trophy,
  Server,
  Zap,
  Shield,
  BarChart3,
  Cloud,
  Database,
  Container,
  GitBranch,
  Users,
} from "lucide-react"

const metrics = [
  { value: "70%", label: "Deployment Stability Increase" },
  { value: "95%", label: "Reduction in Deadlocks" },
  { value: "<10m", label: "Multi-Cloud Recovery" },
  { value: "10x", label: "Capacity Scaling" },
]

const techStack = [
  {
    category: "Backend",
    items: ["Go", "Node.js", "GraphQL"],
    icon: Server,
  },
  {
    category: "Infrastructure",
    items: ["Kubernetes", "Tekton", "Docker", "Velero"],
    icon: Container,
  },
  {
    category: "Data",
    items: ["MongoDB", "Redis", "Kafka", "RabbitMQ"],
    icon: Database,
  },
  {
    category: "Cloud",
    items: ["AWS", "GCP", "Azure"],
    icon: Cloud,
  },
]

const sections = [
  {
    number: "01",
    title: "Architectural Refactoring & Microservices",
    icon: GitBranch,
    content: [
      {
        heading: "The Transition",
        text: "Led the refactoring of a monolithic application into a distributed microservices architecture using Golang, TypeScript, and MongoDB.",
      },
      {
        heading: "The Impact",
        text: "Improved scalability and deployment stability by 70%.",
      },
      {
        heading: "Orchestration",
        text: "Designed a distributed workflow platform built on Tekton, enabling automated multi-tenant deployments and deterministic state tracking across 50+ microservices.",
      },
      {
        heading: "API Excellence",
        text: "Owned the API architecture (both REST and GraphQL), enforcing versioning, backward compatibility, and structured error standards via OpenAPI/Swagger.",
      },
    ],
  },
  {
    number: "02",
    title: 'Performance Engineering & Concurrency — The "Go" Deep Dive',
    icon: Zap,
    content: [
      {
        heading: "High-Volume Sync",
        text: "Built cron-based worker systems using Goroutines and Channels to reliably sync thousands of GitHub repos, container registries, and clusters.",
      },
      {
        heading: "Race Condition Resolution",
        text: "Identified and resolved critical concurrency race conditions in production using Go\u2019s race detector and primitives like sync.WaitGroup and mutexes.",
      },
      {
        heading: "Results",
        text: "Reduced system deadlocks by 95% and production defects by 30%, while scaling system capacity by 10x.",
      },
    ],
  },
  {
    number: "03",
    title: "Multi-Cloud Resilience & Disaster Recovery",
    icon: Cloud,
    content: [
      {
        heading: "Zero-Downtime Infrastructure",
        text: "Built containerized pipelines using Docker and Kubernetes, enabling automated rollback strategies that reduced manual recovery effort by 40%.",
      },
      {
        heading: "The <10 Minute Restore",
        text: "Architected API-driven backup/restore pipelines using Velero and Tekton.",
      },
      {
        heading: "Parallel Streaming",
        text: "Implemented parallelized streaming across AWS S3, GCS, Azure Blob, and MinIO, slashing cluster recovery time from hours to under 10 minutes.",
      },
    ],
  },
  {
    number: "04",
    title: "Security & API Integrations",
    icon: Shield,
    content: [
      {
        heading: "Third-Party Consolidation",
        text: "Debugged and consolidated 50+ external API integrations.",
      },
      {
        heading: "Security First",
        text: "Standardized authentication, token rotation, and request validation. This improved P95 latency consistency and reduced the production error rate by 20%.",
      },
      {
        heading: "Idempotency",
        text: "Implemented idempotent execution patterns to ensure distributed workflows remained consistent even during network partitions or service failures.",
      },
    ],
  },
  {
    number: "05",
    title: "Observability & Full-Stack Experience",
    icon: BarChart3,
    content: [
      {
        heading: "Metrics that Matter",
        text: 'Instrumented Prometheus metrics and built Grafana dashboards to visualize worker health, queue depth, and latency.',
      },
      {
        heading: "Frontend Empowerment",
        text: 'Revamped the React/TypeScript architecture to create a real-time "Self-Diagnose" dashboard. This allowed users to visualize execution states and debug their own automation pipelines, significantly reducing support tickets.',
      },
      {
        heading: "On-Call Leadership",
        text: "Resolved high-priority production incidents by triaging Sentry errors and debugging services backed by MongoDB and Redis.",
      },
    ],
  },
]

const OzoneCaseStudy = () => (
  <section id="ozone-case-study" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
          Case Study
        </Badge>
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">
          Distributed CI/CD &amp; Workflow Orchestration
        </h2>
        <p className="text-lg text-muted-foreground font-sans max-w-3xl mx-auto">
          Software Engineer &nbsp;|&nbsp; Ozone Cloud &nbsp;|&nbsp; Jan 2023 – Dec 2024
        </p>
      </div>

      {/* Developer of the Month Badge */}
      <div className="flex justify-center mb-12">
        <div className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500/10 via-yellow-500/10 to-amber-500/10 border border-amber-500/30 rounded-xl px-6 py-3">
          <Trophy className="w-6 h-6 text-amber-500" />
          <div>
            <p className="font-bold text-foreground text-sm">
              Developer of the Month — Feb 2024
            </p>
            <p className="text-xs text-muted-foreground">
              Awarded for excellence in system refactoring and incident resolution
            </p>
          </div>
        </div>
      </div>

      {/* Executive Summary */}
      <Card className="mb-12 shadow-lg border-primary/20">
        <CardContent className="p-8">
          <h3 className="text-lg font-bold text-primary mb-3 font-sans">Executive Summary</h3>
          <p className="text-muted-foreground leading-relaxed">
            At Ozone Cloud, I owned the core API architecture and integrations platform.
            I transitioned a monolithic legacy system into a scalable, multi-tenant
            microservices architecture that coordinated execution across 50+ services,
            synchronized 1,000+ repositories, and managed multi-cloud disaster recovery.
          </p>
        </CardContent>
      </Card>

      {/* Metrics Carousel */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
        {metrics.map((m) => (
          <Card key={m.label} className="text-center shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <p className="text-3xl font-extrabold text-primary mb-1">{m.value}</p>
              <p className="text-xs text-muted-foreground leading-tight">{m.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tech Stack Icons */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {techStack.map((group) => (
          <div
            key={group.category}
            className="flex flex-col items-center gap-2 p-4 rounded-xl bg-muted/50"
          >
            <group.icon className="w-5 h-5 text-primary mb-1" />
            <p className="text-xs font-semibold text-foreground">{group.category}</p>
            <div className="flex flex-wrap justify-center gap-1">
              {group.items.map((item) => (
                <Badge
                  key={item}
                  variant="secondary"
                  className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary border-primary/20"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed Sections */}
      <div className="space-y-10">
        {sections.map((section) => (
          <Card key={section.number} className="shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <section.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-xs font-bold text-primary/60 tracking-widest uppercase mb-0.5">
                    Section {section.number}
                  </p>
                  <CardTitle className="text-xl font-bold text-foreground font-sans">
                    {section.title}
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {section.content.map((item) => (
                <div key={item.heading} className="flex items-start gap-3">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <div>
                    <span className="font-semibold text-foreground">{item.heading}: </span>
                    <span className="text-muted-foreground">{item.text}</span>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Mentorship Note */}
      <div className="mt-10 flex items-start gap-4 bg-muted/50 rounded-xl p-6 border border-border">
        <Users className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground text-sm mb-1">Mentorship &amp; Team Leadership</p>
          <p className="text-sm text-muted-foreground">
            Mentored 2 junior engineers on Kubernetes and microservice debugging, improving
            team onboarding velocity. This hands-on leadership accelerated their path to
            independent production deployments.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default OzoneCaseStudy
