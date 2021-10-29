'use strict';

function getNumber(string) {
  return Number(string.replace('$', '').replace(',', ''));
}

function getEmployees(elementList) {
  const list = [...liElements].map(el =>
    ({
      name: el.innerText,
      position: el.dataset.position,
      salary: getNumber(el.dataset.salary),
      age: el.dataset.age,
    }));

  return list;
}

function sortList(elementList) {
  const list = document.querySelector('ul');

  const sorted = [...liElements].sort((a, b) =>
    getNumber(b.dataset.salary) - getNumber(a.dataset.salary));

  for (const item of sorted) {
    list.append(item);
  }

  return list;
}

const liElements = document.querySelector('li');

sortList(liElements);
getEmployees(liElements);
