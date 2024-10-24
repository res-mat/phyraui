// src/components/Dashboard/Visualizations/ComponentsView.tsx
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

interface ComponentNode {
  name: string;
  type: string;
  status: 'active' | 'inactive' | 'error';
  metrics: {
    executions: number;
    avgDuration: string;
  };
}

const initialNodes: Node<ComponentNode>[] = [
  {
    id: '1',
    type: 'componentNode',
    position: { x: 0, y: 0 },
    data: {
      name: 'Data Loader',
      type: 'data',
      status: 'active',
      metrics: {
        executions: 150,
        avgDuration: '2.3s'
      }
    }
  },
  {
    id: '2',
    type: 'componentNode',
    position: { x: 250, y: 0 },
    data: {
      name: 'Data Preprocessor',
      type: 'transformer',
      status: 'active',
      metrics: {
        executions: 150,
        avgDuration: '1.8s'
      }
    }
  },
  {
    id: '3',
    type: 'componentNode',
    position: { x: 500, y: 0 },
    data: {
      name: 'Model Trainer',
      type: 'ml',
      status: 'active',
      metrics: {
        executions: 75,
        avgDuration: '15.2m'
      }
    }
  }
];

const initialEdges: Edge[] = [
  { id: 'e1-2', source: '1', target: '2', animated: true },
  { id: 'e2-3', source: '2', target: '3', animated: true }
];

// Custom Node Component
const ComponentNode: React.FC<{ data: ComponentNode }> = ({ data }) => (
  <div className="bg-white p-4 rounded-lg shadow-lg border-2 border-blue-500 min-w-[200px]">
    <div className="font-bold text-lg">{data.name}</div>
    <div className="text-sm text-gray-600 mb-2">{data.type}</div>
    <div className="text-xs">
      <div className="flex justify-between mb-1">
        <span>Executions:</span>
        <span>{data.metrics.executions}</span>
      </div>
      <div className="flex justify-between">
        <span>Avg Duration:</span>
        <span>{data.metrics.avgDuration}</span>
      </div>
    </div>
  </div>
);

const nodeTypes = {
  componentNode: ComponentNode
};

export const ComponentsView: React.FC = () => {
  const [nodes, setNodes] = useState<Node<ComponentNode>[]>(initialNodes);
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