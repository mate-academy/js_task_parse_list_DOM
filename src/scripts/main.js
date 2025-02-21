'use strict';

const employeesList = document.querySelectorAll('li[data-salary]');

function getNumber(value) {
  return parseInt(value.replace(/[^0-9.-]+/g, ''), 10) || 0;
}

function getEmployees(list) {
  return [...list].map((li) => ({
    element: li,
    name: li.dataset.name,
    position: li.dataset.position,
    salary: getNumber(li.dataset.salary),
    age: getNumber(li.dataset.age),
  }));
}

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  const parentElement = list[0]?.parentElement;

  employees.forEach((emp) => parentElement.appendChild(emp.element));
}

sortList(employeesList);
