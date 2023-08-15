'use strict';

const listElement = document.querySelectorAll('li');
const items = [...listElement];

function makeNumber(item) {
  return Number(item.dataset.salary.replace(/\$|,/g, ''));
}

function sortList(list) {
  list.sort((a, b) => makeNumber(b) - makeNumber(a));

  const ulElement = list[0].parentNode;

  ulElement.innerHTML = '';
  ulElement.append(...list);
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

sortList(items);

getEmployees('li');
