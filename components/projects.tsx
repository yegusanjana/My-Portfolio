import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    title: "High-Performance Log Processing Engine",
    date: "Dec 2025",
    description: "Multithreaded log processing engine built for maximum throughput using zero-copy memory (mmap), achieving a 4× throughput improvement over baseline. Developed a high-speed log parser utilizing SIMD instructions and lock-free data structures to eliminate thread contention and maximize CPU cache efficiency.",
    skills: ["C++", "SIMD", "Lock-free Data Structures", "mmap", "Multithreading", "Zero-Copy I/O"],
  },
  {
    title: "Yield Prediction with NDVI",
    date: "Aug 2025",
    description: "Geospatial ML pipeline to forecast county-level crop yields from satellite NDVI and USDA data. Achieved Linear R² 0.993 / RMSE 0.811 and RF R² 0.952 / RMSE 2.172, with explainable coefficients and feature importances.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Joblib", "Matplotlib", "Remote Sensing (NDVI)", "GIS", "CLI Tooling"],
    github: "https://github.com/yegusanjana/crop-yield-ndvi",
  },
  {
    title: "SOAP.AI",
    date: "Jul 2025",
    description: "Multimodal AI platform for video-based clinical and educational analysis. Developed speaker diarization pipeline (Resemblyzer + clustering), domain-adaptive video analysis, and vision–language fusion for context-sensitive QA.",
    skills: ["GPT-4 / GPT-4o (Vision)", "Azure Whisper", "Resemblyzer", "Scikit-learn", "OpenCV", "MoviePy", "PyDub", "FastAPI", "Python", "Pandas", "NumPy"],
    github: "https://github.com/yegusanjana/SOAP.AI",
  },
  {
    title: "Truvara.ai",
    date: "May 2025",
    description: "Community-driven GRC platform serving 500+ compliance professionals. Delivered reusable UI components, Strapi CMS integration, and GitHub-powered content automation.",
    skills: ["Next.js", "TypeScript", "React", "Tailwind", "Strapi", "REST APIs"],
    github: "https://github.com/pwnk77/libre-grc",
  },
  {
    title: "Document QA System",
    date: "May 2025",
    description: "Type-aware Retriever–Reader pipeline with LangChain for intelligent document retrieval. Integrated Cohere embeddings, FAISS, and HuggingFace RoBERTa reader, deployed as a Flask web app for PDF ingestion and QA.",
    skills: ["Python", "Flask", "Pandas", "NumPy", "LangChain", "FAISS", "Cohere Embeddings", "Hugging Face Transformers (RoBERTa)"],
    github: "https://github.com/yegusanjana/DocQA-RAG",
  },
  {
    title: "Synapo: AI-Native Social Messaging Platform",
    date: "Feb 2025",
    description: "Architected a high-concurrency messaging backbone with LLM-driven summarization, achieving <200ms API latency. Optimized query execution by 35% for 50+ pilot users by implementing a real-time messaging subsystem and Redis caching layer for frequently accessed chat metadata.",
    skills: ["PostgreSQL", "Redis", "Python", "LLM Integration", "Real-time Messaging", "Caching"],
    github: "https://github.com/cs411-alawini/sp25-cs411-team076-CommitAndRollback",
  },
  {
    title: "Deep Learning for Indian Sign Language Recognition",
    date: "May 2023",
    description: "CNN-based system achieving 99.41% accuracy for 36 ISL alphabets and digits. Enabled real-time detection and co-authored a research paper based on project results.",
    skills: ["OpenCV", "Computer Vision", "Keras", "TensorFlow", "CNN", "Python", "HTML", "Flask"],
    github: "https://github.com/Av1352/Indian-Sign-Language-Recognition",
  },
  {
    title: "Music Recommendation with Facial Emotion Recognition",
    date: "Dec 2022",
    description: "Emotion-aware music recommendation system using CNN-based facial recognition with 96% validation accuracy. Published in IJRAR (Vol. 9, No. 4, pp. 22–26, Dec 2022). [Read the paper](https://www.ijrar.org/papers/IJRAR22D2280.pdf)",
    skills: ["OpenCV", "Keras", "TensorFlow", "CNN", "Python", "Flask"],
    github: "https://github.com/Av1352/Music-recommendation-system",
    paper: "https://www.ijrar.org/papers/IJRAR22D2280.pdf",
  },
  {
    title: "Car Wash Booking App",
    date: "Aug 2022",
    description: "Full-stack web app for scheduling and managing car wash appointments. Enabled admin dashboards and streamlined booking workflows.",
    skills: ["Python", "MongoDB", "JavaScript", "HTML", "CSS"],
    github: "https://github.com/yegusanjana/Car-Wash-Booking-Application",
  },
]

const Projects = () => (
  <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">All Projects</h2>
        <p className="text-lg text-muted-foreground font-sans">
          Showcasing my work in AI, cloud computing, and full-stack development
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => {
          const card = (
            <Card className={`h-full group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 relative ${project.github ? "cursor-pointer" : ""}`}>
              {/* date badge */}
              <span className="absolute top-3 right-4 z-10">
                <Badge variant="outline" className="border-primary/30 text-primary">
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 mr-1 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                  {project.date}
                </Badge>
              </span>

              <CardHeader className="pr-16 pt-8">
                <CardTitle className="text-xl font-bold text-primary font-sans group-hover:text-primary/80 transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                      {skill}
                    </Badge>
                  ))}
                </div>

                {/* GitHub button and Paper button */}
                <div className="pt-3 flex gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-amber-500 text-background px-5 py-2 text-sm font-semibold shadow-md hover:bg-amber-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary border border-amber-600"
                    >
                      <Github className="w-4 h-4" />
                      View on GitHub
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                  {project.paper && (
                    <a
                      href={project.paper}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-primary text-background px-5 py-2 text-sm font-semibold shadow-md hover:bg-primary/90 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M19 21H5a2 2 0 01-2-2V7a2 2 0 012-2h4l2-2h6a2 2 0 012 2v12a2 2 0 01-2 2z" /></svg>
                      View Paper
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </div>
              </CardContent>
            </Card>
          )

          return project.github ? (
            <a
              key={project.title}
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-xl"
            >
              {card}
            </a>
          ) : (
            <div key={project.title}>{card}</div>
          )
        })}
      </div>
    </div>
  </section>
)

export default Projects;
