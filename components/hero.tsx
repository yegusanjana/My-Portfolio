import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ExternalLink, Download, Github, Linkedin } from "lucide-react"

const Hero = () => (
  <section className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground font-sans text-balance">
              Yegu Sanjana Annamalai
            </h1>
            <h2 className="text-xl sm:text-2xl text-primary font-medium font-sans">
              CS Master's @ UIUC | AI & Software Engineer
            </h2>
            <p className="text-lg text-muted-foreground font-sans text-pretty leading-relaxed">
              Building AI systems for multimodal data and scalable cloud platforms.
            </p>
          </div>
          <div className="flex flex-row gap-4 flex-nowrap">
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3"
            >
              <a
                href="https://github.com/yegusanjana"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View GitHub"
              >
                GitHub
                <Github className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 bg-transparent"
            >
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Download Resume"
              >
                Download Resume
                <Download className="ml-2 h-4 w-4" />
              </a>
            </Button>
                        <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3"
            >
              <a
                href="https://www.linkedin.com/in/yegusanjana/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="View LinkedIn"
              >
                LinkedIn
                <Linkedin className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-primary text-primary hover:bg-primary hover:text-primary-foreground font-medium px-8 py-3 bg-transparent"
            >
              <a
                href="mailto:ya11@illinois.edu"
                aria-label="Send Email"
              >
                Email
                <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-110"></div>
            <Avatar className="relative w-64 h-64 sm:w-80 sm:h-80 ring-4 ring-primary/30 ring-offset-4 ring-offset-background">
              <AvatarImage
                src="/avatar.jpg"
                alt="Yegu Sanjana Annamalai"
                className="object-cover"
              />
              <AvatarFallback className="text-6xl font-bold bg-gradient-to-br from-primary to-accent text-primary-foreground">
                YS
              </AvatarFallback>
            </Avatar>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Hero;
