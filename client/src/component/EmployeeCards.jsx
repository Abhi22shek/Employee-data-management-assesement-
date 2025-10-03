import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Mail, Users } from 'lucide-react';

const EmployeeCards = ({ employee }) => {
  const navigate = useNavigate();

   if (!Array.isArray(employee) || employee.length === 0) { // Better check
    return (
      <div className="md:hidden text-center py-16">
        <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No employees found</h3>
      </div>
    );
  }

  return (
    <div className="md:hidden l space-y-4">
      {employee.map((emp) => (
        <div key={emp._id} className="bg-white hover:shadow-lg hover:scale-105 transition-all rounded-lg shadow-md p-4 border border-gray-200">
          <div onClick={() => navigate(`/employee/${emp._id}`)} className="cursor-pointer mb-3">
            <div className="flex items-center gap-3 mb-2">
              <div className="h-12 w-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-600 font-semibold">
                  {emp.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-bold text-gray-800 truncate">{emp.name}</h3>
                <span className="inline-block px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800 mt-1">
                  {emp.position}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600 text-sm">
              <Mail className="w-4 h-4 flex-shrink-0" />
              <span className="truncate">{emp.email}</span>
            </div>
          </div>
          <div className="flex gap-2 pt-3 border-t">
            <button 
              onClick={() => navigate(`/edit/${emp._id}`)} 
              className="flex-1 bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Edit2 className="w-4 h-4" />
              Edit
            </button>
            <button 
              onClick={() => navigate(`/delete/${emp._id}`)} 
              className="flex-1 bg-red-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default EmployeeCards;