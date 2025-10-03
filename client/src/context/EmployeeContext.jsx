import React, { createContext, useContext, useEffect, useState } from "react";
import {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployee,
} from "../api/api.js";
import { toast } from "react-toastify";

const EmployeeContext = createContext();

export const useEmployeeContext = () => {
  const context = useContext(EmployeeContext);
  if (!context) {
    throw new Error(
      "useEmployeeContext must be used within an EmployeeProvider"
    );
  }
  return context;
};

export const EmployeeProvider = ({ children }) => {
  const [employee, setEmployee] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    setLoading(true);
    try {
      const response = await getEmployees();
      setEmployee(response.data.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch employees";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const fetchEmployeeById = async (id) => {
    setLoading(true);
    try {
      const response = await getEmployeeById(id);
      setEmployee([response.data.data]);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to fetch employee";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const addEmployee = async (employeeData) => {
    setLoading(true);
    try {
      const response = await createEmployee(employeeData);

      if (response.data && response.data.success === true) {
        const newEmployee = response.data.employee;
        setEmployee((prev) => [...prev, newEmployee]);
        toast.success("Employee added successfully ✅");
      } else {
        const errorMessage = response.data?.message || "Failed to add employee";
        toast.error(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to add employee";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const editEmployee = async (id, employeeData) => {
    setLoading(true);
    try {
      const response = await updateEmployee(id, employeeData);

      if (response.data && response.data.success === true) {
        const updatedEmployee = response.data.data;
        setEmployee((prev) =>
          prev.map((emp) => (emp._id === id ? updatedEmployee : emp))
        );
        toast.success("Employee updated ✏️");
      } else {
        const errorMessage =
          response.data?.message || "Failed to update employee";
        toast.error(errorMessage);
      }
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to update employee";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const removeEmployee = async (id) => {
    setLoading(true);
    try {
      await deleteEmployee(id);
      setEmployee((prev) => prev.filter((emp) => emp._id !== id));
      toast.success("Employee deleted 🗑️");
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "Failed to delete employee";
      toast.error(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  const searchEmployees = async (query) => {
    try {
      if (!query) {
        const response = await getEmployees();
        setEmployee(response.data.data);
        return;
      }
      const response = await searchEmployee(query);
      setEmployee(response.data.data);
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || error.message || "No employees found";
      setEmployee([]);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        loading,
        fetchEmployees,
        addEmployee,
        editEmployee,
        removeEmployee,
        searchEmployees,
        fetchEmployeeById,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
