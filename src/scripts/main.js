'use strict';

const listElement = document.querySelector('ul');

function getSalary(el) {
  return Number(el.dataset.salary);
}

function sortList(list) {
  const items = Array.from(list.children);

  items.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  items.forEach((item) => {
    list.append(item);
  });
}

function getEmployees(list) {
  const items = Array.from(list.children);

  return items.map((item) => {
    return {
      salary: Number(item.dataset.salary),
      age: Number(item.dataset.age),
      name: item.dataset.name,
      position: item.dataset.position,
    };
  });
}

sortList(listElement);

getEmployees(listElement);
