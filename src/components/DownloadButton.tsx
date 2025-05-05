
import { Chrome } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  browser: "chrome" | "firefox";
  url: string;
}

const DownloadButton = ({ browser, url }: DownloadButtonProps) => {
  // Use Chrome icon for Chrome and render a custom Firefox icon for Firefox
  const browserName = browser === "chrome" ? "Chrome" : "Firefox";
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block">
      <Button 
        variant={browser === "chrome" ? "default" : "outline"} 
        size="lg" 
        className={`flex items-center gap-2 ${browser === "chrome" ? "bg-getmark-red hover:bg-getmark-red/90" : "border-getmark-red text-getmark-red hover:bg-getmark-red/10"}`}
      >
        {browser === "chrome" ? (
          <Chrome size={18} />
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <circle cx="12" cy="12" r="4" />
            <line x1="21.17" y1="8" x2="12" y2="8" />
            <line x1="3.95" y1="6.06" x2="8.54" y2="14" />
            <line x1="10.88" y1="21.94" x2="15.46" y2="14" />
          </svg>
        )}
        <span>Download for {browserName}</span>
      </Button>
    </a>
  );
};

export default DownloadButton;
