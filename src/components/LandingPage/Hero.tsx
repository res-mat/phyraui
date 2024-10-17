import React from 'react';

const Hero: React.FC = () => (
  <div className="min-h-screen flex flex-col items-center justify-center p-4" style={{ backgroundColor: '#ede6da', color: '#2C3CD1' }}>
    <h1 className="text-4xl font-bold mb-4">phyra.ai</h1>
    <p className="text-lg max-w-2xl text-center">
      <a 
        href="https://bair.berkeley.edu/blog/2024/02/18/compound-ai-systems/" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline hover:text-blue-600"
      >
        Compound AI systems
      </a>{" "}
      are revolutionizing the way we approach complex problems. 
      By integrating multiple AI technologies, we're unlocking unprecedented potential 
      for innovation and efficiency. The future of AI lies in these interconnected 
      systems, working in harmony to tackle challenges across industries and drive 
      progress in ways we're only beginning to imagine.
    </p>
  </div>
);

export default Hero;