// src/components/Dashboard/MLPipeline/index.tsx
import React, { useState } from 'react';
import { Brain, GitBranch, Database, LineChart, History, Play } from 'lucide-react';

interface MLExperiment {
  id: string;
  name: string;
  model: string;
  status: 'running' | 'completed' | 'failed';
  metrics: {
    accuracy: number;
    loss: number;
    epochsCompleted: number;
    totalEpochs: number;
  };
  created: string;
  lastUpdated: string;
  dataset: string;
  version: string;
}

interface Model {
  id: string;
  name: string;
  version: string;
  status: 'production' | 'staging' | 'development';
  type: 'classification' | 'regression' | 'generation';
  performance: {
    accuracy: number;
    latency: string;
    lastEvaluated: string;
  };
}

const MLPipeline: React.FC = () => {
  const [activeTab, setActiveTab] = useState('experiments');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">ML Pipeline</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700">
          <Play size={16} />
          <span>New Experiment</span>
        </button>
      </div>

      {/* ML Pipeline Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Active Models</h3>
            <Brain className="text-blue-500" size={20} />
          </div>
          <p className="text-2xl font-bold mt-2">8</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Running Experiments</h3>
            <GitBranch className="text-green-500" size={20} />
          </div>
          <p className="text-2xl font-bold mt-2">3</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Dataset Versions</h3>
            <Database className="text-purple-500" size={20} />
          </div>
          <p className="text-2xl font-bold mt-2">12</p>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <h3 className="text-gray-500">Avg. Performance</h3>
            <LineChart className="text-orange-500" size={20} />
          </div>
          <p className="text-2xl font-bold mt-2">94.2%</p>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="border-b border-gray-200">
        <nav className="flex space-x-8">
          {['Experiments', 'Models', 'Datasets', 'Feature Store'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`py-4 px-1 border-b-2 font-medium text-sm ${
                activeTab === tab.toLowerCase()
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              {tab}
            </button>
          ))}
        </nav>
      </div>

      {/* Experiments List */}
      {activeTab === 'experiments' && (
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Experiment
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Model
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Metrics
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Progress
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example row */}
              <tr>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="flex items-center">
                    <div className="ml-4">
                      <div className="text-sm font-medium text-gray-900">
                        BERT Fine-tuning
                      </div>
                      <div className="text-sm text-gray-500">v1.2.3</div>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="text-sm text-gray-900">BERT-base</div>
                  <div className="text-sm text-gray-500">Classification</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <span className="px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    Running
                  </span>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div>Accuracy: 92.5%</div>
                  <div>Loss: 0.086</div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div className="h-2 bg-blue-500 rounded" style={{ width: '75%' }}></div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">75% (15/20 epochs)</div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MLPipeline;