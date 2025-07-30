
import { Button } from '@/components/ui/button';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        {/* Profile Image */}
        <div className="w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden shadow-xl bg-muted">
          <img
            src="https://media.licdn.com/dms/image/v2/D4D03AQHIgD-xl4zMvA/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1729555122180?e=1755129600&v=beta&t=aekOe6HgTqvvEuYPVkJmcgBJHWkmnN7KXZRD68lqp9A"
            alt="Professional headshot"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
          Hello, I'm Aniekan-Abasi Udofia
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed">
          I turn chaos into clarity, optimizing workflows as a Virtual Assistant and shaping ideas into impactful products that users love as a Product Manager. Obsessed with turning "what if" ideas into "what’s next" solutions with clean workflows and strategic thinking.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="px-8 py-3 rounded-lg"
            onClick={() => scrollToSection('case-studies')}
          >
            View My Work
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="px-8 py-3 rounded-lg"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>

      </div>
    </section>
  );
};

export default Hero;
