
import { Github } from "lucide-react";

const Navbar = () => {
  return (
    <header className="border-b border-gray-100 py-4">
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-getmark-red"></div>
          <span className="text-xl font-bold">GetMark</span>
        </div>
        
        <div className="hidden space-x-6 md:flex">
          <a href="#features" className="text-sm font-medium text-gray-700 hover:text-getmark-red transition-colors">
            Features
          </a>
          <a href="#story" className="text-sm font-medium text-gray-700 hover:text-getmark-red transition-colors">
            Story
          </a>
          <a href="#download" className="text-sm font-medium text-gray-700 hover:text-getmark-red transition-colors">
            Download
          </a>
        </div>
        
        <div className="flex items-center gap-4">
          <a 
            href="https://github.com/GHkrishna/Getmark" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-getmark-red transition-colors"
          >
            <Github size={18} />
            <span className="hidden md:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
