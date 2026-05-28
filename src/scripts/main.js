'use strict';

const list = [...document.querySelectorAll('li')];

function getSalary(li) {
  return Number(li.dataset.salary.slice(1).replaceAll(',', ''));
}

function sortList(items) {
  items.sort((a, b) => {
    return getSalary(b) - getSalary(a);
  });

  const ul = document.querySelector('ul');

  for (const item of items) {
    ul.append(item);
  }
}

function getEmployees(items) {
  return items.map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: getSalary(item),
      age: Number(item.dataset.age),
    };
  });
}

sortList(list);
getEmployees(list);
