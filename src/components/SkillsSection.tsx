import { Card, CardContent } from '@/components/ui/card';
import { 
  Cloud, 
  Code, 
  Database, 
  Server, 
  Settings, 
  BarChart3, 
  Palette, 
  GitBranch,
  Shield,
  Monitor
} from 'lucide-react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "DevOps & Cloud",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "AWS (EC2, S3, RDS, Lambda)", level: 90 },
        { name: "Ansible", level: 95 },
        { name: "Docker & Kubernetes", level: 85 },
        { name: "Jenkins CI/CD", level: 88 },
        { name: "Linux Administration", level: 92 }
      ]
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript/TypeScript", level: 85 },
        { name: "SQL", level: 90 },
        { name: "Bash Scripting", level: 88 },
        { name: "Java", level: 75 }
      ]
    },
    {
      title: "Databases & Storage",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Redis", level: 78 },
        { name: "Amazon S3", level: 92 }
      ]
    },
    {
      title: "Web Development",
      icon: Monitor,
      color: "from-orange-500 to-red-500",
      skills: [
        { name: "React.js", level: 88 },
        { name: "Django", level: 85 },
        { name: "REST APIs", level: 90 },
        { name: "HTML/CSS", level: 85 },
        { name: "Node.js", level: 80 }
      ]
    }
  ];

  const services = [
    {
      title: "DevOps & Cloud Automation",
      icon: Settings,
      description: "End-to-end DevOps solutions, cloud infrastructure setup, and automation pipelines.",
      features: ["CI/CD Implementation", "Infrastructure as Code", "Cloud Migration", "Monitoring & Alerting"]
    },
    {
      title: "Full-Stack Development", 
      icon: Code,
      description: "Modern web applications with robust backend systems and intuitive user interfaces.",
      features: ["React Applications", "API Development", "Database Design", "System Integration"]
    },
    {
      title: "Data Analytics & Visualization",
      icon: BarChart3,
      description: "Transform raw data into actionable insights with advanced analytics and visualizations.",
      features: ["Data Processing", "Tableau Dashboards", "Predictive Modeling", "Business Intelligence"]
    },
    {
      title: "System Optimization",
      icon: Server,
      description: "Performance tuning, security audits, and system reliability improvements.",
      features: ["Performance Analysis", "Security Assessments", "Scalability Planning", "Cost Optimization"]
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            SKILLS & <span className="gradient-text">SERVICES</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="mb-20">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Expertise</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <Card key={index} className="glass-card border-white/20 hover:border-neon-glow/30 transition-all duration-500 group">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <category.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="text-xl font-bold text-foreground">{category.title}</h4>
                  </div>
                  
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-foreground/90 font-medium">{skill.name}</span>
                          <span className="text-neon-glow font-semibold">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-white/10 rounded-full h-2 overflow-hidden">
                          <div 
                            className="h-full bg-gradient-primary rounded-full transition-all duration-1000 ease-out group-hover/skill:scale-x-105"
                            style={{ width: `${skill.level}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Services Offered</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="glass-card border-white/20 hover:border-neon-glow/30 transition-all duration-500 group hover:scale-[1.02]">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-glow transition-colors duration-300">
                        {service.title}
                      </h4>
                      <p className="text-foreground/70 leading-relaxed">
                        {service.description}
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-neon-glow rounded-full flex-shrink-0"></div>
                        <span className="text-foreground/80 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;