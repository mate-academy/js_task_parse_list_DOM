'use strict';

function parseSalary(salary) {
  return parseInt(salary.split('$').join('').split(',').join(''));
}

function sortList(list) {
  const sorted = [...list].sort((a, b) => {
    const aSalary = parseSalary(a.dataset.salary);
    const bSalary = parseSalary(b.dataset.salary);

    return bSalary - aSalary;
  });

  const ul = document.querySelector('ul');

  sorted.forEach((item) => ul.appendChild(item));
}

function getEmployees(list) {
  const employees = list.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: parseSalary(item.dataset.salary),
      age: parseInt(item.dataset.age),
    };
  });

  return employees;
}

const employeesList = document.querySelectorAll('ul li');

sortList(employeesList);

const employeesData = getEmployees(employeesList);

getEmployees(employeesData);
