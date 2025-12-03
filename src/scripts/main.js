'use strict';

function parseSalary(str) {
  return Number(str.replace(/\D/g, ''));
}

function getEmployees(list) {
  const items = Array.from(list.querySelectorAll('li'));

  return items.map((li) => ({
    name: li.textContent.trim(),
    age: Number(li.dataset.age),
    salary: parseSalary(li.dataset.salary),
    position: li.dataset.position,
    element: li,
  }));
}

function sortList(list) {
  const employees = getEmployees(list);

  employees.sort((a, b) => b.salary - a.salary);

  list.innerHTML = '';

  employees.forEach((emp) => list.appendChild(emp.element));
}

const employeeList = document.querySelector('ul'); // ← змінено імʼя

sortList(employeeList);
