import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

const About = () => (
  <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <Card className="shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-center text-primary font-sans">About Me</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-muted-foreground leading-relaxed font-sans text-center">
            I'm currently pursuing my Master's in Computer Science at the University of Illinois Urbana-Champaign,
            with a focus on AI, cloud computing, and database systems. My passion lies in building innovative
            multimodal AI systems and scalable cloud infrastructure. Through my projects, I've worked extensively
            with cutting-edge technologies in video analysis, natural language processing, and full-stack
            development, always striving to create solutions that bridge the gap between complex AI research and
            practical applications.
          </p>
        </CardContent>
      </Card>
    </div>
  </section>
)

export default About;
