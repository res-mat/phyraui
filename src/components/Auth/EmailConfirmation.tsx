// src/components/Auth/EmailConfirmation.tsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const EmailConfirmation: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Check your email
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600">
            We've sent you an email with a confirmation link. Please check your inbox and click the link to complete your signup.
          </p>
        </div>
        <div className="flex justify-center">
          <button
            onClick={() => navigate('/login')}
            className="text-blue-600 hover:text-blue-500"
          >
            Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailConfirmation;