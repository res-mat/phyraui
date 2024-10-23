// src/components/Dashboard/Deployments.tsx
import React from 'react';
import { Server, Cpu, Database, Activity, ExternalLink } from 'lucide-react';
import  ExpandableTable  from '../common/Table/ExpandableTable';

interface Deployment {
  id: string;
  name: string;
  status: 'running' | 'stopped' | 'failed';
  type: 'gpu' | 'cpu' | 'vectordb';
  endpoint: string;
  lastDeployed: string;
  resources: {
    cpu: string;
    memory: string;
    gpu?: string;
    storage?: string;
  };
  metrics: {
    uptime: string;
    requests: number;
    latency: string;
    errorRate: number;
  };
  config: Record<string, any>;
}

const Deployments: React.FC = () => {
  const deployments: Deployment[] = [
    {
      id: '1',
      name: 'Production Inference API',
      status: 'running',
      type: 'gpu',
      endpoint: 'https://api.phyra.ai/v1/inference',
      lastDeployed: '2024-03-21 10:00',
      resources: {
        cpu: '4 cores',
        memory: '16GB',
        gpu: 'NVIDIA A100',
        storage: '100GB SSD'
      },
      metrics: {
        uptime: '99.9%',
        requests: 15000,
        latency: '120ms',
        errorRate: 0.1
      },
      config: {
        framework: 'PyTorch',
        modelVersion: 'v1.2.3',
        batchSize: 32
      }
    },
    // Add more deployments
  ];

  const columns = [
    {
      key: 'name',
      header: 'Name',
      width: '25%',
      render: (value: string, row: Deployment) => (
        <div className="flex items-center space-x-2">
          {row.type === 'gpu' ? <Cpu size={16} /> :
           row.type === 'vectordb' ? <Database size={16} /> :
           <Server size={16} />}
          <span>{value}</span>
        </div>
      )
    },
    {
      key: 'status',
      header: 'Status',
      width: '15%',
      render: (value: Deployment['status']) => (
        <span className={`px-2 py-1 rounded-full text-sm ${
          value === 'running' ? 'bg-green-100 text-green-700' :
          value === 'stopped' ? 'bg-gray-100 text-gray-700' :
          'bg-red-100 text-red-700'
        }`}>
          {value}
        </span>
      )
    },
    {
      key: 'endpoint',
      header: 'Endpoint',
      width: '30%',
      render: (value: string) => (
        <div className="flex items-center space-x-2">
          <span className="text-gray-600">{value}</span>
          <ExternalLink size={14} className="text-gray-400" />
        </div>
      )
    },
    {
      key: 'metrics',
      header: 'Performance',
      width: '30%',
      render: (metrics: Deployment['metrics']) => (
        <div className="flex items-center space-x-4">
          <span className="text-sm">
            Latency: {metrics.latency}
          </span>
          <span className="text-sm">
            Error Rate: {metrics.errorRate}%
          </span>
        </div>
      )
    }
  ];

  const renderExpandedContent = (deployment: Deployment) => (
    <div className="grid grid-cols-2 gap-6">
      <div>
        <h4 className="font-semibold mb-3">Resources</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">CPU</span>
            <span>{deployment.resources.cpu}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Memory</span>
            <span>{deployment.resources.memory}</span>
          </div>
          {deployment.resources.gpu && (
            <div className="flex items-center justify-between">
              <span className="text-gray-600">GPU</span>
              <span>{deployment.resources.gpu}</span>
            </div>
          )}
          {deployment.resources.storage && (
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Storage</span>
              <span>{deployment.resources.storage}</span>
            </div>
          )}
        </div>
      </div>
      
      <div>
        <h4 className="font-semibold mb-3">Metrics</h4>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Uptime</span>
            <span>{deployment.metrics.uptime}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Total Requests</span>
            <span>{deployment.metrics.requests.toLocaleString()}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Avg. Latency</span>
            <span>{deployment.metrics.latency}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-600">Error Rate</span>
            <span>{deployment.metrics.errorRate}%</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Deployments</h1>
      
      {/* Resources Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">GPU Resources</h3>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-blue-600">2/4</span>
            <span className="text-gray-500">instances in use</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">CPU Resources</h3>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-green-600">8/16</span>
            <span className="text-gray-500">cores in use</span>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <h3 className="text-lg font-semibold mb-2">Vector DBs</h3>
          <div className="flex justify-between items-center">
            <span className="text-3xl font-bold text-purple-600">3</span>
            <span className="text-gray-500">active instances</span>
          </div>
        </div>
      </div>

      {/* Deployments Table */}
      <ExpandableTable
        columns={columns}
        data={deployments}
        expandableContent={renderExpandedContent}
      />
    </div>
  );
};

export default Deployments;