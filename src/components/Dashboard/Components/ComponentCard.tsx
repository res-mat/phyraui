// src/components/Dashboard/Components/ComponentCard.tsx
import React from 'react';
import { Star, Download, Activity } from 'lucide-react';
import { Component } from '../../../types';

interface ComponentCardProps {
  component: Component;
  onClick: () => void;
}

const ComponentCard: React.FC<ComponentCardProps> = ({ component, onClick }) => {
  return (
    <div 
      className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-lg font-semibold">{component.name}</h3>
          <span className={`px-2 py-1 rounded-full text-sm ${
            component.status === 'stable' ? 'bg-green-100 text-green-700' :
            component.status === 'beta' ? 'bg-yellow-100 text-yellow-700' :
            'bg-red-100 text-red-700'
          }`}>
            {component.status}
          </span>
        </div>

        <p className="text-gray-600 mb-4 line-clamp-2">
          {component.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {component.tags.map(tag => (
            <span 
              key={tag}
              className="px-2 py-1 bg-gray-100 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>

        {component.metrics && (
          <div className="grid grid-cols-2 gap-4 mb-4 p-3 bg-gray-50 rounded-md">
            <div className="text-sm">
              <div className="text-gray-500">Success Rate</div>
              <div className="font-semibold">{component.metrics.successRate}%</div>
            </div>
            <div className="text-sm">
              <div className="text-gray-500">Avg. Latency</div>
              <div className="font-semibold">{component.metrics.averageLatency}ms</div>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between text-sm text-gray-500">
          <div>
            <span className="mr-4">v{component.version}</span>
            <span>{new Date(component.lastUpdated).toLocaleDateString()}</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Activity size={16} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full">
              <Download size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentCard;