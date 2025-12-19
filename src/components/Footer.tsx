import { Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border bg-background">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <a href="#home" className="text-xl font-bold text-foreground">
              M. Ishfaq<span className="text-primary">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-1">
              Digital Marketing Strategist
            </p>
          </div>

          <p className="text-sm text-muted-foreground flex items-center gap-1">
            © {currentYear} M. Ishfaq Khan. Built with 
            <Heart className="w-4 h-4 text-primary fill-primary" />
          </p>

          <nav className="flex gap-6">
            <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#projects" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Work
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
