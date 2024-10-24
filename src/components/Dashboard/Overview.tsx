// import React from 'react';

// const Overview: React.FC = () => {
//   return (
//     <div>
//       <h1 className="text-2xl font-bold mb-6">Dashboard Overview</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Active Projects</h3>
//           <p className="text-3xl font-bold text-blue-600">12</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Fine Tuning Jobs</h3>
//           <p className="text-3xl font-bold text-green-600">5</p>
//         </div>
//         <div className="bg-white p-6 rounded-lg shadow">
//           <h3 className="text-lg font-semibold mb-2">Datasets</h3>
//           <p className="text-3xl font-bold text-purple-600">8</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Overview;

// src/components/Dashboard/Overview.tsx
import React from 'react';
import { ComponentsView } from './Visualizations/ComponentsView';
import { WorkflowView } from './Visualizations/WorkflowView';

const Overview: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Components Overview</h2>
        <ComponentsView />
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold mb-4">Active Workflows</h2>
        <WorkflowView />
      </div>
    </div>
  );
};

export default Overview;