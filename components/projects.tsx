import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Eye } from "lucide-react"


const projects = [
  {
    title: "Yield Prediction with NDVI",
    date: "Aug 2025",
    description: "Geospatial ML pipeline to forecast county-level crop yields from satellite NDVI and USDA data. Achieved Linear R² 0.993 / RMSE 0.811 and RF R² 0.952 / RMSE 2.172, with explainable coefficients and feature importances.",
    skills: ["Python", "Pandas", "NumPy", "Scikit-learn", "Joblib", "Matplotlib", "Remote Sensing (NDVI)", "GIS", "CLI Tooling"],
  },
  {
    title: "SOAP.AI",
    date: "July 2025",
    description: "Multimodal AI platform for video-based clinical and educational analysis. Developed speaker diarization pipeline (Resemblyzer + clustering), domain-adaptive video analysis, and vision–language fusion for context-sensitive QA.",
    skills: ["GPT-4 / GPT-4o (Vision)", "Azure Whisper", "Resemblyzer", "Scikit-learn", "OpenCV", "MoviePy", "PyDub", "FastAPI", "Python", "Pandas", "NumPy"],
  },
  {
    title: "Truvara.ai",
    date: "May–July 2025",
    description: "Community-driven GRC platform serving 500+ compliance professionals. Delivered reusable UI components, Strapi CMS integration, and GitHub-powered content automation.",
    skills: ["Next.js", "TypeScript", "React", "Tailwind", "Strapi", "REST APIs"],
  },
  {
    title: "Document QA System",
    date: "May 2025",
    description: "Type-aware Retriever–Reader pipeline with LangChain for intelligent document retrieval. Integrated Cohere embeddings, FAISS, and HuggingFace RoBERTa reader, deployed as a Flask web app for PDF ingestion and QA.",
    skills: ["Python", "Flask", "Pandas", "NumPy", "LangChain", "FAISS", "Cohere Embeddings", "Hugging Face Transformers (RoBERTa)"],
  },
  {
    title: "Deep Learning for Indian Sign Language Recognition",
    date: "May 2023",
    description: "CNN-based system achieving 99.41% accuracy for 36 ISL alphabets and digits. Enabled real-time detection and co-authored a research paper based on project results.",
    skills: ["OpenCV", "Computer Vision", "Keras", "TensorFlow", "CNN", "Python", "HTML", "Flask"],
  },
  {
    title: "Music Recommendation with Facial Emotion Recognition",
    date: "Dec 2022",
    description: "Emotion-aware music recommendation system using CNN-based facial recognition with 96% validation accuracy. Published in IJRAR (Vol. 9, No. 4, pp. 22–26, Dec 2022).",
    skills: ["OpenCV", "Keras", "TensorFlow", "CNN", "Python", "Flask"],
  },
  {
    title: "Car Wash Booking App",
    date: "Aug 2022",
    description: "Full-stack web app for scheduling and managing car wash appointments. Enabled admin dashboards and streamlined booking workflows.",
    skills: ["Python", "MongoDB", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Library Database Management",
    date: "Mar 2022",
    description: "SQLite-based library system with Tkinter GUI for staff to manage book availability and borrowing. Featured intuitive search workflows for faster discovery.",
    skills: ["Python", "SQLite", "Tkinter"],
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
        {projects.map((project, idx) => (
          <Card key={project.title} className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 relative">
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
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  </section>
)

export default Projects;
