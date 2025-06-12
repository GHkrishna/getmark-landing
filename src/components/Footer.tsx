
import { Github, Mail, Siren } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <img 
              src="lovable-uploads/c2678d19-4c0f-498a-8432-3f39ae106b68.png" 
              alt="GetMark Logo" 
              className="h-8 w-auto" 
            />
            <span className="text-xl font-bold">GetMark</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-600">
            <a href="#features" className="hover:text-getmark-blue transition-colors">Features</a>
            <a href="#story" className="hover:text-getmark-blue transition-colors">Story</a>
            <a href="#supported-browsers" className="hover:text-getmark-blue transition-colors">Browsers</a>
            <a href="#download" className="hover:text-getmark-blue transition-colors">Download</a>
            <a 
              href="https://github.com/GHkrishna/Getmark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-getmark-blue transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
            <a 
              href="mailto:waskekrishna11@gmail.com" 
              className="flex items-center gap-2 hover:text-getmark-blue transition-colors"
            >
              <Mail size={16} />
              <span>Contact</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>© {new Date().getFullYear()} GetMark. All rights reserved. | </p>
          
            <a 
              href="privacy-policy.html" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-getmark-blue transition-colors"
            >
              <Siren size={16} />
              <span>Privacy Policy</span>
            </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
