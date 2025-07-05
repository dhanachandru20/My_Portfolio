import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const Skills = () => {
  const technicalSkills = [
    { name: 'Python', level: 85, category: 'Programming' },
    { name: 'HTML/CSS', level: 80, category: 'Web Development' },
    { name: 'React.js', level: 60, category: 'Web Development' },
    { name: 'Flutter', level: 55, category: 'Mobile Development' },
    { name: 'Git/GitHub', level: 70, category: 'Tools' }
  ];

  const softSkills = [
    'Communication',
    'Team Management', 
    'Logical Thinking',
    'Time Management',
    'Problem Solving',
    'Leadership'
  ];

  const tools = [
    'Word', 'Excel', 'PowerPoint', 'VS Code', 'GitHub'
  ];

  const otherSkills = [
    'Video Editing',
    'Graphics Design'
  ];

  return (
    <section id="skills" className="py-12 md:py-20 px-4 sm:px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">Skills & Expertise</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12">
          {/* Technical Skills */}
          <Card className="glass-effect glow-effect group">
            <CardContent className="p-6 md:p-8">
              <h3 className="text-xl md:text-2xl font-bold mb-6 md:mb-8 text-primary flex items-center">
                <span className="mr-2 md:mr-3 text-xl md:text-2xl">💻</span>
                Technical Skills
              </h3>
              <div className="space-y-4 md:space-y-6">
                {technicalSkills.map((skill, index) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-sm md:text-base">
                        {skill.name}
                        {(skill.name === 'React.js' || skill.name === 'Flutter') && (
                          <span className="text-xs text-muted-foreground ml-2">(Beginner)</span>
                        )}
                      </span>
                      <span className="text-xs md:text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress 
                      value={skill.level} 
                      className="h-2 bg-muted"
                      style={{
                        animationDelay: `${index * 0.2}s`
                      }}
                    />
                    <span className="text-xs text-accent">{skill.category}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="space-y-6 md:space-y-8">
            {/* Soft Skills */}
            <Card className="glass-effect glow-effect group">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-secondary flex items-center">
                  <span className="mr-2 md:mr-3 text-xl md:text-2xl">🧠</span>
                  Soft Skills
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                  {softSkills.map((skill, index) => (
                    <div 
                      key={skill} 
                      className="px-3 md:px-4 py-2 md:py-3 bg-secondary/10 text-secondary rounded-lg border border-secondary/20 hover:bg-secondary/20 transition-all duration-300 hover:scale-105 text-sm md:text-base text-center"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tools & Platforms */}
            <Card className="glass-effect glow-effect group">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-accent flex items-center">
                  <span className="mr-2 md:mr-3 text-xl md:text-2xl">🛠️</span>
                  Tools & Platforms
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {tools.map((tool, index) => (
                    <span 
                      key={tool}
                      className="px-3 md:px-4 py-1 md:py-2 bg-accent/10 text-accent rounded-full border border-accent/20 hover:bg-accent/20 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Other Skills */}
            <Card className="glass-effect glow-effect group">
              <CardContent className="p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold mb-4 md:mb-6 text-gradient flex items-center">
                  <span className="mr-2 md:mr-3 text-xl md:text-2xl">🎨</span>
                  Other Skills
                </h3>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {otherSkills.map((skill, index) => (
                    <span 
                      key={skill}
                      className="px-3 md:px-4 py-1 md:py-2 bg-primary/10 text-primary rounded-full border border-primary/20 hover:bg-primary/20 transition-all duration-300 hover:scale-105 text-sm md:text-base"
                      style={{
                        animationDelay: `${index * 0.1}s`
                      }}
                    >
                      {skill}
                    </span>
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

export default Skills;
