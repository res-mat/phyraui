import React from 'react';

interface Log {
  id: string;
  timestamp: string;
  level: 'info' | 'warning' | 'error';
  message: string;
}

const Logs: React.FC = () => {
  const dummyLogs: Log[] = [
    { id: '1', timestamp: '2024-03-21 10:30:00', level: 'info', message: 'Project deployment successful' },
    { id: '2', timestamp: '2024-03-21 10:29:00', level: 'warning', message: 'High memory usage detected' },
    { id: '3', timestamp: '2024-03-21 10:28:00', level: 'error', message: 'API endpoint timeout' },
  ];

  const getLevelColor = (level: Log['level']) => {
    switch (level) {
      case 'info': return 'text-blue-600';
      case 'warning': return 'text-yellow-600';
      case 'error': return 'text-red-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">System Logs</h1>
      <div className="bg-white rounded-lg shadow">
        {dummyLogs.map((log) => (
          <div key={log.id} className="p-4 border-b last:border-b-0">
            <div className="flex items-center justify-between">
              <span className={`font-semibold ${getLevelColor(log.level)}`}>
                {log.level.toUpperCase()}
              </span>
              <span className="text-sm text-gray-500">{log.timestamp}</span>
            </div>
            <p className="mt-1">{log.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Logs;