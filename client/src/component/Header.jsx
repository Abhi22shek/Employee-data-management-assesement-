import { useNavigate } from 'react-router-dom';
import React from 'react';
import { Plus, Users } from 'lucide-react';

const Header = ({ count}) => {
  const navigate = useNavigate();
  
  return (
    <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 shadow-lg">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-3">
          <Users className="w-8 h-8" />
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">Employee Management</h1>
            <p className="text-blue-100 text-sm mt-1">{count} employees</p>
          </div>
        </div>
        <button 
          onClick={() => navigate('/add')} 
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors flex items-center justify-center gap-2"
        >
          <Plus className="w-5 h-5" />
          Add Employee
        </button>
      </div>
    </div>
  );
};

export default Header;