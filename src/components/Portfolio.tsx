
import { useState } from 'react';
import Header from './Header';
import Hero from './Hero';
import ServicesSection from './ServicesSection';
import ToolsSection from './ToolsSection';
import TestimonialSection from './TestimonialSection';
import CaseStudiesSection from './CaseStudiesSection';
import ContactSection from './ContactSection';
import Footer from './Footer';
import { virtualAssistantData, productManagerData } from '@/data/portfolioData';

type Role = 'virtual-assistant' | 'product-manager';

const Portfolio = () => {
  const [activeRole, setActiveRole] = useState<Role>('virtual-assistant');

  const currentData = activeRole === 'virtual-assistant' ? virtualAssistantData : productManagerData;

  return (
    <div className="min-h-screen bg-background">
      <Header activeRole={activeRole} onRoleChange={setActiveRole} />
      
      <Hero />
      
      <div className="animate-fade-in">
        <ServicesSection services={currentData.services} />
        
        <ToolsSection tools={currentData.tools} />
        
        <TestimonialSection testimonial={currentData.testimonial} />
        
        <CaseStudiesSection caseStudies={currentData.caseStudies} />
        
        <ContactSection role={currentData.title} />
      </div>
      
      <Footer />
    </div>
  );
};

export default Portfolio;
