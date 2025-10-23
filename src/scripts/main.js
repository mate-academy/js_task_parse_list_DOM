'use strict';

const listOfEmployees = document.querySelectorAll('li');
const parents = document.querySelector('ul');

function sortList([...list]) {
  const sorted = list.sort(
    (curr, next) =>
      toNumber(next.dataset.salary) - toNumber(curr.dataset.salary),
  );

  sorted.forEach((item) => parents.appendChild(item));
}

function toNumber(notNumber) {
  const number = notNumber.replace(/[^ 0-9.-]/g, '');

  return +number;
}

function getEmployees([...list]) {
  const listObj = [];

  for (const item of list) {
    const name = item.innerText.trim();
    const salary = item.dataset.salary;
    const age = +item.dataset.age;
    const position = item.dataset.position;

    listObj.push({
      name,
      position,
      salary,
      age,
    });
  }

  return listObj;
}

sortList(listOfEmployees);

getEmployees(listOfEmployees);
