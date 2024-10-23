export interface ButtonProps {
    label: string;
    onClick: () => void;
    className?: string;
  }


  export interface User {
    id: string;
    email: string;
    name: string;
    role: 'admin' | 'user';
  }
  
  // Component Types
  export interface Component {
    id: string;
    name: string;
    description: string;
    category: ComponentCategory;
    version: string;
    author: string;
    tags: string[];
    lastUpdated: string;
    status: 'stable' | 'beta' | 'deprecated';
    documentation: string;
    metrics?: ComponentMetrics;
  }
  
  export type ComponentCategory = 
    | 'data-processing'
    | 'ml-models'
    | 'api-connectors'
    | 'storage'
    | 'visualization';
  
  export interface ComponentMetrics {
    usage: number;
    successRate: number;
    averageLatency: number;
    errorRate: number;
  }
  
  // ML Pipeline Types
  export interface MLExperiment {
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
  
  // Cost Management Types
  export interface CostMetric {
    category: string;
    amount: number;
    trend: number;
    limit: number;
  }
  
  export interface ResourceUsage {
    resource: string;
    usage: number;
    cost: number;
    trend: number;
  }
  
  // API Management Types
  export interface Endpoint {
    id: string;
    path: string;
    method: 'GET' | 'POST' | 'PUT' | 'DELETE';
    status: 'active' | 'deprecated';
    auth: boolean;
    rateLimit: number;
    usage: {
      calls: number;
      errors: number;
      latency: number;
    };
  }


  export interface WorkflowStep {
    id: string;
    componentId: string;
    config: Record<string, any>;
    inputs: string[];
    outputs: string[];
  }
  
  export interface Workflow {
    id: string;
    name: string;
    description: string;
    steps: WorkflowStep[];
    status: 'active' | 'draft' | 'paused';
    createdAt: string;
    updatedAt: string;
    metrics?: WorkflowMetrics;
  }
  
  export interface WorkflowMetrics {
    executionTime: number;
    successRate: number;
    costPerRun: number;
    lastExecuted: string;
  }
  