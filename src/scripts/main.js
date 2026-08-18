'use strict';

const list = document.querySelector('ul');

const getSalary = (item) => {
  return Number(item.dataset.salary.replace(/[$,]/g, ''));
};

function sortList(employeeList) {
  const items = Array.from(list.children);

  items.sort((a, b) => getSalary(b) - getSalary(a));

  list.append(...items);
}

function getEmployees(employeeList) {
  return Array.from(list.children).map((item) => ({
    name: item.textContent.trim(),
    position: item.dataset.position,
    salary: getSalary(item),
    age: Number(item.dataset.age),
  }));
}

sortList(list);

getEmployees(list);
