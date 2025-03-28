'use strict';

const employeeList = document.querySelector('ul#employees');
const employees = Array.from(employeeList.children);

const parseSalary = (employee) => parseFloat(employee.dataset.salary);

const sortList = (list) => {
  const sortedEmployees = [...list].sort(
    (a, b) => parseSalary(b) - parseSalary(a),
  );

  sortedEmployees.forEach((employee) => employeeList.appendChild(employee));
};

const getEmployees = (list) => {
  return list.map((employee) => ({
    name: employee.dataset.name,
    position: employee.dataset.position,
    salary: parseSalary(employee),
    age: parseInt(employee.dataset.age, 10),
  }));
};

sortList(employees);

const employeeData = getEmployees(employees);

// eslint-disable-next-line no-console
console.log(employeeData);
