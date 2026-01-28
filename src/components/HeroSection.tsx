import { MapPin, Phone, Mail, Linkedin, Github, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImage from "@/assets/profile.jpg";

const HeroSection = () => {
  const scrollToSkills = () => {
    const skillsSection = document.getElementById('skills');
    if (skillsSection) {
      skillsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <section className="min-h-screen bg-gradient-hero flex items-center relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8">
            <div className="animate-fade-up">
              <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
                Software Developer
              </p>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
                Daniel Esteban{" "}
                <span className="text-gradient">Sastoque</span>
              </h1>
            </div>

            <p className="text-muted-foreground text-lg md:text-xl leading-relaxed animate-fade-up-delay-1 max-w-xl">
              Estudiante apasionado por el desarrollo de software, con bases sólidas en 
              <span className="text-foreground font-medium"> HTML5, CSS3, JavaScript, Python y Java</span>. 
              Me motiva el aprendizaje continuo y la exploración de nuevas tecnologías.
            </p>

            {/* Contact info */}
            <div className="flex flex-wrap gap-4 text-sm animate-fade-up-delay-2">
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Bogotá D.C., Colombia</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="w-4 h-4 text-primary" />
                <span>(+57) 3003961788</span>
              </div>
            </div>

            {/* Social links */}
            <div className="flex flex-wrap gap-4 animate-fade-up-delay-3">
              <a 
                href="mailto:danisastmarin@gmail.com"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-secondary/80 transition-all duration-300 group"
              >
                <Mail className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">Email</span>
              </a>
              <a 
                href="https://www.linkedin.com/in/daniel-sastoque-891568878"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-secondary/80 transition-all duration-300 group"
              >
                <Linkedin className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">LinkedIn</span>
              </a>
              <a 
                href="https://github.com/Daesama"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-secondary/80 transition-all duration-300 group"
              >
                <Github className="w-4 h-4 text-primary group-hover:scale-110 transition-transform" />
                <span className="text-sm">GitHub</span>
              </a>
            </div>

            <div className="animate-fade-up-delay-4">
              <Button 
                asChild
                className="bg-gradient-primary text-primary-foreground font-semibold px-8 py-6 text-base shadow-glow hover:opacity-90 transition-opacity"
              >
                <a href="/Daniel-Sastoque/CV_Daniel_Esteban_Sastoque.pdf" download>
                  <Download className="w-5 h-5 mr-2" />
                  Descargar CV
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-up-delay-2">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 scale-110" />
              <div className="relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/30 shadow-glow">
                <img 
                  src={profileImage} 
                  alt="Daniel Esteban Sastoque"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 glass px-6 py-3 rounded-full">
                <p className="text-sm font-mono text-primary">GTM -5</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll down button */}
      <button 
        onClick={scrollToSkills}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 glass rounded-full animate-bounce hover:bg-secondary/80 transition-colors cursor-pointer"
        aria-label="Scroll to skills section"
      >
        <ChevronDown className="w-6 h-6 text-primary" />
      </button>
    </section>
  );
};

export default HeroSection;
