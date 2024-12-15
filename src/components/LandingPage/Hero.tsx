import React from 'react';
import { Network, Brain, BookOpen, FileText, Users, ArrowRight, GitMerge } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => (
  <div className="bg-[#ede6da] min-h-screen">
    <div className="container mx-auto px-6 py-20">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-16">
        {/* Left Column */}
        <div className="lg:w-1/2 space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl lg:text-5xl font-bold text-[#2C3CD1]">
              Understanding Neural Networks Through Sparse Autoencoders
            </h1>
            
            <p className="text-lg leading-relaxed text-[#2C3CD1]">
              Our research explores neural network interpretability through the powerful lens of 
              sparse representations. By leveraging sparse autoencoders, we decompose complex 
              neural mechanisms into their fundamental computational building blocks.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                to="/research/papers"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#2C3CD1] text-white hover:bg-opacity-90 transition-all group"
              >
                <BookOpen className="w-5 h-5 mr-2" />
                Read Our Research
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/join-research"
                className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-[#2C3CD1] text-[#2C3CD1] hover:bg-[#2C3CD1] hover:text-white transition-all"
              >
                <Users className="w-5 h-5 mr-2" />
                Join Our Lab
              </Link>
            </div>
          </div>

          <div className="bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-4 text-[#2C3CD1]">Theoretical Framework</h2>
            <p className="text-base text-[#2C3CD1] leading-relaxed">
            <a 
        href="https://web.stanford.edu/class/cs294a/sparseAutoencoder.pdf" 
        target="_blank" 
        rel="noopener noreferrer"
        className="underline hover:text-blue-600"
      >
        Sparse autoencoders
      </a>{" "}
              function as powerful analytical tools by enforcing sparsity 
              constraints during training. This approach encourages the network to represent 
              information using minimal active neurons, often revealing semantically meaningful 
              features that correspond to human-interpretable concepts.
            </p>
            
            {/* Secondary CTA */}
            <Link
              to="/methodology"
              className="inline-flex items-center mt-6 text-[#2C3CD1] hover:opacity-80 transition-opacity group"
            >
              <FileText className="w-5 h-5 mr-2" />
              Explore Our Methodology
              <ArrowRight className="ml-1 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:w-1/2 relative">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-[#2C3CD1] rounded-full mix-blend-multiply filter blur-xl opacity-10 animate-blob animation-delay-4000"></div>

          <div className="relative bg-white bg-opacity-50 backdrop-blur-lg rounded-lg p-8 space-y-6">
            <h2 className="text-2xl font-semibold text-[#2C3CD1]">Applications in AI Understanding</h2>
            
            <div className="space-y-6">
              <p className="text-base text-[#2C3CD1] leading-relaxed">
                The application of sparse autoencoders extends beyond theoretical insights, 
                providing practical tools for understanding how neural networks process information 
                and develop capabilities. By decomposing neural representations into interpretable 
                features, we gain crucial insights into the mechanisms underlying model behavior.
              </p>

              <p className="text-base text-[#2C3CD1] leading-relaxed">
                This understanding proves invaluable for developing more reliable and controllable 
                AI systems. Our research helps identify potential failure modes and behavioral 
                patterns before they manifest in deployed systems.
              </p>

              <div className="border-t border-[#2C3CD1] border-opacity-20 pt-6 mt-6">
        <h3 className="text-xl font-semibold text-[#2C3CD1] mb-4 flex items-center">
          <GitMerge className="w-5 h-5 mr-2" />
          Compound AI Systems
        </h3>
        <p className="text-base text-[#2C3CD1] leading-relaxed">

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
          for innovation and efficiency. Our research explores how these integrated systems 
          can leverage interpretable features discovered through sparse autoencoders to 
          create more robust and understandable AI architectures.
        </p>
      </div>

              {/* Resource CTA */}
              <div className="pt-4">
                <Link
                  to="/resources"
                  className="inline-flex items-center justify-center w-full px-6 py-3 rounded-lg border-2 border-[#2C3CD1] text-[#2C3CD1] hover:bg-[#2C3CD1] hover:text-white transition-all"
                >
                  <Brain className="w-5 h-5 mr-2" />
                  Access Research Resources
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const styles = `
  @keyframes blob {
    0% { transform: translate(0px, 0px) scale(1); }
    33% { transform: translate(30px, -50px) scale(1.1); }
    66% { transform: translate(-20px, 20px) scale(0.9); }
    100% { transform: translate(0px, 0px) scale(1); }
  }
  .animate-blob { animation: blob 7s infinite; }
  .animation-delay-2000 { animation-delay: 2s; }
  .animation-delay-4000 { animation-delay: 4s; }
`;

export default Hero;