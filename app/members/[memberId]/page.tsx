import CertificatesSection from "@/components/member_enhanced/certificates/certificates";
import DocumentsSection from "@/components/member_enhanced/documents/documents";
import ContactSection from "@/components/member_enhanced/footer/footerSection";
import { HeroSection } from "@/components/member_enhanced/hero_section/HeroSection";
import ProjectsSection from "@/components/member_enhanced/projects/projects";
import NavigationButtons from "@/components/member_enhanced/skills/navigationButtons";
import Skills from "@/components/member_enhanced/skills/skills";
import WorkExperienceSection from "@/components/member_enhanced/work_experience/workExperience";



export default function MemberPortfolio() {
  return (
    <main className="relative bg-[#020202]">
      <NavigationButtons />
      
      <section id="hero">
        <HeroSection />
      </section>

    

      <section id="skills">
        <Skills />
      </section>

    

      <section id="projects">
        <ProjectsSection />
      </section>

     

      <section id="certificates">
        <CertificatesSection />
      </section>
  

      <section id="experience">
        <WorkExperienceSection />
      </section>
    

      <section id="documents">
        <DocumentsSection />
      </section>
 

      <section id="contact">
        <ContactSection />
      </section>
    </main>
  );
}