import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { EmployeeProvider } from "./context/EmployeeContext";
import EmployeeList from "./pages/EmployeeList";
import EmployeeForm from "./pages/EmployeeForm";
import EmployeeDetail from "./pages/EmployeeDetail";
import DeleteEmployee from "./pages/DeleteEmployee";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <EmployeeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmployeeList />} />
          <Route path="/add" element={<EmployeeForm />} />
          <Route path="/edit/:id" element={<EmployeeForm />} />
          <Route path="/employee/:id" element={<EmployeeDetail />} />
          <Route path="/delete/:id" element={<DeleteEmployee />} />
        </Routes>
      </BrowserRouter>  
      <ToastContainer position="top-right" autoClose={2000} />
    </EmployeeProvider>
    
  );
}

export default App;
