'use strict';

// write code here
function sortList(list) {
  const employees = [...list.children];

  employees.sort((a, b) => {
    const salaryA = Number(a.dataset.salary.replace(/\D/g, ''));

    const salaryB = Number(b.dataset.salary.replace(/\D/g, ''));

    return salaryB - salaryA;
  });

  list.innerHTML = '';

  employees.forEach((el) => list.appendChild(el));
}

function getEmployees(list) {
  return Array.from(list.children).map((el) => ({
    name: el.textContent.trim(),

    position: el.dataset.position,

    salary: Number(el.dataset.salary.replace(/\D/g, '')),

    age: parseInt(el.dataset.age, 10),
  }));
}

document.addEventListener('DOMContentLoaded', () => {
  const employeesList = document.querySelector('ul');

  sortList(employeesList);

  getEmployees(employeesList);
});
