'use strict';

function getNumber(string) {
  return Number(string.replace('$', '').replace(',', ''));
}

function getEmployees(elementList) {
  const list = [...elementList].map(el =>
    ({
      name: el.innerText,
      position: el.dataset.position,
      salary: getNumber(el.dataset.salary),
      age: el.dataset.age,
    }));

  return list;
}

function sortList(elementList) {
  const listUl = document.querySelector('ul');

  const sorted = [...elementList].sort((a, b) =>
    getNumber(b.dataset.salary) - getNumber(a.dataset.salary));

  for (const item of sorted) {
    listUl.append(item);
  }

  return listUl;
}

const liElements = document.querySelectorAll('li');

sortList(liElements);
getEmployees(liElements);
