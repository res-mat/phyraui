// src/components/Dashboard/Visualizations/WorkflowView.tsx
import React, { useState, useCallback } from 'react';
import ReactFlow, {
  Node,
  Edge,
  Controls,
  Background,
  Connection,
  EdgeChange,
  NodeChange,
  addEdge,
  applyEdgeChanges,
  applyNodeChanges
} from 'reactflow';
import 'reactflow/dist/style.css';

interface WorkflowNode {
  name: string;
  status: 'running' | 'completed' | 'failed' | 'pending';
  duration?: string;
  startTime?: string;
}

const initialNodes: Node<WorkflowNode>[] = [
  {
    id: '1',
    type: 'workflowNode',
    position: { x: 0, y: 100 },
    data: {
      name: 'Data Ingestion',
      status: 'completed',
      duration: '5m 30s',
      startTime: '10:30 AM'
    }
  },
  {
    id: '2',
    type: 'workflowNode',
    position: { x: 300, y: 0 },
    data: {
      name: 'Feature Engineering',
      status: 'running',
      duration: '10m 15s',
      startTime: '10:35 AM'
    }
  },
  {
    id: '3',
    type: 'workflowNode',
    position: { x: 300, y: 200 },
    data: {
      name: 'Model Training',
      status: 'pending'
    }
  },
  {
    id: '4',
    type: 'workflowNode',
    position: { x: 600, y: 100 },
    data: {
      name: 'Evaluation',
      status: 'pending'
    }
  }
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e1-3', source: '1', target: '3', animated: true },
  { id: 'e2-4', source: '2', target: '4', animated: true },
  { id: 'e3-4', source: '3', target: '4', animated: true }
];

const WorkflowNode: React.FC<{ data: WorkflowNode }> = ({ data }) => {
  const statusColors = {
    running: 'bg-blue-100 text-blue-700',
    completed: 'bg-green-100 text-green-700',
    failed: 'bg-red-100 text-red-700',
    pending: 'bg-gray-100 text-gray-700'
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-gray-200 min-w-[200px]">
      <div className="font-bold text-lg mb-2">{data.name}</div>
      <div className={`text-sm rounded-full px-2 py-1 ${statusColors[data.status]}`}>
        {data.status}
      </div>
      {data.duration && (
        <div className="text-xs text-gray-600 mt-2">
          Duration: {data.duration}
        </div>
      )}
      {data.startTime && (
        <div className="text-xs text-gray-600">
          Started: {data.startTime}
        </div>
      )}
    </div>
  );
};

const nodeTypes = {
  workflowNode: WorkflowNode
};

export const WorkflowView: React.FC = () => {
  const [nodes, setNodes] = useState<Node<WorkflowNode>[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  const onConnect = useCallback(
    (params: Connection) => setEdges((eds) => addEdge(params, eds)),
    []
  );

  return (
    <div className="h-[600px] w-full bg-gray-50 rounded-lg">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
        fitView
      >
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};