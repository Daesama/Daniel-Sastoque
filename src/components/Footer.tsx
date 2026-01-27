import { Mail, Linkedin, Github, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-gradient-card border-t border-border">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold mb-2">
              Daniel Esteban <span className="text-gradient">Sastoque</span>
            </h3>
            <p className="text-sm text-muted-foreground">Software Developer</p>
          </div>

          <div className="flex items-center gap-4">
            <a 
              href="mailto:danisastmarin@gmail.com"
              className="p-3 glass rounded-xl hover:bg-secondary/80 transition-all duration-300 group"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://www.linkedin.com/in/daniel-sastoque-891568878"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-secondary/80 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
            <a 
              href="https://github.com/Daesama"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 glass rounded-xl hover:bg-secondary/80 transition-all duration-300 group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground flex items-center justify-center gap-1">
            Hecho con <Heart className="w-4 h-4 text-primary fill-primary" /> en Bogotá, Colombia
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            © {new Date().getFullYear()} Daniel Sastoque. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
