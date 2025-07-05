
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'Data Visualization Dashboard',
      description: 'Interactive dashboard built with Python and Tableau for analyzing complex datasets with real-time visualizations.',
      technologies: ['Python', 'Tableau', 'Data Analytics'],
      category: 'Data Science',
      status: 'Academic Project'
    },
    {
      title: 'Web Development Portfolio',
      description: 'Responsive portfolio website showcasing modern web development techniques with HTML, CSS, and JavaScript.',
      technologies: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
      category: 'Web Development',
      status: 'Personal Project'
    },
    {
      title: 'Process Automation Tool',
      description: 'RPA solution using UiPath to automate repetitive tasks and improve workflow efficiency.',
      technologies: ['UiPath', 'Process Automation', 'Workflow Design'],
      category: 'Automation',
      status: 'Learning Project'
    }
  ];

  return (
    <section id="projects" className="py-12 md:py-20 px-4 sm:px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
          <p className="text-base md:text-xl text-muted-foreground mt-4 md:mt-6 px-4">
            Showcasing my journey through academic and personal development
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="glass-effect glow-effect group hover:scale-105 transition-all duration-500 h-full"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardContent className="p-6 md:p-8 flex flex-col h-full">
                <div className="flex-grow space-y-4 md:space-y-6">
                  <div>
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-3 md:mb-4 gap-2">
                      <Badge variant="outline" className="border-primary/30 bg-primary/10 text-primary text-xs md:text-sm">
                        {project.category}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {project.status}
                      </Badge>
                    </div>
                    
                    <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors leading-tight">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="space-y-3 md:space-y-4">
                    <h4 className="font-semibold text-xs md:text-sm uppercase tracking-wide text-accent">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-1 md:gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-2 md:px-3 py-1 text-xs bg-secondary/10 text-secondary rounded-full border border-secondary/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 md:mt-6 pt-4 md:pt-6 border-t border-border/50">
                  {/* <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-all duration-300 text-sm md:text-base"
                    size="sm"
                  >
                    <Github className="mr-2 h-3 w-3 md:h-4 md:w-4" />
                    View on GitHub
                  </Button> */}
                </div>

                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-12">
          <Card className="glass-effect glow-effect inline-block">
            <CardContent className="p-4 md:p-6">
              <h3 className="text-base md:text-lg font-semibold text-gradient mb-2">
                🚀 More Projects Coming Soon
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Currently working on exciting new projects in AI and Machine Learning
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
