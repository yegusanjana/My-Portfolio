import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Layout,
  FileCode2,
  Palette,
  Globe,
  RefreshCw,
  Users,
  MapPin,
} from "lucide-react"

const techStack = [
  {
    category: "Frontend",
    items: ["Next.js", "React", "TypeScript"],
    icon: Layout,
  },
  {
    category: "Styling",
    items: ["Tailwind CSS", "Radix UI"],
    icon: Palette,
  },
  {
    category: "Backend / CMS",
    items: ["Strapi", "REST APIs"],
    icon: Globe,
  },
]

const sections = [
  {
    number: "01",
    title: "Architecting the GRC Platform",
    icon: FileCode2,
    content: [
      {
        heading: "Scalable Frontend",
        text: "Built the core platform using Next.js, leveraging Server-Side Rendering (SSR) to ensure fast initial load times for complex data tables and compliance reports.",
      },
      {
        heading: "Type Safety",
        text: "Utilized TypeScript to enforce strict data models across the platform, significantly reducing runtime errors in the financial reporting modules.",
      },
      {
        heading: "User Impact",
        text: "Successfully deployed the platform to a pilot group of 500+ users, maintaining high performance under concurrent data-heavy sessions.",
      },
    ],
  },
  {
    number: "02",
    title: "Headless CMS Strategy",
    icon: RefreshCw,
    content: [
      {
        heading: "Decoupled Content",
        text: "Integrated Strapi CMS via REST APIs to separate the compliance content from the application logic.",
      },
      {
        heading: "The Result",
        text: "This architectural shift allowed real-time content updates without code changes, reducing release overhead by 60%.",
      },
      {
        heading: "Workflow Automation",
        text: "Configured webhooks to trigger incremental static regeneration (ISR) in Next.js, ensuring users always saw the latest regulatory data without sacrificing speed.",
      },
    ],
  },
  {
    number: "03",
    title: "Design System & UX Refinement",
    icon: Palette,
    content: [
      {
        heading: "Reusable Component Library",
        text: "Developed a library of 30+ highly accessible UI components using Radix UI and Tailwind CSS. This ensured a consistent look and feel across the dashboard, audit logs, and risk assessment modules.",
      },
      {
        heading: "Feedback-Driven Iteration",
        text: 'Conducted user feedback sessions with compliance managers to refine the UX, leading to a more intuitive navigation flow and a reduction in "time-to-task" for filing risk reports.',
      },
    ],
  },
]

const TruvaraCaseStudy = () => (
  <section id="truvara-case-study" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
          Case Study
        </Badge>
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">
          Scalable GRC &amp; Content Infrastructure
        </h2>
        <p className="text-lg text-muted-foreground font-sans max-w-3xl mx-auto">
          Software Engineer &nbsp;|&nbsp; Truvara Technologies LLP &nbsp;|&nbsp; May 2025 – Jul 2025
        </p>
        <div className="flex justify-center mt-2">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" /> Remote
          </span>
        </div>
      </div>

      {/* The Challenge */}
      <Card className="mb-12 shadow-lg border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <Globe className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-sans">
                The Challenge: Transitioning from Static to Dynamic Compliance
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Truvara needed a high-performance GRC (Governance, Risk, and Compliance)
                platform capable of serving 500+ users. The primary challenge was the
                &ldquo;Release Overhead&rdquo;&mdash;every time a compliance regulation changed,
                engineers had to manually update code and redeploy.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                <span className="text-foreground">The Goal:</span> Build a scalable, secure
                frontend and a dynamic content delivery system to allow non-technical compliance
                officers to update platform content in real-time.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {[
          { value: "500+", label: "Active Platform Users" },
          { value: "60%", label: "Reduction in Release Overhead" },
          { value: "30+", label: "Reusable UI Components" },
        ].map((m) => (
          <Card key={m.label} className="text-center shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <p className="text-3xl font-extrabold text-primary mb-1">{m.value}</p>
              <p className="text-xs text-muted-foreground leading-tight">{m.label}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Tech Stack */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-14">
        {techStack.map((group) => (
          <div
            key={group.category}
            className="flex flex-col items-center gap-2 p-5 rounded-xl bg-background border border-border"
          >
            <group.icon className="w-5 h-5 text-primary mb-1" />
            <p className="text-xs font-semibold text-foreground">{group.category}</p>
            <div className="flex flex-wrap justify-center gap-1.5">
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
    </div>
  </section>
)

export default TruvaraCaseStudy
