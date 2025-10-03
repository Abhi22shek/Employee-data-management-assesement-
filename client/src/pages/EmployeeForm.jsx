import React, { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useEmployeeContext } from "../context/EmployeeContext";
import { ArrowLeft, Loader } from "lucide-react";
import { toast } from "react-toastify";

const EmployeeForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { employee, loading, addEmployee, editEmployee, fetchEmployees } =
    useEmployeeContext();
  const [data, setData] = useState({ name: "", email: "", position: "" });
  const [error, setError] = useState({});

  useEffect(() => {
    if (id) {
      fetchEmployees();
    }
  }, [id]);

  useEffect(() => {
    if (id && employee.length > 0) {
      const emp = employee.find((e) => e._id === id);
      if (emp) {
        setData({ name: emp.name, email: emp.email, position: emp.position });
      }
    }
  }, [id, employee]);

  const validate = () => {
    let newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!data.position.trim()) {
      newErrors.position = "Position is required";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      if (id) {
        await editEmployee(id, data);
      } else {
        await addEmployee(data);
      }
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 shadow-lg">
        <div className="max-w-2xl mx-auto">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-white hover:text-blue-100 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to List
          </Link>
          <h1 className="text-2xl sm:text-3xl font-bold">
            {id ? "Edit Employee" : "Add New Employee"}
          </h1>
        </div>
      </div>

      <div className="max-w-2xl mx-auto p-4 sm:p-6">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Name *
              </label>
              <input
                type="text"
                value={data.name}
                onChange={(e) => setData({ ...data, name: e.target.value })}
                placeholder="Abhishek sen"
                disabled={loading}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
              {error.name && (
                <p className="text-red-500 text-sm mt-1">{error.name}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Email *
              </label>
              <input
                type="email"
                value={data.email}
                onChange={(e) => setData({ ...data, email: e.target.value })}
                placeholder="abhi@gmail.com"
                disabled={loading}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
              {error.name && (
                <p className="text-red-500 text-sm mt-1">{error.email}</p>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                Position *
              </label>
              <input
                type="text"
                value={data.position}
                onChange={(e) => setData({ ...data, position: e.target.value })}
                placeholder="Software Engineer"
                disabled={loading}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100"
              />
              {error.name && (
                <p className="text-red-500 text-sm mt-1">{error.position}</p>
              )}
            </div>
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleSubmit}
                disabled={loading}
                className="flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
              >
                {loading ? (
                  <>
                    <Loader className="w-5 h-5 animate-spin" />
                    {id ? "Updating..." : "Adding..."}
                  </>
                ) : id ? (
                  "Update Employee"
                ) : (
                  "Add Employee"
                )}
              </button>
              <button
                onClick={() => navigate("/")}
                disabled={loading}
                className="flex-1 bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 disabled:bg-gray-100 disabled:cursor-not-allowed transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeForm;
