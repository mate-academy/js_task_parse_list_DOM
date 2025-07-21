'use strict';

const parseSalary = (salaryString) =>
  Number(salaryString.replace(/[$,]/g, '').trim());

const sortEmployeesBySalaryDesc = (list) => {
  const items = [...list.children];

  items
    .sort(
      (a, b) => parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary),
    )
    .forEach((item) => list.appendChild(item));
};

const getEmployees = (list) =>
  [...list.children].map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    age: Number(item.dataset.age),
    salary: parseSalary(item.dataset.salary),
  }));

const employeeList = document.querySelector('ul');

sortEmployeesBySalaryDesc(employeeList);
getEmployees(employeeList);
