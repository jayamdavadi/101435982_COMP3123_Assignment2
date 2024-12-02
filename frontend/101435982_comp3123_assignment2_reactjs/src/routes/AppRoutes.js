import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import EmployeeList from "../components/Employee/EmployeeList";
import AddEmployee from "../components/Employee/AddEmployee";
import EditEmployee from "../components/Employee/EditEmployee";
import SearchEmployee from "../components/Employee/SearchEmployee";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/employees" element={<EmployeeList />} />
      <Route path="/employees/add" element={<AddEmployee />} />
      <Route path="/employees/edit/:id" element={<EditEmployee />} />
      <Route path="/employees/search" element={<SearchEmployee />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default AppRoutes;
