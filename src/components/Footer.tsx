
import { Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-getmark-red"></div>
            <span className="text-xl font-bold">GetMark</span>
          </div>
          
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-gray-600">
            <a href="#features" className="hover:text-getmark-red transition-colors">Features</a>
            <a href="#story" className="hover:text-getmark-red transition-colors">Story</a>
            <a href="#download" className="hover:text-getmark-red transition-colors">Download</a>
            <a 
              href="https://github.com/GHkrishna/Getmark" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-getmark-red transition-colors"
            >
              <Github size={16} />
              <span>GitHub</span>
            </a>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} GetMark. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
