"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Moon, Sun } from "lucide-react"

const sections = [
	{ id: "projects", label: "Projects" },
	{ id: "experience", label: "Experience" },
	{ id: "education", label: "Education" },
	{ id: "skills", label: "Skills" },
	{ id: "certifications", label: "Certifications" },
	{ id: "leadership", label: "Leadership" },
	{ id: "contact", label: "Contact" },
]

export default function Navbar() {
	const [isDark, setIsDark] = useState(false)

	const toggleTheme = () => {
		setIsDark(!isDark)
		document.documentElement.classList.toggle("dark")
	}

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId)
		element?.scrollIntoView({ behavior: "smooth" })
	}

	return (
		<nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex items-center justify-between h-16">
					<div className="font-bold text-xl text-primary font-sans">Yegu Sanjana</div>
					<div className="hidden md:flex items-center space-x-8">
						{sections.map((section) => (
							<button
								key={section.id}
								onClick={() => scrollToSection(section.id)}
								className="text-foreground hover:text-primary transition-colors font-medium cursor-pointer"
							>
								{section.label}
							</button>
						))}
						<Button variant="ghost" size="icon" onClick={toggleTheme} className="ml-4">
							{isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
						</Button>
					</div>
				</div>
			</div>
		</nav>
	)
}
