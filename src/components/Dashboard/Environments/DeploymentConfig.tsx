// src/components/Dashboard/Environments/DeploymentConfig.tsx
import React, { useState } from 'react';
import { 
  Settings, 
  Server, 
  Shield, 
//   Git,
  Database
} from 'lucide-react';

interface ConfigSection {
  name: string;
  icon: React.ReactNode;
  fields: {
    key: string;
    label: string;
    type: 'text' | 'select' | 'number';
    options?: string[];
    value: string;
  }[];
}

const DeploymentConfig: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');

  const configSections: ConfigSection[] = [
    {
      name: 'General',
      icon: <Settings size={20} />,
      fields: [
        {
          key: 'instance_type',
          label: 'Instance Type',
          type: 'select',
          options: ['t2.micro', 't2.small', 't2.medium'],
          value: 't2.micro'
        },
        {
          key: 'region',
          label: 'Region',
          type: 'select',
          options: ['us-east-1', 'eu-west-1', 'ap-south-1'],
          value: 'us-east-1'
        }
      ]
    },
    {
      name: 'Resources',
      icon: <Server size={20} />,
      fields: [
        {
          key: 'cpu_limit',
          label: 'CPU Limit',
          type: 'text',
          value: '2 cores'
        },
        {
          key: 'memory_limit',
          label: 'Memory Limit',
          type: 'text',
          value: '4GB'
        }
      ]
    },
    {
      name: 'Database',
      icon: <Database size={20} />,
      fields: [
        {
          key: 'db_version',
          label: 'Database Version',
          type: 'select',
          options: ['13.4', '14.1', '15.0'],
          value: '14.1'
        },
        {
          key: 'db_size',
          label: 'Database Size',
          type: 'text',
          value: '10GB'
        }
      ]
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg">
      <div className="flex border-b">
        {configSections.map((section) => (
          <button
            key={section.name}
            className={`flex items-center space-x-2 px-6 py-4 hover:bg-gray-50 focus:outline-none ${
              activeTab === section.name.toLowerCase() ? 'border-b-2 border-[#2C3CD1] text-[#2C3CD1]' : 'text-gray-600'
            }`}
            onClick={() => setActiveTab(section.name.toLowerCase())}
          >
            {section.icon}
            <span>{section.name}</span>
          </button>
        ))}
      </div>

      <div className="p-6">
        {configSections.map((section) => (
          <div
            key={section.name}
            className={activeTab === section.name.toLowerCase() ? '' : 'hidden'}
          >
            <div className="grid gap-6">
              {section.fields.map((field) => (
                <div key={field.key}>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    {field.label}
                  </label>
                  {field.type === 'select' ? (
                    <select
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3CD1] focus:border-transparent"
                    >
                      {field.options?.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    <input
                      type={field.type}
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2C3CD1] focus:border-transparent"
                      defaultValue={field.value}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="mt-6 flex justify-end space-x-3">
          <button
            className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-[#2C3CD1] text-white rounded-lg hover:bg-opacity-90"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeploymentConfig;