import React, { useState } from 'react';
import { Plus, Play, Pause, Settings, Trash2, ExternalLink } from 'lucide-react';

interface Workflow {
  id: string;
  name: string;
  description: string;
  status: 'active' | 'paused' | 'draft';
  type: 'classification' | 'generation' | 'fine-tuning' | 'inference';
  lastRun: string;
  performance: number;
  steps: WorkflowStep[];
}

interface WorkflowStep {
  id: string;
  name: string;
  type: string;
  config: Record<string, any>;
  status: 'completed' | 'running' | 'pending' | 'failed';
}

const Workflows: React.FC = () => {
  const [selectedWorkflow, setSelectedWorkflow] = useState<Workflow | null>(null);

  const workflows: Workflow[] = [
    {
      id: '1',
      name: 'Text Classification Pipeline',
      description: 'Multi-label classification for support tickets',
      status: 'active',
      type: 'classification',
      lastRun: '2024-03-21 14:30',
      performance: 0.92,
      steps: [
        {
          id: 's1',
          name: 'Data Preprocessing',
          type: 'preprocessor',
          config: { method: 'tokenization', maxLength: 512 },
          status: 'completed'
        },
        {
          id: 's2',
          name: 'BERT Embedding',
          type: 'embedding',
          config: { model: 'bert-base-uncased' },
          status: 'completed'
        },
        {
          id: 's3',
          name: 'Classification',
          type: 'classifier',
          config: { classes: ['urgent', 'bug', 'feature'] },
          status: 'running'
        }
      ]
    },
    {
        id: '2',
        name: 'Agentic AI',
        description: 'Multi-label classification for support tickets',
        status: 'active',
        type: 'classification',
        lastRun: '2024-03-21 14:30',
        performance: 0.92,
        steps: [
          {
            id: 's1',
            name: 'Data Preprocessing',
            type: 'preprocessor',
            config: { method: 'tokenization', maxLength: 512 },
            status: 'completed'
          },
          {
            id: 's2',
            name: 'BERT Embedding',
            type: 'embedding',
            config: { model: 'bert-base-uncased' },
            status: 'completed'
          },
          {
            id: 's3',
            name: 'Classification',
            type: 'classifier',
            config: { classes: ['urgent', 'bug', 'feature'] },
            status: 'running'
          }
        ]
      },
    // Add more workflows as needed
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI/ML Workflows</h1>
        <button className="flex items-center space-x-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
          <Plus size={20} />
          <span>New Workflow</span>
        </button>
      </div>

      {/* Workflows Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {workflows.map((workflow) => (
          <div 
            key={workflow.id}
            className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-lg font-semibold">{workflow.name}</h3>
                <span className={`px-2 py-1 rounded-full text-sm ${
                  workflow.status === 'active' ? 'bg-green-100 text-green-700' :
                  workflow.status === 'paused' ? 'bg-yellow-100 text-yellow-700' :
                  'bg-gray-100 text-gray-700'
                }`}>
                  {workflow.status}
                </span>
              </div>
              
              <p className="text-gray-600 mb-4">{workflow.description}</p>
              
              {/* Workflow Steps Visualization */}
              <div className="mb-4">
                <div className="flex items-center space-x-2">
                  {workflow.steps.map((step, index) => (
                    <React.Fragment key={step.id}>
                      <div className={`h-2 w-8 rounded ${
                        step.status === 'completed' ? 'bg-green-500' :
                        step.status === 'running' ? 'bg-blue-500' :
                        step.status === 'failed' ? 'bg-red-500' :
                        'bg-gray-300'
                      }`} />
                      {index < workflow.steps.length - 1 && (
                        <div className="h-[1px] w-4 bg-gray-300" />
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Last run: {workflow.lastRun}
                </div>
                <div className="flex space-x-2">
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    {workflow.status === 'active' ? <Pause size={18} /> : <Play size={18} />}
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full">
                    <Settings size={18} />
                  </button>
                  <button className="p-2 hover:bg-gray-100 rounded-full text-red-500">
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Workflows;