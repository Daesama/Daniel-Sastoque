import { Code2, Database, Wrench, Globe, GitBranch, Boxes } from "lucide-react";

interface SkillCategoryProps {
  icon: React.ReactNode;
  title: string;
  skills: { name: string; level: "Intermedio" | "Básico" | "Nativo" }[];
  delay: number;
}

const SkillCategory = ({ icon, title, skills, delay }: SkillCategoryProps) => {
  const delayClass = `animate-fade-up-delay-${delay}`;
  
  return (
    <div className={`glass p-6 rounded-2xl shadow-card hover:shadow-glow transition-all duration-500 ${delay === 0 ? 'animate-fade-up' : delayClass}`}>
      <div className="flex items-center gap-3 mb-5">
        <div className="p-3 bg-primary/10 rounded-xl text-primary">
          {icon}
        </div>
        <h3 className="text-lg font-bold">{title}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill.name}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
              skill.level === "Intermedio" 
                ? "bg-primary/20 text-primary border border-primary/30" 
                : skill.level === "Nativo"
                ? "bg-accent/20 text-accent border border-accent/30"
                : "bg-secondary text-muted-foreground border border-border"
            }`}
          >
            {skill.name}
          </span>
        ))}
      </div>
    </div>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-6 h-6" />,
      title: "Lenguajes de Programación",
      skills: [
        { name: "HTML5", level: "Intermedio" as const },
        { name: "CSS3", level: "Intermedio" as const },
        { name: "JavaScript", level: "Intermedio" as const },
        { name: "Python", level: "Intermedio" as const },
        { name: "Java", level: "Intermedio" as const },
      ],
    },
    {
      icon: <Boxes className="w-6 h-6" />,
      title: "Frameworks",
      skills: [
        { name: "Django", level: "Intermedio" as const },
        { name: "React", level: "Intermedio" as const },
      ],
    },
    {
      icon: <Database className="w-6 h-6" />,
      title: "Bases de Datos",
      skills: [
        { name: "MongoDB", level: "Intermedio" as const },
        { name: "MariaDB", level: "Básico" as const },
      ],
    },
    {
      icon: <GitBranch className="w-6 h-6" />,
      title: "Control de Versiones",
      skills: [
        { name: "Git", level: "Intermedio" as const },
        { name: "GitHub", level: "Intermedio" as const },
      ],
    },
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Herramientas",
      skills: [
        { name: "VS Code", level: "Intermedio" as const },
        { name: "IntelliJ", level: "Intermedio" as const },
        { name: "Power BI", level: "Básico" as const },
        { name: "Trello", level: "Intermedio" as const },
        { name: "Cursor", level: "Intermedio" as const },
        { name: "Lovable", level: "Intermedio" as const },
      ],
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Idiomas",
      skills: [
        { name: "Español", level: "Nativo" as const },
        { name: "Inglés", level: "Intermedio" as const },
      ],
    },
  ];

  return (
    <section id="skills" className="py-24 bg-background relative">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="text-center mb-16 animate-fade-up">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">
            Stack Tecnológico
          </p>
          <h2 className="text-4xl md:text-5xl font-black">
            Mis <span className="text-gradient">Habilidades</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={category.title}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              delay={Math.min(index, 4)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
