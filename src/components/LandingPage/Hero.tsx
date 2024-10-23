// import React from 'react';

// const Hero: React.FC = () => (
//   <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: '#ede6da', color: '#2C3CD1' }}>
//     <h1 className="text-4xl font-bold mb-4">phyra.ai</h1>
//     <p className="text-lg max-w-2xl text-center">
//       <a 
//         href="https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/" 
//         target="_blank" 
//         rel="noopener noreferrer"
//         className="underline hover:text-blue-600"
//       >
//         Compound AI systems
//       </a>{" "}
//       are revolutionizing the way we approach complex problems. 
//       By integrating multiple AI technologies, we're unlocking unprecedented potential 
//       for innovation and efficiency. The future of AI lies in these interconnected 
//       systems, working in harmony to tackle challenges across industries and drive 
//       progress in ways we're only beginning to imagine.
//     </p>
//   </div>
// );

// export default Hero;
// src/components/Landing/Hero.tsx
import React from 'react';
import { Brain, Workflow, Layers, Cpu, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => (
  <div style={{ backgroundColor: '#ede6da' }}>
    {/* Hero Section */}
    <div className="min-h-screen flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-grow container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#2C3CD1' }}>
            Orchestrate Your
            <br />
            AI Infrastructure
          </h1>
          <p className="text-lg lg:text-xl mb-8 leading-relaxed" style={{ color: '#2C3CD1' }}>
            <a 
              href="https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="underline hover:opacity-80 transition-opacity"
            >
              Compound AI systems
            </a>{" "}
            are revolutionizing the way we approach complex problems. 
            By integrating multiple AI technologies, we're unlocking unprecedented potential 
            for innovation and efficiency.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/signup"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#2C3CD1] text-white hover:bg-opacity-90 transition-all"
            >
              Get Started
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
            <Link
              to="/documentation"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-[#2C3CD1] text-[#2C3CD1] hover:bg-[#2C3CD1] hover:text-white transition-all"
            >
              Documentation
            </Link>
          </div>
        </div>
        
        {/* Visual Element */}
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div 
                    key={index}
                    className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-6 hover:transform hover:scale-105 transition-transform"
                  >
                    <feature.icon className="w-8 h-8 mb-4" style={{ color: '#2C3CD1' }} />
                    <h3 className="font-semibold mb-2" style={{ color: '#2C3CD1' }}>
                      {feature.title}
                    </h3>
                    <p className="text-sm opacity-75" style={{ color: '#2C3CD1' }}>
                      {feature.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#2C3CD1' }}>
          Built for Modern AI Development
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-8 hover:transform hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-[#2C3CD1] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <solution.icon className="w-6 h-6" style={{ color: '#2C3CD1' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#2C3CD1' }}>
                {solution.title}
              </h3>
              <p className="text-base opacity-75" style={{ color: '#2C3CD1' }}>
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const features = [
  {
    icon: Brain,
    title: 'AI Orchestration',
    description: 'Seamlessly manage and coordinate multiple AI systems'
  },
  {
    icon: Workflow,
    title: 'Workflow Automation',
    description: 'Automate complex AI workflows and pipelines'
  },
  {
    icon: Layers,
    title: 'Model Management',
    description: 'Version and manage your ML models effectively'
  },
  {
    icon: Cpu,
    title: 'Resource Optimization',
    description: 'Optimize computing resources for maximum efficiency'
  }
];

const solutions = [
  {
    icon: Brain,
    title: 'Unified AI Platform',
    description: 'A single platform to manage all your AI/ML workloads, from development to deployment.'
  },
  {
    icon: Workflow,
    title: 'Intelligent Orchestration',
    description: 'Advanced orchestration capabilities for complex AI systems and workflows.'
  },
  {
    icon: Cpu,
    title: 'Resource Management',
    description: 'Efficient allocation and management of computing resources across your AI infrastructure.'
  }
];

// Add these animations to your global CSS or a separate stylesheet
const styles = `
  @keyframes blob {
    0% {
      transform: translate(0px, 0px) scale(1);
    }
    33% {
      transform: translate(30px, -50px) scale(1.1);
    }
    66% {
      transform: translate(-20px, 20px) scale(0.9);
    }
    100% {
      transform: translate(0px, 0px) scale(1);
    }
  }

  .animate-blob {
    animation: blob 7s infinite;
  }

  .animation-delay-2000 {
    animation-delay: 2s;
  }

  .animation-delay-4000 {
    animation-delay: 4s;
  }
`;

export default Hero;