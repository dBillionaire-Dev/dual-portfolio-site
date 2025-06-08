
import { Button } from '@/components/ui/button';

const Hero = () => {
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
          Versatile professional specializing in administrative excellence as a Virtual Assistant and strategic product development as a Product Manager. I help businesses streamline operations and drive product success.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="px-8 py-3 rounded-lg">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 rounded-lg">
            <a href="#contact-section">Contact Me</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
