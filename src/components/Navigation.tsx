
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Eye, Download } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleViewResume = () => {
    // Open resume in new tab for viewing
    window.open('/src/assets/Dhanachandru_R_Resume.pdf');
  };

  const handleDownloadResume = () => {
    // Create a temporary link element to trigger download
    const link = document.createElement('a');
    link.href = '/src/assets/Dhanachandru_R_Resume.pdf';
    link.download = '/src/assets/Dhanachandru_R_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      const sections = navItems.map(item => item.id);
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-background/80 backdrop-blur-lg border-b border-border/50' : ''
    }`}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3 md:py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl md:text-2xl font-bold">
            <span className="text-gradient">D_R</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Button
                key={item.id}
                variant="ghost"
                onClick={() => scrollToSection(item.id)}
                className={`px-3 lg:px-4 py-2 transition-all duration-300 text-sm lg:text-base ${
                  activeSection === item.id 
                    ? 'text-primary bg-primary/10' 
                    : 'hover:text-primary hover:bg-primary/5'
                }`}
              >
                {item.label}
              </Button>
            ))}
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2"
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>

          <div className="hidden sm:flex gap-2">
            <Button 
              size="sm"
              onClick={handleViewResume}
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white text-xs md:text-sm px-3 md:px-4 py-2"
            >
              <Eye className="mr-1 h-3 w-3" />
              View
            </Button>
            <Button 
              size="sm"
              onClick={handleDownloadResume}
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 text-xs md:text-sm px-3 md:px-4 py-2"
            >
              <Download className="mr-1 h-3 w-3" />
              Download
            </Button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/50">
            <div className="flex flex-col space-y-2 mt-4">
              {navItems.map((item) => (
                <Button
                  key={item.id}
                  variant="ghost"
                  onClick={() => scrollToSection(item.id)}
                  className={`justify-start px-4 py-3 transition-all duration-300 ${
                    activeSection === item.id 
                      ? 'text-primary bg-primary/10' 
                      : 'hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {item.label}
                </Button>
              ))}
              <div className="flex gap-2 mt-2">
                <Button 
                  size="sm"
                  onClick={handleViewResume}
                  className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white flex-1"
                >
                  <Eye className="mr-1 h-3 w-3" />
                  View Resume
                </Button>
                <Button 
                  size="sm"
                  onClick={handleDownloadResume}
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 flex-1"
                >
                  <Download className="mr-1 h-3 w-3" />
                  Download
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
