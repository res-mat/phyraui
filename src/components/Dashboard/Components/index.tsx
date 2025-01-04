// src/components/Dashboard/Components/index.tsx
import React, { useState, useMemo } from 'react';
import { Search, Filter, Star, Download } from 'lucide-react';
import ComponentCard from './ComponentCard';
// import ComponentDetails from './ComponentDetails';
import { Component } from '../../../types';

export const Components: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedComponent, setSelectedComponent] = useState<Component | null>(null);

  // This would come from your API in a real implementation
  const components: Component[] = [
    // ... your component data
  ];

  const filteredComponents = useMemo(() => {
    return components.filter(component => {
      const matchesSearch = 
        component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        component.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = 
        selectedCategory === 'all' || 
        component.category === selectedCategory;
      return matchesSearch && matchesCategory;
    });
  }, [components, searchTerm, selectedCategory]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Component Registry</h1>
        <div className="flex space-x-4">
          <button 
            className="px-4 py-2 text-blue-600 border border-blue-600 rounded-md hover:bg-blue-50"
            onClick={() => {/* Import component logic */}}
          >
            Import Component
          </button>
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
            onClick={() => {/* Create component logic */}}
          >
            Create Component
          </button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="flex space-x-4">
        <div className="flex-1 relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search components..."
            className="w-full pl-10 pr-4 py-2 border rounded-md"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="px-4 py-2 border rounded-md"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="all">All Categories</option>
          <option value="data-processing">Data Processing</option>
          <option value="ml-models">ML Models</option>
          <option value="api-connectors">API Connectors</option>
          <option value="storage">Storage</option>
          <option value="visualization">Visualization</option>
        </select>
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component) => (
          <ComponentCard
            key={component.id}
            component={component}
            onClick={() => setSelectedComponent(component)}
          />
        ))}
      </div>

      {/* Component Details Modal */}
      {/* {selectedComponent && (
        <ComponentDetails
          component={selectedComponent}
          onClose={() => setSelectedComponent(null)}
        />
      )} */}
    </div>
  );
};

export default Components;