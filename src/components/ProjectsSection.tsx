import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Filter, TrendingUp, Globe, Server, BarChart } from 'lucide-react';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      title: "Ansible Web Stack Automation",
      category: "devops",
      description: "Comprehensive automation solution for web application deployment using Ansible playbooks, reducing deployment time from hours to minutes.",
      image: "🚀",
      technologies: ["Ansible", "YAML", "Linux", "Apache", "MySQL", "PHP"],
      features: ["Automated Server Setup", "Database Configuration", "SSL Certificate Management", "Load Balancer Setup"],
      outcome: "Reduced deployment time by 85% and eliminated configuration errors",
      githubUrl: "https://github.com/rybnd/ansible-web-automation",
      liveUrl: "#",
      icon: Server
    },
    {
      title: "Forex Market Predictor", 
      category: "data-science",
      description: "Machine learning model for predicting forex market trends using historical data analysis and real-time market indicators.",
      image: "📈",
      technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "API Integration"],
      features: ["Real-time Data Processing", "ML Model Training", "Trend Prediction", "Risk Analysis"],
      outcome: "Achieved 78% accuracy in trend prediction with comprehensive market analysis",
      githubUrl: "https://github.com/rybnd/forex-predictor",
      liveUrl: "#",
      icon: TrendingUp
    },
    {
      title: "Festival Impact Analyzer",
      category: "data-science", 
      description: "Data analytics platform analyzing the socio-economic impact of festivals using multiple data sources and visualization tools.",
      image: "🎭",
      technologies: ["Python", "Tableau", "SQL", "Data Mining", "Statistical Analysis", "Visualization"],
      features: ["Multi-source Data Integration", "Impact Metrics", "Interactive Dashboards", "Trend Analysis"],
      outcome: "Provided actionable insights for event planning and resource allocation",
      githubUrl: "https://github.com/rybnd/festival-impact-analyzer", 
      liveUrl: "#",
      icon: BarChart
    },
    {
      title: "Online Exam Portal",
      category: "web-dev",
      description: "Secure, scalable online examination system with real-time monitoring, anti-cheating mechanisms, and comprehensive reporting.",
      image: "🎓",
      technologies: ["Python", "Django", "MySQL", "JavaScript", "WebSockets", "Redis"],
      features: ["Secure Authentication", "Real-time Monitoring", "Auto-grading", "Performance Analytics"],
      outcome: "Successfully handled 1000+ concurrent users with zero downtime",
      githubUrl: "https://github.com/rybnd/online-exam-portal",
      liveUrl: "#",
      icon: Globe
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects', count: projects.length },
    { id: 'devops', label: 'DevOps', count: projects.filter(p => p.category === 'devops').length },
    { id: 'web-dev', label: 'Web Development', count: projects.filter(p => p.category === 'web-dev').length },
    { id: 'data-science', label: 'Data Science', count: projects.filter(p => p.category === 'data-science').length }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black uppercase mb-6">
            SELECTED <span className="gradient-text">WORKS</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto rounded-full mb-8"></div>
          <p className="text-lg text-foreground/70 max-w-2xl mx-auto">
            Showcasing innovative solutions in DevOps automation, full-stack development, and data analytics
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? 'bg-gradient-primary text-white shadow-glow-lg'
                  : 'glass-subtle border border-white/20 text-foreground/80 hover:border-neon-glow/50 hover:text-glow'
              }`}
            >
              <Filter className="inline-block w-4 h-4 mr-2" />
              {filter.label} ({filter.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <Card 
              key={index} 
              className="glass-card border-white/20 hover:border-neon-glow/30 transition-all duration-500 group hover:scale-[1.02]"
            >
              <CardContent className="p-8">
                <div className="space-y-6">
                  {/* Project Header */}
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="text-4xl">{project.image}</div>
                      <div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-glow transition-colors duration-300">
                          {project.title}
                        </h3>
                        <div className="flex items-center space-x-2 mt-1">
                          <project.icon className="h-4 w-4 text-neon-glow" />
                          <span className="text-sm text-neon-glow font-medium capitalize">
                            {project.category.replace('-', ' ')}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-foreground/80 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Key Features:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {project.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-neon-glow rounded-full flex-shrink-0"></div>
                          <span className="text-sm text-foreground/70">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h4 className="font-semibold mb-3 text-foreground">Technologies:</h4>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 text-xs glass-subtle rounded-full border border-white/20 text-foreground/80"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Outcome */}
                  <div className="p-4 glass-subtle rounded-lg border border-neon-glow/20">
                    <h4 className="font-semibold mb-2 text-neon-glow">Project Outcome:</h4>
                    <p className="text-sm text-foreground/80 italic">{project.outcome}</p>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-4">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.githubUrl, '_blank')}
                      className="flex-1"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => window.open(project.liveUrl, '_blank')}
                      className="flex-1"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Demo
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* View All Projects CTA */}
        <div className="text-center">
          <Button 
            variant="outline" 
            size="lg"
            onClick={scrollToProjects}
            className="glass-card border-white/20 hover:border-neon-glow/50"
          >
            <ExternalLink className="w-5 h-5 mr-2" />
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;