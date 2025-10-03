import axios from "axios";

const API = axios.create({
  baseURL: "https://employee-data-management-assesement.onrender.com/api", 
});

export const getEmployees = () => API.get("/"); 
export const getEmployeeById = (id) => API.get(`/employee/${id}`);
export const createEmployee = (employee) => API.post("/employee", employee);
export const updateEmployee = (id, employee) => API.put(`/employee/${id}`, employee);
export const deleteEmployee = (id) => API.delete(`/employee/${id}`);

export const searchEmployee = (query) => API.get(`/employee/search?query=${query}`);
