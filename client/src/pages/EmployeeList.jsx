import React, { useEffect, useState } from "react";
import Header from "../component/Header";
import SearchBar from "../component/SearchBar";
import EmployeeTable from "../component/EmployeeTable";
import { useEmployeeContext } from "../context/EmployeeContext";
import ErrorMessage from "../component/ErrorMessage";
import Loading from "../component/Loading";
import EmployeeCards from "../component/EmployeeCards";

const EmployeeList = () => {
  const { employee, loading, error, fetchEmployees, searchEmployees } =
    useEmployeeContext();
  const [search, setSearch] = useState();

  useEffect(() => {
    if (search !== undefined) {
      const timer = setTimeout(() => {
        searchEmployees(search);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [search, searchEmployees]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-blue-100 text-white">
      <Header count={employee.length} />

      <div className=" p-4 sm:p-6">
        {error && <ErrorMessage message={error} />}

        <div className="mb-6">
          <SearchBar value={search} onchange={setSearch} />
        </div>

        {loading ? (
          <Loading />
        ) : (
          <div className="shadow-2xl rounded-lg overflow-hidden">
            <EmployeeTable employee={employee} />
            <EmployeeCards employee={employee} />
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeList;
