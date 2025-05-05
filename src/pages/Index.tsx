
import { BookOpen, Chrome, FileText, Github, Link, Star, Tag, LayoutDashboard, Database } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DownloadButton from "@/components/DownloadButton";
import FeatureCard from "@/components/FeatureCard";
import StatsCard from "@/components/StatsCard";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      
      {/* Hero Section */}
      <section className="hero-gradient py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center gap-16 md:flex-row md:justify-between">
            <div className="max-w-md text-center md:text-left">
              <h1 className="mb-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Remember why you <span className="text-getmark-red">follow</span>
              </h1>
              <p className="mb-8 text-lg text-gray-600">
                Add notes to any website you visit. Not just GitHub — bookmark and annotate pages across the entire internet.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
                <DownloadButton 
                  browser="chrome" 
                  url="https://chromewebstore.google.com/detail/getmark/jjigjenboocbojhbfeohoicappjobekn" 
                />
                <DownloadButton 
                  browser="firefox" 
                  url="https://addons.mozilla.org/en-US/firefox/addon/getmark/" 
                />
              </div>
            </div>
            <div className="relative w-full max-w-md animate-fade-in">
              <img 
                src="/lovable-uploads/7adf15c3-899d-4181-9c12-d15b148de9f4.png" 
                alt="GetMark Extension Interface" 
                className="rounded-lg shadow-xl" 
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section id="features" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Features</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              GetMark enhances your browsing experience with powerful note-taking and organization capabilities across the entire web.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              title="Universal Bookmarking" 
              description="Save and annotate any webpage you visit — GitHub profiles, articles, documentation, or anything else worth remembering."
              icon={<Link size={24} />}
              className="border-l-4 border-getmark-blue"
            />
            <FeatureCard 
              title="Smart Tagging System" 
              description="Organize your notes with custom tags for effortless filtering and quick retrieval of related content."
              icon={<Tag size={24} />}
              className="border-l-4 border-getmark-red"
            />
            <FeatureCard 
              title="Centralized Dashboard" 
              description="Access all your notes in one place with a clean, searchable dashboard that makes management simple."
              icon={<LayoutDashboard size={24} />}
              className="border-l-4 border-getmark-blue"
            />
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Powerful Dashboard</h3>
              <img 
                src="/lovable-uploads/8c648dfe-85ff-4aca-b57a-168f14e4b413.png" 
                alt="GetMark Dashboard Interface" 
                className="rounded-lg border border-gray-200" 
              />
              <p className="mt-4 text-gray-600">
                Manage all your notes in one place with easy search, filtering by tags, and chronological sorting options.
              </p>
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Open Source & Community-Driven</h3>
              <div className="flex flex-col space-y-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-getmark-blue/10 p-2 text-getmark-blue">
                    <Github size={18} />
                  </div>
                  <p className="text-gray-600">
                    Fully open-source codebase available on GitHub for anyone to review, contribute, or customize.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-getmark-red/10 p-2 text-getmark-red">
                    <FileText size={18} />
                  </div>
                  <p className="text-gray-600">
                    Built with privacy in mind — your notes are stored locally in your browser, not on external servers.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 rounded-full bg-getmark-blue/10 p-2 text-getmark-blue">
                    <Database size={18} />
                  </div>
                  <p className="text-gray-600">
                    Growing community of users contributing ideas and feedback to continuously improve functionality.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Story Section */}
      <section id="story" className="bg-gray-50 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-6 text-center text-3xl font-bold md:text-4xl">The GetMark Story</h2>
            
            <div className="rounded-xl bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <img 
                  src="/lovable-uploads/c2678d19-4c0f-498a-8432-3f39ae106b68.png" 
                  alt="GetMark Logo" 
                  className="h-12 w-auto" 
                />
                <div>
                  <h3 className="font-semibold">From Frustration to Solution</h3>
                  <p className="text-sm text-gray-500">A developer's journey</p>
                </div>
              </div>
              
              <div className="prose prose-slate max-w-none">
                <p>
                  GetMark was born out of a common frustration: constantly switching between 
                  Chrome and Firefox to add notes on GitHub profiles and repositories.
                </p>
                <p>
                  When I first launched the Chrome extension, it was to solve my own problem—remembering 
                  why I followed specific people or repositories on GitHub. But being primarily a Firefox 
                  user, I found myself constantly switching browsers just to add notes!
                </p>
                <p>
                  After sharing the extension on a forum, I was immediately met with skepticism. One user 
                  was only willing to try it after the source code was made public. This feedback 
                  actually led to making the project open-source, which turned out to be one of the 
                  best decisions for the project.
                </p>
                <p>
                  Today, GetMark is available across Chrome, Firefox, and all Chromium-based browsers 
                  like Brave and Opera. While it started for GitHub, it now works across the entire web,
                  letting you save and annotate any webpage you find valuable. The project is fully open-source, 
                  welcoming contributions from the developer community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Community Support</h2>
            <p className="mx-auto max-w-2xl text-gray-600">
              GetMark is trusted by developers around the world.
            </p>
          </div>
          
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <StatsCard value="25+" label="Active Users" icon={<Chrome size={24} />} />
            <StatsCard value="6" label="Positive Reviews" icon={<Star size={24} />} />
            <StatsCard value="4" label="GitHub Stars" icon={<Github size={24} />} />
          </div>
        </div>
      </section>
      
      {/* Download CTA Section */}
      <section id="download" className="bg-gradient-to-br from-getmark-red to-getmark-blue py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to get started?</h2>
            <p className="mb-8 text-lg text-white/80">
              Download GetMark now and start organizing your entire web browsing experience with detailed notes and tags.
            </p>
            
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a 
                href="https://chromewebstore.google.com/detail/getmark/jjigjenboocbojhbfeohoicappjobekn" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 font-medium text-getmark-red shadow-lg transition-transform hover:scale-105"
              >
                <Chrome size={20} />
                <span>Chrome</span>
              </a>
              
              <a 
                href="https://addons.mozilla.org/en-US/firefox/addon/getmark/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-medium text-white transition-transform hover:bg-white/10 hover:scale-105"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
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
                <span>Firefox</span>
              </a>
              
              <a 
                href="https://github.com/GHkrishna/Getmark" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 rounded-lg border-2 border-white px-6 py-3 font-medium text-white transition-transform hover:bg-white/10 hover:scale-105"
              >
                <Github size={20} />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;
