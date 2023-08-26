import ContactSection from "@/components/ContactSection";
import DescriptionSection from "@/components/DescriptionSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import HobbiesSection from "@/components/HobbiesSection";
import InformationSection from "@/components/InformationSection";
import LinksSection from "@/components/LinksSection";
import ProjectSection from "@/components/ProjectSection";
import TechSection from "@/components/TechSection";
import TopSection from "@/components/TopSection";

export default function Home() {
  return (
    <main className='max-w-3xl mx-auto font-mono p-4 sm:p-3 md:p-2'>
      <TopSection />
      <DescriptionSection />
      <InformationSection />
      <ContactSection /> 
      <ExperienceSection />
      <TechSection />
      <ProjectSection />
      <LinksSection />
      <HobbiesSection />
      <Footer />
    </main>
  )
}
