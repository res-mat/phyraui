// src/components/Dashboard/Projects.tsx
import React from 'react';
import ExpandableTable from '../common/Table/ExpandableTable';
import { Badge } from '../common/Badge'; // You can create this component if needed

interface Project {
  id: string;
  name: string;
  status: 'active' | 'completed' | 'failed';
  lastUpdated: string;
  progress: number;
  description: string;
  team: string[];
  technologies: string[];
}

const Projects: React.FC = () => {
  // Example data
  const projects: Project[] = [
    {
      id: '1',
      name: 'AI Chat Bot',
      status: 'active',
      lastUpdated: '2024-03-21',
      progress: 75,
      description: 'An AI-powered chatbot for customer service',
      team: ['John Doe', 'Jane Smith'],
      technologies: ['Python', 'TensorFlow', 'React']
    },
    {
      id: '2',
      name: 'Data Analytics Pipeline',
      status: 'completed',
      lastUpdated: '2024-03-20',
      progress: 100,
      description: 'Automated data processing and analysis pipeline',
      team: ['Alice Johnson', 'Bob Wilson'],
      technologies: ['Python', 'Apache Spark', 'PostgreSQL']
    },
    // Add more projects as needed
  ];

  const columns = [
    {
      key: 'name',
      header: 'Project Name',
      width: '25%',
    },
    {
      key: 'status',
      header: 'Status',
      width: '15%',
      render: (value: Project['status']) => (
        <Badge 
          variant={
            value === 'active' ? 'success' : 
            value === 'completed' ? 'info' : 'error'
          }
        >
          {value}
        </Badge>
      )
    },
    {
      key: 'progress',
      header: 'Progress',
      width: '20%',
      render: (value: number) => (
        <div className="w-full bg-gray-200 rounded h-2">
          <div
            className="bg-blue-500 h-2 rounded"
            style={{ width: `${value}%` }}
          />
        </div>
      )
    },
    {
      key: 'lastUpdated',
      header: 'Last Updated',
      width: '20%',
    }
  ];

  const renderExpandedContent = (project: Project) => (
    <div className="space-y-4">
      <div>
        <h4 className="font-semibold mb-2">Description</h4>
        <p className="text-gray-600">{project.description}</p>
      </div>
      
      <div>
        <h4 className="font-semibold mb-2">Team Members</h4>
        <div className="flex flex-wrap gap-2">
          {project.team.map((member, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-gray-200 rounded text-sm"
            >
              {member}
            </span>
          ))}
        </div>
      </div>

      <div>
        <h4 className="font-semibold mb-2">Technologies</h4>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-blue-100 text-blue-700 rounded text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Projects</h1>
      <ExpandableTable
        columns={columns}
        data={projects}
        expandableContent={renderExpandedContent}
        onRowClick={(row) => console.log('Clicked row:', row)}
      />
    </div>
  );
};

export default Projects;