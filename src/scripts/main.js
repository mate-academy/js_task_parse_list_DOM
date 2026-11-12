'use strict';

const listElement = document.querySelector('ul');

function sortList(list) {
  const items = [...list.children];

  items.sort(
    (a, b) =>
      +b.dataset.salary.replaceAll('$', '').replaceAll(',', '') -
      +a.dataset.salary.replaceAll('$', '').replaceAll(',', ''),
  );

  list.append(...items);
}

sortList(listElement);

function getEmployees(list) {
  const items = [...list.children];

  const employees = items.map((element) => ({
    name: element.textContent.trim(),
    position: element.dataset.position,
    salary: +element.dataset.salary.replaceAll('$', '').replaceAll(',', ''),
    age: +element.dataset.age,
  }));

  return employees;
}

getEmployees(listElement);
