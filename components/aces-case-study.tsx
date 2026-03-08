import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Workflow,
  Search,
  Wrench,
  FileText,
  BarChart3,
  Zap,
  Target,
} from "lucide-react"

const techStack = [
  {
    category: "Orchestration",
    items: ["LangGraph", "GPT-4.1", "LangChain"],
    icon: Workflow,
  },
  {
    category: "Search & Vector",
    items: ["Azure AI Search", "FAISS", "OpenAI Embeddings"],
    icon: Search,
  },
  {
    category: "Dev Tools",
    items: ["Cursor", "GitHub Copilot (Agent Mode)", "PyMuPDF"],
    icon: Wrench,
  },
]

const sections = [
  {
    number: "01",
    title: "Orchestrating Autonomy with LangGraph",
    icon: Workflow,
    content: [
      {
        heading: "The Directed Acyclic Graph (DAG)",
        text: 'Modeled the assistant\u2019s logic as a graph where nodes represent specific tasks (e.g., "Query Expansion," "Source Validation," "Final Synthesis").',
      },
      {
        heading: "Conditional Logic",
        text: "The agent evaluates the quality of retrieved documents; if the information is insufficient, it autonomously triggers a secondary search with refined parameters before answering the user.",
      },
      {
        heading: "Impact",
        text: "Reduced manual research synthesis time by 60% for department-wide stakeholders.",
      },
    ],
  },
  {
    number: "02",
    title: "High-Performance Data Ingestion & Retrieval",
    icon: FileText,
    content: [
      {
        heading: "Document Parsing",
        text: "Leveraged PyMuPDF to extract clean text and metadata from complex, multi-column research papers.",
      },
      {
        heading: "High-Dimensional Indexing",
        text: "Utilized OpenAI Embeddings to transform text into vectors, indexed in Azure AI Search (VectorDB).",
      },
      {
        heading: "Semantic Precision",
        text: "Fine-tuned the retrieval layer using hybrid search (combining keyword and vector results) to ensure the assistant cited the most relevant 0.1% of the total knowledge base.",
      },
    ],
  },
  {
    number: "03",
    title: "AI-Native Development & Quality Control",
    icon: BarChart3,
    content: [
      {
        heading: "Development Velocity",
        text: "Accelerated delivery by 40% by adopting AI-native workflows. Using Cursor and GitHub Copilot Agent Mode, automated the generation of unit tests for the RAG pipeline and performed real-time performance profiling.",
      },
      {
        heading: "Observability with Langfuse",
        text: 'Monitored "hallucination rates" and "token costs" across every LLM call to keep the production system efficient and accurate. Traced multi-step agent executions end-to-end for debugging and optimization.',
      },
    ],
  },
]

const AcesCaseStudy = () => (
  <section id="aces-case-study" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center gap-2 mb-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
            Research Case Study
          </Badge>
          <Badge className="bg-emerald-500/10 text-emerald-600 border-emerald-500/20 text-sm px-4 py-1 dark:text-emerald-400">
            Production-Grade
          </Badge>
        </div>
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">
          Agentic RAG &amp; Knowledge Synthesis
        </h2>
        <p className="text-lg text-muted-foreground font-sans max-w-3xl mx-auto">
          AI Engineer (Research Assistant) &nbsp;|&nbsp; ACES, UIUC
        </p>
      </div>

      {/* The Challenge */}
      <Card className="mb-12 shadow-lg border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <Target className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-sans">
                The Challenge: The &ldquo;Research Bottleneck&rdquo;
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                Department-wide stakeholders at ACES were overwhelmed by a massive influx of
                technical documentation and research papers. Manual synthesis was slow, prone to
                oversight, and non-scalable.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                <span className="text-foreground">The Goal:</span> Build an autonomous assistant
                that doesn&rsquo;t just &ldquo;find&rdquo; text, but reasons through documents to
                provide synthesized, citation-backed research reports.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Agent Workflow Diagram */}
      <div className="mb-14">
        <h3 className="text-sm font-bold text-primary/60 tracking-widest uppercase text-center mb-6">
          Agent Workflow
        </h3>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-0">
          {[
            { label: "User Query", icon: Search },
            { label: "Retrieval", icon: FileText },
            { label: "Evaluation", icon: BarChart3 },
            { label: "Re-writing", icon: Wrench },
            { label: "Final Response", icon: Zap },
          ].map((step, i, arr) => (
            <div key={step.label} className="flex items-center gap-3 sm:gap-0">
              <div className="flex flex-col items-center gap-2">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                  {step.label}
                </span>
              </div>
              {i < arr.length - 1 && (
                <svg
                  className="w-8 h-4 text-primary/40 hidden sm:block mx-2"
                  viewBox="0 0 32 16"
                  fill="none"
                >
                  <path
                    d="M0 8h24M24 8l-6-5M24 8l-6 5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
        {[
          { value: "60%", label: "Reduction in Manual Research Time" },
          { value: "40%", label: "Faster Delivery via AI-Native Workflow" },
          { value: "0.1%", label: "Precision — Top Cited Documents" },
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
            className="flex flex-col items-center gap-2 p-5 rounded-xl bg-muted/50"
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

export default AcesCaseStudy
