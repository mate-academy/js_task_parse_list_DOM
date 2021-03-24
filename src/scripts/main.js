'use strict';

// write code here
const employeesList = document.querySelector('ul');
const employeesItems = [...employeesList.querySelectorAll('li')];
const sortBySalary = (employee1, employee2) =>
  salaryToNumber(employee2) - salaryToNumber(employee1);
const salaryToNumber = (elem) =>
  parseInt(elem.dataset.salary.slice(1).replace(/,/g, ''));
const employeesSortedBySalary = employeesItems.sort(sortBySalary);

employeesList.innerHTML = '';

employeesSortedBySalary.forEach(employee =>
  employeesList.appendChild(employee));

const getEmployees = function(employees) {
  const employeesData = employees.map(employee => ({
    name: employee.textContent.trim(),
    position: employee.dataset.position,
    salary: employee.dataset.salary,
    age: +employee.dataset.age,
  }));

  return employeesData;
};

getEmployees(employeesItems);
