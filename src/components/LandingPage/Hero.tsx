import React from 'react';
import { Brain, Database, Microscope, Network, Code, GitMerge, Server, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => (
  <div style={{ backgroundColor: '#ede6da' }}>
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 lg:pr-12">
          <h1 className="text-5xl lg:text-6xl font-bold mb-6" style={{ color: '#2C3CD1' }}>
            AI Research: From Systems to Understanding
          </h1>
          <p className="text-lg lg:text-xl mb-8 leading-relaxed" style={{ color: '#2C3CD1' }}>
            Advancing AI through mechanistic interpretability, synthetic data generation, 
            and robust ML infrastructure development.
          </p>
          <div className="flex space-x-4">
            <Link
              to="/research"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#2C3CD1] text-white hover:bg-opacity-90 transition-all"
            >
              Research Areas
            </Link>
            <Link
              to="/papers"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-[#2C3CD1] text-[#2C3CD1] hover:bg-[#2C3CD1] hover:text-white transition-all"
            >
              Publications
            </Link>
          </div>
        </div>
        
        <div className="lg:w-1/2 mt-12 lg:mt-0">
          <div className="relative">
            <div className="absolute top-0 -left-4 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
            <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                {researchAreas.map((area, index) => (
                  <div 
                    key={index}
                    className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-6 hover:transform hover:scale-105 transition-transform"
                  >
                    <area.icon className="w-8 h-8 mb-4" style={{ color: '#2C3CD1' }} />
                    <h3 className="font-semibold mb-2" style={{ color: '#2C3CD1' }}>
                      {area.title}
                    </h3>
                    <p className="text-sm opacity-75" style={{ color: '#2C3CD1' }}>
                      {area.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-12 text-center" style={{ color: '#2C3CD1' }}>
          Research Streams
        </h2>
        <div className="grid md:grid-cols-4 gap-8">
          {researchStreams.map((stream, index) => (
            <div 
              key={index}
              className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-8 hover:transform hover:scale-105 transition-transform"
            >
              <div className="w-12 h-12 bg-[#2C3CD1] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                <stream.icon className="w-6 h-6" style={{ color: '#2C3CD1' }} />
              </div>
              <h3 className="text-xl font-semibold mb-4" style={{ color: '#2C3CD1' }}>
                {stream.title}
              </h3>
              <p className="text-base opacity-75" style={{ color: '#2C3CD1' }}>
                {stream.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
);

const researchAreas = [
  {
    icon: Brain,
    title: 'Mechanistic Interpretability',
    description: 'Understanding neural networks through sparse autoencoders and advanced analysis techniques.'
  },
  {
    icon: Database,
    title: 'Synthetic Data',
    description: 'Generating high-quality synthetic data for improved model training and evaluation.'
  },
  {
    icon: Server,
    title: 'ML Systems',
    description: 'Building scalable and efficient infrastructure for training and deploying AI models.'
  },
  {
    icon: GitMerge,
    title: 'Systems Integration',
    description: 'Combining interpretability insights with robust infrastructure for better AI systems.'
  }
];

const researchStreams = [
  {
    icon: Microscope,
    title: 'Neural Understanding',
    description: 'Decomposing neural networks into interpretable components using sparse autoencoders, analyzing information processing and capability development within AI systems.'
  },
  {
    icon: Code,
    title: 'Synthetic Data Generation',
    description: 'Developing advanced techniques for generating synthetic data that maintains statistical validity while providing enhanced control over training scenarios and edge cases.'
  },
  {
    icon: Server,
    title: 'ML Infrastructure',
    description: 'Creating robust, scalable systems for AI development, including distributed training pipelines, efficient model serving, and comprehensive monitoring solutions.'
  },
  {
    icon: Cpu,
    title: 'Integrated Systems',
    description: 'Combining interpretability research, synthetic data, and ML infrastructure to build more reliable, understandable, and efficient AI systems.'
  }
];

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
