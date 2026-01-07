'use strict';

const listOfEmpl = [...document.querySelectorAll('li')];

function sortList(list) {
  const ul = document.querySelector('ul');

  list.sort(
    (e1, e2) => toNumber(e2.dataset.salary) - toNumber(e1.dataset.salary),
  );

  for (const element of list) {
    ul.append(element);
  }

  return list;
}

function toNumber(string) {
  const num = string.slice(1);

  return Number(num.replaceAll(',', '.'));
}

function getEmployees(list) {
  const newList = [];

  for (const element of list) {
    newList.push({
      name: element.textContent,
      position: element.dataset.position,
      salary: toNumber(element.dataset.salary),
      age: Number(element.dataset.age),
    });
  }

  return newList;
}

getEmployees(sortList(listOfEmpl));
