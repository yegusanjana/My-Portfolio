import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Calendar, Award } from "lucide-react"

const Education = () => (
  <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">Education</h2>
        <p className="text-lg text-muted-foreground font-sans">
          Academic foundation in computer science and continuous learning
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Master's Degree */}
        <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl font-bold text-primary font-sans">
                  Master of Computer Science
                </CardTitle>
                <CardDescription className="text-muted-foreground font-sans">
                  University of Illinois Urbana-Champaign
                </CardDescription>
                <div className="mt-2 text-sm text-muted-foreground font-sans">
                  <span className="block">Jan. 2025 – May 2026</span>
                  <span className="block">GPA: <span className="font-semibold text-foreground">3.9/4</span></span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-primary/30 text-primary">
                <Calendar className="w-3 h-3 mr-1" />
                2024–2026
              </Badge>
              <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                In Progress
              </Badge>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Database Systems</Badge>
                <Badge variant="outline" className="text-xs">Cloud Computing Applications</Badge>
                <Badge variant="outline" className="text-xs">Digital Agriculture</Badge>
                <Badge variant="outline" className="text-xs">ML for Software Engineering</Badge>
                <Badge variant="outline" className="text-xs">User Centered Machine Learning</Badge>
                <Badge variant="outline" className="text-xs">Advanced Competitive Algorithm Programming</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
        {/* Bachelor's Degree */}
        <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50">
          <CardHeader>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-xl font-bold text-primary font-sans">Bachelor of Technology in Computer Science with Specialisation in Artificial Intelligence and Machine Learning</CardTitle>
                <CardDescription className="text-muted-foreground font-sans">SRM University</CardDescription>
                <div className="mt-2 text-sm text-muted-foreground font-sans">
                  <span className="block">2018 – 2022</span>
                  <span className="block">GPA: <span className="font-semibold text-foreground">9.37/10</span></span>
                </div>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between">
              <Badge variant="outline" className="border-primary/30 text-primary">
                <Calendar className="w-3 h-3 mr-1" />
                2018–2022
              </Badge>
              <Badge variant="secondary" className="bg-accent/10 text-accent-foreground border-accent/20">
                Completed
              </Badge>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-foreground">Coursework:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Applied Machine Learning</Badge>
                <Badge variant="outline" className="text-xs">Statistical Machine Learning</Badge>
                <Badge variant="outline" className="text-xs">Deep Learning</Badge>
                <Badge variant="outline" className="text-xs">Intelligent Machining</Badge>
              </div>
              <h4 className="font-semibold text-foreground mt-4">Key Certifications:</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="text-xs">Python Programming</Badge>
                <Badge variant="outline" className="text-xs">NVIDIA Deep Learning</Badge>
                <Badge variant="outline" className="text-xs">Cyber Security</Badge>
                <Badge variant="outline" className="text-xs">Ethical Hacking</Badge>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)

export default Education;
