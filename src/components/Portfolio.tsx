
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import SkillsSection from './SkillsSection';
import ToolsSection from './ToolsSection';
import TestimonialSection from './TestimonialSection';
import CaseStudiesSection from './CaseStudiesSection';
import CaseStudyDetail from './CaseStudyDetail';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { virtualAssistantData, productManagerData } from '@/data/portfolioData';

type Role = 'virtual-assistant' | 'product-manager';

interface CaseStudy {
  title: string;
  description: string;
  metric?: string;
  image?: string;
  fullDescription?: string;
  challenges?: string[];
  solutions?: string[];
  results?: string[];
  technologies?: string[];
  timeline?: string;
}

const Portfolio = () => {
  const [activeRole, setActiveRole] = useState<Role>('virtual-assistant');
  const [selectedCaseStudy, setSelectedCaseStudy] = useState<CaseStudy | null>(null);

  const currentData = activeRole === 'virtual-assistant' ? virtualAssistantData : productManagerData;

  const handleCaseStudyView = (caseStudy: CaseStudy) => {
    setSelectedCaseStudy(caseStudy);
  };

  const handleBackToCaseStudies = () => {
    setSelectedCaseStudy(null);
  };

  if (selectedCaseStudy) {
    return (
      <div className="min-h-screen bg-background">
        <Header activeRole={activeRole} onRoleChange={setActiveRole} />
        <CaseStudyDetail
          caseStudy={selectedCaseStudy}
          onBack={handleBackToCaseStudies}
        />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header activeRole={activeRole} onRoleChange={setActiveRole} />

      <Hero />

      <div className="animate-fade-in">
        <ServicesSection services={currentData.services} />

        <SkillsSection skills={currentData.skills} />

        <ToolsSection tools={currentData.tools} />

        <TestimonialSection testimonial={currentData.testimonial} />

        <CaseStudiesSection
          caseStudies={currentData.caseStudies}
          onViewDetail={handleCaseStudyView}
        />

        <ContactSection role={currentData.title} />
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;