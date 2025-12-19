import { ArrowRight, Download } from 'lucide-react';

const Hero = () => {
  const particles = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    delay: `${Math.random() * 15}s`,
    duration: `${15 + Math.random() * 10}s`,
    size: `${2 + Math.random() * 4}px`,
  }));

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Animated grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary) / 0.3) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary) / 0.3) 1px, transparent 1px)`,
          backgroundSize: '100px 100px',
        }}
      />

      {/* Particles */}
      <div className="particles">
        {particles.map((particle) => (
          <div
            key={particle.id}
            className="particle"
            style={{
              left: particle.left,
              width: particle.size,
              height: particle.size,
              animationDelay: particle.delay,
              animationDuration: particle.duration,
            }}
          />
        ))}
      </div>

      {/* Glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-[100px] animate-float delay-300" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <p className="text-primary font-medium tracking-wider uppercase text-sm animate-fade-up opacity-0">
                Digital Marketing Expert
              </p>
              <h1 className="heading-xl text-foreground animate-fade-up opacity-0 delay-100">
                Digital Marketing Strategist & 
                <span className="text-primary"> Lead Generation</span> Expert
              </h1>
              <p className="body-text max-w-xl mx-auto lg:mx-0 animate-fade-up opacity-0 delay-200">
                Helping brands grow through data-driven marketing, lead generation, and content strategy. Transforming businesses with targeted campaigns that deliver measurable results.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-up opacity-0 delay-300">
              <a href="#contact" className="glow-button inline-flex items-center justify-center gap-2">
                Hire Me
                <ArrowRight size={18} />
              </a>
              <a href="#projects" className="outline-glow-button inline-flex items-center justify-center gap-2">
                View My Work
                <Download size={18} />
              </a>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-8 pt-8 animate-fade-up opacity-0 delay-400">
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">3+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">50+</p>
                <p className="text-sm text-muted-foreground">Projects Done</p>
              </div>
              <div className="text-center">
                <p className="text-3xl md:text-4xl font-bold text-foreground">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
            </div>
          </div>

          {/* Profile Image Placeholder */}
          <div className="hidden lg:flex justify-center animate-fade-up opacity-0 delay-200">
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 rounded-full blur-2xl animate-glow-pulse" />
              
              {/* Profile container */}
              <div className="relative w-80 h-80 xl:w-96 xl:h-96 rounded-full overflow-hidden border-2 border-primary/30 glass-card">
                <img 
                  src="/image.PNG" 
                  alt="M. Ishfaq Khan - Digital Marketing Expert" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-fade-in" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
