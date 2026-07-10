'use strict';

// write code here
const employeesList = document.querySelector('ul');

function getEmployees(listOfElements) {
  const items = Array.from(listOfElements.children);

  const employees = items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      age: Number(item.dataset.age),
      salary: parseSalary(item.dataset.salary),
    };
  });

  return employees;
}

function sortList(listOfEmployees) {
  const items = Array.from(listOfEmployees.children);

  items.sort((a, b) => {
    return parseSalary(b.dataset.salary) - parseSalary(a.dataset.salary);
  });

  items.forEach((item) => {
    listOfEmployees.append(item);
  });
}

function parseSalary(salaryStr) {
  const salary = salaryStr.replace(/[^0-9.]/g, '');

  return Number(salary);
}

sortList(employeesList);
getEmployees(employeesList);
