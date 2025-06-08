
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ArrowLeft } from 'lucide-react';

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

interface CaseStudyDetailProps {
    caseStudy: CaseStudy;
    onBack: () => void;
}

const CaseStudyDetail = ({ caseStudy, onBack }: CaseStudyDetailProps) => {
    return (
        <div className="py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <Button
                    variant="ghost"
                    onClick={onBack}
                    className="mb-6 hover:bg-accent/10"
                >
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Case Studies
                </Button>

                <div className="space-y-8">
                    {caseStudy.image && (
                        <div className="w-full h-64 md:h-96 rounded-lg overflow-hidden">
                            <img
                                src={caseStudy.image}
                                alt={caseStudy.title}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    )}

                    <div>
                        <h1 className="text-4xl font-bold mb-4 text-primary">{caseStudy.title}</h1>
                        {caseStudy.metric && (
                            <div className="bg-accent/10 rounded-lg p-4 mb-6">
                                <p className="text-lg font-medium text-accent">{caseStudy.metric}</p>
                            </div>
                        )}
                    </div>

                    <Card className="p-8">
                        <h2 className="text-2xl font-bold mb-4">Overview</h2>
                        <p className="text-muted-foreground leading-relaxed text-lg">
                            {caseStudy.fullDescription || caseStudy.description}
                        </p>
                    </Card>

                    {caseStudy.challenges && (
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Challenges</h2>
                            <ul className="space-y-3">
                                {caseStudy.challenges.map((challenge, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-muted-foreground">{challenge}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}

                    {caseStudy.solutions && (
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Solutions</h2>
                            <ul className="space-y-3">
                                {caseStudy.solutions.map((solution, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-muted-foreground">{solution}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}

                    {caseStudy.results && (
                        <Card className="p-8">
                            <h2 className="text-2xl font-bold mb-4">Results</h2>
                            <ul className="space-y-3">
                                {caseStudy.results.map((result, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 mr-3 flex-shrink-0" />
                                        <span className="text-muted-foreground">{result}</span>
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    )}

                    {(caseStudy.technologies || caseStudy.timeline) && (
                        <div className="grid md:grid-cols-2 gap-8">
                            {caseStudy.technologies && (
                                <Card className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Technologies Used</h3>
                                    <div className="flex flex-wrap gap-2">
                                        {caseStudy.technologies.map((tech, index) => (
                                            <span
                                                key={index}
                                                className="px-3 py-1 bg-muted rounded-full text-sm"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </Card>
                            )}

                            {caseStudy.timeline && (
                                <Card className="p-6">
                                    <h3 className="text-xl font-bold mb-4">Timeline</h3>
                                    <p className="text-muted-foreground">{caseStudy.timeline}</p>
                                </Card>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CaseStudyDetail;