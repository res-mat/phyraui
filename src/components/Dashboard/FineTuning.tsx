import React from 'react';

interface Job {
  id: string;
  name: string;
  status: 'running' | 'completed' | 'failed';
  progress: number;
  startTime: string;
}

const FineTuning: React.FC = () => {
  const dummyJobs: Job[] = [
    { id: '1', name: 'Model A Training', status: 'running', progress: 75, startTime: '2024-03-21 09:00:00' },
    { id: '2', name: 'Model B Training', status: 'completed', progress: 100, startTime: '2024-03-20 15:00:00' },
    { id: '3', name: 'Model C Training', status: 'failed', progress: 45, startTime: '2024-03-20 12:00:00' },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Fine Tuning Jobs</h1>
      <div className="bg-white rounded-lg shadow">
        {dummyJobs.map((job) => (
          <div key={job.id} className="p-4 border-b last:border-b-0">
            <div className="flex items-center justify-between mb-2">
              <h3 className="font-semibold">{job.name}</h3>
              <span className={`px-2 py-1 rounded text-sm ${
                job.status === 'running' ? 'bg-blue-100 text-blue-600' :
                job.status === 'completed' ? 'bg-green-100 text-green-600' :
                'bg-red-100 text-red-600'
              }`}>
                {job.status}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded h-2">
              <div
                className={`h-2 rounded ${
                  job.status === 'failed' ? 'bg-red-500' : 'bg-blue-500'
                }`}
                style={{ width: `${job.progress}%` }}
              />
            </div>
            <span className="text-sm text-gray-500 mt-2 block">
              Started: {job.startTime}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FineTuning;