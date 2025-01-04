// src/components/Dashboard/CostManagement/index.tsx
import React, { useState } from 'react';
import { DollarSign, TrendingUp, AlertTriangle, PieChart } from 'lucide-react';

interface CostMetric {
  category: string;
  amount: number;
  trend: number;
  limit: number;
}

interface ResourceUsage {
  resource: string;
  usage: number;
  cost: number;
  trend: number;
}

const CostManagement: React.FC = () => {
  const [timeRange, setTimeRange] = useState('7d');

  const costMetrics: CostMetric[] = [
    { category: 'Compute', amount: 1250.50, trend: 12, limit: 2000 },
    { category: 'Storage', amount: 450.75, trend: -5, limit: 1000 },
    { category: 'API Calls', amount: 850.25, trend: 8, limit: 1500 },
    { category: 'ML Training', amount: 2100.00, trend: 15, limit: 2500 }
  ];

  const resourceUsage: ResourceUsage[] = [
    { resource: 'GPU Instances', usage: 75, cost: 850.00, trend: 5 },
    { resource: 'CPU Instances', usage: 60, cost: 400.50, trend: -2 },
    { resource: 'Storage (TB)', usage: 45, cost: 300.25, trend: 8 },
    { resource: 'Bandwidth (TB)', usage: 30, cost: 150.75, trend: 3 }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Cost Management</h1>
        <div className="flex space-x-2">
          {['7d', '30d', '90d', '1y'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded ${
                timeRange === range
                  ? 'bg-blue-100 text-blue-600'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      {/* Cost Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {costMetrics.map((metric) => (
          <div key={metric.category} className="bg-white p-6 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-gray-500 text-sm">{metric.category}</p>
                <p className="text-2xl font-bold mt-1">${metric.amount}</p>
              </div>
              <span className={`flex items-center ${
                metric.trend > 0 ? 'text-red-500' : 'text-green-500'
              }`}>
                <TrendingUp size={16} className="mr-1" />
                {Math.abs(metric.trend)}%
              </span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between text-sm mb-1">
                <span>Usage</span>
                <span>{Math.round((metric.amount / metric.limit) * 100)}% of limit</span>
              </div>
              <div className="w-full h-2 bg-gray-200 rounded">
                <div
                  className={`h-2 rounded ${
                    (metric.amount / metric.limit) > 0.9 ? 'bg-red-500' :
                    (metric.amount / metric.limit) > 0.7 ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}
                  style={{ width: `${(metric.amount / metric.limit) * 100}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Resource Usage */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Resource Usage & Costs</h2>
        </div>
        <div className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {resourceUsage.map((resource) => (
              <div key={resource.resource} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div>
                  <h3 className="font-medium">{resource.resource}</h3>
                  <p className="text-sm text-gray-500 mt-1">
                    Usage: {resource.usage}%
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-medium">${resource.cost}</p>
                  <p className={`text-sm ${
                    resource.trend > 0 ? 'text-red-500' : 'text-green-500'
                  }`}>
                    {resource.trend > 0 ? '+' : ''}{resource.trend}%
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Cost Alerts */}
      <div className="bg-white rounded-lg shadow">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-semibold">Cost Alerts</h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-red-50 text-red-700 rounded-lg">
              <div className="flex items-center">
                <AlertTriangle className="mr-2" size={20} />
                <div>
                  <p className="font-medium">ML Training costs exceeded budget</p>
                  <p className="text-sm">Daily limit of $500 exceeded by $150</p>
                </div>
              </div>
              <button className="px-3 py-1 bg-red-100 rounded hover:bg-red-200">
                View Details
              </button>
            </div>
            <div className="flex items-center justify-between p-4 bg-yellow-50 text-yellow-700 rounded-lg">
              <div className="flex items-center">
                <AlertTriangle className="mr-2" size={20} />
                <div>
                  <p className="font-medium">GPU usage approaching limit</p>
                  <p className="text-sm">Currently at 85% of monthly budget</p>
                </div>
              </div>
              <button className="px-3 py-1 bg-yellow-100 rounded hover:bg-yellow-200">
                View Details
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CostManagement;