
import { Badge } from '@/components/ui/badge';
import { Card } from '@/components/ui/card';

interface Skill {
    name: string;
    category: 'core' | 'technical';
}

interface SkillsSectionProps {
    skills: Skill[];
}

const SkillsSection = ({ skills }: SkillsSectionProps) => {
    const coreSkills = skills.filter(skill => skill.category === 'core');
    // const technicalSkills = skills.filter(skill => skill.category === 'technical');

    return (
        <section className="py-16 px-4">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-12">Skills & Expertise</h2>

                <div className="flex justify-center items-center gap-8 flex-wrap">
                    {/* Core Skills */}
                    <Card className="p-8">
                        <h3 className="text-xl text-center font-semibold mb-6 text-primary">Core Skills</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {coreSkills.map((skill, index) => (
                                <Badge key={index} variant="secondary" className="text-sm py-2 px-4">
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </Card>

                    {/* Technical Tools */}
                    {/* <Card className="p-8">
                        <h3 className="text-xl font-semibold mb-6 text-primary">Technical Tools</h3>
                        <div className="flex flex-wrap gap-3">
                            {technicalSkills.map((skill, index) => (
                                <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                                    {skill.name}
                                </Badge>
                            ))}
                        </div>
                    </Card> */}
                </div>
            </div>
        </section>
    );
};

export default SkillsSection;