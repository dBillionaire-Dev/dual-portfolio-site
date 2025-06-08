
import { Card } from '@/components/ui/card';

interface Testimonial {
  text: string;
  author: string;
  role?: string;
}

interface TestimonialSectionProps {
  testimonial: Testimonial;
}

const TestimonialSection = ({ testimonial }: TestimonialSectionProps) => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Clients Say</h2>
        <Card className="p-8 text-center bg-gradient-to-br from-white to-muted/20">
          <div className="text-6xl text-accent mb-6">"</div>
          <p className="text-lg text-muted-foreground mb-6 italic leading-relaxed">
            {testimonial.text}
          </p>
          <div>
            <p className="font-semibold text-primary">{testimonial.author}</p>
            {testimonial.role && (
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            )}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TestimonialSection;
