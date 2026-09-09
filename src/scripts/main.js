'use strict';

function sortEmployeesBySalary() {
  const list = document.querySelector('ul');
  const items = [...list.querySelectorAll('li')];
  const getSalary = (item) =>
    Number(item.dataset.salary.replace('$', '').replaceAll(',', ''));

  items.sort((a, b) => getSalary(b) - getSalary(a));
  items.forEach((item) => list.appendChild(item));
}

function getEmployees() {
  const items = [...document.querySelectorAll('li')];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: Number(item.dataset.salary.replace('$', '').replaceAll(',', '')),
    age: Number(item.dataset.age),
  }));
}
sortEmployeesBySalary();
getEmployees();

export { sortEmployeesBySalary, getEmployees };
