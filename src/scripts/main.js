'use strict';

function getSalary(item) {
  return Number(item.dataset.salary.replace('$', '').replace(',', ''));
}

function sortList(list) {
  const items = [...list.children];

  items.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  items.forEach((item) => list.append(item));

  return list;
}

function getEmployees(list) {
  const items = [...list.children];

  return items.map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}

const employeesList = document.querySelector('ul');

sortList(employeesList);

getEmployees(employeesList);
