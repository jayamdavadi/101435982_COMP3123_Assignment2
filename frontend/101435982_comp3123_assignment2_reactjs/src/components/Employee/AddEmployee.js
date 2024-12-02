import React, { useState } from "react";
import employeeService from "../../services/employeeService";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    department: "",
    position: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await employeeService.createEmployee(employee);
      alert("Employee added successfully!");
    } catch (error) {
      console.error("Error adding employee:", error);
    }
  };

  return (
    <div>
      <h2>Add Employee</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Department</label>
          <input
            type="text"
            name="department"
            className="form-control"
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Position</label>
          <input
            type="text"
            name="position"
            className="form-control"
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
