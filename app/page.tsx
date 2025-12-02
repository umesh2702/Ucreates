import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { WorkSection } from "@/components/work-section"
import { ReelsSection } from "@/components/reels-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { FutureProjectsSection } from "@/components/future-projects-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ServicesSection />
      <WorkSection />
      <ReelsSection />
      <FutureProjectsSection />
      <AboutSection />
      <ContactSection />
    </main>
  )
}
