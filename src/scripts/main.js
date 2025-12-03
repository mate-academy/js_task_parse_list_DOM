'use strict';

function parseSalary(str) {
  return Number(str.replace(/\D/g, ''));
}

function getEmployees() {
  const items = Array.from(document.querySelectorAll('li'));

  return items.map((li) => ({
    name: li.textContent.trim(),
    age: Number(li.dataset.age),
    salary: parseSalary(li.dataset.salary),
    position: li.dataset.position,
    element: li,
  }));
}

function sortList() {
  const employees = getEmployees();

  employees.sort((a, b) => b.salary - a.salary);

  const list = document.querySelector('ul');

  list.innerHTML = '';

  employees.forEach((emp) => list.appendChild(emp.element));
}

sortList();
