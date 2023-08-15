'use strict';

function makeNumber(item) {
  return Number(item.dataset.salary.replace(/\$|,/g, ''));
}

function sortList(list) {
  const listElement = document.querySelectorAll(list);
  const items = [...listElement];

  items.sort((a, b) => makeNumber(b) - makeNumber(a));

  const ulElement = items[0].parentNode;

  ulElement.innerHTML = '';
  ulElement.append(...items);
}

function getEmployees(listProperty) {
  const list = document.querySelectorAll(listProperty);

  const employees = [...list].map((item) => {
    return {
      name: item.textContent.trim(),
      position: item.dataset.position,
      salary: makeNumber(item),
      age: Number(item.dataset.age),
    };
  });

  return employees;
}

sortList('li');

getEmployees('li');
