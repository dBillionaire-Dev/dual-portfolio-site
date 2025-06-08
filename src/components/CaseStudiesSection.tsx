
import { Card } from '@/components/ui/card';

interface CaseStudy {
  title: string;
  description: string;
  metric?: string;
  image?: string;
}

interface CaseStudiesSectionProps {
  caseStudies: CaseStudy[];
}

const CaseStudiesSection = ({ caseStudies }: CaseStudiesSectionProps) => {
  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Case Studies</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {study.image && (
                <div className="h-48 overflow-hidden">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-8">
                <h3 className="text-xl font-bold mb-4 text-primary">{study.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{study.description}</p>
                {study.metric && (
                  <div className="bg-accent/10 rounded-lg p-3">
                    <p className="text-sm font-medium text-accent">{study.metric}</p>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudiesSection;
