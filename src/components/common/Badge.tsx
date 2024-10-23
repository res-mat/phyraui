// src/components/common/Badge.tsx
import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'success' | 'error' | 'warning' | 'info';
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'info' }) => {
  const variantStyles = {
    success: 'bg-green-100 text-green-700',
    error: 'bg-red-100 text-red-700',
    warning: 'bg-yellow-100 text-yellow-700',
    info: 'bg-blue-100 text-blue-700',
  };

  return (
    <span className={`px-2 py-1 rounded-full text-sm font-medium ${variantStyles[variant]}`}>
      {children}
    </span>
  );
};