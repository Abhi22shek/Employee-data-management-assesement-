import React from 'react';

const ErrorMessage = ({ message }) => (
  <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg mb-4">
    <p className="font-semibold">Error: {message}</p>
  </div>
);

export default ErrorMessage;