// src/components/common/Table/ExpandableTable.tsx
import React, { useState } from 'react';
import { ChevronDown, ChevronRight } from 'lucide-react';

interface TableColumn {
  key: string;
  header: string;
  width?: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface ExpandableTableProps {
  columns: TableColumn[];
  data: any[];
  expandableContent: (row: any) => React.ReactNode;
  onRowClick?: (row: any) => void;
}

const ExpandableTable: React.FC<ExpandableTableProps> = ({
  columns,
  data,
  expandableContent,
  onRowClick
}) => {
  const [expandedRows, setExpandedRows] = useState<Set<number>>(new Set());

  const toggleRow = (index: number) => {
    const newExpandedRows = new Set(expandedRows);
    if (newExpandedRows.has(index)) {
      newExpandedRows.delete(index);
    } else {
      newExpandedRows.add(index);
    }
    setExpandedRows(newExpandedRows);
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <table className="min-w-full">
        <thead>
          <tr className="bg-gray-50 border-b border-gray-200">
            <th className="w-10 px-4 py-3"></th> {/* Expand/Collapse column */}
            {columns.map((column) => (
              <th
                key={column.key}
                className="px-4 py-3 text-left text-sm font-semibold text-gray-600"
                style={{ width: column.width }}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <React.Fragment key={rowIndex}>
              <tr 
                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors
                  ${expandedRows.has(rowIndex) ? 'bg-gray-50' : ''}`}
              >
                <td className="w-10 px-4 py-3">
                  <button
                    onClick={() => toggleRow(rowIndex)}
                    className="p-1 hover:bg-gray-200 rounded transition-colors"
                  >
                    {expandedRows.has(rowIndex) ? (
                      <ChevronDown size={16} />
                    ) : (
                      <ChevronRight size={16} />
                    )}
                  </button>
                </td>
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-4 py-3 text-sm"
                    onClick={() => onRowClick?.(row)}
                  >
                    {column.render
                      ? column.render(row[column.key], row)
                      : row[column.key]}
                  </td>
                ))}
              </tr>
              {expandedRows.has(rowIndex) && (
                <tr>
                  <td colSpan={columns.length + 1} className="bg-gray-50 p-4">
                    <div className="pl-10">
                      {expandableContent(row)}
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ExpandableTable;