"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Github, Linkedin } from "lucide-react"

const Contact = () => (
  <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">Get In Touch</h2>
        <p className="text-lg text-muted-foreground font-sans">
          Let's connect and discuss opportunities in AI and software engineering
        </p>
      </div>
      <Card className="shadow-xl">
        <CardContent className="p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">Email</h3>
              <a href="mailto:ya11@illinois.edu" className="text-primary hover:text-primary/80 transition-colors">
                ya11@illinois.edu
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Github className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">GitHub</h3>
              <a
                href="https://github.com/yegusanjana"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                github.com/yegusanjana
              </a>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Linkedin className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">LinkedIn</h3>
              <a
                href="https://www.linkedin.com/in/yegu-sanjana-074407228/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                linkedin.com/in/yegu-sanjana
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border">
            <Button
              onClick={() => window.open("mailto:ya11@illinois.edu")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-medium px-8 py-3"
            >
              <Mail className="w-4 h-4 mr-2" />
              Send Message
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
)

export default Contact;
