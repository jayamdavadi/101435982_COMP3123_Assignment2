import React, { useState } from "react";
import employeeService from "../../services/employeeService";

const SearchEmployee = () => {
  const [criteria, setCriteria] = useState("");
  const [employees, setEmployees] = useState([]);

  const handleInputChange = (e) => {
    setCriteria(e.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await employeeService.searchEmployee(criteria);
      setEmployees(response.data);
    } catch (error) {
      console.error("Error searching employees:", error);
    }
  };

  return (
    <div>
      <h2>Search Employees</h2>
      <div className="form-group">
        <input
          type="text"
          className="form-control"
          placeholder="Search by department or position"
          onChange={handleInputChange}
        />
        <button className="btn btn-primary mt-2" onClick={handleSearch}>
          Search
        </button>
      </div>
      {employees.length > 0 && (
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Position</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee._id}>
                <td>{employee.name}</td>
                <td>{employee.department}</td>
                <td>{employee.position}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default SearchEmployee;
