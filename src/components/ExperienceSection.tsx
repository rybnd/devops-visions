import { Card, CardContent } from '@/components/ui/card';
import { Building, Calendar, MapPin, Trophy } from 'lucide-react';

const ExperienceSection = () => {
  const experiences = [
    {
      title: "DevOps Engineer",
      company: "Wipro Technologies",
      period: "May 2022 - Oct 2024",
      location: "Pune, India",
      logo: "💼",
      achievements: [
        "Automated EA (Enterprise Architecture) processes using Ansible, reducing manual deployment time by 40%",
        "Optimized HSBC application performance through infrastructure improvements and monitoring solutions",
        "Implemented CI/CD pipelines using Jenkins and Docker, improving deployment reliability by 60%",
        "Managed AWS cloud infrastructure including EC2, S3, RDS, and Lambda services",
        "Collaborated with cross-functional teams to deliver scalable solutions for enterprise clients"
      ],
      technologies: ["Ansible", "AWS", "Docker", "Jenkins", "Python", "Linux", "Monitoring Tools"]
    },
    {
      title: "Intern - Online Exam System",
      company: "Academic Project",
      period: "Oct 2021",
      location: "Pune, India", 
      logo: "🎓",
      achievements: [
        "Developed a comprehensive online examination platform using full-stack technologies",
        "Implemented secure user authentication and role-based access control",
        "Optimized database queries resulting in 50% faster response times",
        "Created responsive UI/UX design for seamless user experience across devices",
        "Integrated real-time monitoring and anti-cheating mechanisms"
      ],
      technologies: ["Python", "Django", "MySQL", "HTML/CSS", "JavaScript", "Bootstrap"]
    },
    {
      title: "Technical Intern",
      company: "Ordnance Factory",
      period: "2018 - 2022 (Part-time)",
      location: "India",
      logo: "🏭", 
      achievements: [
        "Conducted vulnerability assessments and security testing on critical systems",
        "Performed preventive maintenance on industrial equipment and control systems",
        "Documented security protocols and maintenance procedures",
        "Assisted in system optimization and performance monitoring",
        "Gained hands-on experience with industrial automation and control systems"
      ],
      technologies: ["Security Testing", "System Maintenance", "Documentation", "Quality Assurance"]
    }
  ];

  return (
    <section id="experience" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            <span className="gradient-text">EXPERIENCE</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-primary hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative group">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-primary rounded-full border-4 border-background hidden md:block group-hover:scale-125 transition-transform duration-300"></div>
                
                <div className="md:ml-20">
                  <Card className="glass-card border-white/20 hover:border-neon-glow/30 transition-all duration-500 group-hover:scale-[1.02]">
                    <CardContent className="p-8">
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-6">
                        <div className="flex items-start space-x-4">
                          <div className="text-3xl">{exp.logo}</div>
                          <div>
                            <h3 className="text-xl font-bold text-foreground group-hover:text-glow transition-colors duration-300">
                              {exp.title}
                            </h3>
                            <p className="text-lg font-semibold text-neon-glow">{exp.company}</p>
                          </div>
                        </div>
                        
                        <div className="mt-4 sm:mt-0 flex flex-col sm:items-end space-y-1">
                          <div className="flex items-center space-x-2 text-foreground/70">
                            <Calendar size={16} />
                            <span className="text-sm">{exp.period}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-foreground/70">
                            <MapPin size={16} />
                            <span className="text-sm">{exp.location}</span>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <h4 className="flex items-center space-x-2 text-lg font-semibold mb-4 text-foreground">
                            <Trophy className="h-5 w-5 text-neon-glow" />
                            <span>Key Achievements</span>
                          </h4>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start space-x-3 text-foreground/80">
                                <span className="flex-shrink-0 w-2 h-2 bg-neon-glow rounded-full mt-2"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-semibold mb-3 text-foreground">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, techIndex) => (
                              <span
                                key={techIndex}
                                className="px-3 py-1 text-sm glass-subtle rounded-full border border-white/20 text-foreground/80 hover:border-neon-glow/50 hover:text-glow transition-all duration-300"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;