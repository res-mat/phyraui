// src/components/Dashboard/APIManagement/index.tsx
import React, { useState } from 'react';
import { 
  Globe, 
  Shield, 
  Key, 
  AlertTriangle,
  BarChart2,
  RefreshCw,
  Clock,
  AlertCircle
} from 'lucide-react';

interface Endpoint {
  id: string;
  path: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  status: 'active' | 'deprecated';
  version: string;
  auth: 'key' | 'oauth' | 'none';
  rateLimit: number;
  metrics: {
    requests: number;
    latency: number;
    errorRate: number;
  };
}

interface APIKey {
  id: string;
  name: string;
  key: string;
  created: string;
  lastUsed: string;
  status: 'active' | 'revoked';
  scopedEndpoints: string[];
}

const APIManagement: React.FC = () => {
  const [activeTab, setActiveTab] = useState('endpoints');
  const [selectedEndpoint, setSelectedEndpoint] = useState<string | null>(null);

  const endpoints: Endpoint[] = [
    {
      id: '1',
      path: '/api/v1/inference',
      method: 'POST',
      status: 'active',
      version: 'v1',
      auth: 'key',
      rateLimit: 1000,
      metrics: {
        requests: 15000,
        latency: 245,
        errorRate: 0.5
      }
    },
    {
      id: '2',
      path: '/api/v1/train',
      method: 'POST',
      status: 'active',
      version: 'v1',
      auth: 'key',
      rateLimit: 100,
      metrics: {
        requests: 500,
        latency: 1200,
        errorRate: 1.2
      }
    }
  ];

  const apiKeys: APIKey[] = [
    {
      id: '1',
      name: 'Production Key',
      key: 'pk_live_xxxxx',
      created: '2024-02-15',
      lastUsed: '2024-03-21',
      status: 'active',
      scopedEndpoints: ['/api/v1/inference']
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">API Management</h1>
        <button className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          Generate New API Key
        </button>
      </div>

      {/* API Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Total Requests (24h)</p>
              <p className="text-2xl font-bold">45.2K</p>
            </div>
            <Globe className="text-blue-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Avg. Latency</p>
              <p className="text-2xl font-bold">245ms</p>
            </div>
            <Clock className="text-green-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Error Rate</p>
              <p className="text-2xl font-bold">0.5%</p>
            </div>
            <AlertCircle className="text-yellow-500" size={24} />
          </div>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500">Active Keys</p>
              <p className="text-2xl font-bold">12</p>
            </div>
            <Key className="text-purple-500" size={24} />
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex space-x-4 border-b">
        {['endpoints', 'keys', 'documentation'].map((tab) => (
          <button
            key={tab}
            className={`px-4 py-2 border-b-2 ${
              activeTab === tab 
                ? 'border-blue-500 text-blue-500' 
                : 'border-transparent text-gray-500'
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Endpoints List */}
      {activeTab === 'endpoints' && (
        <div className="bg-white rounded-lg shadow">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Endpoint</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Method</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Version</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Metrics</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {endpoints.map((endpoint) => (
                <tr key={endpoint.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <code className="text-sm">{endpoint.path}</code>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      endpoint.method === 'GET' ? 'bg-green-100 text-green-700' :
                      endpoint.method === 'POST' ? 'bg-blue-100 text-blue-700' :
                      endpoint.method === 'PUT' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-red-100 text-red-700'
                    }`}>
                      {endpoint.method}
                    </span>
                  </td>
                  <td className="px-6 py-4">{endpoint.version}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      endpoint.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'
                    }`}>
                      {endpoint.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-sm">
                      <div>Requests: {endpoint.metrics.requests}</div>
                      <div>Latency: {endpoint.metrics.latency}ms</div>
                      <div>Error Rate: {endpoint.metrics.errorRate}%</div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-blue-500 hover:text-blue-700">
                      View Details
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* API Keys Management */}
      {activeTab === 'keys' && (
        <div className="bg-white rounded-lg shadow">
          <table className="min-w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Name</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Key</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Created</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Last Used</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Status</th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-600">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {apiKeys.map((key) => (
                <tr key={key.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4">{key.name}</td>
                  <td className="px-6 py-4">
                    <code className="text-sm">{key.key}</code>
                  </td>
                  <td className="px-6 py-4">{key.created}</td>
                  <td className="px-6 py-4">{key.lastUsed}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 rounded text-sm ${
                      key.status === 'active' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {key.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <button className="text-red-500 hover:text-red-700">
                      Revoke
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* API Documentation */}
      {activeTab === 'documentation' && (
        <div className="bg-white rounded-lg shadow p-6">
          <div className="prose max-w-none">
            <h2>API Documentation</h2>
            <p className="text-gray-600">
              Comprehensive documentation for all API endpoints, including request/response formats,
              authentication methods, and example usage.
            </p>
            
            {/* Example Endpoint Documentation */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold">POST /api/v1/inference</h3>
              <p className="text-gray-600 mt-2">
                Perform model inference on the provided input data.
              </p>
              
              <div className="mt-4">
                <h4 className="font-semibold">Request Format</h4>
                <pre className="bg-gray-50 p-4 rounded-md mt-2">
                  {JSON.stringify({
                    "input": "string",
                    "parameters": {
                      "temperature": 0.7,
                      "max_tokens": 100
                    }
                  }, null, 2)}
                </pre>
              </div>

              <div className="mt-4">
                <h4 className="font-semibold">Response Format</h4>
                <pre className="bg-gray-50 p-4 rounded-md mt-2">
                  {JSON.stringify({
                    "output": "string",
                    "metadata": {
                      "processing_time": "123ms",
                      "model_version": "1.0.0"
                    }
                  }, null, 2)}
                </pre>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default APIManagement;