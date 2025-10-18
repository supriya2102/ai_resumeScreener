import { useState } from 'react';
import { Upload, Sparkles, Brain, CheckCircle, AlertCircle, TrendingUp, Award } from 'lucide-react';
import UploadSection from './components/UploadSection';
import ResultsSection from './components/ResultsSection';
import Sidebar from './components/Sidebar';
import type { ResumeData } from './types';

function App() {
  const [isScanning, setIsScanning] = useState(false);
  const [resumeData, setResumeData] = useState<ResumeData | null>(null);

  const handleFileUpload = async (file: File) => {
    setIsScanning(true);

    // Simulate Azure API call with delay
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Mock data for demo
    const mockData: ResumeData = {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      skills: [
        { name: "React", matched: true, confidence: 95 },
        { name: "TypeScript", matched: true, confidence: 92 },
        { name: "Node.js", matched: true, confidence: 88 },
        { name: "Python", matched: true, confidence: 85 },
        { name: "Azure", matched: true, confidence: 90 },
        { name: "Docker", matched: false, confidence: 75 },
        { name: "AWS", matched: false, confidence: 70 },
        { name: "GraphQL", matched: false, confidence: 68 },
      ],
      experience: [
        {
          title: "Senior Full Stack Developer",
          company: "Tech Innovations Inc.",
          duration: "2021 - Present",
          description: "Led development of cloud-native applications using React and Azure services."
        },
        {
          title: "Full Stack Developer",
          company: "Digital Solutions Co.",
          duration: "2019 - 2021",
          description: "Built scalable web applications with modern JavaScript frameworks."
        }
      ],
      education: [
        {
          degree: "Master of Computer Science",
          institution: "Stanford University",
          year: "2019"
        },
        {
          degree: "Bachelor of Software Engineering",
          institution: "MIT",
          year: "2017"
        }
      ],
      bestMatch: {
        role: "Senior Full Stack Engineer",
        matchPercentage: 89,
        confidence: 92
      }
    };

    setResumeData(mockData);
    setIsScanning(false);
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      {/* Animated background gradient */}
      <div className="fixed inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-neon-blue rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-neon-purple rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-neon-pink rounded-full mix-blend-multiply filter blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="border-b border-dark-border glass-effect-dark">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Brain className="w-10 h-10 text-neon-blue animate-glow" />
                  <Sparkles className="w-4 h-4 text-neon-purple absolute -top-1 -right-1" />
                </div>
                <h1 className="text-3xl font-bold bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink bg-clip-text text-transparent">
                  AI Resume Screener
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="glass-effect px-4 py-2 rounded-lg border border-neon-blue/30">
                  <span className="text-sm text-gray-400">Status:</span>
                  <span className="ml-2 text-neon-green font-semibold">Active</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Main content area */}
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left content area */}
            <div className="lg:col-span-2 space-y-6">
              <UploadSection onFileUpload={handleFileUpload} isScanning={isScanning} />
              {resumeData && <ResultsSection data={resumeData} />}
            </div>

            {/* Right sidebar */}
            <div className="lg:col-span-1">
              <Sidebar data={resumeData} />
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-dark-border glass-effect-dark mt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <p className="text-sm text-gray-400">
                Powered by <span className="text-neon-blue font-semibold">Azure Document Intelligence</span>
              </p>
              <p className="text-sm text-gray-400">
                Created by <span className="text-neon-purple font-semibold">Riya</span>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
