
import { Chrome, Firefox } from "lucide-react";
import { Button } from "@/components/ui/button";

interface DownloadButtonProps {
  browser: "chrome" | "firefox";
  url: string;
}

const DownloadButton = ({ browser, url }: DownloadButtonProps) => {
  const BrowserIcon = browser === "chrome" ? Chrome : Firefox;
  const browserName = browser === "chrome" ? "Chrome" : "Firefox";
  
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" className="inline-block">
      <Button 
        variant={browser === "chrome" ? "default" : "outline"} 
        size="lg" 
        className={`flex items-center gap-2 ${browser === "chrome" ? "bg-getmark-red hover:bg-getmark-red/90" : "border-getmark-red text-getmark-red hover:bg-getmark-red/10"}`}
      >
        <BrowserIcon size={18} />
        <span>Download for {browserName}</span>
      </Button>
    </a>
  );
};

export default DownloadButton;
