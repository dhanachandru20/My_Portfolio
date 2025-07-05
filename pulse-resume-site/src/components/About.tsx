
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const About = () => {
  return (
    <section id="about" className="py-12 md:py-20 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-4">
            <span className="text-gradient">About Me</span>
          </h2>
          <div className="w-16 md:w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
          <div className="space-y-6 md:space-y-8">
            <Card className="glass-effect glow-effect group hover:scale-105 transition-all duration-300 h-full">
              <CardContent className="p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-primary">🎓 Education</h3>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h4 className="font-semibold text-base md:text-lg">B.E. Computer Science and Engineering</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Krishnasamy College of Engineering and Technology</p>
                    <p className="text-sm md:text-base text-accent">2022 - Present</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Higher Secondary Certificate (HSC)</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Krishnasamy Memorial Matriculation Higher Secondary</p>
                    <p className="text-sm md:text-base text-accent">2021 - 2022</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm md:text-base">Secondary School Leaving Certificate (SSLC)</h4>
                    <p className="text-sm md:text-base text-muted-foreground">Krishnasamy Memorial Matriculation Higher Secondary, Cuddalore - 607001</p>
                    <p className="text-sm md:text-base text-accent">2019 - 2020</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-effect glow-effect group hover:scale-105 transition-all duration-300 h-full">
              <CardContent className="p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-secondary">🌍 Languages</h3>
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
                  <span className="px-3 md:px-4 py-2 bg-primary/20 text-primary rounded-full border border-primary/30 text-sm md:text-base text-center">
                    Tamil (Native)
                  </span>
                  <span className="px-3 md:px-4 py-2 bg-secondary/20 text-secondary rounded-full border border-secondary/30 text-sm md:text-base text-center">
                    English (Fluent)
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6 md:space-y-8">
            <Card className="glass-effect glow-effect group hover:scale-105 transition-all duration-300 h-full">
              <CardContent className="p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-gradient">💡 Objectives</h3>
                <p className="text-base md:text-lg leading-relaxed text-muted-foreground">
                  I'm passionate about working on real-world software development projects and collaborating with experienced developers. 
                  My goal is to enhance my problem-solving and coding skills while contributing to meaningful projects in a team-based environment.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-effect glow-effect group hover:scale-105 transition-all duration-300 h-full">
              <CardContent className="p-6 md:p-8 h-full">
                <h3 className="text-xl md:text-2xl font-bold mb-4 text-accent">📍 Location</h3>
                <div className="text-sm md:text-base text-muted-foreground space-y-1">
                  <p>Cuddalore, Tamil Nadu - 607301</p>
                  <p>📧 chandru2004c@gmail.com</p>
                  <p>📱 6382349760</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
