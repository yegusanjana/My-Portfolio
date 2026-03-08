import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import WorkExperience from "@/components/work-experience"
import Projects from "@/components/projects"
import Education from "@/components/education"
import Skills from "@/components/skills"
import Certifications from "@/components/certifications"
import Leadership from "@/components/leadership"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <WorkExperience />
      <Projects />
      <Education />
      <Skills />
      <Certifications />
      <Leadership />
      <Contact />
    </>
  )
}
