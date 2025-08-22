import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download, GraduationCap, Users, MessageSquare, Target } from 'lucide-react';

const AboutSection = () => {
  const handleDownloadResume = () => {
    // This would download the actual resume file
    window.open('/resume.pdf', '_blank');
  };

  const education = [
    {
      degree: "MS in Information Technology",
      school: "Worcester Polytechnic Institute",
      period: "Expected Dec 2026",
      icon: GraduationCap
    },
    {
      degree: "BS in Mechanical Engineering (AI & ML)",
      school: "Savitribai Phule Pune University", 
      period: "May 2022",
      icon: GraduationCap
    }
  ];

  const softSkills = [
    { name: "Agile Methodology", icon: Target },
    { name: "Leadership", icon: Users },
    { name: "Communication", icon: MessageSquare }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            ABOUT <span className="gradient-text">ME</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div className="space-y-6">
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 gradient-text">My Journey</h3>
                <div className="space-y-4 text-foreground/80 leading-relaxed">
                  <p>
                    I'm a passionate DevOps Engineer and Full-Stack Developer with a strong foundation in 
                    automation, cloud infrastructure, and data analytics. Currently pursuing my Master's 
                    in Information Technology at Worcester Polytechnic Institute while bringing 2+ years 
                    of hands-on industry experience.
                  </p>
                  <p>
                    My expertise spans across cloud platforms (AWS), automation tools (Ansible, Docker), 
                    and full-stack development (Python, React, SQL). I've successfully optimized enterprise 
                    applications, reduced deployment times by 40%, and implemented robust CI/CD pipelines 
                    that enhance system reliability.
                  </p>
                  <p>
                    I believe in the power of automation to transform businesses and am constantly exploring 
                    new technologies to build scalable, efficient solutions. When I'm not coding, you'll 
                    find me analyzing market trends or working on innovative projects that bridge technology 
                    and real-world applications.
                  </p>
                </div>
                
                <Button 
                  variant="neon" 
                  onClick={handleDownloadResume}
                  className="mt-6 w-full sm:w-auto"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Education & Skills */}
          <div className="space-y-8">
            {/* Education Timeline */}
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Education</h3>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="flex items-start space-x-4 group">
                      <div className="flex-shrink-0 w-12 h-12 rounded-lg glass-card border border-white/20 flex items-center justify-center group-hover:border-neon-glow/50 transition-all duration-300">
                        <edu.icon className="h-6 w-6 text-neon-glow" />
                      </div>
                      <div className="flex-grow min-w-0">
                        <h4 className="font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-foreground/70">{edu.school}</p>
                        <p className="text-sm text-neon-glow font-medium">{edu.period}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Soft Skills */}
            <Card className="glass-card border-white/20">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 gradient-text">Core Strengths</h3>
                <div className="grid gap-4">
                  {softSkills.map((skill, index) => (
                    <div key={index} className="flex items-center space-x-4 p-4 rounded-lg glass-subtle hover:bg-white/5 transition-all duration-300 group">
                      <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <skill.icon className="h-5 w-5 text-white" />
                      </div>
                      <span className="font-medium text-foreground">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;