
import { Github, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <img 
            src="/lovable-uploads/c2678d19-4c0f-498a-8432-3f39ae106b68.png" 
            alt="GetMark Logo" 
            className="h-8 w-auto" 
          />
          <span className="text-xl font-bold">GetMark</span>
        </div>
        
        <div className="hidden space-x-6 md:flex">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-getmark-blue transition-colors">
            Features
          </a>
          <a href="#story" className="text-sm font-medium text-gray-700 hover:text-getmark-blue transition-colors">
            Story
          </a>
          <a href="#supported-browsers" className="text-sm font-medium text-gray-700 hover:text-getmark-blue transition-colors">
            Browsers
          </a>
          <a href="#download" className="text-sm font-medium text-gray-700 hover:text-getmark-blue transition-colors">
            Download
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/GHkrishna/Getmark" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-getmark-blue transition-colors"
          >
            <Github size={18} />
            <span className="hidden md:inline">GitHub</span>
          </a>
          <a 
            href="mailto:waskekrishna11@gmail.com"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-getmark-blue transition-colors"
          >
            <Mail size={18} />
            <span className="hidden md:inline">Contact</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
