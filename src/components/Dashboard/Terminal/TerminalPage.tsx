// src/components/Dashboard/Terminal/TerminalPage.tsx
import React, { useState } from 'react';
import DummyTerminal from '../Terminal/DummyTerminal';

interface ComponentTerminal {
  id: string;
  name: string;
  type: string;
  status: 'running' | 'stopped' | 'error';
}

const TerminalPage: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  // Dummy data for component list
  const components: ComponentTerminal[] = [
    { id: '1', name: 'ml-model-1', type: 'Model Endpoint', status: 'running' },
    { id: '2', name: 'data-processor', type: 'Data Pipeline', status: 'running' },
    { id: '3', name: 'training-job', type: 'Training Job', status: 'stopped' },
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Terminal Access</h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Component List */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-lg font-semibold mb-4">Components</h2>
          <div className="space-y-2">
            {components.map((component) => (
              <div
                key={component.id}
                onClick={() => setSelectedComponent(component.id)}
                className={`p-3 rounded-lg cursor-pointer transition-colors
                  ${selectedComponent === component.id 
                    ? 'bg-blue-50 border border-blue-200' 
                    : 'hover:bg-gray-50 border border-transparent'
                  }`}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">{component.name}</h3>
                    <p className="text-sm text-gray-500">{component.type}</p>
                  </div>
                  <span className={`px-2 py-1 rounded-full text-xs
                    ${component.status === 'running' ? 'bg-green-100 text-green-800' :
                      component.status === 'stopped' ? 'bg-gray-100 text-gray-800' :
                      'bg-red-100 text-red-800'
                    }`}
                  >
                    {component.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Section */}
        <div className="lg:col-span-2">
          {selectedComponent ? (
            <DummyTerminal 
              componentName={components.find(c => c.id === selectedComponent)?.name || ''}
            />
          ) : (
            <div className="bg-white rounded-lg shadow-lg p-6 h-96 flex items-center justify-center">
              <p className="text-gray-500">Select a component to access its terminal</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TerminalPage;