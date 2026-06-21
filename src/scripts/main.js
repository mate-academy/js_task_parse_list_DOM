'use strict';

const employeeListElement = document.querySelector('ul');

function sortList(list) {
  const items = [...list.querySelectorAll('li')];

  items.sort(
    (empl1, empl2) =>
      parseSalary(empl2.dataset.salary) - parseSalary(empl1.dataset.salary),
  );

  items.forEach((item) => list.appendChild(item));
}

function getEmployees(employeeList) {
  const items = [...employeeList.querySelectorAll('li')];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: parseSalary(item.dataset.salary),
    age: Number(item.dataset.age),
  }));
}

function parseSalary(salaryStr) {
  if (!salaryStr) {
    return 0;
  }

  const normalizedSalary = Number(salaryStr.slice(1).split(',').join(''));

  return Number.isNaN(normalizedSalary) ? 0 : normalizedSalary;
}

sortList(employeeListElement);
getEmployees(employeeListElement);
