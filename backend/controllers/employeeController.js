const Employee = require('../models/Employee');

// Get all employees
const getEmployees = async (req, res) => {
  try {
    const employees = await Employee.find();
    res.status(200).json(employees);
  } catch (err) {
    console.error('Error fetching employees:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Get employee by ID
const getEmployeeById = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }
    res.status(200).json(employee);
  } catch (err) {
    console.error('Error fetching employee by ID:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Create a new employee
const createEmployee = async (req, res) => {
  const { name, position, department, hireDate } = req.body;

  if (!name || !position || !department || !hireDate) {
    return res.status(400).json({ msg: 'All fields are required' });
  }

  try {
    const employee = new Employee({ name, position, department, hireDate });
    await employee.save();
    res.status(201).json(employee);
  } catch (err) {
    console.error('Error creating employee:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Update an existing employee
const updateEmployee = async (req, res) => {
  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedEmployee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.status(200).json(updatedEmployee);
  } catch (err) {
    console.error('Error updating employee:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Delete an employee
const deleteEmployee = async (req, res) => {
  try {
    const deletedEmployee = await Employee.findByIdAndDelete(req.params.id);

    if (!deletedEmployee) {
      return res.status(404).json({ msg: 'Employee not found' });
    }

    res.status(200).json({ msg: 'Employee deleted successfully' });
  } catch (err) {
    console.error('Error deleting employee:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

// Search employees by department or position
const searchEmployees = async (req, res) => {
  const { department, position } = req.query;

  try {
    const query = {};
    if (department) query.department = department;
    if (position) query.position = position;

    const employees = await Employee.find(query);

    if (!employees.length) {
      return res.status(404).json({ msg: 'No employees found matching the criteria' });
    }

    res.status(200).json(employees);
  } catch (err) {
    console.error('Error searching employees:', err.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

module.exports = {
  getEmployees,
  getEmployeeById,
  createEmployee,
  updateEmployee,
  deleteEmployee,
  searchEmployees,
};
