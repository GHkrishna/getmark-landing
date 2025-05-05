
import { BookOpen, Chrome, FileText, Firefox, Github, Link, Star } from "lucide-react";
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
                Add notes to people, companies, and repos you follow on GitHub. Never forget why they caught your attention.
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
              GetMark is designed to enhance your GitHub experience with powerful note-taking capabilities.
            </p>
          </div>
          
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            <FeatureCard 
              title="Create Notes" 
              description="Add detailed notes to any GitHub profile, organization, or repository you visit."
              icon={<FileText size={24} />}
            />
            <FeatureCard 
              title="Custom Tags" 
              description="Organize your notes with custom tags for easy filtering and categorization."
              icon={<Link size={24} />}
            />
            <FeatureCard 
              title="Notes Dashboard" 
              description="Access all your notes in one place with a clean, organized dashboard."
              icon={<BookOpen size={24} />}
            />
          </div>
          
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Create and organize notes</h3>
              <img 
                src="/lovable-uploads/4b5ae210-631a-4087-8f27-afe75b28c98f.png" 
                alt="Create Note Interface" 
                className="rounded-lg" 
              />
            </div>
            <div className="rounded-lg bg-white p-6 shadow-sm">
              <h3 className="mb-4 text-xl font-semibold">Easy interface integration</h3>
              <img 
                src="/lovable-uploads/d755adbd-87b8-486b-ac1d-df8b7fccfe40.png" 
                alt="GetMark Dashboard" 
                className="rounded-lg" 
              />
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
                <div className="h-12 w-12 rounded-full bg-getmark-red"></div>
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
                  like Brave and Opera. The project is fully open-source, welcoming contributions from 
                  the developer community.
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
      <section id="download" className="bg-getmark-red py-20 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold md:text-4xl">Ready to get started?</h2>
            <p className="mb-8 text-lg text-white/80">
              Download GetMark now and start organizing your GitHub follows with detailed notes.
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
                <Firefox size={20} />
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
