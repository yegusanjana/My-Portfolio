import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Server, Brain, Activity } from "lucide-react"

const focusAreas = [
  {
    icon: Server,
    label: "Systems",
    description:
      "Go (concurrency primitives), C++ (performance optimization), and Kubernetes-native infrastructure.",
  },
  {
    icon: Brain,
    label: "AI / ML",
    description:
      "Computer Vision (PyTorch, OpenCV) and Agentic Workflow design.",
  },
  {
    icon: Activity,
    label: "Observability",
    description:
      "Implementing tracing and monitoring (Prometheus, Langfuse) to move AI from research to production.",
  },
]

const About = () => (
  <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-5xl mx-auto space-y-10">
      <h2 className="text-4xl font-bold text-center text-foreground font-sans">About</h2>

      <Card className="shadow-lg border-border">
        <CardContent className="pt-8 space-y-6 text-[0.95rem] leading-relaxed text-muted-foreground">
          <p>
            I am a <span className="text-foreground font-medium">Software Engineer</span> and{" "}
            <span className="text-foreground font-medium">MCS student at UIUC</span>, specializing in
            Distributed Systems and Applied AI.
          </p>

          <p>
            My background is centered on building infrastructure that handles scale and complexity. At{" "}
            <span className="text-foreground font-medium">Ozone Cloud</span>, I spent two years architecting
            Go-based microservices to orchestrate workflows across 1,000+ repositories and managing multi-cloud
            disaster recovery with Kubernetes and Velero. This experience gave me a deep interest in system
            reliability and the &ldquo;hard&rdquo; problems of concurrency.
          </p>

          <p>
            Currently, I&rsquo;m focused on the intersection of systems and intelligence. At the{" "}
            <span className="text-foreground font-medium">Beckman Institute</span> and{" "}
            <span className="text-foreground font-medium">ACES</span>, I&rsquo;ve been building the
            &ldquo;plumbing&rdquo; for modern AI—specifically 3D gaze estimation pipelines and agentic RAG
            workflows using LangGraph and Azure AI Search.
          </p>
        </CardContent>
      </Card>

      {/* Core Technical Focus */}
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-foreground text-center">Core Technical Focus</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {focusAreas.map(({ icon: Icon, label, description }) => (
            <Card
              key={label}
              className="border-border hover:border-primary/40 transition-colors shadow-sm"
            >
              <CardContent className="pt-6 space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-md bg-primary/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-primary" />
                  </div>
                  <Badge variant="secondary" className="text-sm font-semibold">
                    {label}
                  </Badge>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <p className="text-center text-muted-foreground text-[0.95rem] max-w-3xl mx-auto">
        I build software that is <span className="text-foreground font-medium">deterministic</span>,{" "}
        <span className="text-foreground font-medium">scalable</span>, and{" "}
        <span className="text-foreground font-medium">observable</span>. If you&rsquo;re working on
        high-performance backends or the infrastructure side of AI, I&rsquo;d love to connect.
      </p>
    </div>
  </section>
)

export default About
