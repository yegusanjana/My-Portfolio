import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Award, ExternalLink } from "lucide-react"

const Certifications = () => (
  <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">Certifications</h2>
        <p className="text-lg text-muted-foreground font-sans">
          Professional certifications and continuous learning achievements
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Python Programming</h3>
                  <p className="text-sm text-muted-foreground">NPTEL – Joy of Computing</p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">NVIDIA Deep Learning</h3>
                  <p className="text-sm text-muted-foreground">Deep Learning Institute</p>
                </div>
              </div>
              <a
                href="/certificates/nvidia-deep-learning.png"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button size="sm" variant="outline">
                  <ExternalLink className="w-3 h-3 mr-1" />
                  View
                </Button>
              </a>
            </div>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Cyber Security & Ethical Hacking</h3>
                  <p className="text-sm text-muted-foreground">Professional Certification</p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
        <Card className="group hover:shadow-lg transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                  <Award className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">Robotics Workshop</h3>
                  <p className="text-sm text-muted-foreground">Technical Workshop</p>
                </div>
              </div>

            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  </section>
)

export default Certifications;
