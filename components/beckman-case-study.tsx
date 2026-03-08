import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Eye,
  Brain,
  Activity,
  Camera,
  Scan,
  AlertTriangle,
  Info,
} from "lucide-react"

const techStack = [
  {
    category: "Vision",
    items: ["PyTorch", "OpenCV", "MediaPipe", "HRNet", "L2CS-Net"],
    icon: Eye,
  },
  {
    category: "Research Tools",
    items: ["L2CS-Net", "MPIIGaze", "PyAFAR"],
    icon: Brain,
  },
  {
    category: "Observability",
    items: ["Langfuse", "Claude Code (MCP)"],
    icon: Activity,
  },
]

const sections = [
  {
    number: "01",
    title: "3D Gaze Estimation & Geometric Calibration",
    icon: Scan,
    content: [
      {
        heading: "Model Deployment",
        text: "Spearheaded the integration of L2CS-Net and HRNet architectures to predict 3D gaze vectors from unconstrained, multi-camera environments.",
      },
      {
        heading: "OpenCV Calibration Pipeline",
        text: "Developed a custom camera calibration workflow using intrinsics/extrinsics alignment and distortion correction to map 2D facial landmarks into a unified 3D coordinate system.",
      },
      {
        heading: "MediaPipe Iris Integration",
        text: "Integrated MediaPipe Iris for fine-grained iris tracking, providing a secondary anchor for gaze probability estimates.",
      },
      {
        heading: "Results",
        text: 'Produced high-fidelity gaze vectors that allowed researchers to quantify "joint attention" without manual frame-by-frame coding.',
      },
    ],
  },
  {
    number: "02",
    title: "Infant Facial Expression Recognition (FER)",
    icon: Camera,
    content: [
      {
        heading: "Architecture",
        text: "Developed a CNN-based pipeline in PyTorch specifically tuned for infant facial action units.",
      },
      {
        heading: 'Overcoming the "Texture Gap"',
        text: 'Infant faces lack the "wrinkle" cues adults use for expressions like anger or sadness. Utilized HRNet for robust landmark detection even under partial occlusion or rapid head turns.',
      },
      {
        heading: "Benchmarking",
        text: "Achieved a 58% Macro-F1 score. Used Confusion Matrices to identify and mitigate model bias between \u201cneutral\u201d and \u201cpositive\u201d states.",
      },
    ],
  },
  {
    number: "03",
    title: 'AI-Native Observability — The "Modern" Researcher',
    icon: Activity,
    content: [
      {
        heading: "Langfuse Tracing",
        text: "Implemented Langfuse to monitor the execution of automated annotation agents, tracing exactly where a model failed in a multi-step video processing pipeline.",
      },
      {
        heading: "Claude Code (CLI) Integration",
        text: "Utilized Claude Code and the Model Context Protocol (MCP) to automate the debugging of training scripts and data-processing logs.",
      },
      {
        heading: "Impact",
        text: "Reduced manual debugging and technical overhead by 30%, allowing the research team to focus on behavioral insights rather than pipeline failures.",
      },
    ],
  },
]

const BeckmanCaseStudy = () => (
  <section id="beckman-case-study" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <Badge className="mb-4 bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
          Research Case Study
        </Badge>
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">
          Computer Vision for Behavioral Research
        </h2>
        <p className="text-lg text-muted-foreground font-sans max-w-3xl mx-auto">
          AI Engineer &amp; Research Assistant &nbsp;|&nbsp; Beckman Institute for Advanced Science &amp; Technology, UIUC
        </p>
      </div>

      {/* The Challenge */}
      <Card className="mb-12 shadow-lg border-amber-500/20 bg-gradient-to-r from-amber-500/5 to-transparent">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-7 h-7 text-amber-500 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-sans">
                The Challenge: The &ldquo;Infant Data&rdquo; Problem
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Standard Computer Vision models are trained on adults. When applied to infants,
                performance drops due to different facial proportions, lack of defined features
                (wrinkles/texture), and high-frequency erratic movement.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                <span className="text-foreground">The Goal:</span> Automate the analysis of
                multi-camera behavioral videos to track infant gaze and mother-infant emotional
                synchrony.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

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

      {/* F1 Score Technical Note */}
      <div className="mt-10 flex items-start gap-4 bg-blue-500/5 border border-blue-500/20 rounded-xl p-6">
        <Info className="w-6 h-6 text-blue-500 flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground text-sm mb-1">Technical Note: Why 58% Macro-F1?</p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Infant FER is a zero-shot/few-shot frontier. Traditional models trained on
            &ldquo;AffectNet&rdquo; fail on infants due to fundamentally different facial
            geometry and expression patterns. Our pipeline bridges this gap through
            fine-tuning on behavioral datasets, and 58% represents a significant automation
            of previously manual frame-by-frame annotation tasks.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default BeckmanCaseStudy
