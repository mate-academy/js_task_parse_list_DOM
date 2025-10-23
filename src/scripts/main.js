'use strict';

const listOfEmployees = document.querySelectorAll('li');
const parents = document.querySelector('ul');

function sortList([...list]) {
  return list.sort(
    (curr, next) =>
      toNumber(next.dataset.salary) - toNumber(curr.dataset.salary),
  );
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

const sortedList = sortList(listOfEmployees);

sortedList.forEach((item) => parents.appendChild(item));

getEmployees(listOfEmployees);
