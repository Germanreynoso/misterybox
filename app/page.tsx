import { HeroSection } from '@/components/hero-section'
import { HowItWorks } from '@/components/how-it-works'
import { MysteryBox } from '@/components/mystery-box'
import { ExperiencePlans } from '@/components/experience-plans'
import { Footer } from '@/components/footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <MysteryBox />
      <ExperiencePlans />
      <Footer />
    </main>
  )
}
