import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useEmployeeContext } from '../context/EmployeeContext';
import { Trash2, Loader } from 'lucide-react';
import Loading from '../component/Loading';

const DeleteEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employee, loading, removeEmployee, fetchEmployees } = useEmployeeContext();
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

  const handleDelete = async () => {
    await removeEmployee(id);
    navigate('/');
  };

  if (loading || !emp) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loading />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full p-6">
        <div className="flex items-center justify-center w-12 h-12 bg-red-100 rounded-full mx-auto mb-4">
          <Trash2 className="w-6 h-6 text-red-600" />
        </div>
        <h3 className="text-xl font-bold text-gray-900 text-center mb-2">Delete Employee</h3>
        <p className="text-gray-600 text-center mb-6">
          Are you sure you want to delete <span className="font-semibold">{emp.name}</span>?
        </p>
        <div className="flex gap-3">
          <button 
            onClick={() => navigate('/')} 
            disabled={loading}
            className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
          >
            Cancel
          </button>
          <button 
            onClick={handleDelete} 
            disabled={loading}
            className="flex-1 bg-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-red-700 disabled:bg-red-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <Loader className="w-5 h-5 animate-spin" />
                Deleting...
              </>
            ) : (
              'Delete'
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteEmployee;