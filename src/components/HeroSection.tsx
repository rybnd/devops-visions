import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail, Code, Cloud, Database } from 'lucide-react';

const MatrixRain = () => {
  useEffect(() => {
    const canvas = document.getElementById('matrix-canvas') as HTMLCanvasElement;
    if (!canvas) return;

    const ctx = canvas.getContext('2d')!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*(){}[]|\\:";\'<>?,./';
    const fontSize = 14;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#00ff41';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < drops.length; i++) {
        const text = characters[Math.floor(Math.random() * characters.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => clearInterval(interval);
  }, []);

  return (
    <canvas
      id="matrix-canvas"
      className="absolute inset-0 opacity-20"
      style={{ pointerEvents: 'none' }}
    />
  );
};

const TechBadge = ({ icon: Icon, name }: { icon: any; name: string }) => (
  <div className="glass-card p-3 rounded-xl border border-white/20 hover:border-neon-glow/50 transition-all duration-300 hover:scale-105">
    <div className="flex items-center space-x-2">
      <Icon size={20} className="text-neon-glow" />
      <span className="text-sm font-medium">{name}</span>
    </div>
  </div>
);

const HeroSection = () => {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = "HI!!!!! THERE I'M TANMAY";
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setDisplayedText(fullText.slice(0, index));
      index++;
      if (index > fullText.length) {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const techStack = [
    { icon: Code, name: 'Python' },
    { icon: Cloud, name: 'AWS' },
    { icon: Database, name: 'Docker' },
    { icon: Code, name: 'Ansible' },
    { icon: Code, name: 'React' },
    { icon: Database, name: 'SQL' }
  ];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden mt-16">
      <MatrixRain />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl md:text-6xl lg:text-8xl font-black uppercase tracking-tight">
              {displayedText}
              {isTyping && <span className="animate-pulse">|</span>}
            </h1>
            <h2 className="text-3xl md:text-5xl lg:text-7xl font-black uppercase">
              <span className="gradient-text">DEVOPS</span> ENGINEER
            </h2>
          </div>

          {/* Subtitle */}
          <div className="space-y-2 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-foreground/90">
              Cloud & Automation Specialist | Full-Stack Developer
            </p>
            <p className="text-base md:text-lg text-foreground/70 italic">
              "Optimizing systems. Automating solutions. Engineering the future."
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              variant="hero" 
              onClick={scrollToProjects}
              className="w-full sm:w-auto"
            >
              View Portfolio
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
            <Button 
              size="lg" 
              variant="neon" 
              onClick={scrollToContact}
              className="w-full sm:w-auto"
            >
              Get in Touch
              <Mail className="ml-2 h-4 w-4" />
            </Button>
          </div>

          {/* Tech Stack */}
          <div className="mt-16">
            <p className="text-sm uppercase tracking-wider text-foreground/60 mb-6">Tech Stack</p>
            <div className="flex flex-wrap justify-center gap-4 max-w-2xl mx-auto">
              {techStack.map((tech, index) => (
                <TechBadge key={index} icon={tech.icon} name={tech.name} />
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 pt-8">
            <a 
              href="https://github.com/rybnd" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-neon-glow transition-colors duration-300"
            >
              <Github size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/tanmayshinde45" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-neon-glow transition-colors duration-300"
            >
              <Linkedin size={24} />
            </a>
            <a 
              href="mailto:0943tanmay3490@gmail.com"
              className="text-foreground/60 hover:text-neon-glow transition-colors duration-300"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button 
          onClick={scrollToAbout}
          className="text-foreground/60 hover:text-foreground transition-colors duration-300"
        >
          <ArrowDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;