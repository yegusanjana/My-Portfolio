"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Code2 } from "lucide-react"
import React, { useState } from "react";
const skillsData = [
  {
    title: "Programming",
    items: ["Python", "Golang", "C++", "TypeScript", "SQL"]
  },
  {
    title: "Frameworks/Libraries",
    items: ["React", "Next.js", "Tailwind", "FastAPI", "PyTorch", "TensorFlow", "Hugging Face"]
  },
  {
    title: "Cloud & DevOps",
    items: ["AWS (EKS, Lambda, S3)", "Docker", "Kubernetes", "Terraform", "CI/CD"]
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MongoDB", "Redis"]
  },
  {
    title: "AI/ML",
    items: ["Deep Learning", "Computer Vision", "NLP", "RAG", "Embeddings"]
  }
];

const additionalSkills = [
  "Bash", "Linux", "Tekton", "Strapi", "Spark", "Jenkins", "Helm", "Grafana", "Prometheus", "Cypress", "Postman", "Jira", "Confluence", "OOD", "Microservices", "SDLC"
];

const badgeClass = "bg-primary text-primary-foreground";


const Skills = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground font-sans mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground font-sans">
            Technical expertise across programming languages, frameworks, cloud, AI/ML, and more
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map(({ title, items }) => (
            <Card className="shadow-lg" key={title}>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                    <Code2 className="w-5 h-5 text-primary" />
                  </div>
                  <CardTitle className="text-lg font-bold text-primary font-sans">{title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {items.map((item) => (
                    <Badge key={item} className={badgeClass}>{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-10 text-center">
          <button
            className="text-primary underline font-medium focus:outline-none"
            onClick={() => setShowMore((v) => !v)}
            aria-expanded={showMore}
            aria-controls="additional-skills"
          >
            {showMore ? "Hide Additional Skills" : "Show More"}
          </button>
          {showMore && (
            <div id="additional-skills" className="mt-6 flex flex-wrap justify-center gap-2">
              {additionalSkills.map((item) => (
                <Badge key={item} className={badgeClass}>{item}</Badge>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Skills;
