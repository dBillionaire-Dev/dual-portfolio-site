
import { Card } from '@/components/ui/card';

interface Tool {
  name: string;
  icon: string | React.ComponentType<any>;
  category: string;
}

interface ToolsSectionProps {
  tools: Tool[];
}

const ToolsSection = ({ tools }: ToolsSectionProps) => {
  const renderIcon = (tool: Tool) => {
    if (typeof tool.icon === 'string') {
      return <span className="text-2xl">{tool.icon}</span>;
    }
    const IconComponent = tool.icon;
    return <IconComponent className="w-6 h-6 text-primary" />;
  };

  return (
    <section className="py-16 px-4 bg-muted/20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Tools & Technologies</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {tools.map((tool, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-3">
                {renderIcon(tool)}
              </div>
              <h3 className="font-medium text-sm">{tool.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
