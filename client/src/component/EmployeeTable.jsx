import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Edit2, Trash2, Users } from 'lucide-react';

const EmployeeTable = ({ employee }) => {
  const navigate = useNavigate();

 if (!Array.isArray(employee) || employee.length === 0) { // Better check
    return (
      <div className="hidden md:block text-center py-16 bg-white rounded-lg shadow">
        <Users className="w-16 h-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-600 mb-2">No employees found</h3>
      </div>
    );
  }

  return (
    <div className="hidden md:block  bg-white rounded-lg  overflow-hidden">
      <table className="w-full">
        <thead className="bg-gray-200  border-b border-gray-400">
          <tr>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Name</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Email</th>
            <th className="px-6 py-4 text-left text-sm font-semibold text-gray-700 uppercase">Position</th>
            <th className="px-6 py-4 text-right text-sm font-semibold text-gray-700 uppercase">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y  ">
          {employee.map((emp) => (
            <tr 
              key={emp._id} 
              onClick={() => navigate(`/employee/${emp._id}`)} 
              className="hover:bg-gray-200 border-b border-gray-400 cursor-pointer transition-colors"
            >
              <td className="px-6 py-4 ">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-blue-200 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 font-semibold text-sm">
                      {emp.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <span className="font-semibold text-gray-900">{emp.name}</span>
                </div>
              </td>
              <td className="px-6 py-4 text-gray-600">{emp.email}</td>
              <td className="px-6 py-4">
                <span className="px-3 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {emp.position}
                </span>
              </td>
              <td className="px-6 py-4 text-right">
                <button 
                  onClick={(e) => { e.stopPropagation(); navigate(`/edit/${emp._id}`); }} 
                  className="text-blue-600 hover:text-blue-900 mr-4 transition-colors"
                >
                  <Edit2 className="w-5 h-5 inline" />
                </button>                
                <button 
                  onClick={(e) => { e.stopPropagation(); navigate(`/delete/${emp._id}`); }} 
                  className="text-red-600 hover:text-red-900 transition-colors"
                >
                  <Trash2 className="w-5 h-5 inline" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
export default EmployeeTable;