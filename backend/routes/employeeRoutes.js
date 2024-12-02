const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/auth');
const {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
} = require('../controllers/employeeController');

// GET /employees - Get all employees
router.get('/', getEmployees);

// GET /employees/:id - Get employee by ID
router.get('/:id', getEmployeeById);

// POST /employees - Add a new employee
router.post('/', createEmployee);

// PUT /employees/:id - Update employee data
router.put('/:id', updateEmployee);

// DELETE /employees/:id - Delete an employee
router.delete('/:id', deleteEmployee);

// GET /employees/search - Search employees by department or position
router.get('/search', searchEmployees);

module.exports = router;
