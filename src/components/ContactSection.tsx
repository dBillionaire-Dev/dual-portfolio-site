
import { Button } from '@/components/ui/button';

interface ContactSectionProps {
  role: string;
}

const ContactSection = ({ role }: ContactSectionProps) => {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Ready to Work Together?</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Let's discuss how I can help you achieve your goals as a {role.toLowerCase()}.
        </p>
        <Button size="lg" className="px-12 py-4 rounded-xl text-lg">
          Get in Touch
        </Button>
      </div>
    </section>
  );
};

export default ContactSection;
