
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Certifications = () => {
  const certifications = [
    {
      title: 'Python for Data Visualization',
      provider: 'LinkedIn Learning',
      icon: '🐍',
      category: 'Data Science',
      color: 'primary'
    },
    {
      title: 'Data Analytics in Tableau',
      provider: 'JobaajLearnings', 
      icon: '📊',
      category: 'Analytics',
      color: 'secondary'
    },
    {
      title: 'Robotic Process Automation Foundation',
      provider: 'Uipath',
      icon: '🤖',
      category: 'Automation',
      color: 'accent'
    }
  ];

  return (
    <section id="certifications" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Certifications</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <Card 
              key={cert.title}
              className="glass-effect glow-effect group hover:scale-105 transition-all duration-500 cursor-pointer"
              style={{
                animationDelay: `${index * 0.2}s`
              }}
            >
              <CardContent className="p-8 text-center space-y-6">
                <div className="text-6xl mb-4 group-hover:animate-bounce">
                  {cert.icon}
                </div>
                
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{cert.provider}</p>
                  
                  <Badge 
                    variant="outline" 
                    className={`
                      border-${cert.color}/30 bg-${cert.color}/10 text-${cert.color}
                      group-hover:bg-${cert.color}/20 transition-all duration-300
                    `}
                  >
                    {cert.category}
                  </Badge>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Card className="glass-effect glow-effect inline-block">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold text-gradient mb-2">
                Continuous Learning Journey
              </h3>
              <p className="text-muted-foreground">
                Always exploring new technologies and expanding my skill set
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
