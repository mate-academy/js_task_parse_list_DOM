'use strict';

const listItems = [...document.querySelectorAll('li')];
const listUl = document.querySelector('ul');

function sortList(list) {
  return list.sort(
    (a, b) => getNumber(b.dataset.salary) - getNumber(a.dataset.salary),
  );
}

function getNumber(str) {
  return Number(str.replace(/[^\d.-]/g, ''));
}

function getEmployees(list) {
  const result = [];

  list.forEach((el) =>
    result.push({
      name: el.innerText,
      position: el.dataset.position,
      salary: el.dataset.salary,
      age: el.dataset.age,
    }));

  return result;
}

getEmployees(listItems);

const sortedList = sortList(listItems);

for (const li of sortedList) {
  listUl.appendChild(li);
}
