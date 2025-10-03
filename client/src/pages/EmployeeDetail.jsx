import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useEmployeeContext } from '../context/EmployeeContext';
import { ArrowLeft, Edit2, Trash2, Mail, Briefcase } from 'lucide-react';
import Loading from '../component/Loading';

const EmployeeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employee, loading, fetchEmployees } = useEmployeeContext();
  const [emp, setEmp] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  useEffect(() => {
    if (employee.length > 0) {
      const found = employee.find(e => e._id === id);
      setEmp(found);
    }
  }, [id, employee]);

  if (loading || !emp) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto">
          <Link to="/" className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-4">
            <ArrowLeft className="w-5 h-5" />
            Back to List
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold">Employee Details</h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex justify-center mb-6">
            <div className="h-24 w-24 bg-blue-100 rounded-full flex items-center justify-center">
              <span className="text-blue-600 font-bold text-3xl">
                {emp.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
          </div>
          <div className="space-y-4 mb-6">
            <div className="border-b pb-4">
              <label className="text-sm font-semibold text-gray-500 uppercase">Full Name</label>
              <p className="text-lg font-semibold text-gray-900 mt-1">{emp.name}</p>
            </div>
            <div className="border-b pb-4">
              <label className="text-sm font-semibold text-gray-500 uppercase flex items-center gap-2">
                <Mail className="w-4 h-4" />
                Email
              </label>
              <p className="text-lg text-gray-900 mt-1">{emp.email}</p>
            </div>
            <div className="border-b pb-4">
              <label className="text-sm font-semibold text-gray-500 uppercase flex items-center gap-2">
                <Briefcase className="w-4 h-4" />
                Position
              </label>
              <p className="text-lg text-gray-900 mt-1">
                <span className="inline-block px-3 py-1 text-sm font-semibold rounded-full bg-blue-100 text-blue-800">
                  {emp.position}
                </span>
              </p>
            </div>
          </div>
          <div className="flex gap-3">
            <button 
              onClick={() => navigate(`/edit/${emp._id}`)} 
              className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
            >
              <Edit2 className="w-5 h-5" />
              Edit Employee
            </button>
            <button 
              onClick={() => navigate(`/delete/${emp._id}`)} 
              className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 transition-colors flex items-center justify-center gap-2"
            >
              <Trash2 className="w-5 h-5" />
              Delete Employee
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDetail;