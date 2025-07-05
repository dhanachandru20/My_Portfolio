
import React from 'react';
import { Button } from '@/components/ui/button';
import { Download, Github, Linkedin, Eye } from 'lucide-react';
import resumeFile from '@/assets/My_Resume_page-0001.jpg';

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = resumeFile;
    link.download = 'Dhanachandru_R_Resume.jpg';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleViewResume = () => {
    // Open resume in new tab for viewing
    window.open(resumeFile, '_blank');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/dhanachandru20', '_blank');
  };

  const handleLinkedInClick = () => {
    window.open('https://linkedin.com/in/dhanachandru-r-b220072a3', '_blank');
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-60 h-60 md:w-80 md:h-80 bg-primary/20 rounded-full blur-3xl animate-float"></div>
        <div className="absolute -bottom-40 -left-40 w-60 h-60 md:w-80 md:h-80 bg-secondary/20 rounded-full blur-3xl animate-float" style={{animationDelay: '3s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 md:w-96 md:h-96 bg-accent/10 rounded-full blur-3xl animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight">
            <span className="text-gradient">DHANACHANDRU</span>
          </h1>
          
          <div className="text-lg sm:text-xl md:text-2xl lg:text-4xl font-light mb-6 md:mb-8 h-auto md:h-16">
            <span className="typewriter inline-block">Computer Science Student & Future Software Engineering</span>
          </div>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-muted-foreground mb-8 md:mb-12 max-w-3xl mx-auto animate-slide-up leading-relaxed" style={{animationDelay: '2s'}}>
            Passionate about real-world software development, collaboration, and enhancing problem-solving skills in team-based environments.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6 animate-slide-up" style={{animationDelay: '2.5s'}}>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                size="lg" 
                onClick={handleViewResume}
                className="group bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white px-6 md:px-8 py-3 md:py-4 text-base md:text-lg glow-effect animate-glow w-full sm:w-auto"
              >
                <Eye className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:animate-bounce" />
                View Resume
              </Button>
              
              <Button 
                size="lg" 
                onClick={handleDownloadResume}
                variant="outline"
                className="glass-effect border-primary/30 hover:bg-primary/10 group px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto"
              >
                <Download className="mr-2 h-4 w-4 md:h-5 md:w-5 group-hover:animate-bounce" />
                Download Resume
              </Button>
            </div>
            
            <div className="flex gap-3 md:gap-4">
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleGitHubClick}
                className="glass-effect border-primary/30 hover:bg-primary/10 group p-3 md:p-4"
              >
                <Github className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={handleLinkedInClick}
                className="glass-effect border-primary/30 hover:bg-primary/10 group p-3 md:p-4"
              >
                <Linkedin className="h-4 w-4 md:h-5 md:w-5 group-hover:scale-110 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>

     {/* Scroll indicator */}
<div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="w-6 h-6 md:w-8 md:h-8 text-primary"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
  </svg>
</div>
</section>
  );
};

export default Hero;
