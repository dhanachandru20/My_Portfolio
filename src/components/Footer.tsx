
import React from 'react';

const Footer = () => {
  return (
    <footer className="py-6 md:py-8 px-4 sm:px-6 border-t border-border/50">
      <div className="max-w-6xl mx-auto text-center">
        <div className="mb-4 md:mb-6">
          <h3 className="text-xl md:text-2xl font-bold text-gradient mb-2">
            DHANACHANDRU.R
          </h3>
          <p className="text-sm md:text-base text-muted-foreground">
            Computer Science Student & Future Software Engineer
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row justify-center items-center sm:space-x-6 md:space-x-8 mb-4 md:mb-6 text-xs md:text-sm text-muted-foreground space-y-2 sm:space-y-0">
          <span>🎓 B.E. Computer Science</span>
          <span>📍 Cuddalore, Tamil Nadu</span>
          <span>🚀 Open for Opportunities</span>
        </div>
        
        <div className="text-xs md:text-sm text-muted-foreground">
          <p>&copy; 2024 Dhanachandru.R. All rights reserved.</p>
          <p className="mt-1">Built with passion and modern web technologies</p>
        </div>
      </div>
    </footer>
    
  );
};

export default Footer;
