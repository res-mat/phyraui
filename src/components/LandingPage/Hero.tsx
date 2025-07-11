import React from 'react';
import { Brain, Zap, Network, ArrowRight } from 'lucide-react';

const Hero: React.FC = () => (
  <div style={{ backgroundColor: '#ede6da', position: 'relative' }}>
    {/* Grain background overlay */}
    <div className="absolute inset-0 opacity-5 bg-grain animate-grain"></div>
    <div className="min-h-screen flex flex-col relative z-10">
      <div className="flex-grow container mx-auto px-4 py-16 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-3/5 lg:pr-12">
          <div className="mb-8">
            <h1 className="text-4xl lg:text-5xl font-light mb-4 tracking-widest" style={{ color: '#2C3CD1', fontFamily: 'Inter, system-ui, sans-serif' }}>
              PHYRA
            </h1>
            <h1 className="text-4xl lg:text-5xl font-light mb-8 tracking-widest" style={{ color: '#2C3CD1', fontFamily: 'Inter, system-ui, sans-serif' }}>
              RESEARCH
            </h1>
            <h2 className="text-3xl lg:text-4xl font-normal mb-4 tracking-wide" style={{ color: '#2C3CD1' }}>
              The Era of Experience Has Begun
            </h2>
          </div>
          
          <div className="space-y-6 text-lg lg:text-xl leading-relaxed mb-8" style={{ color: '#2C3CD1' }}>
            <p>
              We stand at the threshold of artificial intelligence's next evolutionary leap. For years, AI systems have achieved remarkable capabilities by learning from vast amounts of human-generated data—training on our conversations, our writings, our collective knowledge. But this approach is reaching its fundamental limits.
            </p>
            
            <p>
              The most groundbreaking discoveries in mathematics, science, and technology have never come from simply reorganizing existing knowledge. They emerge from direct interaction with the world—from experimentation, observation, and the iterative refinement of understanding through experience.
            </p>
            
            <p className="font-semibold text-xl lg:text-2xl">
              The future belongs to AI systems that learn like we do: continuously, adaptively, and through direct engagement with their environment.
            </p>
            
            <p>
              Imagine agents that don't just respond to queries, but actively explore, experiment, and evolve. Systems that improve not through periodic retraining, but through every interaction. Intelligence that discovers new strategies beyond human knowledge, not by processing more text, but by engaging with reality itself.
            </p>
            
            <p>
              This isn't science fiction—it's the natural next step in AI's evolution. The transition from static knowledge to experiential learning. From imitation to discovery. From human-centric to truly autonomous intelligence.
            </p>
            
            <p>
              At Phyra Research, we believe this Era of Experience will fundamentally reshape how intelligent systems operate, learn, and evolve. We're building the foundational infrastructure that will power this transformation—creating the bridges between artificial minds and the rich, complex environments where true learning happens.
            </p>
            
            <p className="font-semibold">
              The age of static AI is ending. The age of experiential intelligence has begun.
            </p>
            
            <p className="text-2xl lg:text-3xl font-bold">
              Welcome to the future of learning.
            </p>
          </div>
          
          <div className="flex space-x-4">
            <a
              href="/research"
              className="inline-flex items-center px-6 py-3 rounded-lg bg-[#2C3CD1] text-white hover:bg-opacity-90 transition-all group"
            >
              Explore Our Vision
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="/papers"
              className="inline-flex items-center px-6 py-3 rounded-lg border-2 border-[#2C3CD1] text-[#2C3CD1] hover:bg-[#2C3CD1] hover:text-white transition-all"
            >
              Research Papers
            </a>
          </div>
        </div>
        
        <div className="lg:w-2/5 mt-12 lg:mt-0">
          <div className="relative flex items-center justify-center">
            {/* Subtle grain effect background */}
            <div className="absolute inset-0 opacity-5">
              <div className="w-full h-full bg-grain animate-grain"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style>{styles}</style>
  </div>
);

const visionElements = [
  {
    icon: Brain,
    title: 'Continuous Learning',
    description: 'AI systems that evolve through every interaction, discovering new strategies beyond human knowledge.'
  },
  {
    icon: Zap,
    title: 'Experiential Intelligence',
    description: 'Moving from static training to dynamic learning through direct engagement with reality.'
  },
  {
    icon: Network,
    title: 'Foundational Infrastructure',
    description: 'Building the bridges between artificial minds and the complex environments where true learning happens.'
  }
];

const styles = `
  @keyframes grain {
    0% { transform: translate(0, 0); }
    10% { transform: translate(-5%, -5%); }
    20% { transform: translate(-10%, 5%); }
    30% { transform: translate(5%, -10%); }
    40% { transform: translate(-5%, 15%); }
    50% { transform: translate(-10%, 5%); }
    60% { transform: translate(15%, 0%); }
    70% { transform: translate(0%, 15%); }
    80% { transform: translate(-15%, 10%); }
    90% { transform: translate(10%, 5%); }
    100% { transform: translate(5%, 0%); }
  }

  .bg-grain {
    background-image: 
      radial-gradient(circle at 25% 25%, rgba(44, 60, 209, 0.1) 1px, transparent 1px),
      radial-gradient(circle at 50% 50%, rgba(44, 60, 209, 0.08) 1px, transparent 1px),
      radial-gradient(circle at 75% 75%, rgba(44, 60, 209, 0.06) 1px, transparent 1px);
    background-size: 20px 20px, 30px 30px, 40px 40px;
    background-position: 0 0, 10px 10px, 20px 20px;
  }

  .animate-grain {
    animation: grain 20s linear infinite;
  }
`;

export default Hero;
