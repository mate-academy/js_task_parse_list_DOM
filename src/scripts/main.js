'use strict';

const listOfEmployees = document.querySelector('ul');

function convertSalaryToNumber(salary) {
  return Number(salary.replace(/[^0-9.-]+/g, ''));
}

function sortlist(list) {
  const employees = [...list.children];

  employees.sort((a, b) => {
    const salaryA = convertSalaryToNumber(a.dataset.salary);
    const salaryB = convertSalaryToNumber(b.dataset.salary);

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  employees.forEach((employee) => {
    list.appendChild(employee);
  });
}

function getEmployees(list) {
  const employees = [...list.children];

  return employees.map(employee => {
    return {
      name: employee.textContent,
      position: employee.dataset.position,
      salary: convertSalaryToNumber(employee.dataset.salary),
      age: employee.dataset.age,
    };
  });
}

sortlist(listOfEmployees);
getEmployees(listOfEmployees);
