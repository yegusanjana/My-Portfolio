import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Users } from "lucide-react"

const Leadership = () => (
  <section id="leadership" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-foreground font-sans mb-4">Leadership & Activities</h2>
        <p className="text-lg text-muted-foreground font-sans">Leadership roles and extracurricular involvement</p>
      </div>
      <Card className="shadow-lg">
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-primary" />
            </div>
            <CardTitle className="text-xl font-bold text-primary font-sans">Leadership Positions</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold text-foreground">Sports Coordinator</h4>
                <p className="text-sm text-muted-foreground">SRM Vadapalani</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold text-foreground">Event Head</h4>
                <p className="text-sm text-muted-foreground">Ubertech Symposium</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold text-foreground">PRO Committee Head</h4>
                <p className="text-sm text-muted-foreground">Student Organization</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
              <div>
                <h4 className="font-semibold text-foreground">Event Head</h4>
                <p className="text-sm text-muted-foreground">Rotaract Club</p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  </section>
)

export default Leadership;
