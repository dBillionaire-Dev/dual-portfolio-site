
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import ContactForm from './ContactForm';

interface ContactSectionProps {
  role: string;
}

const ContactSection = ({ role }: ContactSectionProps) => {
  const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const downloadResume = () => {
    const resumeUrl = role === 'Virtual Assistant'
      ? '/resume-virtual-assistant.pdf'
      : '/resume-product-manager.pdf';

    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = `Aniekan-Abasi-Udofia-${role.replace(' ', '-')}-Resume.pdf`;
    link.click();
  };

  return (
    <>
      <section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how I can help you achieve your goals as a {role.toLowerCase()}.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="px-12 py-4 rounded-xl text-lg"
              onClick={() => setIsContactFormOpen(true)}
            >
              Get in Touch
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-12 py-4 rounded-xl text-lg"
              onClick={downloadResume}
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>

      <ContactForm
        isOpen={isContactFormOpen}
        onClose={() => setIsContactFormOpen(false)}
        role={role}
      />
    </>
  );
};

export default ContactSection;