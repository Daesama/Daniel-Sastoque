import { GraduationCap, Award, Calendar, MapPin } from "lucide-react";

const EducationSection = () => {
  return (
    <section className="py-24 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Formación Académica
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            <span className="text-gradient">Educación</span> & Certificaciones
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div className="space-y-6 animate-fade-up-delay-1">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-primary/10 rounded-xl">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-2xl font-bold">Educación</h3>
            </div>

            <div className="space-y-6">
              {/* University */}
              <div className="glass p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
                <div className="flex items-start justify-between gap-4 mb-4">
                  <h4 className="text-xl font-bold text-foreground">Universidad Agustiniana</h4>
                  <span className="px-3 py-1 bg-accent/20 text-accent text-xs font-mono rounded-lg">
                    En Curso
                  </span>
                </div>
                <p className="text-primary font-medium mb-3">
                  Tecnología en Desarrollo de Software
                </p>
                <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <span>Bogotá, Colombia</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>2025 - Segundo Semestre</span>
                  </div>
                </div>
              </div>

              {/* High School */}
              <div className="glass p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
                <h4 className="text-xl font-bold text-foreground mb-3">
                  Liceo Bilingüe Rómulo Gallegos
                </h4>
                <p className="text-primary font-medium mb-3">Bachiller Bilingüe</p>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span>Bogotá, Colombia</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-6 animate-fade-up-delay-2">
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 bg-accent/10 rounded-xl">
                <Award className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold">Certificaciones</h3>
            </div>

            <div className="glass p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-secondary rounded-xl flex items-center justify-center">
                  <span className="text-2xl font-black text-gradient">P</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-foreground">Platzi</h4>
                  <p className="text-sm text-muted-foreground">Plataforma de Educación Virtual</p>
                </div>
              </div>

              <div className="grid gap-3">
                {[
                  "Fundamentos de Desarrollo de Software",
                  "Matemáticas para la Programación",
                  "Programación en Python",
                  "Programación Frontend",
                  "Programación en Java",
                  "Fundamentos de Git y GitHub",
                ].map((cert, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors"
                  >
                    <div className="w-2 h-2 rounded-full bg-gradient-primary flex-shrink-0" />
                    <span className="text-sm text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
