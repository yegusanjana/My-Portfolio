import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Code2,
  Database,
  Layout,
  BookOpen,
  MapPin,
  CheckCircle2,
} from "lucide-react"

const techStack = [
  {
    category: "Backend",
    items: ["Java / Spring Boot", "REST APIs"],
    icon: Code2,
  },
  {
    category: "Frontend",
    items: ["React", "JavaScript"],
    icon: Layout,
  },
  {
    category: "Database",
    items: ["SQL (PostgreSQL/MySQL)"],
    icon: Database,
  },
]

const sections = [
  {
    number: "01",
    title: "Clean Code & Modular API Design",
    icon: Code2,
    content: [
      {
        heading: "The Approach",
        text: "Designed and implemented full-stack components and RESTful APIs using strict Object-Oriented Programming (OOP) and Clean Code principles (SOLID).",
      },
      {
        heading: "Scalability",
        text: "By decoupling frontend components from backend logic, ensured that new features could be added to the educational platform without technical debt, enhancing overall system maintainability.",
      },
      {
        heading: "Documentation",
        text: "Followed industry standards for API documentation, ensuring seamless handoffs between the frontend and backend teams.",
      },
    ],
  },
  {
    number: "02",
    title: "Database Performance & Quality Assurance",
    icon: Database,
    content: [
      {
        heading: "Optimization",
        text: "Collaborated with senior engineers to identify slow-running queries. By refactoring SQL schemas and optimizing database calls, significantly improved the application\u2019s response time during peak usage.",
      },
      {
        heading: "Bug Resolution",
        text: "Actively triaged and fixed critical bugs in the production environment, ensuring high-quality software delivery and a seamless learning experience for students and educators.",
      },
      {
        heading: "Testing",
        text: "Implemented unit tests to validate modular components, reducing the regression rate for new platform deployments.",
      },
    ],
  },
]

const LevelupCaseStudy = () => (
  <section id="levelup-case-study" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <div className="flex justify-center gap-2 mb-4">
          <Badge className="bg-primary/10 text-primary border-primary/20 text-sm px-4 py-1">
            Case Study
          </Badge>
          <Badge className="bg-violet-500/10 text-violet-600 border-violet-500/20 text-sm px-4 py-1 dark:text-violet-400">
            Full-Stack Foundations
          </Badge>
        </div>
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">
          Full-Stack Engineering &amp; Platform Scalability
        </h2>
        <p className="text-lg text-muted-foreground font-sans max-w-3xl mx-auto">
          Software Engineer Intern &nbsp;|&nbsp; LevelUp Learning &nbsp;|&nbsp; May 2022 – Jul 2022
        </p>
        <div className="flex justify-center mt-2">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="w-3.5 h-3.5" /> Chennai, India
          </span>
        </div>
      </div>

      {/* The Mission */}
      <Card className="mb-12 shadow-lg border-primary/20">
        <CardContent className="p-8">
          <div className="flex items-start gap-4">
            <BookOpen className="w-7 h-7 text-primary flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-bold text-foreground mb-3 font-sans">
                The Mission: Modernizing Educational Platforms
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-3">
                LevelUp Learning required a modular approach to their educational software to
                handle an increasing user base. My role was to transition legacy parts of the
                system into high-quality, scalable components.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium">
                <span className="text-foreground">Focus:</span> Full-Stack Development, REST API
                Design, OOP, Database Optimization
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

      {/* Foundations Note */}
      <div className="mt-10 flex items-start gap-4 bg-muted/50 rounded-xl p-6 border border-border">
        <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
        <div>
          <p className="font-semibold text-foreground text-sm mb-1">Early Career Excellence</p>
          <p className="text-sm text-muted-foreground">
            This role laid the foundation for my engineering career&mdash;strict adherence to
            SOLID principles and Clean Code practices here directly shaped the high-scale
            distributed systems and AI pipelines I build today.
          </p>
        </div>
      </div>
    </div>
  </section>
)

export default LevelupCaseStudy
