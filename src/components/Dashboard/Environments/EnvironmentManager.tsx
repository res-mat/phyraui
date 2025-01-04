// src/components/Dashboard/Environments/EnvironmentManager.tsx
import React, { useState } from 'react';
import { 
  Cloud, 
  Code, 
  Box, 
  Globe, 
  Activity, 
  Settings,
  GitBranch,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

interface Environment {
  id: string;
  name: string;
  type: 'development' | 'staging' | 'production';
  status: 'active' | 'inactive' | 'deploying';
  url: string;
  lastDeployed: string;
  version: string;
  health: {
    status: 'healthy' | 'warning' | 'error';
    uptime: string;
    lastChecked: string;
  };
  resources: {
    cpu: string;
    memory: string;
    storage: string;
  };
}

const EnvironmentManager: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'development' | 'staging' | 'production'>('all');
  const [selectedEnv, setSelectedEnv] = useState<string | null>(null);
  const [isDeploying, setIsDeploying] = useState(false);

  const environments: Environment[] = [
    // ... your environments data
  ];

  const tabs = [
    { id: 'all', label: 'All Environments', icon: <Cloud size={20} /> },
    { id: 'development', label: 'Development', icon: <Code size={20} /> },
    { id: 'staging', label: 'Staging', icon: <GitBranch size={20} /> },
    { id: 'production', label: 'Production', icon: <Globe size={20} /> }
  ];

  const filteredEnvironments = activeTab === 'all' 
    ? environments 
    : environments.filter(env => env.type === activeTab);

  const getStatusColor = (status: Environment['health']['status']) => {
    switch (status) {
      case 'healthy': return 'text-green-500';
      case 'warning': return 'text-yellow-500';
      case 'error': return 'text-red-500';
      default: return 'text-gray-500';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header with Tabs */}
      <div className="bg-white rounded-lg shadow">
        <div className="border-b">
          <div className="flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`
                  flex items-center space-x-2 px-6 py-4 focus:outline-none
                  ${activeTab === tab.id ? 
                    'border-b-2 border-[#2C3CD1] text-[#2C3CD1]' : 
                    'text-gray-500 hover:text-gray-700 hover:bg-gray-50'}
                `}
              >
                {tab.icon}
                <span>{tab.label}</span>
                {tab.id !== 'all' && (
                  <span className="ml-2 bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                    {environments.filter(env => env.type === tab.id).length}
                  </span>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Environment Cards */}
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEnvironments.map((env) => (
              <div 
                key={env.id}
                className="bg-white rounded-lg shadow-lg overflow-hidden border hover:shadow-xl transition-shadow"
              >
                {/* Card Header */}
                <div className="p-4 border-b">
                  <div className="flex justify-between items-center mb-2">
                    <div className="flex items-center space-x-2">
                      {env.type === 'development' && <Code size={20} className="text-blue-500" />}
                      {env.type === 'staging' && <GitBranch size={20} className="text-yellow-500" />}
                      {env.type === 'production' && <Globe size={20} className="text-green-500" />}
                      <h3 className="font-semibold">{env.name}</h3>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      getStatusColor(env.health.status)
                    } bg-opacity-10`}>
                      {env.health.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{env.url}</p>
                </div>

                {/* Card Details */}
                <div className="p-4 space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <GitBranch size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">Version:</span>
                    </div>
                    <span className="text-sm font-medium">{env.version}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <Clock size={16} className="text-gray-500" />
                      <span className="text-sm text-gray-600">Last Deployed:</span>
                    </div>
                    <span className="text-sm">{env.lastDeployed}</span>
                  </div>

                  {/* Resource Usage */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">CPU</span>
                      <span>{env.resources.cpu}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-blue-500 rounded-full h-2"
                        style={{ width: env.resources.cpu }}
                      />
                    </div>

                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Memory</span>
                      <span>{env.resources.memory}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div 
                        className="bg-purple-500 rounded-full h-2"
                        style={{ width: '60%' }}
                      />
                    </div>
                  </div>
                </div>

                {/* Card Actions */}
                <div className="p-4 bg-gray-50 border-t">
                  <div className="flex space-x-2">
                    <button
                      onClick={() => {/* Deploy logic */}}
                      className="flex-1 px-3 py-2 bg-[#2C3CD1] text-white rounded hover:bg-opacity-90 transition-colors"
                      disabled={isDeploying}
                    >
                      {isDeploying ? 'Deploying...' : 'Deploy'}
                    </button>
                    <button
                      onClick={() => setSelectedEnv(env.id)}
                      className="px-3 py-2 text-gray-700 hover:bg-gray-100 rounded"
                    >
                      <Settings size={20} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deployment History Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold mb-4">Recent Activities</h2>
        <div className="space-y-4">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center space-x-4">
                <CheckCircle className="text-green-500" />
                <div>
                  <p className="font-medium">Deployment #{i}</p>
                  <p className="text-sm text-gray-600">Deployed to {i === 1 ? 'production' : 'staging'}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-sm font-medium">v0.8.{i}</p>
                <p className="text-sm text-gray-600">2h ago</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EnvironmentManager;