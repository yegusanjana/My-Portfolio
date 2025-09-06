import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Calendar } from "lucide-react"


const experiences = [
  {
    company: "Truvara Technologies LLP",
    title: "Software Engineer",
    period: "May 2025 – Jul 2025",
    details: [
      "Built and deployed a scalable GRC platform (Next.js, TypeScript) for 500+ users.",
      "Integrated Strapi CMS for real-time content updates, reducing release overhead by 60%.",
      "Developed 30+ reusable UI components (Radix UI, Tailwind) and refined UX via user feedback."
    ],
    skills: ["Next.js", "TypeScript", "React", "Tailwind", "Strapi", "REST APIs"]
  },
  {
    company: "Ozone Cloud",
    title: "Software Engineer",
    period: "Jul 2023 – Dec 2024",
    details: [
      "Revamped full-stack architecture with modern standards; earned Developer of the Month (Mar 2024).",
      "Enhanced Tekton CI/CD pipelines, automating 15+ workflows and reducing manual effort by 70%.",
      "Engineered Velero-based backup/restore across AWS, GCP, Azure, and MinIO for reliable multi-cloud recovery.",
      "Optimized Kubernetes manifests and containerization for high-volume deployments.",
      "Streamlined 50+ service integrations, improving security posture and test coverage."
    ],
    skills: ["Golang", "Kubernetes", "Tekton", "Velero", "AWS", "GCP", "Azure", "Docker", "CI/CD"]
  },
  {
    company: "Ozone Cloud",
    title: "Trainee Software Engineer",
    period: "Jan 2023 – Jun 2023",
    details: [
      "Collaborated in a 5-member team to implement a Backstage developer portal, reducing onboarding time.",
      "Co-developed blockchain MVP using Agile methods, accelerating prototyping and validation.",
      "Authored 50+ automated test cases, cutting production defects by 15%."
    ],
    skills: ["Golang", "Blockchain", "Agile", "QA Automation"]
  },
  {
    company: "Level UP",
    title: "Student Intern",
    period: "May 2022 – Jul 2022",
    details: [
      "Designed Figma templates for web pages.",
      "Maintained website blogs via WordPress."
    ],
    skills: ["Figma", "WordPress"]
  }
];

const Experience = () => (
  <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">Experience</h2>
        <p className="text-lg text-muted-foreground font-sans">
          Professional journey in software engineering, cloud, and UI/UX
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary/30"></div>
        <div className="space-y-12">
          {experiences.map((exp, idx) => (
            <div key={exp.company + exp.title + exp.period} className="relative flex items-start gap-6">
              <div className="flex-shrink-0 w-16 h-16 bg-primary rounded-full flex items-center justify-center ring-4 ring-background">
                <Building2 className="w-8 h-8 text-primary-foreground" />
              </div>
              <Card className="flex-1 shadow-lg">
                <CardHeader>
                  <div className="flex items-center justify-between flex-wrap gap-2">
                    <CardTitle className="text-xl font-bold text-primary font-sans">{exp.title} – {exp.company}</CardTitle>
                    <Badge variant="outline" className="border-primary/30 text-primary">
                      <Calendar className="w-3 h-3 mr-1" />
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-muted-foreground mb-2">
                    {exp.details.map((d, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        {d}
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, i) => (
                      <Badge key={i} variant="secondary" className="text-xs px-2 py-1 bg-muted-foreground/10 text-muted-foreground border-none">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
)

export default Experience;
