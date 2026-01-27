import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  return (
    <section className="py-24 bg-gradient-card relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Trayectoria
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-gradient">Experiencia</span> Profesional
          </h2>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-transparent" />

            {/* Experience card */}
            <div className="relative pl-20 animate-fade-up-delay-1">
              {/* Timeline dot */}
              <div className="absolute left-5 top-8 w-7 h-7 rounded-full bg-primary/20 border-2 border-primary flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary" />
              </div>

              <div className="glass p-8 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Findpet</h3>
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Briefcase className="w-4 h-4 text-primary" />
                      <span>Desarrollador Full Stack</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span className="text-sm font-mono text-primary">Ene 2025 – Jun 2025</span>
                  </div>
                </div>

                <ul className="space-y-4">
                  {[
                    "Desarrollo Frontend utilizando HTML5 y CSS3, creando interfaces responsivas y modernas.",
                    "Desarrollo Backend utilizando Python, implementando lógica de servidor robusta.",
                    "Sólida experiencia en trabajo en equipo, donde adquirí nuevos conocimientos y habilidades.",
                    "Uso básico de WordPress para la administración y gestión del sitio web.",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-border">
                  {["HTML5", "CSS3", "Python", "WordPress", "Trabajo en Equipo"].map((tech) => (
                    <span 
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-secondary rounded-md text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
