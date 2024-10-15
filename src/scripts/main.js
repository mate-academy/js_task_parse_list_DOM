'use strict';

const sortEmployeesBySalary = (employees) => {
  return employees.sort((a, b) => b.salary - a.salary);
};

const getEmployeeArray = (selector) => {
  const employeeItems = document.querySelectorAll(selector);

  return Array.from(employeeItems).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseInt(item.dataset.salary.replace(/[$,]/g, ''), 10),
    age: parseInt(item.dataset.age, 10),
    element: item,
  }));
};

const employeeListSelector = 'ul li';

const employeeArray = getEmployeeArray(employeeListSelector);

const sortedEmployees = sortEmployeesBySalary(employeeArray);

const employeeList = document.querySelector('ul');

employeeList.innerHTML = '';

sortedEmployees.forEach((employee) => {
  employeeList.appendChild(employee.element);
});
