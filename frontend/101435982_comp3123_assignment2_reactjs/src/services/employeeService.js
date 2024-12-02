import api from "./api";

const getEmployees = () => api.get("/employees");
const getEmployeeById = (id) => api.get(`/employees/${id}`);
const createEmployee = (data) => api.post("/employees", data);
const updateEmployee = (id, data) => api.put(`/employees/${id}`, data);
const deleteEmployee = (id) => api.delete(`/employees/${id}`);
const searchEmployee = (criteria) => api.get(`/employees/search?criteria=${criteria}`);

const employeeService = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployee,
};

export default employeeService;
